import { motion } from 'motion/react';
import { fadeUp } from '../lib/animations';
import type { ProjectType } from '../types';

export default function ProjectCard({
  imgSrc,
  projectLink,
  tags,
  title,
}: ProjectType) {
  return (
    <>
      <motion.div variants={fadeUp} className='relative group'>
        <figure className='overflow-hidden rounded-md w-full h-64'>
          <img
            src={imgSrc}
            alt={title}
            className='w-full h-full object-cover rounded-md transition duration-500 group-hover:scale-110'
          />
        </figure>

        {/* Overlay */}
        <div
          className='absolute inset-0 flex flex-col justify-end p-3 
    bg-linear-to-t from-black/70 via-black/20 to-transparent rounded-md'
        >
          {/* Title + Live */}
          <div className='flex items-center justify-between'>
            <a href={projectLink} target='_blank'>
              <h3 className='text-base-100 font-semibold text-md hover:text-primary drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]'>
                {title}
              </h3>
            </a>

            <a
              href={projectLink}
              target='_blank'
              className='text-xs btn btn-outline btn-xs text-red-500 rounded-md'
            >
              Live
            </a>
          </div>

          {/* Tags */}
          <div className='flex flex-wrap gap-2 mt-2'>
            {tags.map((tag, i) => (
              <span
                key={i}
                className='bg-base-200/80 text-base-content py-1 px-2 rounded-sm text-xs'
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </>
  );
}
