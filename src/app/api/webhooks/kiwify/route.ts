import { NextResponse } from "next/server";
import { createServerSupabase } from "@/lib/supabase-server";
import { sendOrderConfirmation } from "@/lib/resend";

/**
 * Kiwify webhook.
 * Configure in Kiwify: Apps > Webhooks > URL = https://yourdomain.com/api/webhooks/kiwify
 * Subscribe to: order paid / order approved.
 *
 * We try to read email and product reference from common payload shapes:
 * - customer_email, order.customer_email, customer.email
 * - product_slug, product_id, product.slug, order.product_slug, external_reference
 */
export async function POST(req: Request) {
  if (!process.env.RESEND_API_KEY) {
    return NextResponse.json(
      { error: "Webhook not configured. Missing RESEND_API_KEY." },
      { status: 503 }
    );
  }

  try {
    const body = await req.json() as Record<string, unknown>;
    const order = (body.order ?? body) as Record<string, unknown>;
    const customer = (order.customer ?? body.customer ?? body) as Record<string, unknown>;

    const email =
      typeof body.email === "string"
        ? body.email
        : typeof order.customer_email === "string"
          ? order.customer_email
          : typeof customer.email === "string"
            ? customer.email
            : null;

    const productSlug =
      typeof body.product_slug === "string"
        ? body.product_slug
        : typeof order.product_slug === "string"
          ? order.product_slug
          : typeof (order.product as Record<string, unknown>)?.slug === "string"
            ? (order.product as Record<string, string>).slug
            : typeof body.external_reference === "string"
              ? body.external_reference
              : null;
    const productId =
      typeof body.product_id === "string"
        ? body.product_id
        : typeof order.product_id === "string"
          ? order.product_id
          : null;

    const amountCents =
      typeof order.total === "number"
        ? Math.round(order.total * 100)
        : typeof body.amount_cents === "number"
          ? body.amount_cents
          : 0;

    const externalId =
      typeof order.id === "string" || typeof order.id === "number"
        ? String(order.id)
        : typeof body.order_id === "string"
          ? body.order_id
          : null;

    if (!email) {
      return NextResponse.json(
        { error: "Could not determine customer email from payload" },
        { status: 400 }
      );
    }

    const supabase = createServerSupabase();
    if (!supabase) {
      return NextResponse.json({ error: "Supabase not configured." }, { status: 503 });
    }
    type ProductRow = { id: string; name: string; pdf_url: string | null; slug: string };
    let product: ProductRow | null = null;

    if (productId) {
      const { data } = await supabase
        .from("products")
        .select("id, name, pdf_url, slug")
        .eq("id", productId)
        .single();
      product = data as ProductRow | null;
    }
    if (!product && productSlug) {
      const { data } = await supabase
        .from("products")
        .select("id, name, pdf_url, slug")
        .eq("slug", productSlug)
        .single();
      product = data as ProductRow | null;
    }

    const orderProduct = order.product as Record<string, unknown> | undefined;
    const productName =
      product?.name ??
      (typeof orderProduct?.name === "string" ? String(orderProduct.name) : "Guia");
    const pdfUrl = product?.pdf_url ?? null;

    const customerName =
      typeof customer.name === "string"
        ? customer.name
        : typeof order.customer_name === "string"
          ? order.customer_name
          : null;

    const { error: insertError } = await supabase.from("orders").insert({
      email,
      customer_name: customerName,
      product_id: product?.id,
      product_slug: product?.slug ?? productSlug,
      amount_cents: amountCents,
      payment_provider: "kiwify",
      external_id: externalId,
      status: "paid",
    });

    if (insertError) {
      console.error("Kiwify webhook Supabase insert error:", insertError);
      return NextResponse.json({ error: "Failed to save order" }, { status: 500 });
    }

    const sendResult = await sendOrderConfirmation({
      to: email,
      customerName: customerName,
      productName,
      pdfUrl,
    });

    if (!sendResult.ok) {
      console.error("Kiwify webhook Resend error:", sendResult.error);
      return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
    }

    return NextResponse.json({ received: true });
  } catch (err) {
    console.error("Kiwify webhook error:", err);
    return NextResponse.json(
      { error: "Webhook Error" },
      { status: 500 }
    );
  }
}
