"use client"

import { Monitor, MapPin, Brain, Settings, Smartphone, Tablet, Sparkles } from "lucide-react"
import { useLanguage } from "@/lib/i18n"

export function MethodologySection() {
  const { t } = useLanguage()

  return (
    <section className="py-20 bg-[#e8f0f8]">
      <div className="container mx-auto px-4">
        <div className="flex justify-center mb-4">
          <Settings className="w-8 h-8 text-[#91A8D0]" />
        </div>

        <h2 className="font-serif text-3xl md:text-4xl text-[#2D3436] text-center mb-2">{t("methodology.title")}</h2>
        <p className="text-center text-[#2D3436]/70 mb-12">{t("methodology.subtitle")}</p>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center p-6 bg-[#f4f8fc] rounded-2xl">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Brain className="w-10 h-10 text-[#91A8D0]" />
              <Sparkles className="w-6 h-6 text-[#CD8D7A]" />
            </div>
            <h3 className="font-serif text-lg text-[#2D3436] font-semibold mb-2">{t("methodology.approach.title")}</h3>
            <p className="text-[#2D3436]/70 text-sm leading-relaxed">{t("methodology.approach.desc")}</p>
          </div>

          <div className="text-center p-6 bg-[#f4f8fc] rounded-2xl">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Monitor className="w-10 h-10 text-[#CD8D7A]" />
              <Tablet className="w-8 h-8 text-[#CD8D7A]" />
              <Smartphone className="w-6 h-6 text-[#CD8D7A]" />
            </div>
            <h3 className="font-serif text-lg text-[#2D3436] font-semibold mb-2">{t("methodology.online.title")}</h3>
            <p className="text-[#2D3436]/70 text-sm">{t("methodology.online.desc")}</p>
          </div>

          <div className="text-center p-6 bg-[#f4f8fc] rounded-2xl">
            <MapPin className="w-12 h-12 text-[#91A8D0] mx-auto mb-4" />
            <h3 className="font-serif text-lg text-[#2D3436] font-semibold mb-2">
              {t("methodology.presential.title")}
            </h3>
            <p className="text-[#2D3436]/70 text-sm">{t("methodology.presential.desc")}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
