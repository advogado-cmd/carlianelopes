import type { Locale, Localized } from "@/lib/i18n/locales"

/**
 * FONTE ÚNICA das especialidades.
 *
 * Adicionar um objeto aqui gera: a rota nos três idiomas, o hreflang,
 * a entrada no sitemap do idioma, o card no hub e (fase 3) o índice da busca.
 * Nunca duplicar esta lista em outro lugar.
 *
 * Conformidade (§ 18 das Instruções do Projeto):
 * - nada de promessa ou previsão de resultado;
 * - nada de depoimento, caso clínico ou "antes e depois";
 * - descrever experiências, não critérios diagnósticos auto-aplicáveis;
 * - `seguranca: true` liga o bloco de acolhimento e emergência na página.
 */

export type Hub = "clinica" | "casais" | "corporativo" | "internacional"

export interface Passo {
  titulo: string
  texto: string
}

export interface QA {
  q: string
  a: string
}

export interface Especialidade {
  key: string
  hub: Hub
  /** Slug localizado — o slug traduzido vale mais que a consistência do path. */
  slug: Localized<string>
  titulo: Localized<string>
  hero: Localized<{ h1: string; sub: string }>
  paraQuem: Localized<string[]>
  comoFunciona: Localized<Passo[]>
  duracao: Localized<string>
  modalidade: ("online" | "presencial")[]
  faq: Localized<QA[]>
  seo: Localized<{ title: string; description: string }>
  /** Keys de outras especialidades, nunca URLs. */
  relacionados: string[]
  /** Liga o bloco de segurança clínica (§ 19). */
  seguranca: boolean
  /** Uma página só existe num idioma se estiver completa e revisada nele. */
  publicado: Record<Locale, boolean>
}

