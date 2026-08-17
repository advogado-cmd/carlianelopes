import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Image from "next/image"
import Link from "next/link"
import { BLOG_POSTS as articles } from "@/lib/blog/registry"
import { ArrowLeft, ArrowRight } from "lucide-react"

export const metadata = {
  title: "Blog | Carliane Lopes de Oliveira - Psicóloga",
  description: "Artigos sobre saúde mental, ansiedade, depressão, relacionamentos e bem-estar emocional.",
}


export default function BlogPage() {
  return (
    <>
      <Header />
      <main className="py-16 bg-[#e8f0f8]">
        <div className="container mx-auto px-4">
          <Link
            href="/"
            className="inline-flex items-center text-[#91A8D0] hover:text-[#CD8D7A] mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Voltar ao início
          </Link>

          <h1 className="font-serif text-3xl md:text-4xl text-[#2D3436] mb-4">Artigos sobre Saúde Mental</h1>
          <p className="text-[#2D3436]/70 mb-12 max-w-2xl">
            Conteúdos informativos sobre temas relacionados ao bem-estar emocional, escritos com base em evidências
            científicas e experiência clínica.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                  <span className="absolute top-3 left-3 bg-[#91A8D0] text-white text-xs px-3 py-1 rounded-full">
                    {article.category}
                  </span>
                </div>
                <div className="p-6">
                  <p className="text-xs text-[#91A8D0] mb-2">{article.date}</p>
                  <h2 className="font-serif text-xl text-[#2D3436] font-semibold mb-3 group-hover:text-[#CD8D7A] transition-colors">
                    {article.title}
                  </h2>
                  <p className="text-[#2D3436]/70 mb-4 text-sm leading-relaxed">{article.excerpt}</p>
                  <span className="inline-flex items-center text-sm text-[#CD8D7A] font-medium">
                    Ler artigo
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
