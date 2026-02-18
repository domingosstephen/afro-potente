import Link from "next/link";
import { ArrowLeft, CheckCircle2, Heart, Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export default function DisfuncaoEretil() {
  return (
    <div className="flex min-h-screen flex-col bg-[#F5EDE0] font-sans">
      <Navbar />

      <main className="flex-1 pt-20">
        {/* Hero */}
        <section className="py-16 md:py-24 text-center">
          <div className="container mx-auto px-4 md:px-6 max-w-3xl">
            <h1 className="font-serif text-[#2B1A0E] mb-6">
              Protocolo de Suporte a Vitalidade
            </h1>
            <p className="text-lg text-[#2B1A0E]/60 leading-relaxed mb-10">
              Uma abordagem natural e estruturada para apoiar confianca, disposicao e bem-estar no dia a dia.
            </p>
            <Button asChild size="lg">
              <Link href="/produtos">Ver Protocolos</Link>
            </Button>
          </div>
        </section>

        {/* For whom */}
        <section className="py-12 md:py-20 bg-[#FAF7F2]">
          <div className="container mx-auto px-4 md:px-6 max-w-4xl">
            <h2 className="font-serif text-[#2B1A0E] text-center mb-10">Para quem e este protocolo?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { icon: <Heart className="h-6 w-6 text-[#B94A2F]" />, text: "Pessoas que percebem queda de disposicao ao longo do tempo" },
                { icon: <Leaf className="h-6 w-6 text-[#B94A2F]" />, text: "Quem e afetado por estresse, rotina intensa ou fadiga" },
                { icon: <CheckCircle2 className="h-6 w-6 text-[#B94A2F]" />, text: "Quem busca uma alternativa natural e organizada" }
              ].map((item, i) => (
                <div key={i} className="bg-[#F5EDE0] border border-[#2B1A0E]/10 p-6 rounded-xl text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-[#B94A2F]/10 mb-4">
                    {item.icon}
                  </div>
                  <p className="text-sm text-[#2B1A0E]/70 leading-relaxed max-w-none">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What includes */}
        <section className="py-12 md:py-20">
          <div className="container mx-auto px-4 md:px-6 max-w-2xl">
            <h2 className="font-serif text-[#2B1A0E] text-center mb-10">O que o protocolo inclui</h2>
            <div className="space-y-3">
              {[
                "Orientacao de rotina diaria e habitos",
                "Receitas naturais com uso guiado",
                "Suporte a circulacao e recuperacao",
                "Acompanhamento simples e pratico"
              ].map((item, i) => (
                <div key={i} className="flex items-center bg-[#FAF7F2] p-4 rounded-xl border border-[#2B1A0E]/10">
                  <CheckCircle2 className="h-5 w-5 text-[#B94A2F] mr-4 shrink-0" />
                  <span className="text-[#2B1A0E]/70 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 md:py-24 bg-[#2B1A0E] text-center">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="font-serif text-2xl md:text-3xl mb-8" style={{ color: '#F5EDE0' }}>Mais energia, mais presenca, mais voce.</h2>
            <Button asChild size="lg">
              <Link href="/produtos">Ver Protocolos</Link>
            </Button>
          </div>
        </section>

        <section className="py-8">
          <div className="container mx-auto px-4 text-center">
            <Button asChild variant="ghost">
              <Link href="/"><ArrowLeft className="mr-2 h-4 w-4" /> Voltar</Link>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
