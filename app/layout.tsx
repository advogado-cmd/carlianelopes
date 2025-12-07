import type React from "react"
import type { Metadata, Viewport } from "next"
import { Lora, Lato } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import Script from "next/script"
import "./globals.css"
import { LanguageProvider } from "@/lib/i18n"

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
})

const lato = Lato({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--font-sans",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Carliane Lopes de Oliveira | Psicóloga em Recife - CRP 02/12727",
  description:
    "Psicóloga clínica com mais de 20 anos de experiência. Atendimento para ansiedade, depressão, terapia de casal, TEA e constelação familiar. Online e presencial em Recife/PE.",
  keywords: [
    "psicóloga recife",
    "terapia boa viagem",
    "psicóloga pina",
    "terapia online",
    "tcc recife",
    "constelação familiar",
    "psicóloga TEA",
  ],
  authors: [{ name: "Carliane Lopes de Oliveira" }],
  generator: "v0.app",
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
  openGraph: {
    title: "Carliane Lopes de Oliveira | Psicóloga em Recife",
    description: "Cuide da sua saúde mental com acolhimento, técnica e segurança. Atendimento online e presencial.",
    url: "https://www.carlianelopes.com.br",
    siteName: "Carliane Lopes de Oliveira - Psicóloga",
    images: [
      {
        url: "/images/carliane2-nf4qo.jpeg",
        width: 1200,
        height: 630,
        alt: "Dra. Carliane Lopes de Oliveira - Psicóloga",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Carliane Lopes de Oliveira | Psicóloga em Recife",
    description: "Cuide da sua saúde mental com acolhimento, técnica e segurança.",
    images: ["/images/carliane2-nf4qo.jpeg"],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export const viewport: Viewport = {
  themeColor: "#91A8D0",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className={`${lora.variable} ${lato.variable}`}>
      <head>
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-KCMG48FC');
          `}
        </Script>
        <Script src="https://www.googletagmanager.com/gtag/js?id=AW-17768277279" strategy="afterInteractive" />
        <Script id="google-ads" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-17768277279');
          `}
        </Script>
        <Script
          id="sa-dynamic-optimization"
          strategy="afterInteractive"
          data-uuid="9aa30e51-422c-4af6-b662-5e9b6d4f3899"
          src="data:text/javascript;base64,dmFyIHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoInNjcmlwdCIpO3NjcmlwdC5zZXRBdHRyaWJ1dGUoIm5vd3Byb2NrZXQiLCAiIik7c2NyaXB0LnNldEF0dHJpYnV0ZSgibml0cm8tZXhjbHVkZSIsICIiKTtzY3JpcHQuc3JjID0gImh0dHBzOi8vZGFzaGJvYXJkLnNlYXJjaGF0bGFzLmNvbS9zY3JpcHRzL2R5bmFtaWNfb3B0aW1pemF0aW9uLmpzIjtzY3JpcHQuZGF0YXNldC51dWlkID0gIjlhYTMwZTUxLTQyMmMtNGFmNi1iNjYyLTVlOWI2ZDRmMzg5OSI7c2NyaXB0LmlkID0gInNhLWR5bmFtaWMtb3B0aW1pemF0aW9uLWxvYWRlciI7ZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChzY3JpcHQpOw=="
        />
      </head>
      <body className="font-sans antialiased">
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-KCMG48FC"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <LanguageProvider>{children}</LanguageProvider>
        <Analytics />
      </body>
    </html>
  )
}
