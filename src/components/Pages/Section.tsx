import Image from 'next/image'
import { whatsAppLink } from '../Whatsapp'
import LinkBuntton from '../LinkButton'

export default function Section({ data }: any) {
  return (
    <section className='py-12'>
      {data && data.map((item: any, index: any) => (
        <article
          className={`flex flex-col justify-center items-center gap-5 mb-24 md:gap-8
            ${item.reverse ? "md:flex-row-reverse" : "md:flex-row"}
            `}
          key={index}
        >

          <figure className="lg:max-w-[640px]">
            <Image
              src={item.image}
              alt="foto de closet"
              width={640}
              height={640}
              quality={100}
            />
          </figure>

          <div className="lg:max-w-[640px]">

            <h2 className="font-bold text-center text-seventh-color uppercase tracking-widest pb-5">
              {item.title}
            </h2>

            <p className="text-center text-secondary-color px-4 lg:text-lg min-w-[320px] max-w-[600px]">
              {item.text}
            </p>
          </div>
        </article>
      ))}

      <div className="flex justify-center">
        <LinkBuntton href={whatsAppLink} target='_blank'>
          Entre em contato comigo
        </LinkBuntton>
      </div>
    </section>
  )
}