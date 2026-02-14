"use client";

import { useState } from "react";
import Link from "next/link";
import { 
  Zap, 
  CheckCircle2, 
  ShieldCheck, 
  ArrowRight, 
  ArrowLeft,
  Lock,
  Mail,
  User,
  Target,
  FileText,
  Activity,
  ShieldAlert,
  ShoppingBag,
  Info
} from "lucide-react";
import { Button } from "@/components/ui/button";

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
    "Energia & disposição",
    "Libido & conexão",
    "Equilíbrio íntimo",
    "Bem-estar hormonal",
    "Hábitos e rotina",
  ];

  const tiposConteudo = [
    { id: "guias", label: "Guias e artigos" },
    { id: "receitas", label: "Receitas seguras" },
    { id: "exercicios", label: "Exercícios naturais" },
    { id: "loja", label: "Novidades da loja" },
  ];

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.nome.trim()) newErrors.nome = "Nome é obrigatório.";
    if (!formData.email.trim()) {
      newErrors.email = "E-mail é obrigatório.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "E-mail inválido.";
    }
    if (!formData.consentimento) {
      newErrors.consentimento = "Você deve aceitar os termos para continuar.";
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
      setApiError("Erro de conexão. Tente novamente.");
    } finally {
      setLoading(false);
    }
  };

  const handleCheckboxChange = (id: string) => {
    setFormData(prev => ({
      ...prev,
      preferencias: prev.preferencias.includes(id)
        ? prev.preferencias.filter(p => p !== id)
        : [...prev.preferencias, id]
    }));
  };

  if (submitted) {
    return (
      <div className="flex min-h-screen flex-col bg-[#050f05] text-white font-sans">
        <nav className="sticky top-0 z-50 w-full bg-[#050f05]/80 backdrop-blur-md border-b border-white/5">
          <div className="container mx-auto flex h-20 items-center justify-between px-6">
            <Link href="/" className="text-2xl font-black tracking-tighter flex items-center gap-2">
              <Zap className="fill-[#22c55e] text-[#22c55e] h-6 w-6" />
              AFRO POTENTE
            </Link>
          </div>
        </nav>

        <main className="flex-1 flex flex-col items-center justify-center p-6 text-center">
          <div className="p-6 bg-[#22c55e]/10 rounded-3xl text-[#22c55e] mb-8">
            <CheckCircle2 className="h-12 w-12" />
          </div>
          <h1 className="text-4xl lg:text-6xl font-black mb-6 uppercase tracking-tighter">
            Cadastro <span className="text-[#22c55e]">recebido</span>
          </h1>
          <p className="text-xl text-white/40 max-w-lg mx-auto mb-12 font-medium leading-relaxed">
            Perfeito. Em breve você receberá um e-mail de boas-vindas. Fique de olho na caixa de entrada.
          </p>
          <Button asChild size="lg" className="bg-[#22c55e] hover:bg-[#1ea34d] text-[#050f05] font-black h-16 px-12 rounded-2xl text-lg transition-all hover:scale-105">
            <Link href="/guia-de-bem-estar">Voltar ao Guia</Link>
          </Button>
        </main>

        <footer className="py-12 border-t border-white/5 text-center">
          <p className="text-[10px] text-white/20 font-bold uppercase tracking-[0.2em]">© 2026 Afro Potente</p>
        </footer>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen flex-col bg-[#050f05] text-white font-sans">
      <nav className="sticky top-0 z-50 w-full bg-[#050f05]/80 backdrop-blur-md border-b border-white/5">
        <div className="container mx-auto flex h-20 items-center justify-between px-6">
          <Link href="/" className="text-2xl font-black tracking-tighter flex items-center gap-2">
            <Zap className="fill-[#22c55e] text-[#22c55e] h-6 w-6" />
            AFRO POTENTE
          </Link>
        </div>
      </nav>

      <main className="flex-1 container mx-auto px-6 py-12 lg:py-20">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16 text-center lg:text-left">
            <h1 className="text-4xl lg:text-6xl font-black mb-6 uppercase tracking-tighter">
              Fale com a <span className="text-[#22c55e]">Afro Potente</span>
            </h1>
            <p className="text-xl text-white/40 max-w-2xl font-medium leading-relaxed">
              Receba conteúdos educativos e novidades — com respeito, privacidade e responsabilidade.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Form Column */}
            <div className="lg:col-span-7 bg-[#0a1a0a] border border-white/5 p-8 lg:p-12 rounded-[2.5rem]">
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Nome */}
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-[#22c55e] flex items-center gap-2">
                    <User className="h-3 w-3" /> Nome
                  </label>
                  <input
                    type="text"
                    value={formData.nome}
                    onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                    className={`w-full bg-white/5 border ${errors.nome ? 'border-red-500/50' : 'border-white/10'} rounded-xl py-4 px-6 focus:outline-none focus:border-[#22c55e]/50 transition-colors`}
                    placeholder="Seu nome"
                  />
                  {errors.nome && <p className="text-red-400 text-xs font-bold">{errors.nome}</p>}
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-[#22c55e] flex items-center gap-2">
                    <Mail className="h-3 w-3" /> E-mail
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className={`w-full bg-white/5 border ${errors.email ? 'border-red-500/50' : 'border-white/10'} rounded-xl py-4 px-6 focus:outline-none focus:border-[#22c55e]/50 transition-colors`}
                    placeholder="seu@email.com"
                  />
                  {errors.email && <p className="text-red-400 text-xs font-bold">{errors.email}</p>}
                </div>

                {/* Objetivo */}
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-[#22c55e] flex items-center gap-2">
                    <Target className="h-3 w-3" /> Qual seu principal objetivo? (Opcional)
                  </label>
                  <select
                    value={formData.objetivo}
                    onChange={(e) => setFormData({ ...formData, objetivo: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded-xl py-4 px-6 focus:outline-none focus:border-[#22c55e]/50 transition-colors appearance-none cursor-pointer"
                  >
                    <option value="" disabled className="bg-[#050f05]">Selecione um objetivo</option>
                    {objetivos.map((obj) => (
                      <option key={obj} value={obj} className="bg-[#050f05]">{obj}</option>
                    ))}
                  </select>
                </div>

                {/* Preferências */}
                <div className="space-y-4">
                  <label className="text-xs font-black uppercase tracking-widest text-[#22c55e] flex items-center gap-2">
                    <FileText className="h-3 w-3" /> O que você quer receber?
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {tiposConteudo.map((tipo) => (
                      <label key={tipo.id} className="flex items-center gap-3 p-4 bg-white/5 border border-white/10 rounded-xl cursor-pointer hover:bg-white/10 transition-colors">
                        <input
                          type="checkbox"
                          checked={formData.preferencias.includes(tipo.id)}
                          onChange={() => handleCheckboxChange(tipo.id)}
                          className="w-4 h-4 rounded border-white/20 bg-transparent text-[#22c55e] focus:ring-[#22c55e]"
                        />
                        <span className="text-sm font-bold text-white/60">{tipo.label}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Consentimento */}
                <div className="space-y-2">
                  <label className="flex items-start gap-3 cursor-pointer group">
                    <input
                      type="checkbox"
                      checked={formData.consentimento}
                      onChange={(e) => setFormData({ ...formData, consentimento: e.target.checked })}
                      className="mt-1 w-4 h-4 rounded border-white/20 bg-transparent text-[#22c55e] focus:ring-[#22c55e]"
                    />
                    <span className="text-xs font-medium text-white/40 leading-relaxed group-hover:text-white/60 transition-colors">
                      Aceito receber e-mails da Afro Potente (conteúdo educativo e novidades). Posso cancelar a qualquer momento.
                    </span>
                  </label>
                  {errors.consentimento && <p className="text-red-400 text-xs font-bold">{errors.consentimento}</p>}
                </div>

                {apiError && (
                  <p className="text-red-400 text-sm font-bold">{apiError}</p>
                )}
                <Button type="submit" size="lg" disabled={loading} className="w-full bg-[#22c55e] hover:bg-[#1ea34d] text-[#050f05] font-black h-16 rounded-2xl text-lg transition-all hover:scale-[1.02]">
                  {loading ? "Enviando..." : "Quero Receber Conteúdos"}
                </Button>

                <div className="pt-6 border-t border-white/5 space-y-4">
                  <p className="text-[10px] text-white/20 font-bold uppercase tracking-widest leading-relaxed">
                    Não coletamos informações sensíveis. Conteúdo educativo. Não substitui orientação profissional.
                  </p>
                  <Link href="/privacidade" className="text-[10px] text-[#22c55e] font-black uppercase tracking-widest hover:underline flex items-center gap-2">
                    <Info className="h-3 w-3" /> Leia nossa Política de Privacidade
                  </Link>
                </div>
              </form>
            </div>

            {/* Trust Column */}
            <div className="lg:col-span-5 space-y-8">
              <div className="bg-[#081508] border border-white/5 p-10 rounded-[2.5rem]">
                <div className="flex items-center gap-4 mb-8">
                  <div className="p-3 bg-[#22c55e]/10 rounded-xl text-[#22c55e]">
                    <ShieldCheck className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-black uppercase tracking-widest text-[#22c55e]">Privacidade em primeiro lugar</h3>
                </div>
                <ul className="space-y-6">
                  {[
                    { text: "Discrição e respeito", icon: <Lock className="h-5 w-5 text-[#22c55e]" /> },
                    { text: "Sem spam", icon: <Mail className="h-5 w-5 text-[#22c55e]" /> },
                    { text: "Você controla sua inscrição", icon: <CheckCircle2 className="h-5 w-5 text-[#22c55e]" /> },
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-4 text-white/60 font-bold uppercase tracking-widest text-xs">
                      {item.icon}
                      {item.text}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-[#0a1a0a] border border-white/5 p-10 rounded-[2.5rem]">
                <h3 className="text-sm font-black uppercase tracking-[0.2em] mb-8 text-white/40">Links Rápidos</h3>
                <div className="grid grid-cols-1 gap-4">
                  {[
                    { label: "Guia de Bem-estar", href: "/guia-de-bem-estar", icon: <FileText className="h-4 w-4" /> },
                    { label: "Exercícios Naturais", href: "/exercicios", icon: <Activity className="h-4 w-4" /> },
                    { label: "Segurança", href: "/seguranca", icon: <ShieldAlert className="h-4 w-4" /> },
                    { label: "Loja Afro Potente", href: "/produtos", icon: <ShoppingBag className="h-4 w-4" /> },
                  ].map((link) => (
                    <Link key={link.href} href={link.href} className="flex items-center justify-between p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-all border border-white/5 group">
                      <div className="flex items-center gap-4">
                        <div className="text-[#22c55e]">{link.icon}</div>
                        <span className="text-xs font-black uppercase tracking-widest">{link.label}</span>
                      </div>
                      <ArrowRight className="h-4 w-4 text-white/20 group-hover:text-[#22c55e] group-hover:translate-x-1 transition-all" />
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="py-12 border-t border-white/5 text-center">
        <p className="text-[10px] text-white/20 font-bold uppercase tracking-[0.2em]">© 2026 Afro Potente</p>
      </footer>
    </div>
  );
}
