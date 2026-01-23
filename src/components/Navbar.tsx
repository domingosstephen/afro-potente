"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Zap, Menu, X, ShoppingBag, BookOpen, Activity, Mail, User } from "lucide-react";
import { Button } from "@/components/ui/button";
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
    { name: "Loja", href: "/produtos", icon: <ShoppingBag className="h-4 w-4" /> },
    { name: "Guia de Vitalidade", href: "/guia-de-bem-estar", icon: <BookOpen className="h-4 w-4" /> },
    { name: "Exercícios Naturais", href: "/exercicios", icon: <Activity className="h-4 w-4" /> },
    { name: "Contato", href: "/contato", icon: <Mail className="h-4 w-4" /> },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
        scrolled ? "bg-[#050f05]/90 backdrop-blur-lg py-3" : "bg-[#050f05]/80 backdrop-blur-md py-5"
      } border-b border-white/5`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="text-xl md:text-2xl font-black tracking-tighter flex items-center gap-2 z-50">
            <Zap className="fill-[#22c55e] text-[#22c55e] h-5 w-5 md:h-6 md:w-6" />
            <span className="inline-block">AFRO POTENTE</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8 text-[10px] font-black text-white/50 uppercase tracking-[0.2em]">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href} 
                className="hover:text-[#22c55e] transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-4">
            <Button variant="ghost" className="text-white/50 hover:text-white hover:bg-white/5 font-bold uppercase tracking-widest text-[10px]">
              Entrar
            </Button>
            <div className="h-10 w-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center cursor-pointer hover:bg-[#22c55e]/10 hover:border-[#22c55e]/30 transition-all group">
              <User className="h-5 w-5 text-white/30 group-hover:text-[#22c55e]" />
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex lg:hidden items-center gap-3 z-[110]">
            <div className="h-9 w-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
              <User className="h-4 w-4 text-white/30" />
            </div>
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-white hover:text-[#22c55e] transition-colors bg-white/5 rounded-lg border border-white/10"
              aria-label={isOpen ? "Fechar Menu" : "Abrir Menu"}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Dark Backdrop - Blurs and darkens the site content */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/80 backdrop-blur-md z-[110] lg:hidden"
            />
            
            {/* Menu Panel - Slides from the top and stays ON TOP of everything */}
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="fixed top-0 left-0 right-0 z-[120] lg:hidden bg-[#0a1a0a] border-b border-[#22c55e]/20 shadow-[0_20px_50px_rgba(0,0,0,0.5)] pt-24 px-6 pb-12 flex flex-col rounded-b-[3rem]"
            >
              <div className="flex flex-col gap-3">
                <p className="text-[10px] font-black uppercase tracking-[0.3em] text-[#22c55e] mb-2 ml-2">Navegação</p>
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
                      className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/5 active:bg-[#22c55e]/10 transition-all"
                    >
                      <div className="p-3 bg-white/5 rounded-xl text-[#22c55e]">
                        {link.icon}
                      </div>
                      <span className="font-black uppercase tracking-widest text-xs text-white/90">
                        {link.name}
                      </span>
                    </Link>
                  </motion.div>
                ))}
              </div>

              <div className="mt-8 space-y-3">
                <Button className="w-full bg-[#22c55e] hover:bg-[#1ea34d] text-[#050f05] font-black h-14 rounded-xl text-xs uppercase tracking-widest">
                  Fazer Avaliação
                </Button>
                <Button variant="outline" className="w-full border-white/10 text-white font-black h-14 rounded-xl text-xs uppercase tracking-widest">
                  Área do Paciente
                </Button>
              </div>

              {/* Close Handle - Visual cue that it can be closed */}
              <div className="flex justify-center mt-8">
                <button 
                  onClick={() => setIsOpen(false)}
                  className="h-1.5 w-12 bg-white/10 rounded-full"
                  aria-label="Fechar Menu"
                />
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}
