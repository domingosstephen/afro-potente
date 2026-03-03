import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const freeGuides = [
  {
    id: "citrulina",
    title: "O Poder da Citrulina e do Oxido Nitrico",
    theme: "Melancia e Gengibre",
    description: "A melancia e rica em L-citrulina, um aminoacido que o corpo converte em L-arginina. Este processo e o precursor natural do Oxido Nitrico, responsavel por relaxar os vasos sanguineos e permitir um fluxo sanguineo vigoroso.",
    extra: "Quando combinada com o Gengibre, um termogenico que acelera a absorcao, o resultado e uma melhora significativa na resposta fisica.",
    cta: "Domine as proporcoes exatas e o protocolo de 7 dias no nosso guia completo.",
    productLink: "/produtos",
    productName: "Ver Protocolo",
    tag: "Energia",
    img: "/images/guides/watermelon-ginger.jpg"
  },
  {
    id: "quercetina",
    title: "A Ciencia da Quercetina e Circulacao",
    theme: "O Segredo da Cebola e Alho",
    description: "A cebola e uma das fontes mais ricas da natureza em Quercetina, um flavonoide que ajuda a combater a inflamacao arterial e a limpar o sistema circulatorio.",
    extra: "O Alho complementa reduzindo o cortisol, permitindo que os hormonios circulem livremente. Usado ha seculos em comunidades da Africa Ocidental.",
    cta: "Conheca o metodo de infusao de 72 horas no guia completo.",
    productLink: "/produtos",
    productName: "Ver Protocolo",
    tag: "Saude",
    img: "/images/guides/onion-garlic.jpg"
  },
  {
    id: "sensorial",
    title: "Estimulo Sensorial e Libido",
    theme: "Quiabo, Cravo e Canela",
    description: "O desejo começa no sistema nervoso. O Cravo da India e rico em eugenol, que atua como estimulante leve dos nervos e aumenta a sensibilidade.",
    extra: "A Canela promove aquecimento corporal que sinaliza prontidao ao cerebro. O Quiabo garante hidratacao e suporte mineral para vigor.",
    cta: "Descubra as misturas ideais no guia completo.",
    productLink: "/produtos",
    productName: "Ver Protocolo",
    tag: "Stamina",
    img: "/images/guides/okra-clove-cinnamon.jpg"
  }
];

