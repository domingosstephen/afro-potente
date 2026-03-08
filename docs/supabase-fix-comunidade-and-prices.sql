-- Fix Comunidade duplicate and add missing prices.
-- Run in: Supabase Dashboard > SQL Editor > New query > paste and run.
--
-- 1. Delete the "Comunidade" product that has description but NO Kiwify link (duplicate card).
-- 2. Update the Comunidade product that HAS the link with full copy and R$497.
-- 3. Add prices R$69,50 to Protocolo Vitalidade Casais, Ação Rápida 7 Dias, Estamina & Energia.

-- Step 1: Remove duplicate Comunidade card (the one with description but no checkout link)
delete from public.products
where payment_link_kiwify is null
  and name ilike '%comunidade%'
  and name ilike '%afro%';

-- Step 2: Update Comunidade Afro Potente (the one with the link) with full copy and price
update public.products
set
  description = 'Acesso por um ano: atualizações mensais de pesquisa, novas receitas e a chance de pedir orientações personalizadas.',
  features = '["Atualizações mensais de pesquisa", "Novas receitas todo mês", "Pedir orientação personalizada"]'::jsonb,
  price_display = 'R$ 497,00',
  price_cents = 49700
where slug = 'comunidade-afro-potente';

-- Step 3: Add prices to products that have links but no price
update public.products
set price_display = 'R$ 69,50', price_cents = 6950
where slug = 'protocolo-vitalidade-casais';

update public.products
set price_display = 'R$ 69,50', price_cents = 6950
where slug = 'acao-rapida-7-dias';

update public.products
set price_display = 'R$ 69,50', price_cents = 6950
where slug = 'guia-estamina-energia';
