
import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/react'
import { Jost } from 'next/font/google'
import NavBar from '../components/NavBar'
import Footer from '@/components/Footer'
import { WhatssAppIcon } from '@/components/Whatsapp'
import '../styles/global.css'

const jost = Jost({
  subsets: ['latin'],
  variable: '--font-jost'
})

export const metadata: Metadata = {
  description: 'Site da Leticia Martins personal organizer. Profissional especializada em organização de ambientes residenciais e empresariais. Tudo sobre organização, mudança residencial, conforto e bem estar no seu lar. Planeje seu movel de forma funcional e com organização.',
  keywords: ['Curso', 'organização', 'personal organizer', 'curso de personal organizer', 'organizadores', 'Minha casa organizada', 'mudança', 'mudança residencial', 'organização empresarial', 'organização de lojas', 'organização de vitrines', 'marcenaria inteligente', 'movel planejado'],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: false
    }
  },
  authors: { name: "Junior Alves" },
  icons: {
    icon: [
      { url: '/favicon/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: '/favicon/apple-touch-icon.png',
    other: [
      {
        rel: '/favicon/android-chrome-192x192',
        url: '/favicon/android-chrome-192x192.png'
      }
    ]
  },
  manifest: '/favicon/site.webmanifest'
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={jost.className}>
        <NavBar />
        {children}
        <Footer />
        <WhatssAppIcon />
        <Analytics />
      </body>
    </html>
  )
}
