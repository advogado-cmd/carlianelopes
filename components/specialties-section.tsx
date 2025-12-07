"use client"

import { Brain, Heart, Users, Puzzle, Network, Briefcase, HeartHandshake } from "lucide-react"
import { useLanguage } from "@/lib/i18n"

export function SpecialtiesSection() {
  const { t } = useLanguage()

  const specialties = [
    {
      icon: Brain,
      title: t("specialties.anxiety.title"),
      description: t("specialties.anxiety.desc"),
    },
    {
      icon: Heart,
      title: t("specialties.crisis.title"),
      description: t("specialties.crisis.desc"),
    },
    {
      icon: Users,
      title: t("specialties.couples.title"),
      description: t("specialties.couples.desc"),
    },
    {
      icon: Puzzle,
      title: t("specialties.autism.title"),
      description: t("specialties.autism.desc"),
    },
    {
      icon: Network,
      title: t("specialties.constellation.title"),
      description: t("specialties.constellation.desc"),
    },
    {
      icon: Briefcase,
      title: t("specialties.burnout.title"),
      description: t("specialties.burnout.desc"),
    },
  ]

  return (
    <section id="especialidades" className="py-20 bg-[#f4f8fc]">
      <div className="container mx-auto px-4">
        <div className="flex justify-center mb-4">
          <HeartHandshake className="w-8 h-8 text-[#91A8D0]" />
        </div>

        <h2 className="font-serif text-3xl md:text-4xl text-[#2D3436] text-center mb-2">{t("specialties.title")}</h2>
        <p className="text-center text-[#2D3436]/70 mb-12">{t("specialties.subtitle")}</p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {specialties.map((specialty, index) => (
            <div
              key={index}
              className="bg-[#e8f0f8] p-6 rounded-2xl hover:shadow-lg transition-shadow border border-[#91A8D0]/20"
            >
              <specialty.icon className="w-10 h-10 text-[#91A8D0] mb-4" />
              <h3 className="font-serif text-lg text-[#2D3436] font-semibold mb-2">{specialty.title}</h3>
              <p className="text-[#2D3436]/70 text-sm">{specialty.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
