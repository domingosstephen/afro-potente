import Link from "next/link";
import { BookOpen, MessageCircle, CheckCircle2, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { createServerSupabase } from "@/lib/supabase-server";

export const dynamic = "force-dynamic";

export default async function ComunidadePage() {
  type CommunityProduct = {
    name: string;
    price_display: string | null;
    payment_link_kiwify: string | null;
    payment_link_mercadopago: string | null;
    payment_link: string | null;
  };
  let communityProduct: CommunityProduct | null = null;

  try {
    const supabase = createServerSupabase();
    if (supabase) {
      const { data } = await supabase
        .from("products")
        .select("name, price_display, payment_link_kiwify, payment_link_mercadopago, payment_link")
        .eq("slug", "comunidade")
        .single();
      communityProduct = data as CommunityProduct | null;
    }
  } catch (e) {
    console.error("Failed to fetch community product:", e);
  }

  const hasKiwify = communityProduct?.payment_link_kiwify?.trim();
  const hasMercadoPago = communityProduct?.payment_link_mercadopago?.trim();
  const hasLegacyLink = communityProduct?.payment_link?.trim();
  const hasAnyPayment = hasKiwify || hasMercadoPago || hasLegacyLink;

  return (
    <div className="flex min-h-screen flex-col bg-[#F5EDE0] font-sans">
      <Navbar />

      <main className="flex-1 pt-20">
        {/* Hero */}
        <section className="py-12 md:py-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="font-serif text-[#2B1A0E] mb-6">
                Faca Parte da Comunidade Afro Potente
              </h1>
              <p className="text-lg text-[#2B1A0E]/60 mb-8 leading-relaxed">
                Acesso por um ano: atualizacoes mensais de pesquisa, novas receitas e orientacoes personalizadas.
              </p>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-12 md:py-20 bg-[#FAF7F2]">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="font-serif text-[#2B1A0E] text-center mb-12">O que voce recebe</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {[
                { icon: <BookOpen className="h-6 w-6 text-[#B94A2F]" />, title: "Pesquisa mensal", desc: "Resumos das ultimas evidencias sobre vitalidade, nutricao e praticas naturais." },
                { icon: <BookOpen className="h-6 w-6 text-[#B94A2F]" />, title: "Novas receitas", desc: "Receitas e protocolos novos todo mes, inspirados na sabedoria ancestral." },
                { icon: <MessageCircle className="h-6 w-6 text-[#B94A2F]" />, title: "Orientacao personalizada", desc: "Envie sua situacao e receba sugestoes de receitas e praticas adequadas." }
              ].map((item, i) => (
                <div key={i} className="bg-[#F5EDE0] border border-[#2B1A0E]/10 p-6 md:p-8 rounded-xl text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-[#B94A2F]/10 mb-5">
                    {item.icon}
                  </div>
                  <h3 className="font-serif text-lg text-[#2B1A0E] mb-3">{item.title}</h3>
                  <p className="text-sm text-[#2B1A0E]/60 leading-relaxed max-w-none">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="py-12 md:py-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-md mx-auto bg-[#FAF7F2] border border-[#2B1A0E]/10 rounded-xl p-6 md:p-10 text-center">
              <span className="text-xs font-semibold text-[#B94A2F] uppercase tracking-wider">Taxa unica anual</span>
              <h2 className="font-serif text-3xl md:text-4xl text-[#2B1A0E] mt-2 mb-2">
                {communityProduct?.price_display ?? "—"}
              </h2>
              <p className="text-sm text-[#2B1A0E]/50 mb-8">por ano</p>

              {hasAnyPayment ? (
                <div className="space-y-3">
                  {hasKiwify && (
                    <Button asChild className="w-full" size="lg">
                      <a href={communityProduct!.payment_link_kiwify!} target="_blank" rel="noopener noreferrer">
                        Entrar com Kiwify
                      </a>
                    </Button>
                  )}
                  {hasMercadoPago && (
                    <Button asChild className="w-full" size="lg">
                      <a href={communityProduct!.payment_link_mercadopago!} target="_blank" rel="noopener noreferrer">
                        Entrar com Mercado Pago
                      </a>
                    </Button>
                  )}
                  {!hasKiwify && !hasMercadoPago && hasLegacyLink && (
                    <Button asChild className="w-full" size="lg">
                      <a href={communityProduct!.payment_link!} target="_blank" rel="noopener noreferrer">
                        Entrar na comunidade
                      </a>
                    </Button>
                  )}
                </div>
              ) : (
                <>
                  <p className="text-[#2B1A0E]/50 text-sm mb-4">Em breve voce podera se inscrever.</p>
                  <Button asChild variant="outline">
                    <Link href="/contato">Avise-me quando abrir</Link>
                  </Button>
                </>
              )}

              <ul className="mt-8 space-y-3 text-left">
                {["Acesso por 12 meses", "Conteudo mensal por e-mail", "Canal para orientacao personalizada"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-[#2B1A0E]/70">
                    <CheckCircle2 className="h-4 w-4 text-[#B94A2F] shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="py-8 border-t border-[#2B1A0E]/10">
          <div className="container mx-auto px-4 text-center">
            <Button asChild variant="ghost">
              <Link href="/"><ArrowLeft className="mr-2 h-4 w-4" /> Voltar ao inicio</Link>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
