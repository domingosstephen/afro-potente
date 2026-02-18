"use client";

import { useState } from "react";
import Link from "next/link";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/motion/Reveal";
import { StaggerChildren, StaggerItem } from "@/components/motion/StaggerChildren";

export default function ContatoPage() {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    objetivo: "",
    preferencias: [] as string[],
    consentimento: false,
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [apiError, setApiError] = useState<string | null>(null);

  const objetivos = [
    "Energia & disposicao",
    "Libido & conexao",
    "Equilibrio intimo",
    "Bem-estar hormonal",
    "Habitos e rotina",
  ];

  const tiposConteudo = [
    { id: "guias", label: "Guias e artigos" },
    { id: "receitas", label: "Receitas naturais" },
    { id: "exercicios", label: "Exercicios naturais" },
    { id: "loja", label: "Novidades da loja" },
  ];

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.nome.trim()) newErrors.nome = "Nome e obrigatorio.";
    if (!formData.email.trim()) {
      newErrors.email = "E-mail e obrigatorio.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "E-mail invalido.";
    }
    if (!formData.consentimento) {
      newErrors.consentimento = "Voce deve aceitar os termos para continuar.";
    }
    return newErrors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setApiError(null);
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setLoading(true);
    try {
      const res = await fetch("/api/contato", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nome: formData.nome.trim(),
          email: formData.email.trim(),
          objetivo: formData.objetivo || undefined,
          preferencias: formData.preferencias,
          consentimento: true,
        }),
      });
      const data = await res.json();
      if (!res.ok) {
        setApiError(data.error ?? "Erro ao enviar. Tente novamente.");
        return;
      }
      setSubmitted(true);
    } catch {
      setApiError("Erro de conexao. Tente novamente.");
    } finally {
      setLoading(false);
    }
  };

  const handleCheckboxChange = (id: string) => {
    setFormData((prev) => ({
      ...prev,
      preferencias: prev.preferencias.includes(id)
        ? prev.preferencias.filter((p) => p !== id)
        : [...prev.preferencias, id],
    }));
  };

  if (submitted) {
    return (
      <div className="flex min-h-screen flex-col bg-[#F5EDE0] font-sans">
        <Navbar />
        <main className="flex-1 flex flex-col items-center justify-center p-6 text-center pt-28">
          <Reveal direction="up" delay={0.1}>
            <div className="p-5 bg-[#B94A2F]/10 rounded-2xl text-[#B94A2F] mb-6 inline-block">
              <CheckCircle2 className="h-10 w-10" />
            </div>
          </Reveal>
          <Reveal direction="up" delay={0.2}>
            <h1 className="font-serif text-[#2B1A0E] mb-4">Cadastro recebido!</h1>
          </Reveal>
          <Reveal direction="up" delay={0.3}>
            <p className="text-lg text-[#2B1A0E]/55 max-w-md mx-auto mb-8 leading-relaxed">
              Em breve voce recebera um e-mail de boas-vindas. Fique de olho na
              caixa de entrada.
            </p>
          </Reveal>
          <Reveal direction="up" delay={0.4}>
            <Button asChild size="lg">
              <Link href="/produtos">Ver Protocolos</Link>
            </Button>
          </Reveal>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="flex min-h-screen flex-col bg-[#F5EDE0] font-sans">
      <Navbar />

      <main className="flex-1 pt-20">
        <div className="container mx-auto px-4 md:px-6 py-12 md:py-20">
          <div className="max-w-5xl mx-auto">
            <Reveal direction="up" className="mb-12 text-center lg:text-left">
              <p className="text-[#B94A2F] text-sm font-semibold tracking-wide uppercase mb-4">
                Contato
              </p>
              <h1 className="font-serif text-[#2B1A0E] mb-4">
                Fale com a Afro Potente
              </h1>
              <p className="text-lg text-[#2B1A0E]/55 max-w-2xl leading-relaxed">
                Receba conteudos educativos e novidades — com respeito,
                privacidade e responsabilidade.
              </p>
            </Reveal>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
              {/* Form Column */}
              <Reveal
                direction="up"
                delay={0.1}
                className="lg:col-span-7"
              >
                <div className="bg-[#FAF7F2] border border-[#2B1A0E]/10 p-6 md:p-10 rounded-xl">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-[#2B1A0E]">
                        Nome
                      </label>
                      <input
                        type="text"
                        value={formData.nome}
                        onChange={(e) =>
                          setFormData({ ...formData, nome: e.target.value })
                        }
                        className={`w-full bg-[#FFFDF9] border ${
                          errors.nome
                            ? "border-red-500/50"
                            : "border-[#2B1A0E]/20"
                        } rounded-lg py-3 px-4 text-[#2B1A0E] placeholder:text-[#2B1A0E]/40 focus:outline-none focus:border-[#B94A2F] focus:ring-[0_0_0_3px_rgba(185,74,47,0.15)] transition-colors text-base`}
                        placeholder="Seu nome"
                      />
                      {errors.nome && (
                        <p className="text-red-600 text-xs">{errors.nome}</p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-[#2B1A0E]">
                        E-mail
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className={`w-full bg-[#FFFDF9] border ${
                          errors.email
                            ? "border-red-500/50"
                            : "border-[#2B1A0E]/20"
                        } rounded-lg py-3 px-4 text-[#2B1A0E] placeholder:text-[#2B1A0E]/40 focus:outline-none focus:border-[#B94A2F] transition-colors text-base`}
                        placeholder="seu@email.com"
                      />
                      {errors.email && (
                        <p className="text-red-600 text-xs">{errors.email}</p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-[#2B1A0E]">
                        Qual seu principal objetivo? (Opcional)
                      </label>
                      <select
                        value={formData.objetivo}
                        onChange={(e) =>
                          setFormData({ ...formData, objetivo: e.target.value })
                        }
                        className="w-full bg-[#FFFDF9] border border-[#2B1A0E]/20 rounded-lg py-3 px-4 text-[#2B1A0E] focus:outline-none focus:border-[#B94A2F] transition-colors appearance-none cursor-pointer text-base"
                      >
                        <option value="" disabled>
                          Selecione um objetivo
                        </option>
                        {objetivos.map((obj) => (
                          <option key={obj} value={obj}>
                            {obj}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="space-y-3">
                      <label className="text-sm font-semibold text-[#2B1A0E]">
                        O que voce quer receber?
                      </label>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {tiposConteudo.map((tipo) => (
                          <label
                            key={tipo.id}
                            className="flex items-center gap-3 p-3 bg-[#FFFDF9] border border-[#2B1A0E]/10 rounded-lg cursor-pointer hover:bg-[#F5EDE0] transition-colors"
                          >
                            <input
                              type="checkbox"
                              checked={formData.preferencias.includes(tipo.id)}
                              onChange={() => handleCheckboxChange(tipo.id)}
                              className="w-4 h-4 rounded border-[#2B1A0E]/30 text-[#B94A2F] focus:ring-[#B94A2F]"
                            />
                            <span className="text-sm text-[#2B1A0E]/70">
                              {tipo.label}
                            </span>
                          </label>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="flex items-start gap-3 cursor-pointer group">
                        <input
                          type="checkbox"
                          checked={formData.consentimento}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              consentimento: e.target.checked,
                            })
                          }
                          className="mt-1 w-4 h-4 rounded border-[#2B1A0E]/30 text-[#B94A2F] focus:ring-[#B94A2F]"
                        />
                        <span className="text-xs text-[#2B1A0E]/50 leading-relaxed group-hover:text-[#2B1A0E]/70 transition-colors">
                          Aceito receber e-mails da Afro Potente (conteudo
                          educativo e novidades). Posso cancelar a qualquer
                          momento.
                        </span>
                      </label>
                      {errors.consentimento && (
                        <p className="text-red-600 text-xs">
                          {errors.consentimento}
                        </p>
                      )}
                    </div>

                    {apiError && (
                      <p className="text-red-600 text-sm">{apiError}</p>
                    )}

                    <Button
                      type="submit"
                      size="lg"
                      disabled={loading}
                      className="w-full"
                    >
                      {loading ? "Enviando..." : "Quero Receber Conteudos"}
                    </Button>

                    <div className="pt-4 border-t border-[#2B1A0E]/10">
                      <p className="text-xs text-[#2B1A0E]/40 leading-relaxed">
                        Nao coletamos informacoes sensiveis. Conteudo educativo.
                        Nao substitui orientacao profissional.
                      </p>
                      <Link
                        href="/privacidade"
                        className="text-xs text-[#B94A2F] font-semibold hover:underline mt-2 inline-block"
                      >
                        Leia nossa Politica de Privacidade
                      </Link>
                    </div>
                  </form>
                </div>
              </Reveal>

              {/* Trust Column */}
              <div className="lg:col-span-5 space-y-6">
                <Reveal direction="right" delay={0.2}>
                  <div className="bg-[#FAF7F2] border border-[#2B1A0E]/10 p-6 md:p-8 rounded-xl">
                    <h3 className="font-serif text-lg text-[#2B1A0E] mb-6">
                      Privacidade em primeiro lugar
                    </h3>
                    <ul className="space-y-4">
                      {[
                        "Discricao e respeito",
                        "Sem spam",
                        "Voce controla sua inscricao",
                      ].map((item, i) => (
                        <li
                          key={i}
                          className="flex items-center gap-3 text-sm text-[#2B1A0E]/70"
                        >
                          <CheckCircle2 className="h-4 w-4 text-[#B94A2F] shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>

                <Reveal direction="right" delay={0.3}>
                  <div className="bg-[#FAF7F2] border border-[#2B1A0E]/10 p-6 md:p-8 rounded-xl">
                    <h3 className="font-serif text-lg text-[#2B1A0E] mb-6">
                      Links Rapidos
                    </h3>
                    <div className="space-y-3">
                      {[
                        {
                          label: "Guia de Bem-estar",
                          href: "/guia-de-bem-estar",
                        },
                        {
                          label: "Exercicios Naturais",
                          href: "/exercicios",
                        },
                        { label: "Seguranca", href: "/seguranca" },
                        { label: "Loja Afro Potente", href: "/produtos" },
                      ].map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className="flex items-center justify-between p-3 bg-[#FFFDF9] rounded-lg hover:bg-[#F5EDE0] transition-colors border border-[#2B1A0E]/5 group"
                        >
                          <span className="text-sm font-semibold text-[#2B1A0E]">
                            {item.label}
                          </span>
                          <ArrowRight className="h-4 w-4 text-[#2B1A0E]/30 group-hover:text-[#B94A2F] group-hover:translate-x-1 transition-all" />
                        </Link>
                      ))}
                    </div>
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
