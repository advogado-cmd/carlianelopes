"use client"

import { useState } from "react"
import { chrome } from "@/lib/i18n/chrome"
import { pagePath } from "@/lib/i18n/routes"
import type { Locale } from "@/lib/i18n/locales"

/**
 * Formulário de contato.
 *
 * LGPD: dado de saúde é dado pessoal sensível (art. 11). Por isso o campo
 * "motivo" é OPCIONAL e de texto livre — não há checkbox de sintomas, que
 * transformaria o formulário numa coleta de dado sensível estruturado.
 * O consentimento é explícito, granular e não vem pré-marcado.
 */

const COPY: Record<
  Locale,
  {
    eyebrow: string
    title: string
    sub: string
    name: string
    contact: string
    contactHint: string
    reason: string
    reasonHint: string
    message: string
    messagePlaceholder: string
    consent: string
    privacy: string
    submit: string
    sending: string
    ok: string
    okDesc: string
    error: string
  }
> = {
  pt: {
    eyebrow: "Contato",
    title: "Escrever para o consultório",
    sub: "Respondo em horário comercial, no fuso de Recife (UTC−3).",
    name: "Nome",
    contact: "E-mail ou WhatsApp",
    contactHint: "Por onde prefere que eu responda.",
    reason: "O que te traz aqui (opcional)",
    reasonHint: "Escreva só o que quiser. Não é preciso detalhar.",
    message: "Mensagem (opcional)",
    messagePlaceholder: "Se quiser adiantar alguma coisa, escreva aqui.",
    consent:
      "Autorizo o contato por e-mail ou WhatsApp para responder a esta mensagem. Meus dados não serão usados para publicidade.",
    privacy: "Política de privacidade",
    submit: "Enviar",
    sending: "Enviando…",
    ok: "Mensagem enviada.",
    okDesc: "Respondo assim que possível. Se for urgente, veja os canais de emergência no rodapé.",
    error: "Não consegui enviar agora. Tente de novo ou escreva pelo WhatsApp.",
  },
  en: {
    eyebrow: "Contact",
    title: "Write to the practice",
    sub: "I reply during business hours, Recife time (UTC−3).",
    name: "Name",
    contact: "Email or WhatsApp",
    contactHint: "Where you'd prefer me to reply.",
    reason: "What brings you here (optional)",
    reasonHint: "Write only what you want to. No need to go into detail.",
    message: "Message (optional)",
    messagePlaceholder: "If you'd like to say something in advance, write it here.",
    consent:
      "I agree to be contacted by email or WhatsApp in reply to this message. My data will not be used for advertising.",
    privacy: "Privacy policy",
    submit: "Send",
    sending: "Sending…",
    ok: "Message sent.",
    okDesc: "I'll reply as soon as I can. If it's urgent, see the emergency lines in the footer.",
    error: "I couldn't send it just now. Please try again or write on WhatsApp.",
  },
  es: {
    eyebrow: "Contacto",
    title: "Escribir al consultorio",
    sub: "Respondo en horario comercial, hora de Recife (UTC−3).",
    name: "Nombre",
    contact: "Correo o WhatsApp",
    contactHint: "Por dónde prefieres que responda.",
    reason: "Qué te trae aquí (opcional)",
    reasonHint: "Escribe solo lo que quieras. No hace falta detallar.",
    message: "Mensaje (opcional)",
    messagePlaceholder: "Si quieres adelantar algo, escríbelo aquí.",
    consent:
      "Autorizo el contacto por correo o WhatsApp para responder a este mensaje. Mis datos no se usarán con fines publicitarios.",
    privacy: "Política de privacidad",
    submit: "Enviar",
    sending: "Enviando…",
    ok: "Mensaje enviado.",
    okDesc: "Respondo lo antes posible. Si es urgente, mira las líneas de emergencia en el pie de página.",
    error: "No pude enviarlo ahora. Inténtalo de nuevo o escribe por WhatsApp.",
  },
}

export function ContactSection({ locale }: { locale: Locale }) {
  const t = COPY[locale]
  const c = chrome(locale)
  const [state, setState] = useState<"idle" | "sending" | "ok" | "error">("idle")
  const privacyHref = pagePath("privacidade", "pt")

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = event.currentTarget
    const data = new FormData(form)
    setState("sending")
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          contact: data.get("contact"),
          reason: data.get("reason") || "other",
          message: data.get("message"),
        }),
      })
      if (!res.ok) throw new Error("failed")
      setState("ok")
      form.reset()
    } catch {
      setState("error")
    }
  }

  const field =
    "mt-1.5 w-full rounded-[10px] border border-line bg-card px-3.5 py-2.5 text-[15px] text-foreground outline-none focus:border-wing-deep"
  const label = "font-sans text-[13.5px] font-semibold text-navy"
  const hint = "mt-1 block text-[12.5px] text-muted-foreground"

  return (
    <section className="bg-cream-2">
      <div className="container mx-auto max-w-3xl px-4 py-16 sm:py-20">
        <span className="eyebrow">{t.eyebrow}</span>
        <h2 className="mt-3 text-[clamp(1.6rem,3.4vw,2.05rem)]">{t.title}</h2>
        <p className="mt-2 text-muted-foreground">{t.sub}</p>

        {state === "ok" ? (
          <div className="mt-8 rounded-[--radius] border border-wing/25 bg-mist p-6">
            <p className="font-sans text-[16px] font-semibold text-navy">{t.ok}</p>
            <p className="mt-1.5 text-[15px] text-foreground">{t.okDesc}</p>
          </div>
        ) : (
          <form onSubmit={onSubmit} className="mt-8 grid gap-5">
            <div>
              <label className={label} htmlFor="name">
                {t.name}
              </label>
              <input id="name" name="name" required autoComplete="name" className={field} />
            </div>

            <div>
              <label className={label} htmlFor="contact">
                {t.contact}
              </label>
              <input id="contact" name="contact" required className={field} aria-describedby="contact-hint" />
              <span id="contact-hint" className={hint}>
                {t.contactHint}
              </span>
            </div>

            <div>
              <label className={label} htmlFor="reason">
                {t.reason}
              </label>
              <input id="reason" name="reason" className={field} aria-describedby="reason-hint" />
              <span id="reason-hint" className={hint}>
                {t.reasonHint}
              </span>
            </div>

            <div>
              <label className={label} htmlFor="message">
                {t.message}
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                placeholder={t.messagePlaceholder}
                className={field}
              />
            </div>

            <label className="flex items-start gap-3 text-[13.5px] leading-relaxed text-foreground">
              <input type="checkbox" name="consent" required className="mt-1 h-4 w-4 accent-[--navy]" />
              <span>
                {t.consent}{" "}
                {privacyHref ? (
                  <a href={privacyHref} className="text-wing-deep underline underline-offset-2">
                    {t.privacy}
                  </a>
                ) : null}
              </span>
            </label>

            {state === "error" ? (
              <p role="alert" className="text-[14px] text-destructive">
                {t.error}
              </p>
            ) : null}

            <button
              type="submit"
              disabled={state === "sending"}
              className="w-fit rounded-xl bg-navy px-6 py-3.5 text-[15px] font-semibold text-cream transition-opacity hover:opacity-90 disabled:opacity-60"
            >
              {state === "sending" ? t.sending : t.submit}
            </button>

            <p className="text-[12.5px] leading-relaxed text-muted-foreground">{c.whatsapp.notEmergency}</p>
          </form>
        )}
      </div>
    </section>
  )
}
