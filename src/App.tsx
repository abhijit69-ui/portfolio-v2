import { useEffect } from 'react';
import Hero from './components/Hero';
import Projects from './components/Projects';
import About from './components/About';
import Resume from './components/Resume';
import Contact from './components/Contact';
import { lenis } from './lib/lenis';

export default function App() {
  useEffect(() => {
    function raf(time: number) {
      lenis.raf(time);

      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);
  return (
    <main className='flex flex-col container max-w-4xl mx-auto p-10 lg:pr-10 lg:pl-0 lg:max-w-6xl'>
      <Hero />
      <Projects />
      <About />
      <Resume />
      <Contact />
    </main>
  );
}
