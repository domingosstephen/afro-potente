import Link from "next/link";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const securityPoints = [
  "Uso responsavel: Sempre siga as orientacoes de uso sugeridas e evite excessos.",
  "Higiene e Preparo: Utilize sempre utensilios limpos e agua de boa qualidade em seus preparos.",
  "Armazenamento: Mantenha ingredientes e infusoes em locais frescos, longe da luz solar direta.",
  "Consulta Profissional: Busque auxilio medico se voce tiver condicoes pre-existentes ou usar medicamentos continuos.",
  "Escuta do Corpo: Ao notar qualquer desconforto, interrompa o uso e avalie sua rotina com um especialista."
];

export default function SegurancaPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#F5EDE0] font-sans">
      <Navbar />

      <main className="flex-1 pt-20">
        <div className="container mx-auto px-4 md:px-6 py-12 md:py-20">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="font-serif text-[#2B1A0E] mb-4">Seguranca em Primeiro Lugar</h1>
              <p className="text-lg text-[#2B1A0E]/60 leading-relaxed">
                Orientacoes fundamentais para um bem-estar consciente e seguro.
              </p>
            </div>

            <div className="bg-[#FAF7F2] border border-[#2B1A0E]/10 p-6 md:p-10 rounded-xl mb-10">
              <ul className="space-y-5">
                {securityPoints.map((point, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <CheckCircle2 className="h-5 w-5 text-[#B94A2F] shrink-0 mt-0.5" />
                    <p className="text-[#2B1A0E]/70 leading-relaxed max-w-none">{point}</p>
                  </li>
                ))}
              </ul>
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
