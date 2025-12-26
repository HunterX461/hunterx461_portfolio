import { useEffect, useState } from 'react';
import profileImage from '../assets/tabrez.png';

const Hero = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen pt-24 lg:pt-0 flex items-center justify-center overflow-x-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-blue-950 to-slate-900" />

      {/* Ambient glows */}
      <div className="absolute inset-0 opacity-30 pointer-events-none overflow-hidden">
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-64 h-64 sm:w-96 sm:h-96 bg-blue-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-1/2 -translate-x-1/2 w-64 h-64 sm:w-96 sm:h-96 bg-sky-500/20 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* LEFT CONTENT */}
        <div
          className={`space-y-6 transition-all duration-1000 delay-300 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          {/* subtle terminal cue */}
          <p className="text-blue-400 font-mono text-xs tracking-widest uppercase">
            // SYSTEM.READY
          </p>

          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-light text-blue-50 leading-tight">
            Cybersecurity
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-sky-300">
              Engineer
            </span>
          </h1>

          {/* Name + Alias */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-lg sm:text-xl font-light text-blue-200/90">
            <span>Mohd. Tabrez Mukadam</span>
            <span className="hidden sm:inline text-blue-500/40">|</span>
            <span className="font-mono text-blue-400 bg-blue-500/10 px-2 py-0.5 rounded text-base border border-blue-500/20">
              HunterX461
            </span>
          </div>

          {/* Bio */}
          <p className="text-blue-200/70 text-base sm:text-lg font-light leading-relaxed max-w-xl">
            Specializing in <span className="text-blue-100 font-medium">Offensive Security</span>,{' '}
            <span className="text-blue-100 font-medium">Cloud Defense</span>, and{' '}
            <span className="text-blue-100 font-medium">OSINT</span>. I focus on analyzing threats
            and securing modern digital systems.
          </p>

          {/* Actions */}
          <div className="flex flex-wrap gap-4 pt-6">
            <button
              onClick={() =>
                document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
              }
              className="px-7 py-3 bg-blue-500/15 border border-blue-400/40 text-blue-100 rounded-lg hover:bg-blue-500/25 transition-all duration-300"
            >
              View Projects
            </button>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-7 py-3 border border-blue-400/25 text-blue-200 rounded-lg hover:border-blue-400/50 hover:bg-blue-500/10 transition-all duration-300"
            >
              Resume_v1.0
            </a>
          </div>
        </div>

        {/* RIGHT — PHOTO */}
        <div
          className={`relative transition-all duration-1000 delay-500 ${
            visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-6'
          }`}
        >
          <div className="relative aspect-square max-w-xs sm:max-w-sm lg:max-w-md mx-auto">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/25 to-sky-400/15 rounded-2xl blur-2xl" />

            <div className="relative h-full bg-slate-900/50 backdrop-blur-sm border border-blue-400/20 rounded-2xl overflow-hidden">
              <img
                src={profileImage}
                alt="Mohd. Tabrez Mukadam"
                className="w-full h-full object-cover"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-blue-400/30 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-blue-400/50 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
