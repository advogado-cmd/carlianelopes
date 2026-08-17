# Fase 1 — Fundação

Migração do site v0 para a arquitetura do Plano Diretor. Build verde, 39 páginas
estáticas, 33 URLs no sitemap todas respondendo 200 em ambiente local.

## O que mudou

### 1. Trilíngue por rota (era invisível para o Google)

Antes: PT e EN na **mesma URL**, trocados por Context API no cliente. Sem ES, sem
hreflang. Para o buscador, o conteúdo em inglês não existia.

Agora:

| | PT | EN | ES |
|---|---|---|---|
| Home | `/` | `/en` | `/es` |
| Hub | `/especialidades` | `/en/specialties` | `/es/especialidades` |
| Ansiedade | `/especialidades/ansiedade` | `/en/specialties/anxiety` | `/es/especialidades/ansiedad` |

- **Português continua na raiz** — nenhuma URL indexada mudou de endereço.
- **Slugs traduzidos**: quem busca em espanhol digita "ansiedad", não "ansiedade".
- **hreflang recíproco**, emitido só para os idiomas em que a página existe.
- **Sem redirecionamento automático** por idioma do navegador ou geolocalização.
- O **seletor de idioma leva à mesma página** no outro idioma, nunca à home. Quando
  a página não existe naquele idioma, o botão aparece desabilitado em vez de sumir.

`publicado: { pt: true, en: false, es: false }` faz a página devolver 404 naquele
idioma, sair do sitemap e sair do hreflang. Hoje **luto** e **crise e trauma** estão
assim — ficam em PT até haver versão revisada, e não meio-traduzidas no ar.

### 2. Conteúdo em registries

| Arquivo | Papel |
|---|---|
| `lib/especialidades/registry.ts` | fonte única das 6 especialidades, nos 3 idiomas |
| `lib/blog/registry.ts` | fonte única dos 9 posts |
| `lib/i18n/routes.ts` | mapa de slugs localizados e resolução de rota |
| `lib/i18n/chrome.ts` | rótulos de interface nos 3 idiomas |

Uma especialidade nova = um objeto. Rota, sitemap, hreflang, hub e schema saem sozinhos.

### 3. Sitemap: 6 URLs falsas removidas

O `sitemap.ts` antigo listava 8 slugs de blog escritos à mão. **Só 2 existiam.** Os
outros 6 vinham respondendo 404 desde sempre, anunciados ao Google.

`middleware.ts` resolve cada um:

| URL antiga | Tratamento |
|---|---|
| `ansiedade-depressao-sinais-tratamento` | 301 → `/blog/ansiedade-depressao-tratamento` |
| `terapia-casal-comunicacao` | 301 → `/blog/terapia-casal-relacionamentos` |
| `autismo-tea-aba` | 301 → `/blog/autismo-tea-suporte` |
| `constelacao-familiar-cura-padroes` | 301 → `/blog/constelacao-familiar-cura` |
| `constelacao-sistemica` | 410 Gone |
| `saude-mental-corporativa` | 410 Gone |

Cobrindo `/slug`, `/blog/slug` e `/slug/feed`. O sitemap novo é gerado dos registries:
33 URLs, todas reais.

### 4. Design system da logomarca

Paleta do v0 (`#91A8D0` pastel + `#CD8D7A` terracota) substituída pela cromia extraída
da assinatura: navy `#22345F`, dourados, azul-asa e creme `#FBFAF7`. Newsreader nos
títulos e Figtree na interface. O `.dark` cinza do v0 foi removido.

Regra do dourado codificada nos tokens: é **material, não tinta**. Link é `#3E5A8F`
(AA), nunca dourado. Isso corrige o contraste de 2,4:1 que o `#91A8D0` tinha como cor
de link em todo o site antigo.

### 5. Conformidade CFP e LGPD

- **"Especialista" saiu** do hero → "Escuta clínica formada na urgência…".
- **Contador de "pacientes atendidos" saiu** → três provas de profundidade
  (20+ anos · 10+ anos em hospital psiquiátrico · Hellinger Schule).
- Identificação **"Psicóloga Carliane Lopes de Oliveira — CRP 02/12727"** no rodapé de
  todas as páginas, nos três idiomas.
- **Nota padrão** de conteúdo informativo em toda especialidade e no rodapé.
- **Bloco de segurança** (`safety-banner.tsx`) com CVV 188, SAMU 192 e 190, acionado
  por `seguranca: true` no registry (hoje: depressão, luto, crise e trauma) e por
  âncora permanente `#acolhimento` no rodapé.
- **WhatsApp contextual**: mensagem pré-preenchida por página e idioma, horário de
  Recife calculado no cliente, aviso de não-emergência, dispensável, evento
  `whatsapp_click` no dataLayer.
- **Formulário**: motivo em texto livre e opcional (não checkbox de sintomas — dado de
  saúde é sensível pelo art. 11 da LGPD), consentimento explícito não pré-marcado.
- FAQs escritas sem promessa de resultado; medicação sempre remetida à competência médica.

### 6. Correções de infraestrutura

- `robots.ts` — não existia. Libera buscadores, bloqueia scrapers de treino de IA.
- `scripts/verificar-urls.sh` — fotografa o status HTTP do sitemap antes e depois do
  deploy e falha se alguma URL que respondia 200 parar de responder.
- `app/api/contact/route.ts` — o client do Resend era instanciado no escopo do módulo.
  Sem `RESEND_API_KEY`, isso **derrubava o build inteiro**, não só a rota. Agora é
  lazy e a falta da chave vira 503.
- JSON-LD: `Psychologist`, `Service`, `FAQPage`, `BreadcrumbList`, com
  `knowsLanguage: ["pt-BR","en","es"]` e o CRP como `identifier`.
- Todos os `title` ≤ 60 caracteres e `description` ≤ 155.

## O que ficou para a fase 2

- **Payload CMS** — o blog ainda é registry em código. O formato do registry já é o
  fallback previsto para quando o CMS entrar.
- **`/terapia-sem-fronteiras` e `/avaliacao-psicologica`** continuam no `LanguageProvider`
  antigo (PT/EN client-side). São as duas últimas páginas na arquitetura velha;
  `lib/i18n.tsx` e os shims `components/header.tsx`, `components/footer.tsx` e
  `components/whatsapp-button.tsx` saem junto com elas.
- **`/metodo` e `/programa`** — bloqueados até haver decisão sobre o enquadramento
  (§ 2.1 do Plano Diretor). O cartão da home mostra "Em breve".
- `/sobre`, `/curriculo`, `/livro`, `/faq`, `/agendar`, `/materiais`, `/glossario`, `/busca`.
- Renomear "Estimulação Neural" no currículo.

## Antes de publicar

1. Conferir o número de WhatsApp em `lib/whatsapp.ts`.
2. Confirmar `RESEND_API_KEY` na Vercel.
3. `bash scripts/verificar-urls.sh antes` **contra produção** → deploy →
   `bash scripts/verificar-urls.sh depois`.
4. No Search Console, solicitar indexação de `/`, `/en`, `/es` e das quatro
   especialidades de cada idioma (cota ~10 URLs/dia).
