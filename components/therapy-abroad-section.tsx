"use client"

import Link from "next/link"
import { Globe, MessageCircle, Anchor, TreePine, Plane, ArrowRight } from "lucide-react"
import { useLanguage } from "@/lib/i18n"

export function TherapyAbroadSection() {
  const { t } = useLanguage()

  const features = [
    {
      icon: MessageCircle,
      title: t("abroad.feature1.title"),
      desc: t("abroad.feature1.desc"),
    },
    {
      icon: Plane,
      title: t("abroad.feature2.title"),
      desc: t("abroad.feature2.desc"),
    },
    {
      icon: Anchor,
      title: t("abroad.feature3.title"),
      desc: t("abroad.feature3.desc"),
    },
    {
      icon: TreePine,
      title: t("abroad.feature4.title"),
      desc: t("abroad.feature4.desc"),
    },
  ]

  return (
    <section id="terapia-exterior" className="py-20 bg-[#91A8D0]/10">
      <div className="container mx-auto px-4">
        <div className="flex justify-center mb-4">
          <div className="relative">
            <Globe className="w-12 h-12 text-[#91A8D0]" />
            <div className="absolute -top-1 -right-1 w-4 h-4 bg-[#CD8D7A] rounded-full flex items-center justify-center">
              <Plane className="w-2.5 h-2.5 text-white" />
            </div>
          </div>
        </div>

        <h2 className="font-serif text-3xl md:text-4xl text-[#2D3436] text-center mb-2">{t("abroad.title")}</h2>
        <p className="text-center text-[#2D3436]/70 mb-12 max-w-2xl mx-auto">{t("abroad.subtitle")}</p>

        <div className="max-w-5xl mx-auto">
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl border border-[#91A8D0]/20 overflow-hidden">
            <div className="grid md:grid-cols-2">
              {/* Lado esquerdo - Texto principal */}
              <div className="p-8 md:p-10">
                <div className="inline-flex items-center gap-2 bg-[#CD8D7A]/10 text-[#CD8D7A] px-4 py-2 rounded-full text-sm font-medium mb-6">
                  <Globe className="w-4 h-4" />
                  {t("abroad.badge")}
                </div>

                <h3 className="font-serif text-2xl text-[#2D3436] mb-4 leading-relaxed">{t("abroad.headline")}</h3>

                <p className="text-[#2D3436]/80 leading-relaxed mb-6">{t("abroad.copy")}</p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="https://wa.me/5581985122022?text=Olá,%20sou%20brasileiro(a)%20no%20exterior%20e%20gostaria%20de%20agendar%20uma%20sessão%20online."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-[#CD8D7A] hover:bg-[#b87a68] text-white px-6 py-3 rounded-full transition-all shadow-lg hover:shadow-xl font-medium"
                  >
                    {t("abroad.cta")}
                  </a>

                  <Link
                    href="/terapia-sem-fronteiras"
                    className="inline-flex items-center justify-center gap-2 bg-[#91A8D0] hover:bg-[#7a94be] text-white px-6 py-3 rounded-full transition-all shadow-lg hover:shadow-xl font-medium"
                  >
                    {t("abroad.learnMore")}
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              {/* Lado direito - Features */}
              <div className="bg-[#91A8D0]/5 p-8 md:p-10">
                <h4 className="font-serif text-lg text-[#2D3436] mb-6">{t("abroad.features.title")}</h4>

                <div className="space-y-5">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-[#91A8D0]/20 rounded-xl flex items-center justify-center flex-shrink-0">
                        <feature.icon className="w-5 h-5 text-[#91A8D0]" />
                      </div>
                      <div>
                        <h5 className="font-semibold text-[#2D3436] mb-1">{feature.title}</h5>
                        <p className="text-sm text-[#2D3436]/70">{feature.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Bandeiras representando alcance global */}
          <div className="flex justify-center gap-4 mt-8">
            <div className="flex items-center gap-2 text-sm text-[#2D3436]/60">
              <span className="text-xl">🇧🇷</span>
              <span className="text-xl">🇺🇸</span>
              <span className="text-xl">🇬🇧</span>
              <span className="text-xl">🇵🇹</span>
              <span className="text-xl">🇪🇸</span>
              <span className="text-xl">🇩🇪</span>
              <span className="text-xl">🇫🇷</span>
              <span className="text-xl">🇮🇹</span>
              <span className="text-xl">🇯🇵</span>
              <span className="text-xl">🇦🇺</span>
            </div>
          </div>
          <p className="text-center text-sm text-[#2D3436]/50 mt-2">{t("abroad.countries")}</p>
        </div>
      </div>
    </section>
  )
}
