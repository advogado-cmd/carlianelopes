"use client"

import { createContext, useContext, useState, type ReactNode } from "react"

type Language = "pt" | "en"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const translations: Record<Language, Record<string, string>> = {
  pt: {
    // Navigation
    "nav.about": "Sobre",
    "nav.specialties": "Especialidades",
    "nav.curriculum": "Currículo",
    "nav.book": "Livro",
    "nav.blog": "Blog",
    "nav.faq": "FAQ",
    "nav.contact": "Contato",
    "nav.schedule": "Agendar Sessão",
    "nav.therapyAbroad": "Terapia sem Fronteiras",
    "nav.assessment": "Avaliação Psicológica",

    // Hero Section
    "hero.headline": "Cuide da sua saúde mental com acolhimento, técnica e segurança.",
    "hero.subheadline":
      "Atendimento psicológico clínico para Adolescentes, Adultos e Casais. Especialista em gestão de crises, traumas e fortalecimento emocional.",
    "hero.cta.primary": "Agendar Atendimento",
    "hero.cta.secondary": "Conheça minha trajetória",
    "hero.badge.location": "Atendimento Online e Presencial (Recife/PE)",
    "hero.badge.crp": "CRP 02/12727",
    "hero.badge.international": "Vivência Internacional",
    "hero.badge.global": "Atendimento Online para o Brasil e o Mundo",

    // About Section
    "about.title": "Sobre Carliane Lopes de Oliveira",
    "about.subtitle": "Mais de 20 anos dedicados ao cuidado da saúde mental",
    "about.paragraph1":
      "Com mais de 20 anos de experiência clínica e hospitalar, sou psicóloga dedicada a oferecer um espaço seguro de escuta e transformação. Minha trajetória inclui mais de uma década de atuação na gestão de hospitais psiquiátricos de alta complexidade, onde fui pioneira na criação de programas especializados para transtornos mentais e dependência química, incluindo um programa de tratamento exclusivo para mulheres.",
    "about.paragraph2":
      "Essa vivência intensa me preparou para lidar com crises agudas e sofrimentos profundos com serenidade técnica. Utilizo a Terapia Cognitivo-Comportamental (TCC) aliada a uma visão sistêmica e integrativa, buscando sempre o autoconhecimento e a retomada da qualidade de vida do paciente.",
    "about.stats.experience": "Anos de Experiência",
    "about.stats.patients": "Pacientes Atendidos",
    "about.stats.specializations": "Especializações",
    "about.international.title": "Vivência Internacional",
    "about.international.desc":
      "Experiência multicultural adquirida através de viagens de estudo e vivências práticas comunitárias em diversos países, proporcionando uma compreensão ampliada sobre diferentes culturas e abordagens terapêuticas, mantendo sempre o direcionamento científico da psicologia clínica. Formação internacional em Constelações Familiares na Hellinger Schule, na Alemanha, berço original do método desenvolvido por Bert Hellinger.",
    "about.international.availability":
      "Atendimento disponível para brasileiros no exterior, estrangeiros que falam português e para estrangeiros que falem inglês como língua nativa ou segunda língua.",
    "about.meditation.title": "Práticas Meditativas e Estimulação Neural",
    "about.meditation.desc":
      "Formação em Yoga Nidra (Govardhan School of Yoga, Índia) e técnicas de Estimulação Neural (Instituto Internacional de Estimulación Neural y Terapies Naturales). Ferramentas complementares que potencializam o processo terapêutico, integrando corpo, mente e emoções.",

    // Trajectory Section
    "trajectory.title": "Trajetória, Publicações e Qualificações",
    "trajectory.subtitle": "Uma carreira dedicada à excelência em saúde mental",
    "trajectory.award": "Prêmio Excelência em Saúde Mental",
    "trajectory.award.desc": "Troféu Expressão Pernambucana, 2019",
    "trajectory.books.title": "Livros e Publicações",
    "trajectory.ongoing.title": "Formação Contínua (Em andamento)",
    "trajectory.completed.title": "Especializações Concluídas",
    "trajectory.experience.title": "Experiência Profissional em Destaque",
    "trajectory.international.title": "Vivência Internacional",
    "trajectory.international.hellinger": "Formação em Constelações Familiares na Hellinger Schule, Alemanha (2023)",
    "trajectory.international.yoga": "Formação em Yoga Nidra - Govardhan School of Yoga, Mumbai, Índia (2020)",
    "trajectory.international.neural":
      "Curso de Estimulação Neural - Instituto Internacional de Estimulación Neural y Terapies Naturales, Mãos Sem Fronteiras, Paraná (2025)",
    "trajectory.international.ch6":
      "Curso CH6 Tratamento à Distância - La Jardinera, Mãos Sem Fronteiras, Curitiba (2025)",
    "trajectory.international.available":
      "Atendimento disponível para brasileiros no exterior, estrangeiros que falam português e para estrangeiros que falem inglês como língua nativa ou segunda língua.",

    // Specialties Section
    "specialties.title": "Como Posso Ajudar: Ansiedade, Depressão, Casais e Terapia Familiar",
    "specialties.subtitle": "Áreas de atuação especializada",
    "specialties.anxiety.title": "Ansiedade e Depressão",
    "specialties.anxiety.desc": "Acolhimento e técnicas baseadas em evidências para redução de sintomas.",
    "specialties.crisis.title": "Gestão de Crises e Traumas",
    "specialties.crisis.desc": "Expertise em casos agudos e estabilização emocional.",
    "specialties.couples.title": "Terapia de Casal e Relacionamentos",
    "specialties.couples.desc": "Resolução de conflitos e fortalecimento de vínculos.",
    "specialties.autism.title": "Autismo (TEA) e ABA",
    "specialties.autism.desc": "Suporte especializado e orientação familiar.",
    "specialties.constellation.title": "Constelação Sistêmica",
    "specialties.constellation.desc": "Olhar sistêmico para padrões familiares.",
    "specialties.burnout.title": "Saúde Mental no Trabalho",
    "specialties.burnout.desc": "Burnout e estresse ocupacional.",

    // Methodology Section
    "methodology.title": "Metodologia e Atendimento",
    "methodology.subtitle": "Abordagem integrativa baseada em evidências",
    "methodology.approach.title": "Abordagem",
    "methodology.approach.desc":
      "Terapia Cognitivo-Comportamental (TCC) aliada à Visão Sistêmica, práticas meditativas e técnicas de Estimulação Neural. Uma abordagem integrativa que une ciência e técnicas complementares para promover o autoconhecimento e a retomada da qualidade de vida.",
    "methodology.online.title": "Atendimento Online",
    "methodology.online.desc":
      "Videochamada segura para pacientes no Brasil e exterior. Conecte-se de qualquer dispositivo.",
    "methodology.presential.title": "Atendimento Presencial",
    "methodology.presential.desc": "Consultório em Boa Viagem, Recife/PE. Ambiente acolhedor e privativo.",

    // Therapy Abroad Section
    "abroad.title": "Terapia sem Fronteiras",
    "abroad.subtitle": "Atendimento especializado para brasileiros no exterior",
    "abroad.badge": "Atendimento Global",
    "abroad.headline": "Atendimento para Brasileiros no Exterior e Preparação para Mudanças",
    "abroad.copy":
      "Mudar de país é um sonho, mas traz desafios intensos: a barreira do idioma, a saudade (banzo), a adaptação cultural e a solidão. Falar sobre suas emoções na sua língua materna é fundamental para processar esses sentimentos.",
    "abroad.cta": "Agendar Terapia Online",
    "abroad.learnMore": "Conheça o Terapia sem Fronteiras",
    "abroad.features.title": "Pontos de Destaque",
    "abroad.feature1.title": "Acolhimento na Língua Materna",
    "abroad.feature1.desc": "Expresse suas dores e sentimentos sem barreiras linguísticas.",
    "abroad.feature2.title": "Preparação Emocional (Pré-Intercâmbio)",
    "abroad.feature2.desc": "Fortalecimento psicológico para lidar com o novo e reduzir a ansiedade da partida.",
    "abroad.feature3.title": "Gestão de Crises de Adaptação",
    "abroad.feature3.desc": "Suporte técnico para momentos de pânico, solidão ou choque cultural.",
    "abroad.feature4.title": "Visão Sistêmica",
    "abroad.feature4.desc": "Como honrar suas raízes e família, mesmo estando longe fisicamente.",
    "abroad.countries": "Atendendo brasileiros em todos os continentes",

    // Book Section
    "book.title": "Publicação em Destaque",
    "book.subtitle.section": "Contribuição literária para a psicologia sistêmica",
    "book.name": "Família, Destinos e Constelações",
    "book.subtitle": "Os laços familiares em desenhos animados",
    "book.about":
      "Em 'Família, Destinos e Constelações', a psicologia sistêmica encontra a magia do cinema. O livro explora como animações de sucesso — Elementos, Moana e Viva: A Vida é uma Festa — retratam com precisão as complexas teias de relacionamentos que formam nossas famílias.",
    "book.contribution.title": "A Contribuição da Dra. Carliane",
    "book.contribution.text":
      "No capítulo 'Análise das questões de Constelação Familiar no filme Viva - A Vida é uma Festa', escrito em parceria com Rosimara Cantares, a Dra. Carliane disseca a jornada do personagem Miguel, explorando temas fundamentais:",
    "book.theme1":
      "O Pertencimento e a Exclusão: Como a 'música' (o excluído do sistema) precisava ser reintegrada para curar a família.",
    "book.theme2":
      "Lealdades Invisíveis: O peso que os descendentes carregam ao repetir padrões de sofrimento ou rejeição de seus ancestrais.",
    "book.theme3":
      "A Força da Reconciliação: Como olhar para o passado com amor e sem julgamentos libera o fluxo da vida para o sucesso e a alegria.",
    "book.conclusion":
      "Uma leitura essencial para quem deseja compreender, de maneira acessível e tocante, como as Leis Sistêmicas atuam em nossas vidas.",

    // Blog Section
    "blog.title": "Blog",
    "blog.subtitle": "Reflexões sobre saúde mental e bem-estar",
    "blog.readMore": "Ler artigo",
    "blog.viewAll": "Ver todos os artigos",
    "blog.article1.title": "Ansiedade na Era Digital: Como Encontrar Equilíbrio",
    "blog.article1.excerpt":
      "Estratégias práticas para lidar com a sobrecarga de informações e manter sua saúde mental em dia.",
    "blog.article2.title": "Burnout: Sinais de Alerta e Como Buscar Ajuda",
    "blog.article2.excerpt":
      "Reconheça os sintomas do esgotamento profissional e saiba quando é hora de procurar suporte.",
    "blog.article3.title": "Relacionamentos Saudáveis: A Base do Bem-Estar",
    "blog.article3.excerpt": "Como construir e manter vínculos afetivos que nutrem sua saúde emocional.",

    // Location Section
    "location.title": "Localização",
    "location.subtitle": "Consultório em Boa Viagem, Recife/PE",
    "location.address": "Av. Engenheiro Domingos Ferreira, 890, sl. 204, Pina, Boa Viagem, Recife - PE, CEP 51011-050",
    "location.recife": "Recife, Pernambuco",
    "location.presential": "Atendimento presencial em Boa Viagem",
    "location.venice": "A Veneza Brasileira — Onde tradição e acolhimento se encontram",
    "location.office": "Consultório",

    // FAQ Section
    "faq.title": "Perguntas Frequentes",
    "faq.subtitle": "Tire suas dúvidas sobre o atendimento",
    "faq.q1": "Aceita plano de saúde?",
    "faq.a1":
      "O atendimento é particular. Emitimos recibo para solicitação de reembolso junto ao seu convênio, conforme as regras da sua operadora.",
    "faq.q2": "Qual a duração da sessão?",
    "faq.a2": "As sessões têm duração média de 40 minutos.",
    "faq.q3": "Atende presencial?",
    "faq.a3": "Sim, mediante agendamento prévio em nosso consultório no Pina/Boa Viagem.",
    "faq.q4": "Existe sigilo?",
    "faq.a4": "Sim, o sigilo é absoluto e regido pelo Código de Ética do Psicólogo.",
    "faq.q5": "Como funciona o atendimento online?",
    "faq.a5":
      "O atendimento online é realizado por videochamada segura, com a mesma qualidade e eficácia do presencial. Ideal para quem mora no exterior ou tem dificuldade de deslocamento.",
    "faq.q6": "Atende pacientes no exterior?",
    "faq.a6":
      "Sim, atendo brasileiros em qualquer parte do mundo, com horários flexíveis adaptados aos diferentes fusos horários.",
    "faq.q7": "Qual a frequência ideal das sessões?",
    "faq.a7":
      "A frequência é definida de acordo com a necessidade de cada paciente, mas geralmente recomenda-se uma sessão semanal no início do tratamento.",
    "faq.q8": "Quando devo buscar terapia?",
    "faq.a8":
      "Sempre que sentir que suas emoções estão impactando sua qualidade de vida, relacionamentos ou desempenho profissional. Não é preciso estar em crise para buscar ajuda.",

    // Contact Section
    "contact.title": "Entre em Contato",
    "contact.subtitle": "Estou aqui para ajudar você",
    "contact.global": "Atendimento Online para o Brasil e o Mundo",
    "contact.worldwide": "Atendimento Mundial",
    "contact.worldwide.desc":
      "Atendo brasileiros em qualquer parte do mundo, com horários flexíveis adaptados aos diferentes fusos horários.",
    "contact.name": "Nome",
    "contact.whatsapp": "WhatsApp ou Email",
    "contact.reason": "Motivo do Contato",
    "contact.reason.anxiety": "Ansiedade",
    "contact.reason.depression": "Depressão",
    "contact.reason.relationship": "Relacionamento",
    "contact.reason.other": "Outros",
    "contact.message": "Mensagem (opcional)",
    "contact.message.placeholder": "Escreva aqui sua mensagem ou dúvida...",
    "contact.submit": "Enviar Mensagem",
    "contact.sending": "Enviando...",
    "contact.success": "Mensagem enviada com sucesso!",
    "contact.success.desc": "Entrarei em contato em breve. Obrigada!",

    // Recommendation Section
    "recommendation.title": "Recomendo",
    "recommendation.subtitle": "Recursos para o seu bem-estar",
    "recommendation.description":
      "O Eu Medito é uma organização não governamental que oferece gratuitamente técnicas de meditação. Recomendo a prática meditativa como complemento ao processo terapêutico.",
    "recommendation.cta": "Conhecer o Eu Medito",

    // Career Assessment Section
    "career.title": "Avaliação Psicológica, Carreira e Desenvolvimento Executivo",
    "career.subtitle": "Ferramentas técnicas para tomadas de decisão, transição de carreira e seleção estratégica",
    "career.assessment.title": "Avaliação de Personalidade e Perfil",
    "career.assessment.desc":
      "Aplicação de testes psicológicos validados para mapeamento de competências, traços de personalidade e aptidões. Ideal para processos de seleção de executivos ou autoconhecimento profundo.",
    "career.transition.title": "Transição de Carreira e Outplacement",
    "career.transition.desc":
      "Mentoria psicológica para profissionais que desejam mudar de área, recolocação no mercado ou preparação para aposentadoria, focando no propósito e na saúde mental.",
    "career.executive.title": "Suporte a Executivos e Lideranças",
    "career.executive.desc":
      "Atendimento focado nas pressões do mundo corporativo, tomada de decisão e prevenção de Burnout. Para líderes e gestores em posições de alta responsabilidade.",
    "career.differential":
      "União da Psicologia Clínica com a Psicologia Organizacional (Especialização concluída em 2013)",
    "career.cta": "Agendar Avaliação",

    // Footer
    "footer.rights": "Todos os direitos reservados",
    "footer.cfp": "Os serviços psicológicos prestados estão em conformidade com o Conselho Federal de Psicologia.",
    "footer.emergency":
      "Este site não oferece tratamento para emergências. Em caso de crise suicida, ligue 188 (CVV) ou procure o hospital mais próximo.",
    "footer.privacy": "Política de Privacidade",
    "footer.global": "Atendimento Online para o Brasil e o Mundo",
    "footer.legal":
      "Os serviços psicológicos prestados estão em conformidade com o Conselho Federal de Psicologia. Este site não oferece tratamento para emergências. Em caso de crise suicida, ligue 188 (CVV) ou procure o hospital mais próximo.",
  },
  en: {
    // Navigation
    "nav.about": "About",
    "nav.specialties": "Specialties",
    "nav.curriculum": "Curriculum",
    "nav.book": "Book",
    "nav.blog": "Blog",
    "nav.faq": "FAQ",
    "nav.contact": "Contact",
    "nav.schedule": "Schedule Session",
    "nav.therapyAbroad": "Therapy Without Borders",
    "nav.assessment": "Psychological Assessment",

    // Hero Section
    "hero.headline": "Take care of your mental health with warmth, technique, and safety.",
    "hero.subheadline":
      "Clinical psychological care for Adolescents, Adults, and Couples. Specialist in crisis management, trauma, and emotional strengthening.",
    "hero.cta.primary": "Schedule Appointment",
    "hero.cta.secondary": "Learn about my journey",
    "hero.badge.location": "Online and In-Person Care (Recife/PE)",
    "hero.badge.crp": "CRP 02/12727",
    "hero.badge.international": "International Experience",
    "hero.badge.global": "Online Care for Brazil and Worldwide",

    // About Section
    "about.title": "About Carliane Lopes de Oliveira",
    "about.subtitle": "Over 20 years dedicated to mental health care",
    "about.paragraph1":
      "With over 20 years of clinical and hospital experience, I am a psychologist dedicated to offering a safe space for listening and transformation. My journey includes more than a decade of work in managing high-complexity psychiatric hospitals, where I pioneered the creation of specialized programs for mental disorders and chemical dependency, including an exclusive treatment program for women.",
    "about.paragraph2":
      "This intense experience prepared me to deal with acute crises and profound suffering with technical serenity. I use Cognitive Behavioral Therapy (CBT) combined with a systemic and integrative vision, always seeking self-knowledge and the recovery of the patient's quality of life.",
    "about.stats.experience": "Years of Experience",
    "about.stats.patients": "Patients Served",
    "about.stats.specializations": "Specializations",
    "about.international.title": "International Experience",
    "about.international.desc":
      "Multicultural experience acquired through study trips and practical community experiences in various countries, providing a broader understanding of different cultures and therapeutic approaches, always maintaining the scientific direction of clinical psychology. International training in Family Constellations at Hellinger Schule, in Germany, the original birthplace of the method developed by Bert Hellinger.",
    "about.international.availability":
      "Care available for Brazilians abroad, foreigners who speak Portuguese, and foreigners who speak English as a native or second language.",
    "about.meditation.title": "Meditative Practices and Neural Stimulation",
    "about.meditation.desc":
      "Training in Yoga Nidra (Govardhan School of Yoga, India) and Neural Stimulation techniques (International Institute of Neural Stimulation and Natural Therapies). Complementary tools that enhance the therapeutic process, integrating body, mind, and emotions.",

    // Trajectory Section
    "trajectory.title": "Journey, Publications, and Qualifications",
    "trajectory.subtitle": "A career dedicated to excellence in mental health",
    "trajectory.award": "Mental Health Excellence Award",
    "trajectory.award.desc": "Pernambuco Expression Trophy, 2019",
    "trajectory.books.title": "Books and Publications",
    "trajectory.ongoing.title": "Ongoing Training",
    "trajectory.completed.title": "Completed Specializations",
    "trajectory.experience.title": "Professional Experience Highlights",
    "trajectory.international.title": "International Experience",
    "trajectory.international.hellinger": "Family Constellations Training at Hellinger Schule, Germany (2023)",
    "trajectory.international.yoga": "Yoga Nidra Training - Govardhan School of Yoga, Mumbai, India (2020)",
    "trajectory.international.neural":
      "Neural Stimulation Course - International Institute of Neural Stimulation and Natural Therapies, Mãos Sem Fronteiras, Paraná (2025)",
    "trajectory.international.ch6":
      "CH6 Distance Treatment Course - La Jardinera, Mãos Sem Fronteiras, Curitiba (2025)",
    "trajectory.international.available":
      "Care available for Brazilians abroad, foreigners who speak Portuguese, and foreigners who speak English as a native or second language.",

    // Specialties Section
    "specialties.title": "How I Can Help: Anxiety, Depression, Couples and Family Therapy",
    "specialties.subtitle": "Specialized areas of practice",
    "specialties.anxiety.title": "Anxiety and Depression",
    "specialties.anxiety.desc": "Evidence-based techniques and support for symptom reduction.",
    "specialties.crisis.title": "Crisis and Trauma Management",
    "specialties.crisis.desc": "Expertise in acute cases and emotional stabilization.",
    "specialties.couples.title": "Couples and Relationship Therapy",
    "specialties.couples.desc": "Conflict resolution and bond strengthening.",
    "specialties.autism.title": "Autism (ASD) and ABA",
    "specialties.autism.desc": "Specialized support and family guidance.",
    "specialties.constellation.title": "Systemic Constellation",
    "specialties.constellation.desc": "Systemic perspective on family patterns.",
    "specialties.burnout.title": "Mental Health at Work",
    "specialties.burnout.desc": "Burnout and occupational stress.",

    // Methodology Section
    "methodology.title": "Methodology and Care",
    "methodology.subtitle": "Evidence-based integrative approach",
    "methodology.approach.title": "Approach",
    "methodology.approach.desc":
      "Cognitive Behavioral Therapy (CBT) combined with Systemic Vision, meditative practices, and Neural Stimulation techniques. An integrative approach that unites science and complementary techniques to promote self-knowledge and quality of life recovery.",
    "methodology.online.title": "Online Care",
    "methodology.online.desc": "Secure video call for patients in Brazil and abroad. Connect from any device.",
    "methodology.presential.title": "In-Person Care",
    "methodology.presential.desc": "Office in Boa Viagem, Recife/PE. Welcoming and private environment.",

    // Therapy Abroad Section
    "abroad.title": "Therapy Without Borders",
    "abroad.subtitle": "Specialized care for Brazilians abroad",
    "abroad.badge": "Global Care",
    "abroad.headline": "Care for Brazilians Abroad and Preparation for Changes",
    "abroad.copy":
      "Moving to another country is a dream, but brings intense challenges: language barriers, homesickness, cultural adaptation, and loneliness. Talking about your emotions in your native language is fundamental to processing these feelings.",
    "abroad.cta": "Schedule Online Therapy",
    "abroad.learnMore": "Learn about Therapy Without Borders",
    "abroad.features.title": "Highlights",
    "abroad.feature1.title": "Native Language Support",
    "abroad.feature1.desc": "Express your pain and feelings without language barriers.",
    "abroad.feature2.title": "Emotional Preparation (Pre-Exchange)",
    "abroad.feature2.desc": "Psychological strengthening to deal with the new and reduce departure anxiety.",
    "abroad.feature3.title": "Adaptation Crisis Management",
    "abroad.feature3.desc": "Technical support for moments of panic, loneliness, or culture shock.",
    "abroad.feature4.title": "Systemic Vision",
    "abroad.feature4.desc": "How to honor your roots and family, even when physically distant.",
    "abroad.countries": "Serving Brazilians on all continents",

    // Book Section
    "book.title": "Featured Publication",
    "book.subtitle.section": "Literary contribution to systemic psychology",
    "book.name": "Family, Destinies, and Constellations",
    "book.subtitle": "Family bonds in animated films",
    "book.about":
      "In 'Family, Destinies, and Constellations', systemic psychology meets the magic of cinema. The book explores how successful animations — Elemental, Moana, and Coco — accurately portray the complex webs of relationships that form our families.",
    "book.contribution.title": "Dr. Carliane's Contribution",
    "book.contribution.text":
      "In the chapter 'Analysis of Family Constellation issues in the movie Coco', written in partnership with Rosimara Cantares, Dr. Carliane dissects Miguel's journey, exploring fundamental themes:",
    "book.theme1":
      "Belonging and Exclusion: How 'music' (the excluded from the system) needed to be reintegrated to heal the family.",
    "book.theme2":
      "Invisible Loyalties: The weight that descendants carry by repeating patterns of suffering or rejection from their ancestors.",
    "book.theme3":
      "The Power of Reconciliation: How looking at the past with love and without judgment releases the flow of life for success and joy.",
    "book.conclusion":
      "Essential reading for anyone who wants to understand, in an accessible and touching way, how Systemic Laws act in our lives.",

    // Blog Section
    "blog.title": "Blog",
    "blog.subtitle": "Reflections on mental health and well-being",
    "blog.readMore": "Read article",
    "blog.viewAll": "View all articles",
    "blog.article1.title": "Anxiety in the Digital Age: How to Find Balance",
    "blog.article1.excerpt":
      "Practical strategies for dealing with information overload and maintaining your mental health.",
    "blog.article2.title": "Burnout: Warning Signs and How to Seek Help",
    "blog.article2.excerpt":
      "Recognize the symptoms of professional exhaustion and know when it's time to seek support.",
    "blog.article3.title": "Healthy Relationships: The Foundation of Well-Being",
    "blog.article3.excerpt": "How to build and maintain emotional bonds that nurture your emotional health.",

    // Location Section
    "location.title": "Location",
    "location.subtitle": "Office in Boa Viagem, Recife/PE",
    "location.address": "Av. Engenheiro Domingos Ferreira, 890, sl. 204, Pina, Boa Viagem, Recife - PE, CEP 51011-050",
    "location.recife": "Recife, Pernambuco",
    "location.presential": "In-person care in Boa Viagem",
    "location.venice": "The Brazilian Venice — Where tradition and warmth meet",
    "location.office": "Office",

    // FAQ Section
    "faq.title": "Frequently Asked Questions",
    "faq.subtitle": "Clear your doubts about the service",
    "faq.q1": "Do you accept health insurance?",
    "faq.a1":
      "The service is private. We issue receipts for reimbursement requests with your insurance, according to your operator's rules.",
    "faq.q2": "How long is the session?",
    "faq.a2": "Sessions have an average duration of 40 minutes.",
    "faq.q3": "Do you offer in-person care?",
    "faq.a3": "Yes, by prior appointment at our office in Pina/Boa Viagem.",
    "faq.q4": "Is there confidentiality?",
    "faq.a4": "Yes, confidentiality is absolute and governed by the Psychologist's Code of Ethics.",
    "faq.q5": "How does online care work?",
    "faq.a5":
      "Online care is conducted via secure video call, with the same quality and effectiveness as in-person. Ideal for those living abroad or with difficulty commuting.",
    "faq.q6": "Do you serve patients abroad?",
    "faq.a6": "Yes, I serve Brazilians anywhere in the world, with flexible hours adapted to different time zones.",
    "faq.q7": "What is the ideal frequency of sessions?",
    "faq.a7":
      "The frequency is defined according to each patient's needs, but generally one weekly session is recommended at the beginning of treatment.",
    "faq.q8": "When should I seek therapy?",
    "faq.a8":
      "Whenever you feel that your emotions are impacting your quality of life, relationships, or professional performance. You don't need to be in crisis to seek help.",

    // Contact Section
    "contact.title": "Get in Touch",
    "contact.subtitle": "I'm here to help you",
    "contact.global": "Online Care for Brazil and Worldwide",
    "contact.worldwide": "Worldwide Care",
    "contact.worldwide.desc":
      "I serve Brazilians anywhere in the world, with flexible hours adapted to different time zones.",
    "contact.name": "Name",
    "contact.whatsapp": "WhatsApp or Email",
    "contact.reason": "Reason for Contact",
    "contact.reason.anxiety": "Anxiety",
    "contact.reason.depression": "Depression",
    "contact.reason.relationship": "Relationship",
    "contact.reason.other": "Other",
    "contact.message": "Message (optional)",
    "contact.message.placeholder": "Write your message or question here...",
    "contact.submit": "Send Message",
    "contact.sending": "Sending...",
    "contact.success": "Message sent successfully!",
    "contact.success.desc": "I will contact you soon. Thank you!",

    // Recommendation Section
    "recommendation.title": "I Recommend",
    "recommendation.subtitle": "Resources for your well-being",
    "recommendation.description":
      "Eu Medito is a non-governmental organization that offers free meditation techniques. I recommend meditative practice as a complement to the therapeutic process.",
    "recommendation.cta": "Learn about Eu Medito",

    // Career Assessment Section
    "career.title": "Psychological Assessment, Career and Executive Development",
    "career.subtitle": "Technical tools for decision-making, career transition and strategic selection",
    "career.assessment.title": "Personality and Profile Assessment",
    "career.assessment.desc":
      "Application of validated psychological tests for mapping competencies, personality traits and aptitudes. Ideal for executive selection processes or deep self-knowledge.",
    "career.transition.title": "Career Transition and Outplacement",
    "career.transition.desc":
      "Psychological mentoring for professionals who wish to change fields, job replacement or retirement preparation, focusing on purpose and mental health.",
    "career.executive.title": "Executive and Leadership Support",
    "career.executive.desc":
      "Care focused on corporate world pressures, decision-making and Burnout prevention. For leaders and managers in positions of high responsibility.",
    "career.differential":
      "Union of Clinical Psychology with Organizational Psychology (Specialization completed in 2013)",
    "career.cta": "Schedule Assessment",

    // Footer
    "footer.rights": "All rights reserved",
    "footer.cfp": "The psychological services provided are in compliance with the Federal Council of Psychology.",
    "footer.emergency":
      "This site does not offer emergency treatment. In case of suicidal crisis, call 188 (CVV) or go to the nearest hospital.",
    "footer.privacy": "Privacy Policy",
    "footer.global": "Online Care for Brazil and Worldwide",
    "footer.legal":
      "The psychological services provided are in compliance with the Federal Council of Psychology. This site does not offer emergency treatment. In case of suicidal crisis, call 188 (CVV) or go to the nearest hospital.",
  },
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("pt")

  const t = (key: string): string => {
    return translations[language][key] || key
  }

  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
