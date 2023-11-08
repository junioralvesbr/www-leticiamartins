import Image from "next/image";

export default function AboutMe() {
  return (
    <section id="aboutme" className="flex flex-wrap justify-center items-center py-10">

      <article className="max-w-md flex flex-col items-center lg:items-start">
        <h2 className="uppercase font-bold text-stone-500 text-3xl px-2">
          Apaixonada por organização
        </h2>

        <p className="mt-5 px-4">
          Desde pequena sempre tive meus pertences bem arrumados e cuidados, gostava de cuidar da casa para ajudar minha mãe.
        </p>

        <p className="mt-5 px-4">
          Ao longo da vida, casei e tive 2 filhos, numa fase da minha vida, em que eu não estava trabalhando fora, decidi que gostaria de retornar ao mercado de trabalho.
        </p>

        <figure className="mt-5">
          <Image
            className="rounded-xl w-auto h-auto"
            src='/images/aboutme1.jpg'
            alt="Foto do perfil Leticia Martins Personal Organizer"
            width={400}
            height={400}
          />
        </figure>
      </article>


      <article className="max-w-md flex flex-col items-center lg:items-start lg:ml-10">
        <figure className="mt-5">
          <Image
            className="rounded-xl w-auto h-auto"
            src='/images/aboutme2.jpg'
            alt="Foto do perfil Leticia Martins Personal Organizer"
            width={300}
            height={300}
          />
        </figure>

        <p className="mt-5 px-4">
          Foi então que pesquisando descobri que meu talento poderia se tornar uma profissão.
        </p>

        <p className="mt-5 px-4">
          Busquei me profissionalizar em <em>personal organizer</em> e atuo desde 2017 em <strong>Maringá - PR</strong> oferecendo o melhor serviço de organização de ambientes, sempre com o apoio e incentivo de minha familia.
        </p>
      </article>

    </section>
  )
}