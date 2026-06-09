import { useMemo, useState } from 'react';
import {
  ExternalLink,
  Github,
  Lock,
  LineChart,
  ShieldAlert,
  Coins,
  Flag,
  Brain,
  ArrowUpRight,
} from 'lucide-react';
import Reveal from './fx/Reveal';

type Project = {
  id: string;
  title: string;
  blurb: string;
  description: string;
  tags: string[];
  category: 'Security' | 'Blockchain' | 'AI/ML' | 'Trading' | 'CTF';
  icon: any;
  accent: string;
  github?: string;
  isPublic: boolean;
  metric?: { label: string; value: string };
};

const PROJECTS: Project[] = [
  {
    id: 'quantpairs',
    title: 'QuantPairs Lab',
    blurb: 'Stat-arb toolkit for crypto pair trading',
    description:
      'High-performance quantitative analysis toolkit for crypto-asset pair trading. Implements statistical arbitrage strategies, cointegration testing, and automated backtesting frameworks for market-neutral execution.',
    tags: ['Python', 'Pandas', 'Quant Finance', 'Trading Bot'],
    category: 'Trading',
    icon: LineChart,
    accent: '#14b8a6',
    github: 'https://github.com/HunterX461/quantpairs-lab',
    isPublic: true,
    metric: { label: 'Strategy', value: 'Market-neutral' },
  },
  {
    id: 'claimguardian',
    title: 'ClaimGuardian AI',
    blurb: 'Fraud-pattern detection for insurance reviewers',
    description:
      'AI-assisted system designed to support insurance claim reviewers by identifying potential fraud patterns. Combines machine learning with cloud-based AI reasoning to deliver transparent risk scoring.',
    tags: ['Machine Learning', 'Python', 'Cloud', 'AI Security'],
    category: 'AI/ML',
    icon: Brain,
    accent: '#8b5cf6',
    isPublic: false,
    metric: { label: 'Domain', value: 'Insurance' },
  },
  {
    id: 'security-research',
    title: 'Security Research Practice',
    blurb: '30 vulnerability hypotheses, sharpened triage',
    description:
      'Researched multiple web application attack surfaces and documented 30 vulnerability hypotheses, improving triage quality, reproducibility, and responsible disclosure discipline.',
    tags: ['Web Security', 'OWASP', 'Disclosure', 'Research'],
    category: 'Security',
    icon: ShieldAlert,
    accent: '#22d3ee',
    isPublic: false,
    metric: { label: 'Reports', value: '30' },
  },
  {
    id: 'smartcontract',
    title: 'Smart Contract Audits',
    blurb: 'Solidity audits for DeFi protocols',
    description:
      'Performed security analysis and audits of Solidity-based smart contracts for DeFi protocols, identifying issues related to access control and ownership logic with potential financial risk.',
    tags: ['Solidity', 'DeFi', 'Auditing', 'Blockchain'],
    category: 'Blockchain',
    icon: Coins,
    accent: '#fbbf24',
    isPublic: false,
    metric: { label: 'Stack', value: 'EVM' },
  },
  {
    id: 'ctf',
    title: 'CTFs & Competitive Security',
    blurb: 'Exploit dev & reverse engineering across labs',
    description:
      'Participated in Capture The Flag competitions and security labs to strengthen skills in exploit development and reverse engineering across platforms such as Hack The Box.',
    tags: ['CTF', 'Exploit Dev', 'Reverse Engineering', 'HTB'],
    category: 'CTF',
    icon: Flag,
    accent: '#fb7185',
    isPublic: false,
    metric: { label: 'Platform', value: 'Hack The Box' },
  },
];

const FILTERS = ['All', 'Security', 'Blockchain', 'AI/ML', 'Trading', 'CTF'] as const;

