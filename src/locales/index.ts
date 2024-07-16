import { getLocale } from 'astro-i18n-aut'
import { get } from 'lodash-es'
import en from './en.json'
import zh from './zh.json'

const localesMap = {
  en,
  zh,
}

export function useTranslations(url: URL) {
  const locale = getLocale(url)

  return function t(key: string) {
    // @ts-ignore
    const localeJson = localesMap[locale]

    return get(localeJson, key) ?? key
  }
}
