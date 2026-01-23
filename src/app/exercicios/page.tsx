import Link from "next/link";
import { Zap, ArrowLeft, Activity, Heart, Wind, Move } from "lucide-react";
import { Button } from "@/components/ui/button";

const cards = [
  {
    title: "Consciência corporal",
    desc: "Aprenda a ouvir os sinais do seu corpo e a desenvolver uma conexão mais profunda com sua vitalidade.",
    icon: <Heart className="h-6 w-6 text-[#22c55e]" />
  },
  {
    title: "Assoalho pélvico",
    desc: "Exercícios focados no fortalecimento e controle muscular para homens e mulheres.",
    icon: <Move className="h-6 w-6 text-[#22c55e]" />
  },
  {
    title: "Respiração e relaxamento",
    desc: "Técnicas de respiração que auxiliam no controle do estresse e na melhora da circulação.",
    icon: <Wind className="h-6 w-6 text-[#22c55e]" />
  }
];

export default function ExerciciosPage() {
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
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="p-6 bg-[#22c55e]/10 rounded-3xl text-[#22c55e] mb-8 inline-block">
            <Activity className="h-12 w-12" />
          </div>
          <h1 className="text-4xl lg:text-6xl font-black mb-6 uppercase tracking-tighter">
            Exercícios <span className="text-[#22c55e]">Naturais</span>
          </h1>
          <p className="text-xl text-white/40 max-w-2xl mx-auto font-medium leading-relaxed">
            Práticas focadas em consciência corporal e equilíbrio para uma vida mais vital.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {cards.map((card, i) => (
            <div key={i} className="bg-[#0a1a0a] border border-white/5 p-8 rounded-[2rem] hover:border-[#22c55e]/30 transition-all text-center">
              <div className="mb-6 p-4 bg-white/5 w-fit rounded-2xl mx-auto">
                {card.icon}
              </div>
              <h3 className="text-xl font-black mb-4 uppercase text-[#22c55e]">{card.title}</h3>
              <p className="text-sm text-white/40 leading-relaxed font-medium">{card.desc}</p>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <Button asChild variant="outline" size="lg" className="border-white/10 hover:bg-white/5 text-white font-black h-16 px-10 rounded-xl text-lg">
            <Link href="/guia-de-bem-estar"><ArrowLeft className="mr-2 h-5 w-5" /> Voltar ao Guia</Link>
          </Button>
        </div>
      </main>

      <footer className="py-12 border-t border-white/5 text-center">
        <p className="text-[10px] text-white/20 font-bold uppercase tracking-[0.2em]">© 2026 Afro Potente</p>
      </footer>
    </div>
  );
}
