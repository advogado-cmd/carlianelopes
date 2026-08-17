#!/usr/bin/env bash
# Fotografa o status HTTP de todas as URLs do sitemap e compara com uma foto
# anterior. Roda ANTES e DEPOIS de qualquer deploy que mexa em rotas.
#
#   bash scripts/verificar-urls.sh antes
#   ...deploy...
#   bash scripts/verificar-urls.sh depois
#
# Sai com erro (exit 1) se alguma URL que respondia 200 parou de responder ou
# sumiu do sitemap. URL nova é só informação, não falha.
#
# Nasceu de um incidente real no projeto irmão: "está no ar" só se prova
# olhando o ar, e commit no GitHub não é deploy na Vercel.

set -uo pipefail

BASE="${BASE_URL:-https://www.carlianelopes.com.br}"
LABEL="${1:-snapshot}"
DIR="${TMPDIR:-/tmp}/verificar-urls"
OUT="$DIR/$LABEL.txt"
mkdir -p "$DIR"

echo "→ lendo $BASE/sitemap.xml"
# O sitemap traz URLs absolutas de produção. Trocamos o host pelo BASE para
# que o script sirva também contra localhost ou um preview da Vercel.
URLS=$(curl -sf "$BASE/sitemap.xml" \
  | grep -oE '<loc>[^<]+</loc>' \
  | sed -E 's#</?loc>##g' \
  | sed -E "s#https?://[^/]+#$BASE#" \
  | sort -u)

if [ -z "$URLS" ]; then
  echo "✗ não consegui ler o sitemap em $BASE/sitemap.xml"
  exit 1
fi

TOTAL=$(echo "$URLS" | wc -l | tr -d ' ')
echo "→ $TOTAL URLs. Conferindo..."

: > "$OUT"
while IFS= read -r url; do
  code=$(curl -s -o /dev/null -w '%{http_code}' -L --max-time 20 "$url")
  printf '%s %s\n' "$code" "$url" >> "$OUT"
  [ "$code" != "200" ] && echo "  ! $code $url"
done <<< "$URLS"

OK=$(grep -c '^200 ' "$OUT" || true)
echo "→ $OK/$TOTAL responderam 200 · foto salva em $OUT"

# Cache: age alto com x-vercel-cache HIT denuncia build antigo.
echo "→ cabeçalhos de cache da home:"
curl -sI "$BASE/" | grep -iE '^(age|x-vercel-cache|cf-cache-status):' || echo "  (sem cabeçalhos de cache)"

PREV="$DIR/antes.txt"
if [ "$LABEL" = "depois" ] && [ -f "$PREV" ]; then
  echo
  echo "→ comparando com a foto 'antes'"
  FAIL=0
  while read -r code url; do
    [ "$code" != "200" ] && continue
    now=$(grep -F " $url" "$OUT" | awk '{print $1}' | head -1)
    if [ -z "$now" ]; then
      echo "  ✗ SUMIU DO SITEMAP: $url"; FAIL=1
    elif [ "$now" != "200" ]; then
      echo "  ✗ QUEBROU ($now): $url"; FAIL=1
    fi
  done < "$PREV"

  while read -r code url; do
    grep -qF " $url" "$PREV" || echo "  + nova: $url"
  done < "$OUT"

  if [ "$FAIL" -eq 1 ]; then
    echo
    echo "✗ o deploy quebrou URLs que estavam no ar."
    exit 1
  fi
  echo "  nenhuma mudança — nada quebrou."
fi
