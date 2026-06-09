import { useEffect, useRef } from 'react';

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const canHover = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    if (!canHover) return;

    document.documentElement.classList.add('has-custom-cursor');

    let mx = window.innerWidth / 2;
    let my = window.innerHeight / 2;
    let rx = mx;
    let ry = my;
    let raf = 0;

    const move = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mx}px, ${my}px, 0) translate(-50%, -50%)`;
      }
    };

    const loop = () => {
      rx += (mx - rx) * 0.18;
      ry += (my - ry) * 0.18;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${rx}px, ${ry}px, 0) translate(-50%, -50%)`;
      }
      raf = requestAnimationFrame(loop);
    };

    const enter = (e: Event) => {
      const t = e.target as HTMLElement;
      if (!t) return;
      if (t.closest('a, button, [data-cursor="hover"], input, textarea, select, label')) {
        ringRef.current?.classList.add('is-hover');
      }
    };
    const leave = (e: Event) => {
      const t = e.target as HTMLElement;
      if (!t) return;
      if (t.closest('a, button, [data-cursor="hover"], input, textarea, select, label')) {
        ringRef.current?.classList.remove('is-hover');
      }
    };

    window.addEventListener('mousemove', move, { passive: true });
    document.addEventListener('mouseover', enter, true);
    document.addEventListener('mouseout', leave, true);
    raf = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('mousemove', move);
      document.removeEventListener('mouseover', enter, true);
      document.removeEventListener('mouseout', leave, true);
      document.documentElement.classList.remove('has-custom-cursor');
    };
  }, []);

  return (
    <>
      <div ref={ringRef} className="cursor-ring hidden md:block" aria-hidden />
      <div ref={dotRef} className="cursor-dot hidden md:block" aria-hidden />
    </>
  );
}
