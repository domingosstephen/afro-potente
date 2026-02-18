import Link from "next/link";
import { ArrowLeft, CheckCircle2, Star, ShieldCheck, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { createServerSupabase } from "@/lib/supabase-server";
import { PUBLIC_PDF_PRODUCTS } from "@/lib/products-from-public";

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

  let usedFallback = false;
  if (products.length === 0 && !bundle) {
    const fromPublic = PUBLIC_PDF_PRODUCTS;
    bundle = fromPublic.find((p) => p.is_bundle) ?? null;
    products = fromPublic.filter((p) => !p.is_bundle);
    usedFallback = true;
  }

  const link = (p: ProductRow, key: "payment_link" | "payment_link_kiwify" | "payment_link_mercadopago") =>
    p[key] && p[key]!.trim() !== "" ? p[key]! : null;
  const hasAnyPaymentLink = (p: ProductRow) =>
    link(p, "payment_link_kiwify") != null || link(p, "payment_link_mercadopago") != null || link(p, "payment_link") != null;

  return (
    <div className="flex min-h-screen flex-col bg-[#F5EDE0] font-sans">
      <Navbar />

      <main className="flex-1 pt-20">
        <div className="container mx-auto px-4 md:px-6 py-12 md:py-20">
          <div className="text-center mb-16">
            <h1 className="font-serif text-[#2B1A0E] mb-4">
              Nossos Protocolos Naturais
            </h1>
            <p className="text-lg text-[#2B1A0E]/60 max-w-2xl mx-auto leading-relaxed">
              Guias digitais baseados em sabedoria ancestral africana para transformar sua vitalidade.
            </p>
          </div>

          {/* Bundle section */}
          {bundle && (
            <div className="max-w-4xl mx-auto mb-16">
              <div className="relative overflow-hidden bg-[#2B1A0E] rounded-xl p-6 md:p-10">
                <div className="absolute top-4 right-4 opacity-20">
                  <Sparkles className="h-10 w-10 text-[#B94A2F]" />
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <span className="inline-block px-3 py-1 rounded-full bg-[#B94A2F] text-[#F5EDE0] text-xs font-semibold uppercase tracking-wider mb-4">
                      Colecao Completa
                    </span>
                    <h2 className="font-serif text-2xl md:text-3xl mb-4" style={{ color: '#F5EDE0' }}>{bundle.name}</h2>
                    {bundle.description && (
                      <p className="text-[#F5EDE0]/70 text-base mb-6 leading-relaxed max-w-none">
                        {bundle.description}
                      </p>
                    )}
                    <ul className="space-y-3 mb-6">
                      {bundle.features.length > 0
                        ? bundle.features.map((f, i) => (
                            <li key={i} className="flex items-center gap-3 text-[#F5EDE0]/80 text-sm">
                              <CheckCircle2 className="h-4 w-4 text-[#B94A2F] shrink-0" />
                              {f}
                            </li>
                          ))
                        : (
                          <>
                            <li className="flex items-center gap-3 text-[#F5EDE0]/80 text-sm">
                              <CheckCircle2 className="h-4 w-4 text-[#B94A2F] shrink-0" />
                              Todos os guias digitais inclusos
                            </li>
                            <li className="flex items-center gap-3 text-[#F5EDE0]/80 text-sm">
                              <CheckCircle2 className="h-4 w-4 text-[#B94A2F] shrink-0" />
                              Acesso imediato via PDF
                            </li>
                          </>
                        )}
                    </ul>
                  </div>
                  <div className="bg-[#F5EDE0]/10 border border-[#F5EDE0]/10 rounded-xl p-6 md:p-8 text-center">
                    <div className="text-3xl md:text-4xl font-serif mb-4" style={{ color: '#F5EDE0' }}>{bundle.price_display ?? "—"}</div>
                    {hasAnyPaymentLink(bundle) ? (
                      <div className="w-full space-y-3">
                        {link(bundle, "payment_link_kiwify") && (
                          <Button asChild className="w-full" size="lg">
                            <a href={link(bundle, "payment_link_kiwify")!} target="_blank" rel="noopener noreferrer">
                              Comprar com Kiwify
                            </a>
                          </Button>
                        )}
                        {link(bundle, "payment_link_mercadopago") && (
                          <Button asChild className="w-full" size="lg">
                            <a href={link(bundle, "payment_link_mercadopago")!} target="_blank" rel="noopener noreferrer">
                              Comprar com Mercado Pago
                            </a>
                          </Button>
                        )}
                        {!link(bundle, "payment_link_kiwify") && !link(bundle, "payment_link_mercadopago") && link(bundle, "payment_link") && (
                          <Button asChild className="w-full" size="lg">
                            <a href={link(bundle, "payment_link")!} target="_blank" rel="noopener noreferrer">
                              Quero a Colecao Completa
                            </a>
                          </Button>
                        )}
                      </div>
                    ) : (
                      <Button disabled className="w-full bg-[#F5EDE0]/10 text-[#F5EDE0]/50">
                        Em breve
                      </Button>
                    )}
                    <p className="text-xs text-[#F5EDE0]/40 mt-4 flex items-center justify-center gap-2">
                      <ShieldCheck className="h-4 w-4" /> Pagamento Seguro
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Individual products */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto mb-16">
            {products.length === 0 ? (
              <div className="md:col-span-2 text-center py-12 text-[#2B1A0E]/50">
                Nenhum produto no momento. Em breve novidades.
              </div>
            ) : (
              products.map((product) => (
                <Card key={product.id} className="p-6 md:p-8 flex flex-col">
                  <div className="flex justify-between items-start mb-4">
                    <span className="inline-block px-3 py-1 rounded-full bg-[#B94A2F]/10 text-[#B94A2F] text-xs font-semibold">
                      {product.tag ?? "Produto"}
                    </span>
                    <div className="flex">
                      {[1,2,3,4,5].map((s) => (
                        <Star key={s} className="h-3.5 w-3.5 fill-[#B94A2F] text-[#B94A2F]" />
                      ))}
                    </div>
                  </div>
                  <h3 className="font-serif text-xl text-[#2B1A0E] mb-3">{product.name}</h3>
                  <p className="text-[#2B1A0E]/60 text-sm leading-relaxed mb-6 flex-1 max-w-none">
                    {product.description ?? ""}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {product.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-[#2B1A0E]/70">
                        <CheckCircle2 className="h-4 w-4 text-[#B94A2F]/60 shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-col gap-3 mt-auto pt-4 border-t border-[#2B1A0E]/10">
                    <div className="flex items-center justify-between">
                      <span className="text-xl font-serif text-[#2B1A0E]">{product.price_display ?? "—"}</span>
                    </div>
                    {hasAnyPaymentLink(product) && (
                      <div className="flex flex-wrap gap-2">
                        {link(product, "payment_link_kiwify") && (
                          <Button asChild size="sm" className="flex-1 min-w-0">
                            <a href={link(product, "payment_link_kiwify")!} target="_blank" rel="noopener noreferrer">
                              Kiwify
                            </a>
                          </Button>
                        )}
                        {link(product, "payment_link_mercadopago") && (
                          <Button asChild size="sm" className="flex-1 min-w-0">
                            <a href={link(product, "payment_link_mercadopago")!} target="_blank" rel="noopener noreferrer">
                              Mercado Pago
                            </a>
                          </Button>
                        )}
                        {!link(product, "payment_link_kiwify") && !link(product, "payment_link_mercadopago") && link(product, "payment_link") && (
                          <Button asChild size="sm">
                            <a href={link(product, "payment_link")!} target="_blank" rel="noopener noreferrer">
                              Comprar
                            </a>
                          </Button>
                        )}
                      </div>
                    )}
                    {!hasAnyPaymentLink(product) && (
                      <Button disabled size="sm" className="bg-[#2B1A0E]/5 text-[#2B1A0E]/40">
                        Em breve
                      </Button>
                    )}
                  </div>
                </Card>
              ))
            )}
          </div>

          {usedFallback && (
            <div className="mx-auto mt-8 max-w-xl rounded-xl border border-[#B94A2F]/20 bg-[#B94A2F]/5 p-4 text-center text-sm text-[#2B1A0E]/70">
              <p className="font-medium">Precos e links de pagamento vem do Supabase.</p>
              <p className="mt-1 text-[#2B1A0E]/50">Configure as variaveis de ambiente para exibir seus produtos aqui.</p>
            </div>
          )}

          <div className="text-center mt-8">
            <Button asChild variant="ghost">
              <Link href="/"><ArrowLeft className="mr-2 h-4 w-4" /> Voltar para a Home</Link>
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
