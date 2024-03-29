import type { EducationSection } from '@/types/sections/education-section.types';
import type { ReadonlyDeep } from 'type-fest';
import { website } from '../helpers/links';

const educationSectionData = {
  config: {
    title: 'Educazione',
    slug: 'education',
    icon: 'fa6-solid:graduation-cap',
    visible: true,
  },
  diplomas: [
    {
      title: 'Google Project Management: Specialization',
      institution: 'Google',
      image: import('@/assets/logos/GCC_badge_PGM.png'),
      dates: [new Date('2023.06'), null],
      description:
        'Foundations of Project Management, Applying Project Management in the Real World, Project Execution: Running the Project, Project Planning: Putting It All Together, Agile Project Management, Project Initiation: Starting a Successful Project.',
      links: [website({ url: 'https://coursera.org/share/52cfcd408ca424b9fba1b2bd85baef7c' })],
    },
    {
      title: 'Certified Scrum Product Owner',
      institution: 'Scrum Alliance, Inc.',
      image: import('@/assets/logos/badge-7224.png'),
      dates: [new Date('2019.04'), null],
      description: '',
      links: [website({ url: 'https://bcert.me/sdlbrqfwq' })],
    },
    {
      title: 'Certified ScrumMaster',
      institution: 'Scrum Alliance, Inc.',
      image: import('@/assets/logos/badge-7227.png'),
      dates: [new Date('2020.05'), null],
      description: '',
      links: [website({ url: 'https://bcert.me/sproxorxx' })],
    },
    {
      title: 'Perito Informatico',
      institution: 'Istituto Superiore Primo Levi',
      image: import('@/assets/logos/diploma.png'),
      dates: [new Date('2002.10'), new Date('2008.06')],
      description: 'Diploma di Perito Informatico, Informatica',
      links: [],
    },
    {
      title: 'Master in Web Development',
      institution: 'Artoo Campus',
      image: import('@/assets/logos/master.png'),
      dates: [new Date('2016.01'), new Date('2016.07')],
      description: 'Master in Web & Mobile Development, Sviluppo di App Web & Mobile',
      links: [],
    },
  ],
} as const satisfies ReadonlyDeep<EducationSection>;

export default educationSectionData;
