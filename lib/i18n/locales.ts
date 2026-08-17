/**
 * Idiomas do site.
 *
 * Português vive na raiz, sem prefixo — preserva as URLs já indexadas.
 * Inglês em /en, espanhol em /es. x-default aponta para o português.
 *
 * Regra do § 6.4 do plano: uma página só existe num idioma se estiver
 * completa e revisada nele. Nada de tradução parcial no ar.
 */

export const LOCALES = ["pt", "en", "es"] as const
export type Locale = (typeof LOCALES)[number]

export const DEFAULT_LOCALE: Locale = "pt"

/** Locales que carregam prefixo na URL. */
export const PREFIXED_LOCALES = LOCALES.filter((l) => l !== DEFAULT_LOCALE) as Exclude<Locale, "pt">[]

/** Valor do atributo lang / hreflang de cada idioma. */
export const HTML_LANG: Record<Locale, string> = {
  pt: "pt-BR",
  en: "en",
  es: "es",
}

export const LOCALE_LABEL: Record<Locale, string> = {
  pt: "Português",
  en: "English",
  es: "Español",
}

/** Rótulo curto do seletor de idioma. */
export const LOCALE_SHORT: Record<Locale, string> = {
  pt: "PT",
  en: "EN",
  es: "ES",
}

export type Localized<T> = Record<Locale, T>

/** Um valor que pode não existir em algum idioma. */
export type MaybeLocalized<T> = Record<Locale, T | null>

export function isLocale(value: string | undefined): value is Locale {
  return !!value && (LOCALES as readonly string[]).includes(value)
}

/** Prefixo de URL do idioma: "" para pt, "/en", "/es". */
export function localePrefix(locale: Locale): string {
  return locale === DEFAULT_LOCALE ? "" : `/${locale}`
}

export const SITE_URL = "https://www.carlianelopes.com.br"

export function absoluteUrl(path: string): string {
  return `${SITE_URL}${path === "/" ? "" : path}`
}
