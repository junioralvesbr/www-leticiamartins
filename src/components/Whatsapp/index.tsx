import { FaWhatsapp } from 'react-icons/fa'
import { FaArrowRightLong } from 'react-icons/fa6'

const phone = "5544998138138"
const space = "%20"
const message = `
    Oii${space}Leticia,${space}tudo${space}bem?${space}gostaria${space}de${space}saber${space}sobre${space}seu${space}trabalho${space}de...
`
export const whatsAppLink = `https://api.whatsapp.com/send?phone=${phone}&text=${message}`

export function WhatssAppIcon() {
  return (
    <a href={whatsAppLink} target='blank' className='flex flex-col fixed bottom-4 right-5 z-20 ease-in-out'>
      <div className='bg-green-600 w-12 h-12 rounded-full flex justify-center items-center self-end'>
        <FaWhatsapp className='text-white text-3xl' />
      </div>

      <span className='inline-block self-end bg-orange-200 text-xs sm:text-sm p-2 rounded-xl'>
        Seja atendido com 1 click
      </span>
    </a>
  )
}

export function WhatsAppButton({ children }: any) {
  return (
    <div className='flex justify-center mb-24'>
      <a
        href={whatsAppLink}
        className="bg-primary text-white flex items-center gap-2 px-6 py-3 rounded-lg max-w-max transition-all hover:bg-rose-400"
        target='_blank'
      >
        <span>{children}</span>
        <FaArrowRightLong />
      </a>
    </div>
  )
}