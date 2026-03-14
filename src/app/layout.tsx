import type { Metadata } from "next";
import "./globals.css";
import { FacebookPixel } from "@/components/FacebookPixel";

const baseUrl =
  process.env.NEXT_PUBLIC_URL ?? "https://afropotente.com";
const canonicalUrl = baseUrl.startsWith("http") ? baseUrl : `https://${baseUrl}`;

export const metadata: Metadata = {
  metadataBase: new URL(canonicalUrl),
  title: "Afro Potente — Receitas Ancestrais Para Uma Vida Mais Potente",
  description: "Descubra o poder dos remédios naturais africanos para energia, vitalidade e saúde plena. Receitas ancestrais, 100% naturais, feitas para você.",
  openGraph: {
    title: "Afro Potente — Receitas Ancestrais Para Uma Vida Mais Potente",
    description: "Descubra o poder dos remédios naturais africanos para energia, vitalidade e saúde plena.",
    type: "website",
    locale: "pt_BR",
    siteName: "Afro Potente",
    url: canonicalUrl,
  },
  twitter: {
    card: "summary_large_image",
    title: "Afro Potente — Receitas Ancestrais Para Uma Vida Mais Potente",
    description: "Descubra o poder dos remédios naturais africanos para energia, vitalidade e saúde plena.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Serif+Display&family=Inter:wght@400;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans">
        <FacebookPixel />
        {children}
      </body>
    </html>
  );
}
