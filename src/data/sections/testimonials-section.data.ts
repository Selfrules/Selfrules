import type { TestimonialsSection } from '@/types/sections/testimonials-section.types';
import type { ReadonlyDeep } from 'type-fest';
import { github, linkedin, website } from '../helpers/links';

const testimonialsSectionData = {
  config: {
    title: 'Referenze',
    slug: 'testimonials',
    icon: 'fa6-solid:comment',
    visible: true,
  },
  testimonials: [
    {
      image: import('@/assets/favorites/people/matte.jpeg'),
      author: 'Matteo Leggieri',
      relation: 'Director of Engineers at LeadsBridge',
      content:
        "Ho avuto l'opportunità di lavorare con **Mattia De Luca** nel ruolo di **Product Owner** presso *ActiveProspect Inc.* La sua abilità nel guidare la nostra *strategia di prodotto*, coordinando attivamente i team di *sviluppo e UX/UI*, ha avuto un impatto significativo sul successo di *LeadsBridge*.Mattia è anche un ottimo facilitatore e un ottimo comunicatore. E' stato un fruttuoso partecipare agli incontri di pianificazione delle iterazioni, le sessioni di presentazione dei prodotti e le retrospettive che ha facilitato perché tutte le persone coinvolte erano incoraggiate dalla sua energia positiva e dal modo in cui era solito **moderare discussioni sane**. Mi è piaciuto il suo *approccio innovativo* per ottenere feedback da tutti i teams coinvolti con sessioni di feedback innovative. E' stato ugualmente *appassionato del prodotto, delle persone e del processo agile* ed è stata una **grande risorsa** per il team di sviluppo. Lo raccomando senza esitazione come persona molto qualificata.",
      links: [linkedin({ url: 'https://www.linkedin.com/in/matteo-leggieri-7a39782a/' })],
    },
  ],
} as const satisfies ReadonlyDeep<TestimonialsSection>;

export default testimonialsSectionData;
