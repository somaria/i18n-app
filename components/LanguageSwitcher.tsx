'use client'

import { useRouter } from 'next/navigation'
import { usePathname } from 'next/navigation'

export default function LanguageSwitcher({ lang }: { lang: string }) {
   const router = useRouter()
   const pathname = usePathname()

   const switchLanguage = (newLang: string) => {
      const newPathname = pathname.replace(`/${lang}`, `/${newLang}`)
      router.push(newPathname)
   }

   return (
      <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
         <button
            onClick={() => switchLanguage(lang === 'en' ? 'es' : 'en')}
            className="pointer-events-auto flex place-items-center gap-2 p-8 lg:p-0"
         >
            {lang === 'en' ? 'Cambiar a Español' : 'Switch to English'}
         </button>
      </div>
   )
}