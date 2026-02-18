"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Receitas", href: "/guia-de-bem-estar" },
    { name: "Como Funciona", href: "/como-funciona" },
    { name: "Comunidade", href: "/comunidade" },
    { name: "Loja", href: "/produtos" },
    { name: "Contato", href: "/contato" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
        scrolled
          ? "bg-[#F5EDE0]/95 backdrop-blur-md py-3 shadow-[0_2px_12px_rgba(43,26,14,0.1)]"
          : "bg-[#F5EDE0] py-5"
      } border-b border-[#2B1A0E]/10`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link href="/" className="font-serif text-xl md:text-2xl text-[#2B1A0E] z-50">
            Afro Potente
          </Link>

          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="font-sans font-semibold text-sm text-[#2B1A0E] hover:text-[#B94A2F] transition-colors tracking-[0.02em]"
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-4">
            <a
              href="https://wa.me/5500000000000"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#B94A2F] hover:bg-[#9E3E27] text-[#F5EDE0] font-sans font-semibold text-sm uppercase tracking-[0.05em] px-6 py-3 rounded-lg transition-all duration-200 hover:scale-[1.02]"
            >
              Receber no WhatsApp
            </a>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-[#2B1A0E] hover:text-[#B94A2F] transition-colors z-[130]"
            aria-label={isOpen ? "Fechar Menu" : "Abrir Menu"}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-[#2B1A0E]/60 backdrop-blur-sm z-[110] lg:hidden"
            />
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="fixed top-0 left-0 right-0 z-[120] lg:hidden bg-[#2B1A0E] pt-24 px-6 pb-10 flex flex-col"
            >
              <div className="flex flex-col gap-1">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="block py-4 px-4 text-[#F5EDE0]/90 font-sans font-semibold text-base hover:text-[#B94A2F] transition-colors border-b border-[#F5EDE0]/10"
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
              </div>
              <div className="mt-8">
                <a
                  href="https://wa.me/5500000000000"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsOpen(false)}
                  className="w-full block text-center bg-[#B94A2F] hover:bg-[#9E3E27] text-[#F5EDE0] font-sans font-semibold text-sm uppercase tracking-[0.05em] px-6 py-4 rounded-lg transition-all"
                >
                  Receber no WhatsApp
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}
