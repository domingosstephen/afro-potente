import Link from "next/link";
import { 
  Zap, 
  ArrowRight, 
  ChevronDown, 
  Utensils, 
  Activity, 
  Microscope, 
  Heart, 
  ChefHat, 
  ShieldAlert,
  Droplet,
  Flame,
  Grape,
  CheckCircle2,
  ShieldCheck,
  ZapOff,
  Eye,
  ShoppingBag
} from "lucide-react";
import { Button } from "@/components/ui/button";

const categories = [
  { name: 'Nutrição', icon: <Utensils className="h-5 w-5" />, href: '/guia-de-bem-estar#ingredientes' },
  { name: 'Exercícios', icon: <Activity className="h-5 w-5" />, href: '/exercicios' },
  { name: 'Ciência', icon: <Microscope className="h-5 w-5" />, href: '/guia-de-bem-estar#ciencia' },
  { name: 'Saúde Hormonal', icon: <Heart className="h-5 w-5" />, href: '/guia-de-bem-estar#hormonios' },
  { name: 'Receitas Seguras', icon: <ChefHat className="h-5 w-5" />, href: '/guia-de-bem-estar#receitas' },
];

const freeGuides = [
  {
    id: "citrulina",
    title: "O Poder da Citrulina e do Óxido Nítrico",
    theme: "Melancia e Gengibre",
    icon: <Droplet className="h-6 w-6 text-red-400" />,
    description: "A melancia é rica em L-citrulina, um aminoácido que o corpo converte em L-arginina. Este processo é o precursor natural do Óxido Nítrico, a molécula responsável por relaxar os vasos sanguíneos e permitir um fluxo sanguíneo vigoroso.",
    extra: "Quando combinada com o Gengibre (um termogênico que acelera a absorção e estimula a testosterona), o resultado é uma melhora drástica na resposta física.",
    cta: "Domine as proporções exatas e o protocolo de 7 dias no nosso Protocolo de Performance e Estamina.",
    productLink: "/produtos",
    productName: "Protocolo de Performance"
  },
  {
    id: "quercetina",
    title: "A Ciência da Quercetina e Circulação",
    theme: "O Segredo da Cebola e Alho",
    icon: <ZapOff className="h-6 w-6 text-amber-400" />,
    description: "A cebola não é apenas um tempero; ela é uma das fontes mais ricas da natureza em Quercetina, um flavonoide que combate a inflamação arterial e limpa o sistema circulatório.",
    extra: "Para homens com dificuldades crônicas, a cebola ajuda a 'reparar' a integridade dos vasos sanguíneos a longo prazo. O Alho complementa reduzindo o cortisol, permitindo que a testosterona circule livremente.",
    cta: "Pronto para uma restauração profunda? Conheça o método de infusão de 72 horas no Manual de Restauração Total.",
    productLink: "/produtos",
    productName: "Manual de Restauração"
  },
  {
    id: "sensorial",
    title: "Estímulo Sensorial e Libido",
    theme: "Quiabo, Cravo e Canela",
    icon: <Eye className="h-6 w-6 text-purple-400" />,
    description: "O desejo sexual começa no sistema nervoso. O Cravo da Índia é rico em eugenol, que atua como um estimulante leve dos nervos e aumenta a sensibilidade.",
    extra: "A Canela promove um efeito de aquecimento corporal que sinaliza ao cérebro um estado de prontidão e conforto. O Quiabo, por sua vez, garante a hidratação e o suporte mineral necessário para a produção de fluidos e vigor.",
    cta: "Transforme seu desejo hoje. Descubra as misturas ideais para casais no Acelerador de Libido.",
    productLink: "/produtos",
    productName: "Acelerador de Libido"
  }
];

