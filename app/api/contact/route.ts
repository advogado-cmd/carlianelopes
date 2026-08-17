import { Resend } from "resend"
import { NextResponse } from "next/server"

/**
 * O client do Resend era instanciado no escopo do módulo. Sem a variável
 * RESEND_API_KEY, isso derruba o BUILD INTEIRO na etapa de coleta de dados
 * das páginas — não só a rota. Instanciar dentro do handler faz a falta da
 * chave virar um erro de requisição, que é o que ela é.
 */
function getResend(): Resend | null {
  const key = process.env.RESEND_API_KEY
  return key ? new Resend(key) : null
}

function isValidEmail(value: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(value)
}

export async function POST(request: Request) {
  try {
    const { name, contact, reason, message } = await request.json()

    const reasonMap: Record<string, string> = {
      anxiety: "Ansiedade",
      depression: "Depressão",
      relationship: "Relacionamento",
      other: "Outros",
    }

    const emailOptions: {
      from: string
      to: string
      subject: string
      html: string
      replyTo?: string
    } = {
      from: "Site Carliane Lopes <contato@carlianelopes.com.br>",
      to: "contato@carlianelopes.com.br",
      subject: `Novo contato do site - ${reasonMap[reason] || reason}`,
      html: `
        <h2>Novo contato recebido pelo site</h2>
        <p><strong>Nome:</strong> ${name}</p>
        <p><strong>Contato:</strong> ${contact}</p>
        <p><strong>Motivo:</strong> ${reasonMap[reason] || reason}</p>
        ${message ? `<p><strong>Mensagem:</strong> ${message}</p>` : ""}
        <hr>
        <p><em>Mensagem enviada através do site www.carlianelopes.com.br</em></p>
      `,
    }

    // Only add replyTo if it's a valid email address
    if (isValidEmail(contact)) {
      emailOptions.replyTo = contact
    }

    const resend = getResend()
    if (!resend) {
      console.error("[contato] RESEND_API_KEY ausente no ambiente")
      return NextResponse.json({ error: "Serviço de e-mail indisponível" }, { status: 503 })
    }

    const { data, error } = await resend.emails.send(emailOptions)

    if (error) {
      console.error("[v0] Resend error details:", JSON.stringify(error))
      return NextResponse.json({ error: error.message }, { status: 400 })
    }

    return NextResponse.json({ success: true, data })
  } catch (error) {
    console.error("[v0] Exception:", error instanceof Error ? error.message : error)
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 })
  }
}
