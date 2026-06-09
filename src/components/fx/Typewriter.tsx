import { useEffect, useState } from 'react';

interface Props {
  text: string;
  duration?: number; // ms per character cycle
  className?: string;
  caret?: boolean;
  startDelay?: number;
}

export default function Typewriter({
  text,
  duration = 38,
  className = '',
  caret = true,
  startDelay = 0,
}: Props) {
  const [shown, setShown] = useState('');

  useEffect(() => {
    let i = 0;
    let timer: number | undefined;
    let started = false;

    const start = () => {
      started = true;
      timer = window.setInterval(() => {
        i += 1;
        setShown(text.slice(0, i));
        if (i >= text.length) {
          if (timer) window.clearInterval(timer);
        }
      }, duration);
    };

    const delayId = window.setTimeout(start, startDelay);
    return () => {
      if (delayId) clearTimeout(delayId);
      if (timer) clearInterval(timer);
      if (!started) setShown('');
    };
  }, [text, duration, startDelay]);

  return (
    <span className={className}>
      {shown}
      {caret && <span className="inline-block w-[2px] h-[1em] align-[-0.15em] ml-1 bg-aurora-cyan animate-blink" />}
    </span>
  );
}
