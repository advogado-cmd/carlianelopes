import { chrome } from "@/lib/i18n/chrome"
import { HTML_LANG, absoluteUrl, type Locale } from "@/lib/i18n/locales"
import type { Especialidade } from "@/lib/especialidades/registry"

/**
 * Geradores de JSON-LD.
 *
 * `Person` carrega `knowsLanguage` e o CRP como `identifier` — é o que
 * comunica ao buscador que existe atendimento em três idiomas e que há
 * registro profissional verificável.
 */

const PROFESSIONAL = {
  "@type": "Person",
  name: "Carliane Lopes de Oliveira",
  jobTitle: "Psicóloga",
  identifier: "CRP 02/12727",
  knowsLanguage: ["pt-BR", "en", "es"],
  alumniOf: { "@type": "CollegeOrUniversity", name: "ESUDA — Faculdade de Ciências Humanas" },
  url: absoluteUrl("/"),
}

const ADDRESS = {
  "@type": "PostalAddress",
  streetAddress: "Av. Engenheiro Domingos Ferreira, 890, sl. 204",
  addressLocality: "Recife",
  addressRegion: "PE",
  postalCode: "51011-050",
  addressCountry: "BR",
}

export function psychologistSchema(locale: Locale) {
  const c = chrome(locale)
  return {
    "@context": "https://schema.org",
    "@type": "Psychologist",
    name: "Carliane Lopes de Oliveira",
    description: c.home.heroSub,
    url: absoluteUrl(locale === "pt" ? "/" : `/${locale}`),
    inLanguage: HTML_LANG[locale],
    address: ADDRESS,
    areaServed: [
      { "@type": "Country", name: "Brasil" },
      { "@type": "Place", name: "Atendimento online internacional" },
    ],
    availableLanguage: ["pt-BR", "en", "es"],
    founder: PROFESSIONAL,
    employee: PROFESSIONAL,
    telephone: "+55-81-98512-2022",
    email: "contato@carlianelopes.com.br",
  }
}

export function serviceSchema(e: Especialidade, locale: Locale, url: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: e.titulo[locale],
    description: e.seo[locale].description,
    url: absoluteUrl(url),
    inLanguage: HTML_LANG[locale],
    serviceType: e.titulo[locale],
    provider: { "@type": "Psychologist", name: "Carliane Lopes de Oliveira", address: ADDRESS },
    availableChannel: e.modalidade.map((m) =>
      m === "online"
        ? { "@type": "ServiceChannel", serviceUrl: absoluteUrl(url), name: "Online" }
        : { "@type": "ServiceChannel", servicePostalAddress: ADDRESS, name: "Presencial" },
    ),
  }
}

export function faqSchema(faq: { q: string; a: string }[]) {
  if (faq.length === 0) return null
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((qa) => ({
      "@type": "Question",
      name: qa.q,
      acceptedAnswer: { "@type": "Answer", text: qa.a },
    })),
  }
}

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: absoluteUrl(item.url),
    })),
  }
}

/** Renderiza um ou mais blocos de JSON-LD. */
export function JsonLd({ data }: { data: (object | null)[] }) {
  const blocks = data.filter(Boolean) as object[]
  return (
    <>
      {blocks.map((block, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(block) }}
        />
      ))}
    </>
  )
}
