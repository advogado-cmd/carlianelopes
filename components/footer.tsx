"use client"

import Link from "next/link"
import { Mail, Phone, Globe, Linkedin } from "lucide-react"
import { useLanguage } from "@/lib/i18n"

function OliveBranchLogo() {
  return (
    <svg width="32" height="32" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8 32C12 28 18 22 28 12" stroke="#8B7355" strokeWidth="2" strokeLinecap="round" />
      <ellipse cx="12" cy="26" rx="4" ry="2" transform="rotate(-45 12 26)" fill="#6B8E4E" />
      <ellipse cx="16" cy="22" rx="4" ry="2" transform="rotate(-35 16 22)" fill="#7A9E5A" />
      <ellipse cx="20" cy="18" rx="4" ry="2" transform="rotate(-45 20 18)" fill="#6B8E4E" />
      <ellipse cx="24" cy="14" rx="4" ry="2" transform="rotate(-55 24 14)" fill="#8AAE6A" />
      <ellipse cx="28" cy="10" rx="3" ry="1.5" transform="rotate(-45 28 10)" fill="#7A9E5A" />
      <circle cx="11" cy="29" r="2" fill="#9CAF88" />
      <circle cx="15" cy="25" r="2" fill="#9CAF88" />
    </svg>
  )
}

export function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="bg-[#2D3436] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Logo and Name */}
          <div className="flex items-center gap-3">
            <OliveBranchLogo />
            <div>
              <p className="font-serif text-lg text-[#CD8D7A]">Carliane Lopes de Oliveira</p>
              <p className="text-sm text-white/70">CRP: 02/12727</p>
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-[#91A8D0]" />
              <a href="https://wa.me/5581985122022" className="text-white/80 hover:text-white transition-colors">
                +55 (81) 98512-2022
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-[#91A8D0]" />
              <a
                href="mailto:contato@carlianelopes.com.br"
                className="text-white/80 hover:text-white transition-colors"
              >
                contato@carlianelopes.com.br
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Linkedin className="w-4 h-4 text-[#91A8D0]" />
              <a
                href="https://www.linkedin.com/in/carliane-lopes-a3aa6320/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 hover:text-white transition-colors"
              >
                LinkedIn
              </a>
            </div>
            <div className="flex items-center gap-2 mt-3">
              <Globe className="w-4 h-4 text-[#CD8D7A]" />
              <span className="text-white/80 text-sm">{t("footer.global")}</span>
            </div>
          </div>

          {/* Links */}
          <div className="space-y-2">
            <Link href="/privacidade" className="block text-white/80 hover:text-white transition-colors">
              {t("footer.privacy")}
            </Link>
          </div>
        </div>

        {/* Legal */}
        <div className="border-t border-white/20 pt-6 space-y-3 text-sm text-white/60">
          <p>{t("footer.legal")}</p>
          <p className="text-[#CD8D7A]">{t("footer.emergency")}</p>
        </div>
      </div>
    </footer>
  )
}
