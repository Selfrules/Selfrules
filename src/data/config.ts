import type { Config } from '@/types/data';
import { it } from 'date-fns/locale';
import type { ReadonlyDeep } from 'type-fest';

const config = {
  i18n: {
    locale: it,
    dateFormat: 'MMMM yyyy',
    translations: {
      now: 'ora',
    },
  },
  meta: {
    title: 'Mattia Filippo De Luca - Product Manager | Product Owner',
    description:
      "Sono Mattia, un visionario esperto di Product Management e un maestro nell'arte del Product Ownership.",
    faviconPath: 'public/favicons/favicon.ico',
    ogImage: '/src/assets/logos/selfrules_logo_mad.png',
    keywords:
      'Product Owner, Product Manager, Project Manager, Agile, Leadership, Facilitazione, Esperienza utente, Sviluppo di prodotti',
  },
  pdf: {
    footer:
      'Acconsento al trattamento dei miei dati personali contenuti nella mia candidatura ai fini del processo di assunzione.',
  },
} as const satisfies ReadonlyDeep<Config>;

export default config;
