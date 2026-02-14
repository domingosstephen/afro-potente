"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

type CheckoutButtonProps = {
  productId: string;
  productName: string;
  priceCents: number | null;
  stripePriceId: string | null;
  children: React.ReactNode;
  className?: string;
};

export function CheckoutButton({
  productId,
  productName,
  priceCents,
  stripePriceId,
  children,
  className,
}: CheckoutButtonProps) {
  const [loading, setLoading] = useState(false);

  const handleCheckout = async () => {
    if (!stripePriceId && priceCents == null) return;
    setLoading(true);
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          productId,
          productName,
          priceCents: priceCents ?? undefined,
          stripePriceId: stripePriceId ?? undefined,
        }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Erro ao criar checkout");
      if (data.url) window.location.href = data.url;
      else throw new Error("URL de checkout não retornada");
    } catch (e) {
      console.error(e);
      alert("Não foi possível iniciar o pagamento. Tente novamente.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Button
      type="button"
      onClick={handleCheckout}
      disabled={loading}
      className={className}
    >
      {loading ? "Redirecionando..." : children}
    </Button>
  );
}
