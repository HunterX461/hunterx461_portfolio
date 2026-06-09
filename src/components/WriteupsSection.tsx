import { Link } from 'react-router-dom';
import { Terminal, Shield, ArrowUpRight } from 'lucide-react';
import Reveal from './fx/Reveal';

const WRITEUPS = [
  {
    href: '/writeups/localroot',
    severity: 'ROOT ACCESS',
    severityColor: '#fb7185',
    date: 'Jan 14, 2026',
    title: 'LocalRoot — Docker Breakout',
    excerpt:
      'A story about how a simple "Keyword Counter" website allowed me to accidentally mount the server\'s hard drive via Docker API.',
    tags: ['Docker', 'Container Escape', 'Privilege Escalation'],
  },
];

const WriteupsSection = () => {
  return (
    <section id="writeups" className="relative py-32">
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
        <Reveal className="text-center mb-12">
          <p className="section-kicker mb-3 inline-flex items-center justify-center gap-2">
            <Terminal className="w-3.5 h-3.5" />
            // 07 — log files
          </p>
          <h2 className="section-title">
            Security <span className="aurora-text italic">Logs</span>
          </h2>
          <div className="soft-divider" />
          <p className="text-white/55 mt-6 max-w-2xl mx-auto text-pretty">
            Detailed breakdowns of CTF challenges and vulnerability research. Written for
            humans, not robots.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {WRITEUPS.map((w, i) => (
            <Reveal key={w.href} delay={i * 80}>
              <Link
                to={w.href}
                className="group relative block h-full grad-border overflow-hidden hover:-translate-y-1 transition-transform duration-500 ease-spring"
                data-cursor="hover"
              >
                <div className="relative p-6 rounded-[19px] h-full flex flex-col">
                  {/* terminal header */}
                  <div className="flex items-center justify-between mb-5 font-mono-tight text-[10px] tracking-[0.22em] uppercase text-white/45">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-rose-400/80" />
                      <span className="w-2 h-2 rounded-full bg-amber-300/80" />
                      <span className="w-2 h-2 rounded-full bg-emerald-400/80" />
                    </div>
                    <span>{w.date}</span>
                  </div>

                  <div className="flex items-center justify-between mb-4">
                    <span
                      className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md font-mono-tight text-[10px] uppercase tracking-[0.22em]"
                      style={{
                        background: `${w.severityColor}14`,
                        border: `1px solid ${w.severityColor}55`,
                        color: '#ffe4e6',
                      }}
                    >
                      <Shield className="w-3 h-3" /> {w.severity}
                    </span>
                  </div>

                  <h3 className="font-display text-2xl text-white mb-3 leading-snug text-balance">
                    {w.title}
                  </h3>

                  <p className="text-white/65 text-sm leading-relaxed mb-5 flex-grow text-pretty">
                    {w.excerpt}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {w.tags.map((t) => (
                      <span key={t} className="chip">
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="mt-auto inline-flex items-center gap-2 font-mono-tight text-sm text-aurora-cyan">
                    <span className="underline-grad">cat read_log</span>
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WriteupsSection;
