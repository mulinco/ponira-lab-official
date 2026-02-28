"use client";

import React from "react";
import { notFound } from "next/navigation";
import { motion } from "framer-motion";
import Link from "next/link";
import Grainient from "@/Grainient";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import ViewportBlur from "@/app/components/ViewportBlur";
import { getCaseBySlug, cases, labMeta } from "@/lib/cases";
import type { Metadata } from "next";
interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const c = getCaseBySlug(slug);

  if (!c) {
    return {
      title: "Case não encontrado",
    };
  }

  return {
    title: c.title,
    description: `${c.subtitle} — ${c.category}, ${c.year}. Um case do ${labMeta[c.lab].label} da Ponira Lab.`,
    openGraph: {
      title: `${c.title} | Ponira Lab`,
      description: `${c.subtitle} — ${c.category}, ${c.year}.`,
      url: `https://poniralab.com/cases/${c.slug}`,
      images: c.cover
        ? [{ url: c.cover, width: 1200, height: 630, alt: c.title }]
        : [{ url: "/og-image.png", width: 1200, height: 630 }],
    },
  };
}

interface Props {
  params: Promise<{ slug: string }>;
}

export default function CasePage({ params }: Props) {
  const { slug } = React.use(params);
  const c = getCaseBySlug(slug);
  if (!c) notFound();

  // Próximo case
  const currentIndex = cases.findIndex((x) => x.slug === c.slug);
  const next = cases[(currentIndex + 1) % cases.length];

  return (
    <main className="relative min-h-screen bg-ponira-brown overflow-x-hidden">
      <div className="fixed inset-0 z-0">
        <Grainient color1="#5a5539" color2="#3b2e0f" color3="#9b682a" />
      </div>

      <ViewportBlur />

      <div className="relative z-10">
        <Navbar />

        {/* ── HERO DO CASE ── */}
        <section className="pt-40 pb-0 px-6 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            {/* Breadcrumb */}
            <div className="flex items-center gap-3 mb-10">
              <Link
                href="/cases"
                className="text-ponira-white/30 hover:text-ponira-yellow font-body text-[10px] uppercase tracking-widest transition-colors"
              >
                ← Cases
              </Link>
              <span className="text-ponira-white/10 font-body text-[10px]">/</span>
              <span className="text-ponira-yellow font-body text-[10px] uppercase tracking-widest">
                {labMeta[c.lab].label}
              </span>
            </div>

            <span className="text-ponira-yellow font-body text-[10px] uppercase tracking-[0.5em] font-bold opacity-60 block mb-4">
              {c.category} · {c.year}
            </span>
            <h1 className="text-5xl md:text-8xl font-display italic text-ponira-white leading-none mb-4">
              {c.title}
            </h1>
            <p className="text-ponira-white/50 font-body font-light text-xl max-w-2xl leading-relaxed">
              {c.subtitle}
            </p>
          </motion.div>

          {/* Cover image */}
          {c.cover && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="w-full aspect-video overflow-hidden rounded-sm border border-ponira-white/5"
            >
              <img
                src={c.cover}
                alt={c.title}
                className="w-full h-full object-cover object-top"
              />
            </motion.div>
          )}
        </section>

        {/* ── CONTEÚDO ── */}
        <section className="py-24 px-6 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-16">

            {/* Sidebar — tools */}
            <aside className="md:col-span-3 space-y-10">
              <div>
                <span className="text-ponira-white/20 font-body text-[9px] uppercase tracking-widest block mb-4">
                  Ferramentas
                </span>
                <ul className="space-y-2">
                  {c.tools.map((t) => (
                    <li key={t} className="text-ponira-white/60 font-body text-sm font-light">
                      {t}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <span className="text-ponira-white/20 font-body text-[9px] uppercase tracking-widest block mb-4">
                  Frente
                </span>
                <p className="text-ponira-white/60 font-body text-sm font-light">
                  {labMeta[c.lab].label}
                </p>
                <p className="text-ponira-white/30 font-body text-xs font-light mt-1">
                  {labMeta[c.lab].description}
                </p>
              </div>

              {c.externalUrl && (
                <a
                  href={c.externalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-ponira-yellow font-body text-[10px] uppercase tracking-widest hover:gap-3 transition-all duration-300"
                >
                  {c.externalLabel} ↗
                </a>
              )}
            </aside>

            {/* Corpo do case */}
            <div className="md:col-span-9 space-y-20">

              {/* Contexto */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
              >
                <span className="text-ponira-yellow font-body text-[9px] uppercase tracking-[0.4em] font-bold opacity-60 block mb-6">
                  01 / Contexto
                </span>
                <p className="text-ponira-white/80 font-body font-light text-xl leading-relaxed max-w-2xl">
                  {c.context}
                </p>
              </motion.div>

              {/* Galeria — primeiras imagens (após cover) */}
              {c.images.length > 1 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7 }}
                  viewport={{ once: true }}
                  className="grid grid-cols-1 md:grid-cols-2 gap-4"
                >
                  {c.images.slice(1, 3).map((img, i) => (
                    <div
                      key={i}
                      className="aspect-square overflow-hidden rounded-sm border border-ponira-white/5"
                    >
                      <img
                        src={img}
                        alt=""
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                      />
                    </div>
                  ))}
                </motion.div>
              )}

              {/* Processo */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
              >
                <span className="text-ponira-yellow font-body text-[9px] uppercase tracking-[0.4em] font-bold opacity-60 block mb-6">
                  02 / Processo
                </span>
                <p className="text-ponira-white/80 font-body font-light text-xl leading-relaxed max-w-2xl">
                  {c.process}
                </p>
              </motion.div>

              {/* Galeria — imagens intermediárias */}
              {c.images.length > 3 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7 }}
                  viewport={{ once: true }}
                  className="grid grid-cols-1 gap-4"
                >
                  {c.images.slice(3, 7).map((img, i) => (
                    <div
                      key={i}
                      className="w-full overflow-hidden rounded-sm border border-ponira-white/5"
                    >
                      <img
                        src={img}
                        alt=""
                        className="w-full object-cover hover:scale-[1.02] transition-transform duration-700"
                      />
                    </div>
                  ))}
                </motion.div>
              )}

              {/* Resultado */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
              >
                <span className="text-ponira-yellow font-body text-[9px] uppercase tracking-[0.4em] font-bold opacity-60 block mb-6">
                  03 / Resultado
                </span>
                <p className="text-ponira-white/80 font-body font-light text-xl leading-relaxed max-w-2xl">
                  {c.result}
                </p>
              </motion.div>

              {/* Galeria — imagens finais */}
              {c.images.length > 7 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7 }}
                  viewport={{ once: true }}
                  className="grid grid-cols-2 gap-4"
                >
                  {c.images.slice(7).map((img, i) => (
                    <div
                      key={i}
                      className="overflow-hidden rounded-sm border border-ponira-white/5"
                    >
                      <img
                        src={img}
                        alt=""
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                      />
                    </div>
                  ))}
                </motion.div>
              )}

            </div>
          </div>
        </section>

        {/* ── PRÓXIMO CASE ── */}
        <section className="py-24 px-6 border-t border-ponira-white/5">
          <div className="max-w-7xl mx-auto">
            <span className="text-ponira-white/20 font-body text-[9px] uppercase tracking-widest block mb-8">
              Próximo Case
            </span>
            <Link
              href={`/cases/${next.slug}`}
              className="group flex items-end justify-between gap-6"
            >
              <div>
                <span className="text-ponira-yellow font-body text-[10px] uppercase tracking-[0.3em] font-bold opacity-60 block mb-3">
                  {next.category}
                </span>
                <h2 className="text-4xl md:text-6xl font-display italic text-ponira-white group-hover:translate-x-3 transition-transform duration-500">
                  {next.title}
                </h2>
              </div>
              <span className="text-ponira-yellow text-4xl group-hover:translate-x-2 transition-transform duration-300 shrink-0 mb-2">
                →
              </span>
            </Link>
          </div>
        </section>

        <Footer />
      </div>
    </main>
  );
}