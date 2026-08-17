import type { Locale, Localized } from "@/lib/i18n/locales"

/**
 * Currículo e trajetória — FONTE ÚNICA.
 *
 * Todo o conteúdo desta página vem do site anterior, sem acréscimo:
 * formações, instituições, anos, publicações e experiência são os mesmos.
 * Nada aqui foi inventado. Se um item precisar mudar, muda aqui e muda em
 * todo lugar que o exibe.
 *
 * Conformidade (§ 18): formação é descrita como formação — nunca como
 * "especialidade", que é título com registro no CFP. Constelação Familiar,
 * Yoga Nidra e Estimulação Neural aparecem no bloco de práticas
 * complementares, separadas das formações em Psicologia.
 *
 * ⚠️ PENDENTE: o DEI recomenda renomear "Estimulação Neural" (o termo sugere
 * procedimento neurológico). Mantido o nome oficial do curso até a Carliane
 * decidir como quer nomear a prática.
 */

export interface Item {
  /** Ano ou período. Vazio quando não se aplica. */
  quando: string
  titulo: string
  instituicao?: string
  detalhe?: string
}

export interface Bloco {
  chave: string
  titulo: Localized<string>
  itens: Localized<Item[]>
}

export const PREMIO: Localized<{ titulo: string; detalhe: string }> = {
  pt: {
    titulo: "Prêmio Excelência em Saúde Mental",
    detalhe: "Troféu Expressão Pernambucana, 2019",
  },
  en: {
    titulo: "Award for Excellence in Mental Health",
    detalhe: "Troféu Expressão Pernambucana, 2019",
  },
  es: {
    titulo: "Premio Excelencia en Salud Mental",
    detalhe: "Troféu Expressão Pernambucana, 2019",
  },
}

