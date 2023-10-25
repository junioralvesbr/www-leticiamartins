import { ReactNode } from "react";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";

type LinkButtonProps = {
  href: string,
  target?: string,
  children: ReactNode
}


export default function LinkBuntton({ href, target = "_self", children }: LinkButtonProps) {
  return (
    <Link
      href={href}
      className="bg-primary text-white flex items-center gap-2 px-6 py-3 rounded-lg max-w-max transition-all hover:bg-rose-400"
      target={target}
    >
      <span>{children}</span>
      <FaArrowRightLong />
    </Link>
  )
}