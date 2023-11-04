import Image from "next/image"

type HeaderProps = {
  banner: {
    image: string,
    alt: string
  }
  children: string
}

export default function Header({ banner, children }: HeaderProps) {
  return (
    <div id="inicio">
      <div className="relative h-52 sm:h-96">
        <Image
          src={banner.image}
          alt={banner.alt}
          className="object-cover object-right"
          fill
          quality={100}
          priority
        />

      </div>
      <h1 className="text-center uppercase text-xl tracking-widest text-shadow font-bold py-10 md:py-20 md:text-4xl">
        {children}
      </h1>
    </div>
  )
}