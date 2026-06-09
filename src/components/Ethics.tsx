import { ShieldCheck, FileLock, Handshake, CheckCircle2 } from 'lucide-react';
import Reveal from './fx/Reveal';

const PILLARS = [
  {
    icon: ShieldCheck,
    title: 'Authorized testing only',
    text: 'All work is conducted within scope — public programs, controlled labs, and explicit permission.',
  },
  {
    icon: FileLock,
    title: 'Coordinated disclosure',
    text: 'Vulnerabilities are reported through proper channels, respecting program guidelines and timelines.',
  },
  {
    icon: Handshake,
    title: 'Safety first',
    text: 'User safety, transparency, and long-term security come before personal exposure or exploitation.',
  },
];

const Ethics = () => {
  return (
    <section id="ethics" className="relative py-32">
      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-10">
        <Reveal className="text-center mb-12">
          <p className="section-kicker mb-3">// 08 — code of conduct</p>
          <h2 className="section-title">
            Responsible <span className="aurora-text italic">Disclosure</span>
          </h2>
          <div className="soft-divider" />
        </Reveal>

        <Reveal delay={80}>
          <div className="grad-border mb-8">
            <div className="p-8 sm:p-10 rounded-[19px] relative overflow-hidden">
              <div
                className="absolute -top-24 -left-24 w-80 h-80 rounded-full blur-3xl opacity-50 pointer-events-none"
                style={{ background: 'radial-gradient(circle, #22d3ee55, transparent 60%)' }}
              />
              <div className="relative flex flex-col sm:flex-row items-start gap-6">
                <div
                  className="w-14 h-14 rounded-2xl grid place-items-center shrink-0"
                  style={{
                    background: 'linear-gradient(135deg, #22d3ee33, #8b5cf611)',
                    border: '1px solid #22d3ee55',
                  }}
                >
                  <ShieldCheck className="w-6 h-6 text-white" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="font-display text-2xl sm:text-3xl text-white mb-2">
                    Ethical security practice
                  </h3>
                  <p className="text-white/70 leading-relaxed text-pretty">
                    All security research and testing showcased on this site is conducted
                    ethically and within authorized environments. I follow responsible
                    disclosure practices and report vulnerabilities through proper channels,
                    in accordance with program guidelines and timelines. The work prioritizes
                    user safety, transparency, and long-term security over exploitation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {PILLARS.map((p, i) => {
            const Icon = p.icon;
            return (
              <Reveal key={p.title} delay={i * 80}>
                <div className="glass-card p-6 h-full">
                  <div className="flex items-center gap-3 mb-3">
                    <Icon className="w-4 h-4 text-aurora-cyan" />
                    <CheckCircle2 className="w-3 h-3 text-aurora-teal" />
                  </div>
                  <h4 className="font-display text-lg text-white mb-1.5">{p.title}</h4>
                  <p className="text-white/60 text-sm leading-relaxed">{p.text}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Ethics;