export const ESPECIALIDADES: Especialidade[] = [
  {
    key: "ansiedade",
    hub: "clinica",
    slug: { pt: "ansiedade", en: "anxiety", es: "ansiedad" },
    titulo: { pt: "Ansiedade", en: "Anxiety", es: "Ansiedad" },
    hero: {
      pt: {
        h1: "Ansiedade",
        sub: "Quando a antecipação deixa de proteger e passa a ocupar o dia inteiro.",
      },
      en: {
        h1: "Anxiety",
        sub: "When anticipation stops protecting you and starts taking up the whole day.",
      },
      es: {
        h1: "Ansiedad",
        sub: "Cuando la anticipación deja de protegerte y pasa a ocupar el día entero.",
      },
    },
    paraQuem: {
      pt: [
        "Você antecipa cenários ruins e se prepara para eles mesmo quando sabe que são improváveis.",
        "O corpo avisa antes da cabeça: aperto no peito, sono ruim, mandíbula travada.",
        "Você evita situações que já foram simples, e o que se evita vai ficando maior.",
        "Descansar dá culpa, e parar parece perigoso.",
      ],
      en: [
        "You rehearse bad outcomes and prepare for them even when you know they're unlikely.",
        "Your body speaks before your mind does: tight chest, poor sleep, clenched jaw.",
        "You avoid situations that used to be simple — and what you avoid keeps growing.",
        "Resting brings guilt, and stopping feels dangerous.",
      ],
      es: [
        "Anticipas escenarios malos y te preparas para ellos aunque sepas que son improbables.",
        "El cuerpo avisa antes que la cabeza: opresión en el pecho, mal sueño, mandíbula tensa.",
        "Evitas situaciones que antes eran simples, y lo que se evita se va agrandando.",
        "Descansar da culpa, y parar parece peligroso.",
      ],
    },
    comoFunciona: {
      pt: [
        {
          titulo: "Entender o mecanismo",
          texto:
            "Antes de mudar qualquer coisa, mapeamos como a ansiedade funciona no seu caso: o que dispara, o que alimenta e o que a mantém de pé.",
        },
        {
          titulo: "Trabalhar pensamento e comportamento",
          texto:
            "A Terapia Cognitivo-Comportamental oferece ferramentas para examinar pensamentos automáticos e retomar, aos poucos, o que a evitação foi tirando.",
        },
        {
          titulo: "Cuidar do corpo",
          texto:
            "Respiração, sono e práticas de presença entram como apoio ao processo — não no lugar dele.",
        },
        {
          titulo: "Olhar o sistema",
          texto:
            "Muitas vezes a ansiedade sustenta um lugar dentro de uma família ou de um trabalho. Ver esse lugar costuma mudar o que se pede de si.",
        },
      ],
      en: [
        {
          titulo: "Understanding the mechanism",
          texto:
            "Before changing anything, we map how anxiety works in your particular case: what triggers it, what feeds it, what keeps it standing.",
        },
        {
          titulo: "Working with thought and behaviour",
          texto:
            "Cognitive Behavioural Therapy offers tools to examine automatic thoughts and to take back, step by step, what avoidance has been removing.",
        },
        {
          titulo: "Attending to the body",
          texto:
            "Breathing, sleep and presence practices come in as support for the process — not as a substitute for it.",
        },
        {
          titulo: "Looking at the system",
          texto:
            "Anxiety often holds up a position inside a family or a job. Seeing that position tends to change what you ask of yourself.",
        },
      ],
      es: [
        {
          titulo: "Entender el mecanismo",
          texto:
            "Antes de cambiar nada, mapeamos cómo funciona la ansiedad en tu caso: qué la dispara, qué la alimenta y qué la mantiene en pie.",
        },
        {
          titulo: "Trabajar pensamiento y conducta",
          texto:
            "La Terapia Cognitivo-Conductual ofrece herramientas para examinar los pensamientos automáticos y recuperar, poco a poco, lo que la evitación fue quitando.",
        },
        {
          titulo: "Cuidar el cuerpo",
          texto:
            "Respiración, sueño y prácticas de presencia entran como apoyo al proceso, no en su lugar.",
        },
        {
          titulo: "Mirar el sistema",
          texto:
            "Muchas veces la ansiedad sostiene un lugar dentro de una familia o un trabajo. Ver ese lugar suele cambiar lo que uno se exige.",
        },
      ],
    },
    duracao: { pt: "Sessões de 40 minutos", en: "40-minute sessions", es: "Sesiones de 40 minutos" },
    modalidade: ["online", "presencial"],
    faq: {
      pt: [
        {
          q: "Ansiedade tem cura?",
          a: "A pergunta mais útil não é essa. Ansiedade é uma resposta normal que, em algumas situações, passa a funcionar fora de proporção. O trabalho terapêutico se dedica a compreender esse funcionamento e a ampliar o repertório de manejo — o que cada pessoa alcança é individual e se avalia ao longo do processo.",
        },
        {
          q: "Preciso tomar remédio?",
          a: "Prescrição é competência médica. Se houver indicação, encaminho e trabalho em conjunto com o profissional que acompanha. A psicoterapia não substitui tratamento médico nem opina sobre medicação.",
        },
        {
          q: "Em quanto tempo eu sinto diferença?",
          a: "Não existe prazo que valha para todo mundo, e desconfie de quem promete um. A frequência costuma ser semanal no início, e a avaliação do processo é feita junto com você.",
        },
      ],
      en: [
        {
          q: "Can anxiety be cured?",
          a: "That's not the most useful question. Anxiety is a normal response that, in some situations, starts working out of proportion. Therapy is dedicated to understanding how it works and widening your range of ways to manage it — what each person reaches is individual and is assessed as the process unfolds.",
        },
        {
          q: "Will I need medication?",
          a: "Prescribing is a medical competence. If it is indicated, I refer you and work alongside the professional who prescribes. Psychotherapy does not replace medical treatment and does not advise on medication.",
        },
        {
          q: "How long before I notice a difference?",
          a: "There's no timeframe that holds for everyone, and I'd be wary of anyone promising one. Sessions are usually weekly at the start, and we assess the process together.",
        },
      ],
      es: [
        {
          q: "¿La ansiedad se cura?",
          a: "No es la pregunta más útil. La ansiedad es una respuesta normal que, en algunas situaciones, empieza a funcionar fuera de proporción. El trabajo terapéutico se dedica a comprender ese funcionamiento y a ampliar el repertorio de manejo — lo que cada persona alcanza es individual y se evalúa a lo largo del proceso.",
        },
        {
          q: "¿Necesito medicación?",
          a: "La prescripción es competencia médica. Si hay indicación, derivo y trabajo junto al profesional que acompaña. La psicoterapia no sustituye el tratamiento médico ni opina sobre medicación.",
        },
        {
          q: "¿En cuánto tiempo noto una diferencia?",
          a: "No existe un plazo que sirva para todos, y conviene desconfiar de quien promete uno. La frecuencia suele ser semanal al inicio, y la evaluación del proceso se hace contigo.",
        },
      ],
    },
    seo: {
      pt: {
        title: "Ansiedade — psicóloga online e em Recife",
        description:
          "Acompanhamento psicológico para ansiedade com TCC e visão sistêmica. Online para o Brasil e o exterior, presencial em Boa Viagem, Recife.",
      },
      en: {
        title: "Anxiety — Brazilian psychologist, online sessions",
        description:
          "Support for anxiety using Cognitive Behavioural Therapy with a systemic outlook. Online sessions worldwide, in English, Portuguese and Spanish.",
      },
      es: {
        title: "Ansiedad — psicóloga en línea",
        description:
          "Acompañamiento psicológico para la ansiedad con Terapia Cognitivo-Conductual y mirada sistémica. Sesiones en línea desde cualquier país.",
      },
    },
    relacionados: ["depressao", "crise-e-trauma"],
    seguranca: false,
    publicado: { pt: true, en: true, es: true },
  },

  {
    key: "depressao",
    hub: "clinica",
    slug: { pt: "depressao", en: "depression", es: "depresion" },
    titulo: { pt: "Depressão", en: "Depression", es: "Depresión" },
    hero: {
      pt: {
        h1: "Depressão",
        sub: "Quando o desânimo deixa de ser passageiro e o que era simples passa a custar caro.",
      },
      en: {
        h1: "Depression",
        sub: "When low mood stops passing, and what used to be simple starts costing a great deal.",
      },
      es: {
        h1: "Depresión",
        sub: "Cuando el desánimo deja de ser pasajero y lo que era simple empieza a costar caro.",
      },
    },
    paraQuem: {
      pt: [
        "As tarefas mais banais do dia consomem uma energia que você não tem.",
        "O que antes dava prazer continua ali, mas não alcança mais você.",
        "O sono mudou — para mais ou para menos — e o corpo pesa.",
        "Você se cobra por não conseguir, e a cobrança afunda mais.",
      ],
      en: [
        "The most ordinary tasks of the day consume energy you don't have.",
        "What used to give pleasure is still there, but no longer reaches you.",
        "Your sleep has shifted — more or less of it — and your body feels heavy.",
        "You blame yourself for not managing, and the blame sinks you further.",
      ],
      es: [
        "Las tareas más banales del día consumen una energía que no tienes.",
        "Lo que antes daba placer sigue ahí, pero ya no te alcanza.",
        "El sueño cambió — para más o para menos — y el cuerpo pesa.",
        "Te exiges por no lograrlo, y esa exigencia hunde más.",
      ],
    },
    comoFunciona: {
      pt: [
        {
          titulo: "Reduzir a exigência antes de aumentar a atividade",
          texto:
            "Em depressão, o primeiro movimento raramente é fazer mais. É parar de brigar consigo por não estar fazendo.",
        },
        {
          titulo: "Retomar pequenas coisas, na medida possível",
          texto:
            "A ativação comportamental trabalha com passos pequenos e verificáveis, escolhidos junto com você.",
        },
        {
          titulo: "Examinar o discurso interno",
          texto:
            "A depressão costuma vir acompanhada de uma voz que descreve tudo pelo pior lado. Nomear essa voz é parte do trabalho.",
        },
        {
          titulo: "Articular com quem mais acompanha",
          texto:
            "Quando há acompanhamento médico ou psiquiátrico, o trabalho é conjunto — cada profissional dentro da sua competência.",
        },
      ],
      en: [
        {
          titulo: "Lowering the demand before raising the activity",
          texto:
            "In depression, the first move is rarely to do more. It's to stop fighting yourself for not doing.",
        },
        {
          titulo: "Taking small things back, as far as possible",
          texto:
            "Behavioural activation works with small, verifiable steps, chosen together with you.",
        },
        {
          titulo: "Examining the inner commentary",
          texto:
            "Depression usually comes with a voice that describes everything at its worst. Naming that voice is part of the work.",
        },
        {
          titulo: "Working alongside other care",
          texto:
            "Where there is medical or psychiatric care, the work is joint — each professional within their own competence.",
        },
      ],
      es: [
        {
          titulo: "Bajar la exigencia antes de aumentar la actividad",
          texto:
            "En la depresión, el primer movimiento rara vez es hacer más. Es dejar de pelear contigo por no estar haciendo.",
        },
        {
          titulo: "Retomar cosas pequeñas, en la medida posible",
          texto:
            "La activación conductual trabaja con pasos pequeños y verificables, elegidos junto contigo.",
        },
        {
          titulo: "Examinar el discurso interno",
          texto:
            "La depresión suele venir con una voz que describe todo por su peor lado. Nombrar esa voz es parte del trabajo.",
        },
        {
          titulo: "Articular con quien más acompaña",
          texto:
            "Cuando hay acompañamiento médico o psiquiátrico, el trabajo es conjunto — cada profesional dentro de su competencia.",
        },
      ],
    },
    duracao: { pt: "Sessões de 40 minutos", en: "40-minute sessions", es: "Sesiones de 40 minutos" },
    modalidade: ["online", "presencial"],
    faq: {
      pt: [
        {
          q: "Tristeza e depressão são a mesma coisa?",
          a: "Não. Tristeza é uma emoção com causa e curso; ela vem, ocupa espaço e passa. Quando o estado se estende no tempo, atinge sono, apetite, energia e a capacidade de sentir prazer, a avaliação profissional individual é o caminho para entender o que está acontecendo. Nenhum texto de site faz esse diagnóstico.",
        },
        {
          q: "Posso fazer terapia enquanto tomo medicação?",
          a: "Sim, e é frequente. Psicoterapia e tratamento medicamentoso não competem entre si. A prescrição é de competência médica.",
        },
        {
          q: "E se eu não conseguir nem sair da cama para a sessão?",
          a: "O atendimento online existe também para isso. Diga isso na primeira conversa — é informação clínica útil, não desculpa.",
        },
      ],
      en: [
        {
          q: "Are sadness and depression the same thing?",
          a: "No. Sadness is an emotion with a cause and a course; it arrives, takes up space and passes. When the state extends over time and affects sleep, appetite, energy and the capacity to feel pleasure, individual professional assessment is the way to understand what is happening. No website makes that diagnosis.",
        },
        {
          q: "Can I have therapy while taking medication?",
          a: "Yes, and it's common. Psychotherapy and medication don't compete with each other. Prescribing is a medical competence.",
        },
        {
          q: "What if I can't even get out of bed for the session?",
          a: "Online sessions exist partly for that. Say so in the first conversation — it's useful clinical information, not an excuse.",
        },
      ],
      es: [
        {
          q: "¿Tristeza y depresión son lo mismo?",
          a: "No. La tristeza es una emoción con causa y curso; llega, ocupa espacio y pasa. Cuando el estado se extiende en el tiempo y afecta el sueño, el apetito, la energía y la capacidad de sentir placer, la evaluación profesional individual es el camino para entender qué está pasando. Ningún texto de un sitio hace ese diagnóstico.",
        },
        {
          q: "¿Puedo hacer terapia mientras tomo medicación?",
          a: "Sí, y es frecuente. La psicoterapia y el tratamiento farmacológico no compiten entre sí. La prescripción es competencia médica.",
        },
        {
          q: "¿Y si no logro ni levantarme de la cama para la sesión?",
          a: "La atención en línea existe también para eso. Dilo en la primera conversación — es información clínica útil, no una excusa.",
        },
      ],
    },
    seo: {
      pt: {
        title: "Depressão — psicóloga online e em Recife",
        description:
          "Acompanhamento psicológico para depressão com TCC e visão sistêmica, articulado com o acompanhamento médico quando houver. Online e presencial em Recife.",
      },
      en: {
        title: "Depression — Brazilian psychologist, online sessions",
        description:
          "Psychological support for depression using CBT with a systemic outlook, working alongside medical care where it exists. Online sessions worldwide.",
      },
      es: {
        title: "Depresión — psicóloga en línea",
        description:
          "Acompañamiento psicológico para la depresión con TCC y mirada sistémica, articulado con el acompañamiento médico cuando lo haya. Sesiones en línea.",
      },
    },
    relacionados: ["ansiedade", "luto"],
    seguranca: true,
    publicado: { pt: true, en: true, es: true },
  },

  {
    key: "terapia-de-casal",
    hub: "casais",
    slug: { pt: "terapia-de-casal", en: "couples-therapy", es: "terapia-de-pareja" },
    titulo: { pt: "Terapia de casal", en: "Couples therapy", es: "Terapia de pareja" },
    hero: {
      pt: {
        h1: "Terapia de casal",
        sub: "Quando a mesma discussão volta com outra roupa, o assunto não era o assunto.",
      },
      en: {
        h1: "Couples therapy",
        sub: "When the same argument returns in different clothes, the subject was never the subject.",
      },
      es: {
        h1: "Terapia de pareja",
        sub: "Cuando la misma discusión vuelve con otra ropa, el tema no era el tema.",
      },
    },
    paraQuem: {
      pt: [
        "Vocês discutem sobre coisas pequenas com uma intensidade que não cabe nelas.",
        "Um fala e o outro já sabe o que vem — e responde antes de ouvir.",
        "O silêncio virou a forma mais segura de conviver.",
        "Há um assunto que nunca é dito e organiza todos os outros.",
      ],
      en: [
        "You argue about small things with an intensity those things can't hold.",
        "One speaks and the other already knows what's coming — and answers before listening.",
        "Silence has become the safest way to share a house.",
        "There is one subject that never gets said, and it organises all the others.",
      ],
      es: [
        "Discuten por cosas pequeñas con una intensidad que no les cabe.",
        "Uno habla y el otro ya sabe lo que viene — y responde antes de escuchar.",
        "El silencio se volvió la forma más segura de convivir.",
        "Hay un tema que nunca se dice y que organiza todos los demás.",
      ],
    },
    comoFunciona: {
      pt: [
        {
          titulo: "Duas versões, um mesmo espaço",
          texto:
            "As primeiras sessões servem para que cada um possa dizer como vê, sem ser interrompido e sem que a sessão vire tribunal.",
        },
        {
          titulo: "Encontrar o padrão, não o culpado",
          texto:
            "Casais raramente têm um problema; costumam ter um ciclo. Identificar o ciclo tira a conversa do lugar de quem começou.",
        },
        {
          titulo: "Olhar as duas famílias",
          texto:
            "Cada um traz uma história de como se ama, se briga e se pede desculpa. A visão sistêmica torna essas heranças visíveis.",
        },
        {
          titulo: "Combinar o que muda",
          texto:
            "Acordos concretos, verificáveis, revistos nas sessões seguintes — não promessas feitas no calor da conversa.",
        },
      ],
      en: [
        {
          titulo: "Two versions, one room",
          texto:
            "The first sessions are for each person to say how they see it, without being interrupted and without the session becoming a courtroom.",
        },
        {
          titulo: "Finding the pattern, not the culprit",
          texto:
            "Couples rarely have a problem; they usually have a cycle. Naming the cycle takes the conversation out of who-started-it.",
        },
        {
          titulo: "Looking at both families",
          texto:
            "Each of you brings a history of how one loves, argues and apologises. A systemic outlook makes those inheritances visible.",
        },
        {
          titulo: "Agreeing what changes",
          texto:
            "Concrete, verifiable agreements, revisited in the following sessions — not promises made in the heat of a conversation.",
        },
      ],
      es: [
        {
          titulo: "Dos versiones, un mismo espacio",
          texto:
            "Las primeras sesiones sirven para que cada uno pueda decir cómo lo ve, sin ser interrumpido y sin que la sesión se vuelva un tribunal.",
        },
        {
          titulo: "Encontrar el patrón, no al culpable",
          texto:
            "Las parejas rara vez tienen un problema; suelen tener un ciclo. Identificar el ciclo saca la conversación del lugar de quién empezó.",
        },
        {
          titulo: "Mirar las dos familias",
          texto:
            "Cada uno trae una historia de cómo se ama, se pelea y se pide perdón. La mirada sistémica hace visibles esas herencias.",
        },
        {
          titulo: "Acordar lo que cambia",
          texto:
            "Acuerdos concretos, verificables, revisados en las sesiones siguientes — no promesas hechas en el calor de la conversación.",
        },
      ],
    },
    duracao: {
      pt: "Sessões de 40 minutos, com os dois presentes",
      en: "40-minute sessions, with both present",
      es: "Sesiones de 40 minutos, con ambos presentes",
    },
    modalidade: ["online", "presencial"],
    faq: {
      pt: [
        {
          q: "E se só um de nós quiser vir?",
          a: "Acontece com frequência. É possível começar individualmente, trabalhando a sua parte da relação, e avaliar depois se faz sentido incluir a outra pessoa. Ninguém é trazido à terapia contra a própria vontade.",
        },
        {
          q: "Terapia de casal serve para separar ou para ficar junto?",
          a: "Serve para entender. O desfecho é de vocês, não meu. Alguns casais saem do processo mais próximos; outros conseguem se separar com menos destruição. Nenhum desses resultados é prometido de antemão.",
        },
        {
          q: "Funciona online?",
          a: "Sim, inclusive quando vocês estão em cidades ou países diferentes. Cada um precisa de um espaço privado durante a sessão.",
        },
      ],
      en: [
        {
          q: "What if only one of us wants to come?",
          a: "That happens often. You can start individually, working on your part of the relationship, and later assess whether it makes sense to include the other person. Nobody is brought into therapy against their will.",
        },
        {
          q: "Is couples therapy for separating or for staying together?",
          a: "It's for understanding. The outcome is yours, not mine. Some couples come out of the process closer; others manage to separate with less destruction. Neither result is promised in advance.",
        },
        {
          q: "Does it work online?",
          a: "Yes, including when you're in different cities or countries. Each of you needs a private space during the session.",
        },
      ],
      es: [
        {
          q: "¿Y si solo uno de nosotros quiere venir?",
          a: "Ocurre con frecuencia. Es posible empezar individualmente, trabajando tu parte de la relación, y evaluar después si tiene sentido incluir a la otra persona. Nadie es traído a terapia en contra de su voluntad.",
        },
        {
          q: "¿La terapia de pareja sirve para separarse o para seguir juntos?",
          a: "Sirve para entender. El desenlace es de ustedes, no mío. Algunas parejas salen del proceso más cerca; otras logran separarse con menos destrucción. Ninguno de esos resultados se promete de antemano.",
        },
        {
          q: "¿Funciona en línea?",
          a: "Sí, incluso cuando están en ciudades o países distintos. Cada uno necesita un espacio privado durante la sesión.",
        },
      ],
    },
    seo: {
      pt: {
        title: "Terapia de casal — online e em Recife",
        description:
          "Terapia de casal com visão sistêmica e TCC. Comunicação, conflitos repetidos e decisões difíceis. Online e presencial em Boa Viagem, Recife.",
      },
      en: {
        title: "Couples therapy — Brazilian psychologist, online",
        description:
          "Couples therapy with a systemic outlook and CBT. Communication, repeating conflicts and difficult decisions. Online sessions worldwide.",
      },
      es: {
        title: "Terapia de pareja — en línea",
        description:
          "Terapia de pareja con mirada sistémica y Terapia Cognitivo-Conductual. Comunicación, conflictos repetidos y decisiones difíciles. Sesiones en línea.",
      },
    },
    relacionados: ["ansiedade", "expatriacao"],
    seguranca: false,
    publicado: { pt: true, en: true, es: true },
  },

  {
    key: "expatriacao",
    hub: "internacional",
    slug: {
      pt: "expatriacao-e-adaptacao",
      en: "expat-adjustment",
      es: "expatriacion-y-adaptacion",
    },
    titulo: {
      pt: "Expatriação e adaptação",
      en: "Expat life and adjustment",
      es: "Expatriación y adaptación",
    },
    hero: {
      pt: {
        h1: "Expatriação e adaptação",
        sub: "Morar fora resolve algumas coisas e abre outras. As que abre raramente aparecem nas fotos.",
      },
      en: {
        h1: "Expat life and adjustment",
        sub: "Living abroad solves some things and opens others. The ones it opens rarely show up in the photos.",
      },
      es: {
        h1: "Expatriación y adaptación",
        sub: "Vivir fuera resuelve algunas cosas y abre otras. Las que abre rara vez aparecen en las fotos.",
      },
    },
    paraQuem: {
      pt: [
        "Você funciona bem no idioma novo, mas sente que fica menos você nele.",
        "A saudade não é de um lugar — é de ser entendido sem precisar explicar.",
        "Você não pertence mais inteiramente lá, e ainda não pertence inteiramente aqui.",
        "Voltar de visita foi mais difícil do que ir.",
      ],
      en: [
        "You function well in the new language, but feel you become less yourself in it.",
        "The homesickness isn't for a place — it's for being understood without having to explain.",
        "You no longer fully belong there, and don't yet fully belong here.",
        "Going back for a visit was harder than leaving was.",
      ],
      es: [
        "Funcionas bien en el idioma nuevo, pero sientes que eres menos tú en él.",
        "La nostalgia no es de un lugar — es de ser entendido sin tener que explicar.",
        "Ya no perteneces del todo allá, y todavía no perteneces del todo aquí.",
        "Volver de visita fue más difícil que irse.",
      ],
    },
    comoFunciona: {
      pt: [
        {
          titulo: "Terapia na sua língua",
          texto:
            "Dizer o que se sente na língua materna não é conforto: é precisão. Muita coisa só existe em português.",
        },
        {
          titulo: "Nomear o que a mudança mexeu",
          texto:
            "Luto migratório, choque cultural e choque cultural reverso têm nome e curso conhecidos. Saber disso já reorganiza a experiência.",
        },
        {
          titulo: "Cuidar dos laços que ficaram",
          texto:
            "A visão sistêmica ajuda a olhar como honrar as raízes e a família estando longe, sem que a distância vire dívida.",
        },
        {
          titulo: "Sessões no seu fuso",
          texto:
            "Horários adaptados a diferentes fusos, com agenda combinada de acordo com o seu dia e não com o meu.",
        },
      ],
      en: [
        {
          titulo: "Therapy in your own language",
          texto:
            "Saying what you feel in your first language isn't comfort — it's precision. A great deal only exists in Portuguese.",
        },
        {
          titulo: "Naming what the move stirred up",
          texto:
            "Migratory grief, culture shock and reverse culture shock have names and a known course. Knowing that already reorganises the experience.",
        },
        {
          titulo: "Tending the ties left behind",
          texto:
            "A systemic outlook helps you look at how to honour roots and family from a distance, without the distance becoming a debt.",
        },
        {
          titulo: "Sessions in your time zone",
          texto:
            "Hours adapted to different time zones, scheduled around your day rather than mine.",
        },
      ],
      es: [
        {
          titulo: "Terapia en tu idioma",
          texto:
            "Decir lo que se siente en la lengua materna no es comodidad: es precisión. Muchas cosas solo existen en el propio idioma.",
        },
        {
          titulo: "Nombrar lo que movió el cambio",
          texto:
            "Duelo migratorio, choque cultural y choque cultural inverso tienen nombre y un curso conocido. Saberlo ya reorganiza la experiencia.",
        },
        {
          titulo: "Cuidar los vínculos que quedaron",
          texto:
            "La mirada sistémica ayuda a ver cómo honrar las raíces y la familia estando lejos, sin que la distancia se vuelva deuda.",
        },
        {
          titulo: "Sesiones en tu huso horario",
          texto:
            "Horarios adaptados a distintos husos, agendados según tu día y no el mío.",
        },
      ],
    },
    duracao: { pt: "Sessões de 40 minutos", en: "40-minute sessions", es: "Sesiones de 40 minutos" },
    modalidade: ["online"],
    faq: {
      pt: [
        {
          q: "Você atende quem mora fora do Brasil?",
          a: "Sim. O atendimento online é feito por videochamada, com horários adaptados a diferentes fusos.",
        },
        {
          q: "Em que idiomas você atende?",
          a: "Português, inglês e espanhol. Escolher o idioma da sessão é uma decisão clínica: às vezes vale usar aquele em que a coisa dói, e às vezes o outro.",
        },
        {
          q: "Como funciona o sigilo numa sessão online?",
          a: "A sessão acontece por videochamada com transmissão criptografada, sem gravação, e você precisa estar num espaço em que possa falar sem ser ouvido. O sigilo profissional é o mesmo do atendimento presencial.",
        },
      ],
      en: [
        {
          q: "Do you see people living outside Brazil?",
          a: "Yes. Sessions are held by video call, with hours adapted to different time zones.",
        },
        {
          q: "Which languages do you work in?",
          a: "Portuguese, English and Spanish. Choosing the language of a session is a clinical decision: sometimes it's worth using the one the thing hurts in, and sometimes the other.",
        },
        {
          q: "How does confidentiality work in an online session?",
          a: "Sessions are held over an encrypted video call, never recorded, and you need to be somewhere you can speak without being overheard. Professional confidentiality is the same as in person.",
        },
      ],
      es: [
        {
          q: "¿Atiendes a quien vive fuera de Brasil?",
          a: "Sí. La atención en línea se realiza por videollamada, con horarios adaptados a distintos husos horarios.",
        },
        {
          q: "¿En qué idiomas atiendes?",
          a: "Portugués, inglés y español. Elegir el idioma de la sesión es una decisión clínica: a veces conviene usar aquel en el que la cosa duele, y a veces el otro.",
        },
        {
          q: "¿Cómo funciona la confidencialidad en una sesión en línea?",
          a: "La sesión se realiza por videollamada con transmisión cifrada, sin grabación, y necesitas estar en un espacio donde puedas hablar sin ser escuchado. El secreto profesional es el mismo que en la atención presencial.",
        },
      ],
    },
    seo: {
      pt: {
        title: "Expatriação e adaptação — psicóloga brasileira online",
        description:
          "Terapia em português para brasileiros no exterior: saudade, choque cultural, adaptação e choque cultural reverso. Sessões online em qualquer fuso horário.",
      },
      en: {
        title: "Expat adjustment — Brazilian psychologist online",
        description:
          "Therapy for people living abroad: homesickness, culture shock, adjustment and reverse culture shock. Online sessions in any time zone.",
      },
      es: {
        title: "Expatriación y adaptación — psicóloga en línea",
        description:
          "Terapia para quienes viven fuera de su país: nostalgia, choque cultural, adaptación y choque cultural inverso. Sesiones en línea en cualquier huso horario.",
      },
    },
    relacionados: ["ansiedade", "terapia-de-casal"],
    seguranca: false,
    publicado: { pt: true, en: true, es: true },
  },

  {
    key: "luto",
    hub: "clinica",
    slug: { pt: "luto", en: "grief", es: "duelo" },
    titulo: { pt: "Luto", en: "Grief", es: "Duelo" },
    hero: {
      pt: {
        h1: "Luto",
        sub: "Não existe prazo, e quem te oferece um provavelmente não sabe do que está falando.",
      },
      en: { h1: "Grief", sub: "There is no deadline, and whoever offers you one probably doesn't know what they're talking about." },
      es: { h1: "Duelo", sub: "No existe un plazo, y quien te ofrece uno probablemente no sabe de qué habla." },
    },
    paraQuem: {
      pt: [
        "As pessoas ao redor já seguiram, e você sente que deveria ter seguido também.",
        "A ausência aparece nos detalhes menores, e são eles que derrubam.",
        "Há coisas que ficaram por dizer, e não há mais a quem dizer.",
        "O luto não é só de morte: também se perde um casamento, um país, uma saúde, um projeto de vida.",
      ],
      en: [],
      es: [],
    },
    comoFunciona: {
      pt: [
        {
          titulo: "Fazer espaço, não acelerar",
          texto:
            "O trabalho não é apressar o luto. É sustentar um espaço onde ele possa acontecer sem pressa e sem plateia.",
        },
        {
          titulo: "Dizer o que ficou por dizer",
          texto:
            "Muito do que pesa é o inacabado. Existem formas de dar lugar a isso — e elas não exigem que o outro esteja presente.",
        },
        {
          titulo: "Olhar o sistema familiar",
          texto:
            "Perdas reorganizam famílias inteiras. A visão sistêmica ajuda a ver que lugar ficou vago e quem foi ocupá-lo sem escolher.",
        },
      ],
      en: [],
      es: [],
    },
    duracao: { pt: "Sessões de 40 minutos", en: "", es: "" },
    modalidade: ["online", "presencial"],
    faq: {
      pt: [
        {
          q: "Quanto tempo dura um luto?",
          a: "O tempo é de cada pessoa e de cada vínculo. O que a psicologia observa é o curso, não o cronômetro: quando o sofrimento se mantém intenso a ponto de impedir a vida cotidiana por um período prolongado, vale uma avaliação individual.",
        },
        {
          q: "Faz sentido procurar terapia logo depois da perda?",
          a: "Pode fazer. Não é obrigatório — nem todo luto precisa de acompanhamento profissional. Procurar ajuda cedo não antecipa nada; apenas garante que você não precise atravessar sozinho.",
        },
      ],
      en: [],
      es: [],
    },
    seo: {
      pt: {
        title: "Luto — psicóloga online e em Recife",
        description:
          "Acompanhamento psicológico no luto, por morte e por outras perdas. Sem prazo e sem fórmula. Online e presencial em Boa Viagem, Recife.",
      },
      en: { title: "", description: "" },
      es: { title: "", description: "" },
    },
    relacionados: ["depressao", "crise-e-trauma"],
    seguranca: true,
    publicado: { pt: true, en: false, es: false },
  },

  {
    key: "crise-e-trauma",
    hub: "clinica",
    slug: { pt: "crise-e-trauma", en: "crisis-and-trauma", es: "crisis-y-trauma" },
    titulo: { pt: "Crise e trauma", en: "Crisis and trauma", es: "Crisis y trauma" },
    hero: {
      pt: {
        h1: "Crise e trauma",
        sub: "Quando alguma coisa atravessou a vida e o corpo continua respondendo como se ainda estivesse acontecendo.",
      },
      en: { h1: "Crisis and trauma", sub: "" },
      es: { h1: "Crisis y trauma", sub: "" },
    },
    paraQuem: {
      pt: [
        "Alguma coisa aconteceu e o antes e o depois não se encaixam mais.",
        "O corpo reage a lembranças, sons ou lugares antes de você decidir qualquer coisa.",
        "Você evita falar do assunto e, ao mesmo tempo, ele não sai da sua cabeça.",
        "Você está numa situação aguda agora e precisa de alguém que já tenha visto isso de perto.",
      ],
      en: [],
      es: [],
    },
    comoFunciona: {
      pt: [
        {
          titulo: "Estabilizar antes de elaborar",
          texto:
            "Nada de mergulhar na história antes que haja chão. O primeiro trabalho é de segurança e regulação.",
        },
        {
          titulo: "Trabalhar em ritmo que você controla",
          texto:
            "Você decide o que entra na sessão e quando. Reviver não é o objetivo — reorganizar é.",
        },
        {
          titulo: "Repertório de mais de uma década em alta complexidade",
          texto:
            "A experiência hospitalar em casos agudos informa como se conduz uma crise sem dramatizar e sem minimizar.",
        },
      ],
      en: [],
      es: [],
    },
    duracao: { pt: "Sessões de 40 minutos", en: "", es: "" },
    modalidade: ["online", "presencial"],
    faq: {
      pt: [
        {
          q: "Vou precisar contar tudo o que aconteceu?",
          a: "Não. O que entra na sessão é decisão sua, e o ritmo é combinado. Não há benefício terapêutico em ser levada a reviver algo antes de estar em condições de sustentar.",
        },
        {
          q: "Isso é emergência?",
          a: "Se você está em risco imediato, este site não é o canal. Ligue 188 (CVV), 192 (SAMU) ou 190. O atendimento psicológico por meio de tecnologias não é indicado para situações de emergência.",
        },
      ],
      en: [],
      es: [],
    },
    seo: {
      pt: {
        title: "Crise e trauma — psicóloga online e em Recife",
        description:
          "Acompanhamento psicológico em crises e situações traumáticas, com repertório de mais de uma década em hospitais psiquiátricos de alta complexidade.",
      },
      en: { title: "", description: "" },
      es: { title: "", description: "" },
    },
    relacionados: ["ansiedade", "luto"],
    seguranca: true,
    publicado: { pt: true, en: false, es: false },
  },
]

/* ── consultas ────────────────────────────────────────────────────────── */

export function listEspecialidades(locale: Locale): Especialidade[] {
  return ESPECIALIDADES.filter((e) => e.publicado[locale])
}

export function getEspecialidadeBySlug(slug: string, locale: Locale): Especialidade | undefined {
  return ESPECIALIDADES.find((e) => e.slug[locale] === slug && e.publicado[locale])
}

export function getEspecialidadeByKey(key: string): Especialidade | undefined {
  return ESPECIALIDADES.find((e) => e.key === key)
}

export function listByHub(hub: Hub, locale: Locale): Especialidade[] {
  return listEspecialidades(locale).filter((e) => e.hub === hub)
}

/** Hubs que têm ao menos uma especialidade publicada no idioma. */
export function hubsWithContent(locale: Locale): Hub[] {
  const hubs: Hub[] = ["clinica", "casais", "corporativo", "internacional"]
  return hubs.filter((h) => listByHub(h, locale).length > 0)
}
