"use client";
import { motion, Variants } from "framer-motion";
import Grainient from "../../Grainient";

export default function SectionDivider() {
  const wavePath = "M0,192L48,176C96,160,192,128,288,138.7C384,149,480,203,576,229.3C672,256,768,256,864,218.7C960,181,1056,107,1152,106.7C1248,107,1344,181,1392,218.7L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z";

const sweepVariants: Variants = {
  initial: { 
    x: "-100%" // Começa totalmente escondido à esquerda
  },
  animate: {
    x: "300%", // Como ele tem w-1/3, ele precisa de 300% para atravessar o pai todo
    transition: {
      repeat: Infinity,
      duration: 3,     // Ajuste a velocidade aqui (maior = mais lento)
      ease: "linear",   // Agora o TS aceita porque o objeto está tipado como Variants
      repeatDelay: 1    // Pausa elegante entre uma varredura e outra
    }
  }
};

  return (
    <div className="w-full overflow-hidden leading-[0] relative py-8"
         style={{ 
           maskImage: 'linear-gradient(to bottom, transparent, black 20%, black 80%, transparent)',
           WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 20%, black 80%, transparent)'
         }}>
      
      <div className="relative w-full h-[80px] md:h-[120px]">
        
        <svg width="0" height="0" className="absolute">
          <defs>
            <clipPath id="waveClip" clipPathUnits="objectBoundingBox">
              <path transform="scale(0.0006944, 0.003125)" d={wavePath} />
            </clipPath>
          </defs>
        </svg>

        {/* Container Principal com filtro de suavização leve */}
        <div 
          className="w-full h-full relative overflow-hidden scale-[1.01]"
          style={{ 
            clipPath: "url(#waveClip)",
            filter: "blur(0.8px)" 
          }}
        >
          {/* Fundo Base (Amber Burnt) */}
          <div className="absolute inset-0 bg-[#C68D07]" />
          
          {/* Textura Grainient */}
          <div className="absolute inset-0 opacity-40 mix-blend-overlay">
            <Grainient color1="#362e01" color2="#362600" color3="#4d2b02" />
          </div>

          {/* Efeito de Varredura */}
          <motion.div 
            variants={sweepVariants}
            initial="initial"
            animate="animate"
            className="absolute inset-0 w-1/3 h-full z-20"
            style={{
              background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)",
              skewX: "-20deg"
            }}
          />
        </div>

        {/* Aura externa pulsante suave */}
        <div className="absolute inset-0 pointer-events-none drop-shadow-[0_0_12px_rgba(198,141,7,0.3)] blur-[1.5px]" />
      </div>
    </div>
  );
}