import { NextResponse } from "next/server";
import { createServerSupabase } from "@/lib/supabase-server";

/**
 * GET /api/supabase-status
 * Use this to verify Supabase is configured and products are loading.
 * Returns configured: true/false and productsCount (number of rows in products table).
 */
export async function GET() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!supabaseUrl || !serviceKey) {
    return NextResponse.json({
      configured: false,
      message: "Missing NEXT_PUBLIC_SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY in this environment.",
      productsCount: 0,
    });
  }

  try {
    const supabase = createServerSupabase();
    if (!supabase) {
      return NextResponse.json({
        configured: false,
        message: "Supabase client could not be created.",
        productsCount: 0,
      });
    }

    const { count, error } = await supabase
      .from("products")
      .select("*", { count: "exact", head: true });

    if (error) {
      return NextResponse.json({
        configured: true,
        message: `Supabase error: ${error.message}`,
        productsCount: 0,
      });
    }

    return NextResponse.json({
      configured: true,
      message: "OK",
      productsCount: count ?? 0,
    });
  } catch (e) {
    return NextResponse.json({
      configured: true,
      message: String(e),
      productsCount: 0,
    });
  }
}
