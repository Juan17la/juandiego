import type { Metadata } from 'next'
import { Bricolage_Grotesque, Permanent_Marker, JetBrains_Mono, Silkscreen } from 'next/font/google'
import './globals.css'

const body = Bricolage_Grotesque({ subsets: ['latin'], variable: '--nf-body', display: 'swap' })
const hand = Permanent_Marker({ subsets: ['latin'], weight: '400', variable: '--nf-hand', display: 'swap' })
const data = JetBrains_Mono({ subsets: ['latin'], variable: '--nf-data', display: 'swap' })
const pixel = Silkscreen({ subsets: ['latin'], weight: '400', variable: '--nf-pixel', display: 'swap' })

export const metadata: Metadata = {
  title: 'Juan Diego — Software developer & engineer',
  description:
    'Portfolio of Juan Diego, software engineering student from Colombia: Go, TypeScript, React, Java and Kotlin projects, and the person behind them.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${body.variable} ${hand.variable} ${data.variable} ${pixel.variable}`}>
      <body>{children}</body>
    </html>
  )
}
