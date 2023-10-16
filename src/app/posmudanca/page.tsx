import Header from "@/components/Pages/Header"
import Section from "@/components/Pages/Section"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: 'Pós Mudança - Leticia Martins Personal Organizer',
}

const data = [
  {
    image: "/images/estoque.jpg",
    alt: "Foto de estoque",
    title: "Estoques e almoxarifados",
    text: "A gestão de estoques e almoxarifados potencializam a rentabilidade de qualquer organização. Por isso é fundamental mantê-los organizados afim de que a empresa sempre esteja abastecida e não tenha custos desnecessários com produtos e insumos. A organização destes setores tem por objetivo aumentar a produtividade e a agilidade no manuseio dos produtos pelos colaboradores.",
    reverse: false
  },
  {
    image: "/images/atelie.jpg",
    alt: "foto de ateliê",
    title: "Ateliê",
    text: "O ateliê é aquele cantinho agradável onde podemos nos refugiar no mundo da arte. E ter um ateliê organizado é muito mais prazeroso para trabalhar e produzir lindas peças. Pois o que realmente importa é que esse local seja organizado para que você possa trabalhar com tranquilidade e praticidade.",
    reverse: true
  },
  {
    image: "/images/loja.jpg",
    alt: "foto de loja comercial",
    title: "Loja comercial",
    text: "Uma loja organizada com os produtos bem dispostos é uma ferramenta importante para atrair e proporcionar conforto e bem estar para os seus clientes. A organização pode chamar a atenção dos consumidores, melhorar seu atendimento, facilitar o trabalhos dos seus colaboradores e consequentemente aumentar as suas vendas.",
    reverse: false
  },
]

export default function Home() {
  return (
    <>
      <header>
        <Header>Pós Mudança</Header>
      </header>

      <main>
        <Section data={data} />
      </main>
    </>
  )
}