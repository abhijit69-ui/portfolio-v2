import { motion } from 'motion/react';
import { fadeUp, staggerContainer } from '../lib/animations';
import SectionHeader from './SectionHeader';
import { education, experience, tools } from '../constants';
import ExpCard from './ExpCard';
import ToolsCard from './ToolsCard';

export default function Resume() {
  return (
    <motion.section
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true, amount: 0.3 }}
      variants={staggerContainer(0)}
      className='mt-30 scroll-mt-10'
      id='resume'
    >
      <SectionHeader
        title='Education & Professional Experience'
        subtitle='Resume'
      />

      <motion.p variants={fadeUp} className='mt-4 text-base-content'>
        My journey combines formal education, real-world work experience, and
        self-driven learning. After gaining professional experience outside
        tech, I transitioned into development and focused on building full-stack
        applications through hands-on projects.
      </motion.p>

      <div className='grid gap-x-10 my-16 md:grid-cols-2'>
        <motion.div variants={fadeUp} className='mb-16 md:mb-0'>
          <h2 className='text-3xl font-semibold mb-8'>Education</h2>

          <div className='space-y-8 border-l border-base-content/70 pl-6'>
            {education.map((item, i) => (
              <ExpCard key={i} item={item} />
            ))}
          </div>
        </motion.div>

        <motion.div variants={fadeUp}>
          <h2 className='text-3xl font-semibold mb-8'>Work Experience</h2>

          <div className='space-y-8 border-l border-base-content/70 pl-6'>
            {experience.map((item, i) => (
              <ExpCard key={i} item={item} />
            ))}
          </div>
        </motion.div>
      </div>

      <div className='my-16'>
        <motion.h2
          variants={fadeUp}
          className='text-3xl font-semibold mb-8 capitalize'
        >
          Tools & Technologies
        </motion.h2>

        <motion.div
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer(0.5)}
          className='grid grid-cols-2 gap-5 sm:grid-cols-3'
        >
          {tools.map((tool, i) => (
            <ToolsCard key={i} tool={tool} />
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
