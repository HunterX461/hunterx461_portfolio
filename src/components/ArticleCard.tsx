import { Clock3, ArrowUpRight, CalendarDays } from 'lucide-react';
import Badge from './Badge';

export interface Article {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  tags: string[];
  link: string;
}

interface ArticleCardProps {
  article: Article;
}

const ArticleCard = ({ article }: ArticleCardProps) => {
  return (
    <article className="group glass-card p-6 h-full flex flex-col" data-cursor="hover">
      <div className="flex items-center justify-between text-[10px] font-mono-tight uppercase tracking-[0.22em] text-white/45 mb-4">
        <span className="inline-flex items-center gap-1.5">
          <CalendarDays className="w-3 h-3" />
          {article.date}
        </span>
        <span className="inline-flex items-center gap-1.5">
          <Clock3 className="w-3 h-3" />
          {article.readTime}
        </span>
      </div>

      <h3 className="font-display text-xl sm:text-2xl text-white leading-snug mb-3 text-balance">
        {article.title}
      </h3>

      <p className="text-sm text-white/60 leading-relaxed mb-5 flex-grow text-pretty">
        {article.excerpt}
      </p>

      <div className="flex flex-wrap gap-1.5 mb-5">
        {article.tags.map((tag) => (
          <Badge key={tag} label={tag} />
        ))}
      </div>

      <a
        href={article.link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 text-sm text-white/85 hover:text-white transition self-start"
        data-cursor="hover"
      >
        <span className="underline-grad">Read article</span>
        <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </a>
    </article>
  );
};

export default ArticleCard;
