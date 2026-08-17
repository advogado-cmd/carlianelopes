import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { chrome } from "@/lib/i18n/chrome"
import { especialidadePath } from "@/lib/i18n/routes"
import type { Locale } from "@/lib/i18n/locales"
import { hubsWithContent, listByHub } from "@/lib/especialidades/registry"

/**
 * Hub de especialidades.
 *
 * A grade é gerada do registry, por hub — garante que nenhuma página fique
 * órfã e que tudo esteja a dois cliques da home. Um hub sem conteúdo
 * publicado no idioma simplesmente não aparece.
 */
export function EspecialidadesHubView({ locale }: { locale: Locale }) {
  const c = chrome(locale)
  const hubs = hubsWithContent(locale)

  return (
    <>
      <section className="bg-cream">
        <div className="container mx-auto px-4 py-16 sm:py-20">
          <span className="eyebrow">{c.home.specialtiesEyebrow}</span>
          <span className="rule-gold my-4" />
          <h1 className="text-[clamp(2rem,4.6vw,2.9rem)]">{c.specialties.hubTitle}</h1>
          <p className="mt-4 max-w-[60ch] text-[17px] leading-relaxed text-foreground">
            {c.specialties.hubSub}
          </p>
        </div>
      </section>

      {hubs.map((hub, index) => (
        <section key={hub} className={index % 2 === 0 ? "bg-card" : "bg-cream-2"}>
          <div className="container mx-auto px-4 py-14">
            <h2 className="font-sans text-[12px] font-bold uppercase tracking-[0.18em] text-eyebrow">
              {c.specialties.hubs[hub]}
            </h2>
            <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {listByHub(hub, locale).map((e) => {
                const href = especialidadePath(e.key, locale)
                if (!href) return null
                return (
                  <li key={e.key}>
                    <Link
                      href={href}
                      className="group flex h-full flex-col rounded-[--radius] border border-line bg-cream p-6 transition-colors hover:border-wing"
                    >
                      <h3 className="font-serif text-[21px]">{e.titulo[locale]}</h3>
                      <p className="mt-2 grow text-[14.5px] leading-relaxed text-muted-foreground">
                        {e.hero[locale].sub}
                      </p>
                      <span className="mt-5 inline-flex items-center gap-1.5 text-[13.5px] font-semibold text-wing-deep">
                        {c.cta.readMore}
                        <ArrowRight
                          className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5"
                          aria-hidden
                        />
                      </span>
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div>
        </section>
      ))}
    </>
  )
}
