import { Link } from 'react-router-dom';
import { Terminal, Shield, ArrowRight, Search, Eye } from 'lucide-react';

const WriteupsSection = () => {
  return (
    <section id="writeups" className="py-20 bg-slate-900 border-t border-slate-800 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 flex items-center justify-center gap-3">
            <Terminal className="text-blue-500" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
              Security Logs
            </span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Detailed breakdowns of CTF challenges and vulnerability research. 
            Written for humans, not robots.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
          
          {/* Card: LocalRoot (ThunderCipher) */}
          <Link to="/writeups/localroot" className="group relative block h-full">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-xl blur opacity-20 group-hover:opacity-40 transition duration-500"></div>
            <div className="relative bg-slate-800 border border-slate-700 p-6 rounded-xl h-full flex flex-col hover:border-blue-500/50 transition-all duration-300 hover:-translate-y-1">
              
              <div className="flex justify-between items-start mb-4">
                <span className="bg-red-500/10 text-red-400 text-xs font-mono py-1 px-2 rounded border border-red-500/20 flex items-center gap-1">
                  <Shield size={12} /> ROOT ACCESS
                </span>
                <span className="text-slate-500 text-xs font-mono">Jan 14, 2026</span>
              </div>

              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                LocalRoot: Docker Breakout
              </h3>

              <p className="text-slate-400 text-sm mb-6 flex-grow leading-relaxed">
                A story about how a simple "Keyword Counter" website allowed me to accidentally mount the server's hard drive via Docker API.
              </p>

              <div className="flex items-center text-blue-400 font-mono text-sm mt-auto group/link">
                <span className="mr-2">Read Log</span>
                <ArrowRight size={16} className="group-hover/link:translate-x-1 transition-transform" />
              </div>
            </div>
          </Link>

          {/* Card: Got Clout (KC7) */}
          <Link to="/writeups/got-clout" className="group relative block h-full">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-500 rounded-xl blur opacity-20 group-hover:opacity-40 transition duration-500"></div>
            <div className="relative bg-slate-800 border border-slate-700 p-6 rounded-xl h-full flex flex-col hover:border-purple-500/50 transition-all duration-300 hover:-translate-y-1">
              
              <div className="flex justify-between items-start mb-4">
                <span className="bg-purple-500/10 text-purple-400 text-xs font-mono py-1 px-2 rounded border border-purple-500/20 flex items-center gap-1">
                  <Search size={12} /> OSINT & FORENSICS
                </span>
                <span className="text-slate-500 text-xs font-mono">Jan 24, 2026</span>
              </div>

              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">
                Got Clout: The Dior Breach
              </h3>

              <p className="text-slate-400 text-sm mb-6 flex-grow leading-relaxed">
                Step-by-step investigation into a sophisticated phishing campaign targeting influencers, using KQL and digital forensics. [cite: 35, 55, 56]
              </p>

              <div className="flex items-center text-purple-400 font-mono text-sm mt-auto group/link">
                <span className="mr-2">Analyze Log</span>
                <ArrowRight size={16} className="group-hover/link:translate-x-1 transition-transform" />
              </div>
            </div>
          </Link>

        </div>
      </div>
    </section>
  );
};

export default WriteupsSection;
