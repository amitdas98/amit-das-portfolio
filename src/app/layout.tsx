import type { Metadata } from 'next'
import { Fraunces, JetBrains_Mono, Inter_Tight } from 'next/font/google'
import './globals.css'

const fraunces = Fraunces({
  subsets: ['latin'],
  weight: 'variable',
  style: ['normal', 'italic'],
  variable: '--font-fraunces',
  display: 'swap',
  axes: ['opsz'],
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-mono',
  display: 'swap',
})

const interTight = Inter_Tight({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Amit Das — Product Engineer',
  description: 'Product Engineer with 4+ years building Gen AI solutions and distributed systems at scale. Currently at Yellow.ai.',
  openGraph: {
    title: 'Amit Das — Product Engineer & Gen AI',
    description: '4+ years building platforms that scale to 1.5M msg/min. Gen AI, distributed systems, data pipelines.',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${jetbrainsMono.variable} ${interTight.variable}`}
    >
      <body>{children}</body>
    </html>
  )
}
