import { NextResponse, type NextRequest } from "next/server"

/**
 * Migração de URLs.
 *
 * O sitemap antigo (app/sitemap.ts) anunciava ao Google oito slugs de blog.
 * Só dois existiam de verdade no código. Os outros seis vinham respondendo
 * 404 desde sempre — 404 silencioso, que o Search Console acumula sem que
 * ninguém veja.
 *
 * Aqui cada um recebe o tratamento certo:
 *   · 301 quando existe um equivalente real;
 *   · 410 (Gone) quando não existe — é o que encerra o ciclo de rastreio,
 *     em vez de deixar o Google tentando de novo por meses.
 *
 * Cobrimos as duas formas de cada URL (/slug e /blog/slug), porque o
 * relatório do GSC costuma listar só uma e o Google conhece as outras.
 */

const REDIRECTS: Record<string, string> = {
  "constelacao-familiar-cura-padroes": "/blog/constelacao-familiar-cura",
  "terapia-casal-comunicacao": "/blog/terapia-casal-relacionamentos",
  "ansiedade-depressao-sinais-tratamento": "/blog/ansiedade-depressao-tratamento",
  "autismo-tea-aba": "/blog/autismo-tea-suporte",
}

/** Nunca existiram como página. 410 encerra o assunto. */
const GONE = new Set(["constelacao-sistemica", "saude-mental-corporativa"])

/**
 * Subdomínio 5minutos.carlianelopes.com.br
 *
 * O Protocolo dos 5 Minutos é uma página estática autocontida em
 * public/5minutos/. O subdomínio aponta para este mesmo projeto na Vercel,
 * então aqui reescrevemos a raiz daquele host para o arquivo — a URL que a
 * pessoa vê continua sendo 5minutos.carlianelopes.com.br/.
 */
const PROTOCOLO_HOST = "5minutos."
const PROTOCOLO_FILE = "/5minutos/index.html"

function normalize(pathname: string): string {
  const withoutTrailing = pathname.length > 1 ? pathname.replace(/\/+$/, "") : pathname
  return withoutTrailing.replace(/^\/blog\//, "/").replace(/\/feed$/, "")
}

export function middleware(request: NextRequest) {
  const host = request.headers.get("host") ?? ""

  if (host.startsWith(PROTOCOLO_HOST)) {
    const path = request.nextUrl.pathname
    if (path === "/" || path === "" || path === "/index.html") {
      return NextResponse.rewrite(new URL(PROTOCOLO_FILE, request.url))
    }
    return NextResponse.next()
  }

  const slug = normalize(request.nextUrl.pathname).replace(/^\//, "")

  if (REDIRECTS[slug]) {
    return NextResponse.redirect(new URL(REDIRECTS[slug], request.url), 301)
  }

  if (GONE.has(slug)) {
    return new NextResponse(null, { status: 410 })
  }

  return NextResponse.next()
}

export const config = {
  matcher: ["/((?!_next|api|images|favicon|.*\\.).*)"],
}
