"use client";

import { motion } from "framer-motion";
import dynamic from "next/dynamic";

const AnimatedTestimonials = dynamic(
  () => import("@/components/ui/animated-testimonials").then(m => m.AnimatedTestimonials),
  { ssr: false }
);

const testimonials = [
  {
    quote:
      "A Ponira Lab não entregou só um site — entregou uma identidade. O LBEM finalmente tem uma presença digital à altura da nossa pesquisa.",
    name: "Beatriz Mello",
    designation: "Pesquisadora Principal · LBEM / UFRJ",
    src: "/testimonials/beatriz-mello.jpg",
  },
  {
    quote:
      "Trabalhar com a Ponira foi diferente de qualquer agência que já contratamos. Elas entenderam o negócio antes de abrir qualquer ferramenta.",
    name: "Cliente",
    designation: "Studio Lab",
    src: "/testimonials/placeholder-1.jpg",
  },
  {
    quote:
      "O resultado superou todas as expectativas. O processo foi transparente, o prazo foi cumprido e o produto final é exatamente o que precisávamos.",
    name: "Cliente",
    designation: "Systems Lab",
    src: "/testimonials/placeholder-2.jpg",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 px-6 border-t border-ponira-white/5">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mb-4"
        >
          <span className="text-ponira-yellow font-body text-[10px] uppercase tracking-[0.5em] font-bold opacity-60 block mb-4">
            Depoimentos
          </span>
          <h2 className="text-4xl md:text-6xl font-display italic text-ponira-white leading-tight max-w-xl">
            O que dizem sobre o trabalho.
          </h2>
        </motion.div>

        <AnimatedTestimonials testimonials={testimonials} autoplay={true} />
      </div>
    </section>
  );
}