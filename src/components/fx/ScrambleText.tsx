import { useEffect, useRef, useState } from 'react';

const CHARS = '!<>-_\\/[]{}—=+*^?#________';

interface Props {
  text: string;
  className?: string;
  delay?: number;
  duration?: number;
  trigger?: 'mount' | 'view' | 'hover';
}

export default function ScrambleText({
  text,
  className = '',
  delay = 0,
  duration = 1200,
  trigger = 'view',
}: Props) {
  const ref = useRef<HTMLSpanElement>(null);
  const [played, setPlayed] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const run = () => {
      if (played) return;
      setPlayed(true);
      const start = performance.now() + delay;
      const total = duration;

      const tick = (now: number) => {
        const t = Math.max(0, Math.min(1, (now - start) / total));
        const revealCount = Math.floor(t * text.length);
        let out = '';
        for (let i = 0; i < text.length; i++) {
          if (i < revealCount || text[i] === ' ') {
            out += text[i];
          } else {
            out += CHARS[Math.floor(Math.random() * CHARS.length)];
          }
        }
        el.textContent = out;
        if (t < 1) requestAnimationFrame(tick);
        else el.textContent = text;
      };
      requestAnimationFrame(tick);
    };

    if (trigger === 'mount') {
      run();
      return;
    }

    if (trigger === 'hover') {
      const handler = () => {
        setPlayed(false);
        setTimeout(run, 0);
      };
      el.addEventListener('mouseenter', handler);
      return () => el.removeEventListener('mouseenter', handler);
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            run();
            io.disconnect();
          }
        });
      },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => io.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text, delay, duration, trigger]);

  return (
    <span ref={ref} className={className} aria-label={text}>
      {text}
    </span>
  );
}
