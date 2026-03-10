"use client";

import { useEffect } from "react";

// Env inlined at build time. Fallback = Meta Pixel ID from Events Manager (909854345230663).
const PIXEL_ID = process.env.NEXT_PUBLIC_FB_PIXEL_ID ?? "909854345230663";

declare global {
  interface Window {
    fbq: (
      action: string,
      eventName: string,
      params?: Record<string, unknown>
    ) => void;
  }
}

let pixelInitialized = false;

/**
 * Facebook (Meta) Pixel – injects the base code into the page so it fires reliably.
 * Set NEXT_PUBLIC_FB_PIXEL_ID in your env to override (e.g. 909854345230663).
 * Important: Redeploy after adding the env var so it’s inlined at build time.
 */
export function FacebookPixel() {
  useEffect(() => {
    if (!PIXEL_ID || typeof document === "undefined") return;
    if (pixelInitialized) return;
    pixelInitialized = true;
    if (document.getElementById("fb-pixel-script")) return;

    const script = document.createElement("script");
    script.id = "fb-pixel-script";
    script.innerHTML = `
      !function(f,b,e,v,n,t,s)
      {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
      n.callMethod.apply(n,arguments):n.queue.push(arguments)};
      if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
      n.queue=[];t=b.createElement(e);t.async=!0;
      t.src=v;s=b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t,s)}(window, document,'script',
      'https://connect.facebook.net/en_US/fbevents.js');
      fbq('init', '${PIXEL_ID}');
      fbq('track', 'PageView');
    `;
    document.head.appendChild(script);

    // Noscript fallback (optional; usually for no-JS crawlers)
    const noscript = document.createElement("noscript");
    const img = document.createElement("img");
    img.height = 1;
    img.width = 1;
    img.style.display = "none";
    img.src = `https://www.facebook.com/tr?id=${PIXEL_ID}&ev=PageView&noscript=1`;
    img.alt = "";
    noscript.appendChild(img);
    document.head.appendChild(noscript);
  }, []);

  return null;
}
