import type { Metadata } from "next"
import { PsychologicalAssessmentPageContent } from "@/components/psychological-assessment-page-content"

export const metadata: Metadata = {
  title: "Avaliação Psicológica, Carreira e Consultoria | Dra. Carliane Lopes de Oliveira",
  description:
    "Diagnósticos psicológicos validados para Carreira, Saúde Mental, Família e Seleção Corporativa. Testes privativos aplicados por psicóloga especialista.",
  keywords: [
    "avaliação psicológica",
    "testes psicológicos",
    "psicologia organizacional",
    "recrutamento e seleção",
    "avaliação de personalidade",
    "NEO-PI-R",
    "Big Five",
    "TDAH",
    "burnout",
    "Recife",
  ],
  openGraph: {
    title: "Avaliação Psicológica e Carreira | Dra. Carliane Lopes",
    description: "Diagnósticos psicológicos validados para Carreira, Saúde Mental, Família e Seleção Corporativa.",
    type: "website",
  },
}

export default function AvaliacaoPsicologicaPage() {
  return <PsychologicalAssessmentPageContent />
}
