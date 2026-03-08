/**
 * Kiwify Public API client.
 * Docs: https://docs.kiwify.com.br
 *
 * Required env vars:
 *   KIWIFY_CLIENT_ID     – from Kiwify Dashboard > Apps > API > API Key
 *   KIWIFY_CLIENT_SECRET – from Kiwify Dashboard > Apps > API > API Key
 *   KIWIFY_ACCOUNT_ID    – from Kiwify Dashboard > Apps > API (the account ID shown there)
 *
 * NOTE: Kiwify's public API only supports reading products (GET).
 * Product creation must still be done manually in the Kiwify dashboard.
 * This client is used to auto-sync checkout links into Supabase.
 */

const KIWIFY_BASE = "https://public-api.kiwify.com/v1";

type TokenCache = { token: string; expiresAt: number };
let _tokenCache: TokenCache | null = null;

async function getAccessToken(): Promise<string> {
  // Reuse token if it has more than 60 seconds left
  if (_tokenCache && Date.now() < _tokenCache.expiresAt - 60_000) {
    return _tokenCache.token;
  }

  const clientId = process.env.KIWIFY_CLIENT_ID;
  const clientSecret = process.env.KIWIFY_CLIENT_SECRET;

  if (!clientId || !clientSecret) {
    throw new Error(
      "Missing KIWIFY_CLIENT_ID or KIWIFY_CLIENT_SECRET environment variables."
    );
  }

  const body = new URLSearchParams({ client_id: clientId, client_secret: clientSecret });

  const res = await fetch(`${KIWIFY_BASE}/oauth/token`, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: body.toString(),
  });

  if (!res.ok) {
    throw new Error(`Kiwify OAuth failed (${res.status}): ${await res.text()}`);
  }

  const data = (await res.json()) as {
    access_token: string;
    expires_in: string | number;
  };

  const expiresInMs = Number(data.expires_in) * 1000;
  _tokenCache = { token: data.access_token, expiresAt: Date.now() + expiresInMs };

  return _tokenCache.token;
}

export type KiwifyLink = {
  id: string;
  custom_name: string | null;
  status: string;
  is_sales_page: boolean;
};

export type KiwifyProduct = {
  id: string;
  name: string;
  type: string;
  created_at: string;
  currency: string;
  /** Price in centavos (cents). e.g. 6950 = R$ 69,50 */
  price: number | null;
  status: string;
  payment_type: string;
  links: KiwifyLink[];
};

type KiwifyListResponse = {
  pagination: { count: number; page_number: number; page_size: number };
  data: KiwifyProduct[];
};

/** Fetches all products from Kiwify (handles pagination automatically). */
export async function listKiwifyProducts(): Promise<KiwifyProduct[]> {
  const token = await getAccessToken();
  const accountId = process.env.KIWIFY_ACCOUNT_ID;

  if (!accountId) {
    throw new Error("Missing KIWIFY_ACCOUNT_ID environment variable.");
  }

  const products: KiwifyProduct[] = [];
  let page = 1;

  while (true) {
    const res = await fetch(
      `${KIWIFY_BASE}/products?page_number=${page}&page_size=50`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "x-kiwify-account-id": accountId,
        },
      }
    );

    if (!res.ok) {
      throw new Error(
        `Kiwify list products failed (${res.status}): ${await res.text()}`
      );
    }

    const data = (await res.json()) as KiwifyListResponse;
    const items = data.data ?? [];
    products.push(...items);

    if (items.length < 50) break;
    page++;
  }

  return products;
}

/**
 * Builds the Kiwify checkout URL from a product's links array.
 * Uses the first active, non-sales-page link.
 * Returns null if no suitable link is found.
 */
export function getKiwifyCheckoutUrl(product: KiwifyProduct): string | null {
  const link = product.links?.find(
    (l) => l.status === "active" && !l.is_sales_page
  );
  if (!link) return null;
  return `https://pay.kiwify.com.br/${link.id}`;
}

/** Returns true if all required Kiwify env vars are set. */
export function isKiwifyConfigured(): boolean {
  return !!(
    process.env.KIWIFY_CLIENT_ID &&
    process.env.KIWIFY_CLIENT_SECRET &&
    process.env.KIWIFY_ACCOUNT_ID
  );
}
