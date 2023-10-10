import Link from 'next/link'
import { FaInstagramSquare } from 'react-icons/fa'
import { FaSquareFacebook, FaSquareInstagram } from 'react-icons/fa6'

export default function NavBar() {
  return (
    <nav className="navbar bg-base-100 border-b-[1px]">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            <li><Link href="/">Home</Link></li>
            <li>
              <a>Serviços</a>
              <ul className="p-2">
                <li><Link href="/residencial">Organização Residencial</Link></li>
                <li><Link href="/posmudanca">Pós Mudança</Link></li>
                <li><Link href="/comercial">Organização Comercial</Link></li>
              </ul>
            </li>
            <li>
              <a href='https://curso.leticiamartins.com.br' target='_blank'>
                Curso
              </a>
            </li>
          </ul>
        </div>
        <Link href='/'
          className="font-autograph btn btn-ghost normal-case text-3xl">
          Leticia Martins
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li><Link href="/">Home</Link></li>
          <li tabIndex={0}>
            <details>
              <summary>Serviços</summary>
              <ul className="p-2">
                <li><Link href="/residencial">Organização Residencial</Link></li>
                <li><Link href="/posmudanca">Pós Mudança</Link></li>
                <li><Link href="/comercial">Organização Comercial</Link></li>
              </ul>
            </details>
          </li>
          <li>
            <a href='https://curso.leticiamartins.com.br' target='_blank'>
              Curso
            </a>
          </li>
        </ul>
      </div>
      <div className="navbar-end gap-4">
        <a href="https://www.facebook.com/leticiamartinsorganizer/" target='_blank'>
          <FaSquareFacebook size={28} color="#285AEB" />
        </a>

        <a href="https://www.instagram.com/leticiamartins.organizer/" target='_blank'>
          <FaInstagramSquare size={28} color="#d6249f" />
        </a>
      </div>
    </nav>
  )
}