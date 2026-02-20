import { NextResponse } from "next/server";
import Stripe from "stripe";

export const runtime = "nodejs";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
  apiVersion: "2026-01-28.clover",
});

type CartItem = {
  product: string;
  variant: string;
  unitPrice: number; // NZD dollars
  qty: number;
};

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const items: CartItem[] = Array.isArray(body?.items) ? body.items : [];

    if (!process.env.STRIPE_SECRET_KEY) {
      return NextResponse.json({ error: "Missing STRIPE_SECRET_KEY" }, { status: 500 });
    }

    if (items.length === 0) {
      return NextResponse.json({ error: "Cart is empty" }, { status: 400 });
    }

    const origin = req.headers.get("origin") || "http://localhost:3000";

    const line_items: Stripe.Checkout.SessionCreateParams.LineItem[] = items.map((i) => ({
      quantity: i.qty,
      price_data: {
        currency: "nzd",
        unit_amount: Math.round(i.unitPrice * 100), // cents
        product_data: {
          name: `${i.product} — ${i.variant}`,
        },
      },
    }));

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      line_items,
      success_url: `${origin}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/sweet-treats`,
      // NOTE: Afterpay appears automatically if enabled in Stripe + supported currency.
      // If you haven't enabled Afterpay/Clearpay in Stripe payment methods, it won't show.
    });

    return NextResponse.json({ url: session.url });
  } catch (err: any) {
    console.error("STRIPE CHECKOUT ERROR:", err);
    return NextResponse.json(
      { error: err?.message || "Stripe error" },
      { status: 500 }
    );
  }
}