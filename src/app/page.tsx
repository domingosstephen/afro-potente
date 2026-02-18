import Link from "next/link";
import { ArrowRight, Leaf, BookOpen, Users, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-[#F5EDE0] font-sans overflow-x-hidden">
      <Navbar />

      <main className="flex-1 pt-20">
        {/* Hero Section */}
        <section className="bg-[#2B1A0E] py-16 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h1 className="font-serif text-3xl md:text-5xl lg:text-6xl mb-6 max-w-3xl mx-auto" style={{ color: '#F5EDE0' }}>
              Receitas Ancestrais Para Uma Vida Mais Potente
            </h1>
            <p className="text-[#F5EDE0]/70 text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
              Descubra o poder dos remedios naturais africanos para energia, vitalidade e saude plena.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link href="/guia-de-bem-estar">Explorar Receitas</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-[#F5EDE0]/30 text-[#F5EDE0] hover:bg-[#F5EDE0] hover:text-[#2B1A0E]">
                <Link href="/como-funciona">Saiba Mais</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Value Propositions */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
              {[
                {
                  icon: <Leaf className="h-6 w-6 text-[#B94A2F]" strokeWidth={2} />,
                  title: "100% Natural",
                  desc: "Ingredientes da terra, sem quimica, sem efeito colateral."
                },
                {
                  icon: <BookOpen className="h-6 w-6 text-[#B94A2F]" strokeWidth={2} />,
                  title: "Sabedoria Ancestral",
                  desc: "Receitas usadas por geracoes em comunidades africanas."
                },
                {
                  icon: <Users className="h-6 w-6 text-[#B94A2F]" strokeWidth={2} />,
                  title: "Resultados Reais",
                  desc: "Milhares ja sentiram a diferenca no corpo e na energia."
                }
              ].map((item, i) => (
                <div key={i} className="text-center md:text-left">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-[#B94A2F]/10 mb-5">
                    {item.icon}
                  </div>
                  <h3 className="font-serif text-xl text-[#2B1A0E] mb-3">{item.title}</h3>
                  <p className="text-[#2B1A0E]/60 text-base leading-relaxed max-w-none">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Recipes */}
        <section className="py-16 md:py-24 bg-[#FAF7F2]">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
              <div>
                <h2 className="font-serif text-[#2B1A0E] mb-3">Receitas Mais Populares</h2>
                <p className="text-[#2B1A0E]/60 max-w-lg">A sabedoria da terra, no seu corpo. Receitas simples e poderosas.</p>
              </div>
              <Link href="/guia-de-bem-estar" className="text-[#B94A2F] font-semibold text-sm flex items-center gap-2 hover:gap-3 transition-all">
                Ver Todas as Receitas <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              {[
                {
                  title: "Citrulina e Oxido Nitrico",
                  desc: "Melancia e gengibre para circulacao e energia.",
                  tag: "Energia",
                  img: "https://images.unsplash.com/photo-1610970881699-44a1fd18ca59?q=80&w=800&auto=format&fit=crop"
                },
                {
                  title: "Quercetina e Circulacao",
                  desc: "Cebola e alho para saude vascular.",
                  tag: "Saude",
                  img: "https://images.unsplash.com/photo-1556229162-5c63ed9c4ffb?q=80&w=800&auto=format&fit=crop"
                },
                {
                  title: "Estimulo Sensorial e Libido",
                  desc: "Cravo, canela e quiabo para vitalidade.",
                  tag: "Stamina",
                  img: "https://images.unsplash.com/photo-1544787210-2827448b320c?q=80&w=800&auto=format&fit=crop"
                }
              ].map((recipe, i) => (
                <Link key={i} href="/guia-de-bem-estar" className="group">
                  <div className="rounded-xl overflow-hidden bg-[#F5EDE0] border border-[#2B1A0E]/10 shadow-[0_2px_8px_rgba(43,26,14,0.08)] hover:shadow-[0_4px_16px_rgba(43,26,14,0.12)] hover:-translate-y-0.5 transition-all duration-200">
                    <div className="aspect-[16/10] overflow-hidden">
                      <img
                        src={recipe.img}
                        alt={recipe.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-5 md:p-6">
                      <span className="inline-block px-3 py-1 rounded-full bg-[#B94A2F] text-[#F5EDE0] text-xs font-semibold mb-3">
                        {recipe.tag}
                      </span>
                      <h3 className="font-serif text-lg text-[#2B1A0E] mb-2">{recipe.title}</h3>
                      <p className="text-sm text-[#2B1A0E]/60 leading-relaxed line-clamp-2 max-w-none">{recipe.desc}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="font-serif text-[#2B1A0E] text-center mb-12">O Que Estao Dizendo</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              {[
                {
                  quote: "Aquela energia que eu achava que tinha perdido voltou com forca. Receitas incriveis!",
                  name: "Carlos",
                  location: "Sao Paulo, SP"
                },
                {
                  quote: "Natural, potente, e sem efeito colateral. Resultados reais que eu senti no corpo.",
                  name: "Rafael",
                  location: "Rio de Janeiro, RJ"
                },
                {
                  quote: "A sabedoria ancestral funciona. Minha disposicao mudou completamente.",
                  name: "Marcos",
                  location: "Salvador, BA"
                }
              ].map((testimonial, i) => (
                <div key={i} className="bg-[#FAF7F2] border border-[#2B1A0E]/10 rounded-xl p-6 md:p-8">
                  <div className="flex gap-1 mb-4">
                    {[1,2,3,4,5].map((s) => (
                      <Star key={s} className="h-4 w-4 fill-[#B94A2F] text-[#B94A2F]" />
                    ))}
                  </div>
                  <p className="text-[#2B1A0E]/80 text-base leading-relaxed mb-6 italic max-w-none">
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>
                  <div>
                    <p className="font-semibold text-sm text-[#2B1A0E]">{testimonial.name}</p>
                    <p className="text-xs text-[#2B1A0E]/50">{testimonial.location}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About / Story */}
        <section className="py-16 md:py-24 bg-[#FAF7F2]">
          <div className="container mx-auto px-4 md:px-6 max-w-3xl text-center">
            <h2 className="font-serif text-[#2B1A0E] mb-6">Nossa Historia</h2>
            <p className="text-[#2B1A0E]/70 text-base md:text-lg leading-relaxed mb-4 mx-auto">
              A Afro Potente nasce da heranca africana, onde vitalidade e energia sempre foram tratadas com respeito e consciencia. Adaptamos esse conhecimento ao Brasil de forma etica e responsavel.
            </p>
            <p className="text-[#B94A2F] font-serif text-lg md:text-xl mb-8 italic">
              Nao vendemos milagres. Oferecemos tradicao e apoio ao seu bem-estar.
            </p>
            <Button asChild variant="outline" size="lg">
              <Link href="/como-funciona">Saiba Mais</Link>
            </Button>
          </div>
        </section>

        {/* Email / WhatsApp Signup */}
        <section className="py-16 md:py-24 bg-[#2B1A0E]">
          <div className="container mx-auto px-4 md:px-6 max-w-2xl text-center">
            <h2 className="font-serif mb-4" style={{ color: '#F5EDE0' }}>Receba Receitas Exclusivas</h2>
            <p className="text-[#F5EDE0]/60 text-base mb-8 mx-auto">
              Toda semana, uma nova receita ancestral direto na sua caixa — gratis.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="seu@email.com"
                className="flex-1 px-5 py-3.5 rounded-lg bg-[#F5EDE0]/10 border border-[#F5EDE0]/20 text-[#F5EDE0] placeholder:text-[#F5EDE0]/40 focus:outline-none focus:border-[#B94A2F] transition-colors font-sans text-sm"
              />
              <Button size="lg" className="shrink-0">
                Quero Receber
              </Button>
            </div>
            <p className="text-xs text-[#F5EDE0]/30 mt-4">Sem spam. Cancele quando quiser.</p>
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
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            Receber no WhatsApp
          </a>
        </div>
      </main>

      <Footer />
    </div>
  );
}
