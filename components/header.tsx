/**
 * Compatibilidade: as páginas legadas (terapia-sem-fronteiras, avaliação
 * psicológica, blog, privacidade) importam Header daqui sem passar locale.
 * O componente real vive em components/layout/header.tsx e assume "pt"
 * por omissão. Migrar esses imports na fase 2 e apagar este arquivo.
 */
export { Header } from "./layout/header"
export type { HeaderProps } from "./layout/header"
