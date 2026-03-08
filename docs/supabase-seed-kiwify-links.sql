-- Add/update products with Kiwify checkout links (manual insert).
-- Run in: Supabase Dashboard > SQL Editor > New query > paste and run.
--
-- If a product with the same slug already exists, only payment_link_kiwify (and name) is updated.
-- Otherwise a new product row is inserted.

insert into public.products (
  name,
  slug,
  description,
  price_display,
  price_cents,
  tag,
  features,
  pdf_url,
  payment_link_kiwify,
  is_bundle,
  sort_order
) values
(
  'Comunidade Afro Potente',
  'comunidade-afro-potente',
  'Acesso por um ano: atualizações mensais de pesquisa, novas receitas e a chance de pedir orientações personalizadas.',
  'R$ 497,00',
  49700,
  null,
  '["Atualizações mensais de pesquisa", "Novas receitas todo mês", "Pedir orientação personalizada"]'::jsonb,
  null,
  'https://pay.kiwify.com.br/G9tVjlc',
  false,
  10
),
(
  'Tônico de Fogo',
  'tonico-de-fogo',
  'O protocolo que aquece o corpo e acende a disposição. Receitas com especiarias que estimulam a circulação e despertam o calor interior.',
  'R$ 69,50',
  6950,
  'Vitalidade',
  '["Especiarias termogênicas", "Estímulo natural à circulação", "Preparo rápido e prático"]'::jsonb,
  '/Afro_Potente_Tonico_de_Fogo.pdf',
  'https://pay.kiwify.com.br/PPrjmyV',
  false,
  11
),
(
  'Infusão de Restauração',
  'infusao-de-restauracao',
  'Receitas ancestrais focadas em recuperação e renovação do corpo. Para quem busca restaurar a vitalidade de forma natural e consistente.',
  'R$ 69,50',
  6950,
  'Restauração',
  '["Foco em recuperação e renovação", "Infusões e misturas restauradoras", "Rotina de bem-estar completa"]'::jsonb,
  '/Afro_Potente_Infusao_da_Restauracao.pdf',
  'https://pay.kiwify.com.br/dx1RLgy',
  false,
  12
),
(
  'Elixir Guerreiro',
  'elixir-guerreiro',
  'Protocolo ancestral de força e energia para o homem que enfrenta o dia com determinação. Receitas que despertam o guerreiro interior.',
  'R$ 69,50',
  6950,
  'Força',
  '["Receitas para força e resistência", "Protocolo diário estruturado", "Ingredientes naturais de feira"]'::jsonb,
  '/Afro_Potente_Elixir_Guerreiro.pdf',
  'https://pay.kiwify.com.br/sj46T96',
  false,
  13
),
(
  'Estamina & Energia',
  'guia-estamina-energia',
  'Tudo sobre resistência, vigor e recuperação. Para quem exige mais do corpo no dia a dia.',
  'R$ 69,50',
  6950,
  'Vigor',
  '["Receitas para estamina", "Ritual de recuperação", "Hábitos que sustentam a energia"]'::jsonb,
  '/EBook%20Guia%20de%20estamina.pdf',
  'https://pay.kiwify.com.br/Hdidib9',
  false,
  14
)
on conflict (slug) do update set
  name = excluded.name,
  payment_link_kiwify = excluded.payment_link_kiwify,
  description = coalesce(excluded.description, products.description),
  price_display = coalesce(excluded.price_display, products.price_display),
  price_cents = coalesce(excluded.price_cents, products.price_cents),
  tag = coalesce(excluded.tag, products.tag),
  features = case when products.features = '[]'::jsonb or products.features is null then excluded.features else products.features end,
  pdf_url = coalesce(excluded.pdf_url, products.pdf_url);
