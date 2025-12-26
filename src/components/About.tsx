import { User, Heart, Code } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: User,
      title: 'Curious by Nature',
      description:
        'Driven by curiosity and a desire to understand how systems work beneath the surface, from software design to security foundations.',
    },
    {
      icon: Code,
      title: 'Engineering Mindset',
      description:
        'Focused on building reliable, well-structured software while continuously learning about cybersecurity, cloud systems, and emerging technologies.',
    },
    {
      icon: Heart,
      title: 'Human-Centered Thinking',
      description:
        'I value clarity, responsibility, and usability, believing that good technology should feel calm, intuitive, and trustworthy to the people who use it.',
    },
  ];

  return (
    <section id="about" className="relative py-32 bg-slate-900">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-40 right-1/4 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-blue-400/60 text-sm tracking-[0.3em] uppercase font-light mb-4">
            Who I Am
          </p>
          <h2 className="text-4xl lg:text-5xl font-light text-blue-50 mb-6">
            About Me
          </h2>
          <div className="w-16 h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent mx-auto"></div>
        </div>

        <div className="max-w-3xl mx-auto mb-16">
          <p className="text-blue-200/70 text-lg font-light leading-relaxed text-center">
           I’m Mohd. Tabrez Mukadam, a Computer Science undergraduate with a strong interest in cybersecurity, cloud infrastructure, and building thoughtful software systems. My learning
            journey is shaped by hands-on projects, security research, and a constant
            effort to understand how technology impacts people in real-world scenarios.
            I approach development with care, curiosity, and a focus on long-term reliability
            rather than short-term trends.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {highlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="group relative"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-sky-400/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="relative h-full bg-slate-800/30 backdrop-blur-sm border border-blue-400/10 rounded-2xl p-8 hover:border-blue-400/30 transition-all duration-500">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-500/20 to-sky-400/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                    <Icon className="w-7 h-7 text-blue-300" strokeWidth={1.5} />
                  </div>

                  <h3 className="text-xl font-light text-blue-100 mb-3">
                    {item.title}
                  </h3>

                  <p className="text-blue-200/60 font-light leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;