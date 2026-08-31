import { NextResponse, type NextRequest } from "next/server"

/**
 * Exclusão de conta do Protocolo dos 5 Minutos — art. 18, VI, da LGPD.
 *
 * O navegador já apaga, com a autoridade da própria pessoa, os áudios e a
 * linha do protocolo. O que ele não alcança é o cadastro em auth.users:
 * remover um usuário exige a chave de serviço, que nunca pode sair do
 * servidor. É só isso que acontece aqui.
 *
 * O pedido é autenticado pelo token da própria sessão: descobrimos quem
 * está pedindo perguntando ao Supabase quem é o dono daquele token, e
 * apagamos exatamente esse id — nunca um id enviado pelo cliente.
 */

const SUPABASE_URL = "https://boqkeuckgiqqrbgzynaf.supabase.co"

export async function POST(request: NextRequest) {
  const servico = process.env.SUPABASE_SERVICE_ROLE_KEY
  if (!servico) {
    console.error("[protocolo] SUPABASE_SERVICE_ROLE_KEY ausente no ambiente")
    return NextResponse.json({ erro: "indisponivel" }, { status: 503 })
  }

  const auth = request.headers.get("authorization") ?? ""
  const token = auth.toLowerCase().startsWith("bearer ") ? auth.slice(7).trim() : ""
  if (!token) return NextResponse.json({ erro: "sem_token" }, { status: 401 })

  // quem é o dono deste token?
  const quem = await fetch(`${SUPABASE_URL}/auth/v1/user`, {
    headers: { apikey: servico, Authorization: `Bearer ${token}` },
    cache: "no-store",
  })
  if (!quem.ok) return NextResponse.json({ erro: "token_invalido" }, { status: 401 })

  const usuario = (await quem.json()) as { id?: string }
  const id = usuario?.id
  if (!id) return NextResponse.json({ erro: "token_invalido" }, { status: 401 })

  const admin = { apikey: servico, Authorization: `Bearer ${servico}` }

  // 1. as gravações que porventura tenham sobrado na pasta da pessoa
  try {
    const lista = await fetch(`${SUPABASE_URL}/storage/v1/object/list/vozes`, {
      method: "POST",
      headers: { ...admin, "Content-Type": "application/json" },
      body: JSON.stringify({ prefix: `${id}/`, limit: 100 }),
    })
    if (lista.ok) {
      const itens = (await lista.json()) as Array<{ name: string }>
      const caminhos = itens.map((i) => `${id}/${i.name}`)
      if (caminhos.length) {
        await fetch(`${SUPABASE_URL}/storage/v1/object/vozes`, {
          method: "DELETE",
          headers: { ...admin, "Content-Type": "application/json" },
          body: JSON.stringify({ prefixes: caminhos }),
        })
      }
    }
  } catch {
    // arquivo remanescente não impede a exclusão do cadastro
  }

  // 2. a linha do protocolo, caso o navegador não tenha conseguido
  await fetch(`${SUPABASE_URL}/rest/v1/protocols?user_id=eq.${id}`, {
    method: "DELETE",
    headers: { ...admin, Prefer: "return=minimal" },
  }).catch(() => {})

  // 3. o cadastro em si
  const apagou = await fetch(`${SUPABASE_URL}/auth/v1/admin/users/${id}`, {
    method: "DELETE",
    headers: admin,
  })
  if (!apagou.ok) {
    console.error("[protocolo] falha ao apagar usuário", await apagou.text())
    return NextResponse.json({ erro: "falha" }, { status: 500 })
  }

  return NextResponse.json({ ok: true })
}
