import Link from "next/link"
import { FaSquareFacebook, FaSquareInstagram } from "react-icons/fa6"

export default function Footer() {
  return (
    <footer className="bg-stone-900 py-20" id="footer">
      <div className="flex flex-col gap-12 items-center max-w-6xl mx-auto md:flex-row md:justify-between">

        <div>
          <p className="font-autograph text-white text-5xl">
            Leticia Martins
          </p>
          <p className="text-white text-center">
            Personal Organizer
          </p>
        </div>

        <div>
          <ul>
            <h2 className="text-xl text-primary font-bold">Serviços:</h2>

            <li className="text-white mt-6 hover:underline">
              <Link href="/">Inicio</Link>
            </li>
            <li className="text-white mt-6 hover:underline">
              <Link href="/residencial">Organização Residencial</Link>
            </li>
            <li className="text-white mt-6 hover:underline">
              <Link href="/posmudanca">Pós Mudança</Link>
            </li>
            <li className="text-white mt-6 hover:underline">
              <Link href="/comercial">Organização Comercial</Link>
            </li>
            <li className="text-white mt-6 hover:underline">
              <Link href="https://www.google.com.br/maps/place/Maring%C3%A1+-+Floriano,+Maring%C3%A1+-+PR/@-23.4105016,-52.1354171,11z/data=!3m1!4b1!4m6!3m5!1s0x94ecd6ee42618c1f:0xc356592828e03925!8m2!3d-23.4209995!4d-51.9330558!16zL20vMDF0dnpx?entry=ttu"
                target="_blank"
              >
                Maringá - Pr
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <Link
            href="tel:+5544998138138"
            className="text-2xl text-white hover:brightness-75 transition-all"
          >
            44 9 9813-8138
          </Link>
          <ul className="flex justify-center gap-2 mt-2 md:justify-end">
            <li>
              <Link
                href="https://www.facebook.com/leticiamartinsorganizer/"
                className="text-white hover:brightness-75 transition-all"
                target='_blank'
                aria-label='Link que leva para pagina do facebook'
              >
                <FaSquareFacebook size="30px" />
              </Link>
            </li>

            <li>
              <Link
                href="https://www.instagram.com/leticiamartins.organizer/"
                className="text-white hover:brightness-75 transition-all"
                target='_blank'
                aria-label='Link que leva para pagina do instagram'
              >
                <FaSquareInstagram size="30px" />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}