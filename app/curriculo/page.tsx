import type { Metadata } from "next"
import { CurriculoView } from "@/components/views/curriculo-view"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { WhatsAppFloat } from "@/components/layout/whatsapp-float"
import { PAGES, alternatesMetadata } from "@/lib/i18n/routes"
import { chrome } from "@/lib/i18n/chrome"

const c = chrome("pt")

export const metadata: Metadata = {
  title: { absolute: c.seo.curriculoTitle },
  description: c.seo.curriculoDescription,
  alternates: alternatesMetadata(PAGES.curriculo, "pt"),
}

export default function Page() {
  return (
    <>
      <Header locale="pt" alternates={PAGES.curriculo} />
      <main>
        <CurriculoView locale="pt" />
      </main>
      <Footer locale="pt" />
      <WhatsAppFloat locale="pt" origem="curriculo" />
    </>
  )
}
