import { useState } from 'react';
import { Shield, Bug, Code2, Server, Sparkles } from 'lucide-react';
import Reveal from './fx/Reveal';

type Category = {
  key: string;
  icon: any;
  title: string;
  caption: string;
  skills: { name: string; level: number }[];
  accent: string; // tailwind text colour
  glow: string;   // hex for glow
};

const CATEGORIES: Category[] = [
  {
    key: 'cyber',
    icon: Shield,
    title: 'Cybersecurity & Research',
    caption: 'Offensive testing, threat intel, & incident response',
    skills: [
      { name: 'Penetration Testing', level: 88 },
      { name: 'Vulnerability Assessment', level: 90 },
      { name: 'Bug Bounty Hunting', level: 82 },
      { name: 'Threat Intelligence', level: 78 },
      { name: 'Incident Response', level: 70 },
      { name: 'OWASP Top 10', level: 92 },
    ],
    accent: 'text-aurora-violet',
    glow: '#8b5cf6',
  },
  {
    key: 'appchain',
    icon: Bug,
    title: 'Application & Blockchain Security',
    caption: 'Web, DeFi, and smart-contract attack surfaces',
    skills: [
      { name: 'Web App Security', level: 86 },
      { name: 'Smart Contract Auditing', level: 76 },
      { name: 'Blockchain Security', level: 74 },
      { name: 'DeFi Protocol Analysis', level: 70 },
      { name: 'Exploit Analysis', level: 80 },
    ],
    accent: 'text-aurora-cyan',
    glow: '#22d3ee',
  },
  {
    key: 'code',
    icon: Code2,
    title: 'Programming & Scripting',
    caption: 'Polyglot tooling for research and automation',
    skills: [
      { name: 'Python', level: 92 },
      { name: 'JavaScript', level: 78 },
      { name: 'Solidity', level: 70 },
      { name: 'Rust', level: 55 },
      { name: 'Bash', level: 80 },
      { name: 'HTML & CSS', level: 82 },
    ],
    accent: 'text-aurora-teal',
    glow: '#14b8a6',
  },
  {
    key: 'tools',
    icon: Server,
    title: 'Tools & Platforms',
    caption: 'The stack on the workbench every day',
    skills: [
      { name: 'Burp Suite', level: 90 },
      { name: 'Metasploit', level: 78 },
      { name: 'Wireshark', level: 78 },
      { name: 'Nmap', level: 88 },
      { name: 'Autopsy', level: 70 },
      { name: 'Docker', level: 76 },
      { name: 'Linux', level: 92 },
      { name: 'Git & GitHub', level: 90 },
    ],
    accent: 'text-aurora-rose',
    glow: '#fb7185',
  },
];

