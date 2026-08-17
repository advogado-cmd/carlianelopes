import Link from "next/link"
import { Mail, MapPin, Phone } from "lucide-react"
import { chrome } from "@/lib/i18n/chrome"
import { pagePath } from "@/lib/i18n/routes"
import type { Locale } from "@/lib/i18n/locales"
import { Wordmark } from "./brand"
import { CONTACT_EMAIL, whatsappHref } from "@/lib/whatsapp"

/**
 * Rodapé.
 *
 * Carrega três obrigações que valem para TODAS as páginas do site:
 *  1. identificação profissional completa e sem abreviar (Código de Ética, art. 20);
 *  2. a nota padrão de conteúdo informativo;
 *  3. o link permanente e discreto para o bloco de acolhimento (§ 19).
 */
export function Footer({ locale = "pt" }: { locale?: Locale }) {
  const c = chrome(locale)
  const year = new Date().getFullYear()

  const links = [
    { href: pagePath("especialidades", locale), label: c.nav.specialties },
    { href: pagePath("curriculo", locale), label: c.nav.curriculum },
    { href: pagePath("terapia-sem-fronteiras", locale), label: c.nav.abroad },
    { href: pagePath("avaliacao-psicologica", locale), label: c.nav.assessment },
    { href: pagePath("blog", locale), label: c.nav.blog },
    { href: pagePath("privacidade", locale), label: c.footer.privacy },
  ].filter((l): l is { href: string; label: string } => Boolean(l.href))

  return (
    <footer className="bg-navy text-cream/85">
      <div className="container mx-auto px-4 py-14">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <Wordmark variant="light" descriptor={locale === "pt" ? "Psicologia clínica" : locale === "en" ? "Clinical psychology" : "Psicología clínica"} />
            {/* Identificação profissional — obrigatória, sem abreviar o nome */}
            <p className="mt-5 text-sm text-cream/70">
              {c.compliance.identity}
              <br />
              <span className="text-gold-light">{c.compliance.crp}</span>
            </p>
          </div>

          <div>
            <h2 className="font-sans text-[11px] font-bold uppercase tracking-[0.18em] text-gold-light">
              {c.footer.contact}
            </h2>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <a
                  href={whatsappHref(locale)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-cream/80 transition-colors hover:text-cream"
                >
                  <Phone className="h-4 w-4 text-gold-light" aria-hidden />
                  +55 (81) 98512-2022
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="inline-flex items-center gap-2 text-cream/80 transition-colors hover:text-cream"
                >
                  <Mail className="h-4 w-4 text-gold-light" aria-hidden />
                  {CONTACT_EMAIL}
                </a>
              </li>
              <li className="flex items-start gap-2 text-cream/70">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold-light" aria-hidden />
                <span>
                  <span className="block text-cream/80">{c.footer.officeLabel}</span>
                  {c.footer.address}
                </span>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="font-sans text-[11px] font-bold uppercase tracking-[0.18em] text-gold-light">
              {c.footer.navigate}
            </h2>
            <ul className="mt-4 space-y-2 text-sm">
              {links.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-cream/80 transition-colors hover:text-cream">
                    {l.label}
                  </Link>
                </li>
              ))}
              <li>
                <a href="#acolhimento" className="text-gold-light underline underline-offset-4 hover:text-cream">
                  {c.safety.footerLink}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Nota padrão de conformidade — em todas as páginas, no idioma da página */}
        <div className="mt-12 border-t border-cream/15 pt-7">
          <p className="max-w-4xl text-[13px] leading-relaxed text-cream/60">
            {c.compliance.note} {c.compliance.identity} — {c.compliance.crp}.
          </p>
          <p className="mt-4 text-[12px] text-cream/40">
            © {year} {c.compliance.identity}. {c.footer.rights}
          </p>
        </div>
      </div>
    </footer>
  )
}
