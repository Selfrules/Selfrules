import createSkillFactory from '@/data/_internals/create-skill-factory';

/*

Place where you can define all your skills.
This way, you can ensure one skill has the same name, icon, and URL among all resume sections.

Where skills are used:
- experience-section.data.ts
- portfolio-section.data.ts
- skills-section.data.ts

Usage examples:
skill() — returns skill object without any customizations.
skill({ level: 3 }) — returns a levelled-skill. It can be used only in skills-section.data.ts.
skill({ name: '...' }) — returns skill object with a custom name.
skill({ description: '...' }) — returns skill with a description displayed when user hovers over it.

*/

export const apolloGraphql = createSkillFactory({
  name: 'Apollo GraphQL',
  icon: 'simple-icons:apollographql',
  iconColor: '#311C87',
  url: '',
});

export const astro = createSkillFactory({
  name: 'Astro',
  icon: 'simple-icons:astro',
  iconColor: '#FF5D01',
  url: '',
});

export const chakraUi = createSkillFactory({
  name: 'Chakra UI',
  icon: 'simple-icons:chakraui',
  iconColor: '#319795',
  url: '',
});

export const cypress = createSkillFactory({
  name: 'Cypress',
  icon: 'simple-icons:cypress',
  iconColor: '#17202C',
  url: '',
});

export const eslint = createSkillFactory({
  name: 'ESLint',
  icon: 'simple-icons:eslint',
  iconColor: '#4B32C3',
  url: '',
});

export const firebase = createSkillFactory({
  name: 'Firebase',
  icon: 'simple-icons:firebase',
  iconColor: '#FFCA28',
  url: '',
});

export const jest = createSkillFactory({
  name: 'Jest',
  icon: 'simple-icons:jest',
  iconColor: '#C21325',
  url: '',
});

export const mongoDb = createSkillFactory({
  name: 'MongoDB',
  icon: 'simple-icons:mongodb',
  iconColor: '#47A248',
  url: '',
});

export const nestJs = createSkillFactory({
  name: 'NestJS',
  icon: 'simple-icons:nestjs',
  iconColor: '#E0234E',
  url: '',
});

export const nextJs = createSkillFactory({
  name: 'Next.js',
  icon: 'simple-icons:nextdotjs',
  iconColor: '#000000',
  url: '',
});

export const nx = createSkillFactory({
  name: 'Nx',
  icon: 'simple-icons:nx',
  iconColor: '#143055',
  url: '',
});

export const pnpm = createSkillFactory({
  name: 'pnpm',
  icon: 'simple-icons:pnpm',
  iconColor: '#F69220',
  url: '',
});

export const postgreSql = createSkillFactory({
  name: 'PostgreSQL',
  icon: 'simple-icons:postgresql',
  iconColor: '#4169E1',
  url: '',
});

export const prettier = createSkillFactory({
  name: 'Prettier',
  icon: 'simple-icons:prettier',
  iconColor: '#F7B93E',
  url: '',
});

export const react = createSkillFactory({
  name: 'React.js',
  icon: 'simple-icons:react',
  iconColor: '#61DAFB',
  url: '',
});

export const reactQuery = createSkillFactory({
  name: 'React Query',
  icon: 'simple-icons:reactquery',
  iconColor: '#FF4154',
  url: '',
});

export const sass = createSkillFactory({
  name: 'SASS',
  icon: 'simple-icons:sass',
  iconColor: '#CC6699',
  url: '',
});

export const supabase = createSkillFactory({
  name: 'Supabase',
  icon: 'simple-icons:supabase',
  iconColor: '#3ECF8E',
  url: '',
});

export const tailwindCss = createSkillFactory({
  name: 'Tailwind CSS',
  icon: 'simple-icons:tailwindcss',
  iconColor: '#06B6D4',
  url: '',
});

export const typescript = createSkillFactory({
  name: 'TypeScript',
  icon: 'simple-icons:typescript',
  iconColor: '#3178C6',
  url: '',
});

export const vue = createSkillFactory({
  name: 'Vue.js',
  icon: 'simple-icons:vuedotjs',
  iconColor: '#4FC08D',
  url: '',
});

