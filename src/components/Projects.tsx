import { motion } from 'motion/react';
import { staggerContainer } from '../lib/animations';
import SectionHeader from './SectionHeader';
import { projectsData } from '../constants';
import ProjectCard from './ProjectCard';

export default function Projects() {
  return (
    <motion.section
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true, amount: 0.3 }}
      variants={staggerContainer(0.6)}
      className='mt-30 scroll-mt-10'
      id='projects'
    >
      <SectionHeader title='My featured projects' subtitle='Projects' />

      <motion.div
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer(0.5)}
        className='grid md:grid-cols-2 gap-10 mt-10'
      >
        {projectsData.map((project, i) => (
          <ProjectCard
            key={i}
            imgSrc={project.imgSrc}
            title={project.title}
            tags={project.tags}
            projectLink={project.projectLink}
          />
        ))}
      </motion.div>
    </motion.section>
  );
}
