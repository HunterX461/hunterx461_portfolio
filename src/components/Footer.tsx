import { Github, Linkedin } from 'lucide-react';

const links = [
  { label: 'About', id: 'about' },
  { label: 'Articles', id: 'articles' },
  { label: 'Open Source', id: 'open-source' },
  { label: 'Research Journey', id: 'research-journey' },
  { label: 'Contact', id: 'contact' },
];

const socials = [
  { label: 'GitHub', href: 'https://github.com/HunterX461', icon: Github },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/mohd-tabrez-mukadam-662273296/',
    icon: Linkedin,
  },
];

const Footer = () => {
  return (
    <footer className="relative py-10 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-wrap gap-4 text-sm text-[#a0afc0]">
          {links.map((link) => (
            <button
              key={link.id}
              onClick={() => document.getElementById(link.id)?.scrollIntoView({ behavior: 'smooth' })}
              className="hover:text-[#e8eef5] transition-colors"
            >
              {link.label}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-3">
          {socials.map((social) => {
            const Icon = social.icon;
            return (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="w-10 h-10 rounded-full border border-white/10 bg-[#1a2332]/50 text-[#93bdd7] flex items-center justify-center hover:text-[#e8eef5] hover:border-[#4a7c9e]/50 transition-colors"
              >
                <Icon className="w-4 h-4" />
              </a>
            );
          })}
        </div>
      </div>
      <p className="text-center text-xs text-[#a0afc0] mt-8">
        © {new Date().getFullYear()} HunterX461 — Quietly building, researching, sharing.
      </p>
    </footer>
  );
};

export default Footer;
