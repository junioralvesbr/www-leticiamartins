import LinkBuntton from "@/components/LinkButton";
import AboultMe from "@/components/AboutMe";
import { whatsAppLink } from "@/components/Whatsapp";
import SwiperCaroucel from "@/components/SwiperCaroucel/page";

export default function AboutMe() {
  return (
    <>
      <header>
        <section className="flex flex-col gap-6 p-4 pt-5 mx-auto md:pt-10 md:flex-row md:justify-center md:items-center md:max-w-7xl">
          <article className="flex flex-col gap-5">

            <p className="text-stone-500 uppercase">
              Ola !!!
            </p>

            <h1 className="text-stone-800 text-4xl max-w-md lg:text-6xl xl:text-7xl">
              Eu sou a Leticia Martins
            </h1>

            <p className="text-stone-500 text-lg">
              Profissional de Organização Residencial e Comercial
            </p>

            <LinkBuntton href={whatsAppLink}>
              Entre em contato comigo
            </LinkBuntton>
          </article>

          <div className="w-full h-full relative pb-[56.25%] rounded-lg">
            <iframe
              className="w-full h-full absolute inset-0 overflow-hidden rounded-lg"
              src="https://streamable.com/e/w80woi?autoplay=1&nocontrols=1"
              width="100%"
              height="100%"
              allowFullScreen
              allow="autoplay"
            >
            </iframe>
          </div>

        </section>

      </header>

      <main>
        <AboultMe />
        <section id="midia" className="bg-third-color py-14">
          <h2 className="text-stone-500 text-2xl uppercase font-bold text-center py-3">
            Presença em mídia, TV e eventos
          </h2>

          <SwiperCaroucel />
        </section>
      </main>

    </>
  )
}