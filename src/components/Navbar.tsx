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
            {/* Full Screen Solid Background */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-[#050f05] z-[90] lg:hidden"
            />
            
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="fixed inset-0 z-[100] lg:hidden bg-[#050f05] pt-32 px-6 pb-10 flex flex-col overflow-y-auto"
            >
              <div className="flex flex-col gap-4">
                <p className="text-[10px] font-black uppercase tracking-[0.3em] text-[#22c55e] mb-4 ml-2">Navegação</p>
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <Link 
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="flex items-center gap-5 p-6 rounded-[2rem] bg-white/5 border border-white/5 hover:border-[#22c55e]/30 hover:bg-[#22c55e]/5 transition-all group"
                    >
                      <div className="p-4 bg-white/5 rounded-2xl text-white/30 group-hover:text-[#22c55e] transition-colors">
                        {link.icon}
                      </div>
                      <span className="font-black uppercase tracking-widest text-sm text-white/70 group-hover:text-white">
                        {link.name}
                      </span>
                    </Link>
                  </motion.div>
                ))}
              </div>

              <div className="mt-12 space-y-4">
                <Button className="w-full bg-[#22c55e] hover:bg-[#1ea34d] text-[#050f05] font-black h-16 rounded-2xl text-sm uppercase tracking-widest">
                  Fazer Avaliação
                </Button>
                <Button variant="outline" className="w-full border-white/10 hover:bg-white/5 text-white font-black h-16 rounded-2xl text-sm uppercase tracking-widest">
                  Área do Paciente
                </Button>
                
                <button 
                  onClick={() => setIsOpen(false)}
                  className="w-full py-6 text-white/30 font-bold uppercase tracking-[0.2em] text-[10px] hover:text-white transition-colors"
                >
                  Fechar Menu
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}
