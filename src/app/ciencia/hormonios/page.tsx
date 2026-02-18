import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export default function HormoniosPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#F5EDE0] font-sans">
      <Navbar />

      <main className="flex-1 pt-20">
        <div className="container mx-auto px-4 md:px-6 py-12 md:py-20">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="font-serif text-[#2B1A0E] mb-4">Hormonios, Desejo & Rotina</h1>
              <p className="text-lg text-[#2B1A0E]/60 leading-relaxed">
                Como o estilo de vida influencia diretamente sua vitalidade e bem-estar.
              </p>
            </div>

            <div className="bg-[#FAF7F2] border border-[#2B1A0E]/10 p-6 md:p-10 rounded-xl mb-10 space-y-8">
              <section>
                <h2 className="font-serif text-xl text-[#2B1A0E] mb-3">Equilibrio Integral</h2>
                <p className="text-[#2B1A0E]/60 leading-relaxed max-w-none">
                  Os hormonios sao os mensageiros quimicos do corpo. Para manter o desejo natural e a vitalidade, e essencial buscar um equilibrio que envolva multiplos pilares do estilo de vida.
                </p>
              </section>

              <section>
                <h2 className="font-serif text-xl text-[#2B1A0E] mb-3">O Impacto do Sono e Estresse</h2>
                <p className="text-[#2B1A0E]/60 leading-relaxed max-w-none">
                  A privacao de sono e o estresse cronico elevam o cortisol, o que pode impactar negativamente a producao de hormonios ligados a vitalidade. Priorizar o descanso e tecnicas de relaxamento e fundamental.
                </p>
              </section>

              <section>
                <h2 className="font-serif text-xl text-[#2B1A0E] mb-3">Nutricao Funcional</h2>
                <p className="text-[#2B1A0E]/60 leading-relaxed max-w-none">
                  Gorduras saudaveis, minerais como o zinco e vitaminas especificas fornecem a base necessaria para que o sistema endocrino funcione de maneira otimizada.
                </p>
              </section>
            </div>

            <div className="flex justify-center">
              <Button asChild variant="outline" size="lg">
                <Link href="/guia-de-bem-estar"><ArrowLeft className="mr-2 h-4 w-4" /> Voltar ao Guia</Link>
              </Button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
