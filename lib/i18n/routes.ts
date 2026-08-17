import { ESPECIALIDADES } from "@/lib/especialidades/registry"
import {
  LOCALES,
  SITE_URL,
  absoluteUrl,
  type Locale,
  type MaybeLocalized,
} from "./locales"

/**
 * Mapa de rotas localizadas.
 *
 * O slug traduzido vale mais que a consistência do path: quem busca em
 * espanhol digita "ansiedad", não "ansiedade". Este arquivo é a única
 * fonte que sabe traduzir uma página de um idioma para outro — é o que
 * garante que o seletor de idioma leve à MESMA página, e não à home.
 *
 * `null` = a página não existe naquele idioma. Nesse caso ela não entra
 * no hreflang, não entra no sitemap daquele idioma e a rota devolve 404.
 */

export type PageKey =
  | "home"
  | "especialidades"
  | "terapia-sem-fronteiras"
  | "avaliacao-psicologica"
  | "blog"
  | "privacidade"

export const PAGES: Record<PageKey, MaybeLocalized<string>> = {
  home: { pt: "/", en: "/en", es: "/es" },
  especialidades: {
    pt: "/especialidades",
    en: "/en/specialties",
    es: "/es/especialidades",
  },
  // Páginas ainda em português apenas — migram na fase 2 (§ 6.7 do plano).
  "terapia-sem-fronteiras": { pt: "/terapia-sem-fronteiras", en: null, es: null },
  "avaliacao-psicologica": { pt: "/avaliacao-psicologica", en: null, es: null },
  blog: { pt: "/blog", en: null, es: null },
  privacidade: { pt: "/privacidade", en: null, es: null },
}

/** Segmento de "especialidades" em cada idioma, já com o prefixo do locale. */
const ESPECIALIDADES_BASE: Record<Locale, string> = {
  pt: "/especialidades",
  en: "/en/specialties",
  es: "/es/especialidades",
}

export function pagePath(key: PageKey, locale: Locale): string | null {
  return PAGES[key][locale]
}

/** Caminho de uma especialidade num idioma, ou null se não publicada nele. */
export function especialidadePath(key: string, locale: Locale): string | null {
  const e = ESPECIALIDADES.find((x) => x.key === key)
  if (!e || !e.publicado[locale]) return null
  return `${ESPECIALIDADES_BASE[locale]}/${e.slug[locale]}`
}

/** Todos os caminhos de uma especialidade, por idioma. */
export function especialidadeAlternates(key: string): MaybeLocalized<string> {
  return {
    pt: especialidadePath(key, "pt"),
    en: especialidadePath(key, "en"),
    es: especialidadePath(key, "es"),
  }
}

/* ── resolução de rota (usada pelo catch-all de /en e /es) ────────────── */

export type Resolved =
  | { type: "home" }
  | { type: "especialidades" }
  | { type: "especialidade"; key: string }

/**
 * Traduz (locale, segmentos) na página correspondente.
 * Devolve null quando não há rota — o catch-all então chama notFound().
 */
export function resolveLocalePath(locale: Locale, segments: string[] = []): Resolved | null {
  if (segments.length === 0) return { type: "home" }

  const base = ESPECIALIDADES_BASE[locale].split("/").pop()! // specialties | especialidades

  if (segments[0] !== base) return null
  if (segments.length === 1) return { type: "especialidades" }
  if (segments.length === 2) {
    const e = ESPECIALIDADES.find((x) => x.publicado[locale] && x.slug[locale] === segments[1])
    return e ? { type: "especialidade", key: e.key } : null
  }
  return null
}

/* ── metadados: canonical + hreflang ─────────────────────────────────── */

/**
 * Emite hreflang APENAS para os idiomas em que a página existe.
 * Hreflang apontando para 404 faz o Search Console descartar o grupo inteiro.
 */
export function alternatesMetadata(paths: MaybeLocalized<string>, locale: Locale) {
  const languages: Record<string, string> = {}
  if (paths.pt) {
    languages["pt-BR"] = absoluteUrl(paths.pt)
    languages["x-default"] = absoluteUrl(paths.pt)
  }
  if (paths.en) languages["en"] = absoluteUrl(paths.en)
  if (paths.es) languages["es"] = absoluteUrl(paths.es)

  const self = paths[locale]
  return {
    canonical: self ? absoluteUrl(self) : SITE_URL,
    languages,
  }
}

/** Todos os caminhos publicados de um idioma — alimenta o sitemap daquele idioma. */
export function allPathsFor(locale: Locale): string[] {
  const paths: string[] = []
  for (const key of Object.keys(PAGES) as PageKey[]) {
    const p = PAGES[key][locale]
    if (p) paths.push(p)
  }
  for (const e of ESPECIALIDADES) {
    const p = especialidadePath(e.key, locale)
    if (p) paths.push(p)
  }
  return paths
}

export function allLocalePaths(): { locale: Locale; path: string }[] {
  return LOCALES.flatMap((locale) => allPathsFor(locale).map((path) => ({ locale, path })))
}