export const jira = createSkillFactory({
  name: 'Jira',
  icon: 'simple-icons:jira',
  iconColor: '#0052CC',
  url: '',
});

export const confluence = createSkillFactory({
  name: 'Confluence',
  icon: 'simple-icons:confluence',
  iconColor: '#172B4D',
  url: '',
});

export const slack = createSkillFactory({
  name: 'Slack',
  icon: 'simple-icons:slack',
  iconColor: '#4A154B',
  url: '',
});

export const pgoogle = createSkillFactory({
  name: 'Google',
  icon: 'simple-icons:google',
  iconColor: '#4285F4',
  url: '',
});

export const pfacebook = createSkillFactory({
  name: 'Facebook',
  icon: 'simple-icons:facebook',
  iconColor: '#1877F2',
  url: '',
});

export const ptiktok = createSkillFactory({
  name: 'TikTok',
  icon: 'simple-icons:tiktok',
  iconColor: '#000000',
  url: '',
});

export const plinkedin = createSkillFactory({
  name: 'Linkedin',
  icon: 'simple-icons:linkedin',
  iconColor: '#0A66C2',
  url: '',
});

export const javascript = createSkillFactory({
  name: 'JavaScript',
  icon: 'simple-icons:javascript',
  iconColor: '#F7DF1E',
  url: '',
});

export const angularjs = createSkillFactory({
  name: 'AngularJS',
  icon: 'simple-icons:angularjs',
  iconColor: '#E23237',
  url: '',
});

export const github = createSkillFactory({
  name: 'Github',
  icon: 'simple-icons:github',
  iconColor: '#181717',
  url: '',
});

export const sketch = createSkillFactory({
  name: 'Sketch',
  icon: 'simple-icons:sketch',
  iconColor: '#F7B500',
  url: '',
});

export const photoshop = createSkillFactory({
  name: 'Photoshop',
  icon: 'simple-icons:adobephotoshop',
  iconColor: '#31A8FF',
  url: '',
});

export const illustrator = createSkillFactory({
  name: 'Illustrator',
  icon: 'simple-icons:adobeillustrator',
  iconColor: '#FF9A00',
  url: '',
});

export const wordpress = createSkillFactory({
  name: 'Wordpress',
  icon: 'simple-icons:wordpress',
  iconColor: '#21759B',
  url: '',
});

export const html5 = createSkillFactory({
  name: 'HTML5',
  icon: 'simple-icons:html5',
  iconColor: '#E34F26',
  url: '',
});

export const css3 = createSkillFactory({
  name: 'CSS3',
  icon: 'simple-icons:css3',
  iconColor: '#1572B6',
  url: '',
});

export const trello = createSkillFactory({
  name: 'Trello',
  icon: 'simple-icons:trello',
  iconColor: '#0052CC',
  url: '',
});

export const sheets = createSkillFactory({
  name: 'Google Sheets',
  icon: 'simple-icons:googlesheets',
  iconColor: '#34A853',
  url: '',
});

export const calendar = createSkillFactory({
  name: 'Google Calendar',
  icon: 'simple-icons:googlecalendar',
  iconColor: '#4285F4',
  url: '',
});

export const analytics = createSkillFactory({
  name: 'Google Analytics',
  icon: 'simple-icons:googleanalytics',
  iconColor: '#E37400',
  url: '',
});

export const miro = createSkillFactory({
  name: 'Miro',
  icon: 'simple-icons:miro',
  iconColor: '#050038',
  url: '',
});

export const hubspot = createSkillFactory({
  name: 'HubSpot',
  icon: 'simple-icons:hubspot',
  iconColor: '#FF7A59',
  url: '',
});

export const salesforce = createSkillFactory({
  name: 'Salesforce',
  icon: 'simple-icons:salesforce',
  iconColor: '#00A1E0',
  url: '',
});

export const mailchimp = createSkillFactory({
  name: 'MailChimp',
  icon: 'simple-icons:mailchimp',
  iconColor: '#FFE01B',
  url: '',
});

export const teams = createSkillFactory({
  name: 'Microsoft Teams',
  icon: 'simple-icons:microsoftteams',
  iconColor: '#6264A7',
  url: '',
});
