-- Add Kiwify and Mercado Pago link columns (run if your products table already exists).
-- Supabase Dashboard > SQL Editor > New query > paste and run.

alter table public.products
  add column if not exists payment_link_kiwify text,
  add column if not exists payment_link_mercadopago text;
