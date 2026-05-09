import { motion } from 'motion/react';
import { fadeUp } from '../lib/animations';
import type { ProjectType } from '../types';
import { ArrowUpRight } from 'lucide-react';

interface ProjectCardProps extends ProjectType {
  index: number;
}

export default function ProjectCard({
  imgSrc,
  projectLink,
  tags,
  title,
  index,
}: ProjectCardProps) {
  const num = String(index + 1).padStart(2, '0');

  return (
    <motion.a
      variants={fadeUp}
      href={projectLink}
      target='_blank'
      rel='noopener noreferrer'
      className='relative z-0 group overflow-hidden rounded-2xl block h-full min-h-60 cursor-pointer'
    >
      {/* Background image */}
      <figure className='absolute inset-0'>
        <img
          src={imgSrc}
          alt={title}
          className='w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105'
        />
        {/* base scrim always visible */}
        <div className='absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-black/10' />
        {/* hover scrim */}
        <div className='absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500' />
      </figure>

      {/* Project number — top left */}
      <span className='absolute top-4 left-4 text-xs font-mono text-white/40 select-none z-10'>
        {num}
      </span>

      {/* Live indicator — top right */}
      <span className='absolute top-4 right-4 z-10 flex items-center gap-1.5 bg-black/40 backdrop-blur-sm border border-white/10 rounded-full px-2.5 py-1 text-[11px] font-medium text-white/80'>
        <span className='w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse' />
        Live
      </span>

      {/* Bottom info strip */}
      <div className='absolute bottom-0 left-0 right-0 z-10 p-4 translate-y-1 group-hover:translate-y-0 transition-transform duration-300'>
        {/* Tags */}
        <div className='flex flex-wrap gap-1.5 mb-2.5'>
          {tags.map((tag, i) => (
            <span
              key={i}
              className='bg-white/10 backdrop-blur-sm border border-white/10 text-white/70 text-[10px] font-medium px-2 py-0.5 rounded-full'
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Title row */}
        <div className='flex items-end justify-between gap-3'>
          <h3 className='text-white font-semibold text-sm leading-snug drop-shadow'>
            {title}
          </h3>
          <span className='shrink-0 flex items-center justify-center w-7 h-7 rounded-full bg-white/10 backdrop-blur-sm border border-white/15 text-white opacity-0 group-hover:opacity-100 transition-all duration-300 -rotate-45 group-hover:rotate-0'>
            <ArrowUpRight className='w-3.5 h-3.5' />
          </span>
        </div>
      </div>
    </motion.a>
  );
}
