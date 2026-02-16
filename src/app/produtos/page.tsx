import Link from "next/link";
import { Zap, ArrowLeft, ShoppingBag, CheckCircle2, Star, ShieldCheck, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { createServerSupabase } from "@/lib/supabase-server";
import { PUBLIC_PDF_PRODUCTS } from "@/lib/products-from-public";

// Always fetch fresh product data from Supabase so price/payment link updates appear
export const dynamic = "force-dynamic";

export type ProductRow = {
  id: string;
  name: string;
  slug: string;
  description: string | null;
  price_display: string | null;
  price_cents: number | null;
  tag: string | null;
  features: string[];
  pdf_url: string | null;
  payment_link: string | null;
  payment_link_kiwify: string | null;
  payment_link_mercadopago: string | null;
  stripe_price_id: string | null;
  is_bundle: boolean;
  sort_order: number;
};

export default async function ProdutosPage() {
  let products: ProductRow[] = [];
  let bundle: ProductRow | null = null;

  try {
    const supabase = createServerSupabase();
    if (!supabase) {
      products = [];
      bundle = null;
    } else {
    const { data, error } = await supabase
      .from("products")
      .select("*")
      .order("sort_order", { ascending: true });

    if (error) throw error;

    const rows = (data ?? []) as ProductRow[];
    bundle = rows.find((p) => p.is_bundle) ?? null;
    products = rows.filter((p) => !p.is_bundle);

    // Normalize features to array
    products = products.map((p) => ({
      ...p,
      features: Array.isArray(p.features) ? p.features : [],
    }));
    if (bundle) {
      bundle = {
        ...bundle,
        features: Array.isArray(bundle.features) ? bundle.features : [],
      };
    }
    }
  } catch (e) {
    console.error("Failed to fetch products:", e);
  }

  // Fallback: use PDFs from /public when Supabase has no products
  if (products.length === 0 && !bundle) {
    const fromPublic = PUBLIC_PDF_PRODUCTS;
    bundle = fromPublic.find((p) => p.is_bundle) ?? null;
    products = fromPublic.filter((p) => !p.is_bundle);
  }

  const link = (p: ProductRow, key: "payment_link" | "payment_link_kiwify" | "payment_link_mercadopago") =>
    p[key] && p[key]!.trim() !== "" ? p[key]! : null;
  const hasAnyPaymentLink = (p: ProductRow) =>
    link(p, "payment_link_kiwify") != null || link(p, "payment_link_mercadopago") != null || link(p, "payment_link") != null;

  return (
    <div className="flex min-h-screen flex-col bg-[#050f05] text-white font-sans">
      <nav className="sticky top-0 z-50 w-full bg-[#050f05]/80 backdrop-blur-md border-b border-white/5">
        <div className="container mx-auto flex h-20 items-center justify-between px-6">
          <Link href="/" className="text-2xl font-black tracking-tighter flex items-center gap-2">
            <Zap className="fill-[#22c55e] text-[#22c55e] h-6 w-6" />
            AFRO POTENTE
          </Link>
          <div className="hidden md:flex items-center gap-6">
            <Link href="/guia-de-bem-estar" className="text-sm font-bold uppercase tracking-widest text-white/50 hover:text-white transition-colors">Guia</Link>
            <Link href="/contato" className="text-sm font-bold uppercase tracking-widest text-white/50 hover:text-white transition-colors">Contato</Link>
          </div>
        </div>
      </nav>

      <main className="flex-1 container mx-auto px-6 py-16">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#22c55e]/10 border border-[#22c55e]/20 text-[#22c55e] text-xs font-bold uppercase tracking-[0.2em] mb-6">
            <ShoppingBag className="h-4 w-4" />
            Loja Oficial
          </div>
          <h1 className="text-5xl lg:text-7xl font-black mb-6 uppercase tracking-tighter">
            Nossos <span className="text-[#22c55e]">Protocolos</span>
          </h1>
          <p className="text-xl text-white/40 max-w-2xl mx-auto font-medium leading-relaxed">
            Guias digitais baseados em ciência e sabedoria ancestral para transformar sua vitalidade.
          </p>
        </div>

        {/* Bundle section – from Supabase where is_bundle = true */}
        {bundle && (
          <div className="max-w-5xl mx-auto mb-24">
            <div className="relative overflow-hidden bg-gradient-to-br from-[#0a1a0a] to-[#050f05] border-2 border-[#22c55e]/30 rounded-[2rem] md:rounded-[2.5rem] p-6 md:p-12">
              <div className="absolute top-0 right-0 p-4 md:p-6 opacity-20 md:opacity-100">
                <Sparkles className="h-8 w-8 md:h-12 md:w-12 text-[#22c55e]" />
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
                <div className="text-center lg:text-left">
                  <div className="inline-block px-4 py-1 rounded-full bg-[#22c55e] text-[#050f05] text-[9px] md:text-[10px] font-black uppercase tracking-widest mb-4 md:mb-6">
                    Oferta Única
                  </div>
                  <h2 className="text-3xl md:text-4xl font-black mb-4 uppercase tracking-tighter">{bundle.name}</h2>
                  {bundle.description && (
                    <p className="text-[#22c55e] font-bold text-base md:text-lg mb-6 md:mb-8 italic leading-snug">
                      {bundle.description}
                    </p>
                  )}
                  <ul className="space-y-3 mb-8 text-left inline-block lg:block">
                    {bundle.features.length > 0
                      ? bundle.features.map((f, i) => (
                          <li key={i} className="flex items-center gap-3 text-white/70 font-medium text-sm md:text-base">
                            <CheckCircle2 className="h-4 w-4 md:h-5 md:w-5 text-[#22c55e] shrink-0" />
                            {f}
                          </li>
                        ))
                      : (
                        <>
                          <li className="flex items-center gap-3 text-white/70 font-medium text-sm md:text-base">
                            <CheckCircle2 className="h-4 w-4 md:h-5 md:w-5 text-[#22c55e] shrink-0" />
                            Todos os guias digitais inclusos
                          </li>
                          <li className="flex items-center gap-3 text-white/70 font-medium text-sm md:text-base">
                            <CheckCircle2 className="h-4 w-4 md:h-5 md:w-5 text-[#22c55e] shrink-0" />
                            Acesso imediato via PDF
                          </li>
                        </>
                      )}
                  </ul>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-2xl md:rounded-3xl p-6 md:p-8 text-center flex flex-col items-center">
                  <div className="text-4xl md:text-5xl font-black text-white mb-2">{bundle.price_display ?? "—"}</div>
                  {hasAnyPaymentLink(bundle) ? (
                    <div className="w-full space-y-3">
                      {link(bundle, "payment_link_kiwify") && (
                        <Button asChild className="w-full bg-[#22c55e] hover:bg-[#1ea34d] text-[#050f05] font-black h-14 md:h-14 rounded-xl text-xs md:text-base transition-all hover:scale-105 uppercase tracking-widest px-2">
                          <a href={link(bundle, "payment_link_kiwify")!} target="_blank" rel="noopener noreferrer">
                            Comprar com Kiwify
                          </a>
                        </Button>
                      )}
                      {link(bundle, "payment_link_mercadopago") && (
                        <Button asChild className="w-full bg-[#22c55e] hover:bg-[#1ea34d] text-[#050f05] font-black h-14 md:h-14 rounded-xl text-xs md:text-base transition-all hover:scale-105 uppercase tracking-widest px-2">
                          <a href={link(bundle, "payment_link_mercadopago")!} target="_blank" rel="noopener noreferrer">
                            Comprar com Mercado Pago
                          </a>
                        </Button>
                      )}
                      {!link(bundle, "payment_link_kiwify") && !link(bundle, "payment_link_mercadopago") && link(bundle, "payment_link") && (
                        <Button asChild className="w-full bg-[#22c55e] hover:bg-[#1ea34d] text-[#050f05] font-black h-16 md:h-16 rounded-xl text-xs md:text-lg transition-all hover:scale-105 uppercase tracking-widest px-2">
                          <a href={link(bundle, "payment_link")!} target="_blank" rel="noopener noreferrer">
                            Quero a Coleção Completa
                          </a>
                        </Button>
                      )}
                    </div>
                  ) : (
                    <Button disabled className="w-full bg-white/10 text-white/50 font-black h-16 rounded-xl uppercase tracking-widest">
                      Em breve
                    </Button>
                  )}
                  <div className="mt-6 flex flex-col items-center gap-2">
                    <p className="text-[11px] md:text-xs text-white/50 uppercase font-black tracking-widest flex items-center justify-center gap-2">
                      <ShieldCheck className="h-4 w-4 text-[#22c55e]" /> Pagamento Seguro
                    </p>
                    <p className="text-[10px] md:text-[11px] text-white/30 uppercase font-bold tracking-widest">
                    Kiwify · Mercado Pago
                  </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Individual products from Supabase */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-24">
          {products.length === 0 ? (
            <div className="md:col-span-2 text-center py-12 text-white/50 font-medium">
              Nenhum produto no momento. Em breve novidades.
            </div>
          ) : (
            products.map((product) => (
              <Card key={product.id} className="bg-[#0a1a0a] border-white/5 p-8 rounded-[2rem] flex flex-col hover:border-[#22c55e]/20 transition-colors group">
                <div className="flex justify-between items-start mb-6">
                  <div className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-black uppercase tracking-widest text-[#22c55e]">
                    {product.tag ?? "Produto"}
                  </div>
                  <div className="flex text-[#22c55e]">
                    <Star className="h-4 w-4 fill-current" />
                    <Star className="h-4 w-4 fill-current" />
                    <Star className="h-4 w-4 fill-current" />
                    <Star className="h-4 w-4 fill-current" />
                    <Star className="h-4 w-4 fill-current" />
                  </div>
                </div>
                <h3 className="text-2xl font-black mb-4 uppercase tracking-tighter group-hover:text-[#22c55e] transition-colors">{product.name}</h3>
                <p className="text-white/50 text-sm leading-relaxed mb-8 flex-1">
                  {product.description ?? ""}
                </p>
                <ul className="space-y-3 mb-8">
                  {product.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-xs font-bold text-white/70 uppercase tracking-wide">
                      <CheckCircle2 className="h-4 w-4 text-[#22c55e]/50" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-col gap-3 mt-auto pt-6 border-t border-white/5">
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-black">{product.price_display ?? "—"}</span>
                    {!hasAnyPaymentLink(product) && (
                      <Button disabled className="bg-white/5 text-white/40 border border-white/10 font-bold rounded-xl">
                        Em breve
                      </Button>
                    )}
                  </div>
                  {hasAnyPaymentLink(product) && (
                    <div className="flex flex-wrap gap-2">
                      {link(product, "payment_link_kiwify") && (
                        <Button asChild size="sm" className="bg-white/5 hover:bg-[#22c55e] text-white hover:text-[#050f05] border border-white/10 hover:border-[#22c55e] font-bold rounded-xl transition-all flex-1 min-w-0">
                          <a href={link(product, "payment_link_kiwify")!} target="_blank" rel="noopener noreferrer">
                            Kiwify
                          </a>
                        </Button>
                      )}
                      {link(product, "payment_link_mercadopago") && (
                        <Button asChild size="sm" className="bg-white/5 hover:bg-[#22c55e] text-white hover:text-[#050f05] border border-white/10 hover:border-[#22c55e] font-bold rounded-xl transition-all flex-1 min-w-0">
                          <a href={link(product, "payment_link_mercadopago")!} target="_blank" rel="noopener noreferrer">
                            Mercado Pago
                          </a>
                        </Button>
                      )}
                      {!link(product, "payment_link_kiwify") && !link(product, "payment_link_mercadopago") && link(product, "payment_link") && (
                        <Button asChild className="bg-white/5 hover:bg-[#22c55e] text-white hover:text-[#050f05] border border-white/10 hover:border-[#22c55e] font-bold rounded-xl transition-all">
                          <a href={link(product, "payment_link")!} target="_blank" rel="noopener noreferrer">
                            Comprar
                          </a>
                        </Button>
                      )}
                    </div>
                  )}
                </div>
              </Card>
            ))
          )}
        </div>

        <div className="text-center">
          <Button asChild variant="ghost" className="text-white/40 hover:text-white hover:bg-white/5 rounded-xl">
            <Link href="/"><ArrowLeft className="mr-2 h-4 w-4" /> Voltar para a Home</Link>
          </Button>
        </div>
      </main>

      <footer className="py-12 border-t border-white/5 text-center">
        <p className="text-[10px] text-white/20 font-bold uppercase tracking-[0.2em]">© 2026 Afro Potente • Conteúdo Digital</p>
      </footer>
    </div>
  );
}
