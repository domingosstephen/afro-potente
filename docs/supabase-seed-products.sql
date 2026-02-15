-- Seed products from /public PDFs. Run after supabase-schema.sql.
-- Supabase Dashboard > SQL Editor > New query > paste and run.
-- Then edit each row in Table Editor to add price_display, price_cents, and either payment_link (Mercado Pago/Kiwify URL) or stripe_price_id.

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
  stripe_price_id,
  is_bundle,
  sort_order
) values
(
  'Coleção Vitalidade Suprema',
  'colecao-vitalidade-suprema',
  'Toda a ciência e todas as receitas por um preço único. Acesso completo aos protocolos de vitalidade.',
  null,
  null,
  'Oferta Única',
  '["Todos os guias digitais inclusos", "BÔNUS: Guia de Compras Afrodisíacas", "Acesso imediato via PDF"]'::jsonb,
  '/Full%20EBook.pdf',
  null,
  null,
  true,
  0
),
(
  'Protocolo Vitalidade Casais',
  'protocolo-vitalidade-casais',
  'Conteúdo pensado para casais que buscam reconectar e reacender a chama com naturalidade e respeito.',
  null,
  null,
  'Conexão',
  '["Práticas para dois", "Receitas e rituais compartilhados", "Foco em intimidade e bem-estar"]'::jsonb,
  '/EBook%20para%20casais.pdf',
  null,
  null,
  false,
  1
),
(
  'Ação Rápida — Resultados em 7 Dias',
  'acao-rapida-7-dias',
  'O protocolo para quem não quer esperar: mudanças práticas e visíveis em uma semana.',
  null,
  null,
  'Resultados',
  '["Protocolo de 7 dias", "Passo a passo diário", "Foco em energia e disposição"]'::jsonb,
  '/EBook%20A%C3%A7%C3%A3o%20rapida.pdf',
  null,
  null,
  false,
  2
),
(
  'Estamina & Energia: O Guia Definitivo',
  'guia-estamina-energia',
  'Tudo sobre resistência, vigor e recuperação. Para quem exige mais do corpo no dia a dia.',
  null,
  null,
  'Vigor',
  '["Receitas para estamina", "Ritual de recuperação", "Hábitos que sustentam a energia"]'::jsonb,
  '/EBook%20Guia%20de%20estamina.pdf',
  null,
  null,
  false,
  3
)
on conflict (slug) do nothing;

-- After running: go to Table Editor > products and fill in for each row:
-- - price_display  e.g. "R$ 97,00"
-- - price_cents    e.g. 9700 (for Stripe)
-- - payment_link   Mercado Pago or Kiwify checkout URL, OR
-- - stripe_price_id  Stripe Price ID (e.g. price_xxx)
