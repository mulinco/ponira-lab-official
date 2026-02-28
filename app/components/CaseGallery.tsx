"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

// ─── Tipos ────────────────────────────────────────────────────────────────

interface GalleryImage {
  src: string;
  alt?: string;
}

interface CaseGalleryProps {
  images: GalleryImage[];
  layout?: "duo" | "single" | "grid";
  /** Se true, usa object-center em vez de object-top */
  centerCrop?: boolean;
}

// ─── Lightbox ─────────────────────────────────────────────────────────────

function Lightbox({
  images,
  startIndex,
  onClose,
}: {
  images: GalleryImage[];
  startIndex: number;
  onClose: () => void;
}) {
  const [current, setCurrent] = useState(startIndex);

  const prev = useCallback(() => {
    setCurrent((i) => (i - 1 + images.length) % images.length);
  }, [images.length]);

  const next = useCallback(() => {
    setCurrent((i) => (i + 1) % images.length);
  }, [images.length]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", handler);
    // Trava scroll do body enquanto lightbox está aberto
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handler);
      document.body.style.overflow = "";
    };
  }, [onClose, prev, next]);

  const hasSiblings = images.length > 1;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      className="fixed inset-0 z-[9999] flex items-center justify-center"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/92 backdrop-blur-md" />

      {/* Contador */}
      {hasSiblings && (
        <div className="absolute top-6 left-1/2 -translate-x-1/2 z-10">
          <span className="font-body text-[9px] uppercase tracking-[0.4em] text-ponira-white/30">
            {current + 1} / {images.length}
          </span>
        </div>
      )}

      {/* Fechar */}
      <button
        onClick={onClose}
        className="absolute top-6 right-6 z-10 w-9 h-9 flex items-center justify-center rounded-full border border-ponira-white/10 text-ponira-white/40 hover:text-ponira-yellow hover:border-ponira-yellow/40 transition-all duration-300 font-body text-sm"
        aria-label="Fechar"
      >
        ✕
      </button>

      {/* Imagem */}
      <motion.div
        key={current}
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.96 }}
        transition={{ duration: 0.3 }}
        className="relative z-10 max-w-[90vw] max-h-[85vh] flex items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={images[current].src}
          alt={images[current].alt ?? ""}
          className="max-w-full max-h-[85vh] w-auto h-auto object-contain rounded-sm shadow-2xl"
          style={{ boxShadow: "0 0 80px rgba(0,0,0,0.8)" }}
        />
      </motion.div>

      {/* Setas de navegação */}
      {hasSiblings && (
        <>
          <button
            onClick={(e) => { e.stopPropagation(); prev(); }}
            className="absolute left-4 md:left-8 z-10 w-11 h-11 flex items-center justify-center rounded-full border border-ponira-white/10 text-ponira-white/40 hover:text-ponira-yellow hover:border-ponira-yellow/40 transition-all duration-300 text-lg"
            aria-label="Anterior"
          >
            ←
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); next(); }}
            className="absolute right-4 md:right-8 z-10 w-11 h-11 flex items-center justify-center rounded-full border border-ponira-white/10 text-ponira-white/40 hover:text-ponira-yellow hover:border-ponira-yellow/40 transition-all duration-300 text-lg"
            aria-label="Próxima"
          >
            →
          </button>
        </>
      )}

      {/* Thumbnails */}
      {hasSiblings && (
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex gap-2">
          {images.map((img, i) => (
            <button
              key={i}
              onClick={(e) => { e.stopPropagation(); setCurrent(i); }}
              className={`w-10 h-7 overflow-hidden rounded-[2px] border transition-all duration-300 ${
                i === current
                  ? "border-ponira-yellow/60 opacity-100"
                  : "border-ponira-white/10 opacity-40 hover:opacity-70"
              }`}
            >
              <img
                src={img.src}
                alt=""
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </motion.div>
  );
}

// ─── Item de imagem individual ────────────────────────────────────────────

function GalleryItem({
  img,
  index,
  allImages,
  onOpen,
  aspectClass = "aspect-video",
  objectPosition = "center",
}: {
  img: GalleryImage;
  index: number;
  allImages: GalleryImage[];
  onOpen: (index: number) => void;
  aspectClass?: string;
  objectPosition?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.05 }}
      viewport={{ once: true }}
      className={`group relative ${aspectClass} overflow-hidden rounded-sm border border-ponira-white/5 cursor-zoom-in`}
      onClick={() => onOpen(index)}
    >
      <img
        src={img.src}
        alt={img.alt ?? ""}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
        style={{ objectPosition }}
      />

      {/* Overlay hover */}
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-400 flex items-center justify-center">
        <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-body text-[9px] uppercase tracking-widest text-ponira-white/80 border border-ponira-white/20 px-3 py-1.5 rounded-full backdrop-blur-sm bg-black/20">
          Ampliar ↗
        </span>
      </div>
    </motion.div>
  );
}

// ─── Componente principal ─────────────────────────────────────────────────

export default function CaseGallery({
  images,
  layout = "duo",
  centerCrop = false,
}: CaseGalleryProps) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  if (!images || images.length === 0) return null;

  const objectPosition = centerCrop ? "center" : "top center";

  return (
    <>
      {layout === "duo" && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {images.map((img, i) => (
            <GalleryItem
              key={i}
              img={img}
              index={i}
              allImages={images}
              onOpen={setLightboxIndex}
              aspectClass="aspect-[4/3]"
              objectPosition={objectPosition}
            />
          ))}
        </div>
      )}

      {layout === "single" && (
        <div className="flex flex-col gap-4">
          {images.map((img, i) => (
            <GalleryItem
              key={i}
              img={img}
              index={i}
              allImages={images}
              onOpen={setLightboxIndex}
              aspectClass="aspect-video"
              objectPosition={objectPosition}
            />
          ))}
        </div>
      )}

      {layout === "grid" && (
        <div className="grid grid-cols-2 gap-4">
          {images.map((img, i) => (
            <GalleryItem
              key={i}
              img={img}
              index={i}
              allImages={images}
              onOpen={setLightboxIndex}
              aspectClass="aspect-square"
              objectPosition={objectPosition}
            />
          ))}
        </div>
      )}

      <AnimatePresence>
        {lightboxIndex !== null && (
          <Lightbox
            images={images}
            startIndex={lightboxIndex}
            onClose={() => setLightboxIndex(null)}
          />
        )}
      </AnimatePresence>
    </>
  );
}