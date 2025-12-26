import { useEffect, useState } from 'react';
import profileImage from '../assets/tabrez.jpg';

const Hero = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-blue-950 to-slate-900"></div>

      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-sky-500/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div
          className={`space-y-8 transition-all duration-1000 delay-300 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="space-y-4">
            <p className="text-blue-300/60 text-sm tracking-[0.3em] uppercase font-light">
              Welcome
            </p>

            <h1 className="text-6xl lg:text-7xl font-light text-blue-50 leading-tight">
              Cybersecurity
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-sky-300">
                Engineer
              </span>
            </h1>

            <p className="text-blue-300/70 text-xl font-light">
              Mohd. Tabrez Mukadam
              <span className="text-blue-400/40"> · HunterX461</span>
            </p>

            <p className="text-blue-200/60 text-sm font-light max-w-xl">
              Security researcher focused on web, cloud, and blockchain systems.
            </p>

            <div className="pt-2">
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-2 bg-blue-500/10 border border-blue-400/30 text-blue-100 rounded-full hover:bg-blue-500/20 hover:border-blue-400/50 transition-all duration-300 text-sm"
              >
                Download Resume
              </a>
            </div>
          </div>

          <p className="text-blue-200/70 text-lg font-light leading-relaxed max-w-xl">
            Computer Science undergraduate focused on cybersecurity, cloud systems,
            and building thoughtful software. I enjoy exploring how technology,
            design, and security come together to create reliable, meaningful experiences.
          </p>

          <div className="flex gap-4 pt-4">
            <button
              onClick={() =>
                document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
              }
              className="px-8 py-3 bg-blue-500/10 border border-blue-400/30 text-blue-100 rounded-full hover:bg-blue-500/20 hover:border-blue-400/50 transition-all duration-300 backdrop-blur-sm"
            >
              View Projects
            </button>
            <button
              onClick={() =>
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
              }
              className="px-8 py-3 border border-blue-400/20 text-blue-200 rounded-full hover:border-blue-400/40 transition-all duration-300"
            >
              Get in Touch
            </button>
          </div>
        </div>

        {/* Right Visual — REAL PHOTO */}
        <div
          className={`relative transition-all duration-1000 delay-500 ${
            visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
          }`}
        >
          <div className="relative aspect-square max-w-lg mx-auto">
            {/* Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/30 to-sky-400/20 rounded-3xl blur-2xl"></div>

            {/* Image Container */}
            <div className="relative h-full bg-slate-900/40 backdrop-blur-sm border border-blue-400/20 rounded-3xl p-4 flex items-center justify-center">
              <img
                src={profileImage}
                alt="Mohd. Tabrez Mukadam"
                className="w-full h-full object-cover rounded-2xl grayscale-[10%] contrast-105"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-blue-400/30 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-blue-400/50 rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
