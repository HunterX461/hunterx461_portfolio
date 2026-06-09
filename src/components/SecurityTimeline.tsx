import { useEffect, useRef, useState } from 'react';
import { Compass, GitBranch, Search, GraduationCap, Microscope } from 'lucide-react';
import Reveal from './fx/Reveal';

type Item = {
  year: string;
  title: string;
  description: string;
  icon: any;
  accent: string;
  tags: string[];
};

const TIMELINE: Item[] = [
  {
    year: '2018',
    title: 'Early Curiosity',
    description:
      'First exposure to Linux and security concepts during school years. Explored Kali Linux and system internals driven by raw curiosity.',
    icon: Compass,
    accent: '#8b5cf6',
    tags: ['Kali', 'Internals', 'School'],
  },
  {
    year: '2020 — 2021',
    title: 'Self-Learning Phase',
    description:
      'Built foundational knowledge in networking and security through hands-on experimentation. Mobile-first setups including Termux due to hardware constraints.',
    icon: GitBranch,
    accent: '#22d3ee',
    tags: ['Termux', 'Networking', 'Self-taught'],
  },
  {
    year: '2022',
    title: 'Research Platform Entry',
    description:
      'Started structured vulnerability research across public programs and CTF labs. Learned to separate noisy assumptions from reproducible evidence.',
    icon: Search,
    accent: '#14b8a6',
    tags: ['Public Programs', 'CTF', 'Recon'],
  },
  {
    year: '2023',
    title: 'Formal Cybersecurity Path',
    description:
      'Transitioned into structured cybersecurity education while documenting testing workflows, proof quality, and disclosure etiquette.',
    icon: GraduationCap,
    accent: '#fb7185',
    tags: ['Education', 'Workflow', 'Discipline'],
  },
  {
    year: '2024 — 2025',
    title: 'Methodology Evolution',
    description:
      'Analyzed and researched 30 vulnerabilities, including invalid findings that sharpened triage discipline. Focus shifted to impact clarity, reproducibility, and responsible disclosure.',
    icon: Microscope,
    accent: '#fbbf24',
    tags: ['30 Vulns', 'Triage', 'Disclosure'],
  },
];

const ResearchJourney = () => {
  const trackRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let raf = 0;
    const update = () => {
      const el = trackRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const start = rect.top - vh * 0.85;
      const end = rect.bottom - vh * 0.15;
      const total = end - start;
      const passed = -start;
      const p = Math.max(0, Math.min(1, passed / total));
      setProgress(p);
      raf = 0;
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', update);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', update);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section id="research-journey" className="relative py-32">
      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-10">
        <Reveal className="text-center mb-16">
          <p className="section-kicker mb-3">// 05 — chronology</p>
          <h2 className="section-title">
            Research <span className="aurora-text italic">Journey</span>
          </h2>
          <div className="soft-divider" />
          <p className="text-white/55 mt-8 max-w-2xl mx-auto leading-relaxed text-pretty">
            30 vulnerabilities analyzed &amp; researched — invalid reports included. Each year
            tightened the methodology, sharpened the triage, and deepened the commitment to
            responsible disclosure.
          </p>
        </Reveal>

        <div ref={trackRef} className="relative pl-10 sm:pl-16">
          {/* Track */}
          <div className="absolute left-4 sm:left-6 top-0 bottom-0 w-px bg-white/8" />
          {/* Progress */}
          <div
            className="absolute left-4 sm:left-6 top-0 w-px"
            style={{
              height: `${progress * 100}%`,
              background:
                'linear-gradient(180deg, #8b5cf6 0%, #22d3ee 50%, #14b8a6 100%)',
              boxShadow: '0 0 14px rgba(139,92,246,0.55)',
              transition: 'height 80ms linear',
            }}
          />
          {/* Head dot */}
          <div
            className="absolute left-4 sm:left-6 -translate-x-1/2 w-3 h-3 rounded-full bg-white"
            style={{
              top: `calc(${progress * 100}% - 6px)`,
              boxShadow: '0 0 0 4px rgba(139,92,246,0.35), 0 0 24px rgba(139,92,246,0.7)',
              transition: 'top 80ms linear',
            }}
          />

          <div className="space-y-12 sm:space-y-16">
            {TIMELINE.map((item, i) => {
              const Icon = item.icon;
              return (
                <Reveal key={item.year} delay={i * 60}>
                  <div className="relative group">
                    {/* node */}
                    <div
                      className="absolute -left-[28px] sm:-left-[44px] top-2 w-7 h-7 rounded-full grid place-items-center transition-transform duration-500 group-hover:scale-110"
                      style={{
                        background: `radial-gradient(circle, ${item.accent}44 0%, transparent 75%)`,
                      }}
                    >
                      <span
                        className="w-3.5 h-3.5 rounded-full border-2 border-ink-950"
                        style={{
                          background: item.accent,
                          boxShadow: `0 0 0 1px ${item.accent}88, 0 0 18px ${item.accent}aa`,
                        }}
                      />
                    </div>

                    {/* card */}
                    <div className="grad-border">
                      <div className="relative p-6 sm:p-8 rounded-[19px]">
                        <div className="flex items-center justify-between gap-4 mb-3">
                          <div className="flex items-center gap-3">
                            <div
                              className="w-9 h-9 rounded-lg grid place-items-center"
                              style={{
                                background: `linear-gradient(135deg, ${item.accent}33, ${item.accent}11)`,
                                border: `1px solid ${item.accent}55`,
                              }}
                            >
                              <Icon className="w-4 h-4 text-white" strokeWidth={1.6} />
                            </div>
                            <span className="font-mono-tight text-[10px] uppercase tracking-[0.28em] text-white/45">
                              chapter 0{i + 1}
                            </span>
                          </div>
                          <span
                            className="font-mono-tight text-xs px-2.5 py-1 rounded-md border"
                            style={{
                              background: `${item.accent}10`,
                              borderColor: `${item.accent}55`,
                              color: '#f1efff',
                            }}
                          >
                            {item.year}
                          </span>
                        </div>

                        <h3 className="font-display text-2xl sm:text-3xl text-white mb-2">
                          {item.title}
                        </h3>
                        <p className="text-white/65 leading-relaxed text-sm sm:text-base text-pretty">
                          {item.description}
                        </p>

                        <div className="flex flex-wrap gap-2 mt-5">
                          {item.tags.map((t) => (
                            <span key={t} className="chip">
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResearchJourney;
