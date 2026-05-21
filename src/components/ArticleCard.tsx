import { Clock3, ExternalLink } from 'lucide-react';
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
    <article className="glass-card p-6 h-full flex flex-col">
      <p className="text-xs text-[#a0afc0] mb-3">{article.date}</p>
      <h3 className="text-2xl text-[#e8eef5] mb-3">{article.title}</h3>
      <p className="text-sm text-[#a0afc0] leading-relaxed mb-5 flex-grow">{article.excerpt}</p>

      <div className="flex items-center gap-2 text-xs text-[#a0afc0] mb-4">
        <Clock3 className="w-3.5 h-3.5" />
        <span>{article.readTime}</span>
      </div>

      <div className="flex flex-wrap gap-2 mb-5">
        {article.tags.map((tag) => (
          <Badge key={tag} label={tag} />
        ))}
      </div>

      <a
        href={article.link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 text-sm text-[#93bdd7] hover:text-[#e8eef5] transition-colors"
      >
        <span>Read article</span>
        <ExternalLink className="w-4 h-4" />
      </a>
    </article>
  );
};

export default ArticleCard;
