import { useEffect, useState } from 'react';
import profileImage from '../assets/tabrez.png';

const Hero = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen pt-24 lg:pt-0 flex items-center justify-center overflow-x-hidden noise-overlay">
      <div className="absolute inset-0 bg-gradient-to-b from-[#1a2332] via-[#152030] to-[#101826]" />

      <div className="absolute inset-0 opacity-40 pointer-events-none overflow-hidden">
        <div className="absolute top-24 left-1/2 -translate-x-1/2 w-72 h-72 sm:w-[30rem] sm:h-[30rem] bg-[#4a7c9e]/15 rounded-full blur-3xl" />
        <div className="absolute bottom-24 left-1/2 -translate-x-1/2 w-72 h-72 sm:w-[32rem] sm:h-[32rem] bg-[#2d5a3d]/15 rounded-full blur-3xl" />
      </div>

      <div className="absolute inset-y-0 left-0 w-px bg-gradient-to-b from-transparent via-[#93bdd7]/30 to-transparent animate-pulse" />
      <div className="absolute inset-y-0 right-0 w-px bg-gradient-to-b from-transparent via-[#93bdd7]/20 to-transparent animate-pulse" />
      <div className="absolute inset-0 pointer-events-none opacity-20">
        {[...Array(10)].map((_, index) => (
          <span
            key={index}
            className="absolute top-[-20%] w-px h-16 bg-gradient-to-b from-[#93bdd7]/20 to-transparent animate-[rain_5s_linear_infinite]"
            style={{
              left: `${index * 10 + 5}%`,
              animationDelay: `${index * 0.45}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div
          className={`space-y-6 transition-all duration-1000 delay-300 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <p className="text-[#93bdd7] font-mono text-xs tracking-widest uppercase">
            // Quiet signal, strong intent
          </p>

          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-light text-[#e8eef5] leading-tight">
            Security
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4a7c9e] to-[#8ab8d1]">
              Researcher
            </span>
          </h1>

          <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-lg sm:text-xl font-light text-[#d5e3ef]">
            <span>Mohd. Tabrez Mukadam</span>
            <span className="hidden sm:inline text-[#4a7c9e]/40">|</span>
            <span className="font-mono text-[#93bdd7] bg-[#1a2332]/70 px-2 py-0.5 rounded text-base border border-[#4a7c9e]/30">
              HunterX461
            </span>
          </div>

          <p className="text-[#a0afc0] text-base sm:text-lg font-light leading-relaxed max-w-xl">
            Exploring vulnerabilities with methodical calm across{' '}
            <span className="text-[#e8eef5] font-medium">offensive security</span>,{' '}
            <span className="text-[#e8eef5] font-medium">cloud defense</span>, and{' '}
            <span className="text-[#e8eef5] font-medium">OSINT</span>. Learning in public through
            writeups, open source, and ethical disclosure.
          </p>

          <div className="flex flex-wrap gap-4 pt-6">
            <button
              onClick={() =>
                document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
              }
              className="px-7 py-3 bg-[#4a7c9e]/20 border border-[#4a7c9e]/45 text-[#e8eef5] rounded-lg hover:bg-[#4a7c9e]/30 transition-all duration-300"
            >
              View Projects
            </button>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-7 py-3 border border-[#4a7c9e]/30 text-[#d5e3ef] rounded-lg hover:border-[#4a7c9e]/55 hover:bg-[#1a2332]/60 transition-all duration-300"
            >
              Resume_v1.0
            </a>
          </div>
        </div>

        <div
          className={`relative transition-all duration-1000 delay-500 ${
            visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-6'
          }`}
        >
          <div className="relative aspect-square max-w-xs sm:max-w-sm lg:max-w-md mx-auto">
            <div className="absolute inset-0 bg-gradient-to-br from-[#4a7c9e]/30 to-[#2d5a3d]/20 rounded-2xl blur-2xl" />

            <div className="relative h-full bg-[#1a2332]/55 backdrop-blur-md border border-[#e8eef5]/10 rounded-2xl overflow-hidden">
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

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-[#4a7c9e]/40 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-[#93bdd7]/60 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
