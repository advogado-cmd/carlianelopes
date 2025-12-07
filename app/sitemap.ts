import type { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://carlianelopes.com.br"

  // Páginas estáticas
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/terapia-sem-fronteiras`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/avaliacao-psicologica`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/privacidade`,
      lastModified: new Date(),
      changeFrequency: "yearly" as const,
      priority: 0.3,
    },
  ]

  // Artigos do blog
  const blogSlugs = [
    "constelacao-familiar-cura-padroes",
    "saude-mental-trabalho",
    "terapia-casal-comunicacao",
    "ansiedade-depressao-sinais-tratamento",
    "gestao-crises-traumas",
    "autismo-tea-aba",
    "constelacao-sistemica",
    "saude-mental-corporativa",
  ]

  const blogPages = blogSlugs.map((slug) => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }))

  return [...staticPages, ...blogPages]
}
