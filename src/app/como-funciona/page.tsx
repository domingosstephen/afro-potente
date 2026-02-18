import Link from "next/link";
import { BookOpen, Leaf, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function ComoFunciona() {
  return (
    <div className="flex min-h-screen flex-col bg-[#F5EDE0] font-sans">
      <Navbar />

      <main className="flex-1 pt-20">
        {/* Hero */}
        <section className="py-16 md:py-24 text-center">
          <div className="container mx-auto px-4 md:px-6">
            <h1 className="font-serif text-[#2B1A0E] mb-6 max-w-3xl mx-auto">
              Sabedoria ancestral, receitas simples, resultados reais
            </h1>
            <p className="text-lg text-[#2B1A0E]/60 max-w-2xl mx-auto leading-relaxed mb-10">
              Seu corpo ja sabe o que fazer. A gente so lembra ele das receitas certas.
            </p>
            <Button asChild size="lg">
              <Link href="/guia-de-bem-estar">Explorar Receitas</Link>
            </Button>
          </div>
        </section>

        {/* Steps */}
        <section className="py-16 md:py-24 bg-[#FAF7F2]">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16">
              {[
                {
                  step: "01",
                  title: "Escolha sua receita",
                  icon: <BookOpen className="h-6 w-6 text-[#B94A2F]" />,
                  desc: "Explore nosso guia de receitas ancestrais organizadas por beneficio: energia, vitalidade ou bem-estar geral."
                },
                {
                  step: "02",
                  title: "Prepare com ingredientes simples",
                  icon: <Leaf className="h-6 w-6 text-[#B94A2F]" />,
                  desc: "Todas as receitas usam ingredientes naturais encontrados em qualquer feira ou mercado. Preparo facil, na sua cozinha."
                },
                {
                  step: "03",
                  title: "Sinta a diferenca",
                  icon: <ArrowRight className="h-6 w-6 text-[#B94A2F]" />,
                  desc: "Com consistencia e respeito ao seu corpo, sinta mais energia, presenca e vitalidade no dia a dia."
                }
              ].map((item, i) => (
                <div key={i} className="relative">
                  <span className="text-6xl font-serif text-[#B94A2F]/10 absolute -top-6 -left-2">{item.step}</span>
                  <div className="relative z-10 pt-8">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-[#B94A2F]/10 mb-5">
                      {item.icon}
                    </div>
                    <h3 className="font-serif text-xl text-[#2B1A0E] mb-3">{item.title}</h3>
                    <p className="text-[#2B1A0E]/60 text-base leading-relaxed max-w-none">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6 max-w-3xl">
            <h2 className="font-serif text-[#2B1A0E] text-center mb-12">Duvidas Frequentes</h2>

            <Accordion type="single" collapsible className="w-full space-y-3">
              {[
                { q: "As receitas sao 100% naturais?", a: "Sim. Todas usam ingredientes naturais como raizes, frutas, ervas e especiarias tradicionais de comunidades africanas." },
                { q: "Preciso de ingredientes dificeis de encontrar?", a: "Nao. Todos os ingredientes sao facilmente encontrados em feiras e supermercados brasileiros." },
                { q: "As receitas substituem tratamento medico?", a: "Nao. Nossas receitas sao de bem-estar e uso educativo. Sempre incentivamos o acompanhamento profissional para condicoes de saude." },
                { q: "Como recebo os guias digitais?", a: "Apos a confirmacao do pagamento, voce recebe um link de acesso via e-mail e WhatsApp." }
              ].map((item, i) => (
                <AccordionItem key={i} value={`item-${i}`} className="border border-[#2B1A0E]/10 bg-[#FAF7F2] px-6 rounded-xl overflow-hidden">
                  <AccordionTrigger className="hover:no-underline">
                    {item.q}
                  </AccordionTrigger>
                  <AccordionContent>
                    {item.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 md:py-24 bg-[#B94A2F]">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h2 className="font-serif text-2xl md:text-4xl mb-6" style={{ color: '#F5EDE0' }}>
              Mais energia, mais presenca, mais voce.
            </h2>
            <p className="text-[#F5EDE0]/80 text-base mb-10 max-w-xl mx-auto">
              A sabedoria da terra, no seu corpo. Comece agora com nossas receitas ancestrais.
            </p>
            <Button asChild size="lg" className="bg-[#2B1A0E] hover:bg-[#2B1A0E]/90 text-[#F5EDE0]">
              <Link href="/guia-de-bem-estar">Explorar Receitas</Link>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
