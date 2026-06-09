interface BadgeProps {
  label: string;
  active?: boolean;
  onClick?: () => void;
}

const Badge = ({ label, active = false, onClick }: BadgeProps) => {
  const base =
    'relative inline-flex items-center px-3 py-1.5 rounded-full text-[11px] font-mono-tight uppercase tracking-[0.18em] transition-all duration-300';
  const activeCls = active ? 'text-white' : 'text-white/55 hover:text-white/85';

  const content = (
    <>
      {active && (
        <span
          className="absolute inset-0 rounded-full -z-10"
          style={{
            background:
              'linear-gradient(135deg, rgba(139,92,246,0.32), rgba(34,211,238,0.22))',
            boxShadow:
              '0 0 0 1px rgba(139,92,246,0.45), 0 10px 25px -10px rgba(139,92,246,0.55)',
          }}
        />
      )}
      {!active && (
        <span className="absolute inset-0 rounded-full border border-white/10 -z-10" />
      )}
      {label}
    </>
  );

  if (!onClick) {
    return <span className={`${base} ${activeCls}`}>{content}</span>;
  }

  return (
    <button
      onClick={onClick}
      className={`${base} ${activeCls}`}
      data-cursor="hover"
    >
      {content}
    </button>
  );
};

export default Badge;
