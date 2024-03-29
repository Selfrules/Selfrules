import type { TestimonialsSection } from '@/types/sections/testimonials-section.types';
import type { ReadonlyDeep } from 'type-fest';
import { linkedin } from '../helpers/links';

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
      author: 'Filippo Ferri',
      relation: 'Product Manager',
      content:
        "Ho avuto il piacere di lavorare a stretto contatto con **Mattia** in *LeadsBridge* e poi in *ActiveProspect* e posso dire con certezza che è un **product owner** eccezionale. Mattia mostra un grande senso di *responsabilità* nei confronti dei risultati e dimostra costantemente una **forte etica del lavoro, attenzione ai dettagli** e una genuina passione per il suo ruolo. La sua dedizione e professionalità sono davvero stimolanti. Inoltre, dà priorità e cura il prodotto, garantendone il successo. La sua **passione per la crescita e l'attenzione ai dettagli** lo rendono una risorsa inestimabile per qualsiasi team.",
      links: [linkedin({ url: 'https://www.linkedin.com/in/fiferri' })],
    },
    {
      image: import('@/assets/favorites/people/christian.jpeg'),
      author: 'Christian Goss',
      relation: 'Product Manager',
      content:
        "Durante il periodo trascorso insieme a *LeadsBridge* e *ActiveProspect*, **Mattia** ha dimostrato di essere un **Product Owner** esperto che eccelleva nel coordinamento di compiti molteplici. Il suo approccio alla **traduzione delle visioni in azioni pratiche** ha guidato il nostro prodotto. L'abile gestione di Mattia del framework **Scrum** e la sua competenza con strumenti come **JIRA** hanno aumentato significativamente la nostra efficienza. La sua capacità di *curare le relazioni* con i *clienti* e gli *stakeholder*, unita alla sua abilità nel dirigere il **ciclo di vita del prodotto**, lo hanno reso parte integrante del nostro team. Raccomando con entusiasmo Mattia per qualsiasi impresa orientata al prodotto.",
      links: [linkedin({ url: 'https://www.linkedin.com/in/christian-goss' })],
    },
  ],
} as const satisfies ReadonlyDeep<TestimonialsSection>;

export default testimonialsSectionData;
