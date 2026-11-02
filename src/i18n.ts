// Site languages. English lives at /, Polish at /pl/ with the same paths underneath.
export type Lang = 'en' | 'pl';
export const langs: Lang[] = ['en', 'pl'];

export const langOf = (pathname: string): Lang => (pathname === '/pl' || pathname.startsWith('/pl/') ? 'pl' : 'en');

/** The same page in the other language. */
export const pathIn = (pathname: string, lang: Lang): string => {
  const bare = langOf(pathname) === 'pl' ? pathname.replace(/^\/pl/, '') || '/' : pathname;
  return lang === 'pl' ? `/pl${bare === '/' ? '/' : bare}` : bare;
};

/** A site path in the given language: home('pl', '/work/x') → /pl/work/x */
export const localPath = (lang: Lang, path: string) => (lang === 'pl' ? `/pl${path}` : path);

export const ui = {
  en: {
    htmlLang: 'en',
    ogLocale: 'en_US',
    title: 'Vitali Yanusheuski — Senior UX/UI & Product Designer, Kraków',
    description: 'I make dense information easy to absorb. Senior UX/UI and product designer in Kraków, 10+ years, now in healthcare AI. Open to full-time roles.',
    navLabel: 'Main',
    works: 'Works',
    cv: 'CV',
    email: 'Email',
    bookCall: 'Book a call',
    downloadCv: 'Download CV',
    contactTitle: 'Senior UX / UI / Product Designer in Kraków. Open to Work',
    contactText: 'I\'m open to full-time roles, in the office or hybrid. A short conversation is the quickest way to see if we fit.',
    cookieSettings: 'Cookie settings',
    cookieRegion: 'Cookie consent',
    cookieText: 'I use Google Analytics cookies to see how visitors use this site. Nothing is collected until you agree.',
    reject: 'Reject',
    accept: 'Accept',
    enlarged: 'Enlarged image',
    close: 'Close',
    enlarge: 'Enlarge',
    langLabel: 'Language',
    // Main page
    lead: { none: 'Designer', product: 'Product designer', ux: 'UX/UI designer', data: 'Information designer' },
    who: ' who ',
    roleTitles: { product: 'Product Designer', ux: 'UX/UI Designer', data: 'Information Designer' },
    // An underscore marks the next letter as italic. Longest first, then shorter and shorter, then round again.
    endings: [
      'makes dense information easy to absorb',
      'lets visuals carry more',
      'is an _Actual _Individual',
      'invents new patterns',
      'is all about meaning',
      'explains the why',
      'fights entropy',
    ],
    lede: 'I turn large volumes of information into clear structures, so people get the most value in the least time and space. 10+ years in product companies, design studios and agencies, now in healthcare AI at Denti.AI. Based in Kraków.',
    selectedWork: 'Selected work',
    tags: { product: 'Product', ux: 'UX/UI', data: 'Data' },
    preview: 'preview',
    // Case page
    role: 'Role',
    team: 'Team',
    year: 'Year',
  },
  pl: {
    htmlLang: 'pl',
    ogLocale: 'pl_PL',
    title: 'Vitali Yanusheuski — Senior UX/UI & Product Designer, Kraków',
    description: 'Sprawiam, że gęste dane łatwo przyswoić. Senior UX/UI i product designer w Krakowie, ponad 10 lat doświadczenia, obecnie w AI dla medycyny. Szukam pracy na etat.',
    navLabel: 'Menu główne',
    works: 'Projekty',
    cv: 'CV',
    email: 'E-mail',
    bookCall: 'Umów rozmowę',
    downloadCv: 'Pobierz CV',
    contactTitle: 'Senior UX / UI / Product Designer w Krakowie. Szukam pracy',
    contactText: 'Interesuje mnie praca na pełen etat, w biurze lub hybrydowo. Krótka rozmowa to najszybszy sposób, żeby sprawdzić, czy do siebie pasujemy.',
    cookieSettings: 'Ustawienia cookies',
    cookieRegion: 'Zgoda na cookies',
    cookieText: 'Używam plików cookie Google Analytics, żeby wiedzieć, jak odwiedzający korzystają ze strony. Nic nie jest zbierane, dopóki się nie zgodzisz.',
    reject: 'Odrzuć',
    accept: 'Akceptuj',
    enlarged: 'Powiększony obraz',
    close: 'Zamknij',
    enlarge: 'Powiększ',
    langLabel: 'Język',
    lead: { none: 'Projektant', product: 'Projektant produktu', ux: 'Projektant UX/UI', data: 'Projektant informacji' },
    who: ', który ',
    roleTitles: { product: 'Product Designer', ux: 'UX/UI Designer', data: 'Information Designer' },
    endings: [
      'sprawia, że gęste dane łatwo przyswoić',
      'jest _Autentyczną _Indywidualnością',
      'pozwala obrazom mówić więcej',
      'wymyśla nowe wzorce',
      'wyjaśnia, dlaczego',
      'walczy z entropią',
      'stawia na sens',
    ],
    lede: 'Zamieniam duże ilości informacji w przejrzyste struktury, żeby ludzie dostawali jak najwięcej w jak najkrótszym czasie i na jak najmniejszej przestrzeni. Ponad 10 lat w firmach produktowych, studiach projektowych i agencjach, obecnie w AI dla medycyny w Denti.AI. Mieszkam w Krakowie.',
    selectedWork: 'Wybrane projekty',
    tags: { product: 'Produkt', ux: 'UX/UI', data: 'Dane' },
    preview: 'podgląd',
    role: 'Rola',
    team: 'Zespół',
    year: 'Rok',
  },
} as const;
