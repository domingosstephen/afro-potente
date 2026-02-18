import Link from "next/link";
import { ArrowLeft, Heart, Wind, Move } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const cards = [
  {
    title: "Consciencia corporal",
    desc: "Aprenda a ouvir os sinais do seu corpo e a desenvolver uma conexao mais profunda com sua vitalidade.",
    icon: <Heart className="h-6 w-6 text-[#B94A2F]" />
  },
  {
    title: "Assoalho pelvico",
    desc: "Exercicios focados no fortalecimento e controle muscular para homens e mulheres.",
    icon: <Move className="h-6 w-6 text-[#B94A2F]" />
  },
  {
    title: "Respiracao e relaxamento",
    desc: "Tecnicas de respiracao que auxiliam no controle do estresse e na melhora da circulacao.",
    icon: <Wind className="h-6 w-6 text-[#B94A2F]" />
  }
];

export default function ExerciciosPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#F5EDE0] font-sans">
      <Navbar />

      <main className="flex-1 pt-20">
        <div className="container mx-auto px-4 md:px-6 py-12 md:py-20">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h1 className="font-serif text-[#2B1A0E] mb-4">Exercicios Naturais</h1>
            <p className="text-lg text-[#2B1A0E]/60 max-w-2xl mx-auto leading-relaxed">
              Praticas focadas em consciencia corporal e equilibrio para uma vida mais vital.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-12">
            {cards.map((card, i) => (
              <div key={i} className="bg-[#FAF7F2] border border-[#2B1A0E]/10 p-6 md:p-8 rounded-xl text-center hover:shadow-[0_4px_16px_rgba(43,26,14,0.12)] hover:-translate-y-0.5 transition-all duration-200">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-[#B94A2F]/10 mb-5">
                  {card.icon}
                </div>
                <h3 className="font-serif text-lg text-[#2B1A0E] mb-3">{card.title}</h3>
                <p className="text-sm text-[#2B1A0E]/60 leading-relaxed max-w-none">{card.desc}</p>
              </div>
            ))}
          </div>

          <div className="flex justify-center">
            <Button asChild variant="outline" size="lg">
              <Link href="/guia-de-bem-estar"><ArrowLeft className="mr-2 h-4 w-4" /> Voltar ao Guia</Link>
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
