"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { chrome } from "@/lib/i18n/chrome"
import { pagePath } from "@/lib/i18n/routes"
import type { Locale, MaybeLocalized } from "@/lib/i18n/locales"
import { LanguageSwitcher } from "./language-switcher"
import { Wordmark } from "./brand"
import { whatsappHref } from "@/lib/whatsapp"

export interface HeaderProps {
  locale?: Locale
  /** Caminhos desta mesma página nos outros idiomas. */
  alternates?: MaybeLocalized<string>
}

export function Header({ locale = "pt", alternates }: HeaderProps) {
  const [open, setOpen] = useState(false)
  const c = chrome(locale)

  const alts: MaybeLocalized<string> = alternates ?? {
    pt: pagePath("home", "pt"),
    en: pagePath("home", "en"),
    es: pagePath("home", "es"),
  }

  const items = [
    { href: pagePath("especialidades", locale), label: c.nav.specialties },
    { href: pagePath("terapia-sem-fronteiras", locale), label: c.nav.abroad },
    { href: pagePath("avaliacao-psicologica", locale), label: c.nav.assessment },
    { href: pagePath("blog", locale), label: c.nav.blog },
  ].filter((i): i is { href: string; label: string } => Boolean(i.href))

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-cream/95 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between gap-4 py-3">
          <Link href={pagePath("home", locale) ?? "/"} className="shrink-0" aria-label="Carliane Lopes de Oliveira">
            <Wordmark descriptor={locale === "pt" ? "Psicologia clínica" : locale === "en" ? "Clinical psychology" : "Psicología clínica"} />
          </Link>

          <nav className="hidden items-center gap-7 lg:flex" aria-label={c.nav.menu}>
            {items.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-foreground transition-colors hover:text-navy"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <LanguageSwitcher locale={locale} alternates={alts} />
            <a
              href={whatsappHref(locale)}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden rounded-xl bg-navy px-5 py-2.5 text-sm font-semibold text-cream transition-opacity hover:opacity-90 md:inline-flex"
            >
              {c.nav.schedule}
            </a>
            <button
              type="button"
              className="p-2 lg:hidden"
              onClick={() => setOpen(!open)}
              aria-expanded={open}
              aria-label={open ? c.nav.close : c.nav.menu}
            >
              {open ? <X className="h-6 w-6 text-navy" /> : <Menu className="h-6 w-6 text-navy" />}
            </button>
          </div>
        </div>

        {open ? (
          <nav className="border-t border-line py-4 lg:hidden" aria-label={c.nav.menu}>
            <ul className="flex flex-col gap-1">
              {items.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="block py-2.5 text-[15px] font-medium text-foreground hover:text-navy"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <a
              href={whatsappHref(locale)}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex rounded-xl bg-navy px-5 py-2.5 text-sm font-semibold text-cream"
            >
              {c.nav.schedule}
            </a>
          </nav>
        ) : null}
      </div>
    </header>
  )
}
