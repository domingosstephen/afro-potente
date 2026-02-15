import Link from "next/link";
import {
  Zap,
  Users,
  BookOpen,
  FlaskConical,
  MessageCircle,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { createServerSupabase } from "@/lib/supabase-server";

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
    <div className="flex min-h-screen flex-col bg-[#050f05] text-white font-sans">
      <nav className="sticky top-0 z-50 w-full bg-[#050f05]/80 backdrop-blur-md border-b border-white/5">
        <div className="container mx-auto flex h-20 items-center justify-between px-6">
          <Link href="/" className="text-2xl font-black tracking-tighter flex items-center gap-2">
            <Zap className="fill-[#22c55e] text-[#22c55e] h-6 w-6" />
            AFRO POTENTE
          </Link>
          <div className="hidden md:flex items-center gap-6">
            <Link href="/produtos" className="text-sm font-bold uppercase tracking-widest text-white/50 hover:text-white transition-colors">Loja</Link>
            <Link href="/guia-de-bem-estar" className="text-sm font-bold uppercase tracking-widest text-white/50 hover:text-white transition-colors">Guia</Link>
            <Link href="/contato" className="text-sm font-bold uppercase tracking-widest text-white/50 hover:text-white transition-colors">Contato</Link>
          </div>
        </div>
      </nav>

      <main className="flex-1">
        {/* Hero */}
        <section className="pt-16 pb-20 lg:pt-24 lg:pb-28">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#22c55e]/10 border border-[#22c55e]/20 text-[#22c55e] text-[10px] font-black uppercase tracking-[0.2em] mb-6">
                <Users className="h-4 w-4" />
                Comunidade
              </div>
              <h1 className="text-4xl md:text-6xl font-black mb-6 tracking-tighter uppercase leading-tight">
                Junte-se à <span className="text-[#22c55e]">Comunidade</span> <br className="hidden sm:block" />
                Afro Potente
              </h1>
              <p className="text-lg md:text-xl text-white/60 mb-10 font-medium leading-relaxed">
                Acesso por um ano: atualizações mensais de pesquisa, novas receitas e a chance de pedir orientações personalizadas para o que você está vivendo.
              </p>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-16 lg:py-24 bg-[#081508]">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-2xl md:text-4xl font-black text-center mb-12 md:mb-16 uppercase tracking-tighter">
              O que você <span className="text-[#22c55e]">recebe</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="bg-[#0a1a0a] border border-white/5 p-8 rounded-[2rem] text-center">
                <div className="p-4 bg-[#22c55e]/10 rounded-2xl w-fit mx-auto mb-6 text-[#22c55e]">
                  <FlaskConical className="h-8 w-8" />
                </div>
                <h3 className="text-lg font-black mb-3 uppercase tracking-tighter">Pesquisa mensal</h3>
                <p className="text-sm text-white/50 leading-relaxed">
                  Resumos das últimas evidências sobre vitalidade, nutrição e práticas naturais, em linguagem clara.
                </p>
              </div>
              <div className="bg-[#0a1a0a] border border-white/5 p-8 rounded-[2rem] text-center">
                <div className="p-4 bg-[#22c55e]/10 rounded-2xl w-fit mx-auto mb-6 text-[#22c55e]">
                  <BookOpen className="h-8 w-8" />
                </div>
                <h3 className="text-lg font-black mb-3 uppercase tracking-tighter">Novas receitas</h3>
                <p className="text-sm text-white/50 leading-relaxed">
                  Receitas seguras e protocolos novos todo mês, inspirados na sabedoria ancestral e na ciência.
                </p>
              </div>
              <div className="bg-[#0a1a0a] border border-white/5 p-8 rounded-[2rem] text-center">
                <div className="p-4 bg-[#22c55e]/10 rounded-2xl w-fit mx-auto mb-6 text-[#22c55e]">
                  <MessageCircle className="h-8 w-8" />
                </div>
                <h3 className="text-lg font-black mb-3 uppercase tracking-tighter">Pedir orientação</h3>
                <p className="text-sm text-white/50 leading-relaxed">
                  Possibilidade de enviar sua situação pessoal e receber sugestões de remedios e práticas adequadas ao seu caso.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing & CTA */}
        <section className="py-20 lg:py-28 bg-[#050f05]">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-xl mx-auto bg-[#0a1a0a] border border-[#22c55e]/20 rounded-[2.5rem] p-8 md:p-12 text-center">
              <div className="flex items-center justify-center gap-2 mb-6">
                <ShieldCheck className="h-5 w-5 text-[#22c55e]" />
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#22c55e]">Taxa única anual</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-black mb-2 uppercase tracking-tighter">
                {communityProduct?.price_display ?? "—"}
              </h2>
              <p className="text-white/50 text-sm font-bold uppercase tracking-widest mb-8">por ano · cancele quando quiser</p>

              {hasAnyPayment ? (
                <div className="space-y-3">
                  {hasKiwify && (
                    <Button asChild className="w-full bg-[#22c55e] hover:bg-[#1ea34d] text-[#050f05] font-black h-14 rounded-xl text-base uppercase tracking-widest">
                      <a href={communityProduct!.payment_link_kiwify!} target="_blank" rel="noopener noreferrer">
                        Entrar na comunidade com Kiwify
                      </a>
                    </Button>
                  )}
                  {hasMercadoPago && (
                    <Button asChild className="w-full bg-[#22c55e] hover:bg-[#1ea34d] text-[#050f05] font-black h-14 rounded-xl text-base uppercase tracking-widest">
                      <a href={communityProduct!.payment_link_mercadopago!} target="_blank" rel="noopener noreferrer">
                        Entrar na comunidade com Mercado Pago
                      </a>
                    </Button>
                  )}
                  {!hasKiwify && !hasMercadoPago && hasLegacyLink && (
                    <Button asChild className="w-full bg-[#22c55e] hover:bg-[#1ea34d] text-[#050f05] font-black h-14 rounded-xl text-base uppercase tracking-widest">
                      <a href={communityProduct!.payment_link!} target="_blank" rel="noopener noreferrer">
                        Entrar na comunidade
                      </a>
                    </Button>
                  )}
                </div>
              ) : (
                <>
                  <p className="text-white/40 text-sm mb-6">Em breve você poderá se inscrever aqui.</p>
                  <Button asChild variant="outline" className="border-white/10 text-white font-black rounded-xl">
                    <Link href="/contato">Avise-me quando abrir</Link>
                  </Button>
                </>
              )}

              <ul className="mt-10 space-y-3 text-left max-w-sm mx-auto">
                {[
                  "Acesso por 12 meses",
                  "Conteúdo mensal por e-mail",
                  "Canal para pedir orientação personalizada",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-white/60 font-medium">
                    <CheckCircle2 className="h-4 w-4 text-[#22c55e] shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Back to home */}
        <section className="py-12 border-t border-white/5">
          <div className="container mx-auto px-4 text-center">
            <Button asChild variant="ghost" className="text-white/50 hover:text-white hover:bg-white/5 rounded-xl">
              <Link href="/"><ArrowRight className="mr-2 h-4 w-4 rotate-180" /> Voltar ao início</Link>
            </Button>
          </div>
        </section>
      </main>

      <footer className="py-12 border-t border-white/5 text-center">
        <p className="text-[10px] text-white/20 font-bold uppercase tracking-[0.2em]">© 2026 Afro Potente</p>
      </footer>
    </div>
  );
}
