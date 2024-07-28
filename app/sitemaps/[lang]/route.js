// app/sitemaps/[lang]/route.js
import { generateSitemap } from '../../../lib/generateSitemap'
import { SUPPORTED_LANGUAGES } from '../../../config/languages'

export async function GET(request, { params }) {
  const lang = params.lang
  if (!SUPPORTED_LANGUAGES.includes(lang)) {
    return new Response('Not found', { status: 404 })
  }

  const sitemap = generateSitemap(lang)
  const content = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${sitemap.map(item => `
    <url>
      <loc>${item.url}</loc>
      <lastmod>${item.lastModified.toISOString()}</lastmod>
      <changefreq>${item.changeFrequency}</changefreq>
      <priority>${item.priority}</priority>
    </url>
  `).join('')}
</urlset>`

  return new Response(content, {
    headers: { 'Content-Type': 'application/xml' },
  })
}