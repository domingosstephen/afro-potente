"use client";

import { useState, useEffect, useCallback } from "react";

// ─── Types ────────────────────────────────────────────────────────────────────

type Product = {
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
  payment_link_kiwify: string | null;
  payment_link_mercadopago: string | null;
  kiwify_product_id: string | null;
  is_bundle: boolean;
  sort_order: number;
};

type SyncProductResult = {
  kiwify_id: string;
  name: string;
  checkout_url: string | null;
  action: "updated" | "created" | "skipped" | "error";
};

type SyncResult = {
  success: boolean;
  updated: number;
  created: number;
  skipped: number;
  errors: string[];
  products: SyncProductResult[];
};

const EMPTY_FORM: Omit<Product, "id"> = {
  name: "",
  slug: "",
  description: "",
  price_display: "",
  price_cents: null,
  tag: "",
  features: [],
  pdf_url: "",
  payment_link: "",
  payment_link_kiwify: "",
  payment_link_mercadopago: "",
  kiwify_product_id: "",
  is_bundle: false,
  sort_order: 99,
};

// ─── Helpers ──────────────────────────────────────────────────────────────────

function slugify(name: string): string {
  return name
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function authHeader(secret: string) {
  return { Authorization: `Bearer ${secret}` };
}

// ─── Sub-components ───────────────────────────────────────────────────────────

function Badge({
  children,
  color,
}: {
  children: React.ReactNode;
  color: "green" | "red" | "yellow" | "gray" | "blue";
}) {
  const colors: Record<typeof color, string> = {
    green: "bg-green-100 text-green-800",
    red: "bg-red-100 text-red-800",
    yellow: "bg-yellow-100 text-yellow-800",
    gray: "bg-gray-100 text-gray-600",
    blue: "bg-blue-100 text-blue-800",
  };
  return (
    <span
      className={`inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium ${colors[color]}`}
    >
      {children}
    </span>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────

export default function AdminPage() {
  const [secret, setSecret] = useState("");
  const [secretInput, setSecretInput] = useState("");
  const [authed, setAuthed] = useState(false);

  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Sync state
  const [syncing, setSyncing] = useState(false);
  const [syncResult, setSyncResult] = useState<SyncResult | null>(null);
  const [showSyncDetails, setShowSyncDetails] = useState(false);

  // Modal state
  const [modalOpen, setModalOpen] = useState(false);
  const [editing, setEditing] = useState<Product | null>(null);
  const [form, setForm] = useState<Omit<Product, "id">>(EMPTY_FORM);
  const [saving, setSaving] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);

  // Delete state
  const [deletingId, setDeletingId] = useState<string | null>(null);

  // ── Auth ──────────────────────────────────────────────────────────────────

  useEffect(() => {
    const saved = localStorage.getItem("afro_admin_secret");
    if (saved) {
      setSecret(saved);
      setAuthed(true);
    }
  }, []);

  function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    if (!secretInput.trim()) return;
    localStorage.setItem("afro_admin_secret", secretInput.trim());
    setSecret(secretInput.trim());
    setAuthed(true);
  }

  function handleLogout() {
    localStorage.removeItem("afro_admin_secret");
    setSecret("");
    setAuthed(false);
    setProducts([]);
    setSyncResult(null);
  }

  // ── Data loading ──────────────────────────────────────────────────────────

  const loadProducts = useCallback(async () => {
    if (!secret) return;
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/admin/products", {
        headers: authHeader(secret),
      });
      if (res.status === 401) {
        setError("Chave inválida. Faça logout e tente novamente.");
        return;
      }
      const data = await res.json();
      if (!res.ok) throw new Error(data.error ?? "Erro ao carregar produtos.");
      setProducts(data.products ?? []);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Erro desconhecido.");
    } finally {
      setLoading(false);
    }
  }, [secret]);

  useEffect(() => {
    if (authed && secret) loadProducts();
  }, [authed, secret, loadProducts]);

  // ── Kiwify Sync ───────────────────────────────────────────────────────────

  async function handleSync() {
    setSyncing(true);
    setSyncResult(null);
    setError(null);
    try {
      const res = await fetch("/api/admin/sync-kiwify", {
        method: "POST",
        headers: authHeader(secret),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error ?? "Erro ao sincronizar.");
      setSyncResult(data as SyncResult);
      await loadProducts();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Erro na sincronização.");
    } finally {
      setSyncing(false);
    }
  }

  // ── Modal / Form ──────────────────────────────────────────────────────────

  function openCreate() {
    setEditing(null);
    setForm(EMPTY_FORM);
    setFormError(null);
    setModalOpen(true);
  }

  function openEdit(p: Product) {
    setEditing(p);
    setForm({
      name: p.name,
      slug: p.slug,
      description: p.description ?? "",
      price_display: p.price_display ?? "",
      price_cents: p.price_cents,
      tag: p.tag ?? "",
      features: p.features ?? [],
      pdf_url: p.pdf_url ?? "",
      payment_link: p.payment_link ?? "",
      payment_link_kiwify: p.payment_link_kiwify ?? "",
      payment_link_mercadopago: p.payment_link_mercadopago ?? "",
      kiwify_product_id: p.kiwify_product_id ?? "",
      is_bundle: p.is_bundle,
      sort_order: p.sort_order,
    });
    setFormError(null);
    setModalOpen(true);
  }

  function handleNameChange(name: string) {
    setForm((f) => ({
      ...f,
      name,
      // Only auto-generate slug when creating a new product
      ...(editing ? {} : { slug: slugify(name) }),
    }));
  }

  async function handleSave(e: React.FormEvent) {
    e.preventDefault();
    if (!form.name.trim() || !form.slug.trim()) {
      setFormError("Nome e slug são obrigatórios.");
      return;
    }

    setSaving(true);
    setFormError(null);

    const payload = {
      ...form,
      features:
        typeof form.features === "string"
          ? (form.features as string)
              .split("\n")
              .map((s) => s.trim())
              .filter(Boolean)
          : form.features,
      description: form.description || null,
      price_display: form.price_display || null,
      tag: form.tag || null,
      pdf_url: form.pdf_url || null,
      payment_link: form.payment_link || null,
      payment_link_kiwify: form.payment_link_kiwify || null,
      payment_link_mercadopago: form.payment_link_mercadopago || null,
      kiwify_product_id: form.kiwify_product_id || null,
    };

    try {
      let res: Response;
      if (editing) {
        res = await fetch("/api/admin/products", {
          method: "PATCH",
          headers: { ...authHeader(secret), "Content-Type": "application/json" },
          body: JSON.stringify({ id: editing.id, ...payload }),
        });
      } else {
        res = await fetch("/api/admin/products", {
          method: "POST",
          headers: { ...authHeader(secret), "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });
      }

      const data = await res.json();
      if (!res.ok) throw new Error(data.error ?? "Erro ao salvar.");

      setModalOpen(false);
      await loadProducts();
    } catch (err) {
      setFormError(err instanceof Error ? err.message : "Erro ao salvar.");
    } finally {
      setSaving(false);
    }
  }

  // ── Delete ─────────────────────────────────────────────────────────────────

  async function handleDelete(id: string, name: string) {
    if (!window.confirm(`Deletar "${name}"? Esta ação não pode ser desfeita.`)) return;
    setDeletingId(id);
    try {
      const res = await fetch(`/api/admin/products?id=${id}`, {
        method: "DELETE",
        headers: authHeader(secret),
      });
      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error ?? "Erro ao deletar.");
      }
      await loadProducts();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Erro ao deletar.");
    } finally {
      setDeletingId(null);
    }
  }

  // ── Render: Login Screen ──────────────────────────────────────────────────

  if (!authed) {
    return (
      <div className="min-h-screen bg-zinc-950 flex items-center justify-center p-4">
        <div className="w-full max-w-sm">
          <div className="text-center mb-8">
            <h1 className="text-2xl font-bold text-white tracking-tight">
              Afro Potente
            </h1>
            <p className="text-zinc-400 mt-1 text-sm">Painel Administrativo</p>
          </div>
          <form
            onSubmit={handleLogin}
            className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 space-y-4"
          >
            <div>
              <label className="block text-sm font-medium text-zinc-300 mb-1.5">
                Chave de acesso
              </label>
              <input
                type="password"
                value={secretInput}
                onChange={(e) => setSecretInput(e.target.value)}
                placeholder="Digite a chave ADMIN_SECRET"
                className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-3 py-2 text-white placeholder-zinc-500 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                autoFocus
              />
            </div>
            <button
              type="submit"
              className="w-full bg-amber-500 hover:bg-amber-400 text-black font-semibold py-2 rounded-lg text-sm transition-colors"
            >
              Entrar
            </button>
          </form>
        </div>
      </div>
    );
  }

  // ── Render: Admin Panel ───────────────────────────────────────────────────

  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      {/* Header */}
      <header className="border-b border-zinc-800 bg-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <h1 className="font-bold text-white">Afro Potente</h1>
            <span className="text-zinc-500 text-sm">Admin</span>
          </div>
          <div className="flex items-center gap-3">
            <a
              href="/produtos"
              target="_blank"
              className="text-xs text-zinc-400 hover:text-white transition-colors"
            >
              Ver loja →
            </a>
            <button
              onClick={handleLogout}
              className="text-xs text-zinc-400 hover:text-red-400 transition-colors"
            >
              Sair
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
        {/* Kiwify Sync Banner */}
        <section className="bg-zinc-900 border border-zinc-800 rounded-xl p-5">
          <div className="flex flex-col sm:flex-row sm:items-center gap-4">
            <div className="flex-1">
              <h2 className="font-semibold text-white text-sm">
                Sincronizar com Kiwify
              </h2>
              <p className="text-zinc-400 text-xs mt-0.5">
                Busca todos os produtos ativos da sua conta Kiwify e atualiza
                automaticamente os links de checkout no banco de dados.
              </p>
            </div>
            <button
              onClick={handleSync}
              disabled={syncing}
              className="flex-shrink-0 flex items-center gap-2 bg-amber-500 hover:bg-amber-400 disabled:opacity-60 disabled:cursor-not-allowed text-black font-semibold px-4 py-2 rounded-lg text-sm transition-colors"
            >
              {syncing ? (
                <>
                  <svg className="animate-spin h-4 w-4" fill="none" viewBox="0 0 24 24">
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                    />
                  </svg>
                  Sincronizando…
                </>
              ) : (
                <>
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                  Sincronizar Kiwify
                </>
              )}
            </button>
          </div>

          {/* Sync result summary */}
          {syncResult && (
            <div className="mt-4 pt-4 border-t border-zinc-800">
              <div className="flex flex-wrap items-center gap-3">
                <Badge color={syncResult.success ? "green" : "red"}>
                  {syncResult.success ? "Sincronizado" : "Erro parcial"}
                </Badge>
                {syncResult.updated > 0 && (
                  <Badge color="blue">{syncResult.updated} atualizados</Badge>
                )}
                {syncResult.created > 0 && (
                  <Badge color="green">{syncResult.created} criados</Badge>
                )}
                {syncResult.skipped > 0 && (
                  <Badge color="gray">{syncResult.skipped} ignorados</Badge>
                )}
                {syncResult.errors.length > 0 && (
                  <Badge color="red">{syncResult.errors.length} erros</Badge>
                )}
                <button
                  onClick={() => setShowSyncDetails((v) => !v)}
                  className="text-xs text-zinc-400 hover:text-white ml-auto"
                >
                  {showSyncDetails ? "Ocultar detalhes" : "Ver detalhes"}
                </button>
              </div>

              {showSyncDetails && (
                <div className="mt-3 space-y-1 max-h-48 overflow-y-auto">
                  {syncResult.products.map((p) => (
                    <div key={p.kiwify_id} className="flex items-center gap-2 text-xs">
                      <Badge
                        color={
                          p.action === "updated"
                            ? "blue"
                            : p.action === "created"
                              ? "green"
                              : p.action === "error"
                                ? "red"
                                : "gray"
                        }
                      >
                        {p.action === "updated"
                          ? "atualizado"
                          : p.action === "created"
                            ? "criado"
                            : p.action === "error"
                              ? "erro"
                              : "ignorado"}
                      </Badge>
                      <span className="text-zinc-300">{p.name}</span>
                      {p.checkout_url && (
                        <a
                          href={p.checkout_url}
                          target="_blank"
                          className="text-zinc-500 hover:text-amber-400 truncate max-w-xs"
                        >
                          {p.checkout_url}
                        </a>
                      )}
                    </div>
                  ))}
                  {syncResult.errors.map((e, i) => (
                    <p key={i} className="text-red-400 text-xs">
                      {e}
                    </p>
                  ))}
                </div>
              )}
            </div>
          )}
        </section>

        {/* Global error */}
        {error && (
          <div className="bg-red-950 border border-red-800 text-red-300 rounded-xl px-4 py-3 text-sm flex items-start gap-2">
            <span>⚠</span>
            <span>{error}</span>
            <button
              onClick={() => setError(null)}
              className="ml-auto text-red-400 hover:text-red-200"
            >
              ✕
            </button>
          </div>
        )}

        {/* Products table */}
        <section>
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-semibold text-white">
              Produtos{" "}
              <span className="text-zinc-500 font-normal text-sm">
                ({products.length})
              </span>
            </h2>
            <div className="flex gap-2">
              <button
                onClick={loadProducts}
                disabled={loading}
                className="text-sm text-zinc-400 hover:text-white border border-zinc-700 rounded-lg px-3 py-1.5 transition-colors disabled:opacity-50"
              >
                {loading ? "…" : "↻ Atualizar"}
              </button>
              <button
                onClick={openCreate}
                className="text-sm bg-white hover:bg-zinc-100 text-black font-semibold px-3 py-1.5 rounded-lg transition-colors"
              >
                + Novo produto
              </button>
            </div>
          </div>

          {loading && products.length === 0 ? (
            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-8 text-center text-zinc-500 text-sm">
              Carregando produtos…
            </div>
          ) : products.length === 0 ? (
            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-8 text-center text-zinc-500 text-sm">
              Nenhum produto encontrado. Clique em &quot;Sincronizar Kiwify&quot; ou
              adicione um produto manualmente.
            </div>
          ) : (
            <div className="bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-zinc-800 text-left">
                      <th className="px-4 py-3 text-xs font-medium text-zinc-400 uppercase tracking-wide">
                        Produto
                      </th>
                      <th className="px-4 py-3 text-xs font-medium text-zinc-400 uppercase tracking-wide">
                        Preço
                      </th>
                      <th className="px-4 py-3 text-xs font-medium text-zinc-400 uppercase tracking-wide">
                        Kiwify
                      </th>
                      <th className="px-4 py-3 text-xs font-medium text-zinc-400 uppercase tracking-wide">
                        Mercado Pago
                      </th>
                      <th className="px-4 py-3 text-xs font-medium text-zinc-400 uppercase tracking-wide">
                        PDF
                      </th>
                      <th className="px-4 py-3 text-xs font-medium text-zinc-400 uppercase tracking-wide sr-only">
                        Ações
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-zinc-800">
                    {products.map((p) => (
                      <tr key={p.id} className="hover:bg-zinc-800/50 transition-colors">
                        <td className="px-4 py-3">
                          <div className="flex items-start gap-2">
                            <div>
                              <div className="font-medium text-white flex items-center gap-1.5">
                                {p.name}
                                {p.is_bundle && (
                                  <Badge color="yellow">Bundle</Badge>
                                )}
                                {p.tag && (
                                  <Badge color="gray">{p.tag}</Badge>
                                )}
                              </div>
                              <div className="text-zinc-500 text-xs mt-0.5">
                                /{p.slug}
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="px-4 py-3 text-zinc-300">
                          {p.price_display ?? (
                            <span className="text-zinc-600 italic">—</span>
                          )}
                        </td>
                        <td className="px-4 py-3">
                          {p.payment_link_kiwify ? (
                            <a
                              href={p.payment_link_kiwify}
                              target="_blank"
                              className="text-amber-400 hover:text-amber-300 text-xs truncate max-w-[140px] block"
                            >
                              ✓ Link ativo
                            </a>
                          ) : (
                            <span className="text-zinc-600 text-xs">Sem link</span>
                          )}
                        </td>
                        <td className="px-4 py-3">
                          {p.payment_link_mercadopago ? (
                            <a
                              href={p.payment_link_mercadopago}
                              target="_blank"
                              className="text-blue-400 hover:text-blue-300 text-xs"
                            >
                              ✓ Link ativo
                            </a>
                          ) : (
                            <span className="text-zinc-600 text-xs">Sem link</span>
                          )}
                        </td>
                        <td className="px-4 py-3">
                          {p.pdf_url ? (
                            <a
                              href={p.pdf_url}
                              target="_blank"
                              className="text-green-400 hover:text-green-300 text-xs"
                            >
                              ✓ PDF
                            </a>
                          ) : (
                            <span className="text-zinc-600 text-xs">Sem PDF</span>
                          )}
                        </td>
                        <td className="px-4 py-3">
                          <div className="flex items-center gap-2 justify-end">
                            <button
                              onClick={() => openEdit(p)}
                              className="text-xs text-zinc-400 hover:text-white transition-colors px-2 py-1 border border-zinc-700 rounded"
                            >
                              Editar
                            </button>
                            <button
                              onClick={() => handleDelete(p.id, p.name)}
                              disabled={deletingId === p.id}
                              className="text-xs text-zinc-400 hover:text-red-400 transition-colors px-2 py-1 border border-zinc-700 rounded disabled:opacity-50"
                            >
                              {deletingId === p.id ? "…" : "Deletar"}
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </section>
      </main>

      {/* ── Add / Edit Modal ── */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70">
          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-2xl">
            <div className="sticky top-0 bg-zinc-900 border-b border-zinc-800 px-6 py-4 flex items-center justify-between">
              <h3 className="font-semibold text-white">
                {editing ? "Editar produto" : "Novo produto"}
              </h3>
              <button
                onClick={() => setModalOpen(false)}
                className="text-zinc-500 hover:text-white transition-colors text-xl leading-none"
              >
                ×
              </button>
            </div>

            <form onSubmit={handleSave} className="p-6 space-y-5">
              {formError && (
                <div className="bg-red-950 border border-red-800 text-red-300 rounded-lg px-4 py-3 text-sm">
                  {formError}
                </div>
              )}

              {/* Row: Name + Slug */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Field label="Nome *">
                  <input
                    value={form.name}
                    onChange={(e) => handleNameChange(e.target.value)}
                    required
                    className={inputCls}
                    placeholder="Ex: Elixir Guerreiro"
                  />
                </Field>
                <Field label="Slug *" hint="URL amigável (auto-gerado)">
                  <input
                    value={form.slug}
                    onChange={(e) => setForm((f) => ({ ...f, slug: e.target.value }))}
                    required
                    className={inputCls}
                    placeholder="ex: elixir-guerreiro"
                  />
                </Field>
              </div>

              {/* Description */}
              <Field label="Descrição">
                <textarea
                  value={form.description ?? ""}
                  onChange={(e) => setForm((f) => ({ ...f, description: e.target.value }))}
                  rows={2}
                  className={inputCls}
                  placeholder="Descrição curta do produto"
                />
              </Field>

              {/* Row: Price display + Price cents */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <Field label="Preço (exibição)" hint='Ex: "R$ 69,50"'>
                  <input
                    value={form.price_display ?? ""}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, price_display: e.target.value }))
                    }
                    className={inputCls}
                    placeholder="R$ 69,50"
                  />
                </Field>
                <Field label="Preço em centavos" hint="6950 = R$ 69,50">
                  <input
                    type="number"
                    value={form.price_cents ?? ""}
                    onChange={(e) =>
                      setForm((f) => ({
                        ...f,
                        price_cents: e.target.value ? parseInt(e.target.value) : null,
                      }))
                    }
                    className={inputCls}
                    placeholder="6950"
                    min={0}
                  />
                </Field>
                <Field label="Tag / Label">
                  <input
                    value={form.tag ?? ""}
                    onChange={(e) => setForm((f) => ({ ...f, tag: e.target.value }))}
                    className={inputCls}
                    placeholder="Ex: Força, Vitalidade"
                  />
                </Field>
              </div>

              {/* Features */}
              <Field label="Benefícios / Features" hint="Um por linha">
                <textarea
                  value={
                    Array.isArray(form.features)
                      ? form.features.join("\n")
                      : (form.features as string)
                  }
                  onChange={(e) =>
                    setForm((f) => ({
                      ...f,
                      features: e.target.value
                        .split("\n")
                        .map((s) => s.trim())
                        .filter(Boolean),
                    }))
                  }
                  rows={3}
                  className={inputCls}
                  placeholder={"Receitas para força e resistência\nProtocolo diário estruturado"}
                />
              </Field>

              {/* PDF URL */}
              <Field label="URL do PDF">
                <input
                  value={form.pdf_url ?? ""}
                  onChange={(e) => setForm((f) => ({ ...f, pdf_url: e.target.value }))}
                  className={inputCls}
                  placeholder="/Afro_Potente_Elixir_Guerreiro.pdf ou https://..."
                />
              </Field>

              {/* Checkout links */}
              <Field
                label="Link de checkout Kiwify"
                hint="Preenchido automaticamente pelo sync. Cole manualmente se necessário."
              >
                <input
                  value={form.payment_link_kiwify ?? ""}
                  onChange={(e) =>
                    setForm((f) => ({ ...f, payment_link_kiwify: e.target.value }))
                  }
                  className={inputCls}
                  placeholder="https://pay.kiwify.com.br/XXXXXXX"
                />
              </Field>

              <Field label="Link de checkout Mercado Pago">
                <input
                  value={form.payment_link_mercadopago ?? ""}
                  onChange={(e) =>
                    setForm((f) => ({
                      ...f,
                      payment_link_mercadopago: e.target.value,
                    }))
                  }
                  className={inputCls}
                  placeholder="https://mpago.la/..."
                />
              </Field>

              {/* Kiwify product ID + Sort order */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Field
                  label="ID do Produto Kiwify"
                  hint="Preenchido pelo sync. Usado para re-sincronizar."
                >
                  <input
                    value={form.kiwify_product_id ?? ""}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, kiwify_product_id: e.target.value }))
                    }
                    className={inputCls}
                    placeholder="UUID do produto no Kiwify"
                  />
                </Field>
                <Field label="Ordem de exibição" hint="Menor = aparece primeiro">
                  <input
                    type="number"
                    value={form.sort_order}
                    onChange={(e) =>
                      setForm((f) => ({
                        ...f,
                        sort_order: parseInt(e.target.value) || 0,
                      }))
                    }
                    className={inputCls}
                  />
                </Field>
              </div>

              {/* Is bundle */}
              <label className="flex items-center gap-2 cursor-pointer select-none">
                <input
                  type="checkbox"
                  checked={form.is_bundle}
                  onChange={(e) =>
                    setForm((f) => ({ ...f, is_bundle: e.target.checked }))
                  }
                  className="w-4 h-4 rounded accent-amber-500"
                />
                <span className="text-sm text-zinc-300">Bundle (coleção / pacote)</span>
              </label>

              {/* Actions */}
              <div className="flex justify-end gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setModalOpen(false)}
                  className="text-sm text-zinc-400 hover:text-white border border-zinc-700 rounded-lg px-4 py-2 transition-colors"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  disabled={saving}
                  className="text-sm bg-amber-500 hover:bg-amber-400 disabled:opacity-60 text-black font-semibold px-5 py-2 rounded-lg transition-colors"
                >
                  {saving ? "Salvando…" : editing ? "Salvar alterações" : "Criar produto"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

// ─── Tiny helper components ───────────────────────────────────────────────────

const inputCls =
  "w-full bg-zinc-800 border border-zinc-700 rounded-lg px-3 py-2 text-white placeholder-zinc-500 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent";

function Field({
  label,
  hint,
  children,
}: {
  label: string;
  hint?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label className="block text-sm font-medium text-zinc-300 mb-1">
        {label}
        {hint && <span className="font-normal text-zinc-500 ml-1 text-xs">— {hint}</span>}
      </label>
      {children}
    </div>
  );
}
