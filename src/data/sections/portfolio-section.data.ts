import type { PortfolioSection } from '@/types/sections/portfolio-section.types';
import type { ReadonlyDeep } from 'type-fest';
import { demo, website } from '../helpers/links';
import {
  jira,
  confluence,
  slack,
  sass,
  sketch,
  angularjs,
  github,
  sheets,
  calendar,
  analytics,
  miro,
  salesforce,
  trello,
  teams,
} from '../helpers/skills';

const portfolioSectionData = {
  config: {
    title: 'Prodotti Guidati',
    slug: 'project',
    icon: 'fa6-solid:rocket',
    visible: true,
    screenshots: {
      title: 'Screenshots',
      icon: 'fa6-solid:images',
    },
  },
  projects: [
    {
      name: 'LeadsBridge',
      image: import('@/assets/portfolio/LeadsBridge_icon_logo.jpg'),
      dates: [new Date('2021-01'), new Date('2023-05')],
      details: [
        { label: 'Team', value: '11 persone' },
        { label: 'Ruolo', value: ['Product Owner'] },
        { label: 'Azienda', value: 'ActiveProspect' },
        { label: 'Settore', value: ['Lead Generation', 'Consent Based Marketing'] },
      ],
      // pdfDetails: [
      //   { label: 'Demo', value: '', url: '#' },
      //   { label: 'Repository', value: '', url: '#' },
      // ],
      // screenshots: [
      //   { src: import('@/assets/portfolio/project-1-screenshot-1.jpg'), alt: 'First screenshot' },
      //   { src: import('@/assets/portfolio/project-1-screenshot-2.jpg'), alt: 'Second screenshot' },
      //   { src: import('@/assets/portfolio/project-1-screenshot-3.jpg'), alt: 'Third screenshot' },
      // ],
      description:
        'LeadsBridge è una piattaforma di automazione del marketing che facilita il processo di sincronizzazione dei lead tra la una piattaforma di advertising e un CRM, migliorando la gestione dei lead e ottimizzando le campagne di marketing.\n ► Ho introdotto e promosso con successo la **metodologia Agile** nel team, portando a una maggiore efficienza nel processo di sviluppo e a un miglioramento significativo nel time-to-market del prodotto.\n ► Ho contribuito nella **creazione di un team** e instaurato una disciplina interna per mantenere elevata disponibilità e ambiente di lavoro sano.\n ► Ho contribuito nello sviluppo e gestione di **oltre 400 integrazioni API** utilizzate quotidianamente da oltre **2500 utenti**.\n ► Ho contribuito ad introdurre un vero motore di crescita guidato dal prodotto (**Product-Led Growth**) con obiettivo di consentire ai clienti di tutto il mondo di integrare motori di vendita e marketing con le principali piattaforme del settore.',
      tagsList: {
        title: 'Nel mio Quotidiano',
        tags: [jira(), confluence(), slack(), miro(), calendar(), sheets(), analytics(), salesforce()],
      },
      links: [website({ url: 'https://leadsbridge.com/' }), demo({ url: 'https://app.leadsbridge.com/signup' })],
    },
    {
      name: 'CliensPiù',
      image: import('@/assets/portfolio/gfl.jpg'),
      dates: [new Date('2016-10'), new Date('2021-01')],
      details: [
        { label: 'Team', value: '7 persone' },
        { label: 'Ruolo', value: ['Ux/Ui Designer', 'Front-end Developer', 'Project Manager'] },
        { label: 'Azienda', value: 'Giuffrè Francis Lefebvre' },
        { label: 'Settore', value: ['Legale', 'Gestionale Studi Legali'] },
      ],
      // pdfDetails: [
      //   { label: 'Demo', value: '', url: '#' },
      //   { label: 'Repository', value: '', url: '#' },
      // ],
      description:
        "CliensPiù è un software gestionale avanzato progettato per facilitare la gestione e l'organizzazione di studi professionali, offrendo strumenti per la fatturazione, la gestione dei clienti, la pianificazione e l'ottimizzazione del lavoro.\n ► Ho contribuito al **design dell'interfaccia utente** (UI) e all'**esperienza utente** (UX), facilitando l'uso del software e migliorando l'efficienza per gli utenti. \n ► Ho gestito il progetto, **coordinando un team di 7 persone**, garantendo il rispetto dei tempi di consegna e la qualità del prodotto finale. \n ► Ho costantemente coltivato la metodologia Agile nel team di sviluppo, migliorando la **produttività e l'efficienza** nel processo di sviluppo e consegna del software.",
      tagsList: {
        title: 'Nel mio quotidiano',
        tags: [sass(), sketch(), angularjs(), github(), trello(), teams()],
      },
      links: [
        website({
          url: 'https://www.giuffrefrancislefebvre.it/it/prodotto/cliens-gestione-studio-legale-e-clienspiu/cliens-piu',
        }),
        demo({ url: 'https://www.clienspiu.it/ui/login/index.html' }),
      ],
    },
  ],
} as const satisfies ReadonlyDeep<PortfolioSection>;

export default portfolioSectionData;
