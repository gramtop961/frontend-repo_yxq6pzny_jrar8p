import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import { useEffect } from 'react';

function App() {
  // Enable smooth scrolling behavior
  useEffect(() => {
    const html = document.querySelector('html');
    if (html) html.style.scrollBehavior = 'smooth';
    return () => {
      if (html) html.style.scrollBehavior = '';
    };
  }, []);

  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* Simple sticky navigation */}
      <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 border-b border-slate-200">
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#home" className="font-semibold">DSD</a>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#about" className="hover:text-slate-600">About</a>
            <a href="#projects" className="hover:text-slate-600">Projects</a>
            <a href="#contact" className="hover:text-slate-600">Contact</a>
          </nav>
          <a href="#contact" className="md:hidden text-sm underline">Contact</a>
        </div>
      </header>

      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>

      <footer className="border-t border-slate-200">
        <div className="container mx-auto px-6 py-6 text-center text-sm text-slate-500">
          © {new Date().getFullYear()} Dhirendra Singh Dhami. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

export default App;
