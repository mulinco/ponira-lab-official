"use client";
import Grainient from "@/Grainient";
import Navbar from "@/app/components/Navbar";
import Hero from "@/app/components/Hero";
import Manifesto from "@/app/components/Manifesto";
import Labs from "@/app/components/Labs";
import Showcase from "@/app/components/Showcase";
import Founders from "@/app/components/Founders";
import Footer from "@/app/components/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-ponira-brown overflow-x-hidden">
      <div className="fixed inset-0 z-0">
        <Grainient />
      </div>

      <div className="relative z-10">
        <Navbar />
        <Hero />
        <Manifesto />
        <Labs />
        <Showcase />
        <Founders />
        <Footer /> 
      </div>
    </main>
  );
}