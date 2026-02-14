import Link from "next/link";
import { Zap, ArrowLeft, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function TermosPage() {
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
          <FileText className="h-12 w-12" />
        </div>
        <h1 className="text-4xl lg:text-5xl font-black mb-8 uppercase tracking-tighter">
          Termos de <span className="text-[#22c55e]">Uso</span>
        </h1>

        <div className="space-y-6 text-white/70 font-medium leading-relaxed text-sm md:text-base">
          <p>
            Ao acessar e utilizar o site e os serviços da Afro Potente, você concorda com estes termos. Leia-os com atenção.
          </p>
          <h2 className="text-white font-black text-lg uppercase tracking-wider mt-8">Uso do site e conteúdo</h2>
          <p>
            O conteúdo do site é informativo e educativo. Você pode utilizar o site de boa-fé, sem violar leis aplicáveis nem os direitos de terceiros. Não é permitido copiar, revender ou redistribuir materiais pagos (por exemplo, guias em PDF) fora do uso pessoal licenciado.
          </p>
          <h2 className="text-white font-black text-lg uppercase tracking-wider mt-8">Compras e produtos digitais</h2>
          <p>
            Os produtos digitais (guias, protocolos em PDF) são entregues por e-mail após a confirmação do pagamento. O acesso é pessoal e intransferível. Garantimos que o link de download será enviado conforme descrito; em caso de falha técnica, entre em contato com suporte para reenvio.
          </p>
          <h2 className="text-white font-black text-lg uppercase tracking-wider mt-8">Reembolso</h2>
          <p>
            Por se tratar de produto digital entregue imediatamente, pedidos de reembolso são avaliados caso a caso, em conformidade com o Código de Defesa do Consumidor. Entre em contato em até 7 (sete) dias em caso de problema com o acesso ao conteúdo.
          </p>
          <h2 className="text-white font-black text-lg uppercase tracking-wider mt-8">Aviso de saúde</h2>
          <p>
            O conteúdo da Afro Potente é de cunho educativo e baseado em tradições naturais. Não substitui orientação médica, diagnóstico ou tratamento. Consulte sempre um profissional de saúde antes de mudanças na dieta ou suplementação, especialmente se você tiver condições de saúde pré-existentes ou usar medicamentos.
          </p>
          <p className="text-white/50 text-xs mt-8">
            Última atualização: 2026. Alterações nos termos serão publicadas nesta página.
          </p>
        </div>

        <div className="mt-12">
          <Button asChild size="lg" className="bg-[#22c55e] hover:bg-[#1ea34d] text-[#050f05] font-black h-14 px-10 rounded-2xl">
            <Link href="/"><ArrowLeft className="mr-2 h-5 w-5" /> Voltar ao Início</Link>
          </Button>
        </div>
      </main>

      <footer className="py-12 border-t border-white/5 text-center mt-12">
        <p className="text-[10px] text-white/20 font-bold uppercase tracking-[0.2em]">© 2026 Afro Potente</p>
      </footer>
    </div>
  );
}
