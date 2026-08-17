import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { renderLocalePage } from "@/components/views/locale-render"
import { PAGES, alternatesMetadata } from "@/lib/i18n/routes"
import { PREFIXED_LOCALES, isLocale, type Locale } from "@/lib/i18n/locales"
import { chrome } from "@/lib/i18n/chrome"

/** Home de /en e /es. Português vive na raiz e não passa por aqui. */
export const dynamicParams = false

export function generateStaticParams() {
  return PREFIXED_LOCALES.map((locale) => ({ locale }))
}

function useLocale(raw: string): Locale | null {
  return isLocale(raw) && raw !== "pt" ? raw : null
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const locale = useLocale((await params).locale)
  if (!locale) return {}
  const c = chrome(locale)
  return {
    title: { absolute: c.seo.homeTitle },
    description: c.home.heroSub,
    alternates: alternatesMetadata(PAGES.home, locale),
  }
}

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const locale = useLocale((await params).locale)
  if (!locale) notFound()
  return renderLocalePage(locale, { type: "home" })
}
