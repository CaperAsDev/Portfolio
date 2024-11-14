enum Languages {
  es = "es",
  en = "en",
}

const defaultLang : Languages = Languages.es
const languages: {[key: string]: Languages} = {
  es: Languages.es,
  en: Languages.en,
}
export function getLangFromUrl (url : URL): Languages {
  const [, lang] = url.pathname.split('/');
  if(lang in languages) return languages[lang as keyof typeof languages] 
  return defaultLang
}
