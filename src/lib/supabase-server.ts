import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;

/**
 * Server-only Supabase client with service role key.
 * Use in API routes (webhooks, contato) to bypass RLS and insert orders/leads.
 * Returns null if env is not configured (e.g. first deploy).
 * Uses cache: 'no-store' so product/price/link updates in Supabase show immediately.
 */
export function createServerSupabase() {
  if (!supabaseUrl || !supabaseServiceRoleKey) {
    return null;
  }
  return createClient(supabaseUrl, supabaseServiceRoleKey, {
    global: {
      fetch: (url, init) => fetch(url, { ...init, cache: "no-store" }),
    },
  });
}
