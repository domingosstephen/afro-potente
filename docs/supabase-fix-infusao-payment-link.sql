-- Set Kiwify payment link for Infusão de Restauração.
-- Run in: Supabase Dashboard > SQL Editor > New query > paste and run.
--
-- Matches by slug (several variants) OR by name containing "Restauração" / "Restauracao"
-- so the row is found even if the exact slug or accents differ.
update public.products
set payment_link_kiwify = 'https://pay.kiwify.com.br/dx1RLgy'
where slug in ('infusao-de-restauracao', 'infusao-restauracao', 'infusão-de-restauração')
   or name ilike '%restauração%'
   or name ilike '%restauracao%';

-- Ensure PDF path matches the file in /public (with "da" in the name)
update public.products
set pdf_url = '/Afro_Potente_Infusao_da_Restauracao.pdf'
where (slug in ('infusao-de-restauracao', 'infusao-restauracao')
    or name ilike '%restauração%'
    or name ilike '%restauracao%')
  and (pdf_url is null or pdf_url <> '/Afro_Potente_Infusao_da_Restauracao.pdf');
