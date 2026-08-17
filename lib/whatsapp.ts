import type { Locale } from "@/lib/i18n/locales"

/**
 * WhatsApp contextual.
 *
 * O link cru `wa.me/...` do site antigo não dizia de onde a pessoa veio nem
 * em que idioma ela estava. Aqui a mensagem é pré-preenchida por página e
 * por idioma — quem escreve de /especialidades/ansiedade já chega dizendo
 * do que precisa, e quem escreve de /en/specialties/anxiety chega em inglês.
 *
 * ⚠️ VERIFICAR o número antes do deploy (§ 24 das Instruções do Projeto).
 */
export const WHATSAPP_NUMBER = "5581985122022"

export const CONTACT_EMAIL = "contato@carlianelopes.com.br"

const PREFIX: Record<Locale, string> = {
  pt: "Olá, vim pelo site e gostaria de saber mais sobre",
  en: "Hello, I came through your website and would like to know more about",
  es: "Hola, llegué por su sitio y me gustaría saber más sobre",
}

const GENERIC: Record<Locale, string> = {
  pt: "o atendimento.",
  en: "your sessions.",
  es: "las sesiones.",
}

/**
 * @param assunto Assunto já no idioma da página (ex.: "atendimento para ansiedade").
 */
export function whatsappMessage(locale: Locale, assunto?: string): string {
  return assunto ? `${PREFIX[locale]} ${assunto}.` : `${PREFIX[locale]} ${GENERIC[locale]}`
}

export function whatsappHref(locale: Locale, assunto?: string): string {
  const text = encodeURIComponent(whatsappMessage(locale, assunto))
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`
}

/** Assunto contextual para uma especialidade, no idioma da página. */
export function assuntoEspecialidade(locale: Locale, titulo: string): string {
  const map: Record<Locale, string> = {
    pt: `atendimento para ${titulo.toLowerCase()}`,
    en: `sessions for ${titulo.toLowerCase()}`,
    es: `atención para ${titulo.toLowerCase()}`,
  }
  return map[locale]
}
