import { Award, CheckCircle, ScrollText } from 'lucide-react';
import Reveal from './fx/Reveal';

const CERTS = [
  {
    title: 'Android Bug Bounty Hunting — Hunt Like a Rat',
    issuer: 'EC-Council',
    year: '2025',
    accent: '#8b5cf6',
  },
  { title: 'Blockchain Basics', issuer: 'Cyfrin', year: '2025', accent: '#fbbf24' },
  {
    title: 'Purple Teaming Fundamentals',
    issuer: 'CyberWarFare Labs',
    year: '2025',
    accent: '#fb7185',
  },
  {
    title: 'Foundation Level Threat Intelligence Analyst',
    issuer: 'arcX',
    year: '2025',
    accent: '#22d3ee',
  },
  { title: 'Autopsy Basics', issuer: 'Cybrary', year: '2025', accent: '#14b8a6' },
];

const Certifications = () => {
  return (
    <section id="certifications" className="relative py-32">
      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-10">
        <Reveal className="text-center mb-12">
          <p className="section-kicker mb-3">// 09 — credentials</p>
          <h2 className="section-title">
            Certifications <span className="aurora-text italic">&amp;</span> Training
          </h2>
          <div className="soft-divider" />
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {CERTS.map((cert, i) => (
            <Reveal key={cert.title} delay={i * 70}>
              <div className="group glass-card p-5 h-full">
                <div className="flex items-start gap-4">
                  <div
                    className="w-12 h-12 rounded-xl grid place-items-center shrink-0"
                    style={{
                      background: `linear-gradient(135deg, ${cert.accent}33, ${cert.accent}11)`,
                      border: `1px solid ${cert.accent}55`,
                    }}
                  >
                    <Award className="w-5 h-5 text-white" strokeWidth={1.5} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-3 mb-1.5">
                      <h3 className="text-base sm:text-lg font-display text-white leading-snug text-balance">
                        {cert.title}
                      </h3>
                      <span className="flex items-center gap-1 font-mono-tight text-[10px] uppercase tracking-[0.22em] text-emerald-300/90 shrink-0">
                        <CheckCircle className="w-3 h-3" />
                        Active
                      </span>
                    </div>
                    <div className="flex items-center gap-3 font-mono-tight text-[11px] uppercase tracking-[0.22em] text-white/45">
                      <span className="inline-flex items-center gap-1">
                        <ScrollText className="w-3 h-3" />
                        {cert.issuer}
                      </span>
                      <span className="text-white/20">/</span>
                      <span>{cert.year}</span>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
