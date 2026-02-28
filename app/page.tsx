"use client";
import Navbar from "@/app/components/Navbar";
import Hero from "@/app/components/Hero";
import Manifesto from "@/app/components/Manifesto";
import Labs from "@/app/components/Labs";
import Showcase from "@/app/components/Showcase";
import CrossLab from "@/app/components/CrossLab";
import Founders from "@/app/components/Founders";
import Footer from "@/app/components/Footer";
import Grainient from "../Grainient";
import SectionReveal from "./components/Sectionreveal";
import ViewportBlur from "./components/ViewportBlur";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-ponira-brown overflow-x-hidden">

      {/* Fundo animado */}
      <div className="fixed inset-0 z-0">
        <Grainient
          color1="#5a5539"
          color2="#3b2e0f"
          color3="#9b682a"
        />
      </div>

      {/* Blur periférico da base */}
      <ViewportBlur />

      <div className="relative z-10">
        <Navbar />

        {/* Hero tem lógica própria de saída — não envolve */}
        <Hero />

        <SectionReveal>
          <Manifesto />
        </SectionReveal>

        <SectionReveal>
          <Labs />
        </SectionReveal>

        <SectionReveal exitAt={0.92}>
          <Showcase />
        </SectionReveal>

        <SectionReveal exitAt={0.92}>
          <CrossLab />
        </SectionReveal>

        <SectionReveal exitAt={0.88}>
          <Founders />
        </SectionReveal>

        <Footer />
      </div>

    </main>
  );
}