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

  const navItems = [
    { label: 'About', id: 'about' },
    { label: 'Skills', id: 'skills' },
    { label: 'Articles', id: 'articles' },
    { label: 'Open Source', id: 'open-source' },
    { label: 'Research Journey', id: 'research-journey' },
    { label: 'Projects', id: 'projects' },
    { label: 'Contact', id: 'contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[#101826]/75 backdrop-blur-md border-b border-[#4a7c9e]/20'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex justify-between items-center">
        <button
          onClick={scrollToTop}
          className="font-mono text-sm sm:text-base text-[#e8eef5] tracking-tight flex items-center"
        >
          <span className="opacity-80">~/tabrez</span>
          <span className="ml-1 text-[#93bdd7] animate-pulse">_</span>
        </button>

        <div className="hidden md:flex gap-6">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() =>
                document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth' })
              }
              className="text-sm font-light tracking-wide text-[#a0afc0] hover:text-[#e8eef5] transition-all duration-300 relative group"
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#93bdd7] group-hover:w-full transition-all duration-500"></span>
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
