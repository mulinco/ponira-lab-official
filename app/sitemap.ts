import { MetadataRoute } from "next";
import { cases } from "@/lib/cases";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://poniralab.com";

  // Rotas estáticas
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${baseUrl}/cases`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/contato`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];

  // Rotas dinâmicas — um item por case
  const caseRoutes: MetadataRoute.Sitemap = cases.map((c) => ({
    url: `${baseUrl}/cases/${c.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: c.featured ? 0.8 : 0.6,
  }));

  return [...staticRoutes, ...caseRoutes];
}