import { createServerSupabase } from "@/lib/supabase-server";
import { PUBLIC_PDF_PRODUCTS } from "@/lib/products-from-public";
import { EbooksIndividuaisLanding } from "./EbooksIndividuaisLanding";
import type { EbookOfferProduct } from "./EbooksIndividuaisLanding";

export const dynamic = "force-dynamic";

type ProductRow = {
  id: string;
  name: string;
  slug: string;
  description: string | null;
  tag: string | null;
  features: string[];
  payment_link: string | null;
  payment_link_kiwify: string | null;
  payment_link_mercadopago: string | null;
  sort_order: number;
};

function getPaymentUrl(p: ProductRow): string | null {
  const k = p.payment_link_kiwify?.trim();
  const m = p.payment_link_mercadopago?.trim();
  const g = p.payment_link?.trim();
  if (m) return m;
  if (k) return k;
  if (g) return g;
  return null;
}

export default async function EbooksIndividuaisPage() {
  let products: ProductRow[] = [];

  try {
    const supabase = createServerSupabase();
    if (supabase) {
      const { data, error } = await supabase
        .from("products")
        .select("id, name, slug, description, tag, features, payment_link, payment_link_kiwify, payment_link_mercadopago, sort_order")
        .eq("is_bundle", false)
        .order("sort_order", { ascending: true });

      if (!error && data?.length) {
        products = data.map((row: Record<string, unknown>) => ({
          id: String(row.id),
          name: String(row.name ?? ""),
          slug: String(row.slug ?? ""),
          description: row.description != null ? String(row.description) : null,
          tag: row.tag != null ? String(row.tag) : null,
          features: Array.isArray(row.features) ? row.features as string[] : [],
          payment_link: row.payment_link != null ? String(row.payment_link) : null,
          payment_link_kiwify: row.payment_link_kiwify != null ? String(row.payment_link_kiwify) : null,
          payment_link_mercadopago: row.payment_link_mercadopago != null ? String(row.payment_link_mercadopago) : null,
          sort_order: Number(row.sort_order ?? 0),
        }));
      }
    }
  } catch (e) {
    console.error("Failed to fetch products for ebooks-individuais:", e);
  }

  if (products.length === 0) {
    const fallback = PUBLIC_PDF_PRODUCTS.filter((p) => !p.is_bundle);
    products = fallback.map((p) => ({
      id: p.id,
      name: p.name,
      slug: p.slug,
      description: p.description,
      tag: p.tag,
      features: Array.isArray(p.features) ? p.features : [],
      payment_link: p.payment_link,
      payment_link_kiwify: p.payment_link_kiwify,
      payment_link_mercadopago: p.payment_link_mercadopago,
      sort_order: p.sort_order,
    }));
  }

  const offerProducts: EbookOfferProduct[] = products.map((p) => ({
    id: p.id,
    name: p.name,
    description: p.description,
    tag: p.tag,
    features: p.features,
    paymentUrl: getPaymentUrl(p),
  }));

  return <EbooksIndividuaisLanding products={offerProducts} />;
}
