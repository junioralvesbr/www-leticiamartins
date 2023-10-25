import LinkBuntton from "@/components/LinkButton";
import Image from "next/image";

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
            Curso Organize sua casa
          </p>

          <h2 className="text-4xl">
            Conheça o curso mais completo de organização de ambientes para sua casa.
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

          <LinkBuntton href="https://curso.leticiamartins.com.br/" target="_blank">
            Tenha mais informações sobre o curso
          </LinkBuntton>

        </article>
      </div>
    </section>
  )
} 