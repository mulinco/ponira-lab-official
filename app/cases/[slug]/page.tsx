import type { Metadata } from "next";
import { getCaseBySlug, cases, labMeta } from "@/lib/cases";
import CaseClient from "./CaseClient";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const c = getCaseBySlug(slug);

  if (!c) {
    return { title: "Case não encontrado" };
  }

  return {
    title: c.title,
    description: `${c.subtitle} — ${c.category}, ${c.year}. Um case do ${labMeta[c.lab].label} da Ponira Lab.`,
    openGraph: {
      title: `${c.title} | Ponira Lab`,
      description: `${c.subtitle} — ${c.category}, ${c.year}.`,
      url: `https://poniralab.com/cases/${c.slug}`,
      images: c.cover
        ? [{ url: c.cover, width: 1200, height: 630, alt: c.title }]
        : [{ url: "/og-image.png", width: 1200, height: 630 }],
    },
  };
}

export function generateStaticParams() {
  return cases.map((c) => ({ slug: c.slug }));
}

export default function CasePage({ params }: Props) {
  return <CaseClient params={params} />;
}