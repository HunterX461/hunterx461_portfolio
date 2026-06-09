import { useState } from 'react';
import { Mail, Github, Linkedin, BookOpen, Copy, Check, ArrowUpRight } from 'lucide-react';
import Reveal from './fx/Reveal';
import MagneticButton from './fx/MagneticButton';

const EMAIL = 'tabrezmukadam57@gmail.com';

const SOCIALS = [
  {
    label: 'GitHub',
    handle: '@HunterX461',
    href: 'https://github.com/HunterX461',
    Icon: Github,
    accent: '#8b5cf6',
  },
  {
    label: 'LinkedIn',
    handle: 'Mohd Tabrez Mukadam',
    href: 'https://www.linkedin.com/in/mohd-tabrez-mukadam-662273296/',
    Icon: Linkedin,
    accent: '#22d3ee',
  },
  {
    label: 'Medium',
    handle: '@HunterX461',
    href: 'https://medium.com/@HunterX461',
    Icon: BookOpen,
    accent: '#14b8a6',
  },
];

const Contact = () => {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch {
      /* ignore */
    }
  };

  return (
    <section id="contact" className="relative py-32">
      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-10">
        <Reveal className="text-center mb-12">
          <p className="section-kicker mb-3">// 10 — handshake</p>
          <h2 className="section-title">
            Let&apos;s <span className="aurora-text italic">talk shop</span>.
          </h2>
          <div className="soft-divider mb-8" />
          <p className="text-white/65 text-lg sm:text-xl font-light leading-relaxed max-w-2xl mx-auto text-pretty">
            Open to conversations around cybersecurity, research opportunities, internships,
            audits, and collaborative learning. Pick a wire — I&apos;m listening.
          </p>
        </Reveal>

        {/* Primary CTA card */}
        <Reveal delay={100}>
          <div className="grad-border mb-8">
            <div className="relative p-8 sm:p-12 rounded-[19px] overflow-hidden">
              <div
                className="absolute -top-24 -right-24 w-96 h-96 rounded-full blur-3xl opacity-50 pointer-events-none"
                style={{ background: 'radial-gradient(circle, #8b5cf688, transparent 60%)' }}
              />
              <div className="relative flex flex-col items-center text-center gap-6">
                <div className="flex items-center gap-2 chip">
                  <span className="w-1.5 h-1.5 rounded-full bg-aurora-teal animate-pulse" />
                  Inbox open
                </div>
                <h3 className="font-display text-3xl sm:text-5xl text-white text-balance">
                  Send a signal.
                </h3>
                <div className="flex flex-col sm:flex-row items-center gap-3 w-full justify-center">
                  <button
                    onClick={copy}
                    className="group relative w-full sm:w-auto flex items-center justify-between gap-3 px-5 py-3 rounded-full glass text-white font-mono-tight text-sm"
                    data-cursor="hover"
                    aria-label="Copy email"
                  >
                    <Mail className="w-4 h-4 text-aurora-cyan" />
                    <span className="tracking-wide">{EMAIL}</span>
                    {copied ? (
                      <Check className="w-4 h-4 text-aurora-teal" />
                    ) : (
                      <Copy className="w-4 h-4 text-white/60 group-hover:text-white" />
                    )}
                  </button>
                  <MagneticButton as="a" href={`mailto:${EMAIL}`} className="btn-aurora">
                    Compose
                    <ArrowUpRight className="w-4 h-4" />
                  </MagneticButton>
                </div>
                <p className="text-xs font-mono-tight uppercase tracking-[0.22em] text-white/40">
                  Avg response · within a day
                </p>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Socials grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {SOCIALS.map((s, i) => {
            const Icon = s.Icon;
            return (
              <Reveal key={s.label} delay={i * 80}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group glass-card flex items-center gap-4 p-5 h-full"
                  data-cursor="hover"
                >
                  <div
                    className="w-11 h-11 rounded-xl grid place-items-center shrink-0"
                    style={{
                      background: `linear-gradient(135deg, ${s.accent}30, ${s.accent}10)`,
                      border: `1px solid ${s.accent}55`,
                    }}
                  >
                    <Icon className="w-5 h-5 text-white/95" strokeWidth={1.6} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-mono-tight text-[10px] uppercase tracking-[0.22em] text-white/40 mb-0.5">
                      {s.label}
                    </div>
                    <div className="text-sm text-white truncate underline-grad inline-block">
                      {s.handle}
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-white/40 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </a>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Contact;
