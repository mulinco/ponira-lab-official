"use client";
import { motion } from "framer-motion";

// ─── STUDIO / ALMA — Identidades Visuais do Behance ────────────────────────
const studioProjects = [
  {
    id: "cjp-id",
    title: "Colégio João Pedro",
    category: "STUDIO / ALMA — Identidade Visual",
    description: "Identidade para escola que ensina além da sala de aula. Sistema visual baseado no sociointeracionismo: acolhimento, autonomia e crescimento com forma.",
    tech: "Branding • Logo • Brand System",
    url: "https://www.behance.net/gallery/220066835/Colgio-Joao-Pedro-%28Identidade-Visual%29",
    label: "Ver no Behance",
    cover: "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/68d5a3220066835.67bccc0899cac.jpg",
  },
  {
    id: "thais",
    title: "Thais Mazeliah — Lawyer",
    category: "STUDIO / ALMA — Identidade Visual",
    description: "Marca pessoal para advogada. Autoridade, presença e elegância traduzidas em identidade visual que posiciona antes mesmo da primeira reunião.",
    tech: "Personal Branding • Logo • Visual Identity",
    url: "https://www.behance.net/gallery/162028635/Thais-Mazeliah-Lawyer",
    label: "Ver no Behance",
    cover: "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/0fa91d162028635.63cf16b2e109c.png",
  },
  {
    id: "social-arq",
    title: "Social Media | Arquitetura",
    category: "CREATIVE / SOPRO — Social Media",
    description: "Gestão visual para escritório de arquitetura. Posts que traduzem a linguagem técnica e estética do setor em conteúdo que conecta e converte.",
    tech: "Social Media Design • Branding • Content",
    url: "https://www.behance.net/gallery/224700495/Social-Media-Arquitetura",
    label: "Ver no Behance",
    cover: "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200_webp/4c4fb8224700495.680fe53b638e4.png",
  },
  {
    id: "personal-branding",
    title: "Personal Branding — Ana Carolina",
    category: "STUDIO / ALMA — Identidade Visual",
    description: "A própria marca. Identidade criada para comunicar quem é a Carol antes de qualquer palavra: fotógrafa afetiva, diretora de arte, criadora.",
    tech: "Personal Branding • Logo • Illustrator",
    url: "https://www.behance.net/gallery/180316595/Personal-Branding",
    label: "Ver no Behance",
    cover: "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200_webp/20aa21180316595.6508e21a621ae.png",
  },
  {
    id: "premier",
    title: "Premier — Coffee Shop",
    category: "STUDIO / ALMA — Case de Estudo",
    description: "Do solo à xícara. Identidade visual para cafeteria de Tapiramutá-BA que homenageia quem cultiva o grão. Afeto, origem e pertencimento com marca.",
    tech: "Branding • Logo • Case Study",
    url: "https://www.behance.net/gallery/179685751/Premier-%28Coffee-Shop%29-Case-de-estudo",
    label: "Ver no Behance",
    cover: "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/f74dec179685751.64fe5843769d5.png",
  },
  {
    id: "fotografa-id",
    title: "Identidade Visual — Fotógrafa",
    category: "STUDIO / ALMA — Identidade Visual",
    description: "Marca pessoal construída em torno do cartão-postal como metáfora da fotografia: guardar memórias, colecionar momentos, eternizar o que não volta.",
    tech: "Personal Branding • Visual Identity • Illustrator",
    url: "https://www.behance.net/gallery/236976675/Identidade-Visual-Fotografa",
    label: "Ver no Behance",
    cover: "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200_webp/479e98236976675.68f7743509965.png",
  },
];

// ─── SYSTEMS / CORPO — Projetos de Desenvolvimento ─────────────────────────
const systemsProjects = [
  {
    id: "cjp-web",
    title: "Colégio João Pedro",
    category: "SYSTEMS / CORPO — Website Institucional",
    description: "Site multi-página completo para escola de ensino infantil ao médio. Proposta pedagógica, infraestrutura, FAQ interativo e formulário de matrícula.",
    tech: "Next.js • TypeScript • Tailwind CSS",
    url: "https://colegio-joao-pedro.vercel.app",
    label: "Ver Projeto",
    cover: null as string | null,
  },
  {
    id: "netflix",
    title: "Netflix Genre Analysis",
    category: "SYSTEMS / DADOS — Dashboard",
    description: "Dashboard interativo de análise do catálogo Netflix. Visualização por gênero, país e ano — dados transformados em inteligência estratégica.",
    tech: "Python • Pandas • Streamlit",
    url: "https://analysis-genre-netflix.streamlit.app",
    label: "Ver Dashboard",
    cover: null as string | null,
  },
  {
    id: "extrator",
    title: "Extrator PDF Aero",
    category: "SYSTEMS / AUTOMAÇÃO",
    description: "Ferramenta de extração e processamento de dados em PDFs aeronáuticos. Automação que elimina horas de trabalho manual com precisão técnica.",
    tech: "Python • Streamlit • PDF Processing",
    url: "https://extrator-pdf-aero.streamlit.app",
    label: "Ver Ferramenta",
    cover: null as string | null,
  },
  {
    id: "lbem",
    title: "LBEM — UFRJ",
    category: "SYSTEMS / PESQUISA",
    description: "Plataforma para laboratório de bioinformática molecular e evolutiva da UFRJ. Arquitetura de dados aplicada à pesquisa científica de alto nível.",
    tech: "Next.js • Data Science • Research",
    url: "https://lbem-vercel.app",
    label: "Ver Projeto",
    cover: null as string | null,
  },
];

type Project = {
  id: string;
  title: string;
  category: string;
  description: string;
  tech: string;
  url: string;
  label: string;
  cover: string | null;
};

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.05 }}
      viewport={{ once: true }}
      className="group cursor-pointer"
    >
      <a
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
        className="block aspect-video mb-8 overflow-hidden rounded-sm border border-ponira-white/5 relative bg-black/20"
      >
        {project.cover ? (
          <img
            src={project.cover}
            alt={project.title}
            className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
          />
        ) : (
          <>
            <div className="absolute inset-0 bg-gradient-to-tr from-ponira-brown/60 to-transparent" />
            {/* substituir por: <img src="/screenshots/[slug].jpg" ... /> */}
          </>
        )}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-colors duration-500 flex items-center justify-center">
          <span className="text-ponira-yellow font-body text-xs uppercase tracking-widest border border-ponira-yellow/40 px-4 py-2 rounded-full backdrop-blur-sm bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {project.label} ↗
          </span>
        </div>
      </a>

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
        <div className="mt-4">
          <span className="text-[10px] font-mono text-ponira-white/20 uppercase tracking-tighter">
            {project.tech}
          </span>
        </div>
      </div>
    </motion.div>
  );
}

function SectionDivider({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-6 mb-16">
      <span className="text-ponira-yellow font-body text-[9px] uppercase tracking-[0.4em] font-bold opacity-60 whitespace-nowrap">
        {label}
      </span>
      <div className="flex-1 h-px bg-ponira-white/5" />
    </div>
  );
}

export default function Showcase() {
  return (
    <section id="showcase" className="py-32 px-6 max-w-7xl mx-auto">

      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-6">
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

      {/* Studio & Creative */}
      <div className="mb-32">
        <SectionDivider label="Studio & Creative / Alma & Sopro" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-20">
          {studioProjects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>

      {/* Systems */}
      <div>
        <SectionDivider label="Systems / Corpo" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-20">
          {systemsProjects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>

    </section>
  );
}