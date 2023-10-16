interface HeaderProps {
  children: string
}

export default function Header({ children }: HeaderProps) {
  return (
    <div id="inicio" className="pt-6">
      <h1 className="text-center uppercase text-xl tracking-widest text-shadow font-bold py-10 md:py-20 md:text-4xl">
        {children}
      </h1>
    </div>
  )
}