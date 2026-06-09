import { Github, Linkedin, BookOpen, Mail, ArrowUp } from 'lucide-react';

const LINKS = [
  { label: 'About', id: 'about' },
  { label: 'Skills', id: 'skills' },
  { label: 'Articles', id: 'articles' },
  { label: 'Open Source', id: 'open-source' },
  { label: 'Journey', id: 'research-journey' },
  { label: 'Projects', id: 'projects' },
  { label: 'Contact', id: 'contact' },
];

const SOCIALS = [
  { label: 'GitHub', href: 'https://github.com/HunterX461', icon: Github },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/mohd-tabrez-mukadam-662273296/',
    icon: Linkedin,
  },
  { label: 'Medium', href: 'https://medium.com/@HunterX461', icon: BookOpen },
  { label: 'Email', href: 'mailto:tabrezmukadam57@gmail.com', icon: Mail },
];

const Footer = () => {
  return (
    <footer className="relative pt-20 pb-10 mt-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Giant wordmark */}
        <div className="relative mb-12">
          <div
            className="font-display italic text-[18vw] sm:text-[15vw] lg:text-[180px] leading-[0.85] tracking-tight aurora-text select-none pointer-events-none"
            aria-hidden
          >
            HunterX461
          </div>
          <div
            className="absolute -top-3 right-0 sm:right-4 font-mono-tight text-[10px] uppercase tracking-[0.32em] text-white/40"
            aria-hidden
          >
            // signature
          </div>
        </div>

        <div className="grad-border">
          <div className="p-6 sm:p-8 rounded-[19px] flex flex-col lg:flex-row items-start lg:items-center gap-8 justify-between">
            {/* Quick links */}
            <div className="flex flex-wrap gap-x-5 gap-y-2">
              {LINKS.map((link) => (
                <button
                  key={link.id}
                  onClick={() => document.getElementById(link.id)?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-xs sm:text-sm text-white/55 hover:text-white transition underline-grad font-mono-tight tracking-wide"
                  data-cursor="hover"
                >
                  {link.label}
                </button>
              ))}
            </div>

            {/* Socials + scroll-top */}
            <div className="flex items-center gap-2">
              {SOCIALS.map((s) => {
                const Icon = s.icon;
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    target={s.label === 'Email' ? undefined : '_blank'}
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="w-10 h-10 grid place-items-center rounded-full glass text-white/70 hover:text-white transition"
                    data-cursor="hover"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                );
              })}
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                aria-label="Back to top"
                className="ml-1 w-10 h-10 grid place-items-center rounded-full bg-gradient-to-br from-aurora-violet/40 to-aurora-cyan/30 border border-white/15 text-white transition hover:brightness-125"
                data-cursor="hover"
              >
                <ArrowUp className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-3 font-mono-tight text-[11px] uppercase tracking-[0.22em] text-white/40">
          <p>
            © {new Date().getFullYear()} Mohd. Tabrez Mukadam — Quiet signal, strong intent.
          </p>
          <p>
            Built with React · Tailwind · <span className="text-aurora-cyan">Aurora</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
