const enum Languages {
  es = "Español",
  en = "English",
}

const defaultLang :keyof typeof Languages = 'es'
const languages: {[key: string]: Languages} = {
  es: Languages.es,
  en: Languages.en,
}
export function getLangFromUrl (url : URL)  {
  const [, lang] = url.pathname.split('/');
  if(lang in languages) return lang as keyof typeof Languages
  return defaultLang
}

function parseURL(urlObject: URL): { url: string; lang: string } {
  const defaultLang = 'es';
  let pathname = urlObject.pathname;
  if (pathname === '/') {
    return { url: '/home', lang: defaultLang };
  }

  const parts = pathname.split('/').filter(part => part !== '');
  if (parts.length === 1) {
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

class MetaManager {
  private metaCollection: MetaDataCollection;

  constructor() {
    this.metaCollection = {
      '/home': {
        'en': {
          title: 'Welcome to Our Site',
          description: 'This is the home page of our website.',
        },
        'es': {
          title: 'Bienvenido a Nuestro Sitio',
          description: 'Esta es la página principal de nuestro sitio web.',
        },
      },
      '/about': {
        'en': {
          title: 'About Us',
          description: 'Learn more about our company and team.',
        },
        'es': {
          title: 'Sobre Nosotros',
          description: 'Conozca más sobre nuestra empresa y equipo.',
        },
      },
      // Agrega más rutas y traducciones según sea necesario
    };
  }

  getMetaData(url: string, lang: string = 'es'): MetaData | null {
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
      return null;
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