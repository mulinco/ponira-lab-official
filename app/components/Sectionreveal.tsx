"use client";

import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

type SectionRevealProps = React.PropsWithChildren<{
  className?: string;
  /**
   * Ponto (0–1) em que o efeito de saída começa.
   * Seções curtas: 0.75 (padrão)
   * Seções longas: 0.90 ou mais — evita borrar antes do fim do conteúdo
   */
  exitAt?: number;
}>;

export default function SectionReveal({ children, className, exitAt = 0.75 }: SectionRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const blur = useTransform(
    scrollYProgress,
    [0, 0.15, exitAt, 1],
    ["blur(15px)", "blur(0px)", "blur(0px)", "blur(15px)"]
  );

  const opacity = useTransform(
    scrollYProgress,
    [0, 0.15, exitAt, 1],
    [0, 1, 1, 0]
  );

  const y = useTransform(
    scrollYProgress,
    [0, 0.15, exitAt, 1],
    ["60px", "0px", "0px", "-60px"]
  );

  return (
    <motion.div
      ref={ref}
      style={{ filter: blur, opacity, y }}
      className={className}
    >
      {children}
    </motion.div>
  );
}