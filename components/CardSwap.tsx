"use client";

import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";

export interface SwapCard {
  id: string;
  content: React.ReactNode;
}

interface CardSwapProps {
  cards: SwapCard[];
  autoPlay?: boolean;
  interval?: number;
  onCardChange?: (index: number) => void;
  className?: string;
}

export default function CardSwap({
  cards,
  autoPlay = true,
  interval = 3200,
  onCardChange,
  className = "",
}: CardSwapProps) {
  const [stack, setStack] = useState<number[]>(cards.map((_, i) => i));

  const swap = useCallback(() => {
    setStack((prev) => {
      const next = [...prev];
      const front = next.shift()!;
      next.push(front);
      onCardChange?.(next[0]);
      return next;
    });
  }, [onCardChange]);

  useEffect(() => {
    if (!autoPlay) return;
    const timer = setInterval(swap, interval);
    return () => clearInterval(timer);
  }, [autoPlay, interval, swap]);

  const total = cards.length;

  return (
    <div
      className={`relative w-full ${className}`}
      style={{ perspective: "1200px" }}
    >
      {[...stack].reverse().map((cardIndex, reversedPos) => {
        const position = total - 1 - reversedPos;
        const isTop = position === 0;

        return (
          <motion.div
            key={cards[cardIndex].id}
            animate={{
              y: position * 16,
              scale: 1 - position * 0.045,
              rotateX: position * 3,
              opacity: 1 - position * 0.12,
            }}
            transition={{ type: "spring", stiffness: 280, damping: 28 }}
            style={{
              zIndex: total - position,
              position: isTop ? "relative" : "absolute",
              top: 0,
              left: 0,
              right: 0,
              transformOrigin: "center top",
              cursor: isTop ? "pointer" : "default",
            }}
            onClick={isTop ? swap : undefined}
            whileHover={
              isTop ? { scale: (1 - position * 0.045) * 1.015 } : undefined
            }
          >
            {cards[cardIndex].content}
          </motion.div>
        );
      })}
    </div>
  );
}
