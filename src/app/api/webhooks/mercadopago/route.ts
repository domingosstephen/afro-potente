import { NextResponse } from "next/server";
import { createServerSupabase } from "@/lib/supabase-server";
import { sendOrderConfirmation } from "@/lib/resend";
import { getDeliveryPdfUrl } from "@/lib/pdf-delivery";

/**
 * Mercado Pago webhook.
 * Configure in Mercado Pago: Webhooks > URL = https://yourdomain.com/api/webhooks/mercadopago
 * Subscribe to: payment approved / payment created.
 *
 * Expected payload shapes (we try to extract email and product reference):
 * - Custom: { email, product_slug } or { email, product_id }
 * - Or MP style: { data: { id: "payment_id" } } – then you need to fetch payment via MP API
 *   and set external_reference to product slug or id when creating the payment.
 * For link-based checkout, configure your MP payment with external_reference = product slug
 * and ensure the notification includes payer email (we read from body if provided).
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

    const payer = body.payer as Record<string, unknown> | undefined;
    const email =
      typeof body.email === "string"
        ? body.email
        : payer && typeof payer.email === "string"
          ? (payer.email as string)
          : null;

    const productSlug =
      typeof body.product_slug === "string"
        ? body.product_slug
        : typeof body.external_reference === "string"
          ? body.external_reference
          : null;
    const productId =
      typeof body.product_id === "string" ? body.product_id : null;

    const amountCents =
      typeof body.transaction_amount === "number"
        ? Math.round(body.transaction_amount * 100)
        : typeof body.amount_cents === "number"
          ? body.amount_cents
          : 0;

    const externalId =
      typeof body.id === "string" || typeof body.id === "number"
        ? String(body.id)
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

    const productName = product?.name ?? "Guia";
    const pdfUrl = product?.pdf_url ?? null;

    const identification = payer?.identification as Record<string, unknown> | undefined;
    const cpf =
      identification && typeof identification.number === "string"
        ? identification.number
        : typeof (body as Record<string, unknown>).cpf === "string"
          ? (body as Record<string, string>).cpf
          : "";

    const { data: insertedOrder, error: insertError } = await supabase
      .from("orders")
      .insert({
        email,
        customer_name: payer && typeof payer.first_name === "string" ? String(payer.first_name) : null,
        product_id: product?.id,
        product_slug: product?.slug ?? productSlug,
        amount_cents: amountCents,
        payment_provider: "mercadopago",
        external_id: externalId,
        status: "paid",
      })
      .select("id")
      .single();

    if (insertError) {
      console.error("Mercado Pago webhook Supabase insert error:", insertError);
      return NextResponse.json({ error: "Failed to save order" }, { status: 500 });
    }

    const orderId = insertedOrder?.id ?? externalId ?? "unknown";
    const baseUrl = process.env.NEXT_PUBLIC_URL ?? "https://afropotente.com";
    const deliveryPdfUrl = await getDeliveryPdfUrl(
      pdfUrl,
      email,
      cpf,
      String(orderId),
      baseUrl
    );

    const sendResult = await sendOrderConfirmation({
      to: email,
      customerName: payer && typeof payer.first_name === "string" ? String(payer.first_name) : null,
      productName,
      pdfUrl: deliveryPdfUrl,
    });

    if (!sendResult.ok) {
      console.error("Mercado Pago webhook Resend error:", sendResult.error);
      return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
    }

    return NextResponse.json({ received: true });
  } catch (err) {
    console.error("Mercado Pago webhook error:", err);
    return NextResponse.json(
      { error: "Webhook Error" },
      { status: 500 }
    );
  }
}
