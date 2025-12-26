import { ShieldCheck } from 'lucide-react';

const Ethics = () => {
  return (
    <section
      id="ethics"
      className="relative py-32 bg-gradient-to-b from-slate-900 via-blue-950/20 to-slate-900"
    >
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-blue-400/60 text-sm tracking-[0.3em] uppercase font-light mb-4">
            Ethics
          </p>
          <h2 className="text-4xl lg:text-5xl font-light text-blue-50 mb-6">
            Responsible Disclosure
          </h2>
          <div className="w-16 h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent mx-auto"></div>
        </div>

        <div className="relative bg-slate-800/40 backdrop-blur-sm border border-blue-400/10 rounded-2xl p-8 hover:border-blue-400/30 transition-all duration-500">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center border border-blue-400/20">
              <ShieldCheck className="w-6 h-6 text-blue-300" strokeWidth={1.5} />
            </div>
            <h3 className="text-xl font-light text-blue-100">
              Ethical Security Practice
            </h3>
          </div>

          <p className="text-blue-200/70 font-light leading-relaxed">
            All security research and testing showcased on this site is conducted
            ethically and within authorized environments. I follow responsible
            disclosure practices and report vulnerabilities through proper channels,
            in accordance with program guidelines and timelines. My work prioritizes
            user safety, transparency, and long-term security over exploitation.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Ethics;
