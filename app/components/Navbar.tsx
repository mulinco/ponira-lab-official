"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const navLinks = [
  { name: "Manifesto", href: "#manifesto" },
  { name: "Labs", href: "#labs" },
  { name: "Artefatos", href: "#showcase" },
  { name: "Sócias", href: "#founders" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleLinkClick = () => setMobileOpen(false);

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="fixed top-0 left-0 w-full z-50 px-6 py-8 flex justify-between items-center pointer-events-none"
      >
        {/* Logo */}
        <div className="pointer-events-auto">
          <a href="#" className="flex items-center gap-3 group">
            <img
              src="/logo-icon.svg"
              className="w-5 h-5 opacity-40 group-hover:opacity-100 transition-opacity grayscale"
              alt="Ponira"
            />
            <span className="text-ponira-white/20 group-hover:text-ponira-white transition-colors font-body text-[9px] uppercase tracking-[0.4em] font-bold">
              Ponira Lab
            </span>
          </a>
        </div>

        {/* Desktop links */}
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

        {/* Desktop status */}
        <div className="hidden lg:block pointer-events-auto text-right">
          <span className="text-ponira-white/10 font-body text-[8px] uppercase tracking-widest block">
            Base: Rio de Janeiro, RJ
          </span>
          <span className="text-ponira-yellow/40 font-body text-[8px] uppercase tracking-widest block">
            Status: Online_026
          </span>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen((v) => !v)}
          className="md:hidden pointer-events-auto flex flex-col gap-[5px] p-2 group"
          aria-label="Menu"
        >
          <motion.span
            animate={mobileOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
            className="block w-5 h-px bg-ponira-white/40 group-hover:bg-ponira-yellow transition-colors origin-center"
          />
          <motion.span
            animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
            className="block w-5 h-px bg-ponira-white/40 group-hover:bg-ponira-yellow transition-colors"
          />
          <motion.span
            animate={mobileOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
            className="block w-5 h-px bg-ponira-white/40 group-hover:bg-ponira-yellow transition-colors origin-center"
          />
        </button>
      </motion.nav>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed inset-0 z-40 flex flex-col items-center justify-center bg-ponira-brown/95 backdrop-blur-lg md:hidden"
          >
            <nav className="flex flex-col items-center gap-10">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={handleLinkClick}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.07 }}
                  className="text-ponira-white/50 hover:text-ponira-yellow transition-colors font-display text-4xl italic uppercase tracking-tight"
                >
                  {link.name}
                </motion.a>
              ))}

              <motion.a
                href="mailto:contato@poniralab.com"
                onClick={handleLinkClick}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.07 }}
                className="mt-6 px-10 py-4 bg-ponira-yellow text-white rounded-full font-body text-xs uppercase tracking-widest hover:scale-105 transition"
              >
                Iniciar Conexão
              </motion.a>
            </nav>

            <p className="absolute bottom-10 text-ponira-white/10 font-body text-[8px] uppercase tracking-[0.3em]">
              Ponira Lab © 2026
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}