import Link from "next/link"
import { ArrowLeft, ArrowRight, Check } from "lucide-react"
import { chrome } from "@/lib/i18n/chrome"
import { especialidadePath, pagePath } from "@/lib/i18n/routes"
import type { Locale } from "@/lib/i18n/locales"
import type { Especialidade } from "@/lib/especialidades/registry"
import { getEspecialidadeByKey } from "@/lib/especialidades/registry"
import { SafetyBanner } from "@/components/layout/safety-banner"
import { assuntoEspecialidade, whatsappHref } from "@/lib/whatsapp"

/**
 * Componente-mestre das especialidades.
 *
 * Uma rota, N páginas: tudo vem do registry. A página cumpre a definição de
 * pronto (§ 22 das Instruções): H1 único, bloco de segurança quando o tema
 * pede, nota de conformidade, WhatsApp contextual no idioma certo e um
 * próximo degrau explícito.
 */
export function EspecialidadeView({ e, locale }: { e: Especialidade; locale: Locale }) {
  const c = chrome(locale)
  const hubHref = pagePath("especialidades", locale) ?? "/"
  const assunto = assuntoEspecialidade(locale, e.titulo[locale])

  const relacionados = e.relacionados
    .map((key) => getEspecialidadeByKey(key))
    .filter((r): r is Especialidade => Boolean(r && r.publicado[locale]))

  return (
    <>
      {/* HERO */}
      <section className="bg-cream">
        <div className="container mx-auto px-4 py-14 sm:py-20">
          <Link
            href={hubHref}
            className="inline-flex items-center gap-1.5 text-[13.5px] font-medium text-muted-foreground transition-colors hover:text-navy"
          >
            <ArrowLeft className="h-3.5 w-3.5" aria-hidden />
            {c.cta.backToSpecialties}
          </Link>

          <span className="eyebrow mt-7 block">{c.specialties.hubs[e.hub]}</span>
          <span className="rule-gold my-4" />
          <h1 className="max-w-[18ch] text-[clamp(2rem,4.6vw,2.9rem)]">{e.hero[locale].h1}</h1>
          <p className="mt-4 max-w-[54ch] font-serif text-[19px] leading-[1.7] text-foreground">
            {e.hero[locale].sub}
          </p>

          <dl className="mt-8 flex flex-wrap gap-x-10 gap-y-3 text-[14px]">
            <div>
              <dt className="font-sans text-[11px] font-bold uppercase tracking-[0.14em] text-eyebrow">
                {c.specialties.duration}
              </dt>
              <dd className="mt-1 text-foreground">{e.duracao[locale]}</dd>
            </div>
            <div>
              <dt className="font-sans text-[11px] font-bold uppercase tracking-[0.14em] text-eyebrow">
                {c.specialties.modality}
              </dt>
              <dd className="mt-1 text-foreground">
                {e.modalidade
                  .map((m) => (m === "online" ? c.specialties.online : c.specialties.inPerson))
                  .join(" · ")}
              </dd>
            </div>
          </dl>
        </div>
      </section>

      {/* PARA QUEM */}
      <section className="bg-card">
        <div className="container mx-auto px-4 py-14 sm:py-16">
          <h2 className="text-[clamp(1.5rem,3.2vw,1.9rem)]">{c.specialties.forWhom}</h2>
          <ul className="mt-6 grid max-w-4xl gap-4 sm:grid-cols-2">
            {e.paraQuem[locale].map((item, i) => (
              <li key={i} className="flex gap-3">
                <Check className="mt-1 h-4 w-4 shrink-0 text-gold" aria-hidden />
                <span className="text-[16px] leading-relaxed text-foreground">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* COMO FUNCIONA */}
      <section className="bg-cream-2">
        <div className="container mx-auto px-4 py-14 sm:py-16">
          <h2 className="text-[clamp(1.5rem,3.2vw,1.9rem)]">{c.specialties.howItWorks}</h2>
          <ol className="mt-8 grid gap-7 md:grid-cols-2">
            {e.comoFunciona[locale].map((passo, i) => (
              <li key={i} className="border-t border-line pt-5">
                <span className="font-serif text-[15px] text-gold" aria-hidden>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-1 font-sans text-[17px] font-semibold text-navy">{passo.titulo}</h3>
                <p className="mt-2 max-w-[52ch] text-[15.5px] leading-relaxed text-foreground">{passo.texto}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* SEGURANÇA CLÍNICA — quando o tema pede */}
      {e.seguranca ? (
        <section className="bg-cream">
          <div className="container mx-auto max-w-4xl px-4 py-12">
            <SafetyBanner locale={locale} />
          </div>
        </section>
      ) : null}

      {/* FAQ */}
      {e.faq[locale].length > 0 ? (
        <section className="bg-card">
          <div className="container mx-auto px-4 py-14 sm:py-16">
            <h2 className="text-[clamp(1.5rem,3.2vw,1.9rem)]">{c.specialties.faq}</h2>
            <dl className="mt-7 max-w-3xl divide-y divide-line border-y border-line">
              {e.faq[locale].map((qa, i) => (
                <div key={i} className="py-6">
                  <dt className="font-sans text-[16.5px] font-semibold text-navy">{qa.q}</dt>
                  <dd className="mt-2.5 text-[15.5px] leading-relaxed text-foreground">{qa.a}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>
      ) : null}

      {/* PRÓXIMO DEGRAU — toda página oferece um, e um só */}
      <section className="bg-navy">
        <div className="container mx-auto px-4 py-16">
          <h2 className="max-w-[22ch] font-serif text-[clamp(1.5rem,3.4vw,2rem)] text-cream">
            {locale === "pt"
              ? "Quer conversar sobre isso?"
              : locale === "en"
                ? "Would you like to talk about this?"
                : "¿Quieres conversar sobre esto?"}
          </h2>
          <p className="mt-3 max-w-[50ch] text-[15.5px] leading-relaxed text-cream/75">
            {locale === "pt"
              ? "A primeira conversa serve para entender o que você procura e se faz sentido seguirmos juntas."
              : locale === "en"
                ? "The first conversation is to understand what you're looking for and whether it makes sense to work together."
                : "La primera conversación sirve para entender qué buscas y si tiene sentido seguir juntas."}
          </p>
          <a
            href={whatsappHref(locale, assunto)}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-7 inline-flex items-center gap-2 rounded-xl bg-cream px-6 py-3.5 text-[15px] font-semibold text-navy transition-opacity hover:opacity-90"
          >
            {c.cta.schedule}
            <ArrowRight className="h-4 w-4" aria-hidden />
          </a>
          <p className="mt-4 text-[12.5px] text-cream/50">{c.whatsapp.notEmergency}</p>
        </div>
      </section>

      {/* RELACIONADOS */}
      {relacionados.length > 0 ? (
        <section className="bg-cream">
          <div className="container mx-auto px-4 py-14">
            <h2 className="font-sans text-[12px] font-bold uppercase tracking-[0.18em] text-eyebrow">
              {c.specialties.related}
            </h2>
            <ul className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {relacionados.map((r) => {
                const href = especialidadePath(r.key, locale)
                if (!href) return null
                return (
                  <li key={r.key}>
                    <Link
                      href={href}
                      className="group flex h-full flex-col rounded-[--radius] border border-line bg-card p-5 transition-colors hover:border-wing"
                    >
                      <h3 className="font-serif text-[19px]">{r.titulo[locale]}</h3>
                      <p className="mt-1.5 grow text-[14px] leading-relaxed text-muted-foreground">
                        {r.hero[locale].sub}
                      </p>
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div>
        </section>
      ) : null}

      {/* Nota padrão de conformidade, no idioma da página */}
      <section className="bg-cream">
        <div className="container mx-auto max-w-4xl px-4 pb-14">
          <p className="border-l-2 border-gold-light pl-4 text-[13.5px] italic leading-relaxed text-muted-foreground">
            {c.compliance.note} {c.compliance.identity} — {c.compliance.crp}.
          </p>
        </div>
      </section>
    </>
  )
}
