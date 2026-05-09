import { motion } from 'motion/react';
import { staggerContainer } from '../lib/animations';
import SectionHeader from './SectionHeader';
import { projectsData } from '../constants';
import ProjectCard from './ProjectCard';

// Use only first 3 projects
const featured = projectsData.slice(0, 3);

export default function Projects() {
  return (
    <motion.section
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true, amount: 0.2 }}
      variants={staggerContainer(0.6)}
      className='mt-30 scroll-mt-10'
      id='projects'
    >
      <SectionHeader title='My featured projects' subtitle='Projects' />

      <motion.div
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer(0.15)}
        className='mt-10 grid grid-cols-1 md:grid-cols-5 grid-rows-[auto] gap-4'
      >
        {/*
          Bento layout on md+:
          ┌────────────────────┬──────────┐
          │  Project 1 (3/5)   │ Project 2│  row 1 — both tall
          │                    │  (2/5)   │
          └────────────────────┴──────────┘
          ┌─────────────────────────────────┐
          │       Project 3 (5/5)           │  row 2 — full width, shorter
          └─────────────────────────────────┘
        */}

        {/* Card 1 — large left */}
        <div className='md:col-span-3 h-72 md:h-80'>
          <ProjectCard {...featured[0]} index={0} />
        </div>

        {/* Card 2 — right column */}
        <div className='md:col-span-2 h-72 md:h-80'>
          <ProjectCard {...featured[1]} index={1} />
        </div>

        {/* Card 3 — full width, shorter */}
        <div className='md:col-span-5 h-64 md:h-72'>
          <ProjectCard {...featured[2]} index={2} />
        </div>
      </motion.div>
    </motion.section>
  );
}
