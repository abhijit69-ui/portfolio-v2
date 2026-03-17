import { motion } from 'motion/react';
import { Link } from 'react-scroll';
import { fadeUp, staggerContainer } from '../lib/animations';
import { SparkleIcon } from 'lucide-react';

export default function Hero() {
  return (
    <motion.section
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true, amount: 0.3 }}
      variants={staggerContainer(0)}
      className='pt-20'
      id='hero'
    >
      <motion.p
        variants={fadeUp}
        className='flex items-center text-base-content justify-center py-1 gap-2 border border-base-300
        rounded-sm w-32'
      >
        <SparkleIcon size={15} />
        <span>Introduction</span>
      </motion.p>

      <motion.h1
        variants={fadeUp}
        className='text-4xl text-base-content md:text-5xl lg:text-6xl font-semibold capitalize mt-2 max-w-3xl
        md:leading-16'
      >
        Hi, I'm <span className='text-primary'>Abhijit</span> — I build modern
        full-stack web applications.
      </motion.h1>

      <motion.p
        variants={fadeUp}
        className='text-2xl text-base-content/70 lg:text-3xl font-semibold capitalize mt-3 max-w-3xl
        md:leading-10'
      >
        I design and build scalable, user-friendly web apps with modern
        technologies.
      </motion.p>

      <motion.div variants={fadeUp} className='mt-5 flex gap-2'>
        <button className='btn btn-primary'>
          <Link to='projects' smooth={true} duration={1000} offset={-80}>
            My projects
          </Link>
        </button>

        <a
          href='/abijitnath-resume.pdf'
          target='_blank'
          className='btn btn-outline btn-primary'
        >
          Download CV
        </a>
      </motion.div>
    </motion.section>
  );
}
