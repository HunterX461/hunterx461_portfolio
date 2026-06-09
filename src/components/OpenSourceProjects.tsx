import { useEffect, useState } from 'react';
import ProjectCard, { type OpenSourceProject } from './ProjectCard';
import Reveal from './fx/Reveal';

const baseProjects: OpenSourceProject[] = [
  {
    name: 'Protocol Zero',
    description:
      'Security research framework and toolkit for repeatable vulnerability analysis, recon workflows, and structured documentation.',
    technologies: ['Security Research', 'Python', 'Automation', 'Methodology'],
    link: 'https://github.com/HunterX461/protocol-zero',
    badge: 'Featured',
  },
  {
    name: 'QuantPairs Lab',
    description:
      'Quantitative strategy lab with market-neutral pair research, statistical testing, and backtesting workflows.',
    technologies: ['Python', 'Pandas', 'Automation', 'Data Analysis'],
    link: 'https://github.com/HunterX461/quantpairs-lab',
  },
];

const parseRepositoryPath = (url: string) => {
  const parts = new URL(url).pathname.split('/').filter(Boolean);
  if (parts.length < 2) return null;
  return { owner: parts[0], repo: parts[1] };
};

const OpenSourceProjects = () => {
  const [projects, setProjects] = useState<OpenSourceProject[]>(baseProjects);

  useEffect(() => {
    const controller = new AbortController();
    const loadStats = async () => {
      try {
        const enriched = await Promise.all(
          baseProjects.map(async (p) => {
            const repoPath = parseRepositoryPath(p.link);
            if (!repoPath) return p;
            const r = await fetch(
              `https://api.github.com/repos/${repoPath.owner}/${repoPath.repo}`,
              { signal: controller.signal }
            );
            if (!r.ok) return p;
            const data = (await r.json()) as {
              stargazers_count?: number;
              forks_count?: number;
            };
            return { ...p, stars: data.stargazers_count, forks: data.forks_count };
          })
        );
        setProjects(enriched);
      } catch {
        /* keep static */
      }
    };
    void loadStats();
    return () => controller.abort();
  }, []);

  return (
    <section id="open-source" className="relative py-32">
      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-10">
        <Reveal className="text-center mb-12">
          <p className="section-kicker mb-3">// 04 — building in public</p>
          <h2 className="section-title">
            Open Source <span className="aurora-text italic">Projects</span>
          </h2>
          <div className="soft-divider" />
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <Reveal key={p.name} delay={i * 80}>
              <ProjectCard project={p} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OpenSourceProjects;
