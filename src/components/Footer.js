import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`shell ${styles.inner}`}>
        <div className={styles.brand}>
          <span className={styles.mark} aria-hidden="true"><span /><span /><span /></span>
          <span className={styles.wordmark}>BuildMore<span className={styles.ai}>AI</span></span>
        </div>

        <nav className={styles.nav} aria-label="Footer">
          <Link href="/">Platform</Link>
          <Link href="/modules">34 Modules</Link>
          <Link href="/architecture">Architecture</Link>
          <Link href="/modules#pricing">Pricing</Link>
          <Link href="/architecture#contact">Contact</Link>
        </nav>

        <div className={styles.bottom}>
          <p className={styles.copy}>© {new Date().getFullYear()} BuildMore AI. All rights reserved.</p>
          <p className={styles.tagline}>Built Indian-first. Global-ready.</p>
        </div>
      </div>
    </footer>
  );
}
