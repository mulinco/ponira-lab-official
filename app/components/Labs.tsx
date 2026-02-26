"use client";
import { motion } from "framer-motion";

const labs = [
  {
    id: "creative",
    category: "LAB_01 / SOPRO",
    title: "Creative",
    role: "Estratégia & Marketing",
    description: "Gestão de redes sociais, tráfego pago e fotografia afetiva. A interface entre a marca e o mundo.",
    url: "https://creative.poniralab.com"
  },
  {
    id: "studio",
    category: "LAB_02 / ALMA",
    title: "Studio",
    role: "Design & Branding",
    description: "Identidades visuais, UI/UX e design estratégico. Onde a alma e o propósito ganham forma visual.",
    url: "https://studio.poniralab.com"
  },
  {
    id: "systems",
    category: "LAB_03 / CORPO",
    title: "Systems",
    role: "Dev & Automação",
    description: "Arquitetura de sistemas, APIs e automação de processos. A engenharia bruta que sustenta a autoridade.",
    url: "https://systems.poniralab.com"
  }
];

export default function Labs() {
  return (
    <section className="py-32 px-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {labs.map((lab) => (
          <motion.a
            key={lab.id}
            href={lab.url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="group flex flex-col h-full border-t border-ponira-white/10 pt-8 hover:border-ponira-yellow transition-colors duration-500"
          >
            <div className="flex justify-between items-start mb-12">
              <span className="text-ponira-yellow font-mono text-[10px] tracking-[0.3em] font-bold">
             {lab.category}
              </span>
              <span className="text-ponira-white/20 group-hover:text-ponira-yellow transition-colors font-body text-xs font-bold uppercase tracking-widest">
                Explore →
              </span>
            </div>

            <div className="flex-1">
              <h3 className="text-3xl font-display text-ponira-white italic mb-2">
                {lab.title}
              </h3>
              <p className="text-ponira-yellow font-body text-[11px] uppercase tracking-[0.2em] font-black mb-6">
                {lab.role}
              </p>
              <p className="text-ponira-white/50 font-body font-light text-sm leading-relaxed max-w-[280px]">
                {lab.description}
              </p>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}