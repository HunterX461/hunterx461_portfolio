import { useEffect, useMemo, useState } from 'react';
import ArticleCard, { type Article } from './ArticleCard';
import Badge from './Badge';
import FadeInSection from './FadeInSection';

const mediumProfileUrl = 'https://medium.com/@HunterX461';
const mediumFeedUrl = 'https://medium.com/feed/@HunterX461';

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

const decodeHtmlEntities = (value: string) =>
  value
    .replace(/&#(\d+);/g, (_, code) => String.fromCharCode(Number(code)))
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'");

const stripHtml = (value: string) =>
  value
    .replace(/<[^>]+>/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();

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

    const loadMediumArticles = async () => {
      try {
        const endpoint = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(mediumFeedUrl)}`;
        const response = await fetch(endpoint, { signal: controller.signal });
        if (!response.ok) {
          return;
        }

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

        if (!data.items?.length) {
          return;
        }

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
        // Fallback content remains visible if the RSS endpoint is unavailable.
      }
    };

    void loadMediumArticles();
    return () => controller.abort();
  }, []);

  const tags = useMemo(() => {
    const uniqueTags = new Set<string>();
    articles.forEach((article) => article.tags.forEach((tag) => uniqueTags.add(tag)));
    return ['All', ...Array.from(uniqueTags)];
  }, [articles]);

  const filteredArticles =
    activeTag === 'All'
      ? articles
      : articles.filter((article) => article.tags.some((tag) => tag === activeTag));

  return (
    <section id="articles" className="relative py-32">
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <p className="section-kicker">Knowledge Sharing</p>
          <h2 className="section-title">Featured Research & Articles</h2>
          <div className="soft-divider"></div>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {tags.map((tag) => (
            <Badge
              key={tag}
              label={tag}
              active={activeTag === tag}
              onClick={() => setActiveTag(tag)}
            />
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {filteredArticles.map((article) => (
            <FadeInSection key={article.id}>
              <ArticleCard article={article} />
            </FadeInSection>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href={mediumProfileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex px-5 py-2.5 rounded-lg border border-[#4a7c9e]/35 text-[#93bdd7] hover:text-[#e8eef5] hover:border-[#4a7c9e]/65 transition-colors"
          >
            View all on Medium
          </a>
        </div>
      </div>
    </section>
  );
};

export default FeaturedArticles;
