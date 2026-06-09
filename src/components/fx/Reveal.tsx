import { useEffect, useRef, ReactNode, CSSProperties } from 'react';

interface Props {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
  once?: boolean;
}

export default function Reveal({
  children,
  delay = 0,
  className = '',
  as = 'div',
  once = true,
}: Props) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            el.classList.add('in-view');
            if (once) io.unobserve(el);
          } else if (!once) {
            el.classList.remove('in-view');
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [once]);

  const Tag = as as any;
  const style: CSSProperties = { transitionDelay: `${delay}ms` };
  return (
    <Tag ref={ref as any} className={`reveal ${className}`} style={style}>
      {children}
    </Tag>
  );
}
