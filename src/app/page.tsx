import Link from "next/link";
import { 
  ArrowRight, 
  Search, 
  User, 
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

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-[#050f05] text-white font-sans">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 w-full bg-[#050f05]/80 backdrop-blur-md border-b border-white/5">
        <div className="container mx-auto flex h-20 items-center justify-between px-6">
          <div className="flex items-center gap-12">
            <Link href="/" className="text-2xl font-black tracking-tighter flex items-center gap-2">
              <Zap className="fill-[#22c55e] text-[#22c55e] h-6 w-6" />
              AFRO POTENTE
            </Link>
            <div className="hidden lg:flex items-center gap-8 text-xs font-bold text-white/70 uppercase tracking-widest">
              <Link href="/produtos" className="hover:text-[#22c55e] transition-colors">Loja</Link>
              <Link href="/guia-de-bem-estar" className="hover:text-[#22c55e] transition-colors">Guia de Vitalidade</Link>
              <Link href="/exercicios" className="hover:text-[#22c55e] transition-colors">Exercícios Naturais</Link>
              <Link href="/contato" className="hover:text-[#22c55e] transition-colors">Contato</Link>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <div className="hidden md:flex relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-white/30" />
              <input 
                type="text" 
                placeholder="Buscar soluções..." 
                className="bg-white/5 border border-white/10 rounded-lg py-2 pl-10 pr-4 text-sm focus:outline-none focus:border-[#22c55e]/50 w-64"
              />
            </div>
            <Button className="bg-[#22c55e] hover:bg-[#1ea34d] text-[#050f05] font-bold rounded-lg px-6">
              Entrar
            </Button>
            <div className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center cursor-pointer hover:bg-white/20 transition-colors">
              <User className="h-5 w-5" />
            </div>
          </div>
        </div>
      </nav>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative pt-12 pb-24 lg:pt-20 lg:pb-32 overflow-hidden">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="z-10">
                <div className="flex flex-wrap gap-3 mb-8">
                  <span className="inline-block px-4 py-1 rounded-full bg-[#22c55e]/10 text-[#22c55e] text-[10px] font-black uppercase tracking-widest border border-[#22c55e]/20">
                    🌿 100% Natural
                  </span>
                  <span className="inline-block px-4 py-1 rounded-full bg-orange-500/10 text-orange-400 text-[10px] font-black uppercase tracking-widest border border-orange-500/20">
                    🌍 Inspirado na África
                  </span>
                  <span className="inline-block px-4 py-1 rounded-full bg-blue-500/10 text-blue-400 text-[10px] font-black uppercase tracking-widest border border-blue-500/20">
                    🇧🇷 Produzido no Brasil
                  </span>
                </div>
                
                <p className="text-[#22c55e] font-black uppercase tracking-[0.2em] text-xs mb-4">Sabedoria ancestral africana</p>
                <h1 className="text-5xl lg:text-7xl font-black leading-[1.1] mb-8">
                  Recupere sua <br />
                  <span className="text-[#22c55e]">confiança</span> <br />
                  naturalmente
                </h1>
                <p className="text-lg text-white/60 mb-10 max-w-xl leading-relaxed">
                  Remédios naturais inspirados em práticas africanas milenares para apoiar a vitalidade, a energia, a recuperação e o equilíbrio íntimo — para homens e mulheres, de forma consciente e respeitosa com o corpo.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 mb-12">
                  <Button asChild size="lg" className="bg-[#22c55e] hover:bg-[#1ea34d] text-[#050f05] font-black h-16 px-10 rounded-xl text-lg transition-all hover:scale-105 cursor-pointer">
                    <Link href="/produtos">Ver Coleções</Link>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="border-white/10 hover:bg-white/5 text-white font-black h-16 px-10 rounded-xl text-lg cursor-pointer">
                    <Link href="/guia-de-bem-estar">Como Funciona</Link>
                  </Button>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-white/40 text-sm font-bold">
                    <CheckCircle2 className="h-4 w-4 text-[#22c55e]" /> 
                    Fórmulas naturais
                  </div>
                  <div className="flex items-center gap-3 text-white/40 text-sm font-bold">
                    <CheckCircle2 className="h-4 w-4 text-[#22c55e]" /> 
                    Uso tradicional e educativo
                  </div>
                  <div className="flex items-center gap-3 text-white/40 text-sm font-bold">
                    <CheckCircle2 className="h-4 w-4 text-[#22c55e]" /> 
                    Conteúdo revisado por especialistas em fitoterapia
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <div className="aspect-square rounded-[2rem] overflow-hidden shadow-2xl shadow-[#22c55e]/10 border border-white/5">
                  <img 
                    src="https://images.unsplash.com/photo-1544787210-2827448b320c?q=80&w=1470&auto=format&fit=crop" 
                    alt="Ervas e Raízes Naturais" 
                    className="h-full w-full object-cover grayscale-[10%] contrast-[110%]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050f05] via-transparent to-transparent" />
                </div>
                {/* Microcopy Trust Badge */}
                <div className="absolute -bottom-8 -left-8 bg-[#0a1a0a] border border-white/5 p-8 rounded-2xl shadow-2xl max-w-[280px] z-20">
                  <div className="flex items-center gap-3 mb-3">
                    <Globe className="h-6 w-6 text-[#22c55e]" />
                    <span className="text-xs font-black uppercase tracking-widest text-[#22c55e]">Raízes da Vitalidade</span>
                  </div>
                  <p className="text-[10px] text-white/40 leading-relaxed font-bold">
                    Inspirado na herança africana, onde vitalidade e energia são tratadas com respeito e naturalidade.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Nossas Soluções */}
        <section className="py-32 bg-[#081508]">
          <div className="container mx-auto px-6">
            <div className="mb-20">
              <h2 className="text-4xl lg:text-5xl font-black mb-6">Soluções naturais para diferentes <br />necessidades de vitalidade</h2>
              <div className="h-1.5 w-24 bg-[#22c55e] rounded-full" />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { 
                  title: 'Libido & Conexão', 
                  desc: 'Apoio natural ao desejo, à sensibilidade e à conexão com o próprio corpo, respeitando o ritmo individual de cada pessoa.',
                  icon: <Heart className="h-7 w-7 fill-[#22c55e]" />
                },
                { 
                  title: 'Estamina & Energia', 
                  desc: 'Mais disposição física e mental para o dia a dia, recuperação e desempenho cotidiano — sem estímulos artificiais.',
                  icon: <Zap className="h-7 w-7 fill-[#22c55e]" />
                },
                { 
                  title: 'Equilíbrio Íntimo & Performance', 
                  desc: 'Protocolos naturais que auxiliam circulação, resistência e equilíbrio corporal, para homens e mulheres em diferentes fases da vida.',
                  icon: <TrendingUp className="h-7 w-7 text-[#22c55e]" />
                }
              ].map((item, i) => (
                <div key={i} className="group p-12 rounded-[2.5rem] bg-[#0a1a0a] border border-white/5 hover:border-[#22c55e]/30 transition-all hover:-translate-y-2">
                  <div className="mb-10 p-5 bg-[#22c55e]/10 w-fit rounded-2xl text-[#22c55e] group-hover:bg-[#22c55e] group-hover:text-[#050f05] transition-colors">
                    {item.icon}
                  </div>
                  <h3 className="text-2xl font-black mb-6 leading-tight">{item.title}</h3>
                  <p className="text-white/40 leading-relaxed font-medium">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Trust Us? Section */}
        <section className="py-32 bg-[#050f05]">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
              <div className="lg:col-span-7">
                <h2 className="text-4xl lg:text-5xl font-black mb-8 leading-tight">Por que confiar na <br /><span className="text-[#22c55e]">Afro Potente?</span></h2>
                <p className="text-lg text-white/50 mb-16 leading-relaxed max-w-2xl">
                  Na Afro Potente, acreditamos que vitalidade íntima não é gênero — é equilíbrio. Unimos a sabedoria africana ancestral ao conhecimento moderno para criar soluções naturais que respeitam o corpo, o tempo e a individualidade.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12">
                  {[
                    { title: 'Corpo, Energia & Consciência', icon: <Heart className="h-6 w-6 text-[#22c55e]" />, desc: 'Tradições africanas sempre enxergaram a saúde íntima como parte do bem-estar integral.' },
                    { title: 'Base Educacional e Científica', icon: <Globe className="h-6 w-6 text-[#22c55e]" />, desc: 'Conteúdos fundamentados em estudos contemporâneos sobre plantas, minerais e práticas naturais.' },
                    { title: 'Total Privacidade', icon: <Lock className="h-6 w-6 text-[#22c55e]" />, desc: 'Discrição total em embalagens, entregas e comunicação.' },
                    { title: 'Origem Pura e Ética', icon: <Leaf className="h-6 w-6 text-[#22c55e]" />, desc: 'Ingredientes naturais, inspirados em preparos tradicionais, sem aditivos agressivos.' },
                  ].map((feature, i) => (
                    <div key={i} className="flex gap-6 items-start">
                      <div className="p-4 bg-[#22c55e]/10 rounded-2xl text-[#22c55e] shrink-0 border border-[#22c55e]/10">
                        {feature.icon}
                      </div>
                      <div>
                        <h4 className="font-black text-xl mb-3">{feature.title}</h4>
                        <p className="text-sm text-white/40 leading-relaxed font-medium">{feature.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-5 bg-[#081508] p-12 rounded-[3rem] border border-white/5">
                <h3 className="text-xl font-black text-center mb-12 uppercase tracking-[0.2em] text-[#22c55e]">Nossos Kits em Destaque</h3>
                <div className="space-y-8 mb-12">
                  {[
                    { name: 'Kit Afro Potente – Vitalidade Completa', price: '189,90', rating: 5, img: 'https://images.unsplash.com/photo-1556229162-5c63ed9c4ffb?q=80&w=100&auto=format&fit=crop', desc: 'Combinação de ingredientes naturais para apoiar energia, disposição, recuperação e equilíbrio íntimo.' },
                    { name: 'Chás Afro Potente – Energia & Conexão', price: '97,00', rating: 5, img: 'https://images.unsplash.com/photo-1544787210-2827448b320c?q=80&w=100&auto=format&fit=crop', desc: 'Infusões naturais com raízes e ervas tradicionais para uso diário.' }
                  ].map((kit, i) => (
                    <div key={i} className="group p-6 bg-[#0a1a0a] rounded-[2rem] border border-white/5 hover:border-[#22c55e]/30 transition-all">
                      <div className="flex items-center gap-6 mb-4">
                        <div className="h-20 w-20 bg-white/5 rounded-2xl overflow-hidden shrink-0">
                          <img src={kit.img} alt={kit.name} className="h-full w-full object-cover opacity-80 group-hover:scale-110 transition-transform" />
                        </div>
                        <div className="flex-1">
                          <h5 className="font-black text-sm mb-1 group-hover:text-[#22c55e] transition-colors leading-snug">{kit.name}</h5>
                          <div className="flex gap-1 mb-2">
                            {Array(kit.rating).fill(0).map((_, i) => (
                              <Star key={i} className="h-3 w-3 fill-orange-400 text-orange-400" />
                            ))}
                          </div>
                          <p className="text-[#22c55e] font-black text-lg">R$ {kit.price}</p>
                        </div>
                      </div>
                      <p className="text-[11px] text-white/30 leading-relaxed font-medium">{kit.desc}</p>
                    </div>
                  ))}
                </div>
                <Button asChild className="w-full bg-[#22c55e] hover:bg-[#1ea34d] text-[#050f05] font-black h-16 rounded-2xl transition-all hover:scale-[1.02] cursor-pointer">
                  <Link href="/produtos">Explorar Loja Completa</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Blog Section */}
        <section className="py-32 bg-[#081508]">
          <div className="container mx-auto px-6">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 mb-20">
              <div>
                <h2 className="text-4xl lg:text-5xl font-black mb-6">Conhecimento ancestral <br />aplicado ao presente</h2>
                <p className="text-white/40 font-bold max-w-2xl text-lg">Entenda como hábitos, ingredientes naturais, exercícios e práticas corporais influenciam sua vitalidade íntima ao longo da vida.</p>
              </div>
              <Link href="/guia-de-bem-estar" className="flex items-center gap-2 text-[#22c55e] font-black hover:underline group text-lg uppercase tracking-widest shrink-0">
                Ver Guia de Bem-estar <ArrowUpRight className="h-5 w-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { title: 'Receitas Naturais para Energia e Recuperação', desc: 'Combinações simples inspiradas em práticas tradicionais africanas.', img: 'https://images.unsplash.com/photo-1610970881699-44a1fd18ca59?q=80&w=800&auto=format&fit=crop', link: '/guia-de-bem-estar#receitas' },
                { title: 'Exercícios de Consciência Corporal e Assoalho Pélvico', desc: 'Fortalecimento, controle e sensibilidade para homens e mulheres.', img: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=800&auto=format&fit=crop', link: '/exercicios' },
                { title: 'Hormônios, Energia e Bem-estar Natural', desc: 'Como o corpo responde a hábitos, alimentação e descanso.', img: 'https://images.unsplash.com/photo-1507413245164-6160d8298b31?q=80&w=800&auto=format&fit=crop', link: '/guia-de-bem-estar#hormonios' }
              ].map((post, i) => (
                <div key={i} className="group bg-[#0a1a0a] rounded-[2.5rem] overflow-hidden border border-white/5 hover:border-[#22c55e]/30 transition-all">
                  <div className="h-64 overflow-hidden relative">
                    <img src={post.img} alt={post.title} className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  </div>
                  <div className="p-10">
                    <h3 className="text-2xl font-black mb-4 leading-tight group-hover:text-[#22c55e] transition-colors">{post.title}</h3>
                    <p className="text-sm text-white/40 mb-10 leading-relaxed font-medium">{post.desc}</p>
                    <Link href={post.link} className="flex items-center gap-3 text-white font-black text-sm hover:text-[#22c55e] transition-colors group/link">
                      Ler mais <ArrowRight className="h-4 w-4 group-hover/link:translate-x-2 transition-transform" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Philosophy Section */}
        <section className="py-32 bg-[#050f05]">
          <div className="container mx-auto px-6 max-w-4xl text-center">
            <span className="text-[#22c55e] font-black uppercase tracking-[0.3em] text-xs mb-8 block">Nossa Filosofia</span>
            <h2 className="text-4xl lg:text-6xl font-black mb-12 leading-tight">Criado por africanos. <br /><span className="text-[#22c55e]">Pensado para pessoas reais.</span></h2>
            <div className="space-y-8 text-lg text-white/50 font-medium leading-relaxed">
              <p>
                A Afro Potente nasce da herança africana, onde vitalidade, sexualidade e energia sempre foram tratadas com respeito, naturalidade e consciência. Adaptamos esse conhecimento ao Brasil de forma ética, educativa e responsável.
              </p>
              <p className="text-[#22c55e] font-black italic">
                Não vendemos soluções milagrosas. Oferecemos tradição, informação e apoio contínuo ao seu bem-estar.
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#050f05] border-t border-white/5 pt-32 pb-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-16 mb-24">
            <div className="lg:col-span-1">
              <Link href="/" className="text-2xl font-black tracking-tighter flex items-center gap-2 mb-8">
                <Zap className="fill-[#22c55e] text-[#22c55e] h-6 w-6" />
                AFRO POTENTE
              </Link>
              <p className="text-sm text-white/30 leading-relaxed mb-10 font-bold">
                Educação e suplementação natural com foco em vitalidade íntima, energia e bem-estar integral.
              </p>
              <div className="flex gap-4">
                <div className="h-10 w-10 rounded-xl bg-white/5 flex items-center justify-center hover:bg-[#22c55e]/20 transition-colors cursor-pointer border border-white/5">
                  <Twitter className="h-5 w-5 text-white/60" />
                </div>
                <div className="h-10 w-10 rounded-xl bg-white/5 flex items-center justify-center hover:bg-[#22c55e]/20 transition-colors cursor-pointer border border-white/5">
                  <Instagram className="h-5 w-5 text-white/60" />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 lg:col-span-2 gap-12">
              <div>
                <h4 className="font-black text-sm uppercase tracking-widest mb-10 text-[#22c55e]">Loja</h4>
                <ul className="space-y-4 text-sm text-white/40 font-bold">
                  <li><Link href="/produtos" className="hover:text-white transition-colors">Mais Vendidos</Link></li>
                  <li><Link href="/produtos" className="hover:text-white transition-colors">Kits Completos</Link></li>
                  <li><Link href="/produtos" className="hover:text-white transition-colors">Assinaturas</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="font-black text-sm uppercase tracking-widest mb-10 text-[#22c55e]">Recursos</h4>
                <ul className="space-y-4 text-sm text-white/40 font-bold">
                  <li><Link href="/guia-de-bem-estar" className="hover:text-white transition-colors">Guia de Vitalidade</Link></li>
                  <li><Link href="/exercicios" className="hover:text-white transition-colors">Exercícios Naturais</Link></li>
                  <li><Link href="/contato" className="hover:text-white transition-colors">Contato</Link></li>
                  <li><Link href="/privacidade" className="hover:text-white transition-colors">Privacidade</Link></li>
                  <li><Link href="/termos" className="hover:text-white transition-colors">Termos de Uso</Link></li>
                </ul>
              </div>
            </div>

            <div className="lg:col-span-1">
              <h4 className="font-black text-sm uppercase tracking-widest mb-10 text-[#22c55e]">Segurança</h4>
              <div className="flex flex-wrap gap-3 mb-10">
                <div className="px-3 py-1.5 bg-white/5 rounded-lg border border-white/10 text-[10px] font-black uppercase tracking-wider text-white/40">Pix</div>
                <div className="px-3 py-1.5 bg-white/5 rounded-lg border border-white/10 text-[10px] font-black uppercase tracking-wider text-white/40">Visa / Master</div>
              </div>
              <div className="flex items-center gap-2 p-3 bg-white/5 border border-white/10 rounded-xl w-fit">
                <ShieldCheck className="h-4 w-4 text-[#22c55e]" />
                <span className="text-[10px] font-black uppercase tracking-widest text-white/60">Site Seguro</span>
              </div>
              <div className="mt-8 text-[9px] text-white/20 leading-relaxed uppercase tracking-wider font-bold">
                Conteúdo educativo. Produtos naturais não substituem acompanhamento profissional de saúde.
              </div>
            </div>
          </div>

          <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-[10px] font-bold text-white/20 uppercase tracking-[0.2em]">
              © 2026 Afro Potente - Sabedoria Ancestral Africana.
            </p>
            <div className="flex gap-8 text-[10px] font-bold text-white/20 uppercase tracking-[0.2em]">
              <span>Inclusão & Respeito</span>
              <span>Made in Brazil</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
