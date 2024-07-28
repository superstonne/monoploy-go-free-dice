// app/sitemap.xml/route.js
import { SUPPORTED_LANGUAGES } from '../../../config/languages'

const baseUrl = 'https://www.monopoly-go-free-dice.com'

export async function GET() {
  const content = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${SUPPORTED_LANGUAGES.map(lang => `
    <sitemap>
      <loc>${baseUrl}/sitemaps/${lang}</loc>
      <lastmod>${new Date().toISOString()}</lastmod>
    </sitemap>
  `).join('')}
</sitemapindex>`

  return new Response(content, {
    headers: { 'Content-Type': 'application/xml' },
  })
}