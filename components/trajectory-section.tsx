"use client"

import { BookOpen, GraduationCap, Award, Briefcase, Globe, Trophy } from "lucide-react"
import { useLanguage } from "@/lib/i18n"

export function TrajectorySection() {
  const { t } = useLanguage()

  return (
    <section id="curriculo" className="py-20 bg-[#e8f0f8]">
      <div className="container mx-auto px-4">
        <div className="flex justify-center mb-4">
          <GraduationCap className="w-8 h-8 text-[#91A8D0]" />
        </div>

        <h2 className="font-serif text-3xl md:text-4xl text-[#2D3436] text-center mb-2">{t("trajectory.title")}</h2>
        <p className="text-center text-[#2D3436]/70 mb-12">{t("trajectory.subtitle")}</p>

        <div className="max-w-4xl mx-auto bg-[#f4f8fc] rounded-3xl shadow-lg p-8 max-h-[550px] overflow-y-auto">
          <div className="mb-8 p-4 bg-gradient-to-r from-[#CD8D7A]/20 to-[#CD8D7A]/10 rounded-2xl border border-[#CD8D7A]/30">
            <div className="flex items-center gap-3">
              <Trophy className="w-8 h-8 text-[#CD8D7A]" />
              <div>
                <h3 className="font-serif text-lg text-[#2D3436] font-semibold">{t("trajectory.award")}</h3>
                <p className="text-[#2D3436]/70">{t("trajectory.award.desc")}</p>
              </div>
            </div>
          </div>

          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <Globe className="w-6 h-6 text-[#91A8D0]" />
              <h3 className="font-serif text-xl text-[#2D3436] font-semibold">{t("trajectory.international.title")}</h3>
              <span className="bg-[#91A8D0] text-white text-xs px-2 py-1 rounded-full">Internacional</span>
            </div>
            <ul className="space-y-2 text-[#2D3436]/80 ml-9">
              <li className="flex items-start gap-2">
                <span className="text-[#CD8D7A]">•</span>
                {t("trajectory.international.hellinger")}
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#CD8D7A]">•</span>
                {t("trajectory.international.yoga")}
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#CD8D7A]">•</span>
                {t("trajectory.international.neural")}
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#CD8D7A]">•</span>
                {t("trajectory.international.ch6")}
              </li>
              <li className="flex items-start gap-2 mt-3 p-3 bg-[#d6e4f0] rounded-xl">
                <Globe className="w-4 h-4 text-[#91A8D0] flex-shrink-0 mt-0.5" />
                <span className="text-sm font-medium">{t("trajectory.international.available")}</span>
              </li>
            </ul>
          </div>

          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <BookOpen className="w-6 h-6 text-[#CD8D7A]" />
              <h3 className="font-serif text-xl text-[#2D3436] font-semibold">{t("trajectory.books.title")}</h3>
            </div>
            <ul className="space-y-2 text-[#2D3436]/80 ml-9">
              <li>
                <strong>2025 (eBook Kindle):</strong> "Família, destinos e constelações: os laços familiares em desenhos
                animados"
              </li>
              <li>
                <strong>2004:</strong> "Prevalência de temas traumáticos numa população universitária" (VIII Jornada
                Nordestina de Psiquiatria)
              </li>
              <li>
                <strong>2003:</strong> "Normatização do teste R2 para população infantil em Recife" (III Congresso
                Norte-Nordeste de Psicologia)
              </li>
            </ul>
          </div>

          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <GraduationCap className="w-6 h-6 text-[#91A8D0]" />
              <h3 className="font-serif text-xl text-[#2D3436] font-semibold">{t("trajectory.ongoing.title")}</h3>
            </div>
            <ul className="space-y-2 text-[#2D3436]/80 ml-9">
              <li>Pós-graduação em Terapia Cognitivo Comportamental (TCC) - Minas Faculdade</li>
              <li>Pós-graduação em Análise do Comportamento Aplicada (ABA) - Minas Faculdade</li>
              <li>Pós-graduação em Transtorno do Espectro Autista (TEA) - Minas Faculdade</li>
            </ul>
          </div>

          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <Award className="w-6 h-6 text-[#CD8D7A]" />
              <h3 className="font-serif text-xl text-[#2D3436] font-semibold">{t("trajectory.completed.title")}</h3>
            </div>
            <ul className="space-y-2 text-[#2D3436]/80 ml-9">
              <li>Constelação Familiar Original Hellinger (Faculdade Innovare, 2023)</li>
              <li>Saúde Mental e Dependência Química (IDE, 2014)</li>
              <li>Psicologia Organizacional e do Trabalho (IDE, 2013)</li>
              <li>Psicologia do Trânsito (UNIP, 2013)</li>
              <li>Intervenções em Psicologia Clínica (UNICAP, 2008)</li>
              <li>Graduação em Psicologia (ESUDA, 2005)</li>
            </ul>
          </div>

          <div>
            <div className="flex items-center gap-3 mb-4">
              <Briefcase className="w-6 h-6 text-[#91A8D0]" />
              <h3 className="font-serif text-xl text-[#2D3436] font-semibold">{t("trajectory.experience.title")}</h3>
            </div>
            <ul className="space-y-2 text-[#2D3436]/80 ml-9">
              <li>
                <strong>Psicóloga Clínica (2005 - atual)</strong>
              </li>
              <li>
                <strong>Hospital Novo Nascer (2013-2024):</strong> Gestão Psicossocial, Desenvolvimento de Programa de
                Tratamento Interdisciplinar, Atendimento Clínico e Intervenção em Crises, Desenvolvimento de Programa de
                Meditação com o Instituto David Lynch, Desenvolvimento de Programa de Desenvolvimento de Gestores
                através de atividades em grupo.
              </li>
              <li>
                <strong>RHX Consultoria (2010-2013):</strong> Psicóloga Clínica e Organizacional
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
