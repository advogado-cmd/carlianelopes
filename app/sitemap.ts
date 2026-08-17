import type { MetadataRoute } from "next"
import { LOCALES, absoluteUrl } from "@/lib/i18n/locales"
import { allPathsFor, PAGES, especialidadePath } from "@/lib/i18n/routes"
import { ESPECIALIDADES } from "@/lib/especialidades/registry"
import { BLOG_POSTS } from "@/lib/blog/registry"

/**
 * Sitemap.
 *
 * Gerado dos registries — nunca de uma lista escrita à mão. O sitemap antigo
 * listava oito slugs de blog que não existiam no código: eram 404 anunciados
 * ao Google. Aqui, se a URL não vem do registry, ela não entra.
 *
 * Cada entrada carrega `alternates.languages` com as versões publicadas —
 * o equivalente do hreflang dentro do sitemap.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()
  const entries: MetadataRoute.Sitemap = []

  for (const locale of LOCALES) {
    for (const path of allPathsFor(locale)) {
      const isHome = path === PAGES.home[locale]
      const key = ESPECIALIDADES.find((e) => especialidadePath(e.key, locale) === path)

      const languages: Record<string, string> = {}
      for (const l of LOCALES) {
        const alt = key ? especialidadePath(key.key, l) : sameStaticPath(path, locale, l)
        if (alt) languages[l === "pt" ? "pt-BR" : l] = absoluteUrl(alt)
      }

      entries.push({
        url: absoluteUrl(path),
        lastModified: now,
        changeFrequency: isHome ? "weekly" : "monthly",
        priority: isHome ? 1 : key ? 0.8 : 0.6,
        alternates: { languages },
      })
    }
  }

  for (const post of BLOG_POSTS) {
    entries.push({
      url: absoluteUrl(`/blog/${post.slug}`),
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    })
  }

  return entries
}

/** Para páginas estáticas: o mesmo key noutro idioma. */
function sameStaticPath(path: string, from: (typeof LOCALES)[number], to: (typeof LOCALES)[number]) {
  for (const key of Object.keys(PAGES) as (keyof typeof PAGES)[]) {
    if (PAGES[key][from] === path) return PAGES[key][to]
  }
  return null
}
