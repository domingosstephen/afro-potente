// src/lib/pdf-stamper.ts
import { PDFDocument, rgb, StandardFonts } from 'pdf-lib';

export async function stampPdf(
  originalPdfUrl: string, 
  userEmail: string, 
  cpf: string, // Added CPF for Brazil context
  orderId: string
): Promise<Uint8Array> {
  // 1. Fetch Master PDF
  const existingPdfBytes = await fetch(originalPdfUrl).then(res => res.arrayBuffer());
  const pdfDoc = await PDFDocument.load(existingPdfBytes);
  const helveticaFont = await pdfDoc.embedFont(StandardFonts.Helvetica);
  const pages = pdfDoc.getPages();

  // 2. Portuguese Stamp Text
  const today = new Date().toLocaleDateString('pt-BR');
  const stampText = `Licenciado para ${userEmail} (CPF: ${cpf}) | Pedido: #${orderId} | Data: ${today}`;
  
  pages.forEach((page) => {
    const { width } = page.getSize();
    // Centered at bottom
    page.drawText(stampText, {
      x: 20,
      y: 15, 
      size: 8,
      font: helveticaFont,
      color: rgb(0.5, 0.5, 0.5), // Grey
      opacity: 0.7,
    });
  });

  return await pdfDoc.save();
}