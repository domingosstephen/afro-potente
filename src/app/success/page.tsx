import Link from "next/link";
import { CheckCircle2, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export default function SuccessPage({
  searchParams,
}: {
  searchParams: { session_id?: string };
}) {
  return (
    <div className="flex min-h-screen flex-col bg-[#F5EDE0] font-sans">
      <Navbar />

      <main className="flex-1 flex flex-col items-center justify-center p-6 text-center pt-28">
        <div className="p-5 bg-[#B94A2F]/10 rounded-2xl text-[#B94A2F] mb-6">
          <CheckCircle2 className="h-10 w-10" />
        </div>
        <h1 className="font-serif text-[#2B1A0E] mb-4">Obrigado pela compra!</h1>
        <p className="text-lg text-[#2B1A0E]/60 max-w-md mx-auto mb-10 leading-relaxed">
          Seu pagamento foi confirmado. Em instantes voce recebera um e-mail com o link para acessar seu guia.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button asChild size="lg">
            <Link href="/">Voltar ao inicio</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/guia-de-bem-estar">
              <BookOpen className="mr-2 h-5 w-5" />
              Ver Guia de Bem-estar
            </Link>
          </Button>
        </div>
      </main>

      <Footer />
    </div>
  );
}
