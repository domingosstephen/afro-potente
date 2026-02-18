import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export default function TermosPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#F5EDE0] font-sans">
      <Navbar />

      <main className="flex-1 pt-20">
        <div className="container mx-auto px-4 md:px-6 py-12 md:py-20 max-w-3xl">
          <h1 className="font-serif text-[#2B1A0E] mb-8">Termos de Uso</h1>

          <div className="space-y-6 text-[#2B1A0E]/70 leading-relaxed">
            <p className="max-w-none">
              Ao acessar e utilizar o site e os servicos da Afro Potente, voce concorda com estes termos. Leia-os com atencao.
            </p>
            <h2 className="font-serif text-xl text-[#2B1A0E] mt-8">Uso do site e conteudo</h2>
            <p className="max-w-none">
              O conteudo do site e informativo e educativo. Voce pode utilizar o site de boa-fe, sem violar leis aplicaveis nem os direitos de terceiros. Nao e permitido copiar, revender ou redistribuir materiais pagos fora do uso pessoal licenciado.
            </p>
            <h2 className="font-serif text-xl text-[#2B1A0E] mt-8">Compras e produtos digitais</h2>
            <p className="max-w-none">
              Os produtos digitais (guias, protocolos em PDF) sao entregues por e-mail apos a confirmacao do pagamento. O acesso e pessoal e intransferivel.
            </p>
            <h2 className="font-serif text-xl text-[#2B1A0E] mt-8">Reembolso</h2>
            <p className="max-w-none">
              Por se tratar de produto digital entregue imediatamente, pedidos de reembolso sao avaliados caso a caso, em conformidade com o Codigo de Defesa do Consumidor. Entre em contato em ate 7 dias em caso de problema com o acesso.
            </p>
            <h2 className="font-serif text-xl text-[#2B1A0E] mt-8">Aviso de saude</h2>
            <p className="max-w-none">
              O conteudo da Afro Potente e de cunho educativo e baseado em tradicoes naturais. Nao substitui orientacao medica, diagnostico ou tratamento. Consulte sempre um profissional de saude.
            </p>
            <p className="text-sm text-[#2B1A0E]/40 mt-8 max-w-none">
              Ultima atualizacao: 2026. Alteracoes nos termos serao publicadas nesta pagina.
            </p>
          </div>

          <div className="mt-10">
            <Button asChild variant="outline" size="lg">
              <Link href="/"><ArrowLeft className="mr-2 h-4 w-4" /> Voltar ao Inicio</Link>
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
