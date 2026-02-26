"use client";
import { motion } from "framer-motion";

const projects = [
  {
    id: 1,
    title: "Oásis",
    category: "SYSTEMS / CORPO",
    description: "Aplicação full-stack para gestão de saúde mental e rotinas. Engenharia focada em UX e performance.",
    tech: "Next.js • TypeScript • Node.js",
  },
  {
    id: 2,
    title: "LBEM UFRJ",
    category: "SYSTEMS / DADOS",
    description: "Bioinformática molecular e evolutiva. Arquitetura de dados aplicada à pesquisa científica avançada.",
    tech: "Python • Data Science • Research",
  },
  {
    id: 3,
    title: "Netflix Analysis",
    category: "SYSTEMS / CORPO",
    description: "Dashboard interativo de análise de dados. Visualização estratégica de métricas de consumo.",
    tech: "Data Analytics • React • Python",
  },
  {
    id: 4,
    title: "Identidade Studio",
    category: "STUDIO / ALMA",
    description: "Direção de arte e branding estratégico para marcas que buscam posicionamento premium.",
    tech: "Branding • UI Design • Visual Arts",
  }
];

export default function Showcase() {
  return (
    <section className="py-32 px-6 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-6">
        <div className="max-w-xl">
          <h2 className="text-ponira-yellow font-display text-[10px] uppercase tracking-[0.5em] mb-6 font-bold opacity-85">
             Artefatos Selecionados
          </h2>
          <p className="text-3xl md:text-4xl font-display text-ponira-white leading-normal">
            Execuções que equilibram precisão técnica e intenção estética.
          </p>
        </div>
        <div className="text-ponira-white/30 font-display text-xs uppercase tracking-widest pb-2 border-b border-ponira-white/10">
          Galeria_026
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24">
        {projects.map((project) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="group cursor-pointer"
          >
            <div className="aspect-video bg-black/20 mb-8 overflow-hidden rounded-sm border border-ponira-white/5 relative">
              {/* Placeholder para a imagem do projeto */}
              <div className="absolute inset-0 bg-gradient-to-tr from-ponira-brown/40 to-transparent group-hover:opacity-0 transition-opacity duration-500" />
            </div>
            
            <div className="flex flex-col gap-2">
              <span className="text-ponira-yellow font-display text-[10px] font-black tracking-[0.2em] uppercase">
                {project.category}
              </span>
              <h3 className="text-2xl font-display text-ponira-white italic group-hover:translate-x-2 transition-transform duration-300">
                {project.title}
              </h3>
              <p className="text-ponira-white/50 font-body font-light text-sm max-w-md leading-relaxed">
                {project.description}
              </p>
              <div className="mt-4 flex gap-3">
                <span className="text-[10px] font-mono text-ponira-white/20 uppercase tracking-tighter">
                  {project.tech}
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}