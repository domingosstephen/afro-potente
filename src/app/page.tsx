import Link from "next/link";
import { 
  ArrowRight, 
  Heart, 
  Zap, 
  TrendingUp, 
  ShieldCheck, 
  Lock, 
  CheckCircle2, 
  Leaf, 
  ArrowUpRight,
  Instagram,
  Twitter,
  Globe,
  Star
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/Navbar";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-[#050f05] text-white font-sans overflow-x-hidden">
      <Navbar />

      <main className="flex-1 pt-20 lg:pt-0">
        {/* Hero Section */}
        <section className="relative pt-10 pb-20 lg:pt-20 lg:pb-32 overflow-hidden">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div className="z-10 text-center lg:text-left">
                <div className="flex flex-wrap gap-2 mb-8 justify-center lg:justify-start">
                  <span className="inline-block px-3 py-1 rounded-full bg-[#22c55e]/10 text-[#22c55e] text-[9px] md:text-[10px] font-black uppercase tracking-widest border border-[#22c55e]/20">
                    🌿 100% Natural
                  </span>
                  <span className="inline-block px-3 py-1 rounded-full bg-orange-500/10 text-orange-400 text-[9px] md:text-[10px] font-black uppercase tracking-widest border border-orange-500/20">
                    🌍 Inspirado na África
                  </span>
                  <span className="inline-block px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-[9px] md:text-[10px] font-black uppercase tracking-widest border border-blue-500/20">
                    🇧🇷 Produzido no Brasil
                  </span>
                </div>
                
                <p className="text-[#22c55e] font-black uppercase tracking-[0.2em] text-[10px] md:text-xs mb-4">Sabedoria ancestral africana</p>
                <h1 className="text-4xl md:text-5xl lg:text-7xl font-black leading-[1.1] mb-6 md:mb-8 tracking-tighter">
                  Recupere sua <br className="hidden md:block" />
                  <span className="text-[#22c55e]">confiança</span> <br className="hidden md:block" />
                  naturalmente
                </h1>
                <p className="text-base md:text-lg text-white/60 mb-8 md:mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed font-medium">
                  Remédios naturais inspirados em práticas africanas milenares para apoiar a vitalidade, a energia e o equilíbrio íntimo — de forma consciente e respeitosa.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 mb-10 md:mb-12 justify-center lg:justify-start">
                  <Button asChild size="lg" className="bg-[#22c55e] hover:bg-[#1ea34d] text-[#050f05] font-black h-14 md:h-16 px-8 md:px-10 rounded-xl text-base md:text-lg transition-all hover:scale-105 cursor-pointer">
                    <Link href="/produtos">Ver Coleções</Link>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="border-white/10 hover:bg-white/5 text-white font-black h-14 md:h-16 px-8 md:px-10 rounded-xl text-base md:text-lg cursor-pointer">
                    <Link href="/guia-de-bem-estar">Como Funciona</Link>
                  </Button>
                </div>

                <div className="space-y-3 flex flex-col items-center lg:items-start">
                  <div className="flex items-center gap-3 text-white/40 text-[11px] md:text-sm font-bold uppercase tracking-wide">
                    <CheckCircle2 className="h-4 w-4 text-[#22c55e]" /> 
                    Fórmulas naturais e seguras
                  </div>
                  <div className="flex items-center gap-3 text-white/40 text-[11px] md:text-sm font-bold uppercase tracking-wide">
                    <CheckCircle2 className="h-4 w-4 text-[#22c55e]" /> 
                    Uso tradicional e educativo
                  </div>
                </div>
              </div>
              
              <div className="relative mt-8 lg:mt-0">
                <div className="aspect-square rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl shadow-[#22c55e]/10 border border-white/5 relative z-10">
                  <img 
                    src="https://images.unsplash.com/photo-1544787210-2827448b320c?q=80&w=1470&auto=format&fit=crop" 
                    alt="Ervas e Raízes Naturais" 
                    className="h-full w-full object-cover grayscale-[10%] contrast-[110%]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050f05] via-transparent to-transparent" />
                </div>
                
                {/* Floating Badge - Repositioned for mobile */}
                <div className="absolute -bottom-6 -left-4 md:-bottom-8 md:-left-8 bg-[#0a1a0a] border border-white/5 p-5 md:p-8 rounded-2xl shadow-2xl max-w-[220px] md:max-w-[280px] z-20">
                  <div className="flex items-center gap-3 mb-2 md:mb-3">
                    <Globe className="h-5 w-5 md:h-6 md:w-6 text-[#22c55e]" />
                    <span className="text-[10px] md:text-xs font-black uppercase tracking-widest text-[#22c55e]">Raízes da Vitalidade</span>
                  </div>
                  <p className="text-[9px] md:text-[10px] text-white/40 leading-relaxed font-bold uppercase tracking-wider">
                    Inspirado na herança africana, onde vitalidade e energia são tratadas com naturalidade.
                  </p>
                </div>
                
                {/* Decorative element for mobile */}
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#22c55e]/10 blur-[80px] rounded-full -z-10" />
              </div>
            </div>
          </div>
        </section>

        {/* Nossas Soluções */}
        <section className="py-20 md:py-32 bg-[#081508]">
          <div className="container mx-auto px-4 md:px-6">
            <div className="mb-12 md:mb-20 text-center lg:text-left">
              <h2 className="text-3xl md:text-5xl font-black mb-6 tracking-tighter uppercase leading-tight">Soluções naturais para <br className="hidden md:block" />sua vitalidade</h2>
              <div className="h-1.5 w-20 md:w-24 bg-[#22c55e] rounded-full mx-auto lg:mx-0" />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              {[
                { 
                  title: 'Libido & Conexão', 
                  desc: 'Apoio natural ao desejo e à conexão com o próprio corpo, respeitando seu ritmo individual.',
                  icon: <Heart className="h-6 w-6 md:h-7 md:w-7 fill-[#22c55e]" />
                },
                { 
                  title: 'Estamina & Energia', 
                  desc: 'Mais disposição física e mental para o dia a dia e desempenho cotidiano — sem estímulos artificiais.',
                  icon: <Zap className="h-6 w-6 md:h-7 md:w-7 fill-[#22c55e]" />
                },
                { 
                  title: 'Equilíbrio & Performance', 
                  desc: 'Protocolos naturais que auxiliam circulação e resistência para diferentes fases da vida.',
                  icon: <TrendingUp className="h-6 w-6 md:h-7 md:w-7 text-[#22c55e]" />
                }
              ].map((item, i) => (
                <div key={i} className="group p-8 md:p-12 rounded-[2rem] md:rounded-[2.5rem] bg-[#0a1a0a] border border-white/5 hover:border-[#22c55e]/30 transition-all">
                  <div className="mb-8 p-4 md:p-5 bg-[#22c55e]/10 w-fit rounded-2xl text-[#22c55e] group-hover:bg-[#22c55e] group-hover:text-[#050f05] transition-colors">
                    {item.icon}
                  </div>
                  <h3 className="text-xl md:text-2xl font-black mb-4 md:mb-6 leading-tight uppercase tracking-tighter">{item.title}</h3>
                  <p className="text-sm md:text-base text-white/40 leading-relaxed font-medium">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Trust Us? Section */}
        <section className="py-20 md:py-32 bg-[#050f05]">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20">
              <div className="lg:col-span-7">
                <h2 className="text-3xl md:text-5xl font-black mb-6 md:mb-8 leading-tight tracking-tighter uppercase text-center lg:text-left">Por que confiar na <br /><span className="text-[#22c55e]">Afro Potente?</span></h2>
                <p className="text-base md:text-lg text-white/50 mb-12 md:mb-16 leading-relaxed max-w-2xl mx-auto lg:mx-0 text-center lg:text-left font-medium">
                  Unimos a sabedoria africana ancestral ao conhecimento moderno para criar soluções naturais que respeitam o corpo, o tempo e a individualidade.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                  {[
                    { title: 'Corpo & Consciência', icon: <Heart className="h-5 w-5 md:h-6 md:w-6 text-[#22c55e]" />, desc: 'Saúde íntima como parte do bem-estar integral.' },
                    { title: 'Base Científica', icon: <Globe className="h-5 w-5 md:h-6 md:w-6 text-[#22c55e]" />, desc: 'Fundamentado em estudos sobre plantas e práticas naturais.' },
                    { title: 'Total Privacidade', icon: <Lock className="h-5 w-5 md:h-6 md:w-6 text-[#22c55e]" />, desc: 'Discrição total em embalagens e comunicação.' },
                    { title: 'Origem Pura', icon: <Leaf className="h-5 w-5 md:h-6 md:w-6 text-[#22c55e]" />, desc: 'Ingredientes naturais sem aditivos agressivos.' },
                  ].map((feature, i) => (
                    <div key={i} className="flex gap-5 md:gap-6 items-start">
                      <div className="p-3 md:p-4 bg-[#22c55e]/10 rounded-xl md:rounded-2xl text-[#22c55e] shrink-0 border border-[#22c55e]/10">
                        {feature.icon}
                      </div>
                      <div>
                        <h4 className="font-black text-lg md:text-xl mb-2 md:mb-3 uppercase tracking-tighter">{feature.title}</h4>
                        <p className="text-xs md:text-sm text-white/40 leading-relaxed font-medium uppercase tracking-wide">{feature.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-5 bg-[#081508] p-8 md:p-12 rounded-[2.5rem] md:rounded-[3rem] border border-white/5">
                <h3 className="text-lg md:text-xl font-black text-center mb-10 md:mb-12 uppercase tracking-[0.2em] text-[#22c55e]">Kits em Destaque</h3>
                <div className="space-y-6 md:space-y-8 mb-10 md:mb-12">
                  {[
                    { name: 'Kit Afro Potente – Vitalidade Completa', price: '189,90', rating: 5, img: 'https://images.unsplash.com/photo-1556229162-5c63ed9c4ffb?q=80&w=100&auto=format&fit=crop', desc: 'Apoio completo para energia e equilíbrio íntimo.' },
                    { name: 'Chás Afro Potente – Energia & Conexão', price: '97,00', rating: 5, img: 'https://images.unsplash.com/photo-1544787210-2827448b320c?q=80&w=100&auto=format&fit=crop', desc: 'Infusões naturais com raízes tradicionais.' }
                  ].map((kit, i) => (
                    <div key={i} className="group p-5 md:p-6 bg-[#0a1a0a] rounded-2xl md:rounded-[2rem] border border-white/5 hover:border-[#22c55e]/30 transition-all">
                      <div className="flex items-center gap-4 md:gap-6 mb-3 md:mb-4">
                        <div className="h-16 w-16 md:h-20 md:w-20 bg-white/5 rounded-xl md:rounded-2xl overflow-hidden shrink-0">
                          <img src={kit.img} alt={kit.name} className="h-full w-full object-cover opacity-80 group-hover:scale-110 transition-transform" />
                        </div>
                        <div className="flex-1">
                          <h5 className="font-black text-xs md:text-sm mb-1 group-hover:text-[#22c55e] transition-colors leading-snug uppercase tracking-tighter">{kit.name}</h5>
                          <div className="flex gap-1 mb-2">
                            {Array(kit.rating).fill(0).map((_, i) => (
                              <Star key={i} className="h-2 w-2 md:h-3 md:w-3 fill-orange-400 text-orange-400" />
                            ))}
                          </div>
                          <p className="text-[#22c55e] font-black text-base md:text-lg">R$ {kit.price}</p>
                        </div>
                      </div>
                      <p className="text-[10px] md:text-[11px] text-white/30 leading-relaxed font-bold uppercase tracking-wider">{kit.desc}</p>
                    </div>
                  ))}
                </div>
                <Button asChild className="w-full bg-[#22c55e] hover:bg-[#1ea34d] text-[#050f05] font-black h-14 md:h-16 rounded-xl md:rounded-2xl transition-all hover:scale-[1.02] cursor-pointer text-sm md:text-base uppercase tracking-widest">
                  <Link href="/produtos">Explorar Loja Completa</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Blog Section */}
        <section className="py-20 md:py-32 bg-[#081508]">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 mb-16 md:mb-20 text-center lg:text-left">
              <div>
                <h2 className="text-3xl md:text-5xl font-black mb-6 tracking-tighter uppercase leading-tight">Conhecimento <br className="hidden md:block" />Ancestral</h2>
                <p className="text-white/40 font-bold max-w-2xl text-base md:text-lg uppercase tracking-wide">Hábitos e práticas naturais que influenciam sua vitalidade ao longo da vida.</p>
              </div>
              <Link href="/guia-de-bem-estar" className="flex items-center justify-center lg:justify-start gap-2 text-[#22c55e] font-black hover:underline group text-sm md:text-lg uppercase tracking-[0.2em] shrink-0">
                Ver Guia Completo <ArrowUpRight className="h-4 w-4 md:h-5 md:w-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              {[
                { title: 'Receitas para Energia', desc: 'Combinações simples inspiradas em tradições africanas.', img: 'https://images.unsplash.com/photo-1610970881699-44a1fd18ca59?q=80&w=800&auto=format&fit=crop', link: '/guia-de-bem-estar#receitas' },
                { title: 'Consciência Corporal', desc: 'Fortalecimento e sensibilidade para todos os corpos.', img: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=800&auto=format&fit=crop', link: '/exercicios' },
                { title: 'Bem-estar Natural', desc: 'Como o corpo responde a hábitos e alimentação.', img: 'https://images.unsplash.com/photo-1507413245164-6160d8298b31?q=80&w=800&auto=format&fit=crop', link: '/guia-de-bem-estar#hormonios' }
              ].map((post, i) => (
                <div key={i} className="group bg-[#0a1a0a] rounded-[2rem] md:rounded-[2.5rem] overflow-hidden border border-white/5 hover:border-[#22c55e]/30 transition-all">
                  <div className="h-48 md:h-64 overflow-hidden relative">
                    <img src={post.img} alt={post.title} className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-60" />
                  </div>
                  <div className="p-8 md:p-10">
                    <h3 className="text-xl md:text-2xl font-black mb-3 md:mb-4 leading-tight group-hover:text-[#22c55e] transition-colors uppercase tracking-tighter">{post.title}</h3>
                    <p className="text-xs md:text-sm text-white/40 mb-8 md:mb-10 leading-relaxed font-bold uppercase tracking-wide">{post.desc}</p>
                    <Link href={post.link} className="flex items-center gap-3 text-white font-black text-xs md:text-sm hover:text-[#22c55e] transition-colors group/link uppercase tracking-widest">
                      Ler mais <ArrowRight className="h-4 w-4 group-hover/link:translate-x-2 transition-transform" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Philosophy Section */}
        <section className="py-20 md:py-32 bg-[#050f05]">
          <div className="container mx-auto px-4 md:px-6 max-w-4xl text-center">
            <span className="text-[#22c55e] font-black uppercase tracking-[0.3em] text-[10px] md:text-xs mb-6 md:mb-8 block">Nossa Filosofia</span>
            <h2 className="text-3xl md:text-6xl font-black mb-8 md:mb-12 leading-tight uppercase tracking-tighter">Criado por africanos. <br /><span className="text-[#22c55e]">Para pessoas reais.</span></h2>
            <div className="space-y-6 md:space-y-8 text-base md:text-lg text-white/50 font-medium leading-relaxed">
              <p>
                A Afro Potente nasce da herança africana, onde vitalidade e energia sempre foram tratadas com respeito e consciência. Adaptamos esse conhecimento ao Brasil de forma ética e responsável.
              </p>
              <p className="text-[#22c55e] font-black italic">
                Não vendemos milagres. Oferecemos tradição e apoio ao seu bem-estar.
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#050f05] border-t border-white/5 pt-20 md:pt-32 pb-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-16 mb-16 md:mb-24">
            <div className="text-center md:text-left">
              <Link href="/" className="text-xl md:text-2xl font-black tracking-tighter flex items-center justify-center md:justify-start gap-2 mb-6 md:mb-8">
                <Zap className="fill-[#22c55e] text-[#22c55e] h-5 w-5 md:h-6 md:w-6" />
                AFRO POTENTE
              </Link>
              <p className="text-[11px] md:text-sm text-white/30 leading-relaxed mb-8 md:mb-10 font-bold uppercase tracking-wider">
                Educação e suplementação natural com foco em vitalidade e bem-estar integral.
              </p>
              <div className="flex gap-4 justify-center md:justify-start">
                <a href="https://twitter.com/afropotente" target="_blank" rel="noopener noreferrer" className="h-10 w-10 rounded-xl bg-white/5 flex items-center justify-center hover:bg-[#22c55e]/20 transition-colors border border-white/5" aria-label="Twitter">
                  <Twitter className="h-5 w-5 text-white/60" />
                </a>
                <a href="https://instagram.com/afropotente" target="_blank" rel="noopener noreferrer" className="h-10 w-10 rounded-xl bg-white/5 flex items-center justify-center hover:bg-[#22c55e]/20 transition-colors border border-white/5" aria-label="Instagram">
                  <Instagram className="h-5 w-5 text-white/60" />
                </a>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-8 md:gap-12">
              <div className="text-center md:text-left">
                <h4 className="font-black text-[10px] md:text-xs uppercase tracking-[0.2em] mb-8 md:mb-10 text-[#22c55e]">Loja</h4>
                <ul className="space-y-4 text-[10px] md:text-xs text-white/40 font-black uppercase tracking-widest">
                  <li><Link href="/produtos" className="hover:text-white transition-colors">Produtos</Link></li>
                  <li><Link href="/produtos" className="hover:text-white transition-colors">Kits</Link></li>
                </ul>
              </div>
              <div className="text-center md:text-left">
                <h4 className="font-black text-[10px] md:text-xs uppercase tracking-[0.2em] mb-8 md:mb-10 text-[#22c55e]">Recursos</h4>
                <ul className="space-y-4 text-[10px] md:text-xs text-white/40 font-black uppercase tracking-widest">
                  <li><Link href="/guia-de-bem-estar" className="hover:text-white transition-colors">Guia</Link></li>
                  <li><Link href="/contato" className="hover:text-white transition-colors">Contato</Link></li>
                  <li><Link href="/privacidade" className="hover:text-white transition-colors">Privacidade</Link></li>
                  <li><Link href="/termos" className="hover:text-white transition-colors">Termos</Link></li>
                </ul>
              </div>
            </div>

            <div className="text-center md:text-left lg:col-span-1">
              <h4 className="font-black text-[10px] md:text-xs uppercase tracking-[0.2em] mb-8 md:mb-10 text-[#22c55e]">Segurança</h4>
              <div className="flex flex-wrap gap-2 md:gap-3 mb-8 md:mb-10 justify-center md:justify-start">
                <div className="px-2 py-1 bg-white/5 rounded border border-white/10 text-[8px] md:text-[9px] font-black uppercase tracking-wider text-white/40">Pix</div>
                <div className="px-2 py-1 bg-white/5 rounded border border-white/10 text-[8px] md:text-[9px] font-black uppercase tracking-wider text-white/40">Cartão</div>
              </div>
              <div className="flex items-center gap-2 p-3 bg-white/5 border border-white/10 rounded-xl w-fit mx-auto md:mx-0">
                <ShieldCheck className="h-4 w-4 text-[#22c55e]" />
                <span className="text-[9px] md:text-[10px] font-black uppercase tracking-widest text-white/60">Site Seguro</span>
              </div>
            </div>
          </div>

          <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
            <p className="text-[9px] md:text-[10px] font-black text-white/20 uppercase tracking-[0.2em]">
              © 2026 Afro Potente - Sabedoria Ancestral Africana.
            </p>
            <div className="flex gap-6 md:gap-8 text-[9px] md:text-[10px] font-black text-white/20 uppercase tracking-[0.2em]">
              <span>Inclusão & Respeito</span>
              <span>Made in Brazil</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
