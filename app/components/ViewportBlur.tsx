"use client";

/**
 * ViewportBlur
 *
 * Overlay fixo que simula desfoque periférico da visão humana.
 * O strip do TOPO começa abaixo da navbar (--navbar-height) para não
 * interferir na legibilidade da navegação.
 * O strip da BASE cobre a borda inferior normalmente.
 */

export default function ViewportBlur() {
  return (
    <>
      {/* ── BASE ── */}
      <div
        className="fixed bottom-0 left-0 w-full z-30 pointer-events-none"
        style={{
          height: "20vh",
          backdropFilter: "blur(10px)",
          WebkitBackdropFilter: "blur(10px)",
          maskImage: "linear-gradient(to top, black 0%, black 25%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(to top, black 0%, black 25%, transparent 100%)",
        }}
      />
    </>
  );
}