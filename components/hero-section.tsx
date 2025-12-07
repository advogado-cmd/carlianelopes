"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Phone, ArrowDown, Globe, MapPin, Award } from "lucide-react"
import { useLanguage } from "@/lib/i18n"

export function HeroSection() {
  const { t } = useLanguage()

  return (
    <section className="relative bg-gradient-to-b from-[#e8f0f8] to-[#d6e4f0] py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl text-[#2D3436] leading-tight mb-6 text-balance">
              {t("hero.headline")}
            </h1>
            <p className="text-lg text-[#2D3436]/80 mb-4 leading-relaxed">{t("hero.subheadline")}</p>
            <p className="text-xl font-serif text-[#CD8D7A] font-semibold mb-6">Dra. Carliane Lopes de Oliveira</p>

            <div className="flex flex-wrap gap-3 mb-8">
              <span className="inline-flex items-center gap-2 bg-[#f4f8fc] text-[#2D3436] px-4 py-2 rounded-full text-sm border border-[#91A8D0]/30">
                <MapPin className="w-4 h-4 text-[#91A8D0]" />
                {t("hero.badge.location")}
              </span>
              <span className="inline-flex items-center gap-2 bg-[#f4f8fc] text-[#2D3436] px-4 py-2 rounded-full text-sm border border-[#91A8D0]/30">
                <Award className="w-4 h-4 text-[#CD8D7A]" />
                {t("hero.badge.crp")}
              </span>
              <span className="inline-flex items-center gap-2 bg-[#91A8D0]/20 text-[#2D3436] px-4 py-2 rounded-full text-sm border border-[#91A8D0]/40">
                <Globe className="w-4 h-4 text-[#91A8D0]" />
                {t("hero.badge.international")}
              </span>
              <span className="inline-flex items-center gap-2 bg-[#CD8D7A]/20 text-[#2D3436] px-4 py-2 rounded-full text-sm border border-[#CD8D7A]/40">
                <Globe className="w-4 h-4 text-[#CD8D7A]" />
                {t("hero.badge.global")}
              </span>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-[#CD8D7A] hover:bg-[#b87a68] text-white rounded-xl shadow-lg">
                <a href="https://wa.me/5581985122022" target="_blank" rel="noopener noreferrer">
                  <Phone className="w-5 h-5 mr-2" />
                  {t("hero.cta.primary")}
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-[#91A8D0] text-[#2D3436] hover:bg-[#91A8D0]/10 rounded-xl bg-transparent"
              >
                <a href="#sobre">
                  <ArrowDown className="w-5 h-5 mr-2" />
                  {t("hero.cta.secondary")}
                </a>
              </Button>
            </div>
          </div>

          <div className="order-1 md:order-2 flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-[#91A8D0]/20 rounded-3xl transform rotate-3"></div>
              <Image
                src="/images/screenshot-202025-12-01-20at-2010.png"
                alt="Dra. Carliane Lopes de Oliveira - Psicóloga"
                width={400}
                height={450}
                className="relative rounded-3xl shadow-2xl object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
