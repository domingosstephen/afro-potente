import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.text();
    // Logic for Stripe Signature verification will go here
    console.log("Stripe webhook received");
    
    return NextResponse.json({ received: true });
  } catch (err) {
    return NextResponse.json(
      { error: "Webhook Error" },
      { status: 400 }
    );
  }
}