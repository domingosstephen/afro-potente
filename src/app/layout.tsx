import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Afropotente",
  description: "Saúde Sexual Masculina",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
