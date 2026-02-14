import { Resend } from "resend";

const resend = process.env.RESEND_API_KEY
  ? new Resend(process.env.RESEND_API_KEY)
  : null;

const FROM_EMAIL = process.env.RESEND_FROM_EMAIL ?? "noreply@example.com";

export async function sendOrderConfirmation({
  to,
  customerName,
  productName,
  pdfUrl,
}: {
  to: string;
  customerName?: string | null;
  productName: string;
  pdfUrl: string | null;
}) {
  if (!resend) {
    console.warn("Resend not configured (RESEND_API_KEY missing). Skipping order email.");
    return { ok: false as const, error: "Resend not configured" };
  }

  const name = customerName?.trim() || "Cliente";
  const html = `
    <div style="font-family: sans-serif; max-width: 560px; margin: 0 auto;">
      <h2 style="color: #050f05;">Obrigado pela sua compra</h2>
      <p>Olá, ${name}!</p>
      <p>Seu pedido do guia <strong>${productName}</strong> foi confirmado.</p>
      ${
        pdfUrl
          ? `
        <p style="margin: 24px 0;">
          <a href="${pdfUrl}" style="display: inline-block; background: #22c55e; color: #050f05; padding: 14px 28px; text-decoration: none; font-weight: bold; border-radius: 8px;">
            Acesse seu guia
          </a>
        </p>
        <p style="color: #666; font-size: 14px;">Se o botão não funcionar, copie e cole este link no navegador:</p>
        <p style="word-break: break-all; font-size: 14px;"><a href="${pdfUrl}">${pdfUrl}</a></p>
      `
          : "<p>Em breve você receberá o acesso ao conteúdo.</p>"
      }
      <p style="margin-top: 32px; color: #666; font-size: 14px;">Afro Potente – Sabedoria Ancestral Africana</p>
    </div>
  `;

  const { data, error } = await resend.emails.send({
    from: FROM_EMAIL,
    to: [to],
    subject: `Sua compra: ${productName}`,
    html,
  });

  if (error) return { ok: false as const, error };
  return { ok: true as const, data };
}

export async function sendContactNotification({
  nome,
  email,
  objetivo,
  preferencias,
  toAdmin,
}: {
  nome: string;
  email: string;
  objetivo?: string | null;
  preferencias?: string[];
  toAdmin: string;
}) {
  if (!resend) {
    console.warn("Resend not configured. Skipping contact notification.");
    return { ok: false as const, error: "Resend not configured" };
  }

  const prefs = Array.isArray(preferencias) ? preferencias.join(", ") : "";
  const html = `
    <div style="font-family: sans-serif; max-width: 560px;">
      <h2 style="color: #050f05;">Novo contato – Afro Potente</h2>
      <p><strong>Nome:</strong> ${nome}</p>
      <p><strong>E-mail:</strong> ${email}</p>
      ${objetivo ? `<p><strong>Objetivo:</strong> ${objetivo}</p>` : ""}
      ${prefs ? `<p><strong>Preferências:</strong> ${prefs}</p>` : ""}
    </div>
  `;

  const { data, error } = await resend.emails.send({
    from: FROM_EMAIL,
    to: [toAdmin],
    subject: `Contato: ${nome}`,
    html,
  });

  if (error) return { ok: false as const, error };
  return { ok: true as const, data };
}
