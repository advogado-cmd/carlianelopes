import { Resend } from "resend"
import { NextResponse } from "next/server"

const resend = new Resend(process.env.RESEND_API_KEY)

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
