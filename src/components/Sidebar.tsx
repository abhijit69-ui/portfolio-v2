import { useState } from 'react';
import { navLinks, socialLinks } from '../constants';
import { Link } from 'react-scroll';

export default function Sidebar() {
  const [active, setActive] = useState('#hero');
  const closeDrawer = () => {
    const checkbox = document.getElementById('my-drawer-5') as HTMLInputElement;
    if (checkbox) checkbox.checked = false;
  };
  return (
    <div className='drawer drawer-end lg:hidden'>
      <input id='my-drawer-5' type='checkbox' className='drawer-toggle' />
      <div className='drawer-content'>
        {/* Page content here */}
        <label
          htmlFor='my-drawer-5'
          className='drawer-button btn btn-primary btn-square rounded-full m-4 fixed top-0 right-0 z-50 border-2
          hover:border-base-200 '
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            className='inline-block h-5 w-5 stroke-current'
          >
            {' '}
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M4 6h16M4 12h16M4 18h16'
            ></path>{' '}
          </svg>
        </label>
      </div>

      {/* content */}
      <div className='drawer-side'>
        <label
          htmlFor='my-drawer-5'
          aria-label='close sidebar'
          className='drawer-overlay'
        ></label>
        <ul className='menu bg-base-200 min-h-full w-84 p-4'>
          <h1 className='text-lg text-base-content font-bold py-2 px-3'>
            Menu
          </h1>
          {/* Sidebar content here */}

          <nav className='flex flex-col gap-6 py-2 px-3 mt-4'>
            {navLinks.map((link) => {
              const Icon = link.icon;

              return (
                <Link
                  to={link.link}
                  key={link.label}
                  onClick={() => {
                    setActive(link.link);
                    closeDrawer();
                  }}
                  className={`flex items-center gap-2 text-base text-base-content font-semibold transition-colors duration-200 
                    ${active === link.link ? 'text-primary' : 'hover:text-primary'}`}
                >
                  <Icon className='size-5' /> {link.label}
                </Link>
              );
            })}
          </nav>

          <div className='mt-30 px-3'>
            <p className='py-2 text-base text-base-content font-bold'>
              Socials
            </p>

            <div className='flex gap-3'>
              {socialLinks.map((social, i) => {
                const Icon = social.icon;
                return (
                  <a
                    href={social.link}
                    key={i}
                    className='border-2 border-base-content p-2 text-base-content rounded-full hover:text-primary hover:border-primary transition duration-200'
                  >
                    <Icon className='size-4' />
                  </a>
                );
              })}
            </div>
          </div>
        </ul>
      </div>
    </div>
  );
}
