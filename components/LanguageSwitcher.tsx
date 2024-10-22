'use client'

import React from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

const LanguageSwitcher = ({ lang }: { lang: string }) => {
   const pathname = usePathname()
   const toggleLang = lang === 'en' ? 'es' : 'en'

   // Remove the current language from the pathname
   const newPathname = pathname.replace(`/${lang}`, '') || '/'

   return (
      <Link
         href={`/${toggleLang}${newPathname}`}
         className="text-blue hover:text-gray-300 transition-colors"
      >
         {toggleLang.toUpperCase()}
      </Link>
   )
}

export default LanguageSwitcher
