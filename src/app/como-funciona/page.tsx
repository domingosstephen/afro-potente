"use client";

import Link from "next/link";
import { BookOpen, Leaf, ArrowRight, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/motion/Reveal";
import { StaggerChildren, StaggerItem } from "@/components/motion/StaggerChildren";
import { SectionDivider } from "@/components/ui/SectionDivider";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function ComoFunciona() {
  return (
    <div className="flex min-h-screen flex-col bg-[#F5EDE0] font-sans">
      <Navbar />

      <main className="flex-1 pt-20">
        {/* Hero */}
        <section className="py-20 md:py-28 text-center grain-overlay grain-dark">
          <div className="container mx-auto px-4 md:px-6">
            <Reveal direction="up" delay={0.1}>
              <p className="text-[#B94A2F] text-sm font-semibold tracking-wide uppercase mb-4">
                Como funciona
              </p>
            </Reveal>
            <Reveal direction="up" delay={0.2}>
              <h1 className="font-serif text-[#2B1A0E] mb-6 max-w-3xl mx-auto">
                Protocolos naturais, instrucoes claras, resultados no corpo
              </h1>
            </Reveal>
            <Reveal direction="up" delay={0.35}>
              <p className="text-lg text-[#2B1A0E]/55 max-w-2xl mx-auto leading-relaxed mb-10">
                Cada guia traz receitas ancestrais organizadas por objetivo — com ingredientes de feira e passo a passo simples de seguir.
              </p>
            </Reveal>
            <Reveal direction="up" delay={0.5}>
              <Button asChild size="lg" className="text-base px-8">
                <Link href="/produtos">
                  Conhecer Protocolos
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </Reveal>
          </div>
        </section>

        {/* Steps */}
        <section className="py-20 md:py-28 bg-[#FAF7F2] grain-overlay grain-dark">
          <div className="container mx-auto px-4 md:px-6">
            <Reveal direction="up" className="text-center mb-14 md:mb-20">
              <p className="text-[#B94A2F] text-sm font-semibold tracking-wide uppercase mb-4">
                Simples assim
              </p>
              <h2 className="font-serif text-[#2B1A0E] text-2xl md:text-4xl">
                Tres Passos Para Comecar
              </h2>
            </Reveal>

            <StaggerChildren
              className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16 max-w-5xl mx-auto"
              staggerDelay={0.15}
            >
              {[
                {
                  step: "01",
                  title: "Escolha seu protocolo",
                  icon: <BookOpen className="h-6 w-6 text-[#B94A2F]" />,
                  desc: "Energia, vitalidade ou saude. Cada guia tem foco em um resultado especifico para voce.",
                },
                {
                  step: "02",
                  title: "Prepare com ingredientes de feira",
                  icon: <Leaf className="h-6 w-6 text-[#B94A2F]" />,
                  desc: "Melancia, gengibre, cebola, cravo — tudo que voce encontra em qualquer feira. Preparo facil, na sua cozinha.",
                },
                {
                  step: "03",
                  title: "Sinta a diferenca no corpo",
                  icon: <Sun className="h-6 w-6 text-[#B94A2F]" />,
                  desc: "Siga o protocolo diario com consistencia. Os resultados chegam no seu ritmo, de forma natural.",
                },
              ].map((item, i) => (
                <StaggerItem key={i}>
                  <div className="relative text-center md:text-left">
                    <span className="absolute -top-4 left-1/2 md:left-0 -translate-x-1/2 md:translate-x-0 text-7xl font-serif text-[#B94A2F]/8 font-bold select-none pointer-events-none">
                      {item.step}
                    </span>
                    <div className="relative">
                      <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-[#B94A2F]/10 mb-5">
                        {item.icon}
                      </div>
                      <h3 className="font-serif text-xl text-[#2B1A0E] mb-3">
                        {item.title}
                      </h3>
                      <p className="text-[#2B1A0E]/55 text-base leading-relaxed max-w-none">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerChildren>
          </div>
        </section>

        <SectionDivider variant="wave" color="#F5EDE0" bgColor="#FAF7F2" />

        {/* FAQ */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6 max-w-3xl">
            <Reveal direction="up" className="text-center mb-12">
              <p className="text-[#B94A2F] text-sm font-semibold tracking-wide uppercase mb-4">
                Duvidas frequentes
              </p>
              <h2 className="font-serif text-[#2B1A0E] text-2xl md:text-4xl">
                Perguntas Que Voce Pode Ter
              </h2>
            </Reveal>

            <Reveal direction="up" delay={0.1}>
              <Accordion type="single" collapsible className="w-full space-y-3">
                {[
                  {
                    q: "Em quanto tempo vou perceber alguma diferenca?",
                    a: "Cada corpo responde no seu ritmo. Muitas pessoas relatam mais disposicao e energia ja nos primeiros dias de uso consistente.",
                  },
                  {
                    q: "Preciso de ingredientes dificeis de encontrar?",
                    a: "Nao. Todas as receitas usam ingredientes comuns que voce encontra em qualquer feira ou supermercado: melancia, gengibre, cebola, alho, cravo, canela.",
                  },
                  {
                    q: "Substitui tratamento ou acompanhamento medico?",
                    a: "Nao. Nossos protocolos sao educativos e de bem-estar. Sempre recomendamos manter o acompanhamento com um profissional de saude.",
                  },
                  {
                    q: "Como recebo o material depois da compra?",
                    a: "Imediatamente apos a confirmacao do pagamento, voce recebe o guia em PDF por e-mail. Acesso vitalicio, sem mensalidade.",
                  },
                ].map((item, i) => (
                  <AccordionItem
                    key={i}
                    value={`item-${i}`}
                    className="border border-[#2B1A0E]/10 bg-white rounded-xl px-6 data-[state=open]:shadow-[0_4px_16px_rgba(43,26,14,0.06)]"
                  >
                    <AccordionTrigger className="hover:no-underline text-left py-5">
                      {item.q}
                    </AccordionTrigger>
                    <AccordionContent className="pb-5">
                      {item.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </Reveal>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 md:py-28 bg-[#2B1A0E] grain-overlay grain-light">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <Reveal direction="up">
              <h2
                className="font-serif text-2xl md:text-4xl lg:text-5xl mb-6 max-w-3xl mx-auto"
                style={{ color: "#F5EDE0" }}
              >
                Mais energia, mais presenca, mais vitalidade.
              </h2>
            </Reveal>
            <Reveal direction="up" delay={0.15}>
              <p className="text-[#F5EDE0]/55 text-base md:text-lg mb-10 max-w-xl mx-auto leading-relaxed">
                A sabedoria da terra, no seu corpo. Comece hoje com nossos protocolos naturais.
              </p>
            </Reveal>
            <Reveal direction="up" delay={0.3}>
              <Button asChild size="lg" className="text-base px-8">
                <Link href="/produtos">
                  Ver Protocolos
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </Reveal>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
