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
    <section id="contact" className="relative py-32 bg-slate-900">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-1/4 w-96 h-96 bg-sky-500/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-blue-400/60 text-sm tracking-[0.3em] uppercase font-light mb-4">
            Contact
          </p>
          <h2 className="text-4xl lg:text-5xl font-light text-blue-50 mb-6">
            Get in Touch
          </h2>
          <div className="w-16 h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent mx-auto mb-8"></div>
          <p className="text-blue-200/70 text-lg font-light leading-relaxed max-w-2xl mx-auto">
            I’m open to conversations around cybersecurity, research opportunities,
            projects, and learning collaborations. Feel free to reach out.
          </p>
        </div>

        <div className="mb-12">
          <div className="group relative max-w-md mx-auto">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-sky-400/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

            <div className="relative bg-slate-800/40 backdrop-blur-sm border border-blue-400/10 rounded-2xl p-8 hover:border-blue-400/30 transition-all duration-500">
              <div className="flex items-center justify-center gap-3 mb-4">
                <Mail className="w-6 h-6 text-blue-300" strokeWidth={1.5} />
                <h3 className="text-xl font-light text-blue-100">Email</h3>
              </div>
              <a
                href="mailto:tabrezmukadam57@gmail.com"
                className="block text-center text-blue-300 hover:text-blue-200 transition-colors duration-300"
              >
                tabrezmukadam57@gmail.com
              </a>
            </div>
          </div>
        </div>

        <div className="text-center">
          <p className="text-blue-300/60 text-sm font-light mb-6">
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
                  className="group relative w-12 h-12 bg-slate-800/40 backdrop-blur-sm border border-blue-400/10 rounded-full flex items-center justify-center hover:border-blue-400/30 transition-all duration-300"
                  aria-label={social.label}
                >
                  <Icon
                    className="w-5 h-5 text-blue-300 group-hover:text-blue-200 transition-colors duration-300"
                    strokeWidth={1.5}
                  />
                </a>
              );
            })}
          </div>
        </div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 mt-20 pt-12 border-t border-blue-400/10">
        <p className="text-center text-blue-300/40 text-sm font-light">
          © {new Date().getFullYear()} Mukadam Mohd. Tabrez Aslam
        </p>
      </div>
    </section>
  );
};

export default Contact;