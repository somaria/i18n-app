import React from 'react'
import Link from 'next/link'
import LanguageSwitcher from './LanguageSwitcher'

const Navbar = ({ lang }: { lang: string }) => {
  return (
    <nav className="w-full h-16 bg-gray-800 flex justify-between items-center px-4 md:px-8 lg:px-16 shadow-md">
      <div className="flex items-center space-x-6">
        <Link href={`/${lang}`} className="flex items-center text-white hover:text-gray-300 transition-colors">Home</Link>
        <Link href={`/${lang}/about`} className="text-white hover:text-gray-300 transition-colors">About Us</Link>
        <LanguageSwitcher lang={lang} />
      </div>
    </nav>
  )
}

export default Navbar
