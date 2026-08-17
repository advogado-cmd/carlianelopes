import type { Locale, Localized } from "./locales"

/**
 * Dicionário de "chrome": os rótulos fixos da interface.
 *
 * O conteúdo das páginas NÃO mora aqui — mora nos registries
 * (lib/especialidades/registry.ts e afins). Aqui ficam só navegação,
 * botões, rodapé e os avisos que aparecem em toda página.
 *
 * O texto em português é o já aprovado no site atual (extraído de lib/i18n.tsx).
 */

export interface Chrome {
  nav: {
    home: string
    about: string
    specialties: string
    method: string
    psychotherapy: string
    abroad: string
    assessment: string
    book: string
    blog: string
    faq: string
    contact: string
    schedule: string
    curriculum: string
    menu: string
    close: string
  }
  cta: {
    schedule: string
    knowMethod: string
    clinicalCare: string
    whatsapp: string
    readMore: string
    seeAll: string
    backToSpecialties: string
  }
  /** Títulos de SEO: <=60 caracteres, sem repetir o nome (o template do layout já o acrescenta). */
  seo: { homeTitle: string; hubTitle: string }
  home: {
    heroEyebrow: string
    heroTitle: string
    heroSub: string
    mirrorTitle: string
    mirror: string[]
    doorsEyebrow: string
    doorMethodKicker: string
    doorMethodTitle: string
    doorMethodText: string
    doorClinicKicker: string
    doorClinicTitle: string
    doorClinicText: string
    whoEyebrow: string
    whoTitle: string
    whoText: string
    specialtiesEyebrow: string
    specialtiesTitle: string
    specialtiesSub: string
    abroadEyebrow: string
    abroadTitle: string
    abroadText: string
  }
  /** As três provas de profundidade — substituem o contador de pacientes (decisão de 17/ago/2026). */
  proofs: { value: string; label: string }[]
  specialties: {
    hubTitle: string
    hubSub: string
    forWhom: string
    howItWorks: string
    duration: string
    modality: string
    online: string
    inPerson: string
    faq: string
    related: string
    hubs: Record<"clinica" | "casais" | "corporativo" | "internacional", string>
  }
  safety: {
    title: string
    body: string
    linesLabel: string
    lines: { label: string; value: string; href?: string }[]
    footerLink: string
  }
  compliance: {
    note: string
    identity: string
    crp: string
  }
  footer: {
    contact: string
    navigate: string
    legal: string
    privacy: string
    terms: string
    officeLabel: string
    address: string
    rights: string
  }
  whatsapp: {
    aria: string
    tooltip: string
    notEmergency: string
    /** Mensagem padrão; páginas com registry sobrescrevem com a sua. */
    defaultMessage: string
  }
  langBanner: { text: string; action: string; dismiss: string }
}

const ADDRESS =
  "Av. Engenheiro Domingos Ferreira, 890, sl. 204, Pina, Boa Viagem, Recife — PE, CEP 51011-050"

