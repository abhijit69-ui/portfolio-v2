import { useEffect, useState } from 'react';
import { Sun, Moon } from 'lucide-react';

type ThemeToggleProps = {
  showLabel?: boolean;
};

export default function ThemeToggle({ showLabel = false }: ThemeToggleProps) {
  const [theme, setTheme] = useState<'lemonade' | 'abyss'>(() => {
    if (typeof window !== 'undefined') {
      return (
        (localStorage.getItem('theme') as 'lemonade' | 'abyss') || 'lemonade'
      );
    }
    return 'lemonade';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'lemonade' ? 'abyss' : 'lemonade'));
  };

  return (
    <button
      onClick={toggleTheme}
      className={`flex items-center ${
        showLabel ? 'gap-2  py-2' : 'justify-center px-2 mb-6'
      } text-base-content font-semibold hover:text-primary transition-colors duration-200`}
    >
      {theme === 'lemonade' ? (
        <Moon className='size-5' />
      ) : (
        <Sun className='size-5' />
      )}

      {showLabel && (
        <span className='text-base font-semibold'>
          {theme === 'lemonade' ? 'Dark Mode' : 'Light Mode'}
        </span>
      )}
    </button>
  );
}
