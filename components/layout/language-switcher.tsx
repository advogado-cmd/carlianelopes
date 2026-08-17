"use client"

import Link from "next/link"
import { LOCALES, LOCALE_LABEL, LOCALE_SHORT, type Locale, type MaybeLocalized } from "@/lib/i18n/locales"

/**
 * Seletor de idioma.
 *
 * Leva à MESMA página no outro idioma, via mapa de slugs — nunca à home.
 * Cair na home ao trocar de idioma é o defeito mais comum de site multilíngue.
 * Idioma em que a página não existe aparece desabilitado, não escondido:
 * o visitante entende que aquela página não foi traduzida, em vez de achar
 * que o site não tem aquele idioma.
 */
export function LanguageSwitcher({
  locale,
  alternates,
}: {
  locale: Locale
  alternates: MaybeLocalized<string>
}) {
  return (
    <div className="flex items-center gap-0.5" role="group" aria-label="Idioma / Language / Idioma">
      {LOCALES.map((l) => {
        const href = alternates[l]
        const current = l === locale

        if (current) {
          return (
            <span
              key={l}
              aria-current="true"
              className="rounded-md px-2 py-1 text-xs font-semibold text-navy bg-cream-2"
            >
              {LOCALE_SHORT[l]}
            </span>
          )
        }

        if (!href) {
          return (
            <span
              key={l}
              aria-disabled="true"
              title={`${LOCALE_LABEL[l]} — não disponível nesta página`}
              className="rounded-md px-2 py-1 text-xs font-medium text-muted-foreground/40 cursor-not-allowed"
            >
              {LOCALE_SHORT[l]}
            </span>
          )
        }

        return (
          <Link
            key={l}
            href={href}
            hrefLang={l}
            lang={l}
            aria-label={LOCALE_LABEL[l]}
            className="rounded-md px-2 py-1 text-xs font-medium text-muted-foreground transition-colors hover:bg-cream-2 hover:text-navy"
          >
            {LOCALE_SHORT[l]}
          </Link>
        )
      })}
    </div>
  )
}
