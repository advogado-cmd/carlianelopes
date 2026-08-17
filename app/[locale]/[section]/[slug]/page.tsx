import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { renderLocalePage } from "@/components/views/locale-render"
import { alternatesMetadata, especialidadeAlternates, pagePath, resolveLocalePath } from "@/lib/i18n/routes"
import { PREFIXED_LOCALES, isLocale, type Locale } from "@/lib/i18n/locales"
import { ESPECIALIDADES, getEspecialidadeByKey } from "@/lib/especialidades/registry"

/**
 * Especialidade em /en/specialties/[slug] e /es/especialidades/[slug].
 *
 * Só entram os slugs marcados como publicados naquele idioma — luto e
 * crise-e-trauma, hoje `publicado: { en: false, es: false }`, devolvem 404,
 * somem do sitemap e somem do hreflang. É a regra anti-conteúdo-meia-boca.
 */
export const dynamicParams = false

export function generateStaticParams() {
  return PREFIXED_LOCALES.flatMap((locale) => {
    const path = pagePath("especialidades", locale)
    if (!path) return []
    const section = path.split("/").pop()!
    return ESPECIALIDADES.filter((e) => e.publicado[locale]).map((e) => ({
      locale,
      section,
      slug: e.slug[locale],
    }))
  })
}

async function resolve(params: Promise<{ locale: string; section: string; slug: string }>) {
  const { locale: raw, section, slug } = await params
  if (!isLocale(raw) || raw === "pt") return null
  const locale = raw as Locale
  const target = resolveLocalePath(locale, [section, slug])
  return target && target.type === "especialidade" ? { locale, target } : null
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; section: string; slug: string }>
}): Promise<Metadata> {
  const resolved = await resolve(params)
  if (!resolved || resolved.target.type !== "especialidade") return {}
  const e = getEspecialidadeByKey(resolved.target.key)
  if (!e) return {}
  return {
    title: { absolute: e.seo[resolved.locale].title },
    description: e.seo[resolved.locale].description,
    alternates: alternatesMetadata(especialidadeAlternates(e.key), resolved.locale),
  }
}

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string; section: string; slug: string }>
}) {
  const resolved = await resolve(params)
  if (!resolved) notFound()
  return renderLocalePage(resolved.locale, resolved.target)
}
