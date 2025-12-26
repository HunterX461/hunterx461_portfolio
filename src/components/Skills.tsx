import { Shield, Bug, Code2, Server } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      icon: Shield,
      title: 'Cybersecurity & Research',
      skills: [
        'Penetration Testing',
        'Vulnerability Assessment',
        'Bug Bounty Hunting',
        'Threat Intelligence',
        'Incident Response',
        'OWASP Top 10',
      ],
      color: 'from-blue-500/20 to-cyan-500/20',
    },
    {
      icon: Bug,
      title: 'Application & Blockchain Security',
      skills: [
        'Web Application Security',
        'Smart Contract Auditing',
        'Blockchain Security',
        'DeFi Protocol Analysis',
        'Exploit Analysis',
      ],
      color: 'from-sky-500/20 to-blue-500/20',
    },
    {
      icon: Code2,
      title: 'Programming & Scripting',
      skills: [
        'Python',
        'JavaScript',
        'Solidity',
        'Rust',
        'Bash',
        'HTML & CSS',
      ],
      color: 'from-cyan-500/20 to-sky-500/20',
    },
    {
      icon: Server,
      title: 'Tools & Platforms',
      skills: [
        'Burp Suite',
        'Metasploit',
        'Wireshark',
        'Nmap',
        'Autopsy',
        'Docker',
        'Linux',
        'Git & GitHub',
      ],
      color: 'from-blue-500/20 to-sky-500/20',
    },
  ];

  return (
    <section
      id="skills"
      className="relative py-32 bg-gradient-to-b from-slate-900 via-blue-950/30 to-slate-900"
    >
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-1/3 w-96 h-96 bg-sky-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-blue-400/60 text-sm tracking-[0.3em] uppercase font-light mb-4">
            What I Work With
          </p>
          <h2 className="text-4xl lg:text-5xl font-light text-blue-50 mb-6">
            Skills & Expertise
          </h2>
          <div className="w-16 h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={category.title}
                className="group relative"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${category.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700`}
                ></div>

                <div className="relative h-full bg-slate-800/40 backdrop-blur-sm border border-blue-400/10 rounded-2xl p-8 hover:border-blue-400/30 transition-all duration-500">
                  <div className="flex items-center gap-4 mb-6">
                    <div
                      className={`w-12 h-12 bg-gradient-to-br ${category.color} rounded-lg flex items-center justify-center border border-blue-400/20`}
                    >
                      <Icon className="w-6 h-6 text-blue-300" strokeWidth={1.5} />
                    </div>
                    <h3 className="text-xl font-light text-blue-100">
                      {category.title}
                    </h3>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-4 py-2 bg-slate-700/30 border border-blue-400/20 rounded-full text-sm text-blue-200/80 font-light hover:bg-slate-700/50 hover:border-blue-400/40 transition-all duration-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;