const Skills = () => {
  const [active, setActive] = useState(0);
  const cat = CATEGORIES[active];
  const Icon = cat.icon;

  return (
    <section id="skills" className="relative py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <Reveal className="text-center mb-14">
          <p className="section-kicker mb-3">// 02 — capabilities</p>
          <h2 className="section-title">
            Skills <span className="aurora-text italic">&amp;</span> Expertise
          </h2>
          <div className="soft-divider" />
        </Reveal>

        {/* Category tabs */}
        <Reveal delay={80} className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {CATEGORIES.map((c, i) => {
            const isActive = i === active;
            const CIcon = c.icon;
            return (
              <button
                key={c.key}
                onClick={() => setActive(i)}
                className={`group relative flex items-center gap-2 px-4 py-2.5 rounded-full font-mono-tight text-[11px] uppercase tracking-[0.18em] transition-all ${
                  isActive ? 'text-white' : 'text-white/55 hover:text-white/85'
                }`}
                data-cursor="hover"
              >
                {isActive && (
                  <span
                    className="absolute inset-0 rounded-full -z-10"
                    style={{
                      background:
                        'linear-gradient(135deg, rgba(139,92,246,0.28), rgba(34,211,238,0.22))',
                      boxShadow: `0 0 0 1px ${c.glow}55, 0 12px 30px -10px ${c.glow}66`,
                    }}
                  />
                )}
                {!isActive && (
                  <span className="absolute inset-0 rounded-full border border-white/10 -z-10" />
                )}
                <CIcon className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">{c.title.split(' & ')[0]}</span>
                <span className="sm:hidden">{c.title.split(' ')[0]}</span>
              </button>
            );
          })}
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left: category header + radial */}
          <Reveal className="lg:col-span-5">
            <div className="grad-border h-full">
              <div className="relative p-8 lg:p-10 rounded-[19px] h-full overflow-hidden">
                <div
                  className="absolute -top-32 -right-24 w-80 h-80 rounded-full blur-3xl opacity-50 pointer-events-none transition-all duration-700"
                  style={{ background: `radial-gradient(circle, ${cat.glow}55, transparent 60%)` }}
                />
                <div className="relative">
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className="w-11 h-11 rounded-xl grid place-items-center"
                      style={{
                        background: `linear-gradient(135deg, ${cat.glow}33, ${cat.glow}11)`,
                        border: `1px solid ${cat.glow}55`,
                      }}
                    >
                      <Icon className={`w-5 h-5 ${cat.accent}`} strokeWidth={1.6} />
                    </div>
                    <span className="font-mono-tight text-[10px] uppercase tracking-[0.32em] text-white/40">
                      Category 0{active + 1}
                    </span>
                  </div>
                  <h3 className="font-display text-3xl text-white mb-2">{cat.title}</h3>
                  <p className="text-white/55 text-sm leading-relaxed mb-8 max-w-md">
                    {cat.caption}
                  </p>

                  {/* Aggregate metric */}
                  <div className="grid grid-cols-3 gap-3 pt-4 border-t border-white/8">
                    <Metric label="Stack" value={`${cat.skills.length}`} />
                    <Metric
                      label="Avg conf"
                      value={`${Math.round(
                        cat.skills.reduce((s, x) => s + x.level, 0) / cat.skills.length
                      )}%`}
                    />
                    <Metric label="Focus" value={cat.skills[0].name.split(' ')[0]} />
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Right: skill bars */}
          <Reveal delay={120} className="lg:col-span-7">
            <div className="grad-border h-full">
              <div className="p-8 lg:p-10 rounded-[19px] space-y-5 relative overflow-hidden">
                <div className="flex items-center gap-2 text-xs font-mono-tight uppercase tracking-[0.28em] text-white/45 mb-2">
                  <Sparkles className="w-3.5 h-3.5" />
                  Proficiency Map
                </div>
                {cat.skills.map((s, i) => (
                  <div key={s.name} className="group">
                    <div className="flex items-baseline justify-between mb-1.5">
                      <span className="text-sm text-white/85 font-light tracking-wide">{s.name}</span>
                      <span className="font-mono-tight text-[10px] text-white/40 tracking-widest">
                        {String(s.level).padStart(2, '0')} / 100
                      </span>
                    </div>
                    <div className="relative h-[3px] bg-white/5 rounded-full overflow-hidden">
                      <div
                        key={`${cat.key}-${i}`}
                        className="absolute inset-y-0 left-0 rounded-full transition-[width] duration-[1200ms] ease-spring"
                        style={{
                          width: `${s.level}%`,
                          background: `linear-gradient(90deg, ${cat.glow}, ${cat.glow}55)`,
                          boxShadow: `0 0 12px ${cat.glow}88`,
                        }}
                      />
                    </div>
                  </div>
                ))}

                {/* Skill chips for breadth */}
                <div className="pt-4 mt-4 border-t border-white/8 flex flex-wrap gap-2">
                  {cat.skills.map((s) => (
                    <span
                      key={`chip-${s.name}`}
                      className="chip"
                      style={{
                        background: `${cat.glow}12`,
                        borderColor: `${cat.glow}38`,
                        color: '#e5e7ff',
                      }}
                    >
                      {s.name}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

const Metric = ({ label, value }: { label: string; value: string }) => (
  <div>
    <div className="text-[10px] font-mono-tight uppercase tracking-[0.22em] text-white/40">
      {label}
    </div>
    <div className="font-display text-2xl text-white mt-1">{value}</div>
  </div>
);

export default Skills;
