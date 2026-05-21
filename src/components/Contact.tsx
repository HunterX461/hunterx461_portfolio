import { Mail, Github, Linkedin } from 'lucide-react';

const Contact = () => {
  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/HunterX461',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/mohd-tabrez-mukadam-662273296/',
    },
  ];

  return (
    <section id="contact" className="relative py-32">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-1/4 w-96 h-96 bg-sky-500/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="section-kicker">Contact</p>
          <h2 className="section-title">Get in Touch</h2>
          <div className="soft-divider mb-8"></div>
          <p className="text-[#a0afc0] text-lg font-light leading-relaxed max-w-2xl mx-auto">
            I’m open to conversations around cybersecurity, research opportunities,
            projects, and learning collaborations. Feel free to reach out.
          </p>
        </div>

        <div className="mb-12">
          <div className="group relative max-w-md mx-auto">
            <div className="absolute inset-0 bg-gradient-to-br from-[#4a7c9e]/15 to-[#2d5a3d]/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

            <div className="glass-card relative p-8">
              <div className="flex items-center justify-center gap-3 mb-4">
                <Mail className="w-6 h-6 text-[#93bdd7]" strokeWidth={1.5} />
                <h3 className="text-xl font-light text-[#e8eef5]">Email</h3>
              </div>
              <a
                href="mailto:tabrezmukadam57@gmail.com"
                className="block text-center text-[#93bdd7] hover:text-[#e8eef5] transition-colors duration-300"
              >
                tabrezmukadam57@gmail.com
              </a>
            </div>
          </div>
        </div>

        <div className="text-center">
          <p className="text-[#a0afc0] text-sm font-light mb-6">
            Find me online
          </p>
          <div className="flex justify-center gap-6">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative w-12 h-12 bg-[#1a2332]/55 backdrop-blur-md border border-white/10 rounded-full flex items-center justify-center hover:border-[#4a7c9e]/40 transition-all duration-300"
                  aria-label={social.label}
                >
                  <Icon
                    className="w-5 h-5 text-[#93bdd7] group-hover:text-[#e8eef5] transition-colors duration-300"
                    strokeWidth={1.5}
                  />
                </a>
              );
            })}
          </div>
        </div>
      </div>

    </section>
  );
};

export default Contact;
