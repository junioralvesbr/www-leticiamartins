import Image from "next/image";

export default function Video() {
  return (
    <section>
      <div className="h-[400px] relative md:h-[554px]">
        <Image
          className="z-0 object-cover"
          src="/images/casa.jpg"
          alt="Imagem de sala organizada"
          fill
          sizes="100%"
          loading="lazy"
        />

        <div className="z-10 absolute inset-0 bg-secondary flex flex-col justify-center items-center gap-12">
          <p className="z-10 text-white text-2xl text-center max-w-2xl md:text-3xl md:leading-10">
            Elaboramos soluções personalizadas para a organização da sua casa ou empresa.
          </p>

          <p className="z-10 text-white text-2xl text-center max-w-2xl md:text-3xl md:leading-10">
            Ajudando você a encontrar tranquilidade, equilíbrio e espaço para desfrutar das coisas mais preciosas da vida.
          </p>
        </div>
      </div>
    </section>
  )
}