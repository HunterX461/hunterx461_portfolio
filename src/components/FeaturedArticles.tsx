import { useEffect, useMemo, useState } from 'react';
import { BookOpen, ArrowUpRight } from 'lucide-react';
import ArticleCard, { type Article } from './ArticleCard';
import Badge from './Badge';
import Reveal from './fx/Reveal';

const mediumProfileUrl = 'https://medium.com/@HunterX461';
const mediumFeedUrl = 'https://medium.com/feed/@HunterX461';
const rss2jsonEndpoint = 'https://api.rss2json.com/v1/api.json?rss_url=';

const fallbackArticles: Article[] = [
  {
    id: 'fallback-1',
    title: 'Inside a LocalRoot Docker Breakout',
    excerpt:
      'A practical walkthrough of identifying insecure Docker socket exposure and safely escalating in a lab setup.',
    date: 'Jan 14, 2026',
    readTime: '7 min read',
    tags: ['Web Security', 'Docker', 'Research Notes'],
    link: 'https://www.tabrez.tech/writeups/localroot',
  },
  {
    id: 'fallback-2',
    title: 'Responsible Disclosure Notes from Early Bug Hunting',
    excerpt:
      'What I learned from reporting invalid findings and turning false positives into sharper security intuition.',
    date: 'Dec 9, 2025',
    readTime: '5 min read',
    tags: ['Responsible Disclosure', 'Learning', 'Bug Bounty'],
    link: mediumProfileUrl,
  },
  {
    id: 'fallback-3',
    title: 'Recon Methodology for Modern Attack Surface Mapping',
    excerpt:
      'A lightweight recon workflow that prioritizes signal over noise and keeps findings reproducible.',
    date: 'Nov 3, 2025',
    readTime: '6 min read',
    tags: ['OSINT', 'Recon', 'Methodology'],
    link: mediumProfileUrl,
  },
];

const decodeHtmlEntities = (value: string) => {
  const parser = new DOMParser();
  return parser.parseFromString(value, 'text/html').documentElement.textContent ?? '';
};

const stripHtml = (value: string) =>
  value.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();

const estimateReadTime = (content: string) => {
  const words = content.split(/\s+/).filter(Boolean).length;
  const minutes = Math.max(1, Math.round(words / 220));
  return `${minutes} min read`;
};

const FeaturedArticles = () => {
  const [articles, setArticles] = useState<Article[]>(fallbackArticles);
  const [activeTag, setActiveTag] = useState<string>('All');

  useEffect(() => {
    const controller = new AbortController();
    const load = async () => {
      try {
        const endpoint = `${rss2jsonEndpoint}${encodeURIComponent(mediumFeedUrl)}`;
        const response = await fetch(endpoint, { signal: controller.signal });
        if (!response.ok) return;
        const data = (await response.json()) as {
          items?: Array<{
            guid?: string;
            title?: string;
            pubDate?: string;
            content?: string;
            link?: string;
            categories?: string[];
          }>;
        };
        if (!data.items?.length) return;
        const parsed = data.items.slice(0, 6).map((item, index) => {
          const contentText = stripHtml(decodeHtmlEntities(item.content ?? ''));
          const excerpt = contentText.slice(0, 170);
          return {
            id: item.guid ?? `${item.link ?? 'medium'}-${index}`,
            title: decodeHtmlEntities(item.title ?? 'Untitled article'),
            excerpt: excerpt.length === 170 ? `${excerpt}…` : excerpt,
            date: item.pubDate
              ? new Date(item.pubDate).toLocaleDateString('en-US', {
                  month: 'short',
                  day: 'numeric',
                  year: 'numeric',
                })
              : 'Recent',
            readTime: estimateReadTime(contentText),
            tags: item.categories?.slice(0, 3)?.length
              ? item.categories.slice(0, 3)
              : ['Security Research'],
            link: item.link ?? mediumProfileUrl,
          };
        });
        setArticles(parsed);
      } catch {
        // fallback used
      }
    };
    void load();
    return () => controller.abort();
  }, []);

  const tags = useMemo(() => {
    const u = new Set<string>();
    articles.forEach((a) => a.tags.forEach((t) => u.add(t)));
    return ['All', ...Array.from(u)];
  }, [articles]);

  const filtered =
    activeTag === 'All' ? articles : articles.filter((a) => a.tags.some((t) => t === activeTag));

  return (
    <section id="articles" className="relative py-32">
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
        <Reveal className="text-center mb-10">
          <p className="section-kicker mb-3">// 03 — knowledge sharing</p>
          <h2 className="section-title">
            Research <span className="aurora-text italic">&amp;</span> Articles
          </h2>
          <div className="soft-divider" />
        </Reveal>

        <Reveal delay={80} className="flex flex-wrap justify-center gap-2 mb-10">
          {tags.map((tag) => (
            <Badge
              key={tag}
              label={tag}
              active={activeTag === tag}
              onClick={() => setActiveTag(tag)}
            />
          ))}
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {filtered.map((article, i) => (
            <Reveal key={article.id} delay={i * 70}>
              <ArticleCard article={article} />
            </Reveal>
          ))}
        </div>

        <Reveal delay={120} className="text-center mt-12">
          <a
            href={mediumProfileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass text-white/85 hover:text-white transition font-mono-tight text-xs uppercase tracking-[0.22em]"
            data-cursor="hover"
          >
            <BookOpen className="w-4 h-4" />
            View all on Medium
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </Reveal>
      </div>
    </section>
  );
};

export default FeaturedArticles;
