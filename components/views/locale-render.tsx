import type { ReactNode } from "react"
import { HomeView } from "@/components/views/home-view"
import { ContactSection } from "@/components/views/contact-section"
import { EspecialidadesHubView } from "@/components/views/especialidades-hub-view"
import { EspecialidadeView } from "@/components/views/especialidade-view"
import { CurriculoView } from "@/components/views/curriculo-view"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { WhatsAppFloat } from "@/components/layout/whatsapp-float"
import {
  JsonLd,
  breadcrumbSchema,
  faqSchema,
  psychologistSchema,
  serviceSchema,
} from "@/lib/seo/schema"
import {
  PAGES,
  especialidadeAlternates,
  especialidadePath,
  pagePath,
  type Resolved,
} from "@/lib/i18n/routes"
import { getEspecialidadeByKey } from "@/lib/especialidades/registry"
import type { Locale, MaybeLocalized } from "@/lib/i18n/locales"
import { chrome } from "@/lib/i18n/chrome"
import { assuntoEspecialidade } from "@/lib/whatsapp"

/**
 * Renderização compartilhada das rotas de inglês e espanhol.
 *
 * As três rotas de /en e /es (home, hub, especialidade) chamam esta função
 * com o alvo já resolvido pelo mapa de slugs. Mantém uma composição só —
 * não há uma versão da home para PT e outra para EN.
 */
export function renderLocalePage(locale: Locale, target: Resolved) {
  const c = chrome(locale)

  if (target.type === "home") {
    return (
      <Shell locale={locale} alternates={PAGES.home} origem="home">
        <HomeView locale={locale} />
        <ContactSection locale={locale} />
        <JsonLd data={[psychologistSchema(locale)]} />
      </Shell>
    )
  }

  if (target.type === "curriculo") {
    return (
      <Shell locale={locale} alternates={PAGES.curriculo} origem="curriculo">
        <CurriculoView locale={locale} />
      </Shell>
    )
  }

  if (target.type === "especialidades") {
    return (
      <Shell locale={locale} alternates={PAGES.especialidades} origem="hub-especialidades">
        <EspecialidadesHubView locale={locale} />
        <JsonLd
          data={[
            breadcrumbSchema([
              { name: c.nav.home, url: pagePath("home", locale)! },
              { name: c.specialties.hubTitle, url: pagePath("especialidades", locale)! },
            ]),
          ]}
        />
      </Shell>
    )
  }

  const e = getEspecialidadeByKey(target.key)!
  const url = especialidadePath(e.key, locale)!

  return (
    <Shell
      locale={locale}
      alternates={especialidadeAlternates(e.key)}
      origem={`especialidade:${e.key}`}
      assunto={assuntoEspecialidade(locale, e.titulo[locale])}
    >
      <EspecialidadeView e={e} locale={locale} />
      <JsonLd
        data={[
          serviceSchema(e, locale, url),
          faqSchema(e.faq[locale]),
          breadcrumbSchema([
            { name: c.nav.home, url: pagePath("home", locale)! },
            { name: c.specialties.hubTitle, url: pagePath("especialidades", locale)! },
            { name: e.titulo[locale], url },
          ]),
        ]}
      />
    </Shell>
  )
}

function Shell({
  locale,
  alternates,
  origem,
  assunto,
  children,
}: {
  locale: Locale
  alternates: MaybeLocalized<string>
  origem: string
  assunto?: string
  children: ReactNode
}) {
  return (
    <>
      <Header locale={locale} alternates={alternates} />
      <main>{children}</main>
      <Footer locale={locale} />
      <WhatsAppFloat locale={locale} origem={origem} assunto={assunto} />
    </>
  )
}
