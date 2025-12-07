"use client"

import { useEffect } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Briefcase, Brain, Users, Building2, CheckCircle, Shield, ArrowRight, Award } from "lucide-react"
import Link from "next/link"
import { useLanguage } from "@/lib/i18n"

export function PsychologicalAssessmentPageContent() {
  const { language } = useLanguage()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const pillars = [
    {
      icon: Briefcase,
      title: language === "pt" ? "Carreira & Liderança" : "Career & Leadership",
      subtitle: language === "pt" ? "Executivos e Profissionais" : "Executives and Professionals",
      focus:
        language === "pt"
          ? "Transição de carreira, autoconhecimento profissional e desenvolvimento de liderança autêntica."
          : "Career transition, professional self-knowledge, and authentic leadership development.",
      instruments: [
        "QUATI (Tipologia Junguiana)",
        "NEO-PI-R & BFP (Big Five)",
        "EALA (Liderança Autêntica)",
        "ADT (Gestão do Tempo)",
        "Critérios para Escolhas Profissionais",
      ],
      color: "#91A8D0",
    },
    {
      icon: Brain,
      title: language === "pt" ? "Saúde Mental & Diagnóstico" : "Mental Health & Diagnosis",
      subtitle: language === "pt" ? "Apoio Clínico" : "Clinical Support",
      focus:
        language === "pt"
          ? "Apoio a diagnósticos médicos, elaboração de laudos técnicos e suporte ao tratamento."
          : "Support for medical diagnoses, technical report preparation, and treatment support.",
      instruments: [
        "EBADEP-Saúde (Depressão)",
        "EBBurn (Escala Brasileira de Burnout)",
        "Escala de Comrey (CPS)",
        "HTP (Casa-Árvore-Pessoa)",
        "EPR (Pilares da Resiliência)",
      ],
      color: "#CD8D7A",
    },
    {
      icon: Users,
      title: language === "pt" ? "Família & Neurodesenvolvimento" : "Family & Neurodevelopment",
      subtitle: language === "pt" ? "Pais, Escolas e Crianças" : "Parents, Schools and Children",
      focus:
        language === "pt"
          ? "Avaliação para pais, escolas e investigação neuropsicológica em crianças e adolescentes."
          : "Assessment for parents, schools, and neuropsychological investigation in children and adolescents.",
      instruments: [
        "SNAP-IV e ASRS (TDAH)",
        "TIAH/S (Superdotação)",
        "IEP (Estilos Parentais)",
        "IPSF (Suporte Familiar)",
        "Figuras de Rey (Memória)",
      ],
      color: "#91A8D0",
    },
    {
      icon: Building2,
      title: language === "pt" ? "Soluções Corporativas" : "Corporate Solutions",
      subtitle: language === "pt" ? "RH e Empresas (B2B)" : "HR and Companies (B2B)",
      focus:
        language === "pt"
          ? "Recrutamento, seleção, análise de clima organizacional e qualidade de vida no trabalho."
          : "Recruitment, selection, organizational climate analysis, and quality of life at work.",
      instruments: [
        "Palográfico (Personalidade)",
        "Teste AC (Atenção Concentrada)",
        "R-1 (Inteligência Não Verbal)",
        "QVT (Qualidade de Vida)",
        "CLIMOR (Clima Organizacional)",
      ],
      color: "#CD8D7A",
    },
  ]

  return (
    <>
      <Header />
      <main className="bg-[#f0f0ee]">
        {/* Hero Section */}
        <section className="pt-28 pb-16 bg-gradient-to-b from-[#2D3436] to-[#3d4548]">
          <div className="container mx-auto px-4 text-center">
            <div className="inline-flex items-center gap-2 bg-[#91A8D0]/20 px-4 py-2 rounded-full border border-[#91A8D0]/40 mb-6">
              <Shield className="w-4 h-4 text-[#91A8D0]" />
              <span className="text-white/90 text-sm">
                {language === "pt" ? "Instrumentos Privativos do Psicólogo" : "Psychologist-Only Instruments"}
              </span>
            </div>
            <h1 className="font-serif text-3xl md:text-5xl text-white mb-4 leading-tight">
              {language === "pt"
                ? "Ciência e Precisão para o Desenvolvimento Humano"
                : "Science and Precision for Human Development"}
            </h1>
            <p className="text-white/80 text-lg md:text-xl max-w-3xl mx-auto mb-8">
              {language === "pt"
                ? "Diagnósticos psicológicos validados para Carreira, Saúde Mental, Família e Seleção Corporativa."
                : "Validated psychological assessments for Career, Mental Health, Family, and Corporate Selection."}
            </p>
            <Link
              href="#pilares"
              className="inline-flex items-center gap-2 bg-[#CD8D7A] hover:bg-[#b87a68] text-white px-8 py-3 rounded-xl font-medium transition-colors"
            >
              {language === "pt" ? "Conhecer Soluções" : "Explore Solutions"}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-16 bg-[#f8f8f6]">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-lg text-[#2D3436] leading-relaxed">
                {language === "pt"
                  ? "A Dra. Carliane Lopes une a expertise clínica à psicologia organizacional para oferecer avaliações técnicas de alta precisão. Utilizamos instrumentos restritos a psicólogos (privativos) para mapear personalidade, inteligência, atenção e competências, fornecendo laudos que embasam decisões importantes na vida pessoal e profissional."
                  : "Dr. Carliane Lopes combines clinical expertise with organizational psychology to offer high-precision technical assessments. We use psychologist-restricted instruments to map personality, intelligence, attention, and competencies, providing reports that support important personal and professional decisions."}
              </p>
            </div>
          </div>
        </section>

        {/* 4 Pillars */}
        <section id="pilares" className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="font-serif text-3xl md:text-4xl text-[#2D3436] text-center mb-4">
              {language === "pt" ? "Os 4 Pilares da Avaliação" : "The 4 Pillars of Assessment"}
            </h2>
            <p className="text-center text-[#2D3436]/70 mb-12 max-w-2xl mx-auto">
              {language === "pt"
                ? "Soluções organizadas por área de atuação para atender suas necessidades específicas."
                : "Solutions organized by area of expertise to meet your specific needs."}
            </p>

            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {pillars.map((pillar, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-8 shadow-sm border border-[#91A8D0]/20 hover:shadow-md transition-shadow"
                >
                  <div className="flex items-start gap-4 mb-6">
                    <div
                      className="w-14 h-14 rounded-xl flex items-center justify-center"
                      style={{ backgroundColor: `${pillar.color}20` }}
                    >
                      <pillar.icon className="w-7 h-7" style={{ color: pillar.color }} />
                    </div>
                    <div>
                      <h3 className="font-serif text-xl text-[#2D3436] font-semibold">{pillar.title}</h3>
                      <p className="text-sm text-[#2D3436]/60">{pillar.subtitle}</p>
                    </div>
                  </div>

                  <p className="text-[#2D3436]/80 mb-6 leading-relaxed">{pillar.focus}</p>

                  <div className="border-t border-[#91A8D0]/20 pt-4">
                    <p className="text-xs text-[#2D3436]/50 uppercase tracking-wide mb-3">
                      {language === "pt" ? "Instrumentos Utilizados" : "Instruments Used"}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {pillar.instruments.map((instrument, i) => (
                        <span
                          key={i}
                          className="text-xs px-3 py-1 rounded-full bg-[#f0f0ee] text-[#2D3436]/70 border border-[#91A8D0]/20"
                        >
                          {instrument}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose */}
        <section className="py-16 bg-[#2D3436]">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Award className="w-12 h-12 text-[#91A8D0] mx-auto mb-6" />
              <h2 className="font-serif text-2xl md:text-3xl text-white mb-4">
                {language === "pt" ? "Por que escolher uma Especialista?" : "Why choose a Specialist?"}
              </h2>
              <p className="text-white/80 text-lg leading-relaxed mb-8">
                {language === "pt"
                  ? "A aplicação de testes psicológicos é privativa do psicólogo, conforme a Lei 4.119/62. Garanta laudos técnicos, éticos e assertivos para tomadas de decisão complexas na sua vida, na sua família ou na sua empresa."
                  : "The application of psychological tests is exclusive to psychologists, according to Law 4.119/62. Ensure technical, ethical, and accurate reports for complex decision-making in your life, family, or company."}
              </p>

              <div className="grid sm:grid-cols-3 gap-6 mt-10">
                {[
                  {
                    title: language === "pt" ? "Laudos Válidos" : "Valid Reports",
                    desc:
                      language === "pt"
                        ? "Documentos aceitos por tribunais, escolas e empresas"
                        : "Documents accepted by courts, schools, and companies",
                  },
                  {
                    title: language === "pt" ? "Ética Profissional" : "Professional Ethics",
                    desc:
                      language === "pt"
                        ? "Sigilo absoluto conforme Código de Ética do Psicólogo"
                        : "Absolute confidentiality per Psychology Code of Ethics",
                  },
                  {
                    title: language === "pt" ? "20+ Anos de Experiência" : "20+ Years of Experience",
                    desc:
                      language === "pt"
                        ? "Expertise clínica e organizacional comprovada"
                        : "Proven clinical and organizational expertise",
                  },
                ].map((item, i) => (
                  <div key={i} className="text-center">
                    <CheckCircle className="w-8 h-8 text-[#91A8D0] mx-auto mb-3" />
                    <h4 className="text-white font-semibold mb-1">{item.title}</h4>
                    <p className="text-white/60 text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-[#f8f8f6]">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-serif text-2xl md:text-3xl text-[#2D3436] mb-4">
              {language === "pt" ? "Precisa de uma avaliação técnica?" : "Need a technical assessment?"}
            </h2>
            <p className="text-[#2D3436]/70 mb-8 max-w-xl mx-auto">
              {language === "pt"
                ? "Entre em contato para agendar sua avaliação individual ou solicitar um orçamento empresarial."
                : "Contact us to schedule your individual assessment or request a corporate quote."}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="https://wa.me/5581985122022?text=Olá! Gostaria de solicitar um orçamento para Avaliação Psicológica."
                target="_blank"
                className="inline-flex items-center justify-center gap-2 bg-[#CD8D7A] hover:bg-[#b87a68] text-white px-8 py-4 rounded-xl font-medium transition-colors"
              >
                {language === "pt" ? "Solicitar Orçamento" : "Request Quote"}
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/"
                className="inline-flex items-center justify-center gap-2 border-2 border-[#91A8D0] text-[#2D3436] hover:bg-[#91A8D0] hover:text-white px-8 py-4 rounded-xl font-medium transition-colors"
              >
                {language === "pt" ? "Voltar ao Início" : "Back to Home"}
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