export default function GuiaPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#F5EDE0] font-sans">
      <Navbar />

      <main className="flex-1 pt-20">
        {/* Hero */}
        <section className="py-16 md:py-24 text-center">
          <div className="container mx-auto px-4 md:px-6">
            <h1 className="font-serif text-[#2B1A0E] mb-6 max-w-3xl mx-auto">
              Guia de Bem-estar Natural
            </h1>
            <p className="text-lg text-[#2B1A0E]/60 max-w-2xl mx-auto leading-relaxed mb-10">
              Conhecimento ancestral e ciencia moderna aplicados de forma responsavel. Explore nossos recursos educativos para uma vida mais vital.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link href="/produtos">Ver Loja</Link>
              </Button>
              <Link href="#citrulina" className="text-[#B94A2F] font-semibold flex items-center gap-2 justify-center hover:gap-3 transition-all py-3">
                Explorar Guias <ChevronDown className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* Responsible Use Notice */}
        <section className="pb-12 md:pb-16">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto bg-[#B94A2F]/5 border border-[#B94A2F]/10 p-6 md:p-8 rounded-xl">
              <h3 className="font-serif text-lg text-[#B94A2F] mb-4">Uso responsavel</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  "Este conteudo e educativo e nao substitui atendimento medico.",
                  "Se voce usa medicamentos, busque orientacao profissional.",
                  "Interrompa o uso se sentir desconforto."
                ].map((text, i) => (
                  <p key={i} className="flex gap-2 text-sm text-[#2B1A0E]/60 leading-relaxed">
                    <CheckCircle2 className="h-4 w-4 text-[#B94A2F] shrink-0 mt-0.5" />
                    <span className="max-w-none">{text}</span>
                  </p>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Guides */}
        <section className="py-12 md:py-20">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="font-serif text-[#2B1A0E] mb-10">Guias de Vitalidade</h2>

            <div className="space-y-8">
              {freeGuides.map((guide) => (
                <div key={guide.id} id={guide.id} className="bg-[#FAF7F2] border border-[#2B1A0E]/10 rounded-xl overflow-hidden scroll-mt-24">
                  {/* Guide hero image */}
                  <div className="relative aspect-[21/9] overflow-hidden">
                    <Image
                      src={guide.img}
                      alt={guide.theme}
                      fill
                      sizes="(max-width: 768px) 100vw, 80vw"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#2B1A0E]/50 to-transparent" />
                    <div className="absolute bottom-4 left-6 md:bottom-6 md:left-10">
                      <span className="inline-block px-3 py-1 rounded-full bg-[#B94A2F] text-[#F5EDE0] text-xs font-semibold">
                        {guide.tag}
                      </span>
                      <p className="text-[#F5EDE0] font-serif text-lg md:text-xl mt-2">{guide.theme}</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 lg:grid-cols-3">
                    <div className="p-6 md:p-10 lg:col-span-2">
                      <div className="mb-4">
                        <span className="inline-block px-3 py-1 rounded-full bg-[#B94A2F] text-[#F5EDE0] text-xs font-semibold mb-3">
                          {guide.tag}
                        </span>
                        <span className="text-sm text-[#B94A2F] font-semibold ml-3">{guide.theme}</span>
                      </div>
                      <h3 className="font-serif text-xl md:text-2xl text-[#2B1A0E] mb-4">{guide.title}</h3>
                      <div className="space-y-3 text-[#2B1A0E]/60 leading-relaxed mb-6">
                        <p className="max-w-none">{guide.description}</p>
                        <p className="max-w-none">{guide.extra}</p>
                      </div>
                      <div className="p-4 bg-[#B94A2F]/5 border border-[#B94A2F]/10 rounded-lg">
                        <p className="text-[#B94A2F] text-sm mb-3 italic max-w-none">{guide.cta}</p>
                        <Button asChild size="sm">
                          <Link href={guide.productLink}>
                            {guide.productName} <ArrowRight className="h-4 w-4 ml-1" />
                          </Link>
                        </Button>
                      </div>
                    </div>
                    <div className="bg-[#F5EDE0] p-6 md:p-10 flex flex-col justify-center border-t lg:border-t-0 lg:border-l border-[#2B1A0E]/10">
                      <h4 className="text-sm font-semibold text-[#2B1A0E]/50 mb-4">O que voce vai aprender:</h4>
                      <ul className="space-y-3">
                        {[
                          "Proporcoes exatas das misturas",
                          "Protocolo de uso de 7 a 30 dias",
                          "Orientacoes de rotina e horarios"
                        ].map((item, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-[#2B1A0E]/70">
                            <CheckCircle2 className="h-4 w-4 text-[#B94A2F] shrink-0 mt-0.5" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Learning Paths */}
        <section className="py-12 md:py-20 bg-[#FAF7F2]">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="font-serif text-[#2B1A0E] mb-10">Trilhas de Aprendizado</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { title: "Oxido Nitrico & Circulacao", desc: "Entenda como esta molecula contribui para o relaxamento vascular e saude cardiovascular.", href: "/ciencia/oxido-nitrico" },
                { title: "Hormonios, Desejo & Rotina", desc: "Como o sono, o estresse e a alimentacao influenciam seus niveis de vitalidade.", href: "/ciencia/hormonios" },
                { title: "Seguranca em Primeiro Lugar", desc: "Orientacoes fundamentais sobre uso responsavel e quando buscar auxilio.", href: "/seguranca" }
              ].map((path, i) => (
                <Link key={i} href={path.href} className="group">
                  <div className="bg-[#F5EDE0] border border-[#2B1A0E]/10 p-6 md:p-8 rounded-xl h-full flex flex-col hover:shadow-[0_4px_16px_rgba(43,26,14,0.12)] hover:-translate-y-0.5 transition-all duration-200">
                    <h3 className="font-serif text-lg text-[#2B1A0E] mb-3 group-hover:text-[#B94A2F] transition-colors">{path.title}</h3>
                    <p className="text-sm text-[#2B1A0E]/60 mb-6 flex-1 leading-relaxed max-w-none">{path.desc}</p>
                    <span className="text-[#B94A2F] font-semibold text-sm flex items-center gap-2">
                      Explorar <ArrowRight className="h-4 w-4" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
