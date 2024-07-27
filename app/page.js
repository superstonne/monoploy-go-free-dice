import { redirect } from 'next/navigation'
import { headers } from 'next/headers'

export default function Home() {
  const headersList = headers()
  const acceptLanguage = headersList.get('accept-language')
  
  const supportedLanguages = ['en', 'zh']
  
  const preferredLanguages = acceptLanguage
    ? acceptLanguage.split(',').map(lang => lang.split(';')[0].trim())
    : []
  
  const defaultLang = preferredLanguages.find(lang => 
    supportedLanguages.includes(lang) || supportedLanguages.includes(lang.split('-')[0])
  )
  
  const redirectLang = defaultLang ? (defaultLang.startsWith('zh') ? 'zh' : 'en') : 'en'
  
  redirect(`/${redirectLang}`)
}