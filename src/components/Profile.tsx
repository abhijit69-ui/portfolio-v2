import { socialLinks } from '../constants';

export default function Profile() {
  return (
    <aside
      className='max-w-3xl border m-6 border-base-300 text-base-content p-6 rounded-lg lg:sticky
    lg:left-0-0 lg:top-6 lg:w-96'
    >
      <div className='flex flex-col gap-4'>
        <div className='flex items-center justify-between gap-x-10'>
          <h1 className='text-3xl text-base-content font-bold'>Abhijit</h1>
          <p className='text-sm text-base-content'>Full-Stack Developer</p>
        </div>

        <img
          src='/avatar.jpg'
          alt='Profile pic'
          className='lg:w-96 rounded-2xl object-cover'
        />

        <div className='mt-6'>
          <p className='text-sm text-base-content/60'>Specialization:</p>
          <p className='text-lg text-base-content capitalize'>
            Full-Stack Web Applications (React, TypeScript, Node.js)
          </p>
        </div>

        <div>
          <p className='text-sm text-base-content/60'>Based In:</p>
          <p className='text-lg text-base-content capitalize'>
            Based in India, AS
          </p>
        </div>

        <div className='flex gap-3 pt-2'>
          {socialLinks.map((social, i) => {
            const Icon = social.icon;

            return (
              <a
                key={i}
                target='_blank'
                href={social.link}
                className='hover:text-primary border-2 border-base-content p-2 rounded-full 
                hover:border-primary transition duration-200'
              >
                <Icon className='size-6' />
              </a>
            );
          })}
        </div>

        <button className='btn btn-primary btn-md mt-2'>Let's Work!</button>
      </div>
    </aside>
  );
}
