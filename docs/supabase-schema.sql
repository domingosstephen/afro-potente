-- Run this in Supabase SQL Editor to create products, orders, and leads tables.
-- See: Supabase Dashboard > SQL Editor > New query > paste and run.

-- Products: catalog with PDF URL and payment link or Stripe price ID
create table if not exists public.products (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  slug text unique not null,
  description text,
  price_display text,
  price_cents integer,
  tag text,
  features jsonb default '[]',
  pdf_url text,
  payment_link text,
  payment_link_kiwify text,
  payment_link_mercadopago text,
  stripe_price_id text,
  is_bundle boolean default false,
  sort_order integer default 0,
  created_at timestamptz default now()
);

-- Orders: one row per successful payment
create table if not exists public.orders (
  id uuid primary key default gen_random_uuid(),
  email text not null,
  customer_name text,
  product_id uuid references public.products(id),
  product_slug text,
  amount_cents integer,
  payment_provider text not null check (payment_provider in ('stripe', 'mercadopago', 'kiwify')),
  external_id text,
  status text default 'paid',
  created_at timestamptz default now()
);

-- Leads: contact form submissions
create table if not exists public.leads (
  id uuid primary key default gen_random_uuid(),
  nome text not null,
  email text not null,
  objetivo text,
  preferencias jsonb default '[]',
  created_at timestamptz default now()
);

-- Optional: enable RLS and policies if you want to restrict access.
-- For server-side only access via service role, you can leave RLS disabled.