export const CHROME: Localized<Chrome> = {
  pt: {
    seo: { homeTitle: "Psicóloga em Recife e online — CRP 02/12727", hubTitle: "Especialidades — psicóloga online e em Recife" },
    nav: {
      home: "Início",
      about: "Sobre",
      specialties: "Especialidades",
      method: "O método",
      psychotherapy: "Psicoterapia",
      abroad: "Terapia sem Fronteiras",
      assessment: "Avaliação Psicológica",
      book: "Livro",
      blog: "Escritos",
      faq: "Perguntas frequentes",
      contact: "Contato",
      schedule: "Agendar",
      curriculum: "Currículo",
      menu: "Abrir menu",
      close: "Fechar menu",
    },
    cta: {
      schedule: "Agendar uma conversa",
      knowMethod: "Conhecer o método",
      clinicalCare: "Atendimento clínico",
      whatsapp: "Falar no WhatsApp",
      readMore: "Continuar lendo",
      seeAll: "Ver todas as especialidades",
      backToSpecialties: "Todas as especialidades",
    },
    home: {
      heroEyebrow: "Psicologia clínica · Recife e online",
      heroTitle: "A psicóloga que lê o que você não fala.",
      heroSub:
        "Escuta clínica formada na urgência — mais de uma década em hospitais psiquiátricos de alta complexidade. Atendimento online para o Brasil e o mundo, e presencial em Boa Viagem, Recife.",
      mirrorTitle: "Você se reconhece aqui",
      mirror: [
        "Você já leu, já tentou, já entendeu — e alguma coisa continua no mesmo lugar.",
        "As mesmas conversas se repetem, com pessoas diferentes.",
        "Há uma pergunta que não te larga e que você ainda não conseguiu formular.",
      ],
      doorsEyebrow: "Por onde começar",
      doorMethodKicker: "O método",
      doorMethodTitle: "Da Falta à Presença",
      doorMethodText:
        "Um processo com início, meio e fim, para sair da confusão e ocupar o próprio lugar. Desenvolvimento pessoal, conduzido por psicóloga.",
      doorClinicKicker: "A clínica",
      doorClinicTitle: "Psicoterapia",
      doorClinicText:
        "Acompanhamento psicológico individual e de casais. Ansiedade, depressão, luto, crise e trauma. Online e presencial em Recife.",
      whoEyebrow: "Quem conduz",
      whoTitle: "Carliane Lopes de Oliveira",
      whoText:
        "Psicóloga clínica formada pela ESUDA (2005). Mais de uma década na gestão de hospitais psiquiátricos de alta complexidade, onde criou programas para transtornos mentais e dependência química. Terapia Cognitivo-Comportamental com visão sistêmica e integrativa.",
      specialtiesEyebrow: "Como posso ajudar",
      specialtiesTitle: "Especialidades",
      specialtiesSub: "Áreas de atuação clínica, online e presencial.",
      abroadEyebrow: "Terapia sem Fronteiras",
      abroadTitle: "Morar longe não devia custar a sua língua.",
      abroadText:
        "Mudar de país traz a barreira do idioma, a saudade, a adaptação cultural e a solidão. Falar sobre o que se sente na própria língua materna muda o que é possível dizer.",
    },
    proofs: [
      { value: "20+", label: "anos de clínica" },
      { value: "10+", label: "anos em hospital psiquiátrico de alta complexidade" },
      { value: "Hellinger Schule", label: "formação em Constelações Familiares, Alemanha" },
    ],
    specialties: {
      hubTitle: "Especialidades",
      hubSub:
        "Cada página descreve o que costuma aparecer, como o acompanhamento funciona e qual é o próximo passo.",
      forWhom: "Isto é para você se",
      howItWorks: "Como funciona o acompanhamento",
      duration: "Duração",
      modality: "Modalidade",
      online: "Online",
      inPerson: "Presencial em Recife",
      faq: "Perguntas frequentes",
      related: "Temas relacionados",
      hubs: {
        clinica: "Clínica individual",
        casais: "Casais e família",
        corporativo: "Corporativo e carreira",
        internacional: "Internacional",
      },
    },
    safety: {
      title: "Se você está passando por um momento difícil agora",
      body: "Este site não é um canal de emergência e as mensagens não têm resposta imediata. Se você precisa falar com alguém agora, estas linhas atendem 24 horas, de graça e em sigilo.",
      linesLabel: "Brasil",
      lines: [
        { label: "CVV", value: "188", href: "tel:188" },
        { label: "SAMU", value: "192", href: "tel:192" },
        { label: "Emergência", value: "190", href: "tel:190" },
      ],
      footerLink: "Preciso de ajuda agora",
    },
    compliance: {
      note: "Conteúdo informativo, sem finalidade diagnóstica ou de tratamento. Não substitui avaliação e acompanhamento profissional individual.",
      identity: "Psicóloga Carliane Lopes de Oliveira",
      crp: "CRP 02/12727",
    },
    footer: {
      contact: "Contato",
      navigate: "Navegar",
      legal: "Institucional",
      privacy: "Política de privacidade",
      terms: "Termos de uso",
      officeLabel: "Consultório",
      address: ADDRESS,
      rights: "Todos os direitos reservados.",
    },
    whatsapp: {
      aria: "Falar no WhatsApp",
      tooltip: "Resposta em horário comercial (Recife, UTC−3)",
      notEmergency: "O WhatsApp não é canal de emergência.",
      defaultMessage: "Olá, vim pelo site e gostaria de saber mais sobre o atendimento.",
    },
    langBanner: {
      text: "Este site também está disponível em outros idiomas.",
      action: "Trocar idioma",
      dismiss: "Dispensar",
    },
  },

  en: {
    seo: { homeTitle: "Brazilian psychologist — online therapy worldwide", hubTitle: "Specialties — Brazilian psychologist online" },
    nav: {
      home: "Home",
      about: "About",
      specialties: "Specialties",
      method: "The method",
      psychotherapy: "Psychotherapy",
      abroad: "Therapy Without Borders",
      assessment: "Psychological Assessment",
      book: "Book",
      blog: "Writing",
      faq: "FAQ",
      contact: "Contact",
      schedule: "Book a session",
      curriculum: "Credentials",
      menu: "Open menu",
      close: "Close menu",
    },
    cta: {
      schedule: "Book a conversation",
      knowMethod: "About the method",
      clinicalCare: "Clinical practice",
      whatsapp: "Message on WhatsApp",
      readMore: "Keep reading",
      seeAll: "See all specialties",
      backToSpecialties: "All specialties",
    },
    home: {
      heroEyebrow: "Clinical psychology · Online worldwide",
      heroTitle: "The psychologist who reads what you don't say.",
      heroSub:
        "A clinical ear shaped by urgency — over a decade in high-complexity psychiatric hospitals. Online sessions worldwide, in Portuguese, English and Spanish.",
      mirrorTitle: "You may recognise yourself here",
      mirror: [
        "You've read about it, tried it, understood it — and something stays exactly where it was.",
        "The same conversations keep returning, with different people.",
        "There's a question you can't shake off and haven't managed to put into words.",
      ],
      doorsEyebrow: "Where to start",
      doorMethodKicker: "The method",
      doorMethodTitle: "From Absence to Presence",
      doorMethodText:
        "A process with a beginning, a middle and an end — to move out of confusion and take up your own place. Personal development, led by a psychologist.",
      doorClinicKicker: "The practice",
      doorClinicTitle: "Psychotherapy",
      doorClinicText:
        "Individual and couples therapy. Anxiety, depression, grief, crisis and trauma. Online from anywhere, in person in Recife.",
      whoEyebrow: "Who you'll be working with",
      whoTitle: "Carliane Lopes de Oliveira",
      whoText:
        "Clinical psychologist, trained at ESUDA (2005). Over a decade running high-complexity psychiatric hospitals, where she built programmes for mental illness and substance dependence. Cognitive Behavioural Therapy with a systemic, integrative outlook.",
      specialtiesEyebrow: "How I can help",
      specialtiesTitle: "Specialties",
      specialtiesSub: "Areas of clinical practice, online and in person.",
      abroadEyebrow: "Therapy Without Borders",
      abroadTitle: "Living far away shouldn't cost you your language.",
      abroadText:
        "Moving country brings a language barrier, homesickness, cultural adjustment and loneliness. Speaking about what you feel in your own language changes what can be said at all.",
    },
    proofs: [
      { value: "20+", label: "years in clinical practice" },
      { value: "10+", label: "years in high-complexity psychiatric hospitals" },
      { value: "Hellinger Schule", label: "trained in Family Constellations, Germany" },
    ],
    specialties: {
      hubTitle: "Specialties",
      hubSub:
        "Each page describes what tends to show up, how the work unfolds and what the next step is.",
      forWhom: "This is for you if",
      howItWorks: "How the work unfolds",
      duration: "Session length",
      modality: "Format",
      online: "Online",
      inPerson: "In person in Recife",
      faq: "Frequently asked",
      related: "Related topics",
      hubs: {
        clinica: "Individual therapy",
        casais: "Couples and family",
        corporativo: "Work and career",
        internacional: "International",
      },
    },
    safety: {
      title: "If you're going through something difficult right now",
      body: "This site is not an emergency channel and messages are not answered immediately. If you need to speak to someone now, please contact your local emergency service or a crisis line in the country you are in.",
      linesLabel: "Brazil",
      lines: [
        { label: "CVV (Brazil)", value: "188", href: "tel:188" },
        { label: "Emergency (Brazil)", value: "192", href: "tel:192" },
      ],
      footerLink: "I need help now",
    },
    compliance: {
      note: "Informational content only. Not a diagnosis and not a treatment. It does not replace individual professional assessment and care.",
      identity: "Carliane Lopes de Oliveira, Psychologist",
      crp: "CRP 02/12727 (Brazil)",
    },
    footer: {
      contact: "Contact",
      navigate: "Navigate",
      legal: "Legal",
      privacy: "Privacy policy",
      terms: "Terms of use",
      officeLabel: "Practice",
      address: ADDRESS,
      rights: "All rights reserved.",
    },
    whatsapp: {
      aria: "Message on WhatsApp",
      tooltip: "Replies during business hours (Recife, UTC−3)",
      notEmergency: "WhatsApp is not an emergency channel.",
      defaultMessage: "Hello, I came through your website and would like to know more about your sessions.",
    },
    langBanner: {
      text: "This site is also available in English.",
      action: "Read in English",
      dismiss: "Dismiss",
    },
  },

  es: {
    seo: { homeTitle: "Psicóloga brasileña — terapia en línea", hubTitle: "Especialidades — psicóloga en línea" },
    nav: {
      home: "Inicio",
      about: "Sobre mí",
      specialties: "Especialidades",
      method: "El método",
      psychotherapy: "Psicoterapia",
      abroad: "Terapia sin Fronteras",
      assessment: "Evaluación Psicológica",
      book: "Libro",
      blog: "Escritos",
      faq: "Preguntas frecuentes",
      contact: "Contacto",
      schedule: "Agendar",
      curriculum: "Formación",
      menu: "Abrir menú",
      close: "Cerrar menú",
    },
    cta: {
      schedule: "Agendar una conversación",
      knowMethod: "Conocer el método",
      clinicalCare: "Atención clínica",
      whatsapp: "Escribir por WhatsApp",
      readMore: "Seguir leyendo",
      seeAll: "Ver todas las especialidades",
      backToSpecialties: "Todas las especialidades",
    },
    home: {
      heroEyebrow: "Psicología clínica · En línea",
      heroTitle: "La psicóloga que lee lo que no dices.",
      heroSub:
        "Una escucha clínica formada en la urgencia — más de una década en hospitales psiquiátricos de alta complejidad. Sesiones en línea desde cualquier país.",
      mirrorTitle: "Quizá te reconozcas aquí",
      mirror: [
        "Ya leíste, ya lo intentaste, ya lo entendiste — y algo sigue exactamente en el mismo lugar.",
        "Las mismas conversaciones se repiten, con personas distintas.",
        "Hay una pregunta que no te suelta y que todavía no has logrado formular.",
      ],
      doorsEyebrow: "Por dónde empezar",
      doorMethodKicker: "El método",
      doorMethodTitle: "De la Falta a la Presencia",
      doorMethodText:
        "Un proceso con principio, medio y fin, para salir de la confusión y ocupar el propio lugar. Desarrollo personal, conducido por psicóloga.",
      doorClinicKicker: "La clínica",
      doorClinicTitle: "Psicoterapia",
      doorClinicText:
        "Acompañamiento psicológico individual y de pareja. Ansiedad, depresión, duelo, crisis y trauma. En línea desde cualquier lugar.",
      whoEyebrow: "Quién conduce",
      whoTitle: "Carliane Lopes de Oliveira",
      whoText:
        "Psicóloga clínica formada en ESUDA (2005). Más de una década en la gestión de hospitales psiquiátricos de alta complejidad, donde creó programas para trastornos mentales y dependencia química. Terapia Cognitivo-Conductual con mirada sistémica e integrativa.",
      specialtiesEyebrow: "Cómo puedo ayudar",
      specialtiesTitle: "Especialidades",
      specialtiesSub: "Áreas de actuación clínica, en línea y presencial.",
      abroadEyebrow: "Terapia sin Fronteras",
      abroadTitle: "Vivir lejos no debería costarte tu idioma.",
      abroadText:
        "Cambiar de país trae la barrera del idioma, la nostalgia, la adaptación cultural y la soledad. Hablar de lo que se siente en la propia lengua cambia lo que se puede decir.",
    },
    proofs: [
      { value: "20+", label: "años de clínica" },
      { value: "10+", label: "años en hospital psiquiátrico de alta complejidad" },
      { value: "Hellinger Schule", label: "formación en Constelaciones Familiares, Alemania" },
    ],
    specialties: {
      hubTitle: "Especialidades",
      hubSub:
        "Cada página describe lo que suele aparecer, cómo se desarrolla el acompañamiento y cuál es el próximo paso.",
      forWhom: "Esto es para ti si",
      howItWorks: "Cómo funciona el acompañamiento",
      duration: "Duración",
      modality: "Modalidad",
      online: "En línea",
      inPerson: "Presencial en Recife",
      faq: "Preguntas frecuentes",
      related: "Temas relacionados",
      hubs: {
        clinica: "Clínica individual",
        casais: "Pareja y familia",
        corporativo: "Trabajo y carrera",
        internacional: "Internacional",
      },
    },
    safety: {
      title: "Si estás pasando por un momento difícil ahora",
      body: "Este sitio no es un canal de emergencia y los mensajes no se responden de inmediato. Si necesitas hablar con alguien ahora, comunícate con el servicio de emergencia o una línea de crisis del país en el que te encuentras.",
      linesLabel: "Brasil",
      lines: [
        { label: "CVV (Brasil)", value: "188", href: "tel:188" },
        { label: "Emergencia (Brasil)", value: "192", href: "tel:192" },
      ],
      footerLink: "Necesito ayuda ahora",
    },
    compliance: {
      note: "Contenido informativo, sin finalidad diagnóstica ni de tratamiento. No sustituye la evaluación ni el acompañamiento profesional individual.",
      identity: "Psicóloga Carliane Lopes de Oliveira",
      crp: "CRP 02/12727 (Brasil)",
    },
    footer: {
      contact: "Contacto",
      navigate: "Navegar",
      legal: "Institucional",
      privacy: "Política de privacidad",
      terms: "Términos de uso",
      officeLabel: "Consultorio",
      address: ADDRESS,
      rights: "Todos los derechos reservados.",
    },
    whatsapp: {
      aria: "Escribir por WhatsApp",
      tooltip: "Respuesta en horario comercial (Recife, UTC−3)",
      notEmergency: "WhatsApp no es un canal de emergencia.",
      defaultMessage: "Hola, llegué por su sitio y me gustaría saber más sobre las sesiones.",
    },
    langBanner: {
      text: "Este sitio también está disponible en español.",
      action: "Leer en español",
      dismiss: "Descartar",
    },
  },
}

export function chrome(locale: Locale): Chrome {
  return CHROME[locale]
}
