import { User, Heart, Code, ShieldHalf } from 'lucide-react';
import Reveal from './fx/Reveal';

const HIGHLIGHTS = [
  {
    icon: User,
    title: 'Curious by Nature',
    description:
      'Driven by curiosity and a desire to understand how systems behave beneath the surface — from software design to the foundations of security.',
    accent: '#8b5cf6',
  },
  {
    icon: Code,
    title: 'Engineering Mindset',
    description:
      'Focused on building reliable, well-structured software while continuously learning about cybersecurity, cloud systems, and emerging tech.',
    accent: '#22d3ee',
  },
  {
    icon: Heart,
    title: 'Human-Centered',
    description:
      'I value clarity, responsibility, and usability. Good technology should feel calm, intuitive, and trustworthy to the people who use it.',
    accent: '#fb7185',
  },
];

const STATS = [
  { value: '30', label: 'Vulnerabilities Researched' },
  { value: '5+', label: 'Active Certifications' },
  { value: '7+', label: 'Years on the Path' },
  { value: '∞', label: 'Curiosity' },
];

const About = () => {
  return (
    <section id="about" className="relative py-32">
      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-10">
        <Reveal className="text-center mb-12">
          <p className="section-kicker mb-3">// 01 — identity</p>
          <h2 className="section-title">
            About <span className="aurora-text italic">Me</span>
          </h2>
          <div className="soft-divider" />
        </Reveal>

        <Reveal delay={80} className="max-w-3xl mx-auto mb-14">
          <p className="text-white/75 text-lg sm:text-xl font-light leading-relaxed text-center text-pretty">
            I&apos;m{' '}
            <span className="text-white font-display italic">Mohd. Tabrez Mukadam</span>, a
            Computer Science undergraduate with a strong interest in{' '}
            <span className="text-aurora-cyan">cybersecurity</span>,{' '}
            <span className="text-aurora-violet">cloud infrastructure</span>, and building
            thoughtful software systems. My journey is shaped by hands-on projects, security
            research, and a constant effort to understand how technology impacts people in
            real-world scenarios. I approach development with care, curiosity, and a focus on
            long-term reliability rather than short-term trends.
          </p>
        </Reveal>

        {/* Stat strip */}
        <Reveal delay={120} className="mb-16">
          <div className="grad-border">
            <div className="grid grid-cols-2 sm:grid-cols-4 divide-x divide-white/8 rounded-[19px] overflow-hidden">
              {STATS.map((s) => (
                <div key={s.label} className="p-6 text-center">
                  <div className="font-display text-4xl sm:text-5xl aurora-text mb-1">
                    {s.value}
                  </div>
                  <div className="font-mono-tight text-[10px] uppercase tracking-[0.22em] text-white/45">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {HIGHLIGHTS.map((item, idx) => {
            const Icon = item.icon;
            return (
              <Reveal key={item.title} delay={idx * 100}>
                <div className="group glass-card h-full p-7">
                  <div
                    className="w-12 h-12 rounded-xl grid place-items-center mb-5 transition-transform duration-500 group-hover:scale-110"
                    style={{
                      background: `linear-gradient(135deg, ${item.accent}30, ${item.accent}10)`,
                      border: `1px solid ${item.accent}55`,
                    }}
                  >
                    <Icon className="w-5 h-5 text-white/95" strokeWidth={1.6} />
                  </div>
                  <h3 className="font-display text-xl text-white mb-2.5">{item.title}</h3>
                  <p className="text-white/60 text-sm leading-relaxed text-pretty">
                    {item.description}
                  </p>
                  <div className="mt-6 pt-4 border-t border-white/8 flex items-center justify-between text-[10px] font-mono-tight uppercase tracking-[0.22em] text-white/35">
                    <span>principle 0{idx + 1}</span>
                    <ShieldHalf className="w-3 h-3" />
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;
