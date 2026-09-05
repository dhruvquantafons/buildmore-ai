'use client';
import Link from 'next/link';
import RevealOnScroll from '@/components/RevealOnScroll';
import styles from './page.module.css';

export default function ModulesClient({ stacks, pricing }) {
  return (
    <>
      {/* ═══ HERO ═══ */}
      <section className={styles.head}>
        <div className="shell">
          <div className={styles.heroCopy}>
            <p className="kicker">Part II — Part IX · Modules 1 to 34</p>
            <h1 className={`display ${styles.title}`}>
              Thirty-four modules. One <em>data model</em>.
            </h1>
            <p className={`lede ${styles.lede}`}>
              Each module works independently and can be purchased separately. But connected to the
              platform, modules share data and amplify each other exponentially — a crack found by
              Module 12 is correlated with carbonation data from Module 9 and seismic vulnerability
              from Module 14.
            </p>
          </div>

          <nav className={styles.jump} aria-label="Jump to a stack">
            {stacks.map((s, i) => (
              <a key={s.id} href={`#${s.id}`} className={styles.jumpLink}>
                <span className={styles.jumpNum}>{String(i + 1).padStart(2, '0')}</span>
                <span className={styles.jumpName}>{s.title}</span>
                <span className={styles.jumpRange}>Modules {s.modules[0].num}–{s.modules[s.modules.length - 1].num}</span>
              </a>
            ))}
          </nav>
        </div>
      </section>

      {/* ═══ MODULE STACKS ═══ */}
      {stacks.map((stack, si) => (
        <section
          key={stack.id}
          id={stack.id}
          className={`${styles.stack} ${si % 2 === 1 ? styles.stackAlt : ''}`}
        >
          <div className="shell">
            <RevealOnScroll>
              <header className={styles.stackHead}>
                <p className="kicker">{stack.kicker}</p>
                <h2 className="h2">{stack.title}</h2>
                <p className={styles.stackBlurb}>{stack.blurb}</p>
                <div className={styles.stackMeta}>
                  <span className="chip">India TAM {stack.indiaTam}</span>
                  <span className="chip">Global TAM {stack.globalTam}</span>
                  <span className="chip">{stack.count} modules</span>
                </div>
              </header>
            </RevealOnScroll>

            <div className={styles.grid}>
              {stack.modules.map((mod, mi) => (
                <RevealOnScroll key={mod.num} delay={mi * 80}>
                  <article id={`module-${parseInt(mod.num)}`} className={styles.card}>
                    <div className={styles.cardTop}>
                      <span className={styles.cardNum}>Module {mod.num}</span>
                      <span className={styles.cardTag}>{mod.tag}</span>
                    </div>
                    <h3 className={styles.cardName}>{mod.name}</h3>
                    <p className={styles.cardTagline}>{mod.tagline}</p>
                    <p className={styles.cardBody}>{mod.body}</p>
                    <ul className={styles.points}>
                      {mod.points.map((pt, pi) => (
                        <li key={pi}>{pt}</li>
                      ))}
                    </ul>
                  </article>
                </RevealOnScroll>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* ═══ PRICING ═══ */}
      <section className="section" id="pricing">
        <div className="shell">
          <RevealOnScroll>
            <div className={styles.centreHead}>
              <p className="kicker">Pricing</p>
              <h2 className="h2">Simple, transparent <em>pricing</em></h2>
              <p className="lede" style={{ margin: '0 auto' }}>
                Start with a single module or go all-in with the full platform. Every plan includes
                Indian cloud infrastructure and data sovereignty.
              </p>
            </div>
          </RevealOnScroll>

          <div className={styles.pricingGrid}>
            {pricing.map((tier, i) => (
              <RevealOnScroll key={tier.name} delay={i * 100}>
                <article className={`${styles.pricingCard} ${tier.popular ? styles.pricingPopular : ''}`}>
                  {tier.popular && <span className={styles.pricingBadge}>Most Popular</span>}
                  <h3 className={styles.pricingName}>{tier.name}</h3>
                  <p className={styles.pricingPrice}>{tier.price}</p>
                  <p className={styles.pricingDesc}>{tier.description}</p>
                  <ul className={styles.pricingFeatures}>
                    {tier.features.map((f, fi) => (
                      <li key={fi}>{f}</li>
                    ))}
                  </ul>
                  <Link href="/architecture#contact" className={`btn ${tier.popular ? 'btn--primary' : 'btn--ghost'}`}>
                    Get started
                  </Link>
                </article>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
