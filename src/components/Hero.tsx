import { useEffect, useState } from 'react';
import { ArrowDown, Github, Linkedin, Mail, Sparkles } from 'lucide-react';
import profileImage from '../assets/tabrez.png';
import MagneticButton from './fx/MagneticButton';
import ScrambleText from './fx/ScrambleText';
import Typewriter from './fx/Typewriter';

const ROLES = [
  'Security Researcher',
  'Bug Bounty Hunter',
  'CS Undergrad',
  'CTF Player',
];

const Hero = () => {
  const [roleIdx, setRoleIdx] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const id = setInterval(() => setRoleIdx((i) => (i + 1) % ROLES.length), 2400);
    return () => clearInterval(id);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen pt-28 lg:pt-0 flex items-center justify-center overflow-hidden"
    >
      {/* Local hero accents */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[60vw] h-[60vw] max-w-[800px] max-h-[800px] rounded-full bg-aurora-violet/10 blur-[120px]" />
        <div className="absolute inset-0 grid-bg opacity-40" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* LEFT — copy */}
        <div className="lg:col-span-7 space-y-7">
          <div
            className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-[11px] tracking-[0.28em] uppercase font-mono-tight text-aurora-cyan/90 transition-all duration-700 ${
              mounted ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'
            }`}
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-aurora-cyan opacity-60" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-aurora-cyan" />
            </span>
            Available for collaboration
          </div>

          <h1
            className={`font-display font-light leading-[0.95] tracking-tight text-balance transition-all duration-1000 delay-100 ${
              mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <span className="block text-5xl sm:text-6xl lg:text-[5.8rem] text-white/90">
              <ScrambleText text="Quiet signal," trigger="mount" duration={1100} />
            </span>
            <span className="block text-5xl sm:text-6xl lg:text-[5.8rem] aurora-text italic">
              strong&nbsp;intent.
            </span>
          </h1>

          <div
            className={`flex flex-wrap items-center gap-x-4 gap-y-2 text-base sm:text-lg text-white/85 transition-all duration-1000 delay-300 ${
              mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
            }`}
          >
            <span className="font-display text-xl text-white">Mohd. Tabrez Mukadam</span>
            <span className="text-white/20">/</span>
            <span className="font-mono-tight text-xs px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-aurora-cyan">
              @HunterX461
            </span>
            <span className="text-white/20">/</span>
            <span className="font-mono-tight text-xs text-white/60">
              <Typewriter key={roleIdx} text={ROLES[roleIdx]} duration={45} />
            </span>
          </div>

          <p
            className={`text-white/65 text-base sm:text-lg leading-relaxed max-w-2xl font-light text-pretty transition-all duration-1000 delay-500 ${
              mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
            }`}
          >
            CS undergrad obsessed with breaking and rebuilding systems. I work the
            seams between{' '}
            <span className="text-white">offensive security</span>,{' '}
            <span className="text-white">cloud &amp; smart-contract auditing</span>, and{' '}
            <span className="text-white">OSINT</span> — learning in public through writeups,
            responsible disclosure, and open source.
          </p>

          <div
            className={`flex flex-wrap items-center gap-4 pt-4 transition-all duration-1000 delay-700 ${
              mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
            }`}
          >
            <MagneticButton
              as="a"
              href="#projects"
              className="btn-aurora"
              onClick={() => {
                /* anchor handles it */
              }}
            >
              <Sparkles className="w-4 h-4" />
              View Projects
            </MagneticButton>

            <MagneticButton
              as="a"
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost"
            >
              Resume_v1.0
              <ArrowDown className="w-4 h-4 -rotate-90" />
            </MagneticButton>
          </div>

          {/* Socials */}
          <div
            className={`flex items-center gap-5 pt-6 transition-all duration-1000 delay-900 ${
              mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
            }`}
          >
            <a
              href="https://github.com/HunterX461"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="group flex items-center gap-2 text-white/55 hover:text-white transition-colors"
              data-cursor="hover"
            >
              <Github className="w-4 h-4" />
              <span className="text-xs font-mono-tight underline-grad">github</span>
            </a>
            <a
              href="https://www.linkedin.com/in/mohd-tabrez-mukadam-662273296/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="group flex items-center gap-2 text-white/55 hover:text-white transition-colors"
              data-cursor="hover"
            >
              <Linkedin className="w-4 h-4" />
              <span className="text-xs font-mono-tight underline-grad">linkedin</span>
            </a>
            <a
              href="mailto:tabrezmukadam57@gmail.com"
              aria-label="Email"
              className="group flex items-center gap-2 text-white/55 hover:text-white transition-colors"
              data-cursor="hover"
            >
              <Mail className="w-4 h-4" />
              <span className="text-xs font-mono-tight underline-grad">tabrezmukadam57@gmail.com</span>
            </a>
          </div>
        </div>

        {/* RIGHT — portrait */}
        <div className="lg:col-span-5">
          <div
            className={`relative mx-auto max-w-sm transition-all duration-1200 delay-300 ${
              mounted ? 'opacity-100 translate-y-0 rotate-0' : 'opacity-0 translate-y-6 rotate-2'
            }`}
          >
            {/* Glow halo */}
            <div className="absolute -inset-10 rounded-full bg-gradient-to-tr from-aurora-violet/40 via-aurora-cyan/25 to-aurora-teal/30 blur-3xl opacity-70 animate-aurora-drift" />

            {/* Rotating ring */}
            <div className="absolute inset-0 -m-6 rounded-full border border-white/10 [mask-image:linear-gradient(180deg,white,transparent_85%)] animate-[spin_30s_linear_infinite] pointer-events-none" />
            <div className="absolute inset-0 -m-12 rounded-full border border-white/5 [mask-image:linear-gradient(0deg,white,transparent_85%)] animate-[spin_60s_linear_infinite_reverse] pointer-events-none" />

            {/* Card */}
            <div className="relative grad-border overflow-hidden">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[19px]">
                <img
                  src={profileImage}
                  alt="Mohd. Tabrez Mukadam"
                  className="w-full h-full object-cover scale-[1.02]"
                  loading="eager"
                />
                {/* Scanline + gradient overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-ink-950/80 via-transparent to-transparent" />
                <div
                  className="absolute inset-0 mix-blend-overlay opacity-30 pointer-events-none"
                  style={{
                    background:
                      'repeating-linear-gradient(180deg, rgba(255,255,255,0.04) 0 2px, transparent 2px 4px)',
                  }}
                />
                {/* Floating tag */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                  <div className="flex items-center gap-2 px-3 py-1.5 rounded-full glass">
                    <span className="w-1.5 h-1.5 rounded-full bg-aurora-teal animate-pulse" />
                    <span className="text-[10px] font-mono-tight tracking-widest uppercase text-white/85">
                      Live · IN
                    </span>
                  </div>
                  <span className="text-[10px] font-mono-tight tracking-widest text-white/60">
                    Asset_01
                  </span>
                </div>
              </div>
            </div>

            {/* Side meta */}
            <div className="hidden md:flex absolute -right-6 top-6 flex-col items-end text-right gap-2 font-mono-tight text-[10px] tracking-widest text-white/40">
              <span>// id</span>
              <span className="text-white/70">462-INDIA</span>
              <span className="mt-3">// since</span>
              <span className="text-white/70">2018</span>
            </div>
          </div>
        </div>
      </div>

      {/* Marquee */}
      <div className="absolute bottom-12 left-0 right-0 overflow-hidden border-y border-white/5 bg-black/20 backdrop-blur-sm pointer-events-none">
        <div className="flex whitespace-nowrap animate-marquee py-2 font-mono-tight text-[11px] uppercase tracking-[0.32em] text-white/40">
          {[...Array(2)].map((_, k) => (
            <div key={k} className="flex items-center gap-8 pr-8">
              <span>OWASP Top 10</span><span className="text-aurora-violet">●</span>
              <span>Burp Suite</span><span className="text-aurora-cyan">●</span>
              <span>Smart Contract Auditing</span><span className="text-aurora-teal">●</span>
              <span>Threat Intelligence</span><span className="text-aurora-rose">●</span>
              <span>CTF / Hack The Box</span><span className="text-aurora-violet">●</span>
              <span>Responsible Disclosure</span><span className="text-aurora-cyan">●</span>
              <span>Python · Rust · Solidity</span><span className="text-aurora-teal">●</span>
              <span>Cloud Defense</span><span className="text-aurora-rose">●</span>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll cue */}
      <a
        href="#about"
        className="absolute bottom-2 left-1/2 -translate-x-1/2 text-white/40 hover:text-white/70 transition-colors text-[10px] font-mono-tight tracking-widest uppercase flex flex-col items-center gap-1"
        aria-label="Scroll down"
      >
        <span>Scroll</span>
        <ArrowDown className="w-3 h-3 animate-bounce" />
      </a>
    </section>
  );
};

export default Hero;
