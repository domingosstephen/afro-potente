-- Set Kiwify link and price for Coleção Vitalidade Suprema (bundle).
-- Run in: Supabase Dashboard > SQL Editor > New query > paste and run.
-- Change the price below if you use a different value.

update public.products
set
  payment_link_kiwify = 'https://pay.kiwify.com.br/ifuuLRQ',
  price_display = 'R$ 397,00',
  price_cents = 39700
where slug = 'colecao-vitalidade-suprema';
