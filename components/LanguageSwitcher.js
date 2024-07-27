// components/LanguageSwitcher.js
'use client'

import { useRouter } from 'next/navigation'
import { usePathname } from 'next/navigation'

const languages = [
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'zh', name: '中文', flag: '🇨🇳' },
  { code: 'es', name: 'Español', flag: '🇪🇸' },
  { code: 'fr', name: 'Français', flag: '🇫🇷' },
  { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
]

export default function LanguageSwitcher({ currentLang }) {
  const router = useRouter()
  const pathname = usePathname()

  const switchLanguage = (newLang) => {
    const newPathname = pathname.replace(`/${currentLang}`, `/${newLang}`)
    router.push(newPathname)
  }

  const currentLanguage = languages.find(lang => lang.code === currentLang)

  return (
    <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle">
        <div className="indicator">
          <span className="text-2xl">{currentLanguage?.flag}</span>
        </div>
      </label>
      <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-white rounded-box w-52 text-black">
        {languages.map((lang) => (
          <li key={lang.code}>
            <a
              onClick={() => switchLanguage(lang.code)}
              className={`block px-4 py-2 text-sm ${currentLang === lang.code ? 'font-bold' : ''}`}
            >
              <span className="text-xl mr-2">{lang.flag}</span>
              {lang.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}
