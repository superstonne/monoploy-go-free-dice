// app/robots.js
import { SUPPORTED_LANGUAGES } from '../config/languages'

export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
      },
      ...SUPPORTED_LANGUAGES.map(lang => ({
        userAgent: '*',
        allow: `/${lang}`,
      })),
    ],
    sitemap: 'https://www.monopoly-go-free-dice.com/sitemap-index.xml',
  }
}