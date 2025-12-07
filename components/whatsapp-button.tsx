"use client"

import { MessageCircle } from "lucide-react"

export function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/5581985122022"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#20BA5C] text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all"
      aria-label="Contato via WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />
    </a>
  )
}
