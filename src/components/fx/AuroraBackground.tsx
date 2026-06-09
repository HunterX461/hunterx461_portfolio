import { useEffect, useRef } from 'react';

/**
 * Aurora gradient mesh background.
 * Drifting blurred color blobs + faint grid + noise layer.
 * Reacts subtly to scroll position via translate.
 */
export default function AuroraBackground({ intensity = 1 }: { intensity?: number }) {
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      const y = window.scrollY;
      if (wrapRef.current) {
        wrapRef.current.style.transform = `translate3d(0, ${y * -0.06}px, 0)`;
      }
      raf = 0;
    };
    const handler = () => {
      if (!raf) raf = requestAnimationFrame(onScroll);
    };
    window.addEventListener('scroll', handler, { passive: true });
    return () => {
      window.removeEventListener('scroll', handler);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      <div ref={wrapRef} className="absolute inset-0">
        {/* Aurora blobs */}
        <div
          className="aurora-blob animate-aurora-drift"
          style={{
            width: '52vw',
            height: '52vw',
            top: '-12%',
            left: '-8%',
            background: 'radial-gradient(circle, #8b5cf6 0%, transparent 60%)',
            opacity: 0.55 * intensity,
            animationDelay: '0s',
          }}
        />
        <div
          className="aurora-blob animate-aurora-drift"
          style={{
            width: '46vw',
            height: '46vw',
            top: '-6%',
            right: '-12%',
            background: 'radial-gradient(circle, #22d3ee 0%, transparent 60%)',
            opacity: 0.42 * intensity,
            animationDelay: '-7s',
          }}
        />
        <div
          className="aurora-blob animate-aurora-drift"
          style={{
            width: '60vw',
            height: '60vw',
            bottom: '-20%',
            left: '10%',
            background: 'radial-gradient(circle, #14b8a6 0%, transparent 60%)',
            opacity: 0.36 * intensity,
            animationDelay: '-13s',
          }}
        />
        <div
          className="aurora-blob animate-aurora-drift"
          style={{
            width: '38vw',
            height: '38vw',
            bottom: '-10%',
            right: '4%',
            background: 'radial-gradient(circle, #fb7185 0%, transparent 60%)',
            opacity: 0.28 * intensity,
            animationDelay: '-18s',
          }}
        />
      </div>

      {/* Faint grid */}
      <div className="absolute inset-0 grid-bg opacity-60" />

      {/* Vignette */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse at center, transparent 30%, rgba(6,7,13,0.55) 80%, rgba(6,7,13,0.9) 100%)',
        }}
      />

      {/* Grain */}
      <div
        className="absolute inset-0 opacity-[0.05] mix-blend-overlay"
        style={{
          backgroundImage:
            'radial-gradient(rgba(255,255,255,0.6) 0.4px, transparent 0.4px)',
          backgroundSize: '4px 4px',
        }}
      />
    </div>
  );
}
