import type { Metadata } from "next";
import ContatoClient from "./ContatoClient";

export const metadata: Metadata = {
  title: "Contato",
  description:
    "Inicie um projeto com a Ponira Lab. Design, branding, social media e desenvolvimento — preencha o formulário ou chame no WhatsApp.",
  openGraph: {
    title: "Contato | Ponira Lab",
    description:
      "Inicie um projeto com a Ponira Lab. Respondemos em até 24h úteis.",
    url: "https://poniralab.com/contato",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
};

export default function ContatoPage() {
  return <ContatoClient />;
}