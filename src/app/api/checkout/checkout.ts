// src/app/api/checkout/route.ts
import { NextResponse } from "next/server";
import Stripe from "stripe";

// Initialize Stripe with your Secret Key (from .env.local)
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2024-04-10" as any, // Use latest API version compatible with installed types
});

export async function POST(req: Request) {
  try {
    const { priceId, productName } = await req.json();

    // 1. Create a Stripe Checkout Session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card", "boleto"], // Add 'pix' here if your Stripe account has it enabled
      line_items: [
        {
          price_data: {
            currency: "brl",
            product_data: {
              name: productName,
            },
            unit_amount: priceId, // Price in centavos (e.g., 9700 for R$97.00)
          },
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: `${process.env.NEXT_PUBLIC_URL}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_URL}/produtos`,
    });

    // 2. Return the checkout URL to the frontend
    return NextResponse.json({ url: session.url });
    
  } catch (error) {
    console.error("Stripe Error:", error);
    return NextResponse.json(
      { error: "Error creating checkout session" },
      { status: 500 }
    );
  }
}