"use client"

import Image from "next/image"
import { Award, Globe, Heart, Sparkles, User } from "lucide-react"
import { useLanguage } from "@/lib/i18n"

export function AboutSection() {
  const { t } = useLanguage()

  const stats = [
    { icon: Award, value: "20+", label: t("about.stats.experience") },
    { icon: Globe, value: "8+", label: t("about.stats.specializations") },
    { icon: Heart, value: "Global", label: t("about.stats.patients") },
  ]

  return (
    <section id="sobre" className="py-20 bg-[#f4f8fc]">
      <div className="container mx-auto px-4">
        <div className="flex justify-center mb-4">
          <User className="w-8 h-8 text-[#91A8D0]" />
        </div>

        <h2 className="font-serif text-3xl md:text-4xl text-[#2D3436] text-center mb-2">{t("about.title")}</h2>
        <p className="text-center text-[#2D3436]/70 mb-12">{t("about.subtitle")}</p>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="absolute inset-0 bg-[#CD8D7A]/10 rounded-3xl transform -rotate-3"></div>
            <Image
              src="/images/carliane01.jpeg"
              alt="Dra. Carliane Lopes de Oliveira"
              width={500}
              height={600}
              className="relative rounded-3xl shadow-xl object-cover"
            />
          </div>

          <div>
            <div className="space-y-4 text-[#2D3436]/80 leading-relaxed">
              <p>{t("about.paragraph1")}</p>
              <p>{t("about.paragraph2")}</p>
            </div>

            <div className="mt-6 p-5 bg-[#91A8D0]/10 rounded-2xl border border-[#91A8D0]/30">
              <div className="flex items-start gap-3">
                <Globe className="w-6 h-6 text-[#91A8D0] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-serif text-lg text-[#2D3436] font-semibold mb-2">
                    {t("about.international.title")}
                  </h3>
                  <p className="text-[#2D3436]/80 text-sm leading-relaxed">{t("about.international.desc")}</p>
                  <p className="text-[#CD8D7A] text-sm font-medium mt-2">{t("about.international.availability")}</p>
                </div>
              </div>
            </div>

            <div className="mt-6 p-5 bg-[#d6e4f0] rounded-2xl border border-[#91A8D0]/30">
              <div className="flex items-start gap-3">
                <Sparkles className="w-6 h-6 text-[#91A8D0] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-serif text-lg text-[#2D3436] font-semibold mb-2">
                    {t("about.meditation.title")}
                  </h3>
                  <p className="text-[#2D3436]/80 text-sm leading-relaxed">{t("about.meditation.desc")}</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4 mt-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center p-4 bg-[#e8f0f8] rounded-2xl">
                  <stat.icon className="w-6 h-6 text-[#91A8D0] mx-auto mb-2" />
                  <div className="text-2xl font-bold text-[#CD8D7A]">{stat.value}</div>
                  <div className="text-xs text-[#2D3436]/70">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
