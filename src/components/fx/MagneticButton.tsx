import { useRef, MouseEvent, ReactNode } from 'react';

interface Props {
  children: ReactNode;
  className?: string;
  strength?: number;
  as?: 'button' | 'a' | 'div';
  href?: string;
  target?: string;
  rel?: string;
  onClick?: () => void;
  ariaLabel?: string;
  download?: boolean;
}

export default function MagneticButton({
  children,
  className = '',
  strength = 0.35,
  as = 'button',
  href,
  target,
  rel,
  onClick,
  ariaLabel,
  download,
}: Props) {
  const ref = useRef<HTMLElement | null>(null);
  const innerRef = useRef<HTMLSpanElement>(null);

  const handleMove = (e: MouseEvent<HTMLElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    el.style.transform = `translate3d(${x * strength}px, ${y * strength}px, 0)`;
    if (innerRef.current) {
      innerRef.current.style.transform = `translate3d(${x * strength * 0.5}px, ${y * strength * 0.5}px, 0)`;
    }
  };

  const handleLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.transform = 'translate3d(0,0,0)';
    if (innerRef.current) innerRef.current.style.transform = 'translate3d(0,0,0)';
  };

  const sharedProps = {
    ref: ref as unknown as React.Ref<HTMLElement>,
    className: `${className} will-change-transform transition-transform duration-300 ease-spring`,
    onMouseMove: handleMove,
    onMouseLeave: handleLeave,
    'aria-label': ariaLabel,
    'data-cursor': 'hover',
  } as const;

  const inner = (
    <span ref={innerRef} className="inline-flex items-center gap-2 will-change-transform transition-transform duration-300 ease-spring">
      {children}
    </span>
  );

  if (as === 'a') {
    return (
      <a {...(sharedProps as any)} href={href} target={target} rel={rel} download={download} onClick={onClick}>
        {inner}
      </a>
    );
  }
  if (as === 'div') {
    return <div {...(sharedProps as any)} onClick={onClick}>{inner}</div>;
  }
  return (
    <button {...(sharedProps as any)} onClick={onClick} type="button">
      {inner}
    </button>
  );
}
