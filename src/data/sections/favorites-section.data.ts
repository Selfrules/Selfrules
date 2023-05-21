import type { FavoritesSection } from '@/types/sections/favorites-section.types';
import type { ReadonlyDeep } from 'type-fest';

const favoritesSectionData = {
  config: {
    title: 'Le mie scelte',
    slug: 'favorites',
    icon: 'fa6-solid:star',
    visible: true,
  },
  books: {
    title: 'Libri che ho letto',
    data: [
      {
        image: import('@/assets/favorites/books/inspired.jpg'),
        title: 'Inspired: How to Create Tech Products Customers Love',
        author: 'Marty Cagan',
        url: 'https://www.goodreads.com/book/show/35249663-inspired',
      },
      {
        image: import('@/assets/favorites/books/escaping-the-build-trap.jpg'),
        title: 'Escaping the Build Trap: How Effective Product Management Creates Real Value',
        author: 'Melissa Perri',
        url: 'https://www.goodreads.com/book/show/42611483-escaping-the-build-trap',
      },
      {
        image: import('@/assets/favorites/books/user-story-mapping.jpg'),
        title: 'User Story Mapping: Discover the Whole Story, Build the Right Product',
        author: 'Jeff Patton, Peter Economy',
        url: 'https://www.goodreads.com/book/show/22221112-user-story-mapping',
      },
      {
        image: import('@/assets/favorites/books/product-mastery.jpg'),
        title: 'Product Mastery: From Good To Great Product Ownership',
        author: 'Geoff Watts',
        url: 'https://www.goodreads.com/book/show/34323593-product-mastery',
      },
    ],
  },
  people: {
    title: 'Fonti di ispirazione',
    data: [
      {
        image: import('@/assets/favorites/people/marty-cagan.jpeg'),
        name: 'Marty Cagan',
        url: 'https://www.svpg.com/team/marty-cagan/',
      },
      {
        image: import('@/assets/favorites/people/melissa-perri.jpeg'),
        name: 'Melissa Perri',
        url: 'https://melissaperri.com/',
      },
      {
        image: import('@/assets/favorites/people/ken-norton.jpeg'),
        name: 'Ken Norton',
        url: 'https://www.bringthedonuts.com/',
      },
      {
        image: import('@/assets/favorites/people/jeff-patton.jpeg'),
        name: 'Jeff Patton',
        url: 'https://jpattonassociates.com/',
      },
      {
        image: import('@/assets/favorites/people/roman-pichler.jpeg'),
        name: 'Roman Pichler',
        url: 'https://www.romanpichler.com/',
      },
      {
        image: import('@/assets/favorites/people/geoff-watts.jpeg'),
        name: 'Geoff Watts',
        url: 'https://www.inspectandadapt.com/',
      },
    ],
  },
  // videos: {
  //   title: 'Videos I watched',
  //   data: [
  //     {
  //       image: import('@/assets/favorites/videos/video-1.jpeg'),
  //       title: 'Building Resilient Frontend Architecture • Monica Lent • GOTO 2019',
  //       url: 'https://youtu.be/TqfbAXCCVwE',
  //     },
  //     {
  //       image: import('@/assets/favorites/videos/video-2.jpeg'),
  //       title: 'Scaling Yourself • Scott Hanselman • GOTO 2012',
  //       url: 'https://youtu.be/FS1mnISoG7U',
  //     },
  //     {
  //       image: import('@/assets/favorites/videos/video-3.jpeg'),
  //       title: "Why Isn't Functional Programming the Norm? - Richard Feldman",
  //       url: 'https://youtu.be/QyJZzq0v7Z4',
  //     },
  //   ],
  // },
  // medias: {
  //   title: 'Media I follow',
  //   data: [
  //     {
  //       image: import('@/assets/favorites/media/media-1.jpeg'),
  //       title: 'Fireship.io',
  //       type: 'YouTube channel',
  //       url: 'https://www.youtube.com/c/Fireship',
  //     },
  //     {
  //       image: import('@/assets/favorites/media/media-2.jpeg'),
  //       title: 'Healthy Software Developer',
  //       type: 'YouTube channel',
  //       url: 'https://www.youtube.com/channel/UCfe_znKY1ukrqlGActlFmaQ',
  //     },
  //     {
  //       image: import('@/assets/favorites/media/media-3.png'),
  //       title: 'Bytes',
  //       type: 'Newsletter',
  //       url: 'https://bytes.dev/',
  //     },
  //     {
  //       image: import('@/assets/favorites/media/media-4.png'),
  //       title: 'TypeScript Weekly',
  //       type: 'Newsletter',
  //       url: 'https://typescript-weekly.com/',
  //     },
  //     {
  //       image: import('@/assets/favorites/media/media-5.jpeg'),
  //       title: 'Front End Happy Hour',
  //       type: 'Podcast',
  //       url: 'https://www.frontendhappyhour.com/',
  //     },
  //     {
  //       image: import('@/assets/favorites/media/media-6.webp'),
  //       title: '.cult by Honeypot',
  //       type: 'Blog',
  //       url: 'https://cult.honeypot.io/',
  //     },
  //   ],
  // },
} as const satisfies ReadonlyDeep<FavoritesSection>;

export default favoritesSectionData;
