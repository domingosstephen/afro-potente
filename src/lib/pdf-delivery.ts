/**
 * Resolves the PDF URL to send in order confirmation emails.
 * - If stamping is enabled: stamps PDF with buyer info, uploads to Supabase Storage, returns that URL.
 * - Otherwise: returns the product PDF URL as an absolute URL (so email links work).
 */

import { createServerSupabase } from "@/lib/supabase-server";
import { stampPdf } from "@/lib/pdf-stamper";

const STAMP_BUCKET = "stamped-pdfs";

/**
 * Turn a possibly relative pdf_url from the DB into an absolute URL (for email links and fetching).
 */
export function toAbsolutePdfUrl(pdfUrl: string | null, baseUrl: string): string | null {
  if (!pdfUrl) return null;
  if (pdfUrl.startsWith("http://") || pdfUrl.startsWith("https://")) return pdfUrl;
  const base = baseUrl.replace(/\/$/, "");
  const path = pdfUrl.startsWith("/") ? pdfUrl : `/${pdfUrl}`;
  return `${base}${path}`;
}

/**
 * Get the URL to send to the customer: either a stamped PDF in Storage or the original PDF as absolute URL.
 * - If PDF_STAMPING_ENABLED=true and Supabase Storage is configured and productPdfUrl is set,
 *   stamps the PDF with email/CPF/orderId and uploads to bucket "stamped-pdfs", returns public URL.
 * - Otherwise returns the original PDF URL made absolute (so it works in emails).
 */
export async function getDeliveryPdfUrl(
  productPdfUrl: string | null,
  email: string,
  cpf: string,
  orderId: string,
  baseUrl: string
): Promise<string | null> {
  if (!productPdfUrl) return null;

  const absoluteUrl = toAbsolutePdfUrl(productPdfUrl, baseUrl);
  if (!absoluteUrl) return null;

  const stampingEnabled = process.env.PDF_STAMPING_ENABLED === "true";
  const supabase = createServerSupabase();

  if (stampingEnabled && supabase) {
    try {
      const pdfBytes = await stampPdf(absoluteUrl, email, cpf || "não informado", orderId);
      const fileName = `order-${orderId}-${Date.now()}.pdf`;

      const { data: uploadData, error: uploadError } = await supabase.storage
        .from(STAMP_BUCKET)
        .upload(fileName, pdfBytes, {
          contentType: "application/pdf",
          upsert: true,
        });

      if (uploadError) {
        console.error("PDF stamp upload error:", uploadError);
        return absoluteUrl;
      }

      const { data: urlData } = supabase.storage.from(STAMP_BUCKET).getPublicUrl(uploadData.path);
      return urlData.publicUrl;
    } catch (err) {
      console.error("PDF stamp error:", err);
      return absoluteUrl;
    }
  }

  return absoluteUrl;
}
