// lib/generateSitemap.js
const baseUrl = 'https://www.monopoly-go-free-dice.com'

export default function generateSitemap(lang) {
  const routes = ['', '/latest-links', '/how-to-get', '/faq', '/contact']
  
  return routes.map(route => ({
    url: `${baseUrl}/${lang}${route}`,
    lastModified: new Date(),
    changeFrequency: 'daily',
    priority: route === '' ? 1 : 0.8,
  }))
}