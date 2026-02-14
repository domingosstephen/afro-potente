import Link from "next/link";
import { Zap, CheckCircle2, ArrowRight, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function SuccessPage({
  searchParams,
}: {
  searchParams: { session_id?: string };
}) {
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

      <main className="flex-1 flex flex-col items-center justify-center p-6 text-center">
        <div className="p-6 bg-[#22c55e]/10 rounded-3xl text-[#22c55e] mb-8">
          <CheckCircle2 className="h-12 w-12" />
        </div>
        <h1 className="text-4xl lg:text-6xl font-black mb-6 uppercase tracking-tighter">
          Obrigado pela <span className="text-[#22c55e]">compra</span>
        </h1>
        <p className="text-xl text-white/40 max-w-lg mx-auto mb-12 font-medium leading-relaxed">
          Seu pagamento foi confirmado. Em instantes você receberá um e-mail com o link para acessar seu guia. Verifique também a pasta de spam.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button asChild size="lg" className="bg-[#22c55e] hover:bg-[#1ea34d] text-[#050f05] font-black h-14 px-10 rounded-2xl text-lg transition-all hover:scale-105">
            <Link href="/">Voltar ao início</Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="border-white/10 hover:bg-white/5 text-white font-black h-14 px-10 rounded-2xl text-lg">
            <Link href="/guia-de-bem-estar">
              <BookOpen className="mr-2 h-5 w-5" />
              Ver Guia de Bem-estar
            </Link>
          </Button>
        </div>
      </main>

      <footer className="py-12 border-t border-white/5 text-center">
        <p className="text-[10px] text-white/20 font-bold uppercase tracking-[0.2em]">© 2026 Afro Potente</p>
      </footer>
    </div>
  );
}
