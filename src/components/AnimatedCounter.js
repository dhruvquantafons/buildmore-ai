'use client';
import { useEffect, useRef, useState } from 'react';

export default function AnimatedCounter({ end, suffix = '', duration = 2000 }) {
  const [value, setValue] = useState(0);
  const ref = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const numEnd = parseInt(end, 10);
          if (isNaN(numEnd)) { setValue(end); return; }
          const start = performance.now();
          function tick(now) {
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setValue(Math.round(numEnd * eased));
            if (progress < 1) requestAnimationFrame(tick);
          }
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.3 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [end, duration]);

  return <span ref={ref}>{value}{suffix}</span>;
}
