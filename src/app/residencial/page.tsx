import { Metadata } from "next"

const data = [
  {
    image: "/images/closet.jpg",
    title: "Quartos e Closets",
    text: "Essas áreas começam com pouco volume, mas rapidamente se tornam o lugar “fácil” para colocar as coisas quando você não sabe mais o que fazer com elas. Vamos organizar tudo com toda praticidade e facilidade para seu dia a dia.",
    reverse: false
  },
  {
    image: "/images/infantil.webp",
    title: "Quartos Infantis e Brinquedoteca",
    text: "As crianças perdem suas roupas e brinquedos em um piscar de olhos, então não é de admirar que seus quartos e salas de jogos fiquem bagunçados. Podemos começar com a organização e restaurar a ordem em seus quartos para que eles possam encontrar o que precisam.",
    reverse: true
  },
  {
    image: "/images/cozinha.jpg",
    title: "Cozinhas e despensas",
    text: "Provavelmente um dos cômodos mais usados em sua casa, a cozinha se torna um local de encontro para sua família e para o preparo das refeições. Colocar o foco nessas áreas pode não apenas ajudar a restaurar a ordem e reduzir o estresse, mas também pode ajudá-lo a economizar dinheiro.",
    reverse: false
  },
  {
    image: "/images/banheiro.jpg",
    title: "Banheiros e Lavanderias",
    text: " Estes ambientes pequenos podem abrir a porta para um mundo de bagunça e desordem, por isso ao organizá-los você terá toda beleza e funcionalidadede para você, facilitando a limpeza e manutenção do dia a dia da casa.",
    reverse: true
  },
]

export const metadata: Metadata = {
  title: 'Organização Residencial - Leticia Martins Personal Organizer',
}

export default function Home() {
  return (
    <>
      <header id="inicio" className="pt-6">
        <h1 className="text-center uppercase text-xl tracking-widest text-shadow font-bold py-10 md:py-20 md:text-4xl">
          Organização Residencial
        </h1>
      </header>

      <main>
        <section>
          {data && data.map((item, index) => (
            <article
              className={`flex flex-col justify-center items-center gap-5 mb-10 md:gap-8
            ${item.reverse ? "md:flex-row-reverse" : "md:flex-row"}
            `}
              key={index}
            >

              <figure className="lg:max-w-[640px]">
                <img src={item.image} alt="foto de closet"
                  className="w-full h-auto"
                />
              </figure>

              <div className="lg:max-w-[640px]">

                <h2 className="font-bold text-center text-seventh-color uppercase tracking-widest pb-5">
                  {item.title}
                </h2>

                <p className="text-center text-secondary-color px-4 lg:text-lg min-w-[320px] max-w-[600px]">
                  {item.text}
                </p>

              </div>
            </article>
          ))}
        </section>
      </main>
    </>
  )
}