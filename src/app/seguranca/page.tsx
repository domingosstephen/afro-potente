import Link from "next/link";
import { Zap, ArrowLeft, ShieldAlert, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const securityPoints = [
  "Uso responsável: Sempre siga as orientações de uso sugeridas e evite excessos.",
  "Higiene e Preparo: Utilize sempre utensílios limpos e água de boa qualidade em seus preparos.",
  "Armazenamento: Mantenha ingredientes e infusões em locais frescos, longe da luz solar direta.",
  "Consulta Profissional: Busque auxílio médico se você tiver condições pré-existentes ou usar medicamentos contínuos.",
  "Escuta do Corpo: Ao notar qualquer desconforto, interrompa o uso e avalie sua rotina com um especialista."
];

export default function SegurancaPage() {
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

      <main className="flex-1 container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="p-6 bg-[#22c55e]/10 rounded-3xl text-[#22c55e] mb-8 inline-block">
              <ShieldAlert className="h-12 w-12" />
            </div>
            <h1 className="text-4xl lg:text-6xl font-black mb-6 uppercase tracking-tighter">
              Segurança em <span className="text-[#22c55e]">Primeiro Lugar</span>
            </h1>
            <p className="text-xl text-white/40 max-w-2xl mx-auto font-medium leading-relaxed">
              Orientações fundamentais para um bem-estar consciente e seguro.
            </p>
          </div>

          <div className="bg-[#0a1a0a] border border-white/5 p-10 rounded-[2.5rem] mb-12">
            <ul className="space-y-6">
              {securityPoints.map((point, i) => (
                <li key={i} className="flex items-start gap-4">
                  <CheckCircle2 className="h-6 w-6 text-[#22c55e] shrink-0 mt-0.5" />
                  <p className="text-lg text-white/60 font-medium leading-relaxed">{point}</p>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex justify-center">
            <Button asChild variant="outline" size="lg" className="border-white/10 hover:bg-white/5 text-white font-black h-16 px-10 rounded-xl text-lg">
              <Link href="/guia-de-bem-estar"><ArrowLeft className="mr-2 h-5 w-5" /> Voltar ao Guia</Link>
            </Button>
          </div>
        </div>
      </main>

      <footer className="py-12 border-t border-white/5 text-center">
        <p className="text-[10px] text-white/20 font-bold uppercase tracking-[0.2em]">© 2026 Afro Potente</p>
      </footer>
    </div>
  );
}
