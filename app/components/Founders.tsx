"use client";
import { motion } from "framer-motion";

export default function Founders() {
  return (
    <section className="py-32 px-6 max-w-7xl mx-auto">
      <div className="mb-20">
        <h2 className="text-ponira-yellow font-body text-[10px] uppercase tracking-[0.5em] mb-6 font-bold opacity-60">
           As Sócias
        </h2>
        <p className="text-3xl md:text-5xl font-display text-ponira-white italic leading-tight max-w-3xl">
          A fusão entre a arquitetura de sistemas e a direção de arte estratégica.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
        
        {/* --- CAROL: A ALMA (DESIGN) --- */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <div className="aspect-[4/5] bg-black/20 rounded-sm border border-ponira-white/5 grayscale hover:grayscale-0 transition-all duration-700">
            {/* Placeholder para foto da Carol */}
          </div>
          <div>
            <span className="text-ponira-yellow font-body text-[10px] font-black tracking-[0.3em] uppercase mb-2 block">
              ALMA / CREATIVE & STUDIO
            </span>
            <h3 className="text-4xl font-display text-ponira-white italic mb-4">ANA CAROLINA</h3>
            <p className="text-ponira-white/60 font-body font-light text-base leading-relaxed max-w-md">
              Liderança Criativa. Especialista em fotografia afetiva, UI/Visual e direção de arte estratégica. Responsável pela estética, assets visuais e pela identidade que comunica o propósito de cada marca.
            </p>
          </div>
        </motion.div>

        {/* --- MARIA: O CORPO (DEV) --- */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-8 md:mt-24"
        >
          <div className="aspect-[4/5] bg-black/20 rounded-sm border border-ponira-white/5 grayscale hover:grayscale-0 transition-all duration-700">
            {/* Placeholder para foto da Maria */}
          </div>
          <div>
            <span className="text-ponira-yellow font-body text-[10px] font-black tracking-[0.3em] uppercase mb-2 block">
              CORPO / SYSTEMS & UX
            </span>
            <h3 className="text-4xl font-display text-ponira-white italic mb-4">MARIA CLARA</h3>
            <p className="text-ponira-white/60 font-body font-light text-base leading-relaxed max-w-md">
              Liderança Técnica. Graduanda em Ciências Biológicas (UFRJ) e Análise de Sistemas (UNINTER). Arquiteta de código, infraestrutura e automação, focada na precisão técnica que sustenta a autoridade digital.
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}