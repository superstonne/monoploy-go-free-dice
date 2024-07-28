// app/[lang]/robots.txt/route.js
import { SUPPORTED_LANGUAGES } from '../../../config/languages'

export async function GET(request, { params }) {
  const { lang } = params
  
  if (!SUPPORTED_LANGUAGES.includes(lang)) {
    return new Response('Not found', { status: 404 })
  }

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://www.monopoly-go-free-dice.com'

  const content = `User-agent: *
Allow: /

Sitemap: ${baseUrl}/${lang}/sitemap.xml
`

  return new Response(content, {
    headers: { 'Content-Type': 'text/plain' },
  })
}