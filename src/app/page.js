'use client';
import Link from 'next/link';
import ParticleGrid from '@/components/ParticleGrid';
import RevealOnScroll from '@/components/RevealOnScroll';
import AnimatedCounter from '@/components/AnimatedCounter';
import { heroStacks } from '@/data/modules';
import { tiers } from '@/data/architecture';
import styles from './page.module.css';

const PROBLEMS = [
  { value: '$1.6T', label: 'wasted globally each year', note: 'Rework, inefficiency and poor quality across a $13.5 trillion industry.' },
  { value: '38', label: 'fatal site accidents a day', note: 'Construction records the highest workplace fatality count of any Indian sector.' },
  { value: '20%', label: 'average budget overrun', note: 'And 80% of projects are delivered late. Material wastage runs 15–25%.' },
  { value: '59%', label: "of India is earthquake-prone", note: 'Only 2% of the construction workforce has formal training.' },
];

const PRINCIPLES = [
  { num: '01', title: 'Automate everything repeatable', body: 'Any civil engineering process that follows rules, standards or patterns can and should be automated — manual IS code checking, manual quantity take-offs, manual progress tracking.' },
  { num: '02', title: "Build what doesn't exist", body: 'Where existing sensors or tools are insufficient, we design and manufacture our own. The BuildMore Sensor OS is not an afterthought — it is a core competitive advantage.' },
  { num: '03', title: "Predict, don't just react", body: 'Reactive engineering kills people. Predictive engineering saves them. Every module is designed to see a problem before it becomes an emergency.' },
  { num: '04', title: 'Indian-first, global-ready', body: 'Built for IS codes, Himalayan seismicity, Western Ghats landslides, monsoon damage and local materials — with a configurable compliance engine for global deployment.' },
  { num: '05', title: 'Data sovereignty', body: 'All data generated on Indian projects stays in India, on Indian cloud infrastructure. Critical infrastructure data is never stored on foreign servers.' },
  { num: '06', title: 'Open module architecture', body: 'Each module works standalone and can be bought separately. Connected to the platform, they share data and amplify each other exponentially.' },
];

const DIFFS = [
  { title: 'Full lifecycle coverage', body: 'From the first sketch to fifty years of structural health. No other platform covers design, construction monitoring, structural health, disaster prediction and infrastructure maintenance in one system.' },
  { title: 'Indian-first design', body: 'IS codes, not Eurocodes. Indian BOQ rates, not US RSMeans. Himalayan seismicity, not Californian. Monsoon damage, not Pacific typhoons. Built for the conditions that matter.' },
  { title: 'Proprietary intelligence', body: 'A custom FEA solver, a domain-specific language model, and purpose-built sensors. Not wrappers around commercial tools — proprietary technology at every critical point.' },
  { title: 'Modular by design', body: 'Buy one module or all 34. Each works independently. Connected to the platform, they share data and amplify each other — a crack found by Module 12 is correlated with data from Module 9.' },
];

