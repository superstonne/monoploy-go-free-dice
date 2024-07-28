// app/[lang]/layout.js
import '../globals.css'
import { Inter } from 'next/font/google'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { getDictionary } from '../../lib/i18n'
import { headers } from 'next/headers'
import { SUPPORTED_LANGUAGES, DEFAULT_LANGUAGE } from '../../config/languages'

const inter = Inter({ subsets: ['latin'] })

// Separate viewport export
export const viewport = {
  width: 'device-width',
  initialScale: 1,
}

export async function generateMetadata({ params }) {
  const dict = await getDictionary(params.lang)
  const baseUrl = `${process.env.NEXT_PUBLIC_BASE_URL}`
  
  // Get the current path
  const headersList = headers()
  const pathname = headersList.get('x-invoke-path') || ''

  // Construct the full URL for the current page
  const currentPageUrl = `${baseUrl}/${params.lang}${pathname}`

  // Dynamically generate alternates for all supported languages
  const languageAlternates = {}
  SUPPORTED_LANGUAGES.forEach(lang => {
    languageAlternates[lang] = `${baseUrl}/${lang}${pathname}`
  })

  return {
    title: {
      default: dict.metadata.title,
      template: `%s | ${dict.metadata.title}`
    },
    description: dict.metadata.description,
    keywords: dict.metadata.keywords,
    openGraph: {
      title: dict.metadata.title,
      description: dict.metadata.description,
      url: baseUrl,
      siteName: dict.metadata.title,
      locale: params.lang,
      type: 'website',
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    twitter: {
      title: dict.metadata.title,
      description: dict.metadata.description,
      card: 'summary_large_image',
    },
    alternates: {
      canonical: currentPageUrl,
      languages: languageAlternates,
    },
    verification: {
      google: 'your-google-verification-code',
    },
    // viewport has been removed from here
  }
}

export default async function RootLayout({ children, params }) {
  // Validate the language parameter
  const lang = SUPPORTED_LANGUAGES.includes(params.lang) ? params.lang : DEFAULT_LANGUAGE;
  const dict = await getDictionary(lang)

  return (
    <html lang={lang}>
      <head>
        <meta httpEquiv="Content-Security-Policy" content="default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline';" />
      </head>
      <body className={`${inter.className} flex flex-col min-h-screen`}>
        <Header lang={lang} dict={dict} />
        <main className="flex-grow">
          {children}
        </main>
        <Footer lang={lang} dict={dict} />
      </body>
    </html>
  )
}