import { Award, CheckCircle } from 'lucide-react';

const Certifications = () => {
  const certifications = [
    {
      title: 'Android Bug Bounty Hunting – Hunt Like a Rat',
      issuer: 'EC-Council',
      year: '2025',
      status: 'Active',
    },
    {
      title: 'Blockchain Basics',
      issuer: 'Cyfrin',
      year: '2025',
      status: 'Active',
    },
    {
      title: 'Purple Teaming Fundamentals',
      issuer: 'CyberWarFare Labs',
      year: '2025',
      status: 'Active',
    },
    {
      title: 'Foundation Level Threat Intelligence Analyst',
      issuer: 'arcX',
      year: '2025',
      status: 'Active',
    },
    {
      title: 'Autopsy Basics',
      issuer: 'Cybrary',
      year: '2025',
      status: 'Active',
    },
  ];

  return (
    <section
      id="certifications"
      className="relative py-32 bg-gradient-to-b from-slate-900 via-blue-950/30 to-slate-900"
    >
      <div className="absolute inset-0 opacity-20">
        <div className="absolute bottom-20 left-1/3 w-96 h-96 bg-sky-500/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-blue-400/60 text-sm tracking-[0.3em] uppercase font-light mb-4">
            Achievements
          </p>
          <h2 className="text-4xl lg:text-5xl font-light text-blue-50 mb-6">
            Certifications
          </h2>
          <div className="w-16 h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certifications.map((cert, index) => (
            <div
              key={cert.title}
              className="group relative"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-sky-400/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

              <div className="relative h-full bg-slate-800/40 backdrop-blur-sm border border-blue-400/10 rounded-2xl p-6 hover:border-blue-400/30 transition-all duration-500">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500/20 to-sky-400/20 rounded-lg flex items-center justify-center border border-blue-400/20 flex-shrink-0">
                    <Award className="w-6 h-6 text-blue-300" strokeWidth={1.5} />
                  </div>

                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="text-lg font-light text-blue-100">
                        {cert.title}
                      </h3>
                      <span className="flex items-center gap-1 text-emerald-400 text-xs">
                        <CheckCircle className="w-3 h-3" />
                        {cert.status}
                      </span>
                    </div>

                    <p className="text-blue-200/60 text-sm font-light mb-1">
                      {cert.issuer}
                    </p>

                    <p className="text-blue-300/40 text-xs font-light">
                      {cert.year}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;