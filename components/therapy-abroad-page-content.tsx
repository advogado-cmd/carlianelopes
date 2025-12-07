"use client"

import Link from "next/link"
import { useEffect } from "react"
import {
  Globe,
  TreePine,
  Plane,
  Clock,
  Laptop,
  CreditCard,
  Brain,
  Briefcase,
  Shield,
  Heart,
  ArrowLeft,
  Phone,
  CheckCircle,
  Users,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/lib/i18n"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"

export function TherapyAbroadPageContent() {
  const { language } = useLanguage()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const content = {
    pt: {
      backHome: "Voltar ao Início",
      hero: {
        headline: "Sinta-se em casa, onde quer que você esteja.",
        subheadline:
          "Programa Terapia Sem Fronteiras: Acolhimento psicológico especializado para brasileiros que vivem no exterior ou estão planejando sua mudança. Fale sua língua, expresse sua essência.",
        cta: "Agendar Sessão de Acolhimento",
      },
      pain: {
        title: "Morar fora é um sonho, mas traz desafios que só quem vive entende.",
        intro:
          'Mudar de país exige uma coragem imensa. Mas, passadas as primeiras semanas de euforia, é comum que outros sentimentos surjam. A barreira do idioma cansa a mente, a saudade (o famoso "banzo") aperta o peito e a sensação de não pertencer totalmente a lugar nenhum pode ser angustiante.',
        question: "Você se identifica com alguma dessas situações?",
        items: [
          {
            title: "Exaustão Mental",
            desc: "O esforço constante para se comunicar e entender códigos culturais diferentes.",
          },
          {
            title: "Solidão em Multidão",
            desc: "Estar cercado de pessoas, mas sentir que ninguém entende suas piadas, suas referências ou sua profundidade emocional.",
          },
          {
            title: "Culpa da Distância",
            desc: "A sensação de estar perdendo momentos importantes da família no Brasil ou a dificuldade de lidar com o envelhecimento dos pais à distância.",
          },
          {
            title: "Crise de Identidade",
            desc: '"Quem sou eu longe da minha cultura e da minha carreira antiga?"',
          },
        ],
        conclusion:
          'Aqui, no Programa Terapia Sem Fronteiras, você tem um espaço seguro para "destravar" o português e falar com o coração, sem precisar traduzir seus sentimentos.',
      },
      methodology: {
        title: "Como o Programa ajuda na sua jornada internacional",
        intro:
          "Diferente da terapia convencional, este programa foi desenhado considerando as fases específicas da vida de um imigrante ou expatriado. Minha abordagem une a Terapia Cognitivo-Comportamental (TCC) e a Visão Sistêmica para te fortalecer.",
        pillarsTitle: "Os 3 Pilares do Atendimento:",
        pillars: [
          {
            icon: Shield,
            title: "Gestão de Crises e Ansiedade Migratória",
            desc: "Com minha experiência em gestão hospitalar e crises agudas, ofereço ferramentas práticas para momentos de pânico, ansiedade intensa ou choque cultural. O objetivo é estabilizar suas emoções para que você possa tomar decisões com clareza.",
          },
          {
            icon: TreePine,
            title: "Conexão com as Raízes (Visão Sistêmica)",
            desc: 'Muitas vezes, a dor de morar fora vem da sensação de "trair" ou abandonar o sistema familiar. Trabalhamos a internalização dos pais e da pátria, permitindo que você siga seu destino com a bênção de suas raízes, sem carregar pesos desnecessários.',
          },
          {
            icon: Briefcase,
            title: "Adaptação e Carreira",
            desc: "Suporte para lidar com a pressão profissional, burnout corporativo e a reconstrução da identidade profissional em um novo mercado.",
          },
        ],
      },
      preIntercambio: {
        title: "Vai mudar em breve? Comece a se preparar agora.",
        text: "A preparação emocional é tão importante quanto o visto e as malas. O programa também oferece um módulo de Preparação Psicológica para Mudança, ajudando a alinhar expectativas, reduzir a ansiedade da partida e fortalecer sua resiliência para os primeiros meses.",
      },
      parents: {
        title: "Para Pais e Responsáveis: O Sucesso do Intercâmbio começa na Saúde Mental",
        intro:
          "Enviar um filho para estudar fora é um ato de amor e um grande investimento no futuro. Porém, muitas vezes, o foco fica apenas na logística (visto, escola, moradia) e esquece-se do principal: a maturidade emocional para suportar a distância.",
        warning:
          "Tenho recebido jovens que retornam de experiências internacionais não com bagagem cultural, mas com traumas de adaptação. A falta de preparo psicológico pode transformar o sonho em um pesadelo de isolamento e ansiedade, fazendo com que o jovem bloqueie futuras oportunidades de viajar.",
        offerTitle: "O que oferecemos na Orientação Pré-Embarque:",
        items: [
          {
            title: "Avaliação de Prontidão",
            desc: "Seu filho está emocionalmente pronto para ir agora?",
          },
          {
            title: "Alinhamento de Expectativas",
            desc: 'Desconstruir a ideia de "vida de filme" e preparar para os desafios reais da rotina longe de casa.',
          },
          {
            title: "Canal Aberto",
            desc: "Orientação para que os pais saibam como dar suporte à distância sem gerar dependência ou culpa.",
          },
        ],
        cta: "Quero preparar meu filho emocionalmente",
      },
      logistics: {
        title: "Atendimento descomplicado, pensado para sua rotina global.",
        items: [
          {
            icon: Clock,
            title: "Fuso Horário Flexível",
            desc: "Agenda adaptada para atender pacientes na Europa, Américas, Ásia e Oceania. Encontramos um horário que funcione para o seu dia a dia.",
          },
          {
            icon: Laptop,
            title: "Plataforma Segura",
            desc: "Atendimentos via Google Meet ou WhatsApp Vídeo, com total sigilo e criptografia, seguindo as normas do Conselho Federal de Psicologia.",
          },
          {
            icon: CreditCard,
            title: "Pagamentos Internacionais",
            desc: "Facilidade para pagamentos via Wise, PayPal, Transferência Internacional ou Pix (para quem mantém conta no Brasil).",
          },
        ],
      },
      about: {
        title: "Dra. Carliane Lopes de Oliveira",
        crp: "CRP 02/12727",
        text: "Psicóloga Clínica com mais de 20 anos de experiência e expertise em gestão de crises e saúde mental de alta complexidade. Autora e especialista em Visão Sistêmica, entende a profundidade dos laços familiares e como eles impactam nossa vida, independentemente da distância geográfica.",
      },
      faq: {
        title: "Perguntas Frequentes",
        items: [
          {
            q: "A terapia online funciona igual à presencial?",
            a: "Sim. Estudos comprovam que a eficácia da terapia online é equivalente à presencial. O vínculo terapêutico e as técnicas aplicadas garantem um processo profundo e transformador, com a vantagem de você estar no conforto do seu lar.",
          },
          {
            q: "Como funciona o pagamento em outra moeda?",
            a: "Você pode realizar o pagamento através de plataformas como Wise ou PayPal, convertendo para a moeda local, ou via Pix se ainda tiver conta no Brasil. Os valores são acordados previamente.",
          },
          {
            q: "Atende casais binacionais (Brasileiro + Estrangeiro)?",
            a: "Sim, o atendimento a casais foca nas dinâmicas de relacionamento e nas diferenças culturais. As sessões podem ser conduzidas em português ou inglês, dependendo da necessidade do casal.",
          },
        ],
      },
      cta: {
        headline: "Não deixe a distância te afastar de quem você é.",
        text: "Cuide da sua saúde mental com quem entende sua cultura e sua língua.",
        button: "Solicitar Horário pelo WhatsApp",
      },
    },
    en: {
      backHome: "Back to Home",
      hero: {
        headline: "Feel at home, wherever you are.",
        subheadline:
          "Therapy Without Borders Program: Specialized psychological support for Brazilians living abroad or planning their move. Speak your language, express your essence.",
        cta: "Schedule a Welcome Session",
      },
      pain: {
        title: "Living abroad is a dream, but it brings challenges that only those who experience it understand.",
        intro:
          'Moving to another country requires immense courage. But after the first weeks of euphoria, other feelings often emerge. The language barrier exhausts the mind, homesickness (the famous Brazilian "banzo") tightens the chest, and the feeling of not fully belonging anywhere can be distressing.',
        question: "Do you identify with any of these situations?",
        items: [
          {
            title: "Mental Exhaustion",
            desc: "The constant effort to communicate and understand different cultural codes.",
          },
          {
            title: "Loneliness in a Crowd",
            desc: "Being surrounded by people, but feeling that no one understands your jokes, your references, or your emotional depth.",
          },
          {
            title: "Distance Guilt",
            desc: "The feeling of missing important family moments in Brazil or the difficulty of dealing with aging parents from afar.",
          },
          {
            title: "Identity Crisis",
            desc: '"Who am I away from my culture and my old career?"',
          },
        ],
        conclusion:
          "Here, in the Therapy Without Borders Program, you have a safe space to unlock your Portuguese and speak from the heart, without having to translate your feelings.",
      },
      methodology: {
        title: "How the Program helps in your international journey",
        intro:
          "Unlike conventional therapy, this program was designed considering the specific phases of an immigrant or expatriate's life. My approach combines Cognitive Behavioral Therapy (CBT) and Systemic Vision to strengthen you.",
        pillarsTitle: "The 3 Pillars of Care:",
        pillars: [
          {
            icon: Shield,
            title: "Crisis Management and Migratory Anxiety",
            desc: "With my experience in hospital management and acute crises, I offer practical tools for moments of panic, intense anxiety, or culture shock. The goal is to stabilize your emotions so you can make decisions with clarity.",
          },
          {
            icon: TreePine,
            title: "Connection with Roots (Systemic Vision)",
            desc: 'Often, the pain of living abroad comes from the feeling of "betraying" or abandoning the family system. We work on internalizing parents and homeland, allowing you to follow your destiny with the blessing of your roots, without carrying unnecessary weights.',
          },
          {
            icon: Briefcase,
            title: "Adaptation and Career",
            desc: "Support to deal with professional pressure, corporate burnout, and the reconstruction of professional identity in a new market.",
          },
        ],
      },
      preIntercambio: {
        title: "Moving soon? Start preparing now.",
        text: "Emotional preparation is as important as the visa and luggage. The program also offers a Psychological Preparation for Change module, helping to align expectations, reduce departure anxiety, and strengthen your resilience for the first months.",
      },
      parents: {
        title: "For Parents and Guardians: Exchange Success Starts with Mental Health",
        intro:
          "Sending a child to study abroad is an act of love and a great investment in the future. However, the focus often remains only on logistics (visa, school, housing) and forgets the main thing: emotional maturity to bear the distance.",
        warning:
          "I have been receiving young people who return from international experiences not with cultural baggage, but with adaptation traumas. Lack of psychological preparation can turn the dream into a nightmare of isolation and anxiety, causing the young person to block future travel opportunities.",
        offerTitle: "What we offer in Pre-Departure Guidance:",
        items: [
          {
            title: "Readiness Assessment",
            desc: "Is your child emotionally ready to go now?",
          },
          {
            title: "Expectation Alignment",
            desc: 'Deconstructing the idea of "movie life" and preparing for the real challenges of routine away from home.',
          },
          {
            title: "Open Channel",
            desc: "Guidance so parents know how to provide support from a distance without creating dependency or guilt.",
          },
        ],
        cta: "I want to emotionally prepare my child",
      },
      logistics: {
        title: "Hassle-free service, designed for your global routine.",
        items: [
          {
            icon: Clock,
            title: "Flexible Time Zone",
            desc: "Schedule adapted to serve patients in Europe, Americas, Asia, and Oceania. We find a time that works for your daily life.",
          },
          {
            icon: Laptop,
            title: "Secure Platform",
            desc: "Sessions via Google Meet or WhatsApp Video, with total confidentiality and encryption, following the norms of the Federal Council of Psychology.",
          },
          {
            icon: CreditCard,
            title: "International Payments",
            desc: "Easy payments via Wise, PayPal, International Transfer, or Pix (for those who maintain an account in Brazil).",
          },
        ],
      },
      about: {
        title: "Dr. Carliane Lopes de Oliveira",
        crp: "CRP 02/12727",
        text: "Clinical Psychologist with over 20 years of experience and expertise in crisis management and high-complexity mental health. Author and specialist in Systemic Vision, she understands the depth of family bonds and how they impact our lives, regardless of geographical distance.",
      },
      faq: {
        title: "Frequently Asked Questions",
        items: [
          {
            q: "Does online therapy work the same as in-person?",
            a: "Yes. Studies prove that the effectiveness of online therapy is equivalent to in-person. The therapeutic bond and applied techniques ensure a deep and transformative process, with the advantage of being in the comfort of your home.",
          },
          {
            q: "How does payment in another currency work?",
            a: "You can make payment through platforms like Wise or PayPal, converting to local currency, or via Pix if you still have an account in Brazil. Values are agreed upon in advance.",
          },
          {
            q: "Do you serve binational couples (Brazilian + Foreigner)?",
            a: "Yes, couples counseling focuses on relationship dynamics and cultural differences. Sessions can be conducted in Portuguese or English, depending on the couple's needs.",
          },
        ],
      },
      cta: {
        headline: "Don't let distance keep you from who you are.",
        text: "Take care of your mental health with someone who understands your culture and your language.",
        button: "Request Appointment via WhatsApp",
      },
    },
  }

  const t = content[language]

  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#e8f0f8]">
        {/* Hero Section */}
        <section className="relative py-20 md:py-32 overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-20"
            style={{
              backgroundImage: `url('/person-looking-through-window-at-city-skyline-hold.jpg')`,
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#91A8D0]/30 to-[#e8f0f8]" />

          <div className="container mx-auto px-4 relative z-10">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-[#2D3436]/70 hover:text-[#CD8D7A] transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              {t.backHome}
            </Link>

            <div className="max-w-3xl mx-auto text-center">
              <div className="flex justify-center mb-6">
                <div className="relative">
                  <Globe className="w-16 h-16 text-[#91A8D0]" />
                  <div className="absolute -top-1 -right-1 w-6 h-6 bg-[#CD8D7A] rounded-full flex items-center justify-center">
                    <Plane className="w-3.5 h-3.5 text-white" />
                  </div>
                </div>
              </div>

              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-[#2D3436] mb-6 leading-tight">
                {t.hero.headline}
              </h1>

              <p className="text-lg md:text-xl text-[#2D3436]/80 mb-8 leading-relaxed">{t.hero.subheadline}</p>

              <Button
                asChild
                size="lg"
                className="bg-[#CD8D7A] hover:bg-[#b87a68] text-white rounded-full px-8 py-6 text-lg shadow-xl"
              >
                <a
                  href="https://wa.me/5581985122022?text=Olá,%20sou%20brasileiro(a)%20no%20exterior%20e%20gostaria%20de%20agendar%20uma%20sessão%20de%20acolhimento."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  {t.hero.cta}
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* Pain Points Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="flex justify-center mb-4">
                <Heart className="w-10 h-10 text-[#CD8D7A]" />
              </div>

              <h2 className="font-serif text-3xl md:text-4xl text-[#2D3436] text-center mb-6">{t.pain.title}</h2>

              <p className="text-lg text-[#2D3436]/80 text-center mb-8 leading-relaxed">{t.pain.intro}</p>

              <p className="text-xl font-semibold text-[#91A8D0] text-center mb-8">{t.pain.question}</p>

              <div className="grid md:grid-cols-2 gap-6 mb-10">
                {t.pain.items.map((item, index) => (
                  <div
                    key={index}
                    className="bg-[#e8f0f8] rounded-2xl p-6 border border-[#91A8D0]/20 hover:shadow-lg transition-shadow"
                  >
                    <h3 className="font-semibold text-[#2D3436] text-lg mb-2">{item.title}</h3>
                    <p className="text-[#2D3436]/70">{item.desc}</p>
                  </div>
                ))}
              </div>

              <div className="bg-[#91A8D0]/10 rounded-2xl p-8 text-center border border-[#91A8D0]/20">
                <p className="text-lg text-[#2D3436] italic leading-relaxed">{t.pain.conclusion}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Methodology Section */}
        <section className="py-20 bg-[#e8f0f8]">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="flex justify-center mb-4">
                <Brain className="w-10 h-10 text-[#91A8D0]" />
              </div>

              <h2 className="font-serif text-3xl md:text-4xl text-[#2D3436] text-center mb-6">{t.methodology.title}</h2>

              <p className="text-lg text-[#2D3436]/80 text-center mb-10 max-w-3xl mx-auto leading-relaxed">
                {t.methodology.intro}
              </p>

              <h3 className="text-xl font-semibold text-[#CD8D7A] text-center mb-8">{t.methodology.pillarsTitle}</h3>

              <div className="grid md:grid-cols-3 gap-6">
                {t.methodology.pillars.map((pillar, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-2xl p-8 shadow-lg border border-[#91A8D0]/10 hover:shadow-xl transition-shadow"
                  >
                    <div className="w-14 h-14 bg-[#91A8D0]/20 rounded-2xl flex items-center justify-center mb-6">
                      <pillar.icon className="w-7 h-7 text-[#91A8D0]" />
                    </div>
                    <h4 className="font-serif text-xl text-[#2D3436] mb-4">{pillar.title}</h4>
                    <p className="text-[#2D3436]/70 leading-relaxed">{pillar.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Pre-Intercambio Section */}
        <section className="py-16 bg-[#CD8D7A]/10">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <div className="flex justify-center mb-4">
                <Plane className="w-10 h-10 text-[#CD8D7A]" />
              </div>

              <h3 className="font-serif text-2xl md:text-3xl text-[#2D3436] mb-4">{t.preIntercambio.title}</h3>

              <p className="text-lg text-[#2D3436]/80 leading-relaxed">{t.preIntercambio.text}</p>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="bg-gradient-to-br from-[#91A8D0]/20 to-[#e8f0f8] rounded-3xl p-8 md:p-12 border border-[#91A8D0]/30 shadow-lg">
                <div className="flex items-center justify-center gap-3 mb-6">
                  <Users className="w-10 h-10 text-[#91A8D0]" />
                  <span className="text-3xl">👨‍👩‍👧‍👦</span>
                </div>

                <h2 className="font-serif text-2xl md:text-3xl text-[#2D3436] text-center mb-6">{t.parents.title}</h2>

                <p className="text-lg text-[#2D3436]/80 text-center mb-6 leading-relaxed">{t.parents.intro}</p>

                <div className="bg-[#CD8D7A]/10 rounded-2xl p-6 mb-8 border-l-4 border-[#CD8D7A]">
                  <p className="text-[#2D3436]/80 leading-relaxed italic">{t.parents.warning}</p>
                </div>

                <h4 className="font-semibold text-[#91A8D0] text-lg mb-6 text-center">{t.parents.offerTitle}</h4>

                <div className="space-y-4 mb-8">
                  {t.parents.items.map((item, index) => (
                    <div key={index} className="flex items-start gap-4 bg-white rounded-xl p-4 shadow-sm">
                      <div className="w-8 h-8 bg-[#91A8D0]/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <CheckCircle className="w-5 h-5 text-[#91A8D0]" />
                      </div>
                      <div>
                        <h5 className="font-semibold text-[#2D3436] mb-1">{item.title}</h5>
                        <p className="text-[#2D3436]/70">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="text-center">
                  <Button
                    asChild
                    size="lg"
                    className="bg-[#CD8D7A] hover:bg-[#b87a68] text-white rounded-full px-8 py-6 text-lg shadow-xl"
                  >
                    <a
                      href="https://wa.me/5581985122022?text=Olá,%20sou%20pai/mãe%20e%20gostaria%20de%20preparar%20meu%20filho%20emocionalmente%20para%20o%20intercâmbio."
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Heart className="w-5 h-5 mr-2" />
                      {t.parents.cta}
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Logistics Section */}
        <section className="py-20 bg-[#e8f0f8]">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="flex justify-center mb-4">
                <Globe className="w-10 h-10 text-[#91A8D0]" />
              </div>

              <h2 className="font-serif text-3xl md:text-4xl text-[#2D3436] text-center mb-12">{t.logistics.title}</h2>

              <div className="grid md:grid-cols-3 gap-8">
                {t.logistics.items.map((item, index) => (
                  <div key={index} className="text-center">
                    <div className="w-16 h-16 bg-[#91A8D0]/20 rounded-full flex items-center justify-center mx-auto mb-6">
                      <item.icon className="w-8 h-8 text-[#91A8D0]" />
                    </div>
                    <h4 className="font-semibold text-[#2D3436] text-lg mb-3">{item.title}</h4>
                    <p className="text-[#2D3436]/70 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-[#91A8D0]/30 shadow-xl flex-shrink-0">
                  <img
                    src="/images/carliane-principal.png"
                    alt="Dra. Carliane Lopes de Oliveira"
                    className="w-full h-full object-cover object-top"
                  />
                </div>

                <div>
                  <h3 className="font-serif text-2xl text-[#2D3436] mb-2">{t.about.title}</h3>
                  <p className="text-[#91A8D0] font-medium mb-4">{t.about.crp}</p>
                  <p className="text-[#2D3436]/80 leading-relaxed">{t.about.text}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-[#e8f0f8]">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="font-serif text-3xl md:text-4xl text-[#2D3436] text-center mb-12">{t.faq.title}</h2>

              <div className="space-y-6">
                {t.faq.items.map((item, index) => (
                  <div key={index} className="bg-white rounded-2xl p-6 shadow-md">
                    <h4 className="font-semibold text-[#2D3436] text-lg mb-3">{item.q}</h4>
                    <p className="text-[#2D3436]/70 leading-relaxed">{item.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-20 bg-gradient-to-br from-[#91A8D0] to-[#7a94be]">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-serif text-3xl md:text-4xl text-white mb-6">{t.cta.headline}</h2>

              <p className="text-xl text-white/90 mb-8">{t.cta.text}</p>

              <Button
                asChild
                size="lg"
                className="bg-white text-[#91A8D0] hover:bg-white/90 rounded-full px-10 py-6 text-lg shadow-xl"
              >
                <a
                  href="https://wa.me/5581985122022?text=Olá,%20sou%20brasileiro(a)%20no%20exterior%20e%20gostaria%20de%20agendar%20uma%20sessão."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  {t.cta.button}
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
