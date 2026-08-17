import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { chrome } from "@/lib/i18n/chrome"
import { pagePath, especialidadePath } from "@/lib/i18n/routes"
import type { Locale } from "@/lib/i18n/locales"
import { listEspecialidades } from "@/lib/especialidades/registry"

/**
 * Home.
 *
 * A home antiga empilhava 13 seções e não conduzia ninguém. Esta tem uma
 * função só: fazer a pessoa se reconhecer e escolher uma porta.
 * Ordem: hero → espelho → duas portas → quem conduz (três provas) →
 * especialidades → Terapia sem Fronteiras.
 *
 * Alternância de fundo: creme → branco → creme-2 → navy (uma vez só).
 */
export function HomeView({ locale }: { locale: Locale }) {
  const c = chrome(locale)
  const especialidades = listEspecialidades(locale)
  const abroadHref = pagePath("terapia-sem-fronteiras", locale)

  return (
    <>
      {/* HERO */}
      <section className="bg-cream">
        <div className="container mx-auto grid items-center gap-12 px-4 py-16 sm:py-24 md:grid-cols-[1.15fr_1fr]">
          <div>
          <span className="eyebrow">{c.home.heroEyebrow}</span>
          <span className="rule-gold my-4" />
          <h1 className="max-w-[17ch] text-[clamp(2rem,5.2vw,3.25rem)]">{c.home.heroTitle}</h1>
          <p className="mt-5 max-w-[54ch] text-[17px] leading-relaxed text-foreground">{c.home.heroSub}</p>

          <div className="mt-9 flex flex-wrap gap-3">
            <Link
              href={pagePath("especialidades", locale) ?? "/"}
              className="inline-flex items-center gap-2 rounded-xl bg-navy px-6 py-3.5 text-[15px] font-semibold text-cream transition-opacity hover:opacity-90"
            >
              {c.cta.clinicalCare}
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
            {abroadHref ? (
              <Link
                href={abroadHref}
                className="inline-flex items-center gap-2 rounded-xl border-[1.5px] border-navy px-6 py-3.5 text-[15px] font-semibold text-navy transition-colors hover:bg-navy hover:text-cream"
              >
                {c.nav.abroad}
              </Link>
            ) : null}
          </div>

          <p className="mt-8 inline-flex items-center gap-2.5 rounded-full border border-line bg-cream-2 px-4 py-2 text-[12.5px] font-semibold text-navy">
            <span className="h-1.5 w-1.5 rounded-full bg-gold-light" aria-hidden />
            {c.compliance.identity} · {c.compliance.crp}
          </p>
          </div>

          <Image
            src="/images/carliane-principal.png"
            alt={
              locale === "pt"
                ? "Carliane Lopes de Oliveira, psicóloga clínica"
                : locale === "en"
                  ? "Carliane Lopes de Oliveira, clinical psychologist"
                  : "Carliane Lopes de Oliveira, psicóloga clínica"
            }
            width={620}
            height={840}
            priority
            sizes="(max-width: 768px) 100vw, 40vw"
            className="mx-auto w-full max-w-[340px] rounded-[--radius] object-cover md:max-w-none"
          />
        </div>
      </section>

      {/* ESPELHO — a seção que faz a pessoa parar */}
      <section className="bg-card">
        <div className="container mx-auto px-4 py-16 sm:py-20">
          <span className="eyebrow">{c.home.mirrorTitle}</span>
          <ul className="mt-7 grid gap-6 md:grid-cols-3">
            {c.home.mirror.map((line, i) => (
              <li key={i} className="border-t-2 border-gold-light/60 pt-5">
                <p className="font-serif text-[19px] leading-[1.6] text-navy">{line}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* AS DUAS PORTAS — a bifurcação entre método e clínica (§ 2 do Plano Diretor) */}
      <section className="bg-cream">
        <div className="container mx-auto px-4 py-16 sm:py-20">
          <span className="eyebrow">{c.home.doorsEyebrow}</span>
          <div className="mt-7 grid gap-5 md:grid-cols-2">
            <article className="flex flex-col rounded-[--radius] border border-line bg-card p-7">
              <span className="font-sans text-[11px] font-bold uppercase tracking-[0.16em] text-eyebrow">
                {c.home.doorMethodKicker}
              </span>
              <h2 className="mt-2.5 font-serif text-[26px]">{c.home.doorMethodTitle}</h2>
              <p className="mt-3 grow text-[15px] leading-relaxed text-muted-foreground">
                {c.home.doorMethodText}
              </p>
              <span className="mt-6 inline-flex w-fit items-center gap-2 rounded-xl border-[1.5px] border-line px-5 py-3 text-[14px] font-semibold text-muted-foreground">
                {locale === "pt" ? "Em breve" : locale === "en" ? "Coming soon" : "Próximamente"}
              </span>
            </article>

            <article className="flex flex-col rounded-[--radius] border border-line bg-card p-7">
              <span className="font-sans text-[11px] font-bold uppercase tracking-[0.16em] text-eyebrow">
                {c.home.doorClinicKicker}
              </span>
              <h2 className="mt-2.5 font-serif text-[26px]">{c.home.doorClinicTitle}</h2>
              <p className="mt-3 grow text-[15px] leading-relaxed text-muted-foreground">
                {c.home.doorClinicText}
              </p>
              <Link
                href={pagePath("especialidades", locale) ?? "/"}
                className="mt-6 inline-flex w-fit items-center gap-2 rounded-xl bg-navy px-5 py-3 text-[14px] font-semibold text-cream transition-opacity hover:opacity-90"
              >
                {c.cta.seeAll}
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
            </article>
          </div>
        </div>
      </section>

      {/* QUEM CONDUZ + as três provas de profundidade */}
      <section className="bg-cream-2">
        <div className="container mx-auto px-4 py-16 sm:py-20">
          <div className="grid items-start gap-10 md:grid-cols-[260px_1fr]">
            <Image
              src="/images/screenshot-202025-12-01-20at-2010.png"
              alt={
                locale === "pt"
                  ? "Retrato de Carliane Lopes de Oliveira"
                  : locale === "en"
                    ? "Portrait of Carliane Lopes de Oliveira"
                    : "Retrato de Carliane Lopes de Oliveira"
              }
              width={300}
              height={336}
              sizes="(max-width: 768px) 60vw, 300px"
              className="w-full max-w-[220px] rounded-[--radius] object-cover md:max-w-none"
            />
            <div>
              <span className="eyebrow">{c.home.whoEyebrow}</span>
              <h2 className="mt-3 text-[clamp(1.6rem,3.4vw,2.05rem)]">{c.home.whoTitle}</h2>
              <p className="mt-4 max-w-[62ch] text-[16.5px] leading-relaxed text-foreground">{c.home.whoText}</p>
              <Link
                href={pagePath("curriculo", locale) ?? "/"}
                className="mt-5 inline-flex items-center gap-2 text-[14.5px] font-semibold text-wing-deep"
              >
                {c.nav.curriculum}
                <ArrowRight className="h-3.5 w-3.5" aria-hidden />
              </Link>
            </div>
          </div>

          {/* Substitui o contador de "pacientes atendidos" (decisão de 17/ago/2026) */}
          <dl className="mt-10 grid border-y border-line sm:grid-cols-3">
            {c.proofs.map((p, i) => (
              <div
                key={p.value}
                className={`px-1 py-6 sm:px-6 ${i < c.proofs.length - 1 ? "sm:border-r sm:border-line" : ""}`}
              >
                <dt className="font-serif text-[1.75rem] leading-tight text-navy">{p.value}</dt>
                <dd className="mt-1.5 text-[13.5px] leading-snug text-muted-foreground">{p.label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ESPECIALIDADES — grade gerada do registry */}
      <section className="bg-cream">
        <div className="container mx-auto px-4 py-16 sm:py-20">
          <span className="eyebrow">{c.home.specialtiesEyebrow}</span>
          <h2 className="mt-3 text-[clamp(1.6rem,3.4vw,2.05rem)]">{c.home.specialtiesTitle}</h2>
          <p className="mt-3 max-w-[56ch] text-muted-foreground">{c.home.specialtiesSub}</p>

          <ul className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {especialidades.map((e) => {
              const href = especialidadePath(e.key, locale)
              if (!href) return null
              return (
                <li key={e.key}>
                  <Link
                    href={href}
                    className="group flex h-full flex-col rounded-[--radius] border border-line bg-card p-6 transition-colors hover:border-wing"
                  >
                    <span className="font-sans text-[11px] font-bold uppercase tracking-[0.16em] text-eyebrow">
                      {c.specialties.hubs[e.hub]}
                    </span>
                    <h3 className="mt-2 font-serif text-[21px]">{e.titulo[locale]}</h3>
                    <p className="mt-2 grow text-[14.5px] leading-relaxed text-muted-foreground">
                      {e.hero[locale].sub}
                    </p>
                    <span className="mt-5 inline-flex items-center gap-1.5 text-[13.5px] font-semibold text-wing-deep">
                      {c.cta.readMore}
                      <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" aria-hidden />
                    </span>
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
      </section>

      {/* TERAPIA SEM FRONTEIRAS — a seção navy, uma vez por página */}
      <section className="bg-navy">
        <div className="container mx-auto px-4 py-18 sm:py-24">
          <span className="font-sans text-[12px] font-semibold uppercase tracking-[0.22em] text-gold-light">
            {c.home.abroadEyebrow}
          </span>
          <span className="mt-4 block h-[1.5px] w-13 bg-gold-light" style={{ width: 52 }} />
          <h2 className="mt-5 max-w-[20ch] font-serif text-[clamp(1.7rem,3.8vw,2.3rem)] text-cream">
            {c.home.abroadTitle}
          </h2>
          <p className="mt-4 max-w-[56ch] text-[16px] leading-relaxed text-cream/75">{c.home.abroadText}</p>

          <div className="mt-8 flex flex-wrap gap-3">
            {abroadHref ? (
              <Link
                href={abroadHref}
                className="inline-flex items-center gap-2 rounded-xl bg-cream px-6 py-3.5 text-[15px] font-semibold text-navy transition-opacity hover:opacity-90"
              >
                {c.nav.abroad}
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
            ) : null}
            {especialidadePath("expatriacao", locale) ? (
              <Link
                href={especialidadePath("expatriacao", locale)!}
                className="inline-flex items-center gap-2 rounded-xl border-[1.5px] border-gold-light px-6 py-3.5 text-[15px] font-semibold text-gold-light transition-colors hover:bg-gold-light hover:text-navy"
              >
                {locale === "pt"
                  ? "Expatriação e adaptação"
                  : locale === "en"
                    ? "Expat life and adjustment"
                    : "Expatriación y adaptación"}
              </Link>
            ) : null}
          </div>
        </div>
      </section>
    </>
  )
}
