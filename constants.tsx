
import { Project, SocialLink } from './types';

export interface Review {
  id: string;
  name: string;
  role: string;
  content: string;
  avatar: string;
}

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Prismatic Realities',
    category: 'Digital Illustration',
    description: 'A study in color theory and abstract portraiture.',
    imageUrl: 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?auto=format&fit=crop&q=80&w=1200',
    color: '#EC4899'
  },
  {
    id: '2',
    title: 'Kinetic Flow',
    category: 'Motion Graphics',
    description: 'Dynamic animation system for liquid interfaces.',
    imageUrl: 'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&q=80&w=1200',
    color: '#06B6D4'
  },
  {
    id: '3',
    title: 'Velvet Dreams',
    category: 'Visual Design',
    description: 'High-fashion editorial layout for the modern era.',
    imageUrl: 'https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?auto=format&fit=crop&q=80&w=1200',
    color: '#F59E0B'
  },
  {
    id: '4',
    title: 'Cyber Nature',
    category: 'Mixed Media',
    description: 'Where biology meets digital glitch aesthetics.',
    imageUrl: 'https://images.unsplash.com/photo-1549490349-8643362247b5?auto=format&fit=crop&q=80&w=1200',
    color: '#8B5CF6'
  }
];

export const REVIEWS: Review[] = [
  {
    id: '1',
    name: 'Sarah Jenkins',
    role: 'Creative Director at Vibe',
    content: "Drew's ability to translate complex emotions into digital motion is unparalleled. A true artist of the modern age.",
    avatar: 'https://i.pravatar.cc/150?u=sarah'
  },
  {
    id: '2',
    name: 'Marcus Thorne',
    role: 'Founder of NeoTech',
    content: "The glassmorphism and depth Drew brought to our brand identity completely changed how our users perceive us.",
    avatar: 'https://i.pravatar.cc/150?u=marcus'
  },
  {
    id: '3',
    name: 'Elena Rodriguez',
    role: 'Principal Architect',
    content: "Working with Drew is like watching a master painter. The attention to detail in every transition is breathtaking.",
    avatar: 'https://i.pravatar.cc/150?u=elena'
  }
];

export const SOCIAL_LINKS: SocialLink[] = [
  { name: 'Instagram', url: 'https://instagram.com/_drewsart_', icon: 'Insta' },
  { name: 'Behance', url: 'https://behance.net/andrewfagbemi', icon: 'Be' },
  { name: 'Dribbble', url: 'https://dribbble.com', icon: 'Dr' },
  { name: 'Twitter', url: 'https://twitter.com/drewsart05?s=21', icon: 'Tw' }
];
