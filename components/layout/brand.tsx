/**
 * Marca.
 *
 * A borboleta da logomarca foi REMOVIDA da interface em 17/ago/2026: a
 * reprodução em SVG não fazia jus ao símbolo original e empobrecia a marca.
 * Até termos o arquivo vetorial da logo (SVG ou PNG em alta), a assinatura no
 * site é tipográfica — nome + filete dourado + descritor, exatamente como na
 * segunda linha da logomarca.
 *
 * Para reativar o símbolo: exporte a borboleta como /images/marca.svg e
 * troque o <span> do filete por <Image src="/images/marca.svg" ... />.
 */

export function Wordmark({
  variant = "dark",
  descriptor,
}: {
  variant?: "dark" | "light"
  descriptor?: string
}) {
  const nameColor = variant === "light" ? "text-cream" : "text-navy"
  const descColor = variant === "light" ? "text-gold-light" : "text-eyebrow"
  const ruleColor = variant === "light" ? "bg-gold-light" : "bg-gold"

  return (
    <span className="flex flex-col leading-none">
      <span className={`font-sans text-[15px] font-semibold tracking-tight sm:text-[17px] ${nameColor}`}>
        Carliane Lopes de Oliveira
      </span>
      {descriptor ? (
        <span className="mt-1.5 flex items-center gap-2">
          <span className={`block h-px w-5 ${ruleColor}`} aria-hidden />
          <span className={`font-sans text-[9.5px] font-semibold uppercase tracking-[0.22em] ${descColor}`}>
            {descriptor}
          </span>
        </span>
      ) : null}
    </span>
  )
}
