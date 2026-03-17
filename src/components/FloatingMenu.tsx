import { useState } from 'react';
import { navLinks } from '../constants';
import { Link } from 'react-scroll';
import ThemeToggle from './ThemeToggle';

export default function FloatingMenu() {
  const [active, setActive] = useState('#hero');

  return (
    <div
      className='menu bg-base-100 fixed right-10 top-1/2 -translate-y-1/2 border border-base-300 pt-5 rounded-full hidden z-10
    lg:block'
    >
      {navLinks.map((link) => {
        const Icon = link.icon;

        return (
          <Link
            to={link.link}
            smooth={true}
            duration={1000}
            offset={-80}
            key={link.label}
            onClick={() => setActive(link.link)}
            className={` flex items-center gap-2 text-base-content hover:text-primary transition-colors duration-200 mb-6 px-2 cursor-pointer
            ${active === link.link && 'text-primary'}`}
          >
            <Icon className='size-5' />
          </Link>
        );
      })}
      <ThemeToggle />
    </div>
  );
}
