-- Migration: Add kiwify_product_id column to the products table.
-- Run this in: Supabase Dashboard > SQL Editor > New query > paste and run.
--
-- This column lets the Kiwify sync match products reliably by their Kiwify UUID,
-- even if the product name changes later.

alter table public.products
  add column if not exists kiwify_product_id text;

-- Optional: add a unique index so duplicate Kiwify IDs are rejected
create unique index if not exists products_kiwify_product_id_idx
  on public.products (kiwify_product_id)
  where kiwify_product_id is not null;
