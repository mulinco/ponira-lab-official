import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";

export const metadata: Metadata = {
  metadataBase: new URL("https://poniralab.com"),
  title: {
    default: "Ponira Lab — Design, Branding & Development",
    template: "%s | Ponira Lab",
  },
  description:
    "Agência boutique carioca com três frentes: Studio (design & branding), Creative (social media) e Systems (desenvolvimento & automação). Onde a alma do design encontra o corpo da tecnologia.",
  keywords: [
    "agência de design",
    "branding",
    "identidade visual",
    "social media",
    "desenvolvimento web",
    "Next.js",
    "Rio de Janeiro",
    "Ponira Lab",
  ],
  authors: [{ name: "Ponira Lab", url: "https://poniralab.com" }],
  creator: "Ponira Lab",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://poniralab.com",
    siteName: "Ponira Lab",
    title: "Ponira Lab — Design, Branding & Development",
    description:
      "Agência boutique carioca com três frentes: Studio, Creative e Systems. Corpo, Alma & Sopro.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Ponira Lab — Design, Branding & Development",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ponira Lab — Design, Branding & Development",
    description:
      "Agência boutique carioca com três frentes: Studio, Creative e Systems.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br" className="scroll-smooth">
      <body className="antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  );
}