import { motion } from 'motion/react';
import { fadeUp, staggerContainer } from '../lib/animations';
import SectionHeader from './SectionHeader';

export default function About() {
  return (
    <motion.section
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true, amount: 0.3 }}
      variants={staggerContainer(0.6)}
      className='mt-30 scroll-mt-10'
      id='about'
    >
      <SectionHeader
        subtitle='About'
        title='Turning ideas into real-world full-stack applications'
      />

      <motion.p variants={fadeUp} className='mt-4 text-base-content'>
        I'm a self-taught JavaScript developer focused on building modern
        full-stack web applications using React, TypeScript, and Node.js. I've
        built real-world projects involving authentication, APIs, and database
        integration, and I'm continuously improving through hands-on
        development.
      </motion.p>
      <motion.p variants={fadeUp} className='mt-2 text-base-content'>
        After graduation, I spent two years working in aviation due to financial
        responsibilities and initial uncertainty. Eventually, I chose to take a
        calculated risk and transition into development. Since then, I’ve been
        focused on learning, building real-world projects, and actively working
        towards a full-stack developer role.
      </motion.p>

      <motion.div variants={fadeUp} transition={{ delay: 0.2 }}>
        <button className='btn btn-primary mt-5'>Contact Me</button>
      </motion.div>
    </motion.section>
  );
}
