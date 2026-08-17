import type { Metadata } from "next"
import { HomeView } from "@/components/views/home-view"
import { ContactSection } from "@/components/views/contact-section"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { WhatsAppFloat } from "@/components/layout/whatsapp-float"
import { JsonLd, psychologistSchema } from "@/lib/seo/schema"
import { PAGES, alternatesMetadata } from "@/lib/i18n/routes"

export const metadata: Metadata = {
  title: { absolute: "Psicóloga em Recife e online — CRP 02/12727" },
  description:
    "Psicóloga clínica, mais de 20 anos de atuação. Ansiedade, depressão, casal, luto, crise e trauma. Online para o Brasil e o exterior, presencial em Recife.",
  alternates: alternatesMetadata(PAGES.home, "pt"),
}

export default function Page() {
  return (
    <>
      <Header locale="pt" alternates={PAGES.home} />
      <main>
        <HomeView locale="pt" />
        <ContactSection locale="pt" />
      </main>
      <Footer locale="pt" />
      <WhatsAppFloat locale="pt" origem="home" />
      <JsonLd data={[psychologistSchema("pt")]} />
    </>
  )
}
