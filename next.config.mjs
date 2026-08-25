/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
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
