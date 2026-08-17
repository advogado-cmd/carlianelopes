"use client"

import { useEffect, useState } from "react"
import { MessageCircle, X } from "lucide-react"
import { chrome } from "@/lib/i18n/chrome"
import type { Locale } from "@/lib/i18n/locales"
import { whatsappHref } from "@/lib/whatsapp"

/**
 * Botão flutuante de WhatsApp — contextual.
 *
 * Diferenças em relação ao botão do site antigo:
 *  - mensagem pré-preenchida por página e por idioma (prop `assunto`);
 *  - horário de Recife calculado no cliente, para quem escreve de outro fuso;
 *  - aviso explícito de que não é canal de emergência;
 *  - respeita a safe-area do iOS e pode ser dispensado;
 *  - dispara `whatsapp_click` no dataLayer com origem e idioma.
 *
 * Não abre sozinho e não cobre conteúdo.
 */
export function WhatsAppFloat({
  locale = "pt",
  assunto,
  origem = "flutuante",
}: {
  locale?: Locale
  assunto?: string
  origem?: string
}) {
  const c = chrome(locale)
  const [dismissed, setDismissed] = useState(false)
  const [recifeHour, setRecifeHour] = useState<number | null>(null)

  useEffect(() => {
    try {
      const hour = Number(
        new Intl.DateTimeFormat("pt-BR", {
          timeZone: "America/Recife",
          hour: "2-digit",
          hour12: false,
        }).format(new Date()),
      )
      setRecifeHour(Number.isNaN(hour) ? null : hour)
    } catch {
      setRecifeHour(null)
    }
  }, [])

  if (dismissed) return null

  const foraDoHorario = recifeHour !== null && (recifeHour < 8 || recifeHour >= 19)

  const track = () => {
    if (typeof window === "undefined") return
    const w = window as unknown as { dataLayer?: Record<string, unknown>[] }
    w.dataLayer = w.dataLayer || []
    w.dataLayer.push({
      event: "whatsapp_click",
      origem,
      idioma: locale,
      pagina: window.location.pathname,
    })
  }

  return (
    <div
      className="fixed right-4 z-40 flex flex-col items-end gap-2"
      style={{ bottom: "calc(1rem + env(safe-area-inset-bottom, 0px))" }}
    >
      <div className="max-w-[15.5rem] rounded-[--radius] border border-line bg-card px-3.5 py-2.5 shadow-sm">
        <div className="flex items-start justify-between gap-2">
          <p className="text-[12px] leading-snug text-muted-foreground">
            {foraDoHorario
              ? `${recifeHour}h ${locale === "pt" ? "em Recife agora" : locale === "en" ? "in Recife right now" : "en Recife ahora"} · ${c.whatsapp.tooltip}`
              : c.whatsapp.tooltip}
            <br />
            <span className="text-foreground/70">{c.whatsapp.notEmergency}</span>
          </p>
          <button
            type="button"
            onClick={() => setDismissed(true)}
            aria-label={locale === "pt" ? "Dispensar" : locale === "en" ? "Dismiss" : "Descartar"}
            className="-mr-1 -mt-1 rounded p-1 text-muted-foreground/60 hover:text-navy"
          >
            <X className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>

      <a
        href={whatsappHref(locale, assunto)}
        target="_blank"
        rel="noopener noreferrer"
        onClick={track}
        aria-label={c.whatsapp.aria}
        className="inline-flex items-center gap-2 rounded-full bg-whatsapp px-5 py-3.5 font-sans text-sm font-semibold text-white shadow-lg transition-transform hover:scale-[1.02]"
      >
        <MessageCircle className="h-5 w-5" aria-hidden />
        WhatsApp
      </a>
    </div>
  )
}
