const enum Languages {
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

export function shiftLang (url: URL) : { path: string, label: string}[] {
  const {url: path, lang } = parseURL(url);
  const languagesArray = Object.entries(languages);
  const reminderLangs = languagesArray.filter(
  (languages) => languages[0] !== lang
);
  const linksObj = reminderLangs.reduce<{path: string, label: Languages}[]>((acc, lang) => {
    const isDefLang = lang[0] === defaultLang 
    const currentPath = paths[path as keyof typeof paths]
    const definedPath = isDefLang ? currentPath
    : '/' + lang[0] + currentPath
    const linkObj = {
      path: definedPath,
      label: lang[1]
    }
    acc.push(linkObj)
    return acc
  }, [])

  return linksObj
}
export function parseURL(urlObject: URL): { url: string; lang: string } {
  const defaultLang = 'es';
  let pathname = urlObject.pathname;
  if (pathname === '/') {
    return { url: '/home', lang: defaultLang };
  }

  const parts = pathname.split('/').filter(part => part !== '');
  if (parts.length === 1) {
    if(parts[0] in languages) return { url:"/home" , lang:parts[0]}
    return { url: `/${parts[0]}`, lang: defaultLang };
  } else if (parts.length === 2) {
    const [lang, page] = parts;
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
          title: 'CaperAsDev | Portfolio',
          description: 'Kevin Hincapie, Colombian web developer passionate about technology and creativity',
        },
        'es': {
          title: 'CaperAsDev | Portafolio',
          description: 'Kevin Hincapie Desarrollador web Colombiano apasionado por la tecnología y la creatividad.',
        },
      },
      '/about': {
        'en': {
          title: 'CaperAsDev | About me',
          description: 'Kevin Hincapie, Industrial Designer, Artist, Web Developer and much more.',
        },
        'es': {
          title: 'CaperAsDev | Sobre mi',
          description: 'Kevin Hincapie, Diseñador Industrial, Artista, Desarrollador Web y mucho mas.',
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