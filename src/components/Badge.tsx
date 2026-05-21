interface BadgeProps {
  label: string;
  active?: boolean;
  onClick?: () => void;
}

const Badge = ({ label, active = false, onClick }: BadgeProps) => {
  const baseClassName =
    'px-3 py-1 rounded-full text-xs border transition-all duration-300 backdrop-blur-sm';
  const activeClassName = active
    ? 'border-[#4a7c9e]/70 bg-[#4a7c9e]/20 text-[#e8eef5]'
    : 'border-white/10 bg-[#1a2332]/55 text-[#a0afc0] hover:border-[#4a7c9e]/40 hover:text-[#e8eef5]';

  if (!onClick) {
    return <span className={`${baseClassName} ${activeClassName}`}>{label}</span>;
  }

  return (
    <button onClick={onClick} className={`${baseClassName} ${activeClassName}`}>
      {label}
    </button>
  );
};

export default Badge;
