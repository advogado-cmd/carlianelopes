import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export const metadata = {
  title: "Política de Privacidade | Carliane Lopes de Oliveira",
  description: "Política de Privacidade do site www.carlianelopes.com.br",
}

export default function PrivacidadePage() {
  return (
    <>
      <Header />
      <main className="py-16 bg-[#e8f0f8]">
        <div className="container mx-auto px-4 max-w-4xl">
          <Link
            href="/"
            className="inline-flex items-center text-[#91A8D0] hover:text-[#CD8D7A] mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Voltar ao início
          </Link>

          <div className="bg-[#f4f8fc] rounded-3xl p-8 md:p-12 shadow-lg">
            <h1 className="font-serif text-3xl md:text-4xl text-[#2D3436] mb-8">Política de Privacidade</h1>

            <div className="prose prose-lg max-w-none text-[#2D3436]/80">
              <p className="text-lg mb-6">
                Política de Privacidade do serviço <strong>www.carlianelopes.com.br</strong>
              </p>

              <p className="mb-6">
                Para receber informações sobre os seus dados pessoais, os propósitos e as partes de informação que são
                compartilhadas, entre em contato com o Proprietário.
              </p>

              <h2 className="font-serif text-2xl text-[#2D3436] mt-8 mb-4">Proprietário e Controlador de Dados</h2>
              <p className="mb-2">
                <strong>Carliane Lopes de Oliveira</strong>
              </p>
              <p className="mb-6">
                E-mail de contato do Proprietário:{" "}
                <a href="mailto:contato@carlianelopes.com.br" className="text-[#CD8D7A] hover:underline">
                  contato@carlianelopes.com.br
                </a>
              </p>

              <h2 className="font-serif text-2xl text-[#2D3436] mt-8 mb-4">Tipos de Dados coletados</h2>
              <p className="mb-4">Uso de Dados e outros dados coletados</p>
              <p className="mb-4">
                Detalhes completos sobre cada tipo de Dados Pessoais coletados são fornecidos nas seções dedicadas desta
                política de privacidade ou por textos explicativos específicos exibidos antes da coleta de Dados.
              </p>
              <p className="mb-4">
                Os Dados Pessoais poderão ser fornecidos livremente pelo Usuário, ou, no caso dos Dados de Utilização,
                coletados automaticamente ao se utilizar este Aplicativo.
              </p>
              <p className="mb-4">
                A menos que especificado diferentemente todos os Dados solicitados por este Aplicativo são obrigatórios
                e a falta de fornecimento destes Dados poderá impossibilitar este Aplicativo de fornecer os seus
                Serviços. Nos casos em que este Aplicativo afirmar especificamente que alguns Dados não forem
                obrigatórios, os Usuários ficam livres para deixarem de comunicar estes Dados sem nenhuma consequência
                para a disponibilidade ou o funcionamento do Serviço.
              </p>
              <p className="mb-4">
                Os Usuários que tiverem dúvidas a respeito de quais Dados Pessoais são obrigatórios estão convidados a
                entrar em contato com o Proprietário.
              </p>
              <p className="mb-6">
                Quaisquer usos de cookies – ou de outras ferramentas de rastreamento – por este Aplicativo ou pelos
                proprietários de serviços terceiros utilizados por este Aplicativo serão para a finalidade de fornecer
                os Serviços solicitados pelo Usuário, além das demais finalidades descritas no presente documento e na
                Política de Cookies.
              </p>
              <p className="mb-6">
                Os Usuários ficam responsáveis por quaisquer Dados Pessoais de terceiros que forem obtidos, publicados
                ou compartilhados através deste Serviço (este Aplicativo).
              </p>

              <h2 className="font-serif text-2xl text-[#2D3436] mt-8 mb-4">Modo e local de processamento dos Dados</h2>

              <h3 className="font-serif text-xl text-[#2D3436] mt-6 mb-3">Método de processamento</h3>
              <p className="mb-4">
                O Proprietário tomará as medidas de segurança adequadas para impedir o acesso não autorizado,
                divulgação, alteração ou destruição não autorizada dos Dados.
              </p>
              <p className="mb-6">
                O processamento dos Dados é realizado utilizando computadores e /ou ferramentas de TI habilitadas,
                seguindo procedimentos organizacionais e meios estritamente relacionados com os fins indicados. Além do
                Proprietário, em alguns casos, os Dados podem ser acessados por certos tipos de pessoas encarregadas,
                envolvidas com a operação deste Serviço (este Aplicativo) (administração, vendas, marketing,
                administração legal do sistema) ou pessoas externas (como fornecedores terceirizados de serviços
                técnicos, carteiros, provedores de hospedagem, empresas de TI, agências de comunicação) nomeadas, quando
                necessário, como Processadores de Dados por parte do Proprietário. A lista atualizada destas partes pode
                ser solicitada ao Proprietário a qualquer momento.
              </p>

              <h3 className="font-serif text-xl text-[#2D3436] mt-6 mb-3">Lugar</h3>
              <p className="mb-6">
                Os dados são processados nas sedes de operação dos Proprietários, e em quaisquer outros lugares onde as
                partes envolvidas com o processamento estiverem localizadas. Dependendo da localização do Usuário as
                transferências de dados poderão envolver a transferência dos Dados do Usuário para outro país que não
                seja o seu. Para descobrirem mais sobre o local de processamento de tais Dados transferidos os Usuários
                poderão verificar a seção contendo os detalhes sobre o processamento de Dados Pessoais.
              </p>

              <h3 className="font-serif text-xl text-[#2D3436] mt-6 mb-3">Período de conservação</h3>
              <p className="mb-6">
                Salvo especificação em contrário neste documento, os Dados Pessoais serão tratados e armazenados pelo
                tempo necessário para as finalidades para as quais foram coletados, e poderão ser retidos por mais tempo
                em razão de qualquer obrigação legal aplicável ou com base no consentimento dos Usuários.
              </p>

              <h2 className="font-serif text-2xl text-[#2D3436] mt-8 mb-4">Política de Cookies</h2>
              <p className="mb-6">
                Este Aplicativo usa Rastreadores. Para saber mais, os Usuários poderão consultar a Política de Cookies.
              </p>

              <h2 className="font-serif text-2xl text-[#2D3436] mt-8 mb-4">Informações adicionais para usuários</h2>

              <h3 className="font-serif text-xl text-[#2D3436] mt-6 mb-3">Base jurídica para o processamento</h3>
              <p className="mb-4">
                O Proprietário poderá processar os Dados Pessoais relacionados ao Usuário se uma das hipóteses a seguir
                se aplicar:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>os Usuários tenham dado a sua anuência para uma ou mais finalidades específicas.</li>
                <li>
                  o fornecimento dos Dados for necessário para o cumprimento de um contrato com o Usuário e/ou quaisquer
                  obrigações pré-contratuais do mesmo;
                </li>
                <li>
                  o processamento for necessário para o cumprimento de uma obrigação jurídica à qual o Proprietário
                  estiver sujeito;
                </li>
                <li>
                  o processamento estiver relacionado a uma tarefa que for executada no interesse público ou no
                  exercício de uma autorização oficial na qual o Proprietário estiver investido;
                </li>
                <li>
                  o processamento for necessário para a finalidade de interesses legítimos perseguidos pelo Proprietário
                  ou por um terceiro;
                </li>
              </ul>
              <p className="mb-6">
                Em qualquer caso, o Proprietário colaborará de bom grado para esclarecer qual a base jurídica que se
                aplica ao processamento, e em especial se o fornecimento de Dados for um requisito obrigatório por força
                de lei ou contratual, ou uma exigência necessária para celebrar um contrato.
              </p>

              <h3 className="font-serif text-xl text-[#2D3436] mt-6 mb-3">
                Mais informações sobre o tempo de retenção
              </h3>
              <p className="mb-4">
                Salvo especificação em contrário neste documento, os Dados Pessoais serão tratados e armazenados pelo
                tempo necessário para as finalidades para as quais foram coletados, e poderão ser retidos por mais tempo
                em razão de qualquer obrigação legal aplicável ou com base no consentimento dos Usuários.
              </p>
              <p className="mb-4">Portanto:</p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>
                  Os Dados Pessoais coletados para as finalidades relacionadas com a execução de um contrato entre o
                  Proprietário e o Usuário serão conservados até que tal contrato tenha sido completamente cumprido.
                </li>
                <li>
                  Os Dados Pessoais coletados para as finalidades relacionadas com os legítimos interesses do
                  Proprietário serão conservados pelo tempo que for necessário para cumprir tais finalidades.
                </li>
                <li>
                  O Proprietário poderá ter a permissão de conservar os Dados Pessoais por um prazo maior sempre que o
                  Usuário tiver dado a sua autorização para tal processamento, enquanto tal autorização não tiver sido
                  retirada.
                </li>
              </ul>
              <p className="mb-6">
                Assim que o prazo de conservação vencer os Dados Pessoais serão apagados. Desta forma o direito de
                acessar, o direito de apagar, o direito de corrigir e o direito à portabilidade dos dados não poderão
                ter o seu cumprimento exigido após o vencimento do prazo de conservação.
              </p>

              <h2 className="font-serif text-2xl text-[#2D3436] mt-8 mb-4">
                Os direitos dos Usuários com base no Regulamento Geral de Proteção de Dados (GDPR)
              </h2>
              <p className="mb-4">
                Os Usuários poderão exercer determinados direitos a respeito dos seus Dados processados pelo
                Proprietário. Em especial, os Usuários possuem os direitos a fazer o seguinte, dentro dos limites
                permitidos por lei:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>
                  <strong>Retirar a sua anuência a qualquer momento.</strong> Os Usuários possuem o direito de retirar a
                  sua anuência nos casos em que tenham dado a sua anuência anteriormente para o processamento dos seus
                  Dados Pessoais.
                </li>
                <li>
                  <strong>Objetar o processamento dos seus Dados.</strong> Os Usuários possuem o direito de objetar o
                  processamento dos seus Dados se o processamento for executado sobre outra base jurídica que não a
                  anuência.
                </li>
                <li>
                  <strong>Acessar os seus Dados.</strong> Os Usuários possuem o direito de saber se os seus Dados estão
                  sendo tratados pelo Proprietário, obter revelações sobre determinados aspectos do tratamento e
                  conseguir uma cópia dos Dados que estiverem sendo tratados.
                </li>
                <li>
                  <strong>Verificar e pedir retificação.</strong> Os Usuários possuem o direito de verificar a exatidão
                  dos seus Dados e de pedir que os mesmos sejam atualizados ou corrigidos.
                </li>
                <li>
                  <strong>Restringir o processamento dos seus Dados.</strong> Os Usuários possuem o direito de
                  restringir o processamento dos seus Dados para qualquer outra finalidade que não seja o armazenamento
                  dos mesmos.
                </li>
                <li>
                  <strong>Ter os seus Dados Pessoais apagados ou retirados de outra maneira.</strong> Os Usuários
                  possuem o direito de obter a eliminação dos seus Dados do Proprietário.
                </li>
                <li>
                  <strong>Receber os seus Dados e ter os mesmos transferidos para outro controlador.</strong> Os
                  Usuários possuem o direito de receber os seus Dados em um formato estruturado, utilizado comumente e
                  apto a ser lido por máquinas e, se for viável tecnicamente, fazer com que estes sejam transmitidos
                  para outro controlador sem nenhum empecilho.
                </li>
                <li>
                  <strong>Registrar uma reclamação.</strong> Os Usuários possuem o direito de apresentar reclamação
                  perante a sua autoridade de proteção de dados competente.
                </li>
              </ul>

              <h3 className="font-serif text-xl text-[#2D3436] mt-6 mb-3">Como exercer estes direitos</h3>
              <p className="mb-6">
                Quaisquer solicitações para exercer os direitos do Usuário podem ser encaminhadas ao Proprietário por
                meio dos detalhes de contato fornecidos neste documento. Tais pedidos são gratuitos e serão atendidos
                pelo Proprietário com a maior brevidade possível e sempre no prazo de um mês, fornecendo aos Usuários as
                informações exigidas por lei.
              </p>

              <h2 className="font-serif text-2xl text-[#2D3436] mt-8 mb-4">
                Informações adicionais sobre a coleta e processamento de Dados
              </h2>

              <h3 className="font-serif text-xl text-[#2D3436] mt-6 mb-3">Ação jurídica</h3>
              <p className="mb-6">
                Os Dados Pessoais dos Usuários podem ser utilizados para fins jurídicos pelo Proprietário em juízo ou
                nas etapas conducentes à possível ação jurídica decorrente de uso indevido deste Serviço (este
                Aplicativo) ou dos Serviços relacionados. O Usuário declara estar ciente de que o Proprietário poderá
                ser obrigado a revelar os Dados Pessoais mediante solicitação das autoridades governamentais.
              </p>

              <h3 className="font-serif text-xl text-[#2D3436] mt-6 mb-3">Logs do sistema e manutenção</h3>
              <p className="mb-6">
                Para fins de operação e manutenção, este Aplicativo e quaisquer serviços de terceiros poderão coletar
                arquivos que gravam a interação com este Aplicativo (logs do sistema) ou usar outros Dados Pessoais
                (tais como endereço IP) para esta finalidade.
              </p>

              <h3 className="font-serif text-xl text-[#2D3436] mt-6 mb-3">
                As informações não contidas nesta política
              </h3>
              <p className="mb-6">
                Mais detalhes sobre a coleta ou processamento de Dados Pessoais podem ser solicitados ao Proprietário, a
                qualquer momento. Favor ver as informações de contato no início deste documento.
              </p>

              <h3 className="font-serif text-xl text-[#2D3436] mt-6 mb-3">Mudanças nesta política de privacidade</h3>
              <p className="mb-6">
                O Proprietário se reserva o direito de fazer alterações nesta política de privacidade a qualquer
                momento, através de notificação a seus Usuários nesta página e possivelmente dentro deste Serviço (este
                Aplicativo) e/ou – na medida em que for técnica e juridicamente viável – enviando um aviso para os
                Usuários através de quaisquer informações de contato disponíveis para o Proprietário. É altamente
                recomendável checar esta página regularmente, consultando a data da última modificação informada na
                parte inferior.
              </p>
              <p className="mb-6">
                Caso as mudanças afetem as atividades de processamento realizadas com base na anuência do Usuário, o
                Proprietário coletará nova anuência do Usuário, onde for exigida.
              </p>

              <p className="text-sm text-[#2D3436]/60 mt-8 pt-6 border-t border-[#91A8D0]/20">
                Última atualização: Novembro de 2025
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
