import { NextResponse } from "next/server";
import { z } from "zod";
import { createServerSupabase } from "@/lib/supabase-server";
import { sendContactNotification } from "@/lib/resend";

const bodySchema = z.object({
  nome: z.string().min(1, "Nome é obrigatório.").max(200),
  email: z.string().email("E-mail inválido."),
  objetivo: z.string().max(500).optional(),
  preferencias: z.array(z.string()).optional(),
  consentimento: z.literal(true, { errorMap: () => ({ message: "Você deve aceitar os termos para continuar." }) }),
});

export async function POST(req: Request) {
  try {
    const raw = await req.json();
    const parsed = bodySchema.safeParse(raw);
    if (!parsed.success) {
      const first = parsed.error.issues[0];
      return NextResponse.json(
        { error: first?.message ?? "Dados inválidos" },
        { status: 400 }
      );
    }
    const { nome, email, objetivo, preferencias } = parsed.data;

    const supabase = createServerSupabase();
    if (!supabase) {
      return NextResponse.json(
        { error: "Formulário não configurado. Falta configuração Supabase." },
        { status: 503 }
      );
    }
    const { error: insertError } = await supabase.from("leads").insert({
      nome: nome.trim(),
      email: email.trim().toLowerCase(),
      objetivo: objetivo?.trim() || null,
      preferencias: preferencias ?? [],
    });

    if (insertError) {
      console.error("Contato Supabase insert error:", insertError);
      return NextResponse.json(
        { error: "Não foi possível enviar. Tente novamente." },
        { status: 500 }
      );
    }

    const adminEmail = process.env.RESEND_ADMIN_EMAIL;
    if (adminEmail) {
      await sendContactNotification({
        nome: nome.trim(),
        email: email.trim(),
        objetivo: objetivo?.trim() || null,
        preferencias: preferencias ?? [],
        toAdmin: adminEmail,
      });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contato API error:", err);
    return NextResponse.json(
      { error: "Erro ao processar. Tente novamente." },
      { status: 500 }
    );
  }
}
