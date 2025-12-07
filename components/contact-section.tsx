"use client"

import type React from "react"

import { useState } from "react"
import { Phone, Mail, Send, Globe, MessageCircle, AlertCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useLanguage } from "@/lib/i18n"

export function ContactSection() {
  const { t } = useLanguage()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    reason: "",
    message: "",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError(null)

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (response.ok) {
        setSubmitted(true)
        setFormData({ name: "", contact: "", reason: "", message: "" })
      } else {
        setError(data.error || "Erro ao enviar mensagem. Tente novamente.")
      }
    } catch (err) {
      console.error("Error:", err)
      setError("Erro de conexão. Verifique sua internet e tente novamente.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contato" className="py-20 bg-[#f4f8fc]">
      <div className="container mx-auto px-4">
        <div className="flex justify-center mb-4">
          <MessageCircle className="w-8 h-8 text-[#91A8D0]" />
        </div>

        <h2 className="font-serif text-3xl md:text-4xl text-[#2D3436] text-center mb-2">{t("contact.title")}</h2>
        <p className="text-center text-[#2D3436]/70 mb-4">{t("contact.subtitle")}</p>

        <div className="flex justify-center mb-12">
          <span className="inline-flex items-center gap-2 bg-[#91A8D0]/20 text-[#2D3436] px-6 py-3 rounded-full text-sm border border-[#91A8D0]/40">
            <Globe className="w-5 h-5 text-[#91A8D0]" />
            {t("contact.global")}
          </span>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="flex items-center gap-4 p-4 bg-[#e8f0f8] rounded-2xl">
              <Phone className="w-8 h-8 text-[#CD8D7A]" />
              <div>
                <p className="text-sm text-[#2D3436]/70">WhatsApp</p>
                <a
                  href="https://wa.me/5581985122022"
                  className="text-lg font-semibold text-[#2D3436] hover:text-[#CD8D7A] transition-colors"
                >
                  +55 (81) 98512-2022
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 bg-[#e8f0f8] rounded-2xl">
              <Mail className="w-8 h-8 text-[#91A8D0]" />
              <div>
                <p className="text-sm text-[#2D3436]/70">Email</p>
                <a
                  href="mailto:contato@carlianelopes.com.br"
                  className="text-lg font-semibold text-[#2D3436] hover:text-[#CD8D7A] transition-colors"
                >
                  contato@carlianelopes.com.br
                </a>
              </div>
            </div>

            <div className="p-4 bg-[#91A8D0]/10 rounded-2xl border border-[#91A8D0]/30">
              <div className="flex items-center gap-2 mb-2">
                <Globe className="w-5 h-5 text-[#91A8D0]" />
                <p className="font-semibold text-[#2D3436]">{t("contact.worldwide")}</p>
              </div>
              <p className="text-sm text-[#2D3436]/70">{t("contact.worldwide.desc")}</p>
            </div>
          </div>

          {/* Contact Form */}
          {submitted ? (
            <div className="flex items-center justify-center p-8 bg-[#e8f0f8] rounded-2xl">
              <div className="text-center">
                <div className="w-16 h-16 bg-[#91A8D0] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Send className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-serif text-xl text-[#2D3436] mb-2">{t("contact.success")}</h3>
                <p className="text-[#2D3436]/70">{t("contact.success.desc")}</p>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {error && (
                <div className="flex items-center gap-2 p-4 bg-red-50 border border-red-200 rounded-xl text-red-700">
                  <AlertCircle className="w-5 h-5 flex-shrink-0" />
                  <p className="text-sm">{error}</p>
                </div>
              )}

              <div>
                <Label htmlFor="name" className="text-[#2D3436]">
                  {t("contact.name")}
                </Label>
                <Input
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="mt-1 rounded-xl border-[#91A8D0]/30 focus:border-[#91A8D0]"
                  placeholder={t("contact.name")}
                />
              </div>

              <div>
                <Label htmlFor="contact" className="text-[#2D3436]">
                  {t("contact.whatsapp")}
                </Label>
                <Input
                  id="contact"
                  required
                  value={formData.contact}
                  onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                  className="mt-1 rounded-xl border-[#91A8D0]/30 focus:border-[#91A8D0]"
                  placeholder="(00) 00000-0000"
                />
              </div>

              <div>
                <Label className="text-[#2D3436]">{t("contact.reason")}</Label>
                <Select value={formData.reason} onValueChange={(value) => setFormData({ ...formData, reason: value })}>
                  <SelectTrigger className="mt-1 rounded-xl border-[#91A8D0]/30">
                    <SelectValue placeholder={t("contact.reason")} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="anxiety">{t("contact.reason.anxiety")}</SelectItem>
                    <SelectItem value="depression">{t("contact.reason.depression")}</SelectItem>
                    <SelectItem value="relationship">{t("contact.reason.relationship")}</SelectItem>
                    <SelectItem value="other">{t("contact.reason.other")}</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="message" className="text-[#2D3436]">
                  {t("contact.message")}
                </Label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="mt-1 rounded-xl border-[#91A8D0]/30 focus:border-[#91A8D0] min-h-[100px]"
                  placeholder={t("contact.message.placeholder")}
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#CD8D7A] hover:bg-[#b87a68] text-white rounded-xl"
              >
                {isSubmitting ? t("contact.sending") : t("contact.submit")}
              </Button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
