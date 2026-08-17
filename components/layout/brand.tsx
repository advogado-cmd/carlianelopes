import type { SVGProps } from "react"

/**
 * Marca — a borboleta da logomarca, em SVG inline.
 *
 * Reprodução simplificada do símbolo para uso em UI (header, footer, favicon).
 * As asas usam o azul-asa (#5474B4) e o contorno o dourado da marca (#B8924A);
 * `variant="light"` inverte para uso sobre navy.
 */
export function ButterflyMark({
  variant = "dark",
  ...props
}: SVGProps<SVGSVGElement> & { variant?: "dark" | "light" }) {
  const stroke = variant === "light" ? "#D4B36A" : "#B8924A"
  const wingFrom = variant === "light" ? "#7E9AD6" : "#6A88C4"
  const wingTo = variant === "light" ? "#4F6EAC" : "#4A6AAC"
  const id = variant === "light" ? "wingL" : "wingD"

  return (
    <svg viewBox="0 0 44 54" fill="none" aria-hidden="true" focusable="false" {...props}>
      <defs>
        <linearGradient id={id} x1="0.15" y1="0" x2="0.85" y2="1">
          <stop offset="0%" stopColor={wingFrom} />
          <stop offset="100%" stopColor={wingTo} />
        </linearGradient>
      </defs>

      {/* antenas */}
      <path
        d="M22 16C20.5 11 17.5 7.5 13.6 5.8M22 16c1.5-5 4.5-8.5 8.4-10.2"
        stroke={stroke}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <circle cx="13.2" cy="5.4" r="1.9" fill={stroke} />
      <circle cx="30.8" cy="5.4" r="1.9" fill={stroke} />

      {/* asas */}
      <ellipse
        cx="12.6"
        cy="19"
        rx="10.4"
        ry="8.2"
        transform="rotate(-20 12.6 19)"
        fill={`url(#${id})`}
        stroke={stroke}
        strokeWidth="1.6"
      />
      <ellipse
        cx="31.4"
        cy="19"
        rx="10.4"
        ry="8.2"
        transform="rotate(20 31.4 19)"
        fill={`url(#${id})`}
        stroke={stroke}
        strokeWidth="1.6"
      />

      {/* corpo alongado, terminando em gota */}
      <path d="M22 15.5V42.5" stroke={stroke} strokeWidth="1.7" strokeLinecap="round" />
      <path
        d="M22 41c-2.1 0-3.6 1.7-3.6 3.9 0 2.4 1.6 4.6 3.6 6.6 2-2 3.6-4.2 3.6-6.6 0-2.2-1.5-3.9-3.6-3.9z"
        fill={`url(#${id})`}
        stroke={stroke}
        strokeWidth="1.4"
      />
      <circle cx="22" cy="17.5" r="2.4" fill={`url(#${id})`} stroke={stroke} strokeWidth="1.3" />
    </svg>
  )
}

/** Assinatura completa: marca + nome + descritor. */
export function Wordmark({
  variant = "dark",
  descriptor,
}: {
  variant?: "dark" | "light"
  descriptor?: string
}) {
  const nameColor = variant === "light" ? "text-cream" : "text-navy"
  const descColor = variant === "light" ? "text-gold-light" : "text-eyebrow"

  return (
    <span className="flex items-center gap-3">
      <ButterflyMark variant={variant} className="h-9 w-auto shrink-0" />
      <span className="flex flex-col leading-none">
        <span className={`font-sans text-[15px] font-semibold tracking-tight sm:text-[17px] ${nameColor}`}>
          Carliane Lopes de Oliveira
        </span>
        {descriptor ? (
          <span className={`mt-1 font-sans text-[9.5px] font-semibold uppercase tracking-[0.22em] ${descColor}`}>
            {descriptor}
          </span>
        ) : null}
      </span>
    </span>
  )
}
