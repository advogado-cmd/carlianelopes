"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, Phone, Globe, ClipboardList } from "lucide-react"
import { Button } from "@/components/ui/button"
import { LanguageSwitcher } from "@/components/language-switcher"
import { useLanguage } from "@/lib/i18n"

function OliveBranchLogo() {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8 32C12 28 18 22 28 12" stroke="#8B7355" strokeWidth="2" strokeLinecap="round" />
      <ellipse cx="12" cy="26" rx="4" ry="2" transform="rotate(-45 12 26)" fill="#6B8E4E" />
      <ellipse cx="16" cy="22" rx="4" ry="2" transform="rotate(-35 16 22)" fill="#7A9E5A" />
      <ellipse cx="20" cy="18" rx="4" ry="2" transform="rotate(-45 20 18)" fill="#6B8E4E" />
      <ellipse cx="24" cy="14" rx="4" ry="2" transform="rotate(-55 24 14)" fill="#8AAE6A" />
      <ellipse cx="28" cy="10" rx="3" ry="1.5" transform="rotate(-45 28 10)" fill="#7A9E5A" />
      <ellipse cx="14" cy="28" rx="3" ry="2" transform="rotate(-30 14 28)" fill="#7A9E5A" />
      <ellipse cx="10" cy="30" rx="3" ry="1.5" transform="rotate(-50 10 30)" fill="#8AAE6A" />
      <circle cx="11" cy="29" r="2" fill="#9CAF88" />
      <circle cx="11" cy="29" r="1.2" fill="#B8C5A2" />
      <circle cx="15" cy="25" r="2" fill="#9CAF88" />
      <circle cx="15" cy="25" r="1.2" fill="#B8C5A2" />
      <circle cx="22" cy="20" r="1.5" fill="#9CAF88" />
      <circle cx="22" cy="20" r="0.9" fill="#B8C5A2" />
    </svg>
  )
}

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { t } = useLanguage()

  const navItems = [
    { href: "#sobre", label: t("nav.about") },
    { href: "#especialidades", label: t("nav.specialties") },
    { href: "#curriculo", label: t("nav.curriculum") },
    { href: "#livro", label: t("nav.book") },
    { href: "#blog", label: t("nav.blog") },
    { href: "#faq", label: t("nav.faq") },
    { href: "#contato", label: t("nav.contact") },
  ]

  const specialPages = [
    {
      href: "/terapia-sem-fronteiras",
      label: t("nav.therapyAbroad"),
      icon: Globe,
      color: "text-[#91A8D0] hover:text-[#7a94be]",
    },
    {
      href: "/avaliacao-psicologica",
      label: t("nav.assessment"),
      icon: ClipboardList,
      color: "text-[#CD8D7A] hover:text-[#b87a68]",
    },
  ]

  return (
    <header className="sticky top-0 z-50 bg-[#e8f0f8]/95 backdrop-blur-sm border-b border-[#91A8D0]/20">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <OliveBranchLogo />
            <span className="text-xs sm:text-lg font-serif font-semibold text-[#CD8D7A] leading-tight">
              Carliane Lopes de Oliveira
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-[#2D3436] hover:text-[#CD8D7A] transition-colors"
              >
                {item.label}
              </Link>
            ))}
            {specialPages.map((page) => (
              <Link
                key={page.href}
                href={page.href}
                className={`text-sm font-medium ${page.color} transition-colors flex items-center gap-1`}
              >
                <page.icon className="w-3.5 h-3.5" />
                {page.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <LanguageSwitcher />
            <Button asChild className="hidden md:flex bg-[#CD8D7A] hover:bg-[#b87a68] text-white rounded-xl shadow-md">
              <a href="https://wa.me/5581985122022" target="_blank" rel="noopener noreferrer">
                <Phone className="w-4 h-4 mr-2" />
                {t("nav.schedule")}
              </a>
            </Button>

            <button
              className="lg:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <nav className="lg:hidden mt-4 pb-4 border-t border-[#91A8D0]/20 pt-4">
            <div className="flex flex-col gap-3">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-[#2D3436] hover:text-[#CD8D7A] transition-colors py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              {specialPages.map((page) => (
                <Link
                  key={page.href}
                  href={page.href}
                  className={`${page.color} font-medium transition-colors py-2 flex items-center gap-2`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <page.icon className="w-4 h-4" />
                  {page.label}
                </Link>
              ))}
              <Button asChild className="mt-2 bg-[#CD8D7A] hover:bg-[#b87a68] text-white rounded-xl">
                <a href="https://wa.me/5581985122022" target="_blank" rel="noopener noreferrer">
                  <Phone className="w-4 h-4 mr-2" />
                  {t("nav.schedule")}
                </a>
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
