import React from 'react'
import Link from 'next/link'
import LanguageSwitcher from './LanguageSwitcher'
import { getDictionary } from '../dictionaries'

const Navbar = async ({ lang }: { lang: string }) => {
  const dict = await getDictionary(lang)

  return (
    <nav className="flex justify-between p-4 bg-gray-100 w-auto space-x-4">
      <Link href={`/${lang}`} className="mr-4">{dict.home}</Link>
      <Link href={`/${lang}/about`} className="mr-4">{dict.about}</Link>
      <LanguageSwitcher lang={lang} />
    </nav>
  )
}

export default Navbar
