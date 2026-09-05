'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './Header.module.css';

const NAV = [
  { href: '/', label: 'Platform' },
  { href: '/modules', label: '34 Modules' },
  { href: '/architecture', label: 'Architecture' },
  { href: '/modules#pricing', label: 'Pricing' },
];

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [pathname]);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.inner}>
        <Link href="/" className={styles.brand} aria-label="BuildMore AI home">
          <span className={styles.mark} aria-hidden="true">
            <span /><span /><span />
          </span>
          <span className={styles.wordmark}>
            BuildMore<span className={styles.ai}>AI</span>
          </span>
        </Link>

        <nav className={`${styles.nav} ${open ? styles.navOpen : ''}`} aria-label="Primary">
          {NAV.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              className={`${styles.link} ${pathname === n.href ? styles.active : ''}`}
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className={styles.actions}>
          <Link href="/architecture#contact" className={styles.cta}>
            Request the deck
          </Link>
          <button
            type="button"
            className={`${styles.burger} ${open ? styles.burgerOpen : ''}`}
            aria-expanded={open}
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen(!open)}
          >
            <span className={styles.burgerBox} aria-hidden="true">
              <span /><span />
            </span>
          </button>
        </div>
      </div>
    </header>
  );
}
