-- Add the Community (Comunidade) product so the /comunidade page shows price and payment buttons.
-- Run after supabase-schema.sql (and supabase-migration-payment-links.sql if you have an existing products table).
-- Then in Table Editor > products, edit the row with slug "comunidade":
--   - price_display   e.g. "R$ 97,00/ano"
--   - payment_link_kiwify       Kiwify checkout URL for annual community
--   - payment_link_mercadopago  Mercado Pago checkout URL for annual community
--   - pdf_url can be null (or a welcome PDF if you send one after payment).

insert into public.products (
  name,
  slug,
  description,
  price_display,
  price_cents,
  tag,
  features,
  pdf_url,
  payment_link,
  payment_link_kiwify,
  payment_link_mercadopago,
  stripe_price_id,
  is_bundle,
  sort_order
) values (
  'Comunidade Afro Potente',
  'comunidade',
  'Acesso por um ano: atualizações mensais de pesquisa, novas receitas e a chance de pedir orientações personalizadas.',
  null,
  null,
  'Comunidade',
  '["Atualizações mensais de pesquisa", "Novas receitas todo mês", "Pedir orientação personalizada"]'::jsonb,
  null,
  null,
  null,
  null,
  null,
  false,
  100
)
on conflict (slug) do nothing;
