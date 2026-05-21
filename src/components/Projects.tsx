import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'QuantPairs Lab',
      description:
        'A high-performance quantitative analysis toolkit for crypto-asset pair trading. Implements statistical arbitrage strategies, cointegration testing, and automated backtesting frameworks for market-neutral execution.',
      tags: ['Python', 'Quantitative Finance', 'Pandas', 'Trading Bot'],
      gradient: 'from-emerald-500/20 to-teal-500/20',
      github: 'https://github.com/HunterX461/quantpairs-lab',
      isPublic: true,
    },
    {
      title: 'ClaimGuardian AI',
      description:
        'An AI-assisted system designed to support insurance claim reviewers by identifying potential fraud patterns. Combines machine learning with cloud-based AI reasoning to provide transparent risk scoring.',
      tags: ['Machine Learning', 'Python', 'Cloud', 'AI Security'],
      gradient: 'from-blue-500/20 to-sky-500/20',
      isPublic: false,
    },
    {
      title: 'Security Research Practice',
      description:
        'Researched multiple web application attack surfaces and documented 30 vulnerability hypotheses, improving triage quality, reproducibility, and responsible disclosure discipline.',
      tags: ['Web Security', 'Research', 'OWASP', 'Responsible Disclosure'],
      gradient: 'from-[#4a7c9e]/20 to-[#2d5a3d]/20',
      isPublic: false,
    },
    {
      title: 'Smart Contract Security Audits',
      description:
        'Performed security analysis and audits of Solidity-based smart contracts for DeFi protocols, identifying issues related to access control and ownership logic with potential financial risk.',
      tags: ['Blockchain', 'Solidity', 'DeFi', 'Security Auditing'],
      gradient: 'from-blue-500/20 to-cyan-500/20',
      isPublic: false,
    },
    {
      title: 'CTFs & Competitive Security',
      description:
        'Participated in Capture The Flag competitions and security labs to strengthen skills in exploit development and reverse engineering using platforms such as Hack The Box.',
      tags: ['CTF', 'Exploit Development', 'Reverse Engineering'],
      gradient: 'from-cyan-500/20 to-sky-500/20',
      isPublic: false,
    },
  ];

  return (
    <section id="projects" className="relative py-32">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#4a7c9e]/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="section-kicker">My Work</p>
          <h2 className="section-title">Featured Projects</h2>
          <div className="soft-divider"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group relative"
              style={{ animationDelay: `${index * 100}ms` }}
            >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${project.gradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700`}
                ></div>

                <div className="glass-card relative h-full overflow-hidden flex flex-col">
                  <div className="aspect-video bg-gradient-to-br from-[#1a2332] to-[#101826] flex items-center justify-center border-b border-white/10">
                    <div className="text-[#93bdd7]/35 text-6xl">✦</div>
                  </div>

                  <div className="p-6 space-y-4 flex-grow">
                    <h3 className="text-2xl font-light text-[#e8eef5]">
                      {project.title}
                    </h3>

                    <p className="text-[#a0afc0] font-light leading-relaxed">
                      {project.description}
                    </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-[#1a2332]/60 border border-white/10 rounded-full text-xs text-[#93bdd7] font-light"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Actions Section */}
                <div className="p-6 pt-0 mt-auto flex gap-4">
                  {project.isPublic ? (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-[#93bdd7] hover:text-[#e8eef5] transition-colors duration-300"
                    >
                      <Github className="w-4 h-4" strokeWidth={1.5} />
                      <span>View Source</span>
                    </a>
                  ) : (
                    <>
                      <button
                        onClick={() =>
                          document
                            .getElementById('contact')
                            ?.scrollIntoView({ behavior: 'smooth' })
                        }
                        className="flex items-center gap-2 text-sm text-[#93bdd7] hover:text-[#e8eef5] transition-colors duration-300 underline underline-offset-4"
                      >
                        <ExternalLink className="w-4 h-4" strokeWidth={1.5} />
                        <span>Details on request</span>
                      </button>
                      <span className="flex items-center gap-2 text-sm text-[#a0afc0]">
                        <Github className="w-4 h-4" strokeWidth={1.5} />
                        <span>Private</span>
                      </span>
                    </>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
