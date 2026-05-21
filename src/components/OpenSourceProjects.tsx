import { useEffect, useState } from 'react';
import FadeInSection from './FadeInSection';
import ProjectCard, { type OpenSourceProject } from './ProjectCard';

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
  if (parts.length < 2) {
    return null;
  }
  return { owner: parts[0], repo: parts[1] };
};

const OpenSourceProjects = () => {
  const [projects, setProjects] = useState<OpenSourceProject[]>(baseProjects);

  useEffect(() => {
    const controller = new AbortController();

    const loadStats = async () => {
      try {
        const projectsWithStats = await Promise.all(
          baseProjects.map(async (project) => {
            const repoPath = parseRepositoryPath(project.link);
            if (!repoPath) {
              return project;
            }

            const response = await fetch(
              `https://api.github.com/repos/${repoPath.owner}/${repoPath.repo}`,
              { signal: controller.signal },
            );

            if (!response.ok) {
              return project;
            }

            const data = (await response.json()) as {
              stargazers_count?: number;
              forks_count?: number;
            };

            return {
              ...project,
              stars: data.stargazers_count,
              forks: data.forks_count,
            };
          }),
        );

        setProjects(projectsWithStats);
      } catch {
        // Keep static data if GitHub API is unavailable.
      }
    };

    void loadStats();
    return () => controller.abort();
  }, []);

  return (
    <section id="open-source" className="relative py-32">
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="section-kicker">Building in Public</p>
          <h2 className="section-title">Open Source Security Projects</h2>
          <div className="soft-divider"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <FadeInSection key={project.name}>
              <ProjectCard project={project} />
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OpenSourceProjects;
