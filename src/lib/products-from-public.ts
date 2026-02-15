/**
 * Products built from PDFs in /public. Used when Supabase has no products.
 * Names are curiosity-driven; no "ebook" in titles.
 * Add price_display, payment_link or stripe_price_id in Supabase to enable checkout.
 */
export type ProductFromPublic = {
  id: string;
  name: string;
  slug: string;
  description: string | null;
  price_display: string | null;
  price_cents: number | null;
  tag: string | null;
  features: string[];
  pdf_url: string | null;
  payment_link: string | null;
  stripe_price_id: string | null;
  is_bundle: boolean;
  sort_order: number;
};

export const PUBLIC_PDF_PRODUCTS: ProductFromPublic[] = [
  {
    id: "colecao-vitalidade-suprema",
    name: "Coleção Vitalidade Suprema",
    slug: "colecao-vitalidade-suprema",
    description: "Toda a ciência e todas as receitas por um preço único. Acesso completo aos protocolos de vitalidade.",
    price_display: null,
    price_cents: null,
    tag: "Oferta Única",
    features: [
      "Todos os guias digitais inclusos",
      "BÔNUS: Guia de Compras Afrodisíacas",
      "Acesso imediato via PDF",
    ],
    pdf_url: "/Full%20EBook.pdf",
    payment_link: null,
    stripe_price_id: null,
    is_bundle: true,
    sort_order: 0,
  },
  {
    id: "protocolo-vitalidade-casais",
    name: "Protocolo Vitalidade Casais",
    slug: "protocolo-vitalidade-casais",
    description: "Conteúdo pensado para casais que buscam reconectar e reacender a chama com naturalidade e respeito.",
    price_display: null,
    price_cents: null,
    tag: "Conexão",
    features: [
      "Práticas para dois",
      "Receitas e rituais compartilhados",
      "Foco em intimidade e bem-estar",
    ],
    pdf_url: "/EBook%20para%20casais.pdf",
    payment_link: null,
    stripe_price_id: null,
    is_bundle: false,
    sort_order: 1,
  },
  {
    id: "acao-rapida-resultados-7-dias",
    name: "Ação Rápida — Resultados em 7 Dias",
    slug: "acao-rapida-7-dias",
    description: "O protocolo para quem não quer esperar: mudanças práticas e visíveis em uma semana.",
    price_display: null,
    price_cents: null,
    tag: "Resultados",
    features: [
      "Protocolo de 7 dias",
      "Passo a passo diário",
      "Foco em energia e disposição",
    ],
    pdf_url: "/EBook%20A%C3%A7%C3%A3o%20rapida.pdf",
    payment_link: null,
    stripe_price_id: null,
    is_bundle: false,
    sort_order: 2,
  },
  {
    id: "guia-estamina-energia",
    name: "Estamina & Energia: O Guia Definitivo",
    slug: "guia-estamina-energia",
    description: "Tudo sobre resistência, vigor e recuperação. Para quem exige mais do corpo no dia a dia.",
    price_display: null,
    price_cents: null,
    tag: "Vigor",
    features: [
      "Receitas para estamina",
      "Ritual de recuperação",
      "Hábitos que sustentam a energia",
    ],
    pdf_url: "/EBook%20Guia%20de%20estamina.pdf",
    payment_link: null,
    stripe_price_id: null,
    is_bundle: false,
    sort_order: 3,
  },
];
