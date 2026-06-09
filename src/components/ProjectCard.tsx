import { ExternalLink, GitFork, Github, Star, ArrowUpRight } from 'lucide-react';
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
    <article className="group glass-card p-6 h-full flex flex-col" data-cursor="hover">
      <div className="flex items-start justify-between gap-4 mb-4">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-2">
            <span className="font-mono-tight text-[10px] uppercase tracking-[0.22em] text-white/40">
              repository
            </span>
            {project.badge && <Badge label={project.badge} active />}
          </div>
          <h3 className="font-display text-2xl sm:text-3xl text-white">{project.name}</h3>
        </div>
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Open ${project.name} on GitHub`}
          className="w-10 h-10 grid place-items-center rounded-full glass text-white/70 hover:text-white transition shrink-0"
          data-cursor="hover"
        >
          <Github className="w-4 h-4" />
        </a>
      </div>

      <p className="text-sm text-white/65 leading-relaxed mb-5 flex-grow text-pretty">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-1.5 mb-5">
        {project.technologies.map((t) => (
          <Badge key={t} label={t} />
        ))}
      </div>

      <div className="flex items-center gap-4 pt-4 border-t border-white/8 font-mono-tight text-[11px] uppercase tracking-[0.22em] text-white/55">
        <span className="inline-flex items-center gap-1.5">
          <Star className="w-3.5 h-3.5 text-aurora-amber" />
          {project.stars ?? '—'}
        </span>
        <span className="inline-flex items-center gap-1.5">
          <GitFork className="w-3.5 h-3.5 text-aurora-cyan" />
          {project.forks ?? '—'}
        </span>
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="ml-auto inline-flex items-center gap-1.5 text-white/85 hover:text-white transition"
          data-cursor="hover"
        >
          <span className="underline-grad normal-case tracking-wide">View repo</span>
          <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          <ExternalLink className="hidden" />
        </a>
      </div>
    </article>
  );
};

export default ProjectCard;
