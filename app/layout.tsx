import type React from "react"
import type { Metadata, Viewport } from "next"
import { Newsreader, Figtree } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import Script from "next/script"
import "./globals.css"
import { LanguageProvider } from "@/lib/i18n"
import { SITE_URL } from "@/lib/i18n/locales"

/**
 * Newsreader nos títulos e no corpo dos textos longos — é onde mora a
 * autoridade quieta. Figtree na interface, ecoando a sans geométrica
 * humanista da assinatura. Ver Design System v1.0, § 4.
 */
const newsreader = Newsreader({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-newsreader",
  display: "swap",
})

const figtree = Figtree({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-figtree",
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Carliane Lopes de Oliveira — Psicóloga em Recife e online | CRP 02/12727",
    template: "%s | Carliane Lopes de Oliveira",
  },
  description:
    "Psicóloga clínica com mais de 20 anos de atuação. Ansiedade, depressão, terapia de casal, luto, crise e trauma. Online para o Brasil e o exterior, presencial em Boa Viagem, Recife.",
  authors: [{ name: "Carliane Lopes de Oliveira" }],
  creator: "Carliane Lopes de Oliveira",
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
  openGraph: {
    siteName: "Carliane Lopes de Oliveira — Psicóloga",
    locale: "pt_BR",
    alternateLocale: ["en", "es"],
    type: "website",
  },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
}

export const viewport: Viewport = {
  themeColor: "#22345F",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${newsreader.variable} ${figtree.variable}`}>
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
        {/* LanguageProvider serve apenas às páginas legadas ainda não migradas
            (terapia-sem-fronteiras e avaliação psicológica). Sai na fase 2. */}
        <LanguageProvider>{children}</LanguageProvider>
        <Analytics />
      </body>
    </html>
  )
}
