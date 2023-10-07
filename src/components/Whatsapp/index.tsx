import { FaWhatsapp } from 'react-icons/fa'

const phone = "5544998138138"
const space = "%20"
const message = `
    Oii${space}Leticia,${space}tudo${space}bem?${space}gostaria${space}de${space}saber${space}sobre${space}seu${space}trabalho${space}de...
`
export const whatsAppLink = `https://api.whatsapp.com/send?phone=${phone}&text=${message}`

export default function WhatssApp() {
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