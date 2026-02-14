import { NextResponse } from "next/server";
import Stripe from "stripe";
import { z } from "zod";

const bodySchema = z.object({
  productId: z.string().uuid(),
  productName: z.string().min(1).max(500),
  priceCents: z.number().int().positive().optional(),
  stripePriceId: z.string().min(1).max(500).optional(),
}).refine(
  (data) => data.stripePriceId != null || (data.priceCents != null && data.priceCents > 0),
  { message: "Provide either stripePriceId or priceCents" }
);

export async function POST(req: Request) {
  const stripeSecret = process.env.STRIPE_SECRET_KEY;
  const baseUrl = process.env.NEXT_PUBLIC_URL;

  if (!stripeSecret || !baseUrl) {
    return NextResponse.json(
      { error: "Checkout is not configured. Missing STRIPE_SECRET_KEY or NEXT_PUBLIC_URL." },
      { status: 503 }
    );
  }

  try {
    const raw = await req.json();
    const parsed = bodySchema.safeParse(raw);
    if (!parsed.success) {
      return NextResponse.json(
        { error: parsed.error.message ?? "Invalid request" },
        { status: 400 }
      );
    }
    const { productId, productName, priceCents, stripePriceId } = parsed.data;

    const stripe = new Stripe(stripeSecret, {
      apiVersion: "2024-04-10" as any,
    });

    const lineItem: Stripe.Checkout.SessionCreateParams.LineItem = stripePriceId
      ? { price: stripePriceId, quantity: 1 }
      : {
          price_data: {
            currency: "brl",
            product_data: { name: productName },
            unit_amount: priceCents!,
          },
          quantity: 1,
        };

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card", "boleto"],
      line_items: [lineItem],
      mode: "payment",
      success_url: `${baseUrl}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${baseUrl}/produtos`,
      metadata: {
        product_id: productId,
        product_name: productName,
      },
    });

    return NextResponse.json({ url: session.url });
  } catch (error) {
    console.error("Stripe Error:", error);
    return NextResponse.json(
      { error: "Error creating checkout session" },
      { status: 500 }
    );
  }
}
