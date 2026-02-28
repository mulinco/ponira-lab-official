import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next"

export const metadata: Metadata = {
  title: "Ponira Lab | Design & Development",
  description: "Onde a alma do design encontra o corpo da tecnologia.",
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