/**
 * Compatibilidade: páginas legadas importam WhatsAppButton daqui.
 * O componente real é WhatsAppFloat (contextual, por página e idioma).
 * Migrar esses imports na fase 2 e apagar este arquivo.
 */
import { WhatsAppFloat } from "./layout/whatsapp-float"

export function WhatsAppButton() {
  return <WhatsAppFloat locale="pt" origem="legado" />
}
