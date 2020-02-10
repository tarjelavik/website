module.exports = {
  /* title: 'Søk og skriv', */
  home: 'false',
  locales: {
    // The key is the path for the locale to be nested under.
    // As a special case, the default locale can use '/' as its path.
    '/': {
      lang: 'NO', // this will be set as the lang attribute on <html>
      /* title: 'Søk og skriv', */
      description: 'Søk & Skriv er laget for alle studenter som ønsker å lære mer om informasjonssøk og akademisk skriving, uavhengig av studiested og -emne',
    },
    '/en/': {
      lang: 'EN',
      /* title: 'Search and write', */
      /* description: '' */
    }
  },
  themeConfig: {
    logo: '/sokogskriv2013.png',
    locales: {
      '/': {
        selectText: 'Språk',
        serviceWorker: {
          updatePopup: {
            message: 'New content is available.',
            buttonText: 'Refresh'
          }
        },
        nav: [
          { text: 'Søking', link: '/soking/' },
          { text: 'Lesing', link: '/lesing/' },
          { text: 'Skriving', link: '/skriving/' },
          { text: 'Kildebruk og referanser', link: '/kildebruk-og-referanser/' }
        ],
        sidebar: {
          '/soking/': [
            '',
            'planlegg-soket-ditt',
            'soketeknikker',
            'systematisk-soking',
          ],
          '/lesing/': [
            '',
            'lesemater',
            'lesing-og-skriving',
            'kollokvie',
            'argumentasjon-i-tekst',
            'akademiske-sjangrer'
          ],
          '/skriving/': [
            '',
            {
              title: 'Skriveprosessen',
              children: [
                'skriveprosessen',
                'kom-i-gang-a-skrive',
                'skrivegrupper'
              ]
            },
            {
              title: 'Struktur og argumentasjon',
              children: [
                'struktur-og-argumentasjon',
                'oppbygning-av-en-oppgave',
                'redegjor-og-droft',
                'a-argumentere-i-egen-tekst',
                'imrod-modellen'
              ]
            },
            {
              title: 'Akademisk sprak og stil',
              children: [
                'akademisk-sprak-og-stil',
                'skrive-ryddig',
                'a-skape-flyt',
                'ikke-akademisk-sprak'
              ]
            },
            'formelle-krav-til-oppsett',
            'formidling',
          ],
          '/kildebruk-og-referanser/': [
            '',
            {
              title: 'Hvordan referere',
              children: [
                'hvordan-referere',
                'hva-refereres',
                'forkortelser'
              ]
            },
            {
              title: 'Hvorfor referere',
              children: [
                'hvorfor-referere',
                'etiske-retningslinjer-i-akademia',
                'opphavsrettslige-forhold'
              ]
            },
            {
              title: 'Referansestiler',
              children: [
                'referansestiler/',
                'referansestiler/apa-6th',
                'referansestiler/chicago-fotnoter',
                'referansestiler/chicago-forfatter-aar',
                'referansestiler/mla',
                'referansestiler/harvard',
                'referansestiler/vancouver',
              ]
            },
            'kildevurdering'
          ],
          '/': [
            '',
            'om-sok-og-skriv'
          ]
        }
      },
      '/en/': {
        selectText: 'Languages',
        sidebar: 'auto',
        serviceWorker: {
          updatePopup: {
            message: 'New content is available.',
            buttonText: 'Refresh'
          }
        },
        nav: [
          { text: 'Searching', link: '/en/searching/' },
          { text: 'Seading', link: '/en/reading/' },
          { text: 'Writing', link: '/en/writing/' },
          { text: 'Sources and referencing', link: '/en/sources-and-referencing/' }
        ],
        sidebar: {
          '/en/': [
            '/en/',
            '/en/about-search-write',
          ]
        }
      }
    },
      /* head: [
        ['link', { rel: 'icon', href: `/logo.png` }],
        ['link', { rel: 'manifest', href: '/manifest.json' }],
        ['meta', { name: 'theme-color', content: '#3eaf7c' }],
        ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
        ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
        ['link', { rel: 'apple-touch-icon', href: `/icons/apple-touch-icon-152x152.png` }],
        ['link', { rel: 'mask-icon', href: '/icons/safari-pinned-tab.svg', color: '#3eaf7c' }],
        ['meta', { name: 'msapplication-TileImage', content: '/icons/msapplication-icon-144x144.png' }],
        ['meta', { name: 'msapplication-TileColor', content: '#000000' }]
      ], */
      dest: 'public'
    }
  }
