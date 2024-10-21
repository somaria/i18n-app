import React from 'react'
import Link from 'next/link'
import LanguageSwitcher from './LanguageSwitcher'

const Navbar = ({ lang }: { lang: string }) => {
  return (
    <nav className="flex justify-between p-4 bg-gray-100 w-auto space-x-4">
      
        <Link href={`/${lang}`} className="mr-4">Home</Link>
   
        <Link href={`/${lang}/about`} className="mr-4">About Us</Link>

        <LanguageSwitcher lang={lang} />

    </nav>
  )
}

export default Navbar
