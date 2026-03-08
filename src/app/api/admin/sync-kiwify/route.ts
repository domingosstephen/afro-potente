import { NextResponse } from "next/server";
import { createServerSupabase } from "@/lib/supabase-server";
import {
  listKiwifyProducts,
  getKiwifyCheckoutUrl,
  isKiwifyConfigured,
  type KiwifyProduct,
} from "@/lib/kiwify-api";

function isAuthorized(req: Request): boolean {
  const secret = process.env.ADMIN_SECRET;
  if (!secret) return false;
  const auth = req.headers.get("authorization") ?? "";
  return auth === `Bearer ${secret}`;
}

/** Converts a product name into a URL-safe slug. */
function slugify(name: string): string {
  return name
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export type SyncResult = {
  success: boolean;
  updated: number;
  created: number;
  skipped: number;
  errors: string[];
  products: {
    kiwify_id: string;
    name: string;
    checkout_url: string | null;
    action: "updated" | "created" | "skipped" | "error";
  }[];
};

/**
 * POST /api/admin/sync-kiwify
 *
 * Fetches all products from Kiwify, then for each active product with a
 * checkout link:
 * - If a Supabase product matches by `kiwify_product_id` or name → updates
 *   `payment_link_kiwify` and `kiwify_product_id`.
 * - If no match is found → creates a new Supabase product row from Kiwify data.
 *
 * Requires Authorization: Bearer <ADMIN_SECRET> header.
 */
export async function POST(req: Request) {
  if (!isAuthorized(req)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const supabase = createServerSupabase();
  if (!supabase) {
    return NextResponse.json(
      { error: "Supabase not configured. Check SUPABASE_SERVICE_ROLE_KEY." },
      { status: 503 }
    );
  }

  if (!isKiwifyConfigured()) {
    return NextResponse.json(
      {
        error:
          "Kiwify not configured. Set KIWIFY_CLIENT_ID, KIWIFY_CLIENT_SECRET, and KIWIFY_ACCOUNT_ID.",
      },
      { status: 503 }
    );
  }

  let kiwifyProducts: KiwifyProduct[];
  try {
    kiwifyProducts = await listKiwifyProducts();
  } catch (err) {
    const msg = err instanceof Error ? err.message : String(err);
    return NextResponse.json(
      { error: `Failed to fetch Kiwify products: ${msg}` },
      { status: 502 }
    );
  }

  // Load all existing Supabase products once to avoid N+1 queries
  const { data: supabaseProducts, error: fetchError } = await supabase
    .from("products")
    .select("id, name, slug, kiwify_product_id, payment_link_kiwify");

  if (fetchError) {
    return NextResponse.json(
      { error: `Failed to fetch Supabase products: ${fetchError.message}` },
      { status: 500 }
    );
  }

  const result: SyncResult = {
    success: true,
    updated: 0,
    created: 0,
    skipped: 0,
    errors: [],
    products: [],
  };

  for (const kp of kiwifyProducts) {
    const checkoutUrl = getKiwifyCheckoutUrl(kp);

    if (kp.status !== "active" || !checkoutUrl) {
      result.skipped++;
      result.products.push({
        kiwify_id: kp.id,
        name: kp.name,
        checkout_url: null,
        action: "skipped",
      });
      continue;
    }

    // Match by kiwify_product_id first (most reliable), then by name
    const existing = (supabaseProducts ?? []).find(
      (p) =>
        p.kiwify_product_id === kp.id ||
        p.name.toLowerCase().trim() === kp.name.toLowerCase().trim()
    );

    if (existing) {
      const { error } = await supabase
        .from("products")
        .update({
          payment_link_kiwify: checkoutUrl,
          kiwify_product_id: kp.id,
        })
        .eq("id", existing.id);

      if (error) {
        result.errors.push(`Update "${kp.name}": ${error.message}`);
        result.products.push({
          kiwify_id: kp.id,
          name: kp.name,
          checkout_url: checkoutUrl,
          action: "error",
        });
      } else {
        result.updated++;
        result.products.push({
          kiwify_id: kp.id,
          name: kp.name,
          checkout_url: checkoutUrl,
          action: "updated",
        });
      }
    } else {
      // Build a base slug; if it conflicts, append a suffix
      const baseSlug = slugify(kp.name);
      const existing_slugs = (supabaseProducts ?? []).map((p) => p.slug);
      let slug = baseSlug;
      let suffix = 2;
      while (existing_slugs.includes(slug)) {
        slug = `${baseSlug}-${suffix++}`;
      }

      const priceCents = kp.price ?? null;
      const priceDisplay = priceCents
        ? `R$ ${(priceCents / 100).toFixed(2).replace(".", ",")}`
        : null;

      const { error } = await supabase.from("products").insert({
        name: kp.name,
        slug,
        price_cents: priceCents,
        price_display: priceDisplay,
        payment_link_kiwify: checkoutUrl,
        kiwify_product_id: kp.id,
        sort_order: 99,
        features: [],
      });

      if (error) {
        result.errors.push(`Create "${kp.name}": ${error.message}`);
        result.products.push({
          kiwify_id: kp.id,
          name: kp.name,
          checkout_url: checkoutUrl,
          action: "error",
        });
      } else {
        result.created++;
        result.products.push({
          kiwify_id: kp.id,
          name: kp.name,
          checkout_url: checkoutUrl,
          action: "created",
        });
      }
    }
  }

  if (result.errors.length > 0) result.success = false;

  return NextResponse.json(result);
}
