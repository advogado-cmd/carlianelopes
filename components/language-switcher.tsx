"use client"

import { useLanguage } from "@/lib/i18n"

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage()

  return (
    <div className="flex items-center gap-2">
      <button
        onClick={() => setLanguage("pt")}
        className={`flex items-center gap-1 px-2 py-1 rounded-lg transition-all ${
          language === "pt" ? "bg-[#91A8D0]/20 ring-1 ring-[#91A8D0]" : "hover:bg-[#91A8D0]/10"
        }`}
        aria-label="Português"
      >
        <svg width="20" height="14" viewBox="0 0 20 14" fill="none" className="rounded-sm overflow-hidden">
          <rect width="20" height="14" fill="#009739" />
          <path d="M10 2L18 7L10 12L2 7L10 2Z" fill="#FEDD00" />
          <circle cx="10" cy="7" r="2.5" fill="#002776" />
        </svg>
      </button>
      <button
        onClick={() => setLanguage("en")}
        className={`flex items-center gap-1 px-2 py-1 rounded-lg transition-all ${
          language === "en" ? "bg-[#91A8D0]/20 ring-1 ring-[#91A8D0]" : "hover:bg-[#91A8D0]/10"
        }`}
        aria-label="English"
      >
        <svg width="20" height="14" viewBox="0 0 20 14" fill="none" className="rounded-sm overflow-hidden">
          <rect width="20" height="14" fill="#012169" />
          <path d="M0 0L20 14M20 0L0 14" stroke="white" strokeWidth="2" />
          <path d="M0 0L20 14M20 0L0 14" stroke="#C8102E" strokeWidth="1" />
          <path d="M10 0V14M0 7H20" stroke="white" strokeWidth="3" />
          <path d="M10 0V14M0 7H20" stroke="#C8102E" strokeWidth="2" />
        </svg>
      </button>
    </div>
  )
}
