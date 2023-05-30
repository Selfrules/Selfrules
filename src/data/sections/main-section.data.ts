import type { MainSection } from '@/types/sections/main-section.types';
import type { ReadonlyDeep } from 'type-fest';
import { github, linkedin } from '../helpers/links';

const mainSectionData = {
  config: {
    icon: 'fa6-solid:user',
    title: 'Profilo',
    slug: 'profile',
    visible: true,
  },
  image: import('@/assets/my-image.jpg'),
  fullName: 'Mattia Filippo De Luca',
  role: 'Product Manager | Product Owner ',
  details: [
    { label: 'Email', value: 'info@selfrules.org', url: 'mailto:info@selfrules.org' },
    { label: 'Da', value: 'Modena, Italia' },
    { label: 'Blog', value: 'Pensieri In Pixel', url: 'https://pensieriinpixel.org/' },
  ],
  pdfDetails: [
    { label: 'Email', value: 'info@selfrules.org' },
    { label: 'LinkedIn', value: '/in/selfrules', url: 'https://www.linkedin.com/in/selfrules/' },
    { label: 'GitHub', value: '/Selfrules', url: 'https://github.com/Selfrules' },
    { label: 'Website', value: 'selfrules.org', url: 'https://www.selfrules.org', fullRow: true },
  ],
  description:
    "Sono **Mattia**, un visionario esperto di **Product Management** e un maestro nell'arte del **Product Ownership**. Mi distinguo per il mio talento nel dare vita a progetti complessi, navigando attraverso sfide con curiosità e determinazione, il tutto con l'obiettivo di **migliorare continuamente le mie competenze** in questo affascinante campo. Creo sinfonie di prodotto che **incantano gli utenti**, rimanendo sempre aggiornato sulle ultime tendenze e tecnologie. L'esperienza mi ha reso un viaggiatore instancabile nel vasto universo della gestione dei prodotti, credo nel mio potere di plasmare stelle di successo nel firmamento dei prodotti e contribuire alla realizzazione degli **obiettivi dell'organizzazione**.",
  tags: [
    { name: 'Aperto a nuove opportunità' },
    { name: 'Disponibile per consulenze' },
    { name: 'Disponibile per mentoring' },
  ],
  action: [
    {
      label: 'CV - IT',
      url: '/cv.pdf',
      downloadedFileName: 'cv_De_Luca_IT.pdf',
      language: 'Italiano',
    },
    {
      label: 'CV - EN',
      url: '/cv_De_Luca_en.pdf',
      downloadedFileName: 'cv_De_Luca_en.pdf',
      language: 'english',
    },
  ],
  links: [linkedin({ url: 'https://www.linkedin.com/in/selfrules/' }), github({ url: 'https://github.com/Selfrules' })],
} as const satisfies ReadonlyDeep<MainSection>;

export default mainSectionData;
