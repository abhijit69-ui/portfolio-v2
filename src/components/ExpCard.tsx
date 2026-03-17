import type { ExperienceType } from '../types';

export default function ExpCard({ item }: { item: ExperienceType }) {
  return (
    <div className='relative group'>
      <div
        className='absolute -left-7.5 top-2 size-3 bg-base-300 group-hover:bg-primary
      rounded-full transition duration-300'
      ></div>

      <span
        className='text-base-content/70 lining-nums group-hover:text-primary 
        transition duration-300'
      >
        {item.year}
      </span>

      <h3 className='text-lg text-base-content font-semibold mt-1'>
        {item.title}
      </h3>

      <p className='text-sm text-base-content/70 mb-1'>
        Institution:{' '}
        <span className='font-medium text-base-content'>{item.institute}</span>
      </p>

      <p className='text-sm text-base-content/70'>{item.desc}</p>
    </div>
  );
}
