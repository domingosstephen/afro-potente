import Link from "next/link";
import { Zap, ArrowLeft, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function PrivacidadePage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#050f05] text-white font-sans">
      <nav className="sticky top-0 z-50 w-full bg-[#050f05]/80 backdrop-blur-md border-b border-white/5">
        <div className="container mx-auto flex h-20 items-center justify-between px-6">
          <Link href="/" className="text-2xl font-black tracking-tighter flex items-center gap-2">
            <Zap className="fill-[#22c55e] text-[#22c55e] h-6 w-6" />
            AFRO POTENTE
          </Link>
        </div>
      </nav>

      <main className="flex-1 container mx-auto px-6 py-16 max-w-3xl">
        <div className="p-6 bg-[#22c55e]/10 rounded-3xl text-[#22c55e] mb-8 inline-block">
          <ShieldCheck className="h-12 w-12" />
        </div>
        <h1 className="text-4xl lg:text-5xl font-black mb-8 uppercase tracking-tighter">
          Política de <span className="text-[#22c55e]">Privacidade</span>
        </h1>

        <div className="space-y-6 text-white/70 font-medium leading-relaxed text-sm md:text-base">
          <p>
            A Afro Potente respeita sua privacidade e está em conformidade com a Lei Geral de Proteção de Dados (LGPD). Esta política descreve como tratamos seus dados pessoais.
          </p>
          <h2 className="text-white font-black text-lg uppercase tracking-wider mt-8">Dados que coletamos</h2>
          <p>
            Coletamos apenas os dados necessários para: (1) processar sua compra e enviar o produto digital; (2) enviar comunicações que você autorizou (por exemplo, formulário de contato); (3) cumprir obrigações legais. Podem incluir: nome, e-mail, dados de pagamento (tratados pelo gateway de pagamento) e preferências de comunicação que você informar.
          </p>
          <h2 className="text-white font-black text-lg uppercase tracking-wider mt-8">Finalidade e base legal</h2>
          <p>
            Utilizamos seus dados para execução do contrato de compra, envio de conteúdo educativo quando autorizado, e melhoria da experiência no site. O tratamento se baseia em consentimento (quando aplicável), execução de contrato e legítimo interesse.
          </p>
          <h2 className="text-white font-black text-lg uppercase tracking-wider mt-8">Compartilhamento</h2>
          <p>
            Não vendemos seus dados. Podemos compartilhar dados com prestadores de serviço essenciais (plataforma de pagamento, e-mail, hospedagem) sob contrato que garante proteção. Dados de pagamento são processados diretamente pelos provedores de pagamento (Stripe, Mercado Pago, Kiwify, etc.), conforme as políticas deles.
          </p>
          <h2 className="text-white font-black text-lg uppercase tracking-wider mt-8">Retenção e seus direitos</h2>
          <p>
            Mantemos os dados pelo tempo necessário para as finalidades descritas ou exigido por lei. Você tem direito de acesso, correção, exclusão, portabilidade e revogação do consentimento. Para exercer seus direitos ou cancelar comunicações, entre em contato pelo formulário ou e-mail informado no site.
          </p>
          <p className="text-white/50 text-xs mt-8">
            Última atualização: 2026. Em caso de alteração desta política, a versão atualizada será publicada nesta página.
          </p>
        </div>

        <div className="mt-12">
          <Button asChild size="lg" className="bg-[#22c55e] hover:bg-[#1ea34d] text-[#050f05] font-black h-14 px-10 rounded-2xl">
            <Link href="/contato"><ArrowLeft className="mr-2 h-5 w-5" /> Voltar / Contato</Link>
          </Button>
        </div>
      </main>

      <footer className="py-12 border-t border-white/5 text-center mt-12">
        <p className="text-[10px] text-white/20 font-bold uppercase tracking-[0.2em]">© 2026 Afro Potente</p>
      </footer>
    </div>
  );
}
