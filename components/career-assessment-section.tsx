"use client"

import { BarChart3, Rocket, Scale, Award, Briefcase, ArrowRight } from "lucide-react"
import { useLanguage } from "@/lib/i18n"
import Link from "next/link"

export function CareerAssessmentSection() {
  const { t, language } = useLanguage()

  const services = [
    {
      icon: BarChart3,
      titleKey: "career.assessment.title",
      descKey: "career.assessment.desc",
    },
    {
      icon: Rocket,
      titleKey: "career.transition.title",
      descKey: "career.transition.desc",
    },
    {
      icon: Scale,
      titleKey: "career.executive.title",
      descKey: "career.executive.desc",
    },
  ]

  return (
    <section id="carreira" className="py-20 bg-[#2D3436]">
      <div className="container mx-auto px-4">
        {/* Section Icon */}
        <div className="flex justify-center mb-4">
          <Briefcase className="w-8 h-8 text-[#91A8D0]" />
        </div>

        {/* Title */}
        <h2 className="font-serif text-3xl md:text-4xl text-white text-center mb-2">{t("career.title")}</h2>
        <p className="text-center text-white/70 mb-12 max-w-2xl mx-auto">{t("career.subtitle")}</p>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-10">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-6 bg-[#3d4548] rounded-xl border border-[#91A8D0]/30 hover:border-[#91A8D0] transition-colors"
            >
              <service.icon className="w-10 h-10 text-[#91A8D0] mb-4" />
              <h3 className="font-serif text-lg text-white font-semibold mb-2">{t(service.titleKey)}</h3>
              <p className="text-white/70 text-sm leading-relaxed">{t(service.descKey)}</p>
            </div>
          ))}
        </div>

        {/* Differential Badge */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex items-center gap-2 bg-[#91A8D0]/20 px-4 py-2 rounded-full border border-[#91A8D0]/40">
            <Award className="w-5 h-5 text-[#91A8D0]" />
            <span className="text-white/90 text-sm">{t("career.differential")}</span>
          </div>
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            href="https://wa.me/5581985122022?text=Olá! Gostaria de saber mais sobre Avaliação Psicológica e Carreira."
            target="_blank"
            className="inline-flex items-center gap-2 bg-[#91A8D0] hover:bg-[#7a94c0] text-white px-8 py-3 rounded-xl font-medium transition-colors"
          >
            {t("career.cta")}
          </Link>
          <Link
            href="/avaliacao-psicologica"
            className="inline-flex items-center gap-2 border-2 border-[#CD8D7A] text-[#CD8D7A] hover:bg-[#CD8D7A] hover:text-white px-8 py-3 rounded-xl font-medium transition-colors"
          >
            {language === "pt" ? "Ver Soluções de Avaliação e Testes" : "View Assessment Solutions"}
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
