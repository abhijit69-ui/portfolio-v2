import { motion } from 'motion/react';
import { fadeUp } from '../lib/animations';
import type { ToolsType } from '../types';

export default function ToolsCard({ tool }: { tool: ToolsType }) {
  return (
    <motion.div
      variants={fadeUp}
      className='border border-base-content/70 rounded-md flex flex-col items-center 
      justify-center py-4'
    >
      <img src={tool.imgSrc} alt={tool.label} className='w-10 h-10' />

      <p className='font-bold mt-2 text-base-content'>{tool.label}</p>
    </motion.div>
  );
}