export default function GuiaPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#050f05] text-white font-sans">
      {/* Navbar Minimalista */}
      <nav className="sticky top-0 z-50 w-full bg-[#050f05]/80 backdrop-blur-md border-b border-white/5">
        <div className="container mx-auto flex h-20 items-center justify-between px-6">
          <Link href="/" className="text-2xl font-black tracking-tighter flex items-center gap-2">
            <Zap className="fill-[#22c55e] text-[#22c55e] h-6 w-6" />
            AFRO POTENTE
          </Link>
          <div className="flex gap-6 items-center">
            <Link href="/produtos" className="text-sm font-bold text-white/50 hover:text-white transition-colors uppercase tracking-widest">Loja</Link>
          </div>
        </div>
      </nav>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative pt-20 pb-32 overflow-hidden border-b border-white/5">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#22c55e]/5 blur-[120px] rounded-full -z-10" />
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-5xl lg:text-7xl font-black mb-8 tracking-tighter uppercase">
              Guia de <span className="text-[#22c55e]">Bem-estar</span>
            </h1>
            <p className="text-xl text-white/50 max-w-3xl mx-auto leading-relaxed mb-12 font-medium">
              Conhecimento ancestral e ciência moderna aplicados de forma responsável. Explore nossos recursos educativos para uma vida mais vital e equilibrada.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button asChild size="lg" className="bg-[#22c55e] hover:bg-[#1ea34d] text-[#050f05] font-black h-16 px-12 rounded-2xl text-lg transition-all hover:scale-105">
                <Link href="/produtos">Ver Loja</Link>
              </Button>
              <Link href="/guia-de-bem-estar#citrulina" className="text-white font-bold hover:text-[#22c55e] transition-colors flex items-center gap-2 group uppercase tracking-widest text-sm">
                Explorar Guias <ChevronDown className="h-4 w-4 group-hover:translate-y-1 transition-transform" />
              </Link>
            </div>
            <p className="mt-12 text-xs text-white/30 font-bold uppercase tracking-[0.2em]">Conteúdo educativo.</p>
          </div>
        </section>

        {/* Category Grid */}
        <section className="py-20 border-b border-white/5">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-16">
              {categories.map((cat, i) => (
                <Link 
                  key={i} 
                  href={cat.href}
                  className="bg-[#0a1a0a] border border-white/5 p-6 rounded-2xl flex flex-col items-center gap-4 hover:border-[#22c55e]/30 hover:-translate-y-1 transition-all group"
                >
                  <div className="p-3 bg-[#22c55e]/10 rounded-xl text-[#22c55e] group-hover:bg-[#22c55e] group-hover:text-[#050f05] transition-colors">
                    {cat.icon}
                  </div>
                  <span className="font-bold text-xs uppercase tracking-widest text-white/60 group-hover:text-white">{cat.name}</span>
                </Link>
              ))}
            </div>

            {/* Compliance Block: Uso responsável */}
            <div className="max-w-4xl mx-auto bg-orange-500/5 border border-orange-500/10 p-8 rounded-3xl">
              <div className="flex items-center gap-4 mb-6">
                <ShieldAlert className="h-6 w-6 text-orange-400" />
                <h3 className="text-xl font-black uppercase tracking-widest text-orange-400">Uso responsável</h3>
              </div>
              <ul className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <li className="flex gap-3 text-xs font-bold text-orange-200/60 leading-relaxed uppercase tracking-wider">
                  <CheckCircle2 className="h-4 w-4 text-orange-400 shrink-0" />
                  Este conteúdo é educativo e não substitui atendimento médico.
                </li>
                <li className="flex gap-3 text-xs font-bold text-orange-200/60 leading-relaxed uppercase tracking-wider">
                  <CheckCircle2 className="h-4 w-4 text-orange-400 shrink-0" />
                  Se você usa medicamentos contínuos, está grávida(o) ou tem condições crônicas, busque orientação profissional.
                </li>
                <li className="flex gap-3 text-xs font-bold text-orange-200/60 leading-relaxed uppercase tracking-wider">
                  <CheckCircle2 className="h-4 w-4 text-orange-400 shrink-0" />
                  Interrompa o uso se sentir desconforto e priorize sua segurança.
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Free Educational Guides */}
        <section className="py-32 border-b border-white/5">
          <div className="container mx-auto px-6">
            <div className="mb-16">
              <h2 className="text-3xl lg:text-5xl font-black mb-6 uppercase tracking-tighter">Guias de <span className="text-[#22c55e]">Vitalidade</span></h2>
              <div className="h-1.5 w-24 bg-[#22c55e] rounded-full" />
            </div>

            <div className="space-y-12">
              {freeGuides.map((guide) => (
                <div key={guide.id} id={guide.id} className="bg-[#0a1a0a] border border-white/5 rounded-[2.5rem] overflow-hidden scroll-mt-24">
                  <div className="grid grid-cols-1 lg:grid-cols-3">
                    <div className="p-10 lg:col-span-2">
                      <div className="flex items-center gap-4 mb-6">
                        <div className="p-3 bg-white/5 rounded-2xl text-[#22c55e]">
                          {guide.icon}
                        </div>
                        <div>
                          <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#22c55e]">{guide.theme}</span>
                          <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tighter">{guide.title}</h3>
                        </div>
                      </div>
                      <div className="space-y-4 text-white/60 font-medium leading-relaxed mb-8">
                        <p>{guide.description}</p>
                        <p>{guide.extra}</p>
                      </div>
                      <div className="p-6 bg-[#22c55e]/5 border border-[#22c55e]/10 rounded-2xl">
                        <p className="text-[#22c55e] font-bold text-sm mb-4 italic">"{guide.cta}"</p>
                        <Button asChild className="bg-[#22c55e] hover:bg-[#1ea34d] text-[#050f05] font-black rounded-xl">
                          <Link href={guide.productLink}>
                            <ShoppingBag className="mr-2 h-4 w-4" /> Comprar {guide.productName}
                          </Link>
                        </Button>
                      </div>
                    </div>
                    <div className="bg-[#081508] p-10 flex flex-col justify-center border-l border-white/5">
                      <h4 className="text-sm font-black uppercase tracking-widest text-white/40 mb-6">O que você vai dominar:</h4>
                      <ul className="space-y-4">
                        <li className="flex items-start gap-3 text-xs font-bold uppercase tracking-wide text-white/70">
                          <CheckCircle2 className="h-4 w-4 text-[#22c55e] shrink-0" />
                          Proporções exatas das misturas
                        </li>
                        <li className="flex items-start gap-3 text-xs font-bold uppercase tracking-wide text-white/70">
                          <CheckCircle2 className="h-4 w-4 text-[#22c55e] shrink-0" />
                          Protocolo de uso de 7 a 30 dias
                        </li>
                        <li className="flex items-start gap-3 text-xs font-bold uppercase tracking-wide text-white/70">
                          <CheckCircle2 className="h-4 w-4 text-[#22c55e] shrink-0" />
                          Orientações de rotina e horários
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Science Learning Paths (id="ciencia" and id="hormonios") */}
        <section id="ciencia" className="py-32 scroll-mt-24">
          <div className="container mx-auto px-6">
            <div className="mb-16">
              <h2 className="text-3xl lg:text-5xl font-black mb-6 uppercase tracking-tighter">Trilhas de <span className="text-[#22c55e]">Aprendizado</span></h2>
              <div className="h-1.5 w-24 bg-[#22c55e] rounded-full" />
            </div>

            <div id="hormonios" className="grid grid-cols-1 md:grid-cols-3 gap-8 scroll-mt-24">
              <Link href="/ciencia/oxido-nitrico">
                <div className="bg-[#0a1a0a] border border-white/5 p-10 rounded-[2.5rem] h-full flex flex-col hover:border-[#22c55e]/30 transition-all group">
                  <div className="mb-8 p-4 bg-white/5 w-fit rounded-2xl group-hover:bg-[#22c55e]/10 transition-colors">
                    <Microscope className="h-6 w-6 text-[#22c55e]" />
                  </div>
                  <h3 className="text-xl font-black mb-4 group-hover:text-[#22c55e] transition-colors uppercase">Óxido Nítrico & Circulação</h3>
                  <p className="text-sm text-white/40 mb-8 flex-1 font-medium leading-relaxed">Entenda como esta molécula sinalizadora contribui para o relaxamento vascular e saúde cardiovascular.</p>
                  <span className="text-white font-bold text-xs uppercase tracking-widest flex items-center gap-2">Explorar <ArrowRight className="h-4 w-4" /></span>
                </div>
              </Link>

              <Link href="/ciencia/hormonios">
                <div className="bg-[#0a1a0a] border border-white/5 p-10 rounded-[2.5rem] h-full flex flex-col hover:border-[#22c55e]/30 transition-all group">
                  <div className="mb-8 p-4 bg-white/5 w-fit rounded-2xl group-hover:bg-[#22c55e]/10 transition-colors">
                    <Heart className="h-6 w-6 text-[#22c55e]" />
                  </div>
                  <h3 className="text-xl font-black mb-4 group-hover:text-[#22c55e] transition-colors uppercase">Hormônios, Desejo & Rotina</h3>
                  <p className="text-sm text-white/40 mb-8 flex-1 font-medium leading-relaxed">Como o sono, o estresse e a alimentação influenciam diretamente seus níveis de vitalidade íntima.</p>
                  <span className="text-white font-bold text-xs uppercase tracking-widest flex items-center gap-2">Explorar <ArrowRight className="h-4 w-4" /></span>
                </div>
              </Link>

              <Link href="/seguranca">
                <div className="bg-[#0a1a0a] border border-white/5 p-10 rounded-[2.5rem] h-full flex flex-col hover:border-[#22c55e]/30 transition-all group">
                  <div className="mb-8 p-4 bg-white/5 w-fit rounded-2xl group-hover:bg-[#22c55e]/10 transition-colors">
                    <ShieldAlert className="h-6 w-6 text-[#22c55e]" />
                  </div>
                  <h3 className="text-xl font-black mb-4 group-hover:text-[#22c55e] transition-colors uppercase">Segurança em Primeiro Lugar</h3>
                  <p className="text-sm text-white/40 mb-8 flex-1 font-medium leading-relaxed">Orientações fundamentais sobre o uso responsável de suplementos e quando buscar auxílio médico.</p>
                  <span className="text-white font-bold text-xs uppercase tracking-widest flex items-center gap-2">Explorar <ArrowRight className="h-4 w-4" /></span>
                </div>
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* Footer Disclaimer Block */}
      <footer className="bg-[#050f05] border-t border-white/5 py-24">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-2xl mx-auto space-y-8">
            <div className="flex justify-center mb-8">
              <Zap className="fill-[#22c55e] text-[#22c55e] h-8 w-8" />
            </div>
            <p className="text-sm font-bold text-[#22c55e] uppercase tracking-[0.3em] leading-relaxed">
              Conteúdo educativo. Produtos naturais não substituem acompanhamento profissional de saúde.
            </p>
            <p className="text-[10px] text-white/20 font-bold uppercase tracking-[0.2em]">
              © 2026 Afro Potente - Ciência e Natureza para o seu Bem-estar.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
