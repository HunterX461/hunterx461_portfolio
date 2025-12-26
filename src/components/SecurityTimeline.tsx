const SecurityTimeline = () => {
  const timeline = [
    {
      year: '2018',
      title: 'Early Curiosity',
      description:
        'First exposure to Linux and security concepts during school years. Explored Kali Linux and system internals driven by curiosity.',
    },
    {
      year: '2020–2021',
      title: 'Self-Learning Phase',
      description:
        'Built foundational knowledge in networking and security through hands-on experimentation. Used lightweight and mobile-based setups including Termux due to hardware constraints.',
    },
    {
      year: '2022',
      title: 'Bug Bounty & Platform Entry',
      description:
        'Began active vulnerability research across platforms including HackerOne, Bugcrowd, and Intigriti. Continued structured learning via TryHackMe and practical testing in cloud environments.',
    },
    {
      year: '2023',
      title: 'Formal Cybersecurity Path',
      description:
        'Transitioned into structured cybersecurity education, combining academic learning with real-world security research and responsible disclosure practices.',
    },
    {
      year: '2024–2025',
      title: 'Active Research & Disclosure',
      description:
        'Ongoing security research with multiple responsible disclosures across platforms. Experience spans web, cloud, and platform-level security research with a strong focus on ethics.',
    },
  ];

  return (
    <section
      id="timeline"
      className="relative py-32 bg-gradient-to-b from-slate-900 via-blue-950/20 to-slate-900"
    >
      {/* Background glow */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <p className="text-blue-400/60 text-sm tracking-[0.3em] uppercase font-light mb-4">
            Journey
          </p>
          <h2 className="text-4xl lg:text-5xl font-light text-blue-50 mb-6">
            Security Research Timeline
          </h2>
          <div className="w-16 h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent mx-auto"></div>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 top-0 bottom-0 w-px bg-blue-400/20"></div>

          <div className="space-y-16">
            {timeline.map((item) => (
              <div key={item.year} className="relative pl-16">
                {/* Dot */}
                <div className="absolute left-[6px] top-2 w-3 h-3 bg-blue-400 rounded-full"></div>

                <div className="bg-slate-800/40 backdrop-blur-sm border border-blue-400/10 rounded-2xl p-6 hover:border-blue-400/30 transition-all duration-500">
                  <span className="text-blue-400/70 text-sm font-light">
                    {item.year}
                  </span>
                  <h3 className="text-xl font-light text-blue-100 mt-1 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-blue-200/70 font-light leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecurityTimeline;
