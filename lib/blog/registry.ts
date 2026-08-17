import type { Locale } from "@/lib/i18n/locales"

/**
 * Registry do blog.
 *
 * FONTE ÚNICA dos posts. Antes desta migração havia duas listas paralelas:
 * um array dentro de app/blog/page.tsx e outra lista de slugs escrita à mão
 * em app/sitemap.ts. As duas divergiam — o sitemap anunciava ao Google seis
 * URLs que nunca existiram. Os 301 e 410 desses slugs estão em middleware.ts.
 *
 * Na fase 2 este registry é substituído pelo Payload CMS, mantendo o mesmo
 * formato como fallback em código (§ 4 das Instruções do Projeto).
 */

export interface BlogPost {
  slug: string
  title: string
  excerpt: string
  image: string
  date: string
  category: string
  /** Idiomas em que o post está publicado. Blog nasce PT; EN/ES na fase 3. */
  locales?: Locale[]
}

export const BLOG_POSTS: BlogPost[] = [
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

export function getPost(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((p) => p.slug === slug)
}