const Projects = () => {
  const [filter, setFilter] = useState<(typeof FILTERS)[number]>('All');

  const filtered = useMemo(
    () => (filter === 'All' ? PROJECTS : PROJECTS.filter((p) => p.category === filter)),
    [filter]
  );

  return (
    <section id="projects" className="relative py-32">
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
        <Reveal className="text-center mb-12">
          <p className="section-kicker mb-3">// 06 — selected work</p>
          <h2 className="section-title">
            Featured <span className="aurora-text italic">Projects</span>
          </h2>
          <div className="soft-divider" />
          <p className="text-white/55 mt-6 max-w-2xl mx-auto text-pretty">
            A snapshot of what I&apos;ve been building — open source, private research, and
            everything between.
          </p>
        </Reveal>

        {/* Filter chips */}
        <Reveal delay={80} className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {FILTERS.map((f) => {
            const active = f === filter;
            return (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`relative px-4 py-2 rounded-full font-mono-tight text-[11px] uppercase tracking-[0.22em] transition ${
                  active ? 'text-white' : 'text-white/55 hover:text-white/85'
                }`}
                data-cursor="hover"
              >
                {active && (
                  <span
                    className="absolute inset-0 rounded-full -z-10"
                    style={{
                      background:
                        'linear-gradient(135deg, rgba(139,92,246,0.3), rgba(34,211,238,0.22))',
                      boxShadow:
                        '0 0 0 1px rgba(139,92,246,0.45), 0 10px 25px -10px rgba(139,92,246,0.55)',
                    }}
                  />
                )}
                {!active && (
                  <span className="absolute inset-0 rounded-full border border-white/10 -z-10" />
                )}
                {f}
              </button>
            );
          })}
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((p, i) => (
            <Reveal key={p.id} delay={i * 70}>
              <ProjectCard p={p} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

function ProjectCard({ p }: { p: Project }) {
  const Icon = p.icon;
  return (
    <article
      className="group relative h-full grad-border overflow-hidden transition-transform duration-500 ease-spring hover:-translate-y-1"
      data-cursor="hover"
    >
      <div className="relative p-6 rounded-[19px] h-full flex flex-col">
        {/* Preview canvas */}
        <div
          className="relative aspect-[16/9] rounded-xl overflow-hidden border border-white/8 mb-5"
          style={{
            background: `radial-gradient(120% 90% at 20% 10%, ${p.accent}33, transparent 60%), radial-gradient(80% 70% at 80% 80%, ${p.accent}1a, transparent 60%), linear-gradient(180deg, rgba(255,255,255,0.03), rgba(0,0,0,0.2))`,
          }}
        >
          {/* Grid pattern */}
          <div
            className="absolute inset-0 opacity-50"
            style={{
              backgroundImage:
                'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)',
              backgroundSize: '24px 24px',
              maskImage: 'radial-gradient(ellipse at center, black 50%, transparent 85%)',
              WebkitMaskImage: 'radial-gradient(ellipse at center, black 50%, transparent 85%)',
            }}
          />
          {/* Central icon glow */}
          <div className="absolute inset-0 grid place-items-center">
            <div
              className="w-20 h-20 rounded-2xl grid place-items-center transition-transform duration-700 group-hover:scale-110"
              style={{
                background: `linear-gradient(135deg, ${p.accent}44, ${p.accent}11)`,
                border: `1px solid ${p.accent}66`,
                boxShadow: `0 0 40px -10px ${p.accent}88`,
              }}
            >
              <Icon className="w-9 h-9 text-white/95" strokeWidth={1.4} />
            </div>
          </div>
          {/* Top meta */}
          <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
            <span
              className="font-mono-tight text-[10px] px-2 py-0.5 rounded-md uppercase tracking-[0.22em]"
              style={{
                background: `${p.accent}1a`,
                border: `1px solid ${p.accent}55`,
                color: '#f1efff',
              }}
            >
              {p.category}
            </span>
            {p.isPublic ? (
              <span className="font-mono-tight text-[10px] px-2 py-0.5 rounded-md uppercase tracking-[0.22em] bg-emerald-500/15 border border-emerald-400/40 text-emerald-200">
                Public
              </span>
            ) : (
              <span className="font-mono-tight text-[10px] px-2 py-0.5 rounded-md uppercase tracking-[0.22em] bg-white/5 border border-white/15 text-white/65 inline-flex items-center gap-1">
                <Lock className="w-2.5 h-2.5" /> Private
              </span>
            )}
          </div>
          {/* Bottom metric */}
          {p.metric && (
            <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[10px] font-mono-tight uppercase tracking-[0.22em]">
              <span className="text-white/40">{p.metric.label}</span>
              <span className="text-white/85">{p.metric.value}</span>
            </div>
          )}
        </div>

        {/* Body */}
        <div className="flex-1 flex flex-col">
          <h3 className="font-display text-2xl text-white mb-1.5">{p.title}</h3>
          <p className="text-white/55 text-xs font-mono-tight tracking-wide mb-3 uppercase">
            {p.blurb}
          </p>
          <p className="text-white/65 text-sm leading-relaxed mb-5 text-pretty">
            {p.description}
          </p>

          <div className="flex flex-wrap gap-1.5 mb-5">
            {p.tags.map((t) => (
              <span key={t} className="chip">
                {t}
              </span>
            ))}
          </div>

          <div className="mt-auto pt-4 border-t border-white/8 flex items-center justify-between">
            {p.isPublic && p.github ? (
              <a
                href={p.github}
                target="_blank"
                rel="noopener noreferrer"
                className="group/link inline-flex items-center gap-2 text-sm text-white/85 hover:text-white transition"
                data-cursor="hover"
              >
                <Github className="w-4 h-4" strokeWidth={1.6} />
                <span className="underline-grad">View source</span>
                <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
              </a>
            ) : (
              <button
                onClick={() =>
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
                }
                className="group/link inline-flex items-center gap-2 text-sm text-white/85 hover:text-white transition"
                data-cursor="hover"
              >
                <ExternalLink className="w-4 h-4" strokeWidth={1.6} />
                <span className="underline-grad">Details on request</span>
              </button>
            )}
            <span className="font-mono-tight text-[10px] uppercase tracking-[0.22em] text-white/30">
              {String(PROJECTS.findIndex((x) => x.id === p.id) + 1).padStart(2, '0')}
            </span>
          </div>
        </div>
      </div>
    </article>
  );
}

export default Projects;
