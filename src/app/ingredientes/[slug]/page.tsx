import Link from "next/link";
import { Zap, ArrowLeft, ShoppingBag, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function IngredientePage({ params }: { params: { slug: string } }) {
  const name = params.slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  return (
    <div className="flex min-h-screen flex-col bg-[#050f05] text-white font-sans">
      <nav className="sticky top-0 z-50 w-full bg-[#050f05]/80 backdrop-blur-md border-b border-white/5">
        <div className="container mx-auto flex h-20 items-center justify-between px-6">
          <Link href="/" className="text-2xl font-black tracking-tighter flex items-center gap-2">
            <Zap className="fill-[#22c55e] text-[#22c55e] h-6 w-6" />
            AFRO POTENTE
          </Link>
        </div>
      </nav>

      <main className="flex-1 container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <h1 className="text-4xl lg:text-7xl font-black mb-6 uppercase tracking-tighter">
              {name}
            </h1>
            <div className="h-1.5 w-24 bg-[#22c55e] rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <section className="bg-[#0a1a0a] border border-white/5 p-8 rounded-[2rem]">
              <h2 className="text-xl font-black mb-6 uppercase text-[#22c55e]">Visão Geral</h2>
              <p className="text-white/40 leading-relaxed font-medium">
                O {name} é um ingrediente natural valorizado por suas propriedades que contribuem para o bem-estar e vitalidade corporal de forma equilibrada.
              </p>
            </section>

            <section className="bg-[#0a1a0a] border border-white/5 p-8 rounded-[2rem]">
              <h2 className="text-xl font-black mb-6 uppercase text-[#22c55e]">Como pode ajudar</h2>
              <p className="text-white/40 leading-relaxed font-medium">
                Este ingrediente auxilia em diversos processos do corpo, focando principalmente no suporte à circulação e na energia diária necessária para uma vida ativa.
              </p>
            </section>

            <section className="bg-orange-500/5 border border-orange-500/10 p-8 rounded-[2rem] md:col-span-2">
              <h2 className="text-xl font-black mb-6 uppercase text-orange-400">Cuidados</h2>
              <p className="text-orange-200/60 leading-relaxed font-medium">
                Embora natural, é importante consumir com consciência. Pessoas com condições de saúde específicas devem sempre consultar um profissional antes de mudanças significativas na dieta ou suplementação.
              </p>
            </section>
          </div>

          <div className="mt-16 flex flex-col sm:flex-row gap-6">
            <Button asChild variant="outline" size="lg" className="border-white/10 hover:bg-white/5 text-white font-black h-16 px-10 rounded-xl text-lg flex-1">
              <Link href="/guia-de-bem-estar"><BookOpen className="mr-2 h-5 w-5" /> Voltar ao Guia</Link>
            </Button>
            <Button asChild size="lg" className="bg-[#22c55e] hover:bg-[#1ea34d] text-[#050f05] font-black h-16 px-10 rounded-xl text-lg flex-1">
              <Link href="/produtos"><ShoppingBag className="mr-2 h-5 w-5" /> Ver Loja</Link>
            </Button>
          </div>
        </div>
      </main>

      <footer className="py-12 border-t border-white/5 text-center">
        <p className="text-[10px] text-white/20 font-bold uppercase tracking-[0.2em]">© 2026 Afro Potente</p>
      </footer>
    </div>
  );
}
