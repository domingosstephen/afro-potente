import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ebooks Individuais — Guias por R$ 47 | Afro Potente",
  description:
    "Cada guia de vitalidade e bem-estar por R$ 47. Escolha o protocolo que combina com você. Remédios caseiros, receitas naturais, entrega imediata.",
  openGraph: {
    title: "Ebooks Individuais — R$ 47 cada | Afro Potente",
    description:
      "Guias digitais com remédios caseiros por R$ 47. Vitalidade, energia e conexão para solteiros e casais.",
    type: "website",
    locale: "pt_BR",
  },
};

export default function EbooksIndividuaisLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <>{children}</>;
}
