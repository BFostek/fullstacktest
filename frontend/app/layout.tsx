import type { Metadata } from 'next'
import { Josefin_Sans } from 'next/font/google'
import './globals.css'

const fontStyle = Josefin_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Weather app',
  description: 'Weather app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={fontStyle.className}>{children}</body>
    </html>
  )
}
