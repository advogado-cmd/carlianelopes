"use client"

import Image from "next/image"
import { Heart, Users, Sparkles, BookOpen } from "lucide-react"
import { useLanguage } from "@/lib/i18n"

export function BookSection() {
  const { t } = useLanguage()

  const themes = [
    {
      icon: Users,
      text: t("book.theme1"),
    },
    {
      icon: Heart,
      text: t("book.theme2"),
    },
    {
      icon: Sparkles,
      text: t("book.theme3"),
    },
  ]

  return (
    <section id="livro" className="py-20 bg-[#f4f8fc]">
      <div className="container mx-auto px-4">
        <div className="flex justify-center mb-4">
          <BookOpen className="w-8 h-8 text-[#91A8D0]" />
        </div>

        <h2 className="font-serif text-3xl md:text-4xl text-[#2D3436] text-center mb-2">{t("book.title")}</h2>
        <p className="text-center text-[#2D3436]/70 mb-12">{t("book.subtitle.section")}</p>

        <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
          <div className="flex justify-center">
            <div className="relative group">
              <div className="absolute inset-0 bg-[#CD8D7A]/20 rounded-2xl transform rotate-3 group-hover:rotate-6 transition-transform"></div>
              <Image
                src="/images/book-cover.jpeg"
                alt="Livro Família, Destinos e Constelações"
                width={300}
                height={420}
                className="relative rounded-2xl shadow-xl group-hover:shadow-2xl transition-shadow"
              />
            </div>
          </div>

          <div>
            <h3 className="font-serif text-2xl text-[#CD8D7A] mb-2">{t("book.name")}</h3>
            <p className="text-[#2D3436]/70 italic mb-6">{t("book.subtitle")}</p>

            <p className="text-[#2D3436]/80 mb-6 leading-relaxed">{t("book.about")}</p>

            <h4 className="font-serif text-lg text-[#2D3436] font-semibold mb-4">{t("book.contribution.title")}</h4>
            <p className="text-[#2D3436]/80 mb-6 leading-relaxed">{t("book.contribution.text")}</p>

            <div className="space-y-4">
              {themes.map((theme, index) => (
                <div key={index} className="flex items-start gap-3">
                  <theme.icon className="w-5 h-5 text-[#91A8D0] flex-shrink-0 mt-1" />
                  <p className="text-[#2D3436]/70">{theme.text}</p>
                </div>
              ))}
            </div>

            <p className="mt-6 text-[#CD8D7A] font-medium italic">{t("book.conclusion")}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
