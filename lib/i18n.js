// lib/i18n.js

const dictionaries = {
  en: () => import('../dictionaries/en.json').then((module) => module.default),
  zh: () => import('../dictionaries/zh.json').then((module) => module.default),
  // 添加其他支持的语言
  es: () => import('../dictionaries/es.json').then((module) => module.default),
  fr: () => import('../dictionaries/fr.json').then((module) => module.default),
  de: () => import('../dictionaries/de.json').then((module) => module.default),
}

export const getDictionary = async (locale) => {
  if (!dictionaries[locale]) {
    console.warn(`Dictionary for locale '${locale}' not found. Falling back to English.`)
    return dictionaries.en()
  }
  return dictionaries[locale]()
}