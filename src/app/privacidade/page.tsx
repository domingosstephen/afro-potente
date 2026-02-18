import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export default function PrivacidadePage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#F5EDE0] font-sans">
      <Navbar />

      <main className="flex-1 pt-20">
        <div className="container mx-auto px-4 md:px-6 py-12 md:py-20 max-w-3xl">
          <h1 className="font-serif text-[#2B1A0E] mb-8">Politica de Privacidade</h1>

          <div className="space-y-6 text-[#2B1A0E]/70 leading-relaxed">
            <p className="max-w-none">
              A Afro Potente respeita sua privacidade e esta em conformidade com a Lei Geral de Protecao de Dados (LGPD). Esta politica descreve como tratamos seus dados pessoais.
            </p>
            <h2 className="font-serif text-xl text-[#2B1A0E] mt-8">Dados que coletamos</h2>
            <p className="max-w-none">
              Coletamos apenas os dados necessarios para: (1) processar sua compra e enviar o produto digital; (2) enviar comunicacoes que voce autorizou; (3) cumprir obrigacoes legais. Podem incluir: nome, e-mail, dados de pagamento (tratados pelo gateway) e preferencias de comunicacao.
            </p>
            <h2 className="font-serif text-xl text-[#2B1A0E] mt-8">Finalidade e base legal</h2>
            <p className="max-w-none">
              Utilizamos seus dados para execucao do contrato de compra, envio de conteudo educativo quando autorizado, e melhoria da experiencia no site. O tratamento se baseia em consentimento, execucao de contrato e legitimo interesse.
            </p>
            <h2 className="font-serif text-xl text-[#2B1A0E] mt-8">Compartilhamento</h2>
            <p className="max-w-none">
              Nao vendemos seus dados. Podemos compartilhar dados com prestadores de servico essenciais (plataforma de pagamento, e-mail, hospedagem) sob contrato que garante protecao.
            </p>
            <h2 className="font-serif text-xl text-[#2B1A0E] mt-8">Retencao e seus direitos</h2>
            <p className="max-w-none">
              Mantemos os dados pelo tempo necessario para as finalidades descritas ou exigido por lei. Voce tem direito de acesso, correcao, exclusao, portabilidade e revogacao do consentimento.
            </p>
            <p className="text-sm text-[#2B1A0E]/40 mt-8 max-w-none">
              Ultima atualizacao: 2026. Em caso de alteracao, a versao atualizada sera publicada nesta pagina.
            </p>
          </div>

          <div className="mt-10">
            <Button asChild variant="outline" size="lg">
              <Link href="/contato"><ArrowLeft className="mr-2 h-4 w-4" /> Voltar / Contato</Link>
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
