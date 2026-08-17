import type { MetadataRoute } from "next"
import { SITE_URL } from "@/lib/i18n/locales"

/**
 * robots.txt
 *
 * Libera buscadores, bloqueia scrapers de treino de IA. O site antigo não
 * tinha robots.ts — e app sem robots é app que aceita tudo por omissão.
 */
const AI_SCRAPERS = ["CCBot", "GPTBot", "ClaudeBot", "anthropic-ai", "Google-Extended", "Applebot-Extended", "Bytespider", "Omgilibot"]

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/", disallow: ["/api/"] },
      ...AI_SCRAPERS.map((userAgent) => ({ userAgent, disallow: "/" })),
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  }
}
