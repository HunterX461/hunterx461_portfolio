import { useEffect, useState } from 'react';

interface ScrollControlsState {
  progress: number;
  reducedMotion: boolean;
}

const clampProgress = (value: number) => Math.max(0, Math.min(1, value));

const getScrollProgress = () => {
  const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
  return maxScroll > 0 ? clampProgress(window.scrollY / maxScroll) : 0;
};

const getMotionPreference = () =>
  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

export const useScrollControls = (): ScrollControlsState => {
  const [progress, setProgress] = useState(0);
  const [reducedMotion, setReducedMotion] = useState(getMotionPreference);

  useEffect(() => {
    const onScroll = () => setProgress(getScrollProgress());
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const onMotionChange = (event: MediaQueryListEvent) => setReducedMotion(event.matches);

    onScroll();

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    mediaQuery.addEventListener('change', onMotionChange);

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      mediaQuery.removeEventListener('change', onMotionChange);
    };
  }, []);

  return { progress, reducedMotion };
};
