import type { ExperienceSection } from '@/types/sections/experience-section.types';
import type { ReadonlyDeep } from 'type-fest';
import { linkedin, twitter, website } from '../helpers/links';
import {
  pgoogle,
  pfacebook,
  plinkedin,
  ptiktok,
  javascript,
  angularjs,
  sass,
  html5,
  css3,
  illustrator,
  photoshop,
  trello,
  wordpress,
  sketch,
  github,
} from '../helpers/skills';

const experienceSectionData = {
  config: {
    title: 'Esperienze Lavorative',
    slug: 'experience',
    icon: 'fa6-solid:suitcase',
    visible: true,
  },
  jobs: [
    {
      role: 'Product Owner',
      company: 'ActiveProspect',
      image: import('@/assets/logos/ap-logo.jpg'),
      dates: [new Date('2023-01'), new Date('2023-05')],
      description: `
      In qualità di **Product Owner** presso ActiveProspect, ho guidato l'evoluzione del prodotto *LeadsBridge*, coordinando le esigenze dei clienti, la qualità e i tempi di consegna. Ho lavorato strettamente con i team di *Sviluppo e UX/UI*, modellando *User Stories*, gestendo richieste di funzionalità e fornendo feedback continuo per migliorare il prodotto. Ho agito come principale punto di riferimento per gli *stakeholder*, gestendo la comunicazione e assicurando che il prodotto soddisfasse le esigenze di clienti e partner.
      `,
      tagsList: {
        title: 'Partners',
        tags: [pfacebook(), pgoogle(), plinkedin(), ptiktok()],
      },
      links: [
        website({ url: 'https://activeprospect.com/' }),
        linkedin({ url: 'https://www.linkedin.com/company/activeprospect/' }),
      ],
    },
    {
      role: 'Product Owner',
      company: 'LeadsBridge',
      image: import('@/assets/logos/LeadsBridge_icon_logo.jpg'),
      dates: [new Date('2021-01'), new Date('2022-12')],
      description: `
      Nel mio ruolo di **Product Owner** presso LeadsBridge, ho tradotto le visioni in strategie concrete, guidando il prodotto verso nuovi orizzonti. Ho coordinato lo sviluppo del prodotto con gli obiettivi del business, abbracciando la filosofia *Agile* ed integrando il framework *Scrum*. Ho gestito il ciclo di vita completo del prodotto, dall'ideazione al lancio, e ho mantenuto il team concentrato su creazione di valore, l'adoption del prodotto, la ritenzione dei clienti e la riduzione dell'abbandono.
      `,
      tagsList: {
        title: 'Partners',
        tags: [pfacebook(), pgoogle(), plinkedin(), ptiktok()],
      },
      links: [
        website({ url: 'https://leadsbridge.com/' }),
        linkedin({ url: 'https://www.linkedin.com/company/leadsbridge/' }),
      ],
    },
    {
      role: 'Design and Development',
      company: 'FLOWING ',
      image: import('@/assets/logos/flowing-icon.png'),
      dates: [new Date('2019-01'), new Date('2021-01')],
      description: `
      In qualità di professionista del **Design e Sviluppo** presso FLOWING, ho operato come un architetto di idee, modellando il backlog in funzione degli obiettivi aziendali e creando *users stories* per guidare lo sviluppo del prodotto. Ho lavorato per rimuovere ostacoli, promuovendo un ambiente favorevole alla produttività del team e costruendo relazioni positive con il product owner e con i membri esterni al gruppo.
      `,
      tagsList: {
        title: 'Nel mio quotidiano',
        tags: [javascript(), angularjs(), sass(), sketch(), trello(), github()],
      },
      links: [
        twitter({ url: 'https://www.flowing.it/' }),
        linkedin({ url: 'https://www.linkedin.com/company/flowingis/' }),
      ],
    },
    {
      role: 'Ux/Ui Designer',
      company: 'e-xtrategy ',
      image: import('@/assets/logos/e-xtrategy-logo.jpg'),
      dates: [new Date('2016-10'), new Date('2019-01')],
      description: `
      Nel mio ruolo di **UX e UI Designer** presso e-xtrategy, ho sviluppato design *semplici, attraenti e coinvolgenti, incorporando gli insight ottenuti attraverso la ricerca con gli utenti e l'organizzazione dei contenuti attraverso l'architettura delle informazioni.

      Ho collaborato a stretto contatto con i developer, fornendo loro gli strumenti e le direttive per elevare il loro lavoro. Con l'utilizzo di HTML e CSS, mi sono impegnato direttamente nel codice di sviluppo, assicurando l'aderenza dei design ai requisiti del progetto e il loro allineamento con gli obiettivi aziendali e le esigenze degli utenti.
      `,
      tagsList: {
        title: 'Nel mio quotidiano',
        tags: [javascript(), angularjs(), sass(), sketch(), trello(), github()],
      },
      links: [],
    },
    {
      role: 'Web Designer',
      company: 'Selfrules ',
      image: import('@/assets/logos/selfrules.jpeg'),
      dates: [new Date('2012-03'), new Date('2019-01')],
      description: `
      Nel mio ruolo di Fondatore e CEO di Selfrules, ho avuto l'opportunità di indossare molteplici cappelli. Come **Web Project Manager, Frontend Developer e UX Designer**, ho plasmato il design e lo sviluppo web, perfezionando le mie competenze tecniche con strumenti come HTML5, CSS3, Javascript, AngularJs, Node.js e Material.

      Come leader, ho svolto un ruolo fondamentale nella gestione del progetto, nell'elaborazione di idee innovative, nel bilanciamento dei progetti e nel fornire un'assistenza clienti di alto livello. Questa esperienza non è stata solo un lavoro, ma un viaggio di crescita e scoperta, navigando nel vasto oceano del digitale e guidando i mie clienti e collaboratori verso nuovi orizzonti di successo.
      `,
      tagsList: {
        title: 'Nel mio quotidiano',
        tags: [html5(), css3(), javascript(), wordpress(), photoshop(), illustrator()],
      },
      links: [],
    },
  ],
} as const satisfies ReadonlyDeep<ExperienceSection>;

export default experienceSectionData;
