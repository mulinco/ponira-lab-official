"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, ReactNode } from "react";

interface RevealSectionProps {
  children: ReactNode;
}

export default function RevealSection({ children }: RevealSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    // Começa a monitorar quando o topo da seção entra no fundo da tela
    // e termina quando o fundo da seção sai pelo topo.
    offset: ["start end", "end start"],
  });

  // Mapeamos o progresso: 
  // 0% (entrando) -> Blur 10px / Opacity 0
  // 50% (no centro) -> Blur 0px / Opacity 1
  // 100% (saindo) -> Blur 10px / Opacity 0
  const blurValue = useTransform(scrollYProgress, [0, 0.4, 0.6, 1], ["blur(8px)", "blur(0px)", "blur(0px)", "blur(8px)"]);
  const opacityValue = useTransform(scrollYProgress, [0, 0.4, 0.6, 1], [0, 1, 1, 0]);
  const scaleValue = useTransform(scrollYProgress, [0, 0.4, 0.6, 1], [0.9, 1, 1, 0.9]);

  return (
    <motion.div
      ref={sectionRef}
      style={{ 
        filter: blurValue, 
        opacity: opacityValue,
        scale: scaleValue
      }}
      className="w-full"
    >
      {children}
    </motion.div>
  );
}