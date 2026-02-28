import type { Metadata } from "next";
import { Suspense } from "react";
import CasesClient from "./CasesClient";

export const metadata: Metadata = {
  title: "Cases",
  description:
    "Portfólio completo da Ponira Lab — identidades visuais, social media, websites e automações entregues pelo Studio, Creative e Systems.",
  openGraph: {
    title: "Cases | Ponira Lab",
    description:
      "Portfólio completo da Ponira Lab — identidades visuais, social media, websites e automações.",
    url: "https://poniralab.com/cases",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
};

export default function CasesPage() {
  return (
    <Suspense>
      <CasesClient />
    </Suspense>
  );
}