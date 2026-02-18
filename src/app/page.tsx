"use client";

import Link from "next/link";
import {
  ArrowRight,
  Leaf,
  BookOpen,
  ShieldCheck,
  Zap,
  Clock,
  Heart,
  Flame,
  Droplets,
  Sun,
  CheckCircle2,
  ChevronRight,
} from "lucide-react";
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

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-[#F5EDE0] font-sans overflow-x-hidden">
      <Navbar />

      <main className="flex-1 pt-20">
        {/* ========== 1. HERO ========== */}
        <section className="bg-[#2B1A0E] grain-overlay grain-light py-20 md:py-32 lg:py-40">
          <div className="container mx-auto px-4 md:px-6 text-center">
            {/* Authority badge */}
            <Reveal direction="none" delay={0} duration={0.5}>
              <span className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#F5EDE0]/8 border border-[#F5EDE0]/15 text-[#F5EDE0]/70 text-xs font-semibold tracking-wide uppercase mb-8">
                <Leaf className="h-3.5 w-3.5" />
                Baseado em tradicoes ancestrais africanas
              </span>
            </Reveal>

            <Reveal direction="up" delay={0.15} duration={0.7}>
              <h1
                className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-6 max-w-4xl mx-auto leading-[1.1]"
                style={{ color: "#F5EDE0" }}
              >
                Protocolos Naturais Para Energia, Vitalidade e Bem-Estar Pleno
              </h1>
            </Reveal>

            <Reveal direction="up" delay={0.35} duration={0.6}>
              <p className="text-[#F5EDE0]/65 text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
                Guias digitais com receitas de ingredientes naturais — organizados por objetivo, com instrucoes claras e resultados que voce sente no corpo.
              </p>
            </Reveal>

            <Reveal direction="up" delay={0.5} duration={0.5}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="text-base px-8">
                  <Link href="/produtos">
                    Conhecer Protocolos
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-[#F5EDE0]/25 text-[#F5EDE0] hover:bg-[#F5EDE0] hover:text-[#2B1A0E] text-base"
                >
                  <Link href="/como-funciona">Como Funciona</Link>
                </Button>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ========== 2. AUTHORITY STRIP ========== */}
        <section className="py-10 md:py-14 border-b border-[#2B1A0E]/8">
          <div className="container mx-auto px-4 md:px-6">
            <StaggerChildren
              className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12"
              staggerDelay={0.08}
            >
              {[
                {
                  icon: <BookOpen className="h-5 w-5 text-[#B94A2F]" />,
                  title: "Tradicao de Geracoes",
                  desc: "Receitas passadas por comunidades africanas",
                },
                {
                  icon: <Leaf className="h-5 w-5 text-[#B94A2F]" />,
                  title: "100% Natural",
                  desc: "Ingredientes de feira, sem quimica",
                },
                {
                  icon: <ShieldCheck className="h-5 w-5 text-[#B94A2F]" />,
                  title: "Protocolos Estruturados",
                  desc: "Passo a passo claro e organizado",
                },
                {
                  icon: <Zap className="h-5 w-5 text-[#B94A2F]" />,
                  title: "Entrega Imediata",
                  desc: "Acesso por e-mail apos a compra",
                },
              ].map((item, i) => (
                <StaggerItem key={i}>
                  <div className="text-center">
                    <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-[#B94A2F]/8 mb-3">
                      {item.icon}
                    </div>
                    <p className="font-semibold text-sm text-[#2B1A0E] mb-1">
                      {item.title}
                    </p>
                    <p className="text-xs text-[#2B1A0E]/50 max-w-none">
                      {item.desc}
                    </p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerChildren>
          </div>
        </section>

        {/* ========== 3. PROBLEM SECTION ========== */}
        <section className="bg-[#2B1A0E] grain-overlay grain-light py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <Reveal direction="up" className="text-center mb-12 md:mb-16">
              <p className="text-[#B94A2F] text-sm font-semibold tracking-wide uppercase mb-4">
                Talvez voce se identifique
              </p>
              <h2
                className="font-serif text-2xl md:text-4xl max-w-2xl mx-auto"
                style={{ color: "#F5EDE0" }}
              >
                Quando o corpo pede atencao, a natureza tem respostas
              </h2>
            </Reveal>

            <StaggerChildren
              className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto"
              staggerDelay={0.12}
            >
              {[
                {
                  icon: <Clock className="h-6 w-6" />,
                  title: "Energia que foi embora",
                  desc: "Aquele cansaco que nao passa, mesmo dormindo bem. A disposicao que voce tinha parece distante.",
                },
                {
                  icon: <Heart className="h-6 w-6" />,
                  title: "Vitalidade em declinio",
                  desc: "O corpo nao responde como antes. A confianca diminui e o dia a dia pesa mais do que deveria.",
                },
                {
                  icon: <ShieldCheck className="h-6 w-6" />,
                  title: "Medo dos efeitos colaterais",
                  desc: "Voce quer melhorar, mas nao quer depender de quimica. Busca algo natural e sem risco.",
                },
              ].map((item, i) => (
                <StaggerItem key={i}>
                  <div className="bg-[#F5EDE0]/6 border border-[#F5EDE0]/10 rounded-xl p-6 md:p-8">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-[#B94A2F]/15 text-[#B94A2F] mb-5">
                      {item.icon}
                    </div>
                    <h3
                      className="font-serif text-lg mb-3"
                      style={{ color: "#F5EDE0" }}
                    >
                      {item.title}
                    </h3>
                    <p className="text-[#F5EDE0]/55 text-sm leading-relaxed max-w-none">
                      {item.desc}
                    </p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerChildren>

            <Reveal direction="up" delay={0.3} className="text-center mt-10 md:mt-14">
              <p className="text-[#F5EDE0]/50 text-sm md:text-base italic max-w-lg mx-auto">
                Se voce se identificou com algum desses sinais, nossos protocolos foram criados para voce.
              </p>
            </Reveal>
          </div>
        </section>

        <SectionDivider variant="wave" color="#F5EDE0" bgColor="#2B1A0E" />

        {/* ========== 4. SOLUTION — PROTOCOLS ========== */}
        <section className="dot-pattern py-20 md:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <Reveal direction="up" className="text-center mb-14 md:mb-20">
              <p className="text-[#B94A2F] text-sm font-semibold tracking-wide uppercase mb-4">
                Nossos Protocolos
              </p>
              <h2 className="font-serif text-[#2B1A0E] text-2xl md:text-4xl mb-4">
                Receitas Ancestrais, Resultados No Corpo
              </h2>
              <p className="text-[#2B1A0E]/55 text-base md:text-lg max-w-2xl mx-auto">
                Cada protocolo combina ingredientes naturais com instrucoes precisas — organizados pelo resultado que voce busca.
              </p>
            </Reveal>

            <StaggerChildren
              className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
              staggerDelay={0.12}
            >
              {[
                {
                  title: "Protocolo Energia & Disposicao",
                  desc: "Melancia, gengibre e combinacoes que apoiam a circulacao e devolvem vigor ao dia a dia. Ingredientes simples, preparo rapido.",
                  tag: "Energia",
                  icon: <Zap className="h-5 w-5" />,
                  img: "https://images.unsplash.com/photo-1610970881699-44a1fd18ca59?q=80&w=800&auto=format&fit=crop",
                },
                {
                  title: "Protocolo Circulacao & Saude",
                  desc: "Cebola, alho e temperos tradicionais africanos que cuidam da saude vascular. Tudo com base na sabedoria ancestral.",
                  tag: "Saude",
                  icon: <Heart className="h-5 w-5" />,
                  img: "https://images.unsplash.com/photo-1556229162-5c63ed9c4ffb?q=80&w=800&auto=format&fit=crop",
                },
                {
                  title: "Protocolo Vitalidade & Confianca",
                  desc: "Cravo, canela e quiabo em receitas que aquecem o corpo e fortalecem a disposicao. Tradicao transformada em rotina.",
                  tag: "Vitalidade",
                  icon: <Flame className="h-5 w-5" />,
                  img: "https://images.unsplash.com/photo-1544787210-2827448b320c?q=80&w=800&auto=format&fit=crop",
                },
              ].map((protocol, i) => (
                <StaggerItem key={i}>
                  <Link href="/produtos" className="group block">
                    <div className="rounded-xl overflow-hidden bg-white border border-[#2B1A0E]/8 shadow-[0_2px_12px_rgba(43,26,14,0.06)] hover:shadow-[0_8px_30px_rgba(43,26,14,0.12)] hover:-translate-y-1 transition-all duration-300">
                      {/* Image placeholder */}
                      <div className="aspect-[16/10] overflow-hidden relative">
                        <img
                          src={protocol.img}
                          alt={protocol.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#2B1A0E]/30 to-transparent" />
                        <span className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#2B1A0E]/80 backdrop-blur-sm text-[#F5EDE0] text-xs font-semibold">
                          {protocol.icon}
                          {protocol.tag}
                        </span>
                      </div>
                      <div className="p-5 md:p-6">
                        <h3 className="font-serif text-lg text-[#2B1A0E] mb-2 group-hover:text-[#B94A2F] transition-colors">
                          {protocol.title}
                        </h3>
                        <p className="text-sm text-[#2B1A0E]/55 leading-relaxed max-w-none">
                          {protocol.desc}
                        </p>
                        <span className="inline-flex items-center gap-1 text-[#B94A2F] text-sm font-semibold mt-4 group-hover:gap-2 transition-all">
                          Ver protocolo
                          <ChevronRight className="h-4 w-4" />
                        </span>
                      </div>
                    </div>
                  </Link>
                </StaggerItem>
              ))}
            </StaggerChildren>
          </div>
        </section>

        {/* ========== 5. HOW IT WORKS ========== */}
        <section className="bg-[#FAF7F2] grain-overlay grain-dark py-20 md:py-28">
          <div className="container mx-auto px-4 md:px-6">
            <Reveal direction="up" className="text-center mb-14 md:mb-20">
              <p className="text-[#B94A2F] text-sm font-semibold tracking-wide uppercase mb-4">
                Simples assim
              </p>
              <h2 className="font-serif text-[#2B1A0E] text-2xl md:text-4xl">
                Tres Passos Para Mais Vitalidade
              </h2>
            </Reveal>

            <StaggerChildren
              className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 max-w-5xl mx-auto"
              staggerDelay={0.15}
            >
              {[
                {
                  step: "01",
                  icon: <BookOpen className="h-5 w-5 text-[#B94A2F]" />,
                  title: "Escolha seu protocolo",
                  desc: "Energia, vitalidade ou saude. Cada guia tem foco em um objetivo especifico para voce.",
                },
                {
                  step: "02",
                  icon: <Leaf className="h-5 w-5 text-[#B94A2F]" />,
                  title: "Prepare com ingredientes de feira",
                  desc: "Melancia, gengibre, cebola, cravo — ingredientes que voce ja conhece, em receitas que voce nunca viu.",
                },
                {
                  step: "03",
                  icon: <Sun className="h-5 w-5 text-[#B94A2F]" />,
                  title: "Sinta a diferenca no corpo",
                  desc: "Siga o protocolo diario com consistencia. Os resultados chegam no seu ritmo, de forma natural.",
                },
              ].map((item, i) => (
                <StaggerItem key={i}>
                  <div className="bg-white border border-[#2B1A0E]/6 rounded-xl p-6 md:p-8 text-center relative">
                    {/* Step number pill */}
                    <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#2B1A0E] mb-5">
                      <span className="text-[#F5EDE0] text-sm font-bold font-sans">{item.step}</span>
                    </div>
                    {/* Icon */}
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-[#B94A2F]/8 mb-5 ml-3">
                      {item.icon}
                    </div>
                    <h3 className="font-serif text-lg text-[#2B1A0E] mb-3">
                      {item.title}
                    </h3>
                    <p className="text-[#2B1A0E]/50 text-sm leading-relaxed max-w-none">
                      {item.desc}
                    </p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerChildren>
          </div>
        </section>

        {/* ========== 6. INGREDIENTS SHOWCASE ========== */}
        <section className="bg-[#2B1A0E] grain-overlay grain-light py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <Reveal direction="up" className="text-center mb-12 md:mb-16">
              <p className="text-[#B94A2F] text-sm font-semibold tracking-wide uppercase mb-4">
                Transparencia total
              </p>
              <h2
                className="font-serif text-2xl md:text-4xl mb-4"
                style={{ color: "#F5EDE0" }}
              >
                Ingredientes Que Voce Conhece e Confia
              </h2>
              <p className="text-[#F5EDE0]/55 text-base max-w-2xl mx-auto">
                Sem formulas secretas, sem nomes complicados. Cada receita usa o que a natureza oferece de melhor.
              </p>
            </Reveal>

            <StaggerChildren
              className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-4xl mx-auto"
              staggerDelay={0.08}
            >
              {[
                {
                  name: "Melancia",
                  benefit: "Circulacao e energia",
                  icon: <Droplets className="h-5 w-5" />,
                },
                {
                  name: "Gengibre",
                  benefit: "Disposicao e aquecimento",
                  icon: <Flame className="h-5 w-5" />,
                },
                {
                  name: "Cravo & Canela",
                  benefit: "Vitalidade e calor corporal",
                  icon: <Sun className="h-5 w-5" />,
                },
                {
                  name: "Cebola & Alho",
                  benefit: "Saude vascular natural",
                  icon: <Heart className="h-5 w-5" />,
                },
              ].map((ingredient, i) => (
                <StaggerItem key={i}>
                  <div className="bg-[#F5EDE0]/6 border border-[#F5EDE0]/10 rounded-xl p-5 md:p-6 text-center hover:bg-[#F5EDE0]/10 transition-colors duration-300">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-[#B94A2F]/15 text-[#B94A2F] mb-4">
                      {ingredient.icon}
                    </div>
                    <p
                      className="font-serif text-base mb-1"
                      style={{ color: "#F5EDE0" }}
                    >
                      {ingredient.name}
                    </p>
                    <p className="text-[#F5EDE0]/45 text-xs max-w-none">
                      {ingredient.benefit}
                    </p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerChildren>
          </div>
        </section>

        <SectionDivider variant="wave" color="#FAF7F2" bgColor="#2B1A0E" />

        {/* ========== 7. FAQ ========== */}
        <section className="bg-[#FAF7F2] py-16 md:py-24">
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
              <Accordion type="single" collapsible className="space-y-3">
                {[
                  {
                    q: "Em quanto tempo vou perceber alguma diferenca?",
                    a: "Cada corpo responde no seu ritmo. Muitas pessoas relatam mais disposicao e energia ja nos primeiros dias de uso consistente do protocolo.",
                  },
                  {
                    q: "Preciso de ingredientes dificeis de encontrar?",
                    a: "Nao. Todas as receitas usam ingredientes comuns: melancia, gengibre, cebola, alho, cravo, canela — tudo que voce encontra em qualquer feira ou supermercado.",
                  },
                  {
                    q: "Substitui tratamento ou acompanhamento medico?",
                    a: "Nao. Nossos protocolos sao educativos e de bem-estar. Sempre recomendamos manter o acompanhamento com um profissional de saude.",
                  },
                  {
                    q: "Como recebo o material depois da compra?",
                    a: "Imediatamente apos a confirmacao do pagamento, voce recebe o guia em PDF por e-mail. Acesso vitalicio, sem mensalidade.",
                  },
                  {
                    q: "O conteudo e seguro para qualquer pessoa?",
                    a: "Sim. As receitas sao baseadas em ingredientes naturais e tradicionais. Se voce tiver alguma condicao de saude especifica, consulte seu medico antes de iniciar qualquer protocolo.",
                  },
                ].map((faq, i) => (
                  <AccordionItem
                    key={i}
                    value={`faq-${i}`}
                    className="border border-[#2B1A0E]/10 bg-white rounded-xl px-6 data-[state=open]:shadow-[0_4px_16px_rgba(43,26,14,0.06)]"
                  >
                    <AccordionTrigger className="text-left py-5">
                      {faq.q}
                    </AccordionTrigger>
                    <AccordionContent className="pb-5">
                      {faq.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </Reveal>
          </div>
        </section>

        {/* ========== 8. FINAL CTA ========== */}
        <section className="bg-[#2B1A0E] grain-overlay grain-light py-20 md:py-28">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <Reveal direction="up">
              <h2
                className="font-serif text-2xl md:text-4xl lg:text-5xl mb-6 max-w-3xl mx-auto"
                style={{ color: "#F5EDE0" }}
              >
                Comece Seu Protocolo Hoje
              </h2>
            </Reveal>
            <Reveal direction="up" delay={0.15}>
              <p className="text-[#F5EDE0]/55 text-base md:text-lg max-w-xl mx-auto mb-10 leading-relaxed">
                Ingredientes naturais, instrucoes claras, resultados no corpo. Acesso imediato por e-mail apos a compra.
              </p>
            </Reveal>
            <Reveal direction="up" delay={0.3}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="text-base px-8">
                  <Link href="/produtos">
                    Ver Protocolos
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-[#F5EDE0]/25 text-[#F5EDE0] hover:bg-[#F5EDE0] hover:text-[#2B1A0E] text-base"
                >
                  <Link href="/como-funciona">Como Funciona</Link>
                </Button>
              </div>
            </Reveal>

            {/* Trust signals */}
            <Reveal direction="up" delay={0.45}>
              <div className="flex flex-wrap justify-center gap-6 mt-12 text-[#F5EDE0]/35 text-xs">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-3.5 w-3.5" />
                  Pagamento seguro
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-3.5 w-3.5" />
                  Entrega imediata
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-3.5 w-3.5" />
                  Acesso vitalicio
                </span>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Sticky WhatsApp CTA - Mobile only */}
        <div className="fixed bottom-4 left-4 right-4 z-50 lg:hidden">
          <a
            href="https://wa.me/5500000000000"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full bg-[#25D366] hover:bg-[#20BD5A] text-white font-sans font-semibold text-sm py-4 rounded-xl shadow-lg transition-all"
          >
            <svg
              className="h-5 w-5"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Falar no WhatsApp
          </a>
        </div>
      </main>

      <Footer />
    </div>
  );
}
