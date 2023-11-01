import { Metadata } from "next";
import Header from "@/components/Home/Header";
import Cards from "@/components/Home/Cards";
import Services from "@/components/Home/Services";
import Aboult from "@/components/Home/About";
import Video from "@/components/Home/Video";
import Course from "@/components/Home/Course";


export const metadata: Metadata = {
  title: 'Leticia Martins Personal Organizer',
  alternates: {
    canonical: 'https://leticiamartins.com.br'
  },
}

export default function Home() {
  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <Cards />
        <Services />
        <Aboult />
        <Video />
        <Course />
      </main>
    </>
  )
}
