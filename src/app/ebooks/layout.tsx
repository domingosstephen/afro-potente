import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ebooks Afro Potente — Vitalidade e Relacionamentos com Remédios Caseiros",
  description:
    "Estresse, dieta errada e falta de sono estão te esgotando? Descubra remédios caseiros baratos do mercado. Recupere energia, vitalidade e relacionamentos mais felizes. Oferta especial: todos os ebooks por R$ 147,17.",
  openGraph: {
    title: "Ebooks Afro Potente — Vitalidade e Relacionamentos",
    description:
      "Remédios caseiros e naturais para energia e relacionamentos. Oferta limitada: todos os ebooks por R$ 147,17.",
    type: "website",
    locale: "pt_BR",
  },
};

export default function EbooksLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <>{children}</>;
}
