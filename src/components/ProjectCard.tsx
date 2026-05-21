import { ExternalLink, GitFork, Github, Star } from 'lucide-react';
import Badge from './Badge';

export interface OpenSourceProject {
  name: string;
  description: string;
  technologies: string[];
  link: string;
  stars?: number;
  forks?: number;
  badge?: string;
}

interface ProjectCardProps {
  project: OpenSourceProject;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <article className="glass-card p-6 h-full flex flex-col">
      <div className="flex items-start justify-between gap-4 mb-4">
        <div>
          <h3 className="text-2xl text-[#e8eef5] mb-2">{project.name}</h3>
          {project.badge && <Badge label={project.badge} active />}
        </div>
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#93bdd7] hover:text-[#e8eef5] transition-colors"
          aria-label={`Open ${project.name} on GitHub`}
        >
          <Github className="w-5 h-5" />
        </a>
      </div>

      <p className="text-sm text-[#a0afc0] leading-relaxed mb-5 flex-grow">{project.description}</p>

      <div className="flex flex-wrap gap-2 mb-5">
        {project.technologies.map((technology) => (
          <Badge key={technology} label={technology} />
        ))}
      </div>

      <div className="flex items-center gap-5 text-sm text-[#a0afc0]">
        <span className="inline-flex items-center gap-1.5">
          <Star className="w-4 h-4" />
          {project.stars ?? '—'}
        </span>
        <span className="inline-flex items-center gap-1.5">
          <GitFork className="w-4 h-4" />
          {project.forks ?? '—'}
        </span>
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 ml-auto text-[#93bdd7] hover:text-[#e8eef5] transition-colors"
        >
          View Repo
          <ExternalLink className="w-4 h-4" />
        </a>
      </div>
    </article>
  );
};

export default ProjectCard;
