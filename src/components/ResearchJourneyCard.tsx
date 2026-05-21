interface ResearchJourneyItem {
  year: string;
  title: string;
  description: string;
}

interface ResearchJourneyCardProps {
  item: ResearchJourneyItem;
}

const ResearchJourneyCard = ({ item }: ResearchJourneyCardProps) => {
  return (
    <div className="relative pl-16">
      <div className="absolute left-[6px] top-2 w-3 h-3 rounded-full bg-[#4a7c9e] shadow-[0_0_0_4px_rgba(74,124,158,0.18)]"></div>
      <article className="glass-card p-6">
        <span className="text-sm text-[#93bdd7]">{item.year}</span>
        <h3 className="text-2xl text-[#e8eef5] mt-1 mb-3">{item.title}</h3>
        <p className="text-sm leading-relaxed text-[#a0afc0]">{item.description}</p>
      </article>
    </div>
  );
};

export type { ResearchJourneyItem };
export default ResearchJourneyCard;
