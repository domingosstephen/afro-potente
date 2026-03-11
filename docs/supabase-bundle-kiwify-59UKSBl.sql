-- Bundle product for /ebooks landing: pay.kiwify.com.br/59UKSBl
-- When a customer pays this product, the Kiwify webhook delivers ALL ebooks (all products with pdf_url and is_bundle = false).
--
-- Run in Supabase Dashboard > SQL Editor > New query > paste and run.

-- Ensure the bundle product exists and is wired to the Kiwify checkout 59UKSBl.
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
  is_bundle,
  sort_order
) values (
  'Guia Completo Afro Potente',
  'guia-completo-afro-potente',
  'Acesso completo a todos os guias: vitalidade, energia, conexão e bem-estar. Remédios caseiros e receitas ancestrais para solteiros e casais.',
  'R$ 147,17',
  14717,
  'Oferta Única',
  '["Todos os ebooks inclusos", "Para solteiros e casais", "Acesso imediato por e-mail"]'::jsonb,
  null,
  null,
  'https://pay.kiwify.com.br/59UKSBl',
  null,
  true,
  0
)
on conflict (slug) do update set
  name = excluded.name,
  description = excluded.description,
  price_display = excluded.price_display,
  price_cents = excluded.price_cents,
  tag = excluded.tag,
  features = excluded.features,
  payment_link_kiwify = excluded.payment_link_kiwify,
  is_bundle = true,
  sort_order = excluded.sort_order;

-- Optional: if you already have a bundle with a different slug (e.g. colecao-vitalidade-suprema)
-- and want THAT row to use the 59UKSBl link instead, run this instead of the insert above:
--
-- update public.products
-- set
--   payment_link_kiwify = 'https://pay.kiwify.com.br/59UKSBl',
--   is_bundle = true
-- where slug = 'colecao-vitalidade-suprema';

-- After running: in Kiwify, set the webhook URL to https://yourdomain.com/api/webhooks/kiwify
-- and subscribe to "order paid" / "order approved". Optionally run Admin > Sync Kiwify
-- so kiwify_product_id is set for this product and the webhook can match by Kiwify product ID too.
