import { name, socialLinks, profilePicture } from './config';

export const heroData = {
  name,
  title: 'Full-Stack Developer',
  description: 'I build scalable web applications and transform raw data into meaningful insights that drive business success.',
  profilePicture,
  skills: [
    'HTML - SEO/SEM',
    'ReactJS',
    'NodeJs',
    'MySQL',
    'React Native',
    'TypeScript',
    'ExpressJS',
    'NextJS',
    'GraphQL',
    'Redux',
    'Apollo Server',
    'GCP',
    'MongoDB'
  ],
  contact: {
    github: socialLinks[0].url,
    linkedin: socialLinks[1].url,
    email: socialLinks[2].url
  }
};
