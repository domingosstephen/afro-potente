"use client";

import Link from "next/link";
import {
  ArrowRight,
  Leaf,
  BookOpen,
  Zap,
  Heart,
  Moon,
  Utensils,
  AlertCircle,
  CheckCircle2,
  ShoppingBag,
  Clock,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/motion/Reveal";
import { StaggerChildren, StaggerItem } from "@/components/motion/StaggerChildren";
import { SectionDivider } from "@/components/ui/SectionDivider";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
export type EbookOfferProduct = {
  id: string;
  name: string;
  description: string | null;
  tag: string | null;
  features: string[];
  paymentUrl: string | null;
};

const ORIGINAL_PRICE = "R$ 69,50";
const OFFER_PRICE = "R$ 47";

export function EbooksIndividuaisLanding({ products }: { products: EbookOfferProduct[] }) {
  return (
    <div className="flex min-h-screen flex-col bg-[#F5EDE0] font-sans overflow-x-hidden">
      <main className="flex-1 pt-8 md:pt-12">
        {/* ========== HERO ========== */}
        <section className="bg-[#2B1A0E] grain-overlay grain-light py-20 md:py-32 lg:py-40">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <Reveal direction="none" delay={0} duration={0.5}>
              <span className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#F5EDE0]/8 border border-[#F5EDE0]/15 text-[#F5EDE0]/70 text-xs font-semibold tracking-wide uppercase mb-8">
                <BookOpen className="h-3.5 w-3.5" />
                Cada guia por R$ 47
              </span>
            </Reveal>

            <Reveal direction="up" delay={0.15} duration={0.7}>
              <h1
                className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-6 max-w-4xl mx-auto leading-[1.1]"
                style={{ color: "#F5EDE0" }}
              >
                Escolha o Guia Que Combina Com Você — Vitalidade e Bem-Estar por Menos
              </h1>
            </Reveal>

            <Reveal direction="up" delay={0.35} duration={0.6}>
              <p className="text-[#F5EDE0]/65 text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
                De R$ 69,50 por R$ 47 cada. Remédios caseiros, receitas naturais e passo a passo para energia, conexão e disposição. Entrega imediata por e-mail.
              </p>
            </Reveal>

            <Reveal direction="up" delay={0.5} duration={0.5}>
              <Button asChild size="lg" className="text-base px-8 min-h-[48px]">
                <Link href="#ofertas">
                  Ver guias em oferta
                  <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </Reveal>
          </div>
        </section>

        {/* ========== PROBLEM (P) ========== */}
        <section className="py-16 md:py-24 bg-[#FAF7F2] grain-overlay grain-dark">
          <div className="container mx-auto px-4 md:px-6">
            <Reveal direction="up" className="mb-12 md:mb-16 w-full flex justify-center">
              <div className="text-center max-w-3xl mx-auto w-full">
                <p className="text-[#B94A2F] text-sm font-semibold tracking-wide uppercase mb-4">
                  O custo invisível do dia a dia
                </p>
                <h2 className="font-serif text-[#2B1A0E] text-2xl md:text-4xl">
                  Estresse, Comida Cheia de Químicos, Noites Mal Dormidas — E a Vida Passando Sem Prazer
                </h2>
              </div>
            </Reveal>

            <StaggerChildren
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 max-w-6xl mx-auto"
              staggerDelay={0.1}
            >
              {[
                { icon: <AlertCircle className="h-6 w-6 text-[#B94A2F]" />, title: "Estresse do dia a dia", desc: "Correria, pressão e preocupações que não desligam. O corpo e a mente pagam o preço." },
                { icon: <Utensils className="h-6 w-6 text-[#B94A2F]" />, title: "Dieta errada e químicos na comida", desc: "Alimentos ultraprocessados e aditivos que intoxicam o corpo e roubam sua energia." },
                { icon: <Zap className="h-6 w-6 text-[#B94A2F]" />, title: "Níveis de estresse no limite", desc: "Quando o estresse vira crônico, a vitalidade cai, o humor afunda e a saúde desanda." },
                { icon: <Moon className="h-6 w-6 text-[#B94A2F]" />, title: "Falta de sono de qualidade", desc: "Dormir mal ou pouco drena a disposição, a libido e a capacidade de curtir a vida." },
              ].map((item, i) => (
                <StaggerItem key={i}>
                  <div className="bg-white border border-[#2B1A0E]/8 rounded-xl p-6 md:p-8 h-full">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-[#B94A2F]/10 text-[#B94A2F] mb-5">{item.icon}</div>
                    <h3 className="font-serif text-lg text-[#2B1A0E] mb-3">{item.title}</h3>
                    <p className="text-[#2B1A0E]/60 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerChildren>

            <Reveal direction="up" delay={0.3} className="text-center mt-12">
              <p className="text-[#2B1A0E]/60 text-base md:text-lg italic max-w-2xl mx-auto">
                O resultado? Cansaço que não passa, menos prazer no dia a dia e relacionamentos que sofrem. Mas não tem de ser assim.
              </p>
            </Reveal>
          </div>
        </section>

        <SectionDivider variant="wave" color="#2B1A0E" bgColor="#FAF7F2" />

        {/* ========== AGITATION (A) ========== */}
        <section className="bg-[#2B1A0E] grain-overlay grain-light py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <Reveal direction="up">
              <p className="text-[#B94A2F] text-sm font-semibold tracking-wide uppercase mb-4">Você merece mais</p>
              <h2 className="font-serif text-2xl md:text-4xl max-w-3xl mx-auto mb-6" style={{ color: "#F5EDE0" }}>
                Quando a Energia Acaba, a Vida Perde o Brilho — E os Relacionamentos Sofrem
              </h2>
              <p className="text-[#F5EDE0]/65 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
                Sem vitalidade, fica difícil ter paciência, presença e conexão. A boa notícia: existem guias práticos, com remédios caseiros baratos, que você pode começar em casa. E agora cada um por R$ 47.
              </p>
            </Reveal>
          </div>
        </section>

        <SectionDivider variant="wave" color="#F5EDE0" bgColor="#2B1A0E" />

        {/* ========== SOLUTION — Guias em oferta ========== */}
        <section className="dot-pattern py-20 md:py-32 bg-[#F5EDE0]">
          <div className="container mx-auto px-4 md:px-6">
            <Reveal direction="up" className="text-center mb-14 md:mb-20">
              <p className="text-[#B94A2F] text-sm font-semibold tracking-wide uppercase mb-4">Oferta por tempo limitado</p>
              <h2 className="font-serif text-[#2B1A0E] text-2xl md:text-4xl mb-4">
                Cada Guia por R$ 47 — Escolha o Seu
              </h2>
              <p className="text-[#2B1A0E]/60 text-base md:text-lg max-w-2xl mx-auto">
                Remédios caseiros e naturais, ingredientes do mercado, passo a passo claro. De R$ 69,50 por R$ 47 cada. Acesso imediato por e-mail.
              </p>
            </Reveal>

            <div id="ofertas" className="scroll-mt-8" />
            <StaggerChildren
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto"
              staggerDelay={0.1}
            >
              {products.map((product) => (
                <StaggerItem key={product.id}>
                  <div className="bg-white border border-[#2B1A0E]/8 rounded-2xl p-6 md:p-8 shadow-[0_2px_12px_rgba(43,26,14,0.06)] flex flex-col h-full">
                    {product.tag && (
                      <span className="inline-block w-fit px-3 py-1 rounded-full bg-[#B94A2F]/10 text-[#B94A2F] text-xs font-semibold uppercase tracking-wider mb-4">
                        {product.tag}
                      </span>
                    )}
                    <h3 className="font-serif text-xl text-[#2B1A0E] mb-2">{product.name}</h3>
                    {product.description && (
                      <p className="text-[#2B1A0E]/60 text-sm leading-relaxed mb-4 flex-1">{product.description}</p>
                    )}
                    {product.features.length > 0 && (
                      <ul className="space-y-2 mb-5">
                        {product.features.slice(0, 3).map((f, i) => (
                          <li key={i} className="flex items-center gap-2 text-[#2B1A0E]/70 text-sm">
                            <CheckCircle2 className="h-4 w-4 text-[#B94A2F] shrink-0" />
                            {f}
                          </li>
                        ))}
                      </ul>
                    )}
                    <div className="flex flex-wrap items-baseline gap-2 mb-4">
                      <span className="text-[#2B1A0E]/50 text-sm line-through">{ORIGINAL_PRICE}</span>
                      <span className="font-serif text-2xl font-bold text-[#2B1A0E]">{OFFER_PRICE}</span>
                    </div>
                    {product.paymentUrl ? (
                      <Button asChild size="lg" className="w-full min-h-[48px] rounded-xl">
                        <a href={product.paymentUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2">
                          Comprar por R$ 47
                          <ArrowRight className="h-4 w-4 shrink-0" aria-hidden />
                        </a>
                      </Button>
                    ) : (
                      <Button disabled className="w-full bg-[#F5EDE0] text-[#2B1A0E]/50 cursor-not-allowed">
                        Em breve
                      </Button>
                    )}
                  </div>
                </StaggerItem>
              ))}
            </StaggerChildren>

            <Reveal direction="up" delay={0.25} className="mt-12 flex justify-center">
              <p className="text-[#2B1A0E]/70 font-semibold text-lg text-center max-w-xl mx-auto">
                Para solteiros e casais — energia, vitalidade e relacionamentos mais felizes.
              </p>
            </Reveal>
          </div>
        </section>

        {/* ========== TRUST STRIP ========== */}
        <section className="py-10 md:py-14 border-b border-[#2B1A0E]/8 bg-[#F5EDE0]">
          <div className="container mx-auto px-4 md:px-6">
            <StaggerChildren className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8" staggerDelay={0.08}>
              {[
                { icon: <Leaf className="h-5 w-5 text-[#B94A2F]" />, label: "100% natural" },
                { icon: <Heart className="h-5 w-5 text-[#B94A2F]" />, label: "Solteiros e casais" },
                { icon: <Zap className="h-5 w-5 text-[#B94A2F]" />, label: "Acesso imediato" },
                { icon: <CheckCircle2 className="h-5 w-5 text-[#B94A2F]" />, label: "Pagamento seguro" },
              ].map((item, i) => (
                <StaggerItem key={i}>
                  <div className="flex flex-col items-center gap-2 text-center">
                    <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-[#B94A2F]/10">{item.icon}</div>
                    <span className="font-semibold text-sm text-[#2B1A0E]">{item.label}</span>
                  </div>
                </StaggerItem>
              ))}
            </StaggerChildren>
          </div>
        </section>

        {/* ========== FINAL CTA ========== */}
        <section className="bg-[#2B1A0E] grain-overlay grain-light py-16 md:py-20">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <Reveal direction="up">
              <h2 className="font-serif text-2xl md:text-4xl mb-4 max-w-2xl mx-auto" style={{ color: "#F5EDE0" }}>
                Escolha Seu Guia — R$ 47 Cada
              </h2>
              <p className="text-[#F5EDE0]/55 text-base md:text-lg max-w-lg mx-auto mb-8">
                Remédios caseiros, ingredientes do mercado, entrega imediata. Cada ebook por R$ 47.
              </p>
              <Button asChild size="lg" className="text-base px-8 min-h-[48px]">
                <Link href="#ofertas">
                  Ver guias em oferta
                  <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </Reveal>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 md:py-20 bg-[#FAF7F2] border-t border-[#2B1A0E]/8">
          <div className="container mx-auto px-4 md:px-6 max-w-2xl">
            <Reveal direction="up" className="text-center mb-10">
              <h2 className="font-serif text-[#2B1A0E] text-xl md:text-2xl">Perguntas frequentes</h2>
            </Reveal>
            <Accordion type="single" collapsible className="space-y-2">
              <AccordionItem value="faq-1" className="bg-white border border-[#2B1A0E]/10 rounded-xl px-4">
                <AccordionTrigger className="text-left font-sans font-semibold text-[#2B1A0E] py-4">
                  Quando recebo o ebook?
                </AccordionTrigger>
                <AccordionContent className="pb-4 text-[#2B1A0E]/70 text-sm">
                  Imediatamente após a confirmação do pagamento você recebe o link por e-mail. Acesso vitalício.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="faq-2" className="bg-white border border-[#2B1A0E]/10 rounded-xl px-4">
                <AccordionTrigger className="text-left font-sans font-semibold text-[#2B1A0E] py-4">
                  O pagamento é seguro?
                </AccordionTrigger>
                <AccordionContent className="pb-4 text-[#2B1A0E]/70 text-sm">
                  Sim. O pagamento é processado em ambiente seguro na página de checkout.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="faq-3" className="bg-white border border-[#2B1A0E]/10 rounded-xl px-4">
                <AccordionTrigger className="text-left font-sans font-semibold text-[#2B1A0E] py-4">
                  Posso comprar mais de um guia?
                </AccordionTrigger>
                <AccordionContent className="pb-4 text-[#2B1A0E]/70 text-sm">
                  Sim. Cada guia é R$ 47. Você pode comprar quantos quiser; cada um leva direto ao pagamento e à entrega por e-mail.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>

        {/* Sticky mobile CTA */}
        <div className="fixed bottom-0 left-0 right-0 z-50 p-3 lg:hidden bg-[#2B1A0E]/95 backdrop-blur-sm border-t border-[#F5EDE0]/10">
          <div className="container mx-auto px-4">
            <Button asChild size="lg" className="w-full min-h-[48px] rounded-xl text-base font-semibold py-3">
              <Link href="#ofertas">Ver guias — R$ 47 cada</Link>
            </Button>
          </div>
        </div>
        <div className="h-20 lg:h-0" aria-hidden />
      </main>
    </div>
  );
}
