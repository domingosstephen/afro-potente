import Link from "next/link";
import { Zap, ArrowLeft, Microscope } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function OxidoNitricoPage() {
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
              <Microscope className="h-12 w-12" />
            </div>
            <h1 className="text-4xl lg:text-6xl font-black mb-6 uppercase tracking-tighter">
              Óxido Nítrico & <span className="text-[#22c55e]">Circulação</span>
            </h1>
          </div>

          <div className="bg-[#0a1a0a] border border-white/5 p-10 rounded-[2.5rem] mb-12 space-y-8">
            <section>
              <h2 className="text-2xl font-black mb-4 uppercase text-[#22c55e]">O que é?</h2>
              <p className="text-lg text-white/60 font-medium leading-relaxed">
                O óxido nítrico (NO) é uma molécula sinalizadora fundamental produzida pelo nosso organismo que atua diretamente no relaxamento dos vasos sanguíneos (vasodilatação).
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-black mb-4 uppercase text-[#22c55e]">Papel na Vitalidade</h2>
              <p className="text-lg text-white/60 font-medium leading-relaxed">
                Ao promover a circulação saudável, o óxido nítrico contribui para o transporte eficiente de oxigênio e nutrientes para todos os tecidos do corpo, apoiando o desempenho físico e a saúde cardiovascular integral.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-black mb-4 uppercase text-[#22c55e]">Fatores Naturais</h2>
              <p className="text-lg text-white/60 font-medium leading-relaxed">
                Alimentos ricos em nitratos e antioxidantes, além da prática regular de exercícios físicos, são formas naturais de apoiar a produção saudável de óxido nítrico pelo corpo.
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