export const CURRICULO: Bloco[] = [
  {
    chave: "formacao",
    titulo: {
      pt: "Formação em Psicologia",
      en: "Training in Psychology",
      es: "Formación en Psicología",
    },
    itens: {
      pt: [
        { quando: "2005", titulo: "Graduação em Psicologia", instituicao: "ESUDA" },
        { quando: "2008", titulo: "Intervenções em Psicologia Clínica", instituicao: "UNICAP" },
        { quando: "2013", titulo: "Psicologia do Trânsito", instituicao: "UNIP" },
        { quando: "2013", titulo: "Psicologia Organizacional e do Trabalho", instituicao: "IDE" },
        { quando: "2014", titulo: "Saúde Mental e Dependência Química", instituicao: "IDE" },
      ],
      en: [
        { quando: "2005", titulo: "Degree in Psychology", instituicao: "ESUDA" },
        { quando: "2008", titulo: "Interventions in Clinical Psychology", instituicao: "UNICAP" },
        { quando: "2013", titulo: "Traffic Psychology", instituicao: "UNIP" },
        { quando: "2013", titulo: "Organisational and Work Psychology", instituicao: "IDE" },
        { quando: "2014", titulo: "Mental Health and Substance Dependence", instituicao: "IDE" },
      ],
      es: [
        { quando: "2005", titulo: "Licenciatura en Psicología", instituicao: "ESUDA" },
        { quando: "2008", titulo: "Intervenciones en Psicología Clínica", instituicao: "UNICAP" },
        { quando: "2013", titulo: "Psicología del Tránsito", instituicao: "UNIP" },
        { quando: "2013", titulo: "Psicología Organizacional y del Trabajo", instituicao: "IDE" },
        { quando: "2014", titulo: "Salud Mental y Dependencia Química", instituicao: "IDE" },
      ],
    },
  },
  {
    chave: "andamento",
    titulo: {
      pt: "Formação continuada — em andamento",
      en: "Continuing education — in progress",
      es: "Formación continuada — en curso",
    },
    itens: {
      pt: [
        { quando: "", titulo: "Pós-graduação em Terapia Cognitivo-Comportamental (TCC)", instituicao: "Minas Faculdade" },
        { quando: "", titulo: "Pós-graduação em Análise do Comportamento Aplicada (ABA)", instituicao: "Minas Faculdade" },
        { quando: "", titulo: "Pós-graduação em Transtorno do Espectro Autista (TEA)", instituicao: "Minas Faculdade" },
      ],
      en: [
        { quando: "", titulo: "Postgraduate studies in Cognitive Behavioural Therapy (CBT)", instituicao: "Minas Faculdade" },
        { quando: "", titulo: "Postgraduate studies in Applied Behaviour Analysis (ABA)", instituicao: "Minas Faculdade" },
        { quando: "", titulo: "Postgraduate studies in Autism Spectrum Disorder (ASD)", instituicao: "Minas Faculdade" },
      ],
      es: [
        { quando: "", titulo: "Posgrado en Terapia Cognitivo-Conductual (TCC)", instituicao: "Minas Faculdade" },
        { quando: "", titulo: "Posgrado en Análisis Aplicado del Comportamiento (ABA)", instituicao: "Minas Faculdade" },
        { quando: "", titulo: "Posgrado en Trastorno del Espectro Autista (TEA)", instituicao: "Minas Faculdade" },
      ],
    },
  },
  {
    chave: "internacional",
    titulo: {
      pt: "Formação internacional e práticas complementares",
      en: "International training and complementary practices",
      es: "Formación internacional y prácticas complementarias",
    },
    itens: {
      pt: [
        { quando: "2023", titulo: "Constelações Familiares", instituicao: "Hellinger Schule, Alemanha" },
        { quando: "2023", titulo: "Constelação Familiar Original Hellinger", instituicao: "Faculdade Innovare" },
        { quando: "2020", titulo: "Yoga Nidra", instituicao: "Govardhan School of Yoga, Mumbai, Índia" },
        {
          quando: "2025",
          titulo: "Estimulação Neural",
          instituicao: "Instituto Internacional de Estimulación Neural y Terapies Naturales · Mãos Sem Fronteiras, Paraná",
        },
        {
          quando: "2025",
          titulo: "CH6 — Tratamento à Distância",
          instituicao: "La Jardinera · Mãos Sem Fronteiras, Curitiba",
        },
      ],
      en: [
        { quando: "2023", titulo: "Family Constellations", instituicao: "Hellinger Schule, Germany" },
        { quando: "2023", titulo: "Original Hellinger Family Constellation", instituicao: "Faculdade Innovare" },
        { quando: "2020", titulo: "Yoga Nidra", instituicao: "Govardhan School of Yoga, Mumbai, India" },
        {
          quando: "2025",
          titulo: "Neural Stimulation",
          instituicao: "Instituto Internacional de Estimulación Neural y Terapies Naturales · Mãos Sem Fronteiras, Paraná",
        },
        {
          quando: "2025",
          titulo: "CH6 — Distance Treatment",
          instituicao: "La Jardinera · Mãos Sem Fronteiras, Curitiba",
        },
      ],
      es: [
        { quando: "2023", titulo: "Constelaciones Familiares", instituicao: "Hellinger Schule, Alemania" },
        { quando: "2023", titulo: "Constelación Familiar Original Hellinger", instituicao: "Faculdade Innovare" },
        { quando: "2020", titulo: "Yoga Nidra", instituicao: "Govardhan School of Yoga, Mumbai, India" },
        {
          quando: "2025",
          titulo: "Estimulación Neural",
          instituicao: "Instituto Internacional de Estimulación Neural y Terapies Naturales · Mãos Sem Fronteiras, Paraná",
        },
        {
          quando: "2025",
          titulo: "CH6 — Tratamiento a Distancia",
          instituicao: "La Jardinera · Mãos Sem Fronteiras, Curitiba",
        },
      ],
    },
  },
  {
    chave: "experiencia",
    titulo: {
      pt: "Experiência profissional",
      en: "Professional experience",
      es: "Experiencia profesional",
    },
    itens: {
      pt: [
        { quando: "2005 — atual", titulo: "Psicóloga clínica", instituicao: "Consultório próprio" },
        {
          quando: "2013 — 2024",
          titulo: "Gestão psicossocial e clínica",
          instituicao: "Hospital Novo Nascer",
          detalhe:
            "Desenvolvimento de programa de tratamento interdisciplinar, atendimento clínico e intervenção em crises, programa de meditação em parceria com o Instituto David Lynch e programa de desenvolvimento de gestores por meio de atividades em grupo.",
        },
        {
          quando: "2010 — 2013",
          titulo: "Psicóloga clínica e organizacional",
          instituicao: "RHX Consultoria",
        },
      ],
      en: [
        { quando: "2005 — present", titulo: "Clinical psychologist", instituicao: "Private practice" },
        {
          quando: "2013 — 2024",
          titulo: "Psychosocial and clinical management",
          instituicao: "Hospital Novo Nascer",
          detalhe:
            "Built an interdisciplinary treatment programme, provided clinical care and crisis intervention, ran a meditation programme in partnership with the David Lynch Institute, and developed a management training programme through group work.",
        },
        {
          quando: "2010 — 2013",
          titulo: "Clinical and organisational psychologist",
          instituicao: "RHX Consultoria",
        },
      ],
      es: [
        { quando: "2005 — actual", titulo: "Psicóloga clínica", instituicao: "Consulta propia" },
        {
          quando: "2013 — 2024",
          titulo: "Gestión psicosocial y clínica",
          instituicao: "Hospital Novo Nascer",
          detalhe:
            "Desarrollo de un programa de tratamiento interdisciplinario, atención clínica e intervención en crisis, programa de meditación en alianza con el Instituto David Lynch y programa de desarrollo de gestores mediante actividades grupales.",
        },
        {
          quando: "2010 — 2013",
          titulo: "Psicóloga clínica y organizacional",
          instituicao: "RHX Consultoria",
        },
      ],
    },
  },
  {
    chave: "publicacoes",
    titulo: {
      pt: "Publicações",
      en: "Publications",
      es: "Publicaciones",
    },
    itens: {
      pt: [
        {
          quando: "2025",
          titulo: "Família, destinos e constelações: os laços familiares em desenhos animados",
          instituicao: "eBook Kindle",
        },
        {
          quando: "2004",
          titulo: "Prevalência de temas traumáticos numa população universitária",
          instituicao: "VIII Jornada Nordestina de Psiquiatria",
        },
        {
          quando: "2003",
          titulo: "Normatização do teste R2 para população infantil em Recife",
          instituicao: "III Congresso Norte-Nordeste de Psicologia",
        },
      ],
      en: [
        {
          quando: "2025",
          titulo: "Família, destinos e constelações: os laços familiares em desenhos animados",
          instituicao: "Kindle eBook",
        },
        {
          quando: "2004",
          titulo: "Prevalence of traumatic themes in a university population",
          instituicao: "VIII Jornada Nordestina de Psiquiatria",
        },
        {
          quando: "2003",
          titulo: "Standardisation of the R2 test for children in Recife",
          instituicao: "III Congresso Norte-Nordeste de Psicologia",
        },
      ],
      es: [
        {
          quando: "2025",
          titulo: "Família, destinos e constelações: os laços familiares em desenhos animados",
          instituicao: "eBook Kindle",
        },
        {
          quando: "2004",
          titulo: "Prevalencia de temas traumáticos en una población universitaria",
          instituicao: "VIII Jornada Nordestina de Psiquiatria",
        },
        {
          quando: "2003",
          titulo: "Normatización del test R2 para población infantil en Recife",
          instituicao: "III Congresso Norte-Nordeste de Psicologia",
        },
      ],
    },
  },
]

export function curriculo(locale: Locale) {
  return CURRICULO.map((b) => ({ chave: b.chave, titulo: b.titulo[locale], itens: b.itens[locale] }))
}
