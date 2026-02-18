import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export default function OxidoNitricoPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#F5EDE0] font-sans">
      <Navbar />

      <main className="flex-1 pt-20">
        <div className="container mx-auto px-4 md:px-6 py-12 md:py-20">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="font-serif text-[#2B1A0E] mb-4">Oxido Nitrico & Circulacao</h1>
              <p className="text-lg text-[#2B1A0E]/60 leading-relaxed">
                A ciencia por tras da molecula que apoia a saude vascular.
              </p>
            </div>

            <div className="bg-[#FAF7F2] border border-[#2B1A0E]/10 p-6 md:p-10 rounded-xl mb-10 space-y-8">
              <section>
                <h2 className="font-serif text-xl text-[#2B1A0E] mb-3">O que e?</h2>
                <p className="text-[#2B1A0E]/60 leading-relaxed max-w-none">
                  O oxido nitrico (NO) e uma molecula sinalizadora fundamental produzida pelo organismo que atua diretamente no relaxamento dos vasos sanguineos (vasodilatacao).
                </p>
              </section>

              <section>
                <h2 className="font-serif text-xl text-[#2B1A0E] mb-3">Papel na Vitalidade</h2>
                <p className="text-[#2B1A0E]/60 leading-relaxed max-w-none">
                  Ao promover a circulacao saudavel, o oxido nitrico contribui para o transporte eficiente de oxigenio e nutrientes para todos os tecidos do corpo, apoiando o desempenho fisico e a saude cardiovascular.
                </p>
              </section>

              <section>
                <h2 className="font-serif text-xl text-[#2B1A0E] mb-3">Fatores Naturais</h2>
                <p className="text-[#2B1A0E]/60 leading-relaxed max-w-none">
                  Alimentos ricos em nitratos e antioxidantes, alem da pratica regular de exercicios fisicos, sao formas naturais de apoiar a producao saudavel de oxido nitrico pelo corpo.
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
