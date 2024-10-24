import 'server-only'

export type Locale = 'en' | 'es';

const dictionaries: Record<Locale, () => Promise<Record<string, string>>> = {
  en: () => import('./dictionaries/en.json').then((module) => module.default),
  es: () => import('./dictionaries/es.json').then((module) => module.default),
  
};

export async function getDictionary(lang: Locale) {
  return dictionaries[lang]();
}