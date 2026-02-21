"use client";
import Grainient from "@/components/Grainient"; // Verifique o caminho exato onde ele foi instalado
import { Sparkles } from "lucide-react";

export default function Home() {

  return (
    <main className="relative min-h-screen bg-transparent overflow-hidden">
      
      {/* BACKGROUND GRAINIENT */}
      <div className="absolute inset-0 z-0">
        <Grainient/>
      </div>

      {/* CONTEÚDO HERO */}
      <section className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 text-center">
        <div className="max-w-6xl mx-auto w-full">

          {/* Container Principal Centralizado */}
<div className="flex flex-col items-center">
  
  {/* Ícone da Palmeira (Ajuste o caminho para o seu arquivo) */}
  <div className="mb-[-1rem] md:mb-[-2.5rem] z-20">
    <img 
      src="/logo-icon.svg" 
      alt="Ponira Icon" 
      className="w-12 h-12 md:w-24 md:h-24 opacity-90"
    />
  </div>

  <div className="relative inline-block">
    {/* PONIRA - Ocupando o centro */}
    <h1 className="text-[3.5rem] sm:text-7xl md:text-9xl lg:text-[11rem] font-display uppercase italic tracking-normal text-ponira-yellow leading-none">
      PONIRA
    </h1>
    
    {/* .LAB - Menor e alinhado à base na direita */}
    <span className="absolute bottom-[-0.5rem] right-[-0.5rem] md:bottom-0 md:right-[-2rem] font-display text-xl sm:text-3xl md:text-5xl lg:text-6xl text-ponira-white uppercase italic tracking-normal">
      .LAB
    </span>
  </div>
</div>

          <p className="text-lg md:text-2xl text-ponira-white/80 mb-14 max-w-2xl mx-auto font-body font-light leading-relaxed">
            Onde a sensibilidade do design encontra a precisão da tecnologia. 
            Sistemas que <span className="text-ponira-yellow font-semibold">automatizam sua autoridade.</span>
          </p>

          <button className="px-12 py-5 bg-ponira-bronze text-white rounded-full font-body text-sm hover:scale-105 transition shadow-glow-amber uppercase tracking-widest">
            Iniciar Conexão
          </button>
        </div>
      </section>
      
    </main>
  );
}