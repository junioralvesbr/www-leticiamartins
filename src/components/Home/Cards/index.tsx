import { FaCircleCheck, FaMapLocationDot, FaUserGroup } from 'react-icons/fa6'

export default function Cards() {
  return (
    <section className='pt-8 md:pt-12'>
      <div className='grid grid-cols-1 gap-4 px-3 mx-auto md:grid-cols-3 md:max-w-6xl md:mx-auto'>
        <div className='bg-zinc-100 p-8 rounded-lg'>
          <FaCircleCheck size="30px" />
          <p className='text-stone-700 text-lg mt-6'>
            Mais de 6 anos de experiência
          </p>
        </div>
        <div className='bg-zinc-100 p-8 rounded-lg'>
          <FaMapLocationDot size="30px" />
          <p className='text-stone-700 text-lg mt-6'>
            Atendimento em Maringá-Pr e Região
          </p>
        </div>
        <div className='bg-zinc-100 p-8 rounded-lg'>
          <FaUserGroup size="30px" />
          <p className='text-stone-700 text-lg mt-6'>
            Equipe bem treinada e capacitada
          </p>
        </div>
      </div>
    </section>
  )
}