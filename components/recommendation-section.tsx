"use client"

import { ExternalLink, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/lib/i18n"

export function RecommendationSection() {
  const { t } = useLanguage()

  return (
    <section className="py-16 bg-gradient-to-r from-[#91A8D0]/20 to-[#d6e4f0]">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <Sparkles className="w-8 h-8 text-[#91A8D0] mx-auto mb-4" />

          <h2 className="font-serif text-2xl md:text-3xl text-[#2D3436] mb-2">{t("recommendation.title")}</h2>
          <p className="text-[#2D3436]/70 mb-6">{t("recommendation.subtitle")}</p>

          <div className="bg-[#f4f8fc] rounded-2xl p-6 md:p-8 shadow-md">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-12 h-12 bg-[#91A8D0]/20 rounded-full flex items-center justify-center">
                <span className="text-2xl">🧘</span>
              </div>
              <h3 className="font-serif text-xl text-[#CD8D7A] font-semibold">Eu Medito</h3>
            </div>

            <p className="text-[#2D3436]/80 mb-6 leading-relaxed">{t("recommendation.description")}</p>

            <Button asChild className="bg-[#91A8D0] hover:bg-[#7a94c0] text-white rounded-xl">
              <a href="https://eumedito.org" target="_blank" rel="noopener noreferrer">
                {t("recommendation.cta")}
                <ExternalLink className="w-4 h-4 ml-2" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
