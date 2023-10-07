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
          <a
            href="tel:+5544998138138"
            className="text-2xl text-white hover:brightness-75 transition-all"
          >
            44 9 9813-8138
          </a>
          <ul className="flex justify-center gap-2 mt-2 md:justify-end">
            <li>
              <a
                href="https://www.facebook.com/leticiamartinsorganizer/"
                className="text-white hover:brightness-75 transition-all"
                target='_blank'
              >
                <FaSquareFacebook size="30px" />
              </a>
            </li>

            <li>
              <a
                href="https://www.instagram.com/leticiamartins.organizer/"
                className="text-white hover:brightness-75 transition-all"
                target='_blank'
              >
                <FaSquareInstagram size="30px" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}