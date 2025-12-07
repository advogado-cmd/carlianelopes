import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { notFound } from "next/navigation"

const articles: Record<string, { title: string; content: string; date: string }> = {
  "ansiedade-era-digital": {
    title: "Ansiedade na Era Digital: Como Proteger Sua Saúde Mental",
    date: "15 de Novembro de 2025",
    content: `
      <p class="mb-6">A era digital trouxe inúmeras facilidades para nossa vida cotidiana, mas também apresentou desafios significativos para nossa saúde mental. A hiperconectividade, o bombardeio constante de informações e a pressão por estar sempre disponível podem desencadear ou agravar quadros de ansiedade.</p>
      
      <h2 class="text-2xl font-serif text-[#2D3436] mt-10 mb-4">O Impacto das Redes Sociais</h2>
      <p class="mb-6">As redes sociais, embora sejam ferramentas valiosas de conexão, frequentemente nos expõem a comparações irrealistas. Vemos versões editadas e idealizadas da vida dos outros, o que pode gerar sentimentos de inadequação e baixa autoestima.</p>
      
      <h2 class="text-2xl font-serif text-[#2D3436] mt-10 mb-4">Estratégias para o Equilíbrio Digital</h2>
      <p class="mb-4">Estabelecer limites saudáveis com a tecnologia é essencial. Algumas práticas que podem ajudar incluem:</p>
      <ul class="list-disc pl-6 mb-6 space-y-2">
        <li>Definir horários específicos para checar redes sociais e e-mails</li>
        <li>Criar zonas livres de tecnologia em casa, especialmente no quarto</li>
        <li>Praticar o "detox digital" periodicamente</li>
        <li>Cultivar atividades offline que tragam prazer e relaxamento</li>
      </ul>
      
      <h2 class="text-2xl font-serif text-[#2D3436] mt-10 mb-4">Quando Buscar Ajuda Profissional</h2>
      <p class="mb-6">Se você percebe que a ansiedade está interferindo em sua qualidade de vida, afetando relacionamentos, trabalho ou sono, é importante buscar apoio profissional. A Terapia Cognitivo-Comportamental (TCC) tem se mostrado muito eficaz no tratamento de transtornos de ansiedade, oferecendo ferramentas práticas para lidar com pensamentos e comportamentos disfuncionais.</p>
      
      <h2 class="text-2xl font-serif text-[#2D3436] mt-10 mb-4">Conclusão</h2>
      <p class="mb-6">A tecnologia veio para ficar, e cabe a nós desenvolvermos uma relação saudável com ela. O autoconhecimento e a busca por equilíbrio são fundamentais para preservar nossa saúde mental na era digital.</p>
    `,
  },
  "burnout-sinais-ajuda": {
    title: "Burnout: Reconhecendo os Sinais e Buscando Ajuda",
    date: "10 de Novembro de 2025",
    content: `
      <p class="mb-6">A Síndrome de Burnout, reconhecida pela Organização Mundial da Saúde como um fenômeno ocupacional, afeta milhões de profissionais em todo o mundo. Compreender seus sinais é o primeiro passo para buscar ajuda adequada.</p>
      
      <h2 class="text-2xl font-serif text-[#2D3436] mt-10 mb-4">Os Três Pilares do Burnout</h2>
      <p class="mb-4">O burnout se manifesta através de três dimensões principais:</p>
      <ul class="list-disc pl-6 mb-6 space-y-3">
        <li><strong class="text-[#2D3436]">Exaustão emocional:</strong> Sensação de esgotamento físico e mental, falta de energia para realizar tarefas básicas</li>
        <li><strong class="text-[#2D3436]">Despersonalização:</strong> Distanciamento emocional do trabalho e das pessoas, cinismo e negatividade</li>
        <li><strong class="text-[#2D3436]">Redução da realização pessoal:</strong> Sentimento de incompetência e falta de produtividade</li>
      </ul>
      
      <h2 class="text-2xl font-serif text-[#2D3436] mt-10 mb-4">Sinais de Alerta</h2>
      <p class="mb-4">Alguns indicadores importantes incluem:</p>
      <ul class="list-disc pl-6 mb-6 space-y-2">
        <li>Dificuldade para dormir ou sono não reparador</li>
        <li>Irritabilidade constante</li>
        <li>Dores de cabeça frequentes</li>
        <li>Procrastinação excessiva</li>
        <li>Isolamento social</li>
        <li>Perda de interesse em atividades que antes eram prazerosas</li>
      </ul>
      
      <h2 class="text-2xl font-serif text-[#2D3436] mt-10 mb-4">O Caminho para a Recuperação</h2>
      <p class="mb-6">A recuperação do burnout envolve mudanças tanto no ambiente de trabalho quanto na forma como lidamos com o estresse. O acompanhamento psicológico é fundamental para desenvolver estratégias de enfrentamento saudáveis e redefinir prioridades pessoais e profissionais.</p>
      
      <h2 class="text-2xl font-serif text-[#2D3436] mt-10 mb-4">Prevenção é o Melhor Caminho</h2>
      <p class="mb-6">Estabelecer limites claros entre vida pessoal e profissional, praticar atividades físicas regularmente e cultivar hobbies são medidas preventivas essenciais. Lembre-se: cuidar de si mesmo não é egoísmo, é necessidade.</p>
    `,
  },
  "relacionamentos-saudaveis": {
    title: "Relacionamentos Saudáveis: A Base do Bem-Estar Emocional",
    date: "05 de Novembro de 2025",
    content: `
      <p class="mb-6">Os relacionamentos interpessoais são fundamentais para nossa saúde mental. Conexões genuínas e saudáveis nos proporcionam suporte emocional, senso de pertencimento e contribuem significativamente para nossa qualidade de vida.</p>
      
      <h2 class="text-2xl font-serif text-[#2D3436] mt-10 mb-4">Características de Relacionamentos Saudáveis</h2>
      <p class="mb-4">Relacionamentos que nutrem incluem:</p>
      <ul class="list-disc pl-6 mb-6 space-y-3">
        <li><strong class="text-[#2D3436]">Comunicação aberta:</strong> Capacidade de expressar sentimentos e necessidades de forma clara e respeitosa</li>
        <li><strong class="text-[#2D3436]">Respeito mútuo:</strong> Valorização das diferenças e dos limites de cada pessoa</li>
        <li><strong class="text-[#2D3436]">Confiança:</strong> Sensação de segurança e previsibilidade na relação</li>
        <li><strong class="text-[#2D3436]">Apoio:</strong> Presença nos momentos difíceis e celebração das conquistas</li>
        <li><strong class="text-[#2D3436]">Autonomia:</strong> Espaço para crescimento individual dentro da relação</li>
      </ul>
      
      <h2 class="text-2xl font-serif text-[#2D3436] mt-10 mb-4">Identificando Padrões Disfuncionais</h2>
      <p class="mb-6">Muitas vezes, repetimos padrões de relacionamento aprendidos na família de origem. A Constelação Familiar pode ser uma ferramenta valiosa para identificar e transformar esses padrões, liberando-nos de lealdades invisíveis que podem nos manter presos a formas de se relacionar que não nos servem mais.</p>
      
      <h2 class="text-2xl font-serif text-[#2D3436] mt-10 mb-4">Cultivando Conexões Saudáveis</h2>
      <p class="mb-6">Desenvolver relacionamentos saudáveis requer autoconhecimento e disposição para crescer. A terapia pode auxiliar nesse processo, oferecendo um espaço seguro para explorar padrões de relacionamento e desenvolver habilidades de comunicação e intimidade.</p>
      
      <h2 class="text-2xl font-serif text-[#2D3436] mt-10 mb-4">O Papel da Vulnerabilidade</h2>
      <p class="mb-6">Permitir-se ser vulnerável é essencial para criar conexões profundas. Isso significa compartilhar medos, sonhos e imperfeições com quem amamos, criando um espaço de aceitação mútua.</p>
    `,
  },
  "ansiedade-depressao-tratamento": {
    title: "Ansiedade e Depressão: Entendendo e Tratando",
    date: "01 de Novembro de 2025",
    content: `
      <p class="mb-6">A ansiedade e a depressão são os transtornos mentais mais prevalentes no mundo contemporâneo, afetando milhões de pessoas de todas as idades e contextos sociais. Compreender essas condições é o primeiro passo para buscar tratamento adequado e recuperar a qualidade de vida.</p>
      
      <h2 class="text-2xl font-serif text-[#2D3436] mt-10 mb-4">Diferenciando Ansiedade Normal de Transtorno</h2>
      <p class="mb-6">A ansiedade é uma resposta natural do organismo diante de situações percebidas como ameaçadoras. No entanto, quando essa resposta se torna desproporcional, persistente e interfere no funcionamento diário, pode caracterizar um transtorno de ansiedade.</p>
      
      <p class="mb-4">Sinais de que a ansiedade pode ter se tornado um problema:</p>
      <ul class="list-disc pl-6 mb-6 space-y-2">
        <li>Preocupação excessiva e difícil de controlar</li>
        <li>Sintomas físicos como taquicardia, sudorese e tremores</li>
        <li>Evitação de situações cotidianas</li>
        <li>Dificuldade de concentração</li>
        <li>Tensão muscular constante</li>
        <li>Alterações no sono</li>
      </ul>
      
      <h2 class="text-2xl font-serif text-[#2D3436] mt-10 mb-4">Reconhecendo a Depressão</h2>
      <p class="mb-6">A depressão vai muito além da tristeza passageira. É uma condição que afeta o humor, os pensamentos, o corpo e o comportamento de forma persistente, geralmente por semanas ou meses.</p>
      
      <p class="mb-4">Sintomas característicos incluem:</p>
      <ul class="list-disc pl-6 mb-6 space-y-2">
        <li>Tristeza profunda ou vazio emocional</li>
        <li>Perda de interesse em atividades antes prazerosas</li>
        <li>Alterações no apetite e peso</li>
        <li>Fadiga e falta de energia</li>
        <li>Sentimentos de culpa ou inutilidade</li>
        <li>Dificuldade de concentração e tomada de decisões</li>
      </ul>
      
      <h2 class="text-2xl font-serif text-[#2D3436] mt-10 mb-4">A Terapia Cognitivo-Comportamental (TCC)</h2>
      <p class="mb-6">A TCC é considerada padrão-ouro no tratamento de ansiedade e depressão. Ela trabalha a relação entre pensamentos, emoções e comportamentos, ajudando o paciente a identificar e modificar padrões disfuncionais que perpetuam o sofrimento.</p>
      
      <h2 class="text-2xl font-serif text-[#2D3436] mt-10 mb-4">A Importância do Acolhimento</h2>
      <p class="mb-6">Buscar ajuda profissional não é sinal de fraqueza, mas de coragem e autocuidado. O ambiente terapêutico oferece um espaço seguro e sem julgamentos para explorar emoções e desenvolver estratégias de enfrentamento saudáveis.</p>
    `,
  },
  "gestao-crises-traumas": {
    title: "Gestão de Crises e Traumas: Como a Terapia Pode Ajudar",
    date: "28 de Outubro de 2025",
    content: `
      <p class="mb-6">Experiências traumáticas podem deixar marcas profundas em nossa psique, afetando a forma como nos relacionamos com o mundo e conosco mesmos. A gestão de crises e o tratamento de traumas requerem abordagem especializada e acolhimento técnico.</p>
      
      <h2 class="text-2xl font-serif text-[#2D3436] mt-10 mb-4">O Que Caracteriza um Trauma Psicológico</h2>
      <p class="mb-6">O trauma ocorre quando uma experiência excede a capacidade do indivíduo de processar e integrar o evento de forma saudável. Isso pode resultar de eventos únicos e intensos ou de exposição prolongada a situações adversas.</p>
      
      <p class="mb-4">Eventos potencialmente traumáticos incluem:</p>
      <ul class="list-disc pl-6 mb-6 space-y-2">
        <li>Acidentes graves ou desastres naturais</li>
        <li>Violência física, emocional ou sexual</li>
        <li>Perdas significativas (luto, divórcio, demissão)</li>
        <li>Diagnósticos médicos graves</li>
        <li>Experiências de guerra ou conflitos</li>
        <li>Negligência na infância</li>
      </ul>
      
      <h2 class="text-2xl font-serif text-[#2D3436] mt-10 mb-4">Sinais de Trauma Não Processado</h2>
      <p class="mb-4">O trauma pode se manifestar de diversas formas:</p>
      <ul class="list-disc pl-6 mb-6 space-y-2">
        <li>Flashbacks e memórias intrusivas</li>
        <li>Pesadelos recorrentes</li>
        <li>Hipervigilância e sobressalto exagerado</li>
        <li>Evitação de lugares, pessoas ou situações</li>
        <li>Entorpecimento emocional</li>
        <li>Dificuldade em confiar nos outros</li>
      </ul>
      
      <h2 class="text-2xl font-serif text-[#2D3436] mt-10 mb-4">A Experiência em Gestão de Crises</h2>
      <p class="mb-6">Mais de uma década de atuação em hospitais psiquiátricos de alta complexidade proporciona uma base sólida para lidar com crises agudas. O manejo de situações intensas requer serenidade técnica, capacidade de acolhimento e intervenções precisas.</p>
      
      <h2 class="text-2xl font-serif text-[#2D3436] mt-10 mb-4">O Caminho da Recuperação</h2>
      <p class="mb-6">A recuperação de traumas é possível. Com o suporte adequado, é possível processar experiências dolorosas, ressignificar memórias e reconstruir uma vida plena. A terapia oferece um espaço seguro para essa jornada de transformação.</p>
    `,
  },
  "terapia-casal-relacionamentos": {
    title: "Terapia de Casal: Reconstruindo Conexões",
    date: "25 de Outubro de 2025",
    content: `
      <p class="mb-6">Os relacionamentos amorosos são fonte de grande alegria, mas também de desafios intensos. A terapia de casal oferece um espaço neutro e seguro para que parceiros possam trabalhar conflitos, melhorar a comunicação e fortalecer a conexão emocional.</p>
      
      <h2 class="text-2xl font-serif text-[#2D3436] mt-10 mb-4">Quando Buscar Terapia de Casal</h2>
      <p class="mb-4">Alguns sinais indicam que o casal pode se beneficiar de acompanhamento profissional:</p>
      <ul class="list-disc pl-6 mb-6 space-y-2">
        <li>Comunicação se tornou difícil ou agressiva</li>
        <li>Mesmas discussões se repetem sem resolução</li>
        <li>Distanciamento emocional ou físico</li>
        <li>Desconfiança ou traição</li>
        <li>Dificuldade em tomar decisões conjuntas</li>
        <li>Crises relacionadas a filhos, família ou finanças</li>
        <li>Transições de vida (mudanças, aposentadoria, ninho vazio)</li>
      </ul>
      
      <h2 class="text-2xl font-serif text-[#2D3436] mt-10 mb-4">Como Funciona a Terapia de Casal</h2>
      <p class="mb-6">O processo terapêutico envolve sessões conjuntas onde ambos os parceiros têm espaço para expressar suas perspectivas. O terapeuta atua como facilitador, ajudando a identificar padrões disfuncionais e desenvolvendo novas formas de interação.</p>
      
      <h2 class="text-2xl font-serif text-[#2D3436] mt-10 mb-4">O Papel da Visão Sistêmica</h2>
      <p class="mb-6">A abordagem sistêmica entende que cada membro do casal traz consigo padrões familiares herdados que influenciam a dinâmica do relacionamento. Identificar essas heranças permite compreender comportamentos repetitivos e abrir espaço para mudanças conscientes.</p>
      
      <h2 class="text-2xl font-serif text-[#2D3436] mt-10 mb-4">Resultados Esperados</h2>
      <p class="mb-6">Com comprometimento de ambas as partes, a terapia de casal pode promover melhor comunicação, resolução de conflitos de forma saudável, reconexão emocional e intimidade renovada. Em alguns casos, também pode auxiliar na decisão consciente de separação, quando essa for a melhor alternativa.</p>
    `,
  },
  "autismo-tea-suporte": {
    title: "Autismo (TEA): Suporte Especializado para Famílias",
    date: "22 de Outubro de 2025",
    content: `
      <p class="mb-6">O Transtorno do Espectro Autista (TEA) apresenta características únicas em cada indivíduo, demandando abordagens personalizadas e suporte especializado tanto para a pessoa autista quanto para sua família.</p>
      
      <h2 class="text-2xl font-serif text-[#2D3436] mt-10 mb-4">Entendendo o Espectro</h2>
      <p class="mb-6">O autismo se manifesta de formas muito diversas, por isso é chamado de "espectro". Algumas pessoas podem apresentar desafios significativos na comunicação e interação social, enquanto outras têm habilidades notáveis em áreas específicas. Cada caso é único.</p>
      
      <h2 class="text-2xl font-serif text-[#2D3436] mt-10 mb-4">A Abordagem ABA</h2>
      <p class="mb-6">A Análise do Comportamento Aplicada (ABA) é uma abordagem baseada em evidências científicas para o tratamento do autismo. Ela trabalha com reforço positivo para desenvolver habilidades sociais, comunicativas e comportamentais de forma estruturada e individualizada.</p>
      
      <p class="mb-4">Benefícios da intervenção ABA:</p>
      <ul class="list-disc pl-6 mb-6 space-y-2">
        <li>Desenvolvimento de habilidades de comunicação</li>
        <li>Melhora nas interações sociais</li>
        <li>Redução de comportamentos desafiadores</li>
        <li>Aumento da autonomia nas atividades diárias</li>
        <li>Desenvolvimento de habilidades acadêmicas</li>
      </ul>
      
      <h2 class="text-2xl font-serif text-[#2D3436] mt-10 mb-4">Suporte para Famílias</h2>
      <p class="mb-6">O diagnóstico de autismo afeta toda a família. Pais frequentemente experimentam uma montanha-russa de emoções, incluindo preocupação, culpa e incerteza sobre o futuro. O acompanhamento psicológico para a família é fundamental para processar essas emoções e desenvolver estratégias de suporte.</p>
      
      <h2 class="text-2xl font-serif text-[#2D3436] mt-10 mb-4">Orientação Parental</h2>
      <p class="mb-6">A orientação para pais e cuidadores é parte essencial do processo. Compreender as necessidades específicas da pessoa autista e aprender estratégias práticas para o dia a dia pode transformar a dinâmica familiar e promover o desenvolvimento saudável.</p>
    `,
  },
  "constelacao-familiar-cura": {
    title: "Constelação Familiar: Compreendendo Padrões Sistêmicos",
    date: "18 de Outubro de 2025",
    content: `
      <p class="mb-6">A Constelação Familiar é uma abordagem terapêutica que permite visualizar e compreender as dinâmicas ocultas dentro dos sistemas familiares. Desenvolvida por Bert Hellinger, essa metodologia revela como padrões transgeracionais influenciam nossa vida atual.</p>
      
      <h2 class="text-2xl font-serif text-[#2D3436] mt-10 mb-4">As Leis Sistêmicas</h2>
      <p class="mb-4">Hellinger identificou três leis fundamentais que regem os sistemas familiares:</p>
      <ul class="list-disc pl-6 mb-6 space-y-3">
        <li><strong class="text-[#2D3436]">Pertencimento:</strong> Todos os membros da família têm direito igual de pertencer ao sistema</li>
        <li><strong class="text-[#2D3436]">Ordem:</strong> Existe uma hierarquia natural baseada na ordem de chegada ao sistema</li>
        <li><strong class="text-[#2D3436]">Equilíbrio:</strong> Deve haver equilíbrio entre dar e receber nos relacionamentos</li>
      </ul>
      
      <h2 class="text-2xl font-serif text-[#2D3436] mt-10 mb-4">O Que São Emaranhamentos</h2>
      <p class="mb-6">Quando as leis sistêmicas são violadas, surgem os emaranhamentos: dinâmicas inconscientes que levam membros posteriores da família a repetirem padrões de sofrimento, exclusão ou destinos de ancestrais. Esses padrões podem se manifestar como doenças, dificuldades financeiras, problemas de relacionamento ou bloqueios inexplicáveis.</p>
      
      <h2 class="text-2xl font-serif text-[#2D3436] mt-10 mb-4">Formação na Hellinger Schule</h2>
      <p class="mb-6">A formação na Hellinger Schule, na Alemanha, berço original do método, proporciona uma compreensão profunda e autêntica dessa abordagem. Essa capacitação permite conduzir constelações com respeito às origens do método e integrá-lo à prática clínica de forma ética e eficaz.</p>
      
      <h2 class="text-2xl font-serif text-[#2D3436] mt-10 mb-4">Benefícios da Constelação Familiar</h2>
      <p class="mb-4">A abordagem sistêmica pode auxiliar em diversas questões:</p>
      <ul class="list-disc pl-6 mb-6 space-y-2">
        <li>Compreensão de padrões repetitivos na família</li>
        <li>Resolução de conflitos familiares</li>
        <li>Libertação de lealdades invisíveis</li>
        <li>Melhora nos relacionamentos</li>
        <li>Clareza para decisões importantes</li>
      </ul>
    `,
  },
  "saude-mental-trabalho": {
    title: "Saúde Mental no Trabalho: Prevenindo o Esgotamento",
    date: "15 de Outubro de 2025",
    content: `
      <p class="mb-6">O ambiente de trabalho tem impacto direto na saúde mental. Pressão por resultados, jornadas extensas, conflitos interpessoais e falta de reconhecimento são alguns dos fatores que podem comprometer o bem-estar psicológico do trabalhador.</p>
      
      <h2 class="text-2xl font-serif text-[#2D3436] mt-10 mb-4">Fatores de Risco Ocupacionais</h2>
      <p class="mb-4">Diversos elementos do ambiente de trabalho podem contribuir para o adoecimento mental:</p>
      <ul class="list-disc pl-6 mb-6 space-y-2">
        <li>Excesso de demandas e prazos irrealistas</li>
        <li>Falta de autonomia e controle sobre as tarefas</li>
        <li>Ambiente tóxico e assédio moral</li>
        <li>Insegurança no emprego</li>
        <li>Desequilíbrio entre vida pessoal e profissional</li>
        <li>Falta de suporte de líderes e colegas</li>
      </ul>
      
      <h2 class="text-2xl font-serif text-[#2D3436] mt-10 mb-4">Do Estresse ao Burnout</h2>
      <p class="mb-6">O estresse ocupacional, quando não manejado adequadamente, pode evoluir para a Síndrome de Burnout. Essa condição é caracterizada por exaustão profunda, distanciamento mental do trabalho e redução da eficácia profissional.</p>
      
      <h2 class="text-2xl font-serif text-[#2D3436] mt-10 mb-4">Experiência em Psicologia Organizacional</h2>
      <p class="mb-6">A atuação em consultoria organizacional e a especialização em Psicologia do Trabalho proporcionam uma compreensão aprofundada das dinâmicas corporativas. Essa experiência permite auxiliar profissionais a navegarem os desafios do ambiente de trabalho mantendo sua saúde mental.</p>
      
      <h2 class="text-2xl font-serif text-[#2D3436] mt-10 mb-4">Estratégias de Autocuidado</h2>
      <p class="mb-4">Algumas práticas podem ajudar a preservar a saúde mental no trabalho:</p>
      <ul class="list-disc pl-6 mb-6 space-y-2">
        <li>Estabelecer limites claros entre trabalho e vida pessoal</li>
        <li>Fazer pausas regulares durante a jornada</li>
        <li>Cultivar relacionamentos positivos com colegas</li>
        <li>Praticar atividades físicas e de relaxamento</li>
        <li>Buscar apoio profissional quando necessário</li>
      </ul>
    `,
  },
}

export function generateStaticParams() {
  return Object.keys(articles).map((slug) => ({ slug }))
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const article = articles[slug]

  if (!article) {
    notFound()
  }

  return (
    <>
      <Header />
      <main className="py-16 bg-[#e8f0f8]">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="flex gap-4 mb-8">
            <Link
              href="/blog"
              className="inline-flex items-center text-[#91A8D0] hover:text-[#CD8D7A] transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Voltar ao blog
            </Link>
            <Link href="/" className="inline-flex items-center text-[#91A8D0] hover:text-[#CD8D7A] transition-colors">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Voltar ao início
            </Link>
          </div>

          <article className="bg-[#f4f8fc] rounded-3xl p-8 md:p-12 shadow-lg">
            <p className="text-sm text-[#91A8D0] mb-4">{article.date}</p>
            <h1 className="font-serif text-3xl md:text-4xl text-[#2D3436] mb-8">{article.title}</h1>

            <div
              className="text-[#2D3436]/80 leading-relaxed text-lg"
              dangerouslySetInnerHTML={{ __html: article.content }}
            />
          </article>
        </div>
      </main>
      <Footer />
    </>
  )
}
