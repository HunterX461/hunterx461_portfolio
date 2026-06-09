import { useEffect, useState } from 'react';
import { Menu, X, Github, Linkedin } from 'lucide-react';

const NAV = [
  { label: 'About', id: 'about' },
  { label: 'Skills', id: 'skills' },
  { label: 'Articles', id: 'articles' },
  { label: 'Open Source', id: 'open-source' },
  { label: 'Journey', id: 'research-journey' },
  { label: 'Projects', id: 'projects' },
  { label: 'Contact', id: 'contact' },
];

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string>('home');
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const ids = ['home', ...NAV.map((n) => n.id)];
    const obs = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: '-40% 0px -55% 0px', threshold: [0, 0.1, 0.4, 0.8] }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  const go = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setOpen(false);
  };

  return (
    <>
      {/* Top bar wordmark */}
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          scrolled ? 'pt-3' : 'pt-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-2 group"
            data-cursor="hover"
            aria-label="Home"
          >
            <span className="relative w-7 h-7 rounded-md grad-border grid place-items-center">
              <span className="absolute inset-[1px] rounded-[5px] bg-ink-950" />
              <span className="relative font-mono-tight text-[11px] text-aurora-cyan font-medium">T</span>
            </span>
            <span className="hidden sm:inline font-mono-tight text-sm tracking-tight text-white/85">
              ~/tabrez<span className="text-aurora-cyan animate-blink">_</span>
            </span>
          </button>

          {/* Right cluster on top bar (desktop) */}
          <div className="hidden md:flex items-center gap-2">
            <a
              href="https://github.com/HunterX461"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="w-9 h-9 grid place-items-center rounded-full glass text-white/70 hover:text-white transition"
              data-cursor="hover"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/mohd-tabrez-mukadam-662273296/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="w-9 h-9 grid place-items-center rounded-full glass text-white/70 hover:text-white transition"
              data-cursor="hover"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-1 px-4 py-2 rounded-full font-mono-tight text-[11px] uppercase tracking-[0.18em] glass text-white/85 hover:text-white transition"
              data-cursor="hover"
            >
              Resume
            </a>
          </div>

          {/* Mobile menu trigger */}
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle navigation"
            className="md:hidden w-10 h-10 grid place-items-center rounded-full glass text-white/85"
            data-cursor="hover"
          >
            {open ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </header>

      {/* Floating pill nav (desktop) */}
      <nav className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 hidden md:block">
        <div className="glass-pill px-2 py-1.5 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.7)]">
          <ul className="flex items-center gap-1">
            {NAV.map((item) => {
              const isActive = active === item.id;
              return (
                <li key={item.id}>
                  <button
                    onClick={() => go(item.id)}
                    className={`relative px-4 py-2 rounded-full text-[12px] font-mono-tight uppercase tracking-[0.18em] transition-colors ${
                      isActive ? 'text-white' : 'text-white/55 hover:text-white/85'
                    }`}
                    data-cursor="hover"
                  >
                    {isActive && (
                      <span
                        className="absolute inset-0 rounded-full -z-10"
                        style={{
                          background:
                            'linear-gradient(135deg, rgba(139,92,246,0.35), rgba(34,211,238,0.25))',
                          boxShadow: '0 0 0 1px rgba(139,92,246,0.35), 0 8px 24px -8px rgba(139,92,246,0.5)',
                        }}
                      />
                    )}
                    {item.label}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>

      {/* Mobile sheet */}
      <div
        className={`md:hidden fixed inset-0 z-30 transition-opacity duration-500 ${
          open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div
          className="absolute inset-0 bg-ink-950/70 backdrop-blur-md"
          onClick={() => setOpen(false)}
        />
        <div
          className={`absolute top-24 left-4 right-4 glass-card p-6 transition-transform duration-500 ${
            open ? 'translate-y-0' : '-translate-y-4'
          }`}
        >
          <ul className="grid gap-2">
            {NAV.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => go(item.id)}
                  className={`w-full text-left px-4 py-3 rounded-xl font-mono-tight text-sm uppercase tracking-[0.18em] transition ${
                    active === item.id
                      ? 'bg-white/5 text-white'
                      : 'text-white/70 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-2 mt-4 pt-4 border-t border-white/10">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 text-center px-4 py-2.5 rounded-full font-mono-tight text-xs uppercase tracking-[0.18em] btn-aurora"
            >
              Resume
            </a>
            <a
              href="https://github.com/HunterX461"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="w-10 h-10 grid place-items-center rounded-full glass text-white/85"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/mohd-tabrez-mukadam-662273296/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="w-10 h-10 grid place-items-center rounded-full glass text-white/85"
            >
              <Linkedin className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;
