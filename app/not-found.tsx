"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Grainient from "@/Grainient";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

export default function NotFound() {
  return (
    <main className="relative min-h-screen bg-ponira-brown overflow-x-hidden">
      <div className="fixed inset-0 z-0">
        <Grainient color1="#5a5539" color2="#3b2e0f" color3="#9b682a" />
      </div>

      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar />

        <div className="flex-1 flex items-center justify-center px-6 py-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="text-center max-w-xl"
          >
            {/* Número */}
            <motion.p
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.1 }}
              className="text-[160px] md:text-[220px] font-display italic text-ponira-white/5 leading-none select-none mb-0"
            >
              404
            </motion.p>

            {/* Conteúdo sobreposto */}
            <div className="-mt-16 md:-mt-24 relative z-10">
              <span className="text-ponira-yellow font-body text-[9px] uppercase tracking-[0.5em] font-black opacity-70 block mb-4">
                Página não encontrada
              </span>
              <h1 className="text-4xl md:text-5xl font-display italic text-ponira-white leading-tight mb-6">
                Este caminho ainda não foi construído.
              </h1>
              <p className="text-ponira-white/40 font-body font-light text-base leading-relaxed mb-10 max-w-sm mx-auto">
                A página que você procura não existe ou foi movida. Mas tudo que construímos está por aqui.
              </p>

              {/* Links */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="/"
                  className="px-8 py-4 bg-ponira-yellow text-ponira-brown font-body text-[10px] uppercase tracking-widest font-bold rounded-full hover:scale-105 transition-all duration-300"
                >
                  Voltar ao início
                </Link>
                <Link
                  href="/cases"
                  className="px-8 py-4 border border-ponira-white/10 text-ponira-white/50 hover:border-ponira-yellow/30 hover:text-ponira-yellow font-body text-[10px] uppercase tracking-widest rounded-full transition-all duration-300"
                >
                  Ver nossos cases
                </Link>
              </div>
            </div>
          </motion.div>
        </div>

        <Footer />
      </div>
    </main>
  );
}