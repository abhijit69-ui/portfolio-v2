/**
 * Types
 */
import type {
  ExperienceType,
  LinksType,
  ProjectType,
  ServiceType,
  StatsType,
  TestimonialsType,
  ToolsType,
} from '../types';

/**
 * Assets
 */
import {
  Briefcase,
  FileText,
  Globe,
  Home,
  Layers,
  Mail,
  Palette,
  Rocket,
  // Settings,
  Smartphone,
  Twitter,
  User,
} from 'lucide-react';

import { FaLinkedin, FaGithub, FaWhatsapp } from 'react-icons/fa';

const navLinks: LinksType[] = [
  { label: 'Home', link: 'hero', icon: Home },
  {
    label: 'Projects',
    link: 'projects',
    icon: Briefcase,
  },
  { label: 'About', link: 'about', icon: User },
  // {
  //   label: 'Services',
  //   link: '#services',
  //   icon: Settings,
  // },
  { label: 'Resume', link: 'resume', icon: FileText },

  { label: 'Contact', link: 'contact', icon: Mail },
];

const socialLinks: LinksType[] = [
  {
    icon: FaLinkedin,
    label: 'LinkedIn',
    link: 'https://www.linkedin.com/in/abhijitxyz',
  },
  {
    icon: FaGithub,
    label: 'GitHub',
    link: 'https://github.com/abhijit69-ui',
  },
  {
    icon: Twitter,
    label: 'Twitter',
    link: 'https://x.com/abijit0w0',
  },
  {
    icon: FaWhatsapp,
    label: 'WhatsApp',
    link: 'https://wa.me/919395411663',
  },
];

const projectsData: ProjectType[] = [
  {
    imgSrc: '/assets/project1.png',
    title: 'Full-Stack Product Catalogue',
    tags: ['API', 'PERN'],
    projectLink: 'https://lumo-r44p.onrender.com',
  },
  {
    imgSrc: '/assets/project2.png',
    title: 'Responsive Agency Landing Page',
    tags: ['React', 'Tailwind'],
    projectLink: 'https://topmind-care-pi.vercel.app/',
  },
  {
    imgSrc: '/assets/project3.png',
    title: 'Modern Portfolio Website',
    tags: ['API', 'NextJs'],
    projectLink: 'https://abijit-dev.vercel.app/',
  },
  {
    imgSrc: '/assets/project4.png',
    title: 'Full-Stack Note App With Auth',
    tags: ['JWT', 'MERN'],
    projectLink: 'https://kiroku-note.onrender.com/',
  },
];

const education: ExperienceType[] = [
  {
    year: '2020 - 2023',
    title: 'Bachelor of Computer Applications',
    institute: 'Assam Don Bosco University',
    desc: 'Focused on Software Development fundamentals.',
  },
  {
    year: '2024 - 2025',
    title: 'Frontend Development',
    institute: 'Udemy / Online Course',
    desc: 'Learned modern JavaScript, React, and responsive UI patterns through real-world projects.',
  },
  {
    year: '2026',
    title: 'Full-Stack Development (PERN)',
    institute: 'Project-based Learning',
    desc: 'Built full-stack applications using PostgreSQL, Express, React, and Node.js with authentication, CRUD operations, and API integration.',
  },
];

const experience: ExperienceType[] = [
  {
    year: '2023 - 2025',
    title: 'Aviation Security',
    institute: 'InterGlobe Aviation LTD',
    desc: 'Worked in a high-responsibility environment ensuring safety, security, coordination, and operational efficiency. Developed discipline, teamwork, and problem-solving skills.',
  },
];

const tools: ToolsType[] = [
  {
    label: 'React',
    imgSrc: '/assets/tools/react.svg',
  },
  {
    label: 'TanStack Query',
    imgSrc: '/assets/tools/reactquery.svg',
  },
  {
    label: 'Tailwind CSS',
    imgSrc: '/assets/tools/tailwind.svg',
  },
  {
    label: 'JavaScript',
    imgSrc: '/assets/tools/javascript.svg',
  },
  {
    label: 'TypeScript',
    imgSrc: '/assets/tools/typescript.svg',
  },
  {
    label: 'Node.js',
    imgSrc: '/assets/tools/nodejs.svg',
  },
  {
    label: 'Express.js',
    imgSrc: '/assets/tools/expressjs.svg',
  },
  {
    label: 'PostgreSQL',
    imgSrc: '/assets/tools/postgre.svg',
  },
  {
    label: 'Git & GitHub',
    imgSrc: '/assets/tools/git.svg',
  },
];

const services: ServiceType[] = [
  {
    title: 'Brand Identity',
    desc: 'I craft modern visual identities that help brands stand out through strong typography, colors, and minimal design.',
    projects: '32 Projects',
    icon: <Palette className='h-6 w-6 text-green-400' />,
  },
  {
    title: 'UI/UX Design',
    desc: 'Designing clean, intuitive, and user-friendly interfaces that improve user experience and boost conversions.',
    projects: '47 Projects',
    icon: <Layers className='h-6 w-6 text-green-400' />,
  },
  {
    title: 'Web Development',
    desc: 'Building high-performance, SEO-friendly websites using Next.js, Tailwind, and modern web technologies.',
    projects: '58 Projects',
    icon: <Globe className='h-6 w-6 text-green-400' />,
  },
  {
    title: 'Mobile App Design',
    desc: 'Creating pixel-perfect app interfaces optimized for both iOS and Android devices with smooth usability.',
    projects: '21 Projects',
    icon: <Smartphone className='h-6 w-6 text-green-400' />,
  },
  {
    title: 'Product Launch Strategy',
    desc: 'Helping startups prepare their digital products for launch with design systems, marketing pages, and assets.',
    projects: '15 Projects',
    icon: <Rocket className='h-6 w-6 text-green-400' />,
  },
];

const statsData: StatsType[] = [
  {
    number: '30+',
    label: 'Happy Clients',
  },
  {
    number: '05+',
    label: 'Years Of Experience',
  },
  {
    number: '50+',
    label: 'Projects Done',
  },
];

const testimonials: TestimonialsType[] = [
  {
    name: 'Alex Tomato',
    role: 'Brand Manager at Instant Design',
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
    text: 'Working with David was an absolute pleasure. His attention to detail, creative insights, and ability to translate complex ideas into stunning visuals truly set him apart. He consistently went above and beyond to ensure the project exceeded expectations.',
    link: '#',
  },
  {
    name: 'Sara Bloom',
    role: 'Founder at Bloom Agency',
    image: 'https://randomuser.me/api/portraits/women/65.jpg',
    text: 'David brought my brand vision to life better than I could have imagined. He is not only professional and highly skilled but also incredibly responsive and collaborative. Every aspect of the project was handled with precision and creativity.',
    link: '#',
  },
  {
    name: 'John Park',
    role: 'CEO at PixelFlow',
    image: 'https://randomuser.me/api/portraits/men/45.jpg',
    text: 'From UI/UX design to front-end implementation, David handled every detail flawlessly. His problem-solving skills, innovative approach, and dedication made the entire process smooth and enjoyable. I would highly recommend him for any design-driven project.',
    link: '#',
  },
];

export {
  socialLinks,
  projectsData,
  education,
  experience,
  tools,
  services,
  navLinks,
  statsData,
  testimonials,
};
