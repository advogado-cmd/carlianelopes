"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { HelpCircle } from "lucide-react"
import { useLanguage } from "@/lib/i18n"

export function FaqSection() {
  const { t } = useLanguage()

  const faqs = [
    { question: t("faq.q1"), answer: t("faq.a1") },
    { question: t("faq.q2"), answer: t("faq.a2") },
    { question: t("faq.q3"), answer: t("faq.a3") },
    { question: t("faq.q4"), answer: t("faq.a4") },
    { question: t("faq.q5"), answer: t("faq.a5") },
    { question: t("faq.q6"), answer: t("faq.a6") },
    { question: t("faq.q7"), answer: t("faq.a7") },
    { question: t("faq.q8"), answer: t("faq.a8") },
  ]

  return (
    <section id="faq" className="py-20 bg-[#e8f0f8]">
      <div className="container mx-auto px-4">
        <div className="flex justify-center mb-4">
          <HelpCircle className="w-8 h-8 text-[#91A8D0]" />
        </div>

        <h2 className="font-serif text-3xl md:text-4xl text-[#2D3436] text-center mb-2">{t("faq.title")}</h2>
        <p className="text-center text-[#2D3436]/70 mb-12">{t("faq.subtitle")}</p>

        <div className="max-w-2xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="bg-[#f4f8fc] rounded-2xl px-6 border-none">
                <AccordionTrigger className="text-left font-serif text-[#2D3436] hover:text-[#CD8D7A] hover:no-underline py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-[#2D3436]/80 pb-4">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
