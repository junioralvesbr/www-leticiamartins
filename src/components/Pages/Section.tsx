import { WhatsAppButton } from '../Whatsapp'

export default function Section({ data }: any) {
  return (
    <section>
      {data && data.map((item: any, index: any) => (
        <article
          className={`flex flex-col justify-center items-center gap-5 mb-24 md:gap-8
            ${item.reverse ? "md:flex-row-reverse" : "md:flex-row"}
            `}
          key={index}
        >

          <figure className="lg:max-w-[640px]">
            <img src={item.image} alt="foto de closet"
              className="w-full h-auto"
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

      <WhatsAppButton>Entre em contato comigo</WhatsAppButton>
    </section>
  )
}