// config/languages.js
export const SUPPORTED_LANGUAGES = ['en', 'zh', 'es', 'fr', 'de'];
export const DEFAULT_LANGUAGE = 'en';

export const getLanguageName = (code) => {
  const names = {
    en: 'English',
    zh: '中文',
    es: 'Español',
    fr: 'Français',
    de: 'Deutsch',
  };
  return names[code] || code;
};