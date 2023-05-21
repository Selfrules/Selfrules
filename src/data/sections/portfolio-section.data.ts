import type { PortfolioSection } from '@/types/sections/portfolio-section.types';
import type { ReadonlyDeep } from 'type-fest';
import { demo, website } from '../helpers/links';
import { jira, confluence, slack, sass, sketch, angularjs, github } from '../helpers/skills';

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
        'LeadsBridge è una piattaforma di automazione del marketing che facilita il processo di sincronizzazione dei lead tra la una piattaforma di advertising e un CRM, migliorando la gestione dei lead e ottimizzando le campagne di marketing.',
      tagsList: {
        title: 'Nel mio Quotidiano',
        tags: [jira(), confluence(), slack()],
      },
      links: [website({ url: 'https://leadsbridge.com/' }), demo({ url: 'https://app.leadsbridge.com/signup' })],
    },
    {
      name: 'CliensPiù',
      image: import('@/assets/portfolio/gfl.jpg'),
      dates: [new Date('2016-10'), new Date('2021-01')],
      details: [
        { label: 'Team', value: '6 persone' },
        { label: 'Ruolo', value: ['Ux/Ui Designer', 'Front-end Developer', 'Project Manager'] },
        { label: 'Azienda', value: 'Giuffrè Francis Lefebvre' },
        { label: 'Settore', value: ['Legale', 'Gestionale Studi Legali'] },
      ],
      // pdfDetails: [
      //   { label: 'Demo', value: '', url: '#' },
      //   { label: 'Repository', value: '', url: '#' },
      // ],
      description:
        "CliensPiù è un software gestionale avanzato progettato per facilitare la gestione e l'organizzazione di studi professionali, offrendo strumenti per la fatturazione, la gestione dei clienti, la pianificazione e l'ottimizzazione del lavoro.",
      tagsList: {
        title: 'Nel mio quotidiano',
        tags: [sass(), sketch(), angularjs(), github()],
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
