import { Metadata } from "next"

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

export const metadata: Metadata = {
  title: 'Organização Comercial - Leticia Martins Personal Organizer',
}

export default function Home() {
  return (
    <>
      <header id="inicio" className="pt-6">
        <h1 className="text-center uppercase text-xl tracking-widest text-shadow font-bold py-10 md:py-20 md:text-4xl">
          Organização Comercial
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
                <img src={item.image} alt={item.alt}
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