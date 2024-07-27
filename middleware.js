import { NextResponse } from 'next/server'

const supportedLanguages = ['en', 'zh', 'es', 'fr', 'de'] // 更新支持的语言列表

export function middleware(request) {
  const pathname = request.nextUrl.pathname
  
  // Check if the pathname is missing a locale
  const pathnameIsMissingLocale = supportedLanguages.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  )

  // Redirect if there is no locale
  if (pathnameIsMissingLocale) {
    const acceptLanguage = request.headers.get('accept-language')
    const preferredLanguages = acceptLanguage
      ? acceptLanguage.split(',').map(lang => lang.split(';')[0].trim())
      : []
    
    const defaultLang = preferredLanguages.find(lang => 
      supportedLanguages.includes(lang) || supportedLanguages.includes(lang.split('-')[0])
    )
    
    const redirectLang = defaultLang ? (
      supportedLanguages.includes(defaultLang) ? defaultLang : defaultLang.split('-')[0]
    ) : 'en'

    return NextResponse.redirect(
      new URL(`/${redirectLang}${pathname}`, request.url)
    )
  }
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
}