import type { Metadata } from "next"
import { TherapyAbroadPageContent } from "@/components/therapy-abroad-page-content"

export const metadata: Metadata = {
  title: "Terapia Sem Fronteiras | Psicóloga para Brasileiros no Exterior | Dra. Carliane Lopes",
  description:
    "Psicóloga para brasileiros no exterior. Programa especializado em adaptação cultural, gestão da saudade e ansiedade migratória. Atendimento Online Global. Dra. Carliane Lopes.",
  keywords: [
    "psicóloga brasileiros exterior",
    "terapia online expatriados",
    "psicóloga portuguesa exterior",
    "ansiedade migratória",
    "adaptação cultural",
    "saudade brasil",
    "terapia online global",
  ],
  openGraph: {
    title: "Terapia Sem Fronteiras | Dra. Carliane Lopes",
    description:
      "Acolhimento psicológico especializado para brasileiros que vivem no exterior ou estão planejando sua mudança.",
    type: "website",
    locale: "pt_BR",
    url: "https://www.carlianelopes.com.br/terapia-sem-fronteiras",
  },
}

export default function TerapiaSemFronteirasPage() {
  return <TherapyAbroadPageContent />
}
