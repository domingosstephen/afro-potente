import { NextResponse } from "next/server";
import Stripe from "stripe";
import { createServerSupabase } from "@/lib/supabase-server";
import { sendOrderConfirmation } from "@/lib/resend";

const stripeSecret = process.env.STRIPE_SECRET_KEY;
const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

export async function POST(req: Request) {
  if (!webhookSecret || !stripeSecret) {
    return NextResponse.json(
      { error: "Webhook not configured. Missing STRIPE_WEBHOOK_SECRET or STRIPE_SECRET_KEY." },
      { status: 503 }
    );
  }

  try {
    const body = await req.text();
    const signature = req.headers.get("stripe-signature");
    if (!signature) {
      return NextResponse.json({ error: "Missing stripe-signature header" }, { status: 400 });
    }

    const stripe = new Stripe(stripeSecret, { apiVersion: "2024-04-10" as any });
    let event: Stripe.Event;
    try {
      event = stripe.webhooks.constructEvent(body, signature, webhookSecret);
    } catch (err) {
      console.error("Stripe webhook signature verification failed:", err);
      return NextResponse.json({ error: "Invalid signature" }, { status: 400 });
    }

    if (event.type !== "checkout.session.completed") {
      return NextResponse.json({ received: true });
    }

    const session = event.data.object as Stripe.Checkout.Session;
    const sessionId = session.id;
    const customerEmail = session.customer_email ?? session.customer_details?.email;
    if (!customerEmail) {
      console.error("No customer email in session", sessionId);
      return NextResponse.json({ error: "No email" }, { status: 500 });
    }

    const productId = session.metadata?.product_id ?? null;
    const productName = session.metadata?.product_name ?? session.metadata?.product_name ?? "Guia";

    const fullSession = await stripe.checkout.sessions.retrieve(sessionId, {
      expand: ["line_items"],
    });
    const amountTotal = fullSession.amount_total ?? 0;
    const customerName = fullSession.customer_details?.name ?? null;

    const supabase = createServerSupabase();
    if (!supabase) {
      return NextResponse.json({ error: "Supabase not configured." }, { status: 503 });
    }

    let productSlug: string | null = null;
    let pdfUrl: string | null = null;

    if (productId) {
      const { data: product } = await supabase
        .from("products")
        .select("slug, pdf_url")
        .eq("id", productId)
        .single();
      if (product) {
        productSlug = product.slug ?? null;
        pdfUrl = product.pdf_url ?? null;
      }
    }

    const { error: insertError } = await supabase.from("orders").insert({
      email: customerEmail,
      customer_name: customerName,
      product_id: productId || undefined,
      product_slug: productSlug,
      amount_cents: amountTotal,
      payment_provider: "stripe",
      external_id: sessionId,
      status: "paid",
    });

    if (insertError) {
      console.error("Supabase orders insert error:", insertError);
      return NextResponse.json({ error: "Failed to save order" }, { status: 500 });
    }

    const sendResult = await sendOrderConfirmation({
      to: customerEmail,
      customerName,
      productName,
      pdfUrl,
    });

    if (!sendResult.ok) {
      console.error("Resend order email failed:", sendResult.error);
      return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
    }

    return NextResponse.json({ received: true });
  } catch (err) {
    console.error("Stripe webhook error:", err);
    return NextResponse.json(
      { error: "Webhook Error" },
      { status: 500 }
    );
  }
}
