/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // O PETROPSI é um único index.html de 7,5 MB servido de public/. Sem estes
  // cabeçalhos o navegador guarda a cópia antiga e um ajuste recém-publicado
  // "não aparece" — que foi exatamente o que aconteceu na 2.8.1.
  async headers() {
    return [
      {
        source: "/petropsi/:path*",
        headers: [
          { key: "Cache-Control", value: "public, max-age=0, must-revalidate" },
        ],
      },
      {
        source: "/",
        has: [{ type: "host", value: "petropsi.carlianelopes.com.br" }],
        headers: [
          { key: "Cache-Control", value: "public, max-age=0, must-revalidate" },
        ],
      },
    ]
  },
  async rewrites() {
    return {
      beforeFiles: [
        // PETROPSI servido na raiz do subdomínio
        {
          source: "/",
          has: [{ type: "host", value: "petropsi.carlianelopes.com.br" }],
          destination: "/petropsi/index.html",
        },
        // e também por caminho, em qualquer domínio deste projeto
        { source: "/petropsi", destination: "/petropsi/index.html" },
        { source: "/petropsi/", destination: "/petropsi/index.html" },
      ],
    }
  },
}

export default nextConfig
