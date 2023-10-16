import Image from "next/image";
import Link from "next/link";

const data = [
  {
    image: "/images/cozinha.jpeg",
    alt: "Foto de cozinha organizada",
    title: "Organização Residencial",
    text: "Somos apaixonados por organização e atuamos em todos os ambientes da sua casa. Estamos aqui para te ouvir e elaborar um plano personalizado e perfeito para o conforto seu e de sua familia.",
    link: '/residencial'
  },
  {
    image: "/images/mudanca.jpeg",
    alt: "Foto de serviço de pós Mudança",
    title: "Pós Mudança",
    text: "Sabemos que o processo de mudança residencial, pode ser desafiador e estressante, mas com um pouco de planejamento e organização, é possível transformar o caos em conforto na sua nova casa.",
    link: '/posmudanca'
  },
  {
    image: "/images/loja.jpeg",
    alt: "Foto de loja organizada",
    title: "Organização Empresarial",
    text: "A organização eficiente é a chave para o sucesso de qualquer empresa. Dessa forma, uma empresa bem organizada tende a ser mais produtiva, competitiva e capaz de se adaptar às mudanças do mercado.",
    link: '/comercial'
  },
]

export default function Services() {
  return (
    <section className="px-8 mt-20 md:mt-32" id="services">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold">Nossos Serviços</h2>

        <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3 md:justify-center">

          {data && data.map((item, index) => (
            <article
              key={index}
              className="mt-10">
              <Image
                className="rounded-lg"
                src={item.image}
                alt={item.alt}
                width={360}
                height={360}
                loading="lazy"
              />

              <h3 className="text-2xl font-bold mt-3">
                {item.title}
              </h3>

              <p className="text-stone-600 mt-8 text-lg md:pr-28 md:leading-10">
                {item.text}
              </p>

              <Link
                className="text-2xl inline-block mt-10 text-primary hover:text-rose-400"
                href={item.link}
              >
                Saiba mais...
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}