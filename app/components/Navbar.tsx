"use client";
import { motion } from "framer-motion";

const navLinks = [
  { name: " Manifesto", href: "#manifesto" },
  { name: " Labs", href: "#labs" },
  { name: " Artefatos", href: "#showcase" },
  { name: " Sócias", href: "#founders" },
];

export default function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="fixed top-0 left-0 w-full z-50 px-6 py-8 flex justify-between items-center pointer-events-none"
    >
      {/* Lado Esquerdo: Logo/Símbolo */}
      <div className="pointer-events-auto">
        <a href="#" className="flex items-center gap-3 group">
          <img src="/logo-icon.svg" className="w-5 h-5 opacity-40 group-hover:opacity-100 transition-opacity grayscale" alt="Ponira" />
          <span className="text-ponira-white/20 group-hover:text-ponira-white transition-colors font-body text-[9px] uppercase tracking-[0.4em] font-bold">
            Ponira Lab
          </span>
        </a>
      </div>

      {/* Centro: Links de Navegação (Desktop) */}
      <div className="hidden md:flex gap-10 pointer-events-auto bg-black/5 backdrop-blur-sm border border-ponira-white/5 px-8 py-3 rounded-full">
        {navLinks.map((link) => (
          <a 
            key={link.name}
            href={link.href}
            className="text-ponira-white/30 hover:text-ponira-yellow transition-colors font-body text-[9px] uppercase tracking-[0.2em] font-bold"
          >
            {link.name}
          </a>
        ))}
      </div>

      {/* Lado Direito: Status/Local */}
      <div className="hidden lg:block pointer-events-auto text-right">
        <span className="text-ponira-white/10 font-body text-[8px] uppercase tracking-widest block">
          Base: Rio de Janeiro, RJ
        </span>
        <span className="text-ponira-yellow/40 font-body text-[8px] uppercase tracking-widest block">
          Status: Online_026
        </span>
      </div>
    </motion.nav>
  );
}