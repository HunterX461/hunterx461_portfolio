import { useEffect, useState } from 'react';

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navItems = ['About', 'Skills', 'Projects', 'Certifications', 'Contact'];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-slate-900/80 backdrop-blur-md border-b border-blue-500/10'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex justify-between items-center">
        {/* Terminal Identity */}
        <button
          onClick={scrollToTop}
          className="font-mono text-sm sm:text-base text-blue-100 tracking-tight flex items-center"
        >
          <span className="opacity-80">~/tabrez</span>
          <span className="ml-1 text-blue-400 animate-pulse">_</span>
        </button>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-8">
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() =>
                document
                  .getElementById(item.toLowerCase())
                  ?.scrollIntoView({ behavior: 'smooth' })
              }
              className="text-sm font-light tracking-wide text-blue-200/70 hover:text-blue-300 transition-all duration-300 relative group"
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-blue-400 group-hover:w-full transition-all duration-500"></span>
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
