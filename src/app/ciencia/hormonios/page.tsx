import Link from "next/link";
import { Zap, ArrowLeft, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function HormoniosPage() {
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
          <div className="text-center mb-16">
            <div className="p-6 bg-[#22c55e]/10 rounded-3xl text-[#22c55e] mb-8 inline-block">
              <Heart className="h-12 w-12" />
            </div>
            <h1 className="text-4xl lg:text-6xl font-black mb-6 uppercase tracking-tighter">
              Hormônios, Desejo & <span className="text-[#22c55e]">Rotina</span>
            </h1>
          </div>

          <div className="bg-[#0a1a0a] border border-white/5 p-10 rounded-[2.5rem] mb-12 space-y-8">
            <section>
              <h2 className="text-2xl font-black mb-4 uppercase text-[#22c55e]">Equilíbrio Integral</h2>
              <p className="text-lg text-white/60 font-medium leading-relaxed">
                Os hormônios são os mensageiros químicos do corpo. Para manter o desejo natural e a vitalidade, é essencial buscar um equilíbrio que envolva múltiplos pilares do estilo de vida.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-black mb-4 uppercase text-[#22c55e]">O Impacto do Sono e Estresse</h2>
              <p className="text-lg text-white/60 font-medium leading-relaxed">
                A privação de sono e o estresse crônico elevam o cortisol, o que pode impactar negativamente a produção de hormônios ligados à vitalidade íntima. Priorizar o descanso e técnicas de relaxamento é fundamental.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-black mb-4 uppercase text-[#22c55e]">Nutrição Funcional</h2>
              <p className="text-lg text-white/60 font-medium leading-relaxed">
                Gorduras saudáveis, minerais como o zinco e vitaminas específicas fornecem a base necessária para que o sistema endócrino funcione de maneira otimizada.
              </p>
            </section>
          </div>

          <div className="flex justify-center">
          <Button asChild variant="outline" size="lg" className="border-white/10 hover:bg-white/5 text-white font-black h-16 px-10 rounded-xl text-lg">
            <Link href="/guia-de-bem-estar"><ArrowLeft className="mr-2 h-5 w-5" /> Voltar ao Guia</Link>
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
