import { string } from "astro/zod";

export const enum Languages {
  es = "Español",
  en = "English",
}

const defaultLang :keyof typeof Languages = 'es'

export const languages: {[key: string]: Languages} = {
  es: Languages.es,
  en: Languages.en,
}

const paths = {
  '/home' : '/',
  '/about' : '/about'
}

export function getLangFromUrl (url : URL)  {
  const [, lang] = url.pathname.split('/');
  if(lang in languages) return lang as keyof typeof Languages
  return defaultLang
}

export function shiftLang (url: URL) : { path: string, label: string, lang:keyof typeof Languages}[] {
  const {url: path, lang } = parseURL(url);
  const languagesArray = Object.entries(languages);
  const reminderLangs = languagesArray.filter(
  (languages) => languages[0] !== lang
);
  const linksObj = reminderLangs.reduce<{path: string, label: Languages, lang:keyof typeof Languages}[]>((acc, lang) => {
    const currentLang = lang as  [keyof typeof Languages, Languages]
    const isDefLang = currentLang[0] === defaultLang 
    const currentPath = paths[path as keyof typeof paths]
    const definedPath = isDefLang ? currentPath
    : '/' + currentLang[0] + currentPath
    const linkObj = {
      path: definedPath,
      lang: currentLang[0],
      label: currentLang[1]
    }
    acc.push(linkObj)
    return acc
  }, [])

  return linksObj
}
export function parseURL(urlObject: URL): { url: string; lang: keyof typeof Languages } {
  let pathname = urlObject.pathname;
  if (pathname === '/') {
    return { url: '/home', lang: defaultLang };
  }

  const parts = pathname.split('/').filter(part => part !== '');
  if (parts.length === 1) {
    if(parts[0] in languages) return { url:"/home" , lang: "en"}
    return { url: `/${parts[0]}`, lang: defaultLang };
  } else if (parts.length === 2) {
    const twoParts = parts as ["es" | "en", string]
    const [lang, page]:[keyof typeof Languages, string] = twoParts;
    return { url: `/${page}`, lang };
  } else {
    console.warn('Unexpected URL format');
    return { url: '/home', lang: defaultLang };
  }
}

type MetaData = {
  title: string;
  description: string;
};

type MetaDataCollection = {
  [url: string]: {
    [lang: string]: MetaData;
  };
};

export class MetaManager {
  private metaCollection: MetaDataCollection;

  constructor() {
    this.metaCollection = {
      '/home': {
        'en': {
          title: 'CaperAsDev | Web Developer',
          description: 'CaperAsDev is a Colombian Frontend Web Developer passionate about technology, creativity, and innovation. Specializing in agile websites, I ensure the highest standards in responsiveness, accessibility (A11Y), SEO, and internationalization (I18N).',
        },
        'es': {
          title: 'CaperAsDev | Desarrollador web',
          description: 'CaperAsDev, desarrollador web frontend colombiano, apasionado por la tecnología, la creatividad y la innovación. Sitios web ágiles, con los más altos estándares en responsividad, accesibilidad (A11Y), SEO e internacionalización (I18N).',
        },
      },
      '/about': {
        'en': {
          title: 'CaperAsDev | About me',
          description: "CaperAsDev is an Industrial Designer, Illustrator, Frontend Web Developer, and a passionate enthusiast of technologies that enable the creation of new worlds on our devices.",
        },
        'es': {
          title: 'CaperAsDev | Sobre mi',
          description: 'CaperAsDev, diseñador industrial, ilustrador, desarrollador web frontend y amante de las tecnologías que nos permiten crear nuevos mundos en nuestros dispositivos.',
        },
      },
    };
  }

  getMetaData({url, lang = 'es'}: {
    url: string;
    lang?: string | undefined;
}): MetaData {
    const urlMeta = this.metaCollection[url];
    if (urlMeta) {
      const langMeta = urlMeta[lang];
      if (langMeta) {
        return langMeta;
      } else {
        console.warn(`No metadata found for language: ${lang}. Returning default (es) metadata.`);
        return urlMeta['es'] || null;
      }
    } else {
      console.warn(`No metadata found for URL: ${url}`);
      return this.metaCollection['/home']['es'];
    }
  }
}

/* // Ejemplo de uso
const metaManager = new MetaManager();
const meta = metaManager.getMetaData('/home');
if (meta) {
  console.log(`Title: ${meta.title}`);
  console.log(`Description: ${meta.description}`);
} else {
  console.log('No metadata found.');
}
 */