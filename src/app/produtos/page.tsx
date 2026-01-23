import Link from "next/link";
import { Zap, ArrowLeft, ShoppingBag, CheckCircle2, Star, ShieldCheck, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const products = [
  {
    id: "restauracao",
    name: "Manual de Restauração Total",
    description: "O Guia de Recuperação: Disfunções persistentes, falta de ereção matinal e limpeza arterial.",
    price: "R$ 147,00",
    tag: "Restauração",
    features: ["Infusão de 72 horas (Cebola/Limão/Cravo)", "Limpeza arterial natural", "Recuperação de ereção matinal"]
  },
  {
    id: "libido",
    name: "Acelerador de Libido",
    description: "O Guia do Desejo: Baixo desejo sexual, desequilíbrio hormonal e falta de sensibilidade.",
    price: "R$ 97,00",
    tag: "Desejo",
    features: ["Drink de Quiabo e Cravo", "Misturas de Chocolate Amargo e Banana", "Equilíbrio hormonal natural"]
  },
  {
    id: "performance",
    name: "Protocolo de Performance",
    description: "O Guia do Vigor: Ejaculação precoce, falta de energia durante o ato e cansaço físico.",
    price: "R$ 127,00",
    tag: "Vigor",
    features: ["Chá da Potência Dourada (Gengibre/Alho/Mel)", "Shot de Melancia (Citrulina)", "Controle e estamina"]
  },
  {
    id: "vigor",
    name: "Guia do Vigor Diário",
    description: "O Guia do Estilo de Vida: Insônia, níveis baixos de testosterona por estresse e fadiga diária.",
    price: "R$ 67,00",
    tag: "Estilo de Vida",
    features: ["Tônico de Casca de Banana", "Protocolos de sono e sol", "Redução de cortisol"]
  }
];

export default function ProdutosPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#050f05] text-white font-sans">
      <nav className="sticky top-0 z-50 w-full bg-[#050f05]/80 backdrop-blur-md border-b border-white/5">
        <div className="container mx-auto flex h-20 items-center justify-between px-6">
          <Link href="/" className="text-2xl font-black tracking-tighter flex items-center gap-2">
            <Zap className="fill-[#22c55e] text-[#22c55e] h-6 w-6" />
            AFRO POTENTE
          </Link>
          <div className="hidden md:flex items-center gap-6">
            <Link href="/guia-de-bem-estar" className="text-sm font-bold uppercase tracking-widest text-white/50 hover:text-white transition-colors">Guia</Link>
            <Link href="/contato" className="text-sm font-bold uppercase tracking-widest text-white/50 hover:text-white transition-colors">Contato</Link>
          </div>
        </div>
      </nav>

      <main className="flex-1 container mx-auto px-6 py-16">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#22c55e]/10 border border-[#22c55e]/20 text-[#22c55e] text-xs font-bold uppercase tracking-[0.2em] mb-6">
            <ShoppingBag className="h-4 w-4" />
            Loja Oficial
          </div>
          <h1 className="text-5xl lg:text-7xl font-black mb-6 uppercase tracking-tighter">
            Nossos <span className="text-[#22c55e]">Protocolos</span>
          </h1>
          <p className="text-xl text-white/40 max-w-2xl mx-auto font-medium leading-relaxed">
            Guias digitais baseados em ciência e sabedoria ancestral para transformar sua vitalidade.
          </p>
        </div>

        {/* Master Combo / Bundle */}
        <div className="max-w-5xl mx-auto mb-24">
          <div className="relative overflow-hidden bg-gradient-to-br from-[#0a1a0a] to-[#050f05] border-2 border-[#22c55e]/30 rounded-[2.5rem] p-8 md:p-12">
            <div className="absolute top-0 right-0 p-6">
              <Sparkles className="h-12 w-12 text-[#22c55e]/20" />
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-block px-4 py-1 rounded-full bg-[#22c55e] text-[#050f05] text-[10px] font-black uppercase tracking-widest mb-6">
                  Oferta Única
                </div>
                <h2 className="text-4xl font-black mb-4 uppercase tracking-tighter">Coleção Vitalidade Suprema</h2>
                <p className="text-[#22c55e] font-bold text-lg mb-6 italic">"Toda a ciência e todas as receitas por um preço único."</p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-3 text-white/70 font-medium">
                    <CheckCircle2 className="h-5 w-5 text-[#22c55e]" />
                    Todos os 4 guias digitais inclusos
                  </li>
                  <li className="flex items-center gap-3 text-white/70 font-medium">
                    <CheckCircle2 className="h-5 w-5 text-[#22c55e]" />
                    BÔNUS: Guia de Compras Afrodisíacas
                  </li>
                  <li className="flex items-center gap-3 text-white/70 font-medium">
                    <CheckCircle2 className="h-5 w-5 text-[#22c55e]" />
                    Acesso imediato via PDF
                  </li>
                </ul>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-3xl p-8 text-center">
                <div className="text-white/40 line-through text-lg mb-1">R$ 438,00</div>
                <div className="text-5xl font-black text-white mb-2">R$ 197,00</div>
                <div className="text-[#22c55e] font-bold text-sm uppercase tracking-widest mb-8">Economize R$ 241,00</div>
                <Button className="w-full bg-[#22c55e] hover:bg-[#1ea34d] text-[#050f05] font-black h-14 rounded-xl text-lg transition-all hover:scale-105">
                  Quero a Coleção Completa
                </Button>
                <p className="text-[10px] text-white/30 mt-4 uppercase font-bold tracking-widest flex items-center justify-center gap-2">
                  <ShieldCheck className="h-3 w-3" /> Pagamento Seguro via Pix ou Cartão
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Individual Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-24">
          {products.map((product) => (
            <Card key={product.id} className="bg-[#0a1a0a] border-white/5 p-8 rounded-[2rem] flex flex-col hover:border-[#22c55e]/20 transition-colors group">
              <div className="flex justify-between items-start mb-6">
                <div className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-black uppercase tracking-widest text-[#22c55e]">
                  {product.tag}
                </div>
                <div className="flex text-[#22c55e]">
                  <Star className="h-4 w-4 fill-current" />
                  <Star className="h-4 w-4 fill-current" />
                  <Star className="h-4 w-4 fill-current" />
                  <Star className="h-4 w-4 fill-current" />
                  <Star className="h-4 w-4 fill-current" />
                </div>
              </div>
              <h3 className="text-2xl font-black mb-4 uppercase tracking-tighter group-hover:text-[#22c55e] transition-colors">{product.name}</h3>
              <p className="text-white/50 text-sm leading-relaxed mb-8 flex-1">
                {product.description}
              </p>
              <ul className="space-y-3 mb-8">
                {product.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-xs font-bold text-white/70 uppercase tracking-wide">
                    <CheckCircle2 className="h-4 w-4 text-[#22c55e]/50" />
                    {feature}
                  </li>
                ))}
              </ul>
              <div className="flex items-center justify-between mt-auto pt-6 border-t border-white/5">
                <div className="text-2xl font-black">{product.price}</div>
                <Button className="bg-white/5 hover:bg-[#22c55e] text-white hover:text-[#050f05] border border-white/10 hover:border-[#22c55e] font-bold rounded-xl transition-all">
                  Adicionar
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* Back Button */}
        <div className="text-center">
          <Button asChild variant="ghost" className="text-white/40 hover:text-white hover:bg-white/5 rounded-xl">
            <Link href="/"><ArrowLeft className="mr-2 h-4 w-4" /> Voltar para a Home</Link>
          </Button>
        </div>
      </main>

      <footer className="py-12 border-t border-white/5 text-center">
        <p className="text-[10px] text-white/20 font-bold uppercase tracking-[0.2em]">© 2026 Afro Potente • Conteúdo Digital</p>
      </footer>
    </div>
  );
}
