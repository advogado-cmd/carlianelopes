import { chrome } from "@/lib/i18n/chrome"
import type { Locale } from "@/lib/i18n/locales"

/**
 * Bloco de acolhimento e emergência (§ 19 do Plano Diretor).
 *
 * É requisito de arquitetura, não aviso legal. Aciona em três situações:
 *  (a) busca ou conversa com termos de risco  — fase 3;
 *  (b) páginas cujo tema pede: crise, trauma, depressão, luto, dependência
 *      → `seguranca: true` no registry da especialidade;
 *  (c) link permanente e discreto no rodapé (âncora #acolhimento).
 *
 * Tom: acolhe sem dramatizar, e diz com todas as letras que este site e o
 * WhatsApp não são canais de emergência.
 *
 * ⚠️ Em EN e ES os canais brasileiros continuam listados porque parte do
 * público é de brasileiros no exterior, mas a orientação principal é buscar
 * o serviço local. Não publicar lista fixa de telefones de outros países sem
 * verificação — número de emergência desatualizado é pior que nenhum.
 */
export function SafetyBanner({ locale = "pt" }: { locale?: Locale }) {
  const c = chrome(locale)

  return (
    <aside
      id="acolhimento"
      aria-labelledby="acolhimento-titulo"
      className="rounded-[--radius] border border-wing/25 bg-mist p-6 sm:p-7"
    >
      <h2 id="acolhimento-titulo" className="font-sans text-[15px] font-bold text-navy">
        {c.safety.title}
      </h2>
      <p className="mt-2 max-w-2xl text-[15px] leading-relaxed text-foreground">{c.safety.body}</p>

      <p className="mt-4 font-sans text-[11px] font-bold uppercase tracking-[0.16em] text-eyebrow">
        {c.safety.linesLabel}
      </p>
      <ul className="mt-2 flex flex-wrap gap-2.5">
        {c.safety.lines.map((line) => (
          <li key={line.label}>
            <a
              href={line.href ?? "#"}
              className="inline-flex items-baseline gap-2 rounded-[10px] border border-wing/25 bg-card px-3.5 py-2 text-sm font-semibold text-navy transition-colors hover:border-wing"
            >
              <span className="font-normal text-muted-foreground">{line.label}</span>
              {line.value}
            </a>
          </li>
        ))}
      </ul>
    </aside>
  )
}
