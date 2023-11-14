import Image from "next/image";
import LinkBuntton from "@/components/LinkButton";
import { whatsAppLink } from "@/components/Whatsapp";

export default function DescriptionSection() {
  return (
    <section className="px-8 py-12 md:py-32">
      <article
        className="flex flex-col items-center gap-6 max-w-6xl mx-auto md:flex-row md:justify-between md:gap-20">
        <Image
          src='/images/about.png'
          alt="Foto de perfil de Laticia Martins"
          width={350}
          height={350}
          quality={80}
        />

        <div>
          <p className="text-stone-600 text-xl">
            A organização vai além de apenas colocar objetos em seu devido lugar.
          </p>

          <h2 className="text-3xl text-center leading-[52px] mt-10 md:text-left">
            Ela traz facilidade e simplicidade para o seu dia a dia, tornando tudo mais prático e eficiente.
          </h2>
        </div>
      </article>

      <div className="flex flex-col gap-8 mt-10 max-w-6xl mx-auto">
        <p className="text-2xl text-stone-800">
          Um ambiente organizado traz diversos benefícios, como redução do estresse, aumento da produtividade, economia de tempo na limpeza e manutenção, melhoria na qualidade de vida e sensação de tranquilidade e bem-estar.
        </p>

        <p className="text-xl text-stone-500">
          Além disso, uma organização eficiente permite melhor aproveitamento do espaço disponível, facilitando a circulação e tornando os ambientes mais funcionais e agradáveis.
        </p>

        <div className="flex justify-center">
          <LinkBuntton href={whatsAppLink} target="_blank">
            Entre em contato comigo
          </LinkBuntton>
        </div>
      </div>

    </section>
  )
}