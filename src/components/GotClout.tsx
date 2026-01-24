import { Link } from 'react-router-dom';
import { ArrowLeft, Shield, Search, Mail, Key, Hash, AlertTriangle, Terminal, Instagram, CheckCircle2, Lock, MapPin, Eye, MousePointerClick } from 'lucide-react';

const GotClout = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-300 font-sans selection:bg-blue-500 selection:text-white pb-20">
      
      {/* Navigation Bar */}
      <nav className="border-b border-slate-800 bg-slate-950/80 backdrop-blur fixed w-full top-0 z-50">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <Link to="/" className="text-blue-500 hover:text-white transition-colors font-mono flex items-center gap-2">
            <ArrowLeft size={16} /> return_home
          </Link>
          <span className="text-xs font-mono text-slate-600 border border-slate-800 px-2 py-1 rounded">
            MISSION_ID: GOT_CLOUT_FULL
          </span>
        </div>
      </nav>

      <article className="container mx-auto px-4 pt-32 pb-10 max-w-4xl">
        <header className="mb-12">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            Full Writeup: <span className="text-blue-500">Got Clout</span> (21/21 Questions)
          </h1>
          <div className="flex flex-wrap gap-3 text-sm font-mono text-slate-500">
            <span className="bg-slate-900 px-3 py-1 rounded border border-slate-800 text-blue-400">Part 1: The Breach Analysis</span>
            <span className="bg-slate-900 px-3 py-1 rounded border border-slate-800">Tool: Azure Data Explorer (KQL)</span>
          </div>
        </header>

        <div className="space-y-12">
          
          {/* Section 1: Initial Recon & Social Engineering */}
          <section>
            <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2 border-l-4 border-pink-500 pl-4 uppercase tracking-widest text-sm">
              01. OSINT & Social Engineering [Q1 - Q5]
            </h2>
            <div className="grid gap-4">
              {[
                { q: "Q1: Email used for brand deals?", a: "afomiya.storm@gmail.com", icon: <Mail size={14}/> },
                { q: "Q2: Signs of a phishing attempt?", a: "E. All of the above (Urgency, Sensitive info requests, Suspicious domains, Generic greetings)", icon: <Search size={14}/> },
                { q: "Q3: Technique used in IG Stories?", a: "Social Engineering", icon: <Instagram size={14}/> },
                { q: "Q4: Security question bypass attempt?", a: "Lalibela", icon: <Terminal size={14}/> },
                { q: "Q5: Security measure that saved the account?", a: "Multi-factor authentication (MFA)", icon: <Shield size={14}/> }
              ].map((item, i) => (
                <div key={i} className="bg-slate-900/50 border border-slate-800 p-4 rounded-lg">
                  <p className="text-white text-sm font-semibold mb-2">{item.q}</p>
                  <div className="flex items-center gap-2 text-green-400 font-mono text-xs">
                    {item.icon} <span className="bg-green-500/10 px-2 py-0.5 rounded italic">Ans: {item.a}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Section 2: Corporate Systems & KQL */}
          <section>
            <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2 border-l-4 border-blue-500 pl-4 uppercase tracking-widest text-sm">
              02. Corporate Intrusion & KQL Analysis [Q6 - Q15]
            </h2>
            <div className="space-y-4">
              <div className="bg-slate-900/50 border border-slate-800 p-4 rounded-lg">
                <p className="text-white text-sm font-semibold mb-3 text-blue-400 italic font-mono">Exploring Employees Table</p>
                <div className="space-y-3 text-xs">
                  <p><strong>Q6: Professional Email?</strong> <span className="text-green-400">afstorm@clouthaus.com</span> [cite: 62]</p>
                  <p><strong>Q7: Role at CloutHaus?</strong> <span className="text-green-400">Influencer Partner</span> [cite: 67]</p>
                  <p><strong>Q8: MFA Status?</strong> <span className="text-red-500 font-bold uppercase tracking-tighter">False</span> [cite: 72]</p>
                </div>
              </div>

              <div className="bg-slate-900/50 border border-slate-800 p-4 rounded-lg">
                <p className="text-white text-sm font-semibold mb-3 text-red-400 italic font-mono">Phishing Artifacts (Dior Lure)</p>
                <div className="space-y-3 text-xs">
                  <p><strong>Q9: Sender Address?</strong> <span className="text-green-400">collabs@dior-partners.com</span> [cite: 79]</p>
                  <p><strong>Q10: Subject Line?</strong> <span className="text-green-400">[EXTERNAL] Exclusive Partnership Opportunity with Dior</span> [cite: 84]</p>
                  <p><strong>Q11: Malicious Link?</strong> <span className="text-green-400">https://super-brand-offer.com/login</span> [cite: 87]</p>
                </div>
              </div>

              <div className="bg-slate-900/50 border border-slate-800 p-4 rounded-lg">
                <p className="text-white text-sm font-semibold mb-3 text-purple-400 italic font-mono">Network Forensics</p>
                <div className="space-y-3 text-xs">
                  <p><strong>Q12: Timestamp of Link Click?</strong> <span className="text-green-400">2025-04-03T11:20:00.000Z</span> [cite: 93]</p>
                  <p><strong>Q13: Username Entered on Phishing Site?</strong> <span className="text-green-400">afstorm</span> [cite: 96]</p>
                  <p><strong>Q14: Domain IP Address?</strong> <span className="text-green-400">198.51.100.12</span> [cite: 100]</p>
                  <p><strong>Q15: Distinct domains on that IP?</strong> <span className="text-green-400">3</span> [cite: 106]</p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 3: Account Takeover & Physical Risk */}
          <section>
            <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2 border-l-4 border-yellow-500 pl-4 uppercase tracking-widest text-sm">
              03. Post-Ex & Physical Hazards [Q16 - Q21]
            </h2>
            <div className="grid gap-4">
              {[
                { q: "Q16: Confirmation of IG MFA status?", a: "I have MFA setup for my Instagram!", icon: <Lock size={14}/> },
                { q: "Q17: What are followers investing in?", a: "Phishing Scam", icon: <AlertTriangle size={14}/> },
                { q: "Q18: Name of the apartment building?", a: "City Center Apartment", icon: <MapPin size={14}/> },
                { q: "Q19: Key security risk via photo?", a: "Unlocking trouble with a photo!", icon: <Key size={14}/> },
                { q: "Q20: What should you NEVER reuse?", a: "Password", icon: <Shield size={14}/> },
                { q: "Q21: The Hunter's Mindset?", a: "Be the hunter, not the hunted!", icon: <MousePointerClick size={14}/> }
              ].map((item, i) => (
                <div key={i} className="bg-slate-900/50 border border-slate-800 p-4 rounded-lg">
                  <p className="text-white text-sm font-semibold mb-2">{item.q}</p>
                  <div className="flex items-center gap-2 text-green-400 font-mono text-xs">
                    {item.icon} <span className="bg-green-500/10 px-2 py-0.5 rounded">Ans: {item.a}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Part 2 Teaser */}
          <div className="mt-16 bg-blue-600/10 border-2 border-dashed border-blue-500/30 p-8 rounded-2xl text-center">
            <Layout className="mx-auto text-blue-500 mb-4" size={40} />
            <h4 className="text-white font-bold text-xl mb-2">Part 2: Inside the Clout Breach 🐾</h4>
            <p className="text-slate-400 text-sm italic">
              Investigation complete for Part 1. Preparing documentation for internal system analysis...
            </p>
            <div className="mt-6 flex justify-center gap-4">
              <span className="bg-blue-600 px-4 py-1.5 rounded-full text-xs font-bold text-white">COMING SOON</span>
            </div>
          </div>
        </div>

        <div className="mt-20 text-center border-t border-slate-800 pt-10">
          <Link to="/" className="inline-flex items-center gap-2 text-slate-500 hover:text-white transition-colors">
            <ArrowLeft size={16} /> Return to Portfolio
          </Link>
        </div>
      </article>
    </div>
  );
};

export default GotClout;
