# Webhooks

## Stripe

- **URL:** `https://yourdomain.com/api/webhooks/stripe`
- **Events:** `checkout.session.completed`
- **Env:** `STRIPE_WEBHOOK_SECRET` (signing secret from Stripe Dashboard > Webhooks)

Stripe sends the full session; we read `customer_email`, `metadata.product_id`, then look up the product in Supabase for `pdf_url` and send the order confirmation email.

## Mercado Pago

- **URL:** `https://yourdomain.com/api/webhooks/mercadopago`
- **Configure:** Mercado Pago Dashboard > Webhooks > Configure notifications
- **Events:** payment approved / payment created

We accept payloads that include:
- `email` or `payer.email`
- `product_slug` or `external_reference` (set this to your product slug when creating the payment/link so we can find the PDF)

If your MP integration sends only `data.id`, you would need to fetch the payment server-side with your MP access token and then process; the current handler expects email and product reference in the body or in a format it can parse.

## Kiwify

- **URL:** `https://yourdomain.com/api/webhooks/kiwify`
- **Configure:** Kiwify > Apps > Webhooks
- **Events:** order paid / order approved

We read `customer_email` (or `order.customer_email`, `customer.email`) and `product_slug` / `product_id` / `order.product_slug` / `external_reference` to find the product and send the PDF link. Set the product slug or ID in your Kiwify product or order so the webhook payload includes it.
