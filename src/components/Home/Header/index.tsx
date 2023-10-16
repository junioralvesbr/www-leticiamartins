import Image from "next/image";
import { FaArrowRightLong } from "react-icons/fa6";

export default function Header() {
  return (
    <section className="flex flex-col gap-6 p-4 pt-5 mx-auto md:pt-10 md:flex-row md:justify-center md:items-center">
      <div className="flex flex-col gap-5">
        <p className="text-stone-500 uppercase">
          Personal Organizer
        </p>

        <p className="text-stone-800 text-4xl max-w-md lg:text-6xl xl:text-7xl">
          Como você cuida da sua casa importa!
        </p>

        <h1 className="text-stone-500 text-lg">
          Organize a sua casa com a <br />
          <em className="uppercase font-bold"> Leticia Martins</em>
        </h1>

        <a
          href="#services"
          className="bg-primary text-white flex items-center gap-2 px-6 py-3 rounded-lg max-w-max transition-all hover:bg-rose-400"
        >
          <span>Conheça nossos serviços</span>
          <FaArrowRightLong />
        </a>
      </div>

      <picture>
        <Image
          src="/images/sala.webp"
          alt="Imagem de sala organizada da Leticia Martins"
          width={800}
          height={600}
          className="rounded-lg"
          priority={true}
        />
      </picture>
    </section>
  )
}