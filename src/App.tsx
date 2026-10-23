import { useEffect, useState } from 'react';
import { Hero, About, TechStack, Projects, Experience, Contact } from './components/sections';

const sections = ['About', 'Tech', 'Projects', 'Experience', 'Contact'];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMenuOpen(false);
    };
    const desktop = window.matchMedia('(min-width: 768px)');
    const closeOnDesktop = () => { if (desktop.matches) setMenuOpen(false); };
    window.addEventListener('keydown', closeOnEscape);
    desktop.addEventListener('change', closeOnDesktop);
    return () => {
      window.removeEventListener('keydown', closeOnEscape);
      desktop.removeEventListener('change', closeOnDesktop);
    };
  }, []);
  return (
    <div className="relative min-h-screen bg-background noise">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <a href="#" className="text-lg font-bold text-primary">
              <span className="text-accent">D</span>ung<span className="text-accent">.</span>
            </a>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8">
              {sections.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-sm text-muted hover:text-primary transition-colors"
                >
                  {item}
                </a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button type="button" aria-label={menuOpen ? "Close navigation" : "Open navigation"} aria-expanded={menuOpen} aria-controls="mobile-navigation" onClick={() => setMenuOpen(!menuOpen)} className="md:hidden p-2 text-muted hover:text-primary">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
        <div id="mobile-navigation" hidden={!menuOpen} className="md:hidden border-t border-white/5 px-4 py-3 bg-background">
          {sections.map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setMenuOpen(false)} className="block py-3 text-muted hover:text-primary">{item}</a>
          ))}
        </div>
      </nav>

      {/* Main Content */}
      <main>
        <Hero />
        <About />
        <TechStack />
        <Projects />
        <Experience />
        <Contact />
      </main>
    </div>
  );
}

export default App;
