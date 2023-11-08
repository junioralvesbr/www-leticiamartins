import Header from "@/components/Pages/Header"
import Section from "@/components/Pages/Section"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: 'Pós Mudança - Leticia Martins Personal Organizer',
}

const banner = {
  image: '/images/banner-posmudanca.png',
  alt: "foto e banner da pagina posmudanca Leticia Martins"
}

const data = [
  {
    image: "/images/equipe-mudanca.png",
    alt: "Foto de equipe",
    title: "Conte com a minha equipe",
    text: "Ao contar com a ajuda da minha equipe de personal organizer, você terá alguém especializado em organização que irá planejar cada etapa da mudança, desde a seleção dos itens a serem levados até a organização final na nova casa.",
    reverse: false
  },
  {
    image: "/images/cozinha-mudanca.png",
    alt: "foto de cozinha.mudanca",
    title: "Nosso trabalho",
    text: "Isso inclui otimizar o espaço nos armários, criar sistemas de organização eficientes e encontrar soluções práticas para armazenar seus pertences. Além disso, oferecemos orientações sobre como manter a organização a longo prazo, o que facilitará sua adaptação ao novo lar.",
    reverse: true
  },
  {
    image: "/images/quarto-mudanca.png",
    alt: "foto de quarto-mudanca",
    title: "Mudança organizada",
    text: "Estamos prontos para te oferecer uma experiência única e exclusiva, com todo conforto e tranquilidade que você e sua familia merece.",
    reverse: false
  },
]

export default function Home() {
  return (
    <>
      <header>
        <Header banner={banner}>
          Pós Mudança
        </Header>
      </header>

      <main>
        <Section data={data} />
      </main>
    </>
  )
}