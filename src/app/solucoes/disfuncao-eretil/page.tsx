import Link from "next/link";
import { ArrowLeft, ArrowRight, CheckCircle2, ChevronRight, ShieldCheck, Heart, Zap, Info } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function DisfuncaoEretil() {
  return (
    <div className="flex min-h-screen flex-col bg-white text-slate-900 font-sans">
      {/* Header */}
      <header className="border-b border-slate-100 py-6">
        <div className="container mx-auto px-6 flex items-center justify-between">
          <Link href="/" className="flex items-center text-slate-500 hover:text-emerald-600 transition-colors">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Voltar
          </Link>
          <div className="text-xl font-bold text-emerald-600">Afro Potente</div>
          <div className="w-[80px]"></div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-[#ECFDF5] py-16 lg:py-24">
          <div className="container mx-auto px-6 max-w-4xl text-center">
            <h1 className="text-3xl lg:text-5xl font-extrabold tracking-tight text-slate-900 mb-6">
              Protocolo de Suporte à <span className="text-emerald-600 font-serif italic">Função Erétil</span>
            </h1>
            <p className="text-lg lg:text-xl text-slate-800 font-semibold mb-8 leading-relaxed">
              Uma abordagem estruturada e discreta para melhorar confiança, desempenho e consistência sexual.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white rounded-full px-12 h-14 text-lg">
                Fazer Avaliação Online
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
            <div className="mt-8 flex flex-wrap gap-6 text-sm font-medium text-slate-500 justify-center">
              <span className="flex items-center"><ChevronRight className="h-4 w-4 text-emerald-600 mr-1" /> Discreto</span>
              <span className="flex items-center"><ChevronRight className="h-4 w-4 text-emerald-600 mr-1" /> Online</span>
              <span className="flex items-center"><ChevronRight className="h-4 w-4 text-emerald-600 mr-1" /> Entrega em todo o Brasil</span>
            </div>
          </div>
        </section>

        {/* Section: Para quem é */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6 max-w-4xl">
            <h2 className="text-2xl font-bold mb-10 text-center">Para quem é este protocolo?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100 text-center">
                <Heart className="h-8 w-8 text-emerald-600 mx-auto mb-4" />
                <p className="text-sm font-medium text-slate-700">Homens que percebem queda de desempenho ao longo do tempo</p>
              </div>
              <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100 text-center">
                <Zap className="h-8 w-8 text-emerald-600 mx-auto mb-4" />
                <p className="text-sm font-medium text-slate-700">Pessoas afetadas por estresse, rotina intensa ou fadiga</p>
              </div>
              <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100 text-center">
                <CheckCircle2 className="h-8 w-8 text-emerald-600 mx-auto mb-4" />
                <p className="text-sm font-medium text-slate-700">Quem busca uma alternativa natural e organizada</p>
              </div>
            </div>
          </div>
        </section>

        {/* Section: O que inclui */}
        <section className="py-20 bg-slate-50">
          <div className="container mx-auto px-6 max-w-3xl">
            <h2 className="text-2xl font-bold mb-10 text-center">O que o protocolo inclui</h2>
            <div className="space-y-4">
              {[
                "Orientação de rotina diária e hábitos",
                "Suplementação natural com uso guiado",
                "Suporte à circulação e recuperação",
                "Acompanhamento simples e prático"
              ].map((item, i) => (
                <div key={i} className="flex items-center bg-white p-5 rounded-xl border border-slate-100 shadow-sm">
                  <CheckCircle2 className="h-5 w-5 text-emerald-600 mr-4 shrink-0" />
                  <span className="font-medium text-slate-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section: O que esperar */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6 max-w-3xl text-center">
            <h2 className="text-2xl font-bold mb-6">O que esperar</h2>
            <div className="bg-emerald-50 border border-emerald-100 p-8 rounded-3xl">
              <p className="text-slate-700 leading-relaxed italic">
                "Resultados variam de pessoa para pessoa. A consistência é o fator mais importante. Muitos usuários relatam melhora gradual na confiança, energia e desempenho ao longo das semanas."
              </p>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 bg-slate-900 text-white text-center">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold mb-8">Retome o controle da sua vida sexual</h2>
            <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white rounded-full px-12 h-14 text-lg">
              Começar Avaliação
            </Button>
            <p className="mt-6 text-slate-400 text-sm flex items-center justify-center">
              <ShieldCheck className="h-4 w-4 mr-2" />
              Processo 100% Discreto e Seguro
            </p>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-100 bg-white py-12">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <h4 className="text-sm font-bold text-slate-900 mb-4 uppercase tracking-widest">Aviso Legal</h4>
            <p className="text-[10px] text-slate-400 max-w-3xl mx-auto leading-relaxed">
              Os protocolos do Afro Potente não substituem a consulta médica presencial. Sempre consulte um profissional de saúde qualificado antes de iniciar qualquer tratamento ou suplementação.
            </p>
            <p className="mt-8 text-slate-300 text-[10px]">© 2026 Afro Potente. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
