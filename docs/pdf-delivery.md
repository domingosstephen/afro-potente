# PDF delivery and stamping

## 1. Where to host your PDFs

Each product has a `pdf_url` in the database. That URL is what we use to **deliver** the file (and, if stamping is on, to **fetch** the original and stamp it).

### Option A: Files in your app (`/public`)

- Put the PDF file in the project folder **`public/`** (e.g. `public/Afro_Potente_Infusao_Restauracao.pdf`).
- In the database, set `pdf_url` to the **path** (e.g. `/Afro_Potente_Infusao_Restauracao.pdf`).
- When we send the email we turn that into an absolute URL using `NEXT_PUBLIC_URL` (e.g. `https://yoursite.com/Afro_Potente_Infusao_Restauracao.pdf`).

**Pros:** Simple, no extra service.  
**Cons:** PDFs are deployed with the app; anyone with the link can download (same as Option B if the bucket is public).

### Option B: Supabase Storage (recommended for many PDFs)

- In **Supabase Dashboard → Storage**, create a bucket (e.g. `product-pdfs`).
- Make the bucket **public** (or use signed URLs if you add that later).
- Upload each product PDF and copy its **public URL** (e.g. `https://xxx.supabase.co/storage/v1/object/public/product-pdfs/Infusao_Restauracao.pdf`).
- In the database, set `pdf_url` to that full URL.

**Pros:** PDFs are separate from app deploys; easy to add/change files; works well with stamping (we fetch from this URL, stamp, then upload the stamped file to another bucket).  
**Cons:** You need to upload files and set URLs (e.g. in admin or Table Editor).

### Infusão de Restauração (and any product “without a link”)

- “No link” usually means **no `pdf_url`** for that product.
- Either:
  1. Add the PDF under `public/` and set `pdf_url` to `/NomeDoArquivo.pdf`, or  
  2. Upload the PDF to Supabase Storage and set `pdf_url` to the file’s public URL.

Until `pdf_url` is set, the order email will say “Em breve você receberá o acesso” and no PDF link is sent.

---

## 2. How we deliver PDFs when someone buys

1. Customer pays on Kiwify or Mercado Pago.
2. The platform sends a webhook to your app (`/api/webhooks/kiwify` or `/api/webhooks/mercadopago`).
3. The webhook:
   - Finds the product in Supabase and reads `pdf_url`.
   - Saves the order (and gets the new order id).
   - Gets the **delivery** URL:
     - If **stamping is enabled**: fetches the PDF from `pdf_url`, stamps it with the buyer’s email/CPF/order id/date, uploads the stamped PDF to Supabase Storage, and uses that new URL.
     - If **stamping is disabled**: uses `pdf_url` as-is (made absolute if it’s a path like `/file.pdf`).
   - Sends the order confirmation email (Resend) with that **delivery** URL as “Acesse seu guia”.

So: **delivery = one email with one link**; that link is either the original PDF or a personalized (stamped) copy.

---

## 3. Stamping (mark PDFs with buyer info to discourage sharing)

We stamp each delivered PDF with a line on every page, for example:

- `Licenciado para email@cliente.com | CPF: 123.456.789-00 | Pedido: #abc-123 | Data: 07/03/2025`

So each buyer gets a **unique file** with their email and, when provided, CPF and order id.

### Enabling stamping

1. **Create a Supabase Storage bucket for stamped PDFs**
   - Supabase Dashboard → Storage → **New bucket**.
   - Name: `stamped-pdfs` (or change `STAMP_BUCKET` in `src/lib/pdf-delivery.ts`).
   - Set the bucket to **Public** so the links we put in the email work.

2. **Environment variable**
   - In `.env.local` (and your host’s env):  
     `PDF_STAMPING_ENABLED=true`

3. **Redeploy / restart** so the webhook runs with the new env.

With that, when a payment webhook runs we:

- Fetch the product PDF from `pdf_url` (must be an absolute URL the server can reach).
- Stamp it with the buyer’s email, CPF (if present in the payload), and order id.
- Upload the stamped PDF to the `stamped-pdfs` bucket.
- Send the **stamped file’s public URL** in the email.

If stamping fails (e.g. bucket missing, network error), we fall back to sending the **original** `pdf_url` (made absolute) so the customer still gets a link.

### CPF in webhooks

- **Kiwify:** we read CPF from `customer.document`, `order.customer_document`, or `body.cpf` if present.
- **Mercado Pago:** we read from `payer.identification.number` or `body.cpf`.

If no CPF is sent, the stamp shows “não informado” instead of a number.

---

## 4. Checklist for “Infusão de Restauração” (and any product)

- [ ] PDF file exists: either in `public/` or uploaded to Supabase Storage.
- [ ] In Supabase **products** table, that product’s `pdf_url` is set (path like `/Afro_Potente_Infusao_Restauracao.pdf` or full Supabase Storage URL).
- [ ] `NEXT_PUBLIC_URL` is set in env (used to build the link in the email when `pdf_url` is a path).
- [ ] (Optional) Stamping: bucket `stamped-pdfs` created and public, `PDF_STAMPING_ENABLED=true`.

After that, when someone buys that product, they receive the email with the correct PDF link (stamped or not, depending on the flag).
