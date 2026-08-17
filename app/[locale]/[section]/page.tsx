import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { renderLocalePage } from "@/components/views/locale-render"
import { PAGES, alternatesMetadata, pagePath, resolveLocalePath } from "@/lib/i18n/routes"
import { PREFIXED_LOCALES, isLocale, type Locale } from "@/lib/i18n/locales"
import { chrome } from "@/lib/i18n/chrome"

/** Hub de especialidades em /en/specialties e /es/especialidades. */
export const dynamicParams = false

export function generateStaticParams() {
  return PREFIXED_LOCALES.flatMap((locale) => {
    const path = pagePath("especialidades", locale)
    return path ? [{ locale, section: path.split("/").pop()! }] : []
  })
}

async function resolve(params: Promise<{ locale: string; section: string }>) {
  const { locale: raw, section } = await params
  if (!isLocale(raw) || raw === "pt") return null
  const locale = raw as Locale
  const target = resolveLocalePath(locale, [section])
  return target && target.type === "especialidades" ? { locale, target } : null
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; section: string }>
}): Promise<Metadata> {
  const resolved = await resolve(params)
  if (!resolved) return {}
  const c = chrome(resolved.locale)
  return {
    title: { absolute: c.seo.hubTitle },
    description: c.specialties.hubSub,
    alternates: alternatesMetadata(PAGES.especialidades, resolved.locale),
  }
}

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string; section: string }>
}) {
  const resolved = await resolve(params)
  if (!resolved) notFound()
  return renderLocalePage(resolved.locale, resolved.target)
}
