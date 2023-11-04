'use client'

import Link from 'next/link'
import { FaSquareFacebook, FaSquareInstagram } from 'react-icons/fa6'
import { useRef } from 'react'


export default function NavBar() {
  const detailsRef = useRef<HTMLDetailsElement>(null)

  function handleClick() {
    if (detailsRef.current !== null) {
      detailsRef.current.open = false
    }
  }

  return (
    <nav className="navbar bg-base-100 border-b-[1px] px-4 md:px-12">

      {/* menu Mobile */}
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost pl-0 pr-2 lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>

          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            <li>
              <Link href="/" className='text-lg'>
                Inicio
              </Link>
            </li>

            <li>
              <span className='text-lg'>Serviços</span>
              <ul className="p-2">
                <li><Link href="/residencial" className='text-lg'>Organização Residencial</Link></li>
                <li><Link href="/posmudanca" className='text-lg'>Pós Mudança</Link></li>
                <li><Link href="/comercial" className='text-lg'>Organização Comercial</Link></li>
              </ul>
            </li>

            <li>
              <a
                href='https://curso.leticiamartins.com.br'
                className='text-lg'
                target='_blank'
              >
                Curso
              </a>
            </li>
          </ul>
        </div>
        <Link href='/'
          className="font-autograph whitespace-nowrap normal-case text-4xl hover:text-rose-400">
          Leticia Martins
        </Link>
      </div>

      {/* Menu desktop */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link href="/" className='text-xl'>
              Inicio
            </Link>
          </li>

          <li tabIndex={0}>
            <details id="details" ref={detailsRef}>
              <summary className='text-xl'>Serviços</summary>

              <ul className="p-2 z-50">
                <li onClick={handleClick}>
                  <Link href="/residencial" className='text-lg whitespace-nowrap'>Organização Residencial</Link>
                </li>
                <li onClick={handleClick}>
                  <Link href="/posmudanca" className='text-lg whitespace-nowrap'>Pós Mudança</Link>
                </li>
                <li onClick={handleClick}>
                  <Link href="/comercial" className='text-lg whitespace-nowrap'>Organização Comercial</Link>
                </li>
              </ul>
            </details>
          </li>

          <li>
            <a
              className='text-xl'
              href='https://curso.leticiamartins.com.br'
              target='_blank'
            >
              Curso
            </a>
          </li>
        </ul>
      </div>
      <ul className="navbar-end gap-4">
        <li>
          <a
            href="https://www.facebook.com/leticiamartinsorganizer/"
            target='_blank'
            aria-label='Link do perfil do facebook'
          >
            <FaSquareFacebook size={28} className="text-stone-700 hover:text-stone-900" />
          </a>
        </li>

        <li>
          <a
            href="https://www.instagram.com/leticiamartins.organizer/"
            target='_blank'
            aria-label='Link do perfil do instagram'
          >
            <FaSquareInstagram size={28} className="text-stone-700 hover:text-stone-900" />
          </a>
        </li>
      </ul>
    </nav>
  )
}