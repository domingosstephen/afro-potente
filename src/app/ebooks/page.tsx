"use client";

import Link from "next/link";
import Image from "next/image";
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

// Replace with your actual payment/checkout URL (Kiwify, Mercado Pago, etc.)
const EBOOK_BUNDLE_OFFER_URL = process.env.NEXT_PUBLIC_EBOOK_OFFER_URL ?? "/produtos";

export default function EbooksLandingPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#F5EDE0] font-sans overflow-x-hidden">
      <main className="flex-1 pt-8 md:pt-12">
        {/* ========== HERO — Hook + Promise ========== */}
        <section className="bg-[#2B1A0E] grain-overlay grain-light py-20 md:py-32 lg:py-40">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <Reveal direction="none" delay={0} duration={0.5}>
              <span className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#F5EDE0]/8 border border-[#F5EDE0]/15 text-[#F5EDE0]/70 text-xs font-semibold tracking-wide uppercase mb-8">
                <BookOpen className="h-3.5 w-3.5" />
                Guias para solteiros e casais
              </span>
            </Reveal>

            <Reveal direction="up" delay={0.15} duration={0.7}>
              <h1
                className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-6 max-w-4xl mx-auto leading-[1.1]"
                style={{ color: "#F5EDE0" }}
              >
                Recupere Sua Vitalidade e Volte a Aproveitar a Vida — Com Remédios Caseiros e Baratos
              </h1>
            </Reveal>

            <Reveal direction="up" delay={0.35} duration={0.6}>
              <p className="text-[#F5EDE0]/65 text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
                O estresse do dia a dia, a alimentação cheia de químicos e a falta de sono estão te esgotando. Descubra soluções naturais que você encontra no mercado — e recupere energia, vigor e relacionamentos mais felizes.
              </p>
            </Reveal>

            <Reveal direction="up" delay={0.5} duration={0.5}>
              <Button asChild size="lg" className="text-base px-8 min-h-[48px]">
                <Link href="#oferta">
                  Quero a oferta especial
                  <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </Reveal>
          </div>
        </section>

        {/* ========== PROBLEM (P) — O que está drenando você ========== */}
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
                {
                  icon: <AlertCircle className="h-6 w-6 text-[#B94A2F]" />,
                  title: "Estresse do dia a dia",
                  desc: "Correria, pressão e preocupações que não desligam. O corpo e a mente pagam o preço.",
                },
                {
                  icon: <Utensils className="h-6 w-6 text-[#B94A2F]" />,
                  title: "Dieta errada e químicos na comida",
                  desc: "Alimentos ultraprocessados e aditivos que intoxicam o corpo e roubam sua energia.",
                },
                {
                  icon: <Zap className="h-6 w-6 text-[#B94A2F]" />,
                  title: "Níveis de estresse no limite",
                  desc: "Quando o estresse vira crônico, a vitalidade cai, o humor afunda e a saúde desanda.",
                },
                {
                  icon: <Moon className="h-6 w-6 text-[#B94A2F]" />,
                  title: "Falta de sono de qualidade",
                  desc: "Dormir mal ou pouco drena a disposição, a libido e a capacidade de curtir a vida.",
                },
              ].map((item, i) => (
                <StaggerItem key={i}>
                  <div className="bg-white border border-[#2B1A0E]/8 rounded-xl p-6 md:p-8 h-full">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-[#B94A2F]/10 text-[#B94A2F] mb-5">
                      {item.icon}
                    </div>
                    <h3 className="font-serif text-lg text-[#2B1A0E] mb-3">
                      {item.title}
                    </h3>
                    <p className="text-[#2B1A0E]/60 text-sm leading-relaxed">
                      {item.desc}
                    </p>
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

        {/* ========== AGITATION (A) — Amplificar a dor ========== */}
        <section className="bg-[#2B1A0E] grain-overlay grain-light py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <Reveal direction="up">
              <p className="text-[#B94A2F] text-sm font-semibold tracking-wide uppercase mb-4">
                Você merece mais
              </p>
              <h2
                className="font-serif text-2xl md:text-4xl max-w-3xl mx-auto mb-6"
                style={{ color: "#F5EDE0" }}
              >
                Quando a Energia Acaba, a Vida Perde o Brilho — E os Relacionamentos Sofrem
              </h2>
              <p className="text-[#F5EDE0]/65 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
                Sem vitalidade, fica difícil ter paciência, presença e conexão. Muitos deixam de aproveitar os momentos com quem amam — não por falta de vontade, mas por falta de energia e bem-estar. A boa notícia: existem caminhos naturais, acessíveis e que você pode começar em casa.
              </p>
            </Reveal>
          </div>
        </section>

        <SectionDivider variant="wave" color="#F5EDE0" bgColor="#2B1A0E" />

        {/* ========== SOLUTION (S) — Remédios caseiros, mercado, vitalidade ========== */}
        <section className="dot-pattern py-20 md:py-32 bg-[#F5EDE0]">
          <div className="container mx-auto px-4 md:px-6">
            <Reveal direction="up" className="text-center mb-14 md:mb-20">
              <p className="text-[#B94A2F] text-sm font-semibold tracking-wide uppercase mb-4">
                A solução está mais perto do que você imagina
              </p>
              <h2 className="font-serif text-[#2B1A0E] text-2xl md:text-4xl mb-4">
                Remédios Caseiros e Naturais — Baratos, no Mercado da Esquina, Com o Passo a Passo Certo
              </h2>
              <p className="text-[#2B1A0E]/60 text-base md:text-lg max-w-2xl mx-auto">
                Com os ingredientes certos e as orientações adequadas, você pode enfrentar o estresse, melhorar a alimentação, dormir melhor e recuperar a energia — e redescobrir vitalidade, vigor e relacionamentos mais saudáveis e felizes.
              </p>
            </Reveal>

            <StaggerChildren
              className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-4xl mx-auto"
              staggerDelay={0.12}
            >
              {[
                {
                  icon: <ShoppingBag className="h-5 w-5 text-[#B94A2F]" />,
                  title: "Tudo no mercado",
                  desc: "Ingredientes que você encontra no supermercado ou na feira do bairro. Nada de fórmula cara ou difícil.",
                },
                {
                  icon: <Leaf className="h-5 w-5 text-[#B94A2F]" />,
                  title: "100% natural",
                  desc: "Remédios caseiros e receitas ancestrais. Sem químicos desnecessários, com resultados que o corpo sente.",
                },
                {
                  icon: <BookOpen className="h-5 w-5 text-[#B94A2F]" />,
                  title: "Direções certas",
                  desc: "Guias em formato de ebook com passo a passo claro — para você aplicar em casa com segurança.",
                },
              ].map((item, i) => (
                <StaggerItem key={i}>
                  <div className="bg-white border border-[#2B1A0E]/8 rounded-xl p-6 md:p-8 text-center shadow-[0_2px_12px_rgba(43,26,14,0.06)]">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-[#B94A2F]/10 mb-5">
                      {item.icon}
                    </div>
                    <h3 className="font-serif text-lg text-[#2B1A0E] mb-3">
                      {item.title}
                    </h3>
                    <p className="text-[#2B1A0E]/60 text-sm leading-relaxed">
                      {item.desc}
                    </p>
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

        {/* ========== PRICE CARD + CTA — Oferta limitada R$397 → R$147,17 ========== */}
        <section id="oferta" className="bg-[#2B1A0E] grain-overlay grain-light py-20 md:py-28 scroll-mt-8">
          <div className="container mx-auto px-4 md:px-6">
            <Reveal direction="up" className="text-center mb-10">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#B94A2F]/20 text-[#F5EDE0] text-sm font-semibold mb-6">
                <Clock className="h-4 w-4" />
                Oferta por tempo limitado
              </span>
              <h2
                className="font-serif text-2xl md:text-4xl lg:text-5xl mb-4"
                style={{ color: "#F5EDE0" }}
              >
                Todos os Nossos Ebooks — Solteiros e Casais
              </h2>
              <p className="text-[#F5EDE0]/65 text-base md:text-lg max-w-xl mx-auto">
                Acesso completo a todos os guias por um preço único. Recupere sua vitalidade e seus relacionamentos.
              </p>
            </Reveal>

            <Reveal direction="up" delay={0.15} className="flex justify-center overflow-visible">
              <div className="w-full max-w-lg min-w-0 bg-[#F5EDE0]/10 border-2 border-[#F5EDE0]/20 rounded-2xl p-6 md:p-10 text-center shadow-xl overflow-visible">
                {/* Product image */}
                <div className="relative w-full max-w-[200px] mx-auto mb-6 aspect-[3/4] rounded-xl overflow-hidden bg-[#F5EDE0]/10">
                  <Image
                    src="/images/EBook.png"
                    alt="Ebooks Afro Potente — Guias de vitalidade e bem-estar"
                    fill
                    sizes="200px"
                    className="object-cover"
                    priority
                  />
                </div>
                {/* Price strikethrough + new price */}
                <div className="flex flex-wrap items-baseline justify-center gap-3 mb-2">
                  <span className="text-[#F5EDE0]/50 text-xl md:text-2xl line-through font-sans">
                    R$ 397,00
                  </span>
                  <span
                    className="font-serif text-4xl md:text-5xl font-bold"
                    style={{ color: "#F5EDE0" }}
                  >
                    R$ 147,17
                  </span>
                </div>
                <p className="text-[#F5EDE0]/70 text-sm mb-6">
                  Preço promocional — por tempo limitado
                </p>

                <ul className="space-y-3 mb-8 text-left max-w-xs mx-auto">
                  {[
                    "Ebooks para solteiros e casais",
                    "Remédios caseiros e receitas naturais",
                    "Passo a passo para energia e vitalidade",
                    "Acesso imediato por e-mail",
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-[#F5EDE0]/90 text-sm">
                      <CheckCircle2 className="h-5 w-5 text-[#B94A2F] shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>

                <Button
                  asChild
                  size="lg"
                  className="w-full min-w-0 text-sm sm:text-base py-6 sm:py-7 rounded-xl px-5 sm:px-6 min-h-[48px]"
                >
                  {EBOOK_BUNDLE_OFFER_URL.startsWith("http") ? (
                    <a
                      href={EBOOK_BUNDLE_OFFER_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2"
                    >
                      Quero garantir minha oferta — R$ 147,17
                      <ArrowRight className="h-4 w-4 shrink-0" aria-hidden />
                    </a>
                  ) : (
                    <Link href={EBOOK_BUNDLE_OFFER_URL} className="inline-flex items-center justify-center gap-2">
                      Quero garantir minha oferta — R$ 147,17
                      <ArrowRight className="h-4 w-4 shrink-0" aria-hidden />
                    </Link>
                  )}
                </Button>

                <p className="text-[#F5EDE0]/50 text-xs mt-4">
                  Pagamento 100% seguro · Entrega imediata por e-mail · Acesso vitalício
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ========== TRUST STRIP ========== */}
        <section className="py-10 md:py-14 border-b border-[#2B1A0E]/8 bg-[#F5EDE0]">
          <div className="container mx-auto px-4 md:px-6">
            <StaggerChildren
              className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8"
              staggerDelay={0.08}
            >
              {[
                { icon: <Leaf className="h-5 w-5 text-[#B94A2F]" />, label: "100% natural" },
                { icon: <Heart className="h-5 w-5 text-[#B94A2F]" />, label: "Solteiros e casais" },
                { icon: <Zap className="h-5 w-5 text-[#B94A2F]" />, label: "Acesso imediato" },
                { icon: <CheckCircle2 className="h-5 w-5 text-[#B94A2F]" />, label: "Pagamento seguro" },
              ].map((item, i) => (
                <StaggerItem key={i}>
                  <div className="flex flex-col items-center gap-2 text-center">
                    <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-[#B94A2F]/10">
                      {item.icon}
                    </div>
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
              <h2
                className="font-serif text-2xl md:text-4xl mb-4 max-w-2xl mx-auto"
                style={{ color: "#F5EDE0" }}
              >
                Recupere Sua Energia e Seus Relacionamentos — Hoje
              </h2>
              <p className="text-[#F5EDE0]/55 text-base md:text-lg max-w-lg mx-auto mb-8">
                Remédios caseiros, ingredientes do mercado, orientações claras. Tudo por R$ 147,17 por tempo limitado.
              </p>
              <Button asChild size="lg" className="text-base px-8 min-h-[48px]">
                {EBOOK_BUNDLE_OFFER_URL.startsWith("http") ? (
                  <a href={EBOOK_BUNDLE_OFFER_URL} target="_blank" rel="noopener noreferrer">
                    Quero a oferta especial
                    <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
                  </a>
                ) : (
                  <Link href={EBOOK_BUNDLE_OFFER_URL}>
                    Quero a oferta especial
                    <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
                  </Link>
                )}
              </Button>
            </Reveal>
          </div>
        </section>

        {/* FAQ — top objections (CRO: Trust Layer + Friction Audit) */}
        <section className="py-16 md:py-20 bg-[#FAF7F2] border-t border-[#2B1A0E]/8">
          <div className="container mx-auto px-4 md:px-6 max-w-2xl">
            <Reveal direction="up" className="text-center mb-10">
              <h2 className="font-serif text-[#2B1A0E] text-xl md:text-2xl">
                Perguntas frequentes
              </h2>
            </Reveal>
            <Accordion type="single" collapsible className="space-y-2">
              <AccordionItem value="faq-1" className="bg-white border border-[#2B1A0E]/10 rounded-xl px-4">
                <AccordionTrigger className="text-left font-sans font-semibold text-[#2B1A0E] py-4">
                  Quando recebo os ebooks?
                </AccordionTrigger>
                <AccordionContent className="pb-4 text-[#2B1A0E]/70 text-sm">
                  Imediatamente após a confirmação do pagamento você recebe o link por e-mail. Acesso vitalício, sem mensalidade.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="faq-2" className="bg-white border border-[#2B1A0E]/10 rounded-xl px-4">
                <AccordionTrigger className="text-left font-sans font-semibold text-[#2B1A0E] py-4">
                  O pagamento é seguro?
                </AccordionTrigger>
                <AccordionContent className="pb-4 text-[#2B1A0E]/70 text-sm">
                  Sim. O pagamento é processado em ambiente seguro. Você pode usar cartão ou as opções disponíveis na página de checkout.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="faq-3" className="bg-white border border-[#2B1A0E]/10 rounded-xl px-4">
                <AccordionTrigger className="text-left font-sans font-semibold text-[#2B1A0E] py-4">
                  Para quem são os guias?
                </AccordionTrigger>
                <AccordionContent className="pb-4 text-[#2B1A0E]/70 text-sm">
                  Para solteiros e casais que querem mais energia, vitalidade e bem-estar com remédios caseiros e naturais. Os ebooks trazem passo a passo para você aplicar em casa.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>

        {/* Sticky mobile CTA — CRO: always visible on mobile, 48px+ touch target */}
        <div className="fixed bottom-0 left-0 right-0 z-50 p-3 lg:hidden bg-[#2B1A0E]/95 backdrop-blur-sm border-t border-[#F5EDE0]/10 safe-area-pb">
          <div className="container mx-auto px-4">
            <Button asChild size="lg" className="w-full min-h-[48px] rounded-xl text-base font-semibold py-3">
              {EBOOK_BUNDLE_OFFER_URL.startsWith("http") ? (
                <a href={EBOOK_BUNDLE_OFFER_URL} target="_blank" rel="noopener noreferrer">
                  Quero garantir minha oferta — R$ 147,17
                </a>
              ) : (
                <Link href={EBOOK_BUNDLE_OFFER_URL}>
                  Quero garantir minha oferta — R$ 147,17
                </Link>
              )}
            </Button>
          </div>
        </div>
        <div className="h-20 lg:h-0" aria-hidden />
      </main>
    </div>
  );
}
