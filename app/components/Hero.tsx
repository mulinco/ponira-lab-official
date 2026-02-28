"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const targetRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"],
  });

  const blurValue = useTransform(scrollYProgress, [0, 0.8], ["blur(0px)", "blur(15px)"]);
  const opacityValue = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const yValue = useTransform(scrollYProgress, [0, 1], ["0px", "100px"]);

  return (
    <section
      ref={targetRef}
      className="relative flex flex-col items-center justify-center min-h-screen px-4 text-center overflow-hidden"
    >
      <motion.div
        style={{ filter: blurValue, opacity: opacityValue, y: yValue }}
        className="max-w-6xl mx-auto w-full flex flex-col items-center"
      >
        <div className="mb-[-1rem] md:mb-[-2.5rem] z-20">
          <img
            src="/logo-icon.svg"
            alt="Ponira Icon"
            className="w-12 h-12 md:w-24 md:h-24 opacity-90"
          />
        </div>

        <div className="relative inline-block">
          <h1 className="text-[3.5rem] sm:text-7xl md:text-9xl lg:text-[11rem] font-display uppercase italic text-ponira-yellow leading-none">
            PONIRA
          </h1>
          <span className="absolute bottom-[-0.5rem] right-[-0.5rem] md:bottom-0 md:right-[-2rem] font-display text-xl sm:text-3xl md:text-6xl text-ponira-white uppercase italic">
            .LAB
          </span>
        </div>

        <p className="text-lg md:text-2xl text-ponira-white/80 mt-12 mb-14 max-w-2xl font-body font-light leading-relaxed">
          Onde a sensibilidade do design encontra a precisão da tecnologia.
          Sistemas que{" "}
          <span className="text-ponira-yellow font-semibold">
            automatizam sua autoridade.
          </span>
        </p>

        <a
          href="/contato"
          className="px-12 py-5 bg-ponira-yellow text-white rounded-full font-body text-sm hover:scale-105 transition shadow-2xl uppercase tracking-widest"
        >
          Iniciar Conexão
        </a>
      </motion.div>
    </section>
  );
}