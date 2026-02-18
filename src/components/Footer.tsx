import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-[#2B1A0E] pt-16 md:pt-24 pb-10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-16 mb-12 md:mb-20">
          {/* Brand */}
          <div>
            <Link href="/" className="font-serif text-xl text-[#F5EDE0] mb-4 block">
              Afro Potente
            </Link>
            <p className="text-sm text-[#F5EDE0]/50 leading-relaxed mb-6 max-w-none">
              Receitas naturais ancestrais africanas para energia, vitalidade e saúde plena.
            </p>
            <a
              href="https://wa.me/5500000000000"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20BD5A] text-white font-sans font-semibold text-sm px-5 py-2.5 rounded-lg transition-all"
            >
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              Fale no WhatsApp
            </a>
          </div>

          {/* Receitas */}
          <div>
            <h4 className="font-sans font-semibold text-sm text-[#F5EDE0] uppercase tracking-wider mb-6">Receitas</h4>
            <ul className="space-y-3">
              <li><Link href="/guia-de-bem-estar" className="text-sm text-[#F5EDE0]/50 hover:text-[#B94A2F] transition-colors">Guia de Bem-estar</Link></li>
              <li><Link href="/exercicios" className="text-sm text-[#F5EDE0]/50 hover:text-[#B94A2F] transition-colors">Exercicios Naturais</Link></li>
              <li><Link href="/comunidade" className="text-sm text-[#F5EDE0]/50 hover:text-[#B94A2F] transition-colors">Comunidade</Link></li>
              <li><Link href="/produtos" className="text-sm text-[#F5EDE0]/50 hover:text-[#B94A2F] transition-colors">Loja</Link></li>
            </ul>
          </div>

          {/* Sobre */}
          <div>
            <h4 className="font-sans font-semibold text-sm text-[#F5EDE0] uppercase tracking-wider mb-6">Sobre</h4>
            <ul className="space-y-3">
              <li><Link href="/como-funciona" className="text-sm text-[#F5EDE0]/50 hover:text-[#B94A2F] transition-colors">Como Funciona</Link></li>
              <li><Link href="/seguranca" className="text-sm text-[#F5EDE0]/50 hover:text-[#B94A2F] transition-colors">Seguranca</Link></li>
              <li><Link href="/contato" className="text-sm text-[#F5EDE0]/50 hover:text-[#B94A2F] transition-colors">Contato</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-sans font-semibold text-sm text-[#F5EDE0] uppercase tracking-wider mb-6">Legal</h4>
            <ul className="space-y-3">
              <li><Link href="/privacidade" className="text-sm text-[#F5EDE0]/50 hover:text-[#B94A2F] transition-colors">Privacidade</Link></li>
              <li><Link href="/termos" className="text-sm text-[#F5EDE0]/50 hover:text-[#B94A2F] transition-colors">Termos de Uso</Link></li>
            </ul>
            <p className="text-xs text-[#F5EDE0]/30 mt-6 max-w-none">
              CNPJ: 00.000.000/0001-00
            </p>
          </div>
        </div>

        <div className="pt-8 border-t border-[#F5EDE0]/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-[#F5EDE0]/30">
            &copy; 2026 Afro Potente. Sabedoria ancestral africana.
          </p>
          <p className="text-xs text-[#F5EDE0]/30">
            Conteudo educativo. Nao substitui orientacao profissional.
          </p>
        </div>
      </div>
    </footer>
  );
}
