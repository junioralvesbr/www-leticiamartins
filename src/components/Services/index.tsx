import Image from "next/image";
import { FaArrowRightLong } from "react-icons/fa6";

const data = [
  {
    image: "/images/cozinha.jpeg",
    alt: "Foto de cozinha organizada",
    title: "Organização Residêncial",
    text: "Somos apaixonados por organização e atuamos em todos os ambientes da sua casa. Estamos aqui para te ouvir e elaborar um plano personalizado e perfeito para você e sua familia."
  },
  {
    image: "/images/mudanca.jpeg",
    alt: "Foto de serviço de pós mudanças",
    title: "Pós Mudanças",
    text: "Sabemos que o processo de mudança residencial, pode ser desafiador e estressante, mas com um pouco de planejamento e organização, é possível transformar o caos em conforto na sua nova casa."
  },
  {
    image: "/images/loja.jpeg",
    alt: "Foto de loja organizada",
    title: "Organização Empresarial",
    text: "A organização eficiente é a chave para o sucesso de qualquer empresa. Dessa forma, uma empresa bem organizada tende a ser mais produtiva, competitiva e capaz de se adaptar às mudanças do mercado."
  },
]

export default function Services() {
  return (
    <section className="px-3 mt-32" id="services">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold">Nossos Seviços</h2>

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

              <p className="text-stone-600 pr-28 mt-8 leading-10 text-lg">
                {item.text}
              </p>

            </article>
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <a
            href="#footer"
            className="bg-yellow-100 flex items-center gap-2 px-6 py-3 rounded-lg max-w-max transition-all hover:bg-yellow-200"
          >
            <span>Entre em contato comigo</span>
            <FaArrowRightLong />
          </a>
        </div>
      </div>
    </section>
  )
}