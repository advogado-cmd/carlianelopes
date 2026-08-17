import Image from "next/image"
import { chrome } from "@/lib/i18n/chrome"
import type { Locale } from "@/lib/i18n/locales"
import { PREMIO, curriculo } from "@/lib/curriculo/registry"

/**
 * Currículo e trajetória.
 *
 * Restaura o conteúdo que existia na home antiga (seção "Trajetória,
 * Publicações e Qualificações") e que a Fase 1 tinha deixado de fora.
 * Agora é página própria, nos três idiomas, gerada do registry.
 *
 * A seção antiga vivia dentro de um cartão com `overflow-y-auto` e altura
 * máxima de 550px — ou seja, metade do currículo ficava escondida atrás de
 * uma barra de rolagem interna. Aqui tudo aparece.
 */

const COPY: Record<Locale, { eyebrow: string; h1: string; sub: string; foto: string }> = {
  pt: {
    eyebrow: "Trajetória",
    h1: "Currículo",
    sub: "Formação, publicações e experiência — com instituição e ano de cada uma.",
    foto: "Carliane Lopes de Oliveira, psicóloga clínica",
  },
  en: {
    eyebrow: "Background",
    h1: "Credentials",
    sub: "Training, publications and experience — each with institution and year.",
    foto: "Carliane Lopes de Oliveira, clinical psychologist",
  },
  es: {
    eyebrow: "Trayectoria",
    h1: "Formación",
    sub: "Formación, publicaciones y experiencia — con institución y año de cada una.",
    foto: "Carliane Lopes de Oliveira, psicóloga clínica",
  },
}

export function CurriculoView({ locale }: { locale: Locale }) {
  const c = chrome(locale)
  const t = COPY[locale]
  const blocos = curriculo(locale)
  const premio = PREMIO[locale]

  return (
    <>
      <section className="bg-cream">
        <div className="container mx-auto px-4 py-16 sm:py-20">
          <div className="grid items-start gap-12 md:grid-cols-[1fr_auto]">
            <div>
              <span className="eyebrow">{t.eyebrow}</span>
              <span className="rule-gold my-4" />
              <h1 className="text-[clamp(2rem,4.6vw,2.9rem)]">{t.h1}</h1>
              <p className="mt-4 max-w-[58ch] text-[17px] leading-relaxed text-foreground">{t.sub}</p>

              <div className="mt-8 inline-flex max-w-lg items-start gap-4 rounded-[--radius] border border-gold/30 bg-cream-2 p-5">
                <span className="mt-0.5 block h-8 w-px bg-gold" aria-hidden />
                <span>
                  <span className="block font-serif text-[19px] text-navy">{premio.titulo}</span>
                  <span className="mt-1 block text-[14px] text-muted-foreground">{premio.detalhe}</span>
                </span>
              </div>
            </div>

            <Image
              src="/images/carliane01.jpeg"
              alt={t.foto}
              width={340}
              height={430}
              className="w-full max-w-[280px] rounded-[--radius] object-cover shadow-sm md:max-w-[340px]"
              priority
            />
          </div>
        </div>
      </section>

      {blocos.map((bloco, i) => (
        <section key={bloco.chave} className={i % 2 === 0 ? "bg-card" : "bg-cream-2"}>
          <div className="container mx-auto px-4 py-12 sm:py-14">
            <h2 className="font-sans text-[12px] font-bold uppercase tracking-[0.18em] text-eyebrow">
              {bloco.titulo}
            </h2>
            <ul className="mt-6 max-w-4xl divide-y divide-line border-y border-line">
              {bloco.itens.map((item, j) => (
                <li key={j} className="grid gap-1 py-5 sm:grid-cols-[130px_1fr] sm:gap-6">
                  <span className="font-sans text-[13.5px] font-semibold text-gold-ink">
                    {item.quando || "—"}
                  </span>
                  <span>
                    <span className="block font-serif text-[19px] leading-snug text-navy">{item.titulo}</span>
                    {item.instituicao ? (
                      <span className="mt-1 block text-[14.5px] text-muted-foreground">{item.instituicao}</span>
                    ) : null}
                    {item.detalhe ? (
                      <span className="mt-2 block max-w-[62ch] text-[15px] leading-relaxed text-foreground">
                        {item.detalhe}
                      </span>
                    ) : null}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      ))}

      <section className="bg-cream">
        <div className="container mx-auto max-w-4xl px-4 py-12">
          <p className="border-l-2 border-gold-light pl-4 text-[13.5px] italic leading-relaxed text-muted-foreground">
            {c.compliance.note} {c.compliance.identity} — {c.compliance.crp}.
          </p>
        </div>
      </section>
    </>
  )
}
