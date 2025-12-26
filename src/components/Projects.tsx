import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'ClaimGuardian AI',
      description:
        'An AI-assisted system designed to support insurance claim reviewers by identifying potential fraud patterns. Combines machine learning with cloud-based AI reasoning to provide transparent risk scoring and human-readable explanations.',
      tags: ['Machine Learning', 'Python', 'Cloud', 'AI Security'],
      gradient: 'from-blue-500/20 to-sky-500/20',
    },
    {
      title: 'Security Research & Bug Bounty',
      description:
        'Conducted security research across multiple web applications and platforms, submitting multiple validated vulnerability reports through responsible disclosure on platforms such as HackerOne, Bugcrowd, and Intigriti.',
      tags: ['Web Security', 'Bug Bounty', 'OWASP', 'Responsible Disclosure'],
      gradient: 'from-sky-500/20 to-cyan-500/20',
    },
    {
      title: 'Smart Contract Security Audits',
      description:
        'Performed security analysis and audits of Solidity-based smart contracts for DeFi protocols, identifying issues related to access control, token approvals, and ownership logic with potential financial risk.',
      tags: ['Blockchain', 'Solidity', 'DeFi', 'Security Auditing'],
      gradient: 'from-blue-500/20 to-cyan-500/20',
    },
    {
      title: 'CTFs & Competitive Security',
      description:
        'Participated in Capture The Flag competitions and security labs to strengthen skills in exploit development, reverse engineering, and real-world attack scenarios using platforms such as Hack The Box and TryHackMe.',
      tags: ['CTF', 'Exploit Development', 'Reverse Engineering'],
      gradient: 'from-cyan-500/20 to-sky-500/20',
    },
  ];

  return (
    <section id="projects" className="relative py-32 bg-slate-900">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-blue-400/60 text-sm tracking-[0.3em] uppercase font-light mb-4">
            My Work
          </p>
          <h2 className="text-4xl lg:text-5xl font-light text-blue-50 mb-6">
            Featured Projects
          </h2>
          <div className="w-16 h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent mx-auto"></div>
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

              <div className="relative h-full bg-slate-800/40 backdrop-blur-sm border border-blue-400/10 rounded-2xl overflow-hidden hover:border-blue-400/30 transition-all duration-500">
                <div className="aspect-video bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center border-b border-blue-400/10">
                  <div className="text-blue-400/30 text-6xl">✦</div>
                </div>

                <div className="p-6 space-y-4">
                  <h3 className="text-2xl font-light text-blue-100">
                    {project.title}
                  </h3>

                  <p className="text-blue-200/60 font-light leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-slate-700/30 border border-blue-400/20 rounded-full text-xs text-blue-300/80 font-light"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex gap-4 pt-4">
                    <button
                      onClick={() =>
                        document
                          .getElementById('contact')
                          ?.scrollIntoView({ behavior: 'smooth' })
                      }
                      className="flex items-center gap-2 text-sm text-blue-300/70 hover:text-blue-300 transition-colors duration-300 underline underline-offset-4"
                    >
                      <ExternalLink className="w-4 h-4" strokeWidth={1.5} />
                      <span>Details available on request</span>
                    </button>

                    <span className="flex items-center gap-2 text-sm text-blue-300/50">
                      <Github className="w-4 h-4" strokeWidth={1.5} />
                      <span>Private / Research Work</span>
                    </span>
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

export default Projects;
