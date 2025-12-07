import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, ArrowRight } from "lucide-react"

export const metadata = {
  title: "Blog | Carliane Lopes de Oliveira - Psicóloga",
  description: "Artigos sobre saúde mental, ansiedade, depressão, relacionamentos e bem-estar emocional.",
}

const articles = [
  {
    slug: "ansiedade-era-digital",
    title: "Ansiedade na Era Digital: Como Proteger Sua Saúde Mental",
    excerpt:
      "A hiperconectividade do mundo moderno traz desafios únicos para nossa saúde mental. Descubra estratégias práticas para encontrar equilíbrio.",
    image: "/person-meditating-peaceful-digital-detox.jpg",
    date: "15 Nov 2025",
    category: "Ansiedade",
  },
  {
    slug: "burnout-sinais-ajuda",
    title: "Burnout: Reconhecendo os Sinais e Buscando Ajuda",
    excerpt:
      "O esgotamento profissional afeta milhões de pessoas. Aprenda a identificar os sintomas e entenda quando buscar apoio profissional.",
    image: "/professional-person-stress-relief-office.jpg",
    date: "10 Nov 2025",
    category: "Saúde no Trabalho",
  },
  {
    slug: "relacionamentos-saudaveis",
    title: "Relacionamentos Saudáveis: A Base do Bem-Estar Emocional",
    excerpt:
      "Conexões genuínas são fundamentais para nossa saúde mental. Explore como cultivar relacionamentos que nutrem sua alma.",
    image: "/couple-holding-hands-supportive-relationship.jpg",
    date: "05 Nov 2025",
    category: "Relacionamentos",
  },
  {
    slug: "ansiedade-depressao-tratamento",
    title: "Ansiedade e Depressão: Entendendo e Tratando",
    excerpt:
      "Compreenda as diferenças entre ansiedade normal e patológica, reconheça os sinais da depressão e saiba como a TCC pode ajudar.",
    image: "/person-finding-hope-sunshine-through-window.jpg",
    date: "01 Nov 2025",
    category: "Ansiedade e Depressão",
  },
  {
    slug: "gestao-crises-traumas",
    title: "Gestão de Crises e Traumas: Como a Terapia Pode Ajudar",
    excerpt:
      "Experiências traumáticas deixam marcas, mas a recuperação é possível. Entenda como o suporte profissional pode auxiliar nessa jornada.",
    image: "/person-rebuilding-strength-after-storm-peaceful.jpg",
    date: "28 Out 2025",
    category: "Traumas",
  },
  {
    slug: "terapia-casal-relacionamentos",
    title: "Terapia de Casal: Reconstruindo Conexões",
    excerpt:
      "Quando a comunicação falha e os conflitos se repetem, a terapia de casal pode ajudar a reconectar parceiros e fortalecer o relacionamento.",
    image: "/couple-holding-hands-reconciliation-sunset.jpg",
    date: "25 Out 2025",
    category: "Terapia de Casal",
  },
  {
    slug: "autismo-tea-suporte",
    title: "Autismo (TEA): Suporte Especializado para Famílias",
    excerpt:
      "Cada pessoa no espectro autista é única. Conheça a abordagem ABA e como o suporte profissional beneficia toda a família.",
    image: "/child-playing-colorful-puzzle-family-support.jpg",
    date: "22 Out 2025",
    category: "Autismo e ABA",
  },
  {
    slug: "constelacao-familiar-cura",
    title: "Constelação Familiar: Compreendendo Padrões Sistêmicos",
    excerpt:
      "Descubra como padrões familiares transgeracionais influenciam sua vida e como a Constelação Familiar pode trazer clareza e libertação.",
    image: "/family-tree-roots-growing-strong-connection.jpg",
    date: "18 Out 2025",
    category: "Constelação Familiar",
  },
  {
    slug: "saude-mental-trabalho",
    title: "Saúde Mental no Trabalho: Prevenindo o Esgotamento",
    excerpt:
      "O ambiente de trabalho impacta diretamente a saúde mental. Aprenda a identificar riscos e desenvolver estratégias de autocuidado.",
    image: "/professional-person-balanced-life-work-wellness.jpg",
    date: "15 Out 2025",
    category: "Saúde no Trabalho",
  },
]

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
