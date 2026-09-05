'use client';
import { useEffect, useRef } from 'react';

export default function RevealOnScroll({ children, delay = 0, className = '' }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => el.classList.add('revealed'), delay);
          obs.unobserve(el);
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [delay]);

  return (
    <div ref={ref} className={`reveal-item ${className}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}
