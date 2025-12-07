"use client"

import Image from "next/image"
import { MapPin } from "lucide-react"
import { useLanguage } from "@/lib/i18n"

export function LocationSection() {
  const { t } = useLanguage()

  return (
    <section className="py-20 bg-[#f4f8fc]">
      <div className="container mx-auto px-4">
        <div className="flex justify-center mb-4">
          <MapPin className="w-8 h-8 text-[#91A8D0]" />
        </div>

        <h2 className="font-serif text-3xl md:text-4xl text-[#2D3436] text-center mb-2">{t("location.title")}</h2>
        <p className="text-center text-[#2D3436]/70 mb-12">{t("location.subtitle")}</p>

        {/* Recife Hero Image */}
        <div className="relative h-64 md:h-80 rounded-3xl overflow-hidden mb-8 max-w-5xl mx-auto">
          <Image
            src="/images/82-20-281-29.jpg"
            alt="Recife, Pernambuco - Vista do Rio Capibaribe"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#2D3436]/70 to-transparent"></div>
          <div className="absolute bottom-6 left-6 text-white">
            <h3 className="font-serif text-2xl md:text-3xl font-semibold mb-2">{t("location.recife")}</h3>
            <p className="text-white/90">{t("location.presential")}</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Map */}
          <div className="rounded-2xl overflow-hidden shadow-lg h-80">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3950.5!2d-34.89!3d-8.09!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOMKwMDUnMjQuMCJTIDM0wrA1Myc0Mi4wIlc!5e0!3m2!1spt-BR!2sbr!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização do consultório"
            ></iframe>
          </div>

          {/* Address + Second Image */}
          <div className="space-y-6">
            <div className="bg-[#e8f0f8] p-6 rounded-2xl">
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-[#CD8D7A] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-serif text-lg text-[#2D3436] font-semibold mb-2">{t("location.office")}</h3>
                  <p className="text-[#2D3436]/80">{t("location.address")}</p>
                </div>
              </div>
            </div>

            <div className="relative h-40 rounded-2xl overflow-hidden">
              <Image src="/images/22397744.jpg" alt="Recife - Canal" fill className="object-cover" />
              <div className="absolute inset-0 bg-[#91A8D0]/30"></div>
              <p className="absolute bottom-4 left-4 right-4 text-white text-sm font-medium text-center">
                {t("location.venice")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
