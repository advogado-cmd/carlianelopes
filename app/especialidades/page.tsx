import type { Metadata } from "next"
import { EspecialidadesHubView } from "@/components/views/especialidades-hub-view"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { WhatsAppFloat } from "@/components/layout/whatsapp-float"
import { JsonLd, breadcrumbSchema } from "@/lib/seo/schema"
import { PAGES, alternatesMetadata } from "@/lib/i18n/routes"

export const metadata: Metadata = {
  title: { absolute: "Especialidades — psicóloga online e em Recife" },
  description:
    "Áreas de atuação clínica: ansiedade, depressão, casal, luto, crise e trauma, expatriação. Online e presencial em Boa Viagem, Recife.",
  alternates: alternatesMetadata(PAGES.especialidades, "pt"),
}

export default function Page() {
  return (
    <>
      <Header locale="pt" alternates={PAGES.especialidades} />
      <main>
        <EspecialidadesHubView locale="pt" />
      </main>
      <Footer locale="pt" />
      <WhatsAppFloat locale="pt" origem="hub-especialidades" />
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Início", url: "/" },
            { name: "Especialidades", url: "/especialidades" },
          ]),
        ]}
      />
    </>
  )
}
