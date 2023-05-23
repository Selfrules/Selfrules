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
      relation: 'Director of Engineers',
      content:
        "Ho avuto l'opportunità di lavorare con **Mattia De Luca** nel ruolo di **Product Owner** presso *ActiveProspect Inc.* La sua abilità nel guidare la nostra *strategia di prodotto*, coordinando attivamente i team di *sviluppo e UX/UI*, ha avuto un impatto significativo sul successo di *LeadsBridge*.Mattia è anche un ottimo facilitatore e un ottimo comunicatore. E' stato un fruttuoso partecipare agli incontri di pianificazione delle iterazioni, le sessioni di presentazione dei prodotti e le retrospettive che ha facilitato perché tutte le persone coinvolte erano incoraggiate dalla sua energia positiva e dal modo in cui era solito **moderare discussioni sane**. Mi è piaciuto il suo *approccio innovativo* per ottenere feedback da tutti i teams coinvolti con sessioni di feedback innovative. E' stato ugualmente *appassionato del prodotto, delle persone e del processo agile* ed è stata una **grande risorsa** per il team di sviluppo. Lo raccomando senza esitazione come persona molto qualificata.",
      links: [linkedin({ url: 'https://www.linkedin.com/in/matteo-leggieri-7a39782a/' })],
    },
    {
      image: import('@/assets/favorites/people/filo.jpeg'),
      author: 'Matteo Leggieri',
      relation: 'Product Manager',
      content:
        "Ho avuto il piacere di lavorare a stretto contatto con **Mattia** in *LeadsBridge* e poi in *ActiveProspect* e posso dire con certezza che è un **product owner** eccezionale. Mattia mostra un grande senso di *responsabilità* nei confronti dei risultati e dimostra costantemente una **forte etica del lavoro, attenzione ai dettagli** e una genuina passione per il suo ruolo. La sua dedizione e professionalità sono davvero stimolanti. Inoltre, dà priorità e cura il prodotto, garantendone il successo. La sua **passione per la crescita e l'attenzione ai dettagli** lo rendono una risorsa inestimabile per qualsiasi team.",
      links: [linkedin({ url: 'https://www.linkedin.com/in/fiferri' })],
    },
  ],
} as const satisfies ReadonlyDeep<TestimonialsSection>;

export default testimonialsSectionData;
