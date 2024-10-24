import type { Metadata } from 'next'
import "../globals.css";
import { Inter } from 'next/font/google'
import Navbar from '../../components/Navbar'
import { Locale } from './dictionaries';
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Internationalized Next.js App',
  description: 'A simple Next.js app with internationalization',
}

export default async function RootLayout({
  children,
  params: { lang },
}: {
  children: React.ReactNode
  params: { lang: string }
}) {
  return (
    <html lang={lang}>
      <body className={inter.className}>
        <Navbar lang={lang as Locale} />
        {children}
      </body>
    </html>
  )
}
