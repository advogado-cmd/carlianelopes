import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { EspecialidadeView } from "@/components/views/especialidade-view"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { WhatsAppFloat } from "@/components/layout/whatsapp-float"
import { JsonLd, breadcrumbSchema, faqSchema, serviceSchema } from "@/lib/seo/schema"
import { alternatesMetadata, especialidadeAlternates, especialidadePath } from "@/lib/i18n/routes"
import { ESPECIALIDADES, getEspecialidadeBySlug } from "@/lib/especialidades/registry"
import { assuntoEspecialidade } from "@/lib/whatsapp"

export const dynamicParams = false

export function generateStaticParams() {
  return ESPECIALIDADES.filter((e) => e.publicado.pt).map((e) => ({ slug: e.slug.pt }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const e = getEspecialidadeBySlug(slug, "pt")
  if (!e) return {}
  return {
    title: { absolute: e.seo.pt.title },
    description: e.seo.pt.description,
    alternates: alternatesMetadata(especialidadeAlternates(e.key), "pt"),
  }
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const e = getEspecialidadeBySlug(slug, "pt")
  if (!e) notFound()

  const url = especialidadePath(e.key, "pt")!

  return (
    <>
      <Header locale="pt" alternates={especialidadeAlternates(e.key)} />
      <main>
        <EspecialidadeView e={e} locale="pt" />
      </main>
      <Footer locale="pt" />
      <WhatsAppFloat locale="pt" origem={`especialidade:${e.key}`} assunto={assuntoEspecialidade("pt", e.titulo.pt)} />
      <JsonLd
        data={[
          serviceSchema(e, "pt", url),
          faqSchema(e.faq.pt),
          breadcrumbSchema([
            { name: "Início", url: "/" },
            { name: "Especialidades", url: "/especialidades" },
            { name: e.titulo.pt, url },
          ]),
        ]}
      />
    </>
  )
}
