import FadeInSection from './FadeInSection';
import ResearchJourneyCard, { type ResearchJourneyItem } from './ResearchJourneyCard';

const ResearchJourney = () => {
  const timeline = [
    {
      year: '2018',
      title: 'Early Curiosity',
      description:
        'First exposure to Linux and security concepts during school years. Explored Kali Linux and system internals driven by curiosity.',
    },
    {
      year: '2020–2021',
      title: 'Self-Learning Phase',
      description:
        'Built foundational knowledge in networking and security through hands-on experimentation. Used lightweight and mobile-based setups including Termux due to hardware constraints.',
    },
    {
      year: '2022',
      title: 'Research Platform Entry',
      description:
        'Started structured vulnerability research across public programs and CTF labs. Learned to separate noisy assumptions from reproducible evidence.',
    },
    {
      year: '2023',
      title: 'Formal Cybersecurity Path',
      description:
        'Transitioned into structured cybersecurity education while documenting testing workflows, proof quality, and disclosure etiquette.',
    },
    {
      year: '2024–2025',
      title: 'Methodology Evolution',
      description:
        'Analyzed and researched 30 vulnerabilities, including invalid findings that sharpened triage discipline. Focus shifted to impact clarity, reproducibility, and responsible disclosure.',
    },
  ] satisfies ResearchJourneyItem[];

  return (
    <section
      id="research-journey"
      className="relative py-32"
    >
      <div className="relative z-10 max-w-4xl mx-auto px-6">
        <div className="text-center mb-20">
          <p className="section-kicker">Journey</p>
          <h2 className="section-title">Research Journey</h2>
          <div className="soft-divider"></div>
          <p className="text-[#a0afc0] mt-8 max-w-2xl mx-auto leading-relaxed">
            30 vulnerabilities analyzed & researched. The path includes invalid reports, stronger
            methodology, and a deeper commitment to responsible disclosure and ethical testing.
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-4 top-0 bottom-0 w-px bg-[#4a7c9e]/25"></div>

          <div className="space-y-16">
            {timeline.map((item) => (
              <FadeInSection key={item.year}>
                <ResearchJourneyCard item={item} />
              </FadeInSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResearchJourney;
