import Image from "next/image";
import { FaArrowRightLong } from "react-icons/fa6";

export default function Course() {
  return (
    <section className="py-20">
      <div className="flex flex-col gap-8 px-6 max-w-6xl mx-auto lg:flex-row lg:items-center">
        <picture className="">
          <Image
            className="object-contain"
            src="/images/foto-curso.png"
            alt="Foto do curso Organize sua Casa"
            width={1024}
            height={1024}
            loading="lazy"
          />
        </picture>

        <article className="flex flex-col gap-6">
          <p className="text-stone-500">
            Curso organize sua casa
          </p>

          <h2 className="text-4xl">
            Conheça o curso mais completo de organização de ambientes para sua casa
          </h2>

          <p className="text-stone-500 text-lg">
            Aprenda as melhores práticas de organização e técnicas para transformar sua casa em um espaço harmonioso.
          </p>

          <p className="text-stone-500 text-lg">
            Desde a organização de ambientes específicos até estratégias para manter a ordem no dia a dia.
          </p>

          <p className="text-stone-500 text-lg">
            Você terá todas as ferramentas para conquistar uma casa organizada de forma prática, leve e eficiente.
          </p>

          <a
            href="https://curso.leticiamartins.com.br/"
            className="bg-rose-600 text-white flex items-center gap-2 px-6 py-3 rounded-lg max-w-max transition-all hover:bg-rose-700"
            target="_blank"
          >
            <span>Tenha mais informações sobre o curso</span>
            <FaArrowRightLong />
          </a>

        </article>
      </div>
    </section>
  )
} 