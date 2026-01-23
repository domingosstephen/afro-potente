import Link from "next/link";
import { ArrowLeft, ArrowRight, Zap, ShieldCheck, Lock, Package, CheckCircle2, FileText, Stethoscope } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function ComoFunciona() {
  return (
    <div className="flex min-h-screen flex-col bg-[#050f05] text-white font-sans">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 w-full bg-[#050f05]/80 backdrop-blur-md border-b border-white/5">
        <div className="container mx-auto flex h-20 items-center justify-between px-6">
          <Link href="/" className="text-2xl font-black tracking-tighter flex items-center gap-2">
            <Zap className="fill-[#22c55e] text-[#22c55e] h-6 w-6" />
            AFRO POTENTE
          </Link>
          <Link href="/" className="flex items-center text-white/50 hover:text-[#22c55e] transition-colors font-bold text-sm uppercase tracking-widest">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Voltar
          </Link>
        </div>
      </nav>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-24 lg:py-32 bg-[#081508] text-center overflow-hidden">
          <div className="container mx-auto px-6 relative">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[#22c55e]/5 blur-[120px] rounded-full -z-10" />
            <h1 className="text-4xl lg:text-7xl font-black mb-8 leading-tight">
              Saúde com <span className="text-[#22c55e]">simplicidade</span> <br />e discrição total.
            </h1>
            <p className="text-lg text-white/40 max-w-2xl mx-auto leading-relaxed mb-12">
              Desenvolvemos um processo digital seguro para que você recupere seu bem-estar sem filas, sem salas de espera e sem constrangimentos.
            </p>
            <Button size="lg" className="bg-[#22c55e] hover:bg-[#1ea34d] text-[#050f05] font-black h-16 px-10 rounded-xl text-lg">
              Fazer Minha Avaliação Agora
            </Button>
          </div>
        </section>

        {/* Steps Section */}
        <section className="py-32">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-20">
              {[
                { 
                  step: '01', 
                  title: 'Avaliação Digital', 
                  icon: <FileText className="h-8 w-8" />, 
                  desc: 'Responda um questionário inteligente de 2 minutos sobre sua saúde e objetivos.' 
                },
                { 
                  step: '02', 
                  title: 'Análise de Perfil', 
                  icon: <Stethoscope className="h-8 w-8" />, 
                  desc: 'Nossos especialistas revisam suas respostas para recomendar o protocolo ideal.' 
                },
                { 
                  step: '03', 
                  title: 'Envio Imediato', 
                  icon: <Package className="h-8 w-8" />, 
                  desc: 'Receba seus guias ou produtos em embalagem 100% neutra com total privacidade.' 
                }
              ].map((item, i) => (
                <div key={i} className="relative group">
                  <div className="text-8xl font-black text-white/5 absolute -top-12 -left-4 group-hover:text-[#22c55e]/10 transition-colors">{item.step}</div>
                  <div className="relative z-10">
                    <div className="mb-8 p-5 bg-[#22c55e]/10 w-fit rounded-2xl text-[#22c55e] border border-[#22c55e]/20">
                      {item.icon}
                    </div>
                    <h3 className="text-2xl font-black mb-4">{item.title}</h3>
                    <p className="text-white/40 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-32 bg-[#081508]">
          <div className="container mx-auto px-6 max-w-3xl">
            <div className="text-center mb-20">
              <h2 className="text-4xl font-black mb-4">Dúvidas Frequentes</h2>
              <div className="h-1.5 w-24 bg-[#22c55e] rounded-full mx-auto" />
            </div>
            
            <Accordion type="single" collapsible className="w-full space-y-4">
              {[
                { q: 'O tratamento é 100% natural?', a: 'Sim. Nossos protocolos focam em suplementação natural, ajustes de estilo de vida e fitoterapia baseada em evidências.' },
                { q: 'A embalagem é realmente discreta?', a: 'Completamente. Nossas caixas são pardas e neutras. Na etiqueta de envio não há qualquer menção à Afro Potente ou ao conteúdo da caixa.' },
                { q: 'Como recebo o acesso aos guias digitais?', a: 'Imediatamente após a confirmação do pagamento (via Pix ou Cartão), você receberá um link de acesso exclusivo via e-mail e WhatsApp.' },
                { q: 'Preciso de acompanhamento médico?', a: 'Nossos protocolos são de bem-estar, mas sempre incentivamos o acompanhamento profissional para casos de condições pré-existentes.' }
              ].map((item, i) => (
                <AccordionItem key={i} value={`item-${i}`} className="border border-white/5 bg-[#0a1a0a] px-8 rounded-[1.5rem] overflow-hidden">
                  <AccordionTrigger className="text-left font-black text-lg py-6 hover:no-underline hover:text-[#22c55e] transition-colors">
                    {item.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-white/40 pb-8 leading-relaxed">
                    {item.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* Confidence Section */}
        <section className="py-32 bg-[#22c55e]">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-[#050f05] text-4xl lg:text-6xl font-black mb-12">Sua privacidade é nossa prioridade nº 1.</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-4xl mx-auto mb-16">
              <div className="flex flex-col items-center gap-4 text-[#050f05]">
                <Lock className="h-10 w-10 opacity-60" />
                <span className="font-black uppercase tracking-widest text-sm text-center">Dados Criptografados</span>
              </div>
              <div className="flex flex-col items-center gap-4 text-[#050f05]">
                <ShieldCheck className="h-10 w-10 opacity-60" />
                <span className="font-black uppercase tracking-widest text-sm text-center">Fatura Discreta</span>
              </div>
              <div className="flex flex-col items-center gap-4 text-[#050f05]">
                <Package className="h-10 w-10 opacity-60" />
                <span className="font-black uppercase tracking-widest text-sm text-center">Embalagem Neutra</span>
              </div>
            </div>
            <Button size="lg" className="bg-[#050f05] hover:bg-black text-white font-black h-16 px-12 rounded-xl text-lg">
              Começar com Segurança
            </Button>
          </div>
        </section>
      </main>

      <footer className="bg-[#050f05] border-t border-white/5 py-12">
        <div className="container mx-auto px-6 text-center text-[10px] font-bold text-white/20 uppercase tracking-[0.2em]">
          © 2026 Afro Potente - Ciência e Natureza para sua Performance
        </div>
      </footer>
    </div>
  );
}