export default function Home() {
  return (
    <>
      {/* ═══ HERO ═══ */}
      <section className={styles.hero}>
        <ParticleGrid />
        <div className={`shell ${styles.heroInner}`}>
          <div className={styles.heroCopy}>
            <p className="kicker">Strictly confidential · 34 core modules · 150+ sub-systems</p>
            <h1 className={`display ${styles.heroTitle}`}>
              The construction industry is <em>broken</em>.
            </h1>
            <p className={`lede ${styles.heroLede}`}>
              Buildings collapse because nobody tracked carbonation for thirty years. Bridges fail
              because nobody watched the scour through the monsoon. These are information problems.
            </p>
            <div className={styles.heroActions}>
              <Link href="/modules" className="btn btn--primary">
                Explore all 34 modules <span aria-hidden="true">→</span>
              </Link>
              <Link href="/architecture" className="btn btn--ghost">
                System architecture
              </Link>
            </div>
          </div>

          <div className={styles.heroVisual}>
            <div className={styles.heroCard}>
              <div className={styles.heroCardChrome}>
                <span className={styles.dots}><i /><i /><i /></span>
                <span className={styles.chromeLabel}>buildmore.ai / generate</span>
              </div>
              <svg viewBox="0 0 400 250" className={styles.heroSvg} role="img" aria-label="Generated floor plan with structural grid">
                <defs>
                  <pattern id="bp-grid" width="20" height="20" patternUnits="userSpaceOnUse">
                    <path d="M20 0H0V20" fill="none" stroke="#1a2a34" strokeWidth="0.6" />
                  </pattern>
                </defs>
                <rect width="400" height="250" fill="#080e14" />
                <rect width="400" height="250" fill="url(#bp-grid)" />
                <g stroke="#c8dde8" strokeWidth="2.4" fill="none">
                  <path d="M60 56h230v140H60z" />
                  <path d="M60 122h96M156 56v66M156 148h134M212 148v48" />
                </g>
                <g fill="rgba(0,212,255,0.12)">
                  <rect x="62" y="58" width="92" height="62" />
                  <rect x="214" y="150" width="74" height="44" />
                </g>
                <g stroke="#00d4ff" strokeWidth="1.5" fill="none">
                  <circle cx="60" cy="56" r="4" />
                  <circle cx="156" cy="56" r="4" />
                  <circle cx="290" cy="56" r="4" />
                  <circle cx="60" cy="122" r="4" />
                  <circle cx="156" cy="122" r="4" />
                  <circle cx="290" cy="148" r="4" />
                  <circle cx="60" cy="196" r="4" />
                  <circle cx="212" cy="196" r="4" />
                  <circle cx="290" cy="196" r="4" />
                </g>
                <rect x="300" y="18" width="82" height="22" rx="5" fill="rgba(0,212,255,0.15)" />
                <text x="341" y="33" fill="#00d4ff" fontSize="9" fontFamily="monospace" textAnchor="middle">IS 456 OK</text>
              </svg>
              <div className={styles.heroCardTag}>
                <span className={styles.pulse} aria-hidden="true" />
                Site intelligence · live
              </div>
            </div>
          </div>
        </div>

        <dl className={`shell ${styles.heroStats}`}>
          {[
            { val: '34', label: 'Core AI modules' },
            { val: '150', suffix: '+', label: 'Sub-systems' },
            { val: '500', suffix: '+', label: 'IS codes digitised' },
            { val: '48', label: 'Month roadmap' },
          ].map((s, i) => (
            <div className={styles.stat} key={i}>
              <dt className={styles.statValue}><AnimatedCounter end={s.val} suffix={s.suffix || ''} /></dt>
              <dd className={styles.statLabel}>{s.label}</dd>
            </div>
          ))}
        </dl>
      </section>

      {/* ═══ STACKS CAROUSEL ═══ */}
      <section className={`section ${styles.stacks}`} id="stacks">
        <div className="shell">
          <RevealOnScroll>
            <p className="kicker">Start with a proven stack · 8 intelligence layers</p>
            <h2 className={`h2 ${styles.stacksTitle}`}>
              Pick a <em>proven stack</em>. Run it on your site.
            </h2>
          </RevealOnScroll>

          <div className={styles.stackGrid}>
            {heroStacks.map((s, i) => (
              <RevealOnScroll key={i} delay={i * 80}>
                <article className={styles.stackCard}>
                  {s.badge && <span className={styles.stackBadge}>{s.badge}</span>}
                  <p className={styles.stackKicker}>{s.kicker}</p>
                  <h3 className={styles.stackCardTitle}>
                    {s.title} <span className={styles.arrow}>→</span> {s.arrow}
                  </h3>
                  <p className={styles.stackSub}>{s.sub}</p>
                </article>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ PROBLEM ═══ */}
      <section className="section">
        <div className="shell">
          <RevealOnScroll>
            <div className={styles.splitHead}>
              <div>
                <p className="kicker">The scale of the problem</p>
                <h2 className="h2">Buildings literally collapse. Workers die. Every single <em>day</em>.</h2>
              </div>
              <p className="lede">
                Construction accounts for 13% of global GDP yet remains one of the least
                technologically advanced sectors on earth. Projects run 20% over budget, 80% are
                delivered late, and productivity has barely improved in fifty years.
              </p>
            </div>
          </RevealOnScroll>

          <div className={styles.problemGrid}>
            {PROBLEMS.map((p, i) => (
              <RevealOnScroll key={i} delay={i * 80}>
                <article className={styles.problemCard}>
                  <p className={styles.problemValue}>{p.value}</p>
                  <p className={styles.problemLabel}>{p.label}</p>
                  <p className={styles.problemNote}>{p.note}</p>
                </article>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ DISASTER BAND ═══ */}
      <section className={styles.band}>
        <div className="shell">
          <RevealOnScroll>
            <div className={styles.bandInner}>
              <div className={styles.bandOverlay}>
                <p className={styles.bandKicker}>Module 13 · Landslide Prediction</p>
                <p className={styles.bandQuote}>
                  A landslide kills because nobody correlated the rainfall with the slope stability{' '}
                  <em>in real time</em>.
                </p>
                <div className={styles.bandTags}>
                  <span className="chip">15% of world landslide deaths</span>
                  <span className="chip">Hours to weeks of warning</span>
                </div>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* ═══ ARCHITECTURE TIERS ═══ */}
      <section className="section section--tint">
        <div className="shell">
          <RevealOnScroll>
            <div className={styles.splitHead}>
              <div>
                <p className="kicker">Platform architecture</p>
                <h2 className="h2">Five tiers, from the <em>sensor</em> to the screen</h2>
              </div>
              <p className="lede">
                A microservices platform on Indian cloud infrastructure with edge computing for
                real-time site monitoring. Every reading, frame, design change and estimate is stored
                with full provenance.
              </p>
            </div>
          </RevealOnScroll>

          <ol className={styles.tierList}>
            {tiers.map((t, i) => (
              <RevealOnScroll key={i} delay={i * 70}>
                <li className={styles.tier}>
                  <span className={styles.tierNum}>{t.num}</span>
                  <h3 className="h3">{t.name}</h3>
                  <p className={styles.tierBody}>{t.body}</p>
                </li>
              </RevealOnScroll>
            ))}
          </ol>
        </div>
      </section>

      {/* ═══ PRINCIPLES ═══ */}
      <section className="section">
        <div className="shell">
          <RevealOnScroll>
            <div className={styles.centreHead}>
              <p className="kicker">Core principles</p>
              <h2 className="h2">Predict, don&apos;t just <em>react</em></h2>
              <p className="lede" style={{ margin: '0 auto' }}>
                Reactive engineering kills people. Predictive engineering saves them. Six principles
                shape every module in the platform.
              </p>
            </div>
          </RevealOnScroll>

          <div className={styles.principleGrid}>
            {PRINCIPLES.map((p, i) => (
              <RevealOnScroll key={i} delay={i * 70}>
                <article className={styles.principle}>
                  <span className={styles.principleNum}>{p.num}</span>
                  <h3 className="h3">{p.title}</h3>
                  <p className={styles.principleBody}>{p.body}</p>
                </article>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ DIFFERENTIATORS ═══ */}
      <section className="section section--tint">
        <div className="shell">
          <RevealOnScroll>
            <div className={styles.splitHead}>
              <div>
                <p className="kicker">What makes it different</p>
                <h2 className="h2">No single platform integrates <em>all</em> of this</h2>
              </div>
              <p className="lede">
                There are cost estimation tools. There are analysis packages, construction cameras
                and monitoring companies. There is no unified intelligence system — one data model
                running from the first CAD line to fifty years of structural health.
              </p>
            </div>
          </RevealOnScroll>

          <div className={styles.diffGrid}>
            {DIFFS.map((d, i) => (
              <RevealOnScroll key={i} delay={i * 80}>
                <article className={styles.diffCard}>
                  <h3 className="h3">{d.title}</h3>
                  <p className={styles.diffBody}>{d.body}</p>
                </article>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CTA ═══ */}
      <section className={styles.cta}>
        <div className="shell">
          <RevealOnScroll>
            <div className={styles.ctaInner}>
              <p className="kicker">Get started</p>
              <h2 className={`h2 ${styles.ctaTitle}`}>
                Ready to build <em>smarter</em>?
              </h2>
              <p className={`lede ${styles.ctaLede}`}>
                Request the full technical specification and implementation guide, or discuss a pilot deployment with the team.
              </p>
              <div className={styles.ctaActions}>
                <Link href="/architecture#contact" className="btn btn--primary">
                  Request the deck <span aria-hidden="true">→</span>
                </Link>
                <Link href="/modules" className="btn btn--ghost">
                  Explore all modules
                </Link>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>
    </>
  );
}
