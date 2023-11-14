import { Metadata } from "next";
import Cards from "@/components/Cards";
import Course from "@/components/Course";
import ImageSection from "@/components/ImageSection";
import DescriptionSection from "@/components/DescriptionSection";
import OurServices from "@/components/OurServices";
import MainHeader from "@/components/MainHeader";


export const metadata: Metadata = {
  title: 'Leticia Martins Personal Organizer',
  alternates: {
    canonical: 'https://www.leticiamartins.com.br'
  },
}

export default function Home() {
  return (
    <>
      <header>
        <MainHeader />
      </header>
      <main>
        <Cards />
        <OurServices />
        <DescriptionSection />
        <ImageSection />
        <Course />
      </main>
    </>
  )
}
