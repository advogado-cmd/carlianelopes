"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Newspaper } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/lib/i18n"

export function BlogSection() {
  const { t, language } = useLanguage()

  const articles = [
    {
      slug: "ansiedade-era-digital",
      title: t("blog.article1.title"),
      excerpt: t("blog.article1.excerpt"),
      image: "/person-meditating-peaceful-digital-detox.jpg",
      date: language === "pt" ? "15 Nov 2025" : "Nov 15, 2025",
    },
    {
      slug: "burnout-sinais-ajuda",
      title: t("blog.article2.title"),
      excerpt: t("blog.article2.excerpt"),
      image: "/professional-person-stress-relief-office.jpg",
      date: language === "pt" ? "10 Nov 2025" : "Nov 10, 2025",
    },
    {
      slug: "relacionamentos-saudaveis",
      title: t("blog.article3.title"),
      excerpt: t("blog.article3.excerpt"),
      image: "/couple-holding-hands-supportive-relationship.jpg",
      date: language === "pt" ? "05 Nov 2025" : "Nov 05, 2025",
    },
  ]

  return (
    <section id="blog" className="py-20 bg-[#e8f0f8]">
      <div className="container mx-auto px-4">
        <div className="flex justify-center mb-4">
          <Newspaper className="w-8 h-8 text-[#91A8D0]" />
        </div>

        <h2 className="font-serif text-3xl md:text-4xl text-[#2D3436] text-center mb-2">{t("blog.title")}</h2>
        <p className="text-center text-[#2D3436]/70 mb-12">{t("blog.subtitle")}</p>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {articles.map((article) => (
            <Link
              key={article.slug}
              href={`/blog/${article.slug}`}
              className="group bg-[#f4f8fc] rounded-2xl overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={article.image || "/placeholder.svg"}
                  alt={article.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <p className="text-xs text-[#91A8D0] mb-2">{article.date}</p>
                <h3 className="font-serif text-lg text-[#2D3436] font-semibold mb-2 group-hover:text-[#CD8D7A] transition-colors">
                  {article.title}
                </h3>
                <p className="text-sm text-[#2D3436]/70 mb-4">{article.excerpt}</p>
                <span className="inline-flex items-center text-sm text-[#CD8D7A] font-medium">
                  {t("blog.readMore")}
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-10">
          <Button
            asChild
            variant="outline"
            className="border-[#91A8D0] text-[#2D3436] hover:bg-[#91A8D0]/10 rounded-xl bg-transparent"
          >
            <Link href="/blog">
              {t("blog.viewAll")}
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
