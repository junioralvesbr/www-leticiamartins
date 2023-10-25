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
    title: "Conte com a minha equipe",
    text: "Ao contar com a ajuda de uma equipe de personal organizer, você terá alguém especializado em organização que irá planejar cada etapa da mudança, desde a seleção dos itens a serem levados até a organização final na nova casa.",
    reverse: false
  },
  {
    image: "/images/atelie.jpg",
    alt: "foto de ateliê",
    title: "Nosso trabalho",
    text: "Isso inclui otimizar o espaço nos armários, criar sistemas de organização eficientes e encontrar soluções práticas para armazenar seus pertences. Além disso, ela pode oferecer orientações sobre como manter a organização a longo prazo, o que facilitará sua adaptação ao novo lar.",
    reverse: true
  },
  {
    image: "/images/loja.jpg",
    alt: "foto de loja comercial",
    title: "Loja comercial",
    text: "A equipe Leticia Martins está pronta para te oferecer uma experiência única e exclusiva, com todo conforto e tranquilidade para você e sua familia.",
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