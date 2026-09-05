'use client';
import Link from 'next/link';
import RevealOnScroll from '@/components/RevealOnScroll';
import ContactForm from '@/components/ContactForm';
import { tiers, archNotes, flows, roadmapPhases, marketTable, revenueChannels, customers, techStack, team } from '@/data/architecture';
import styles from './page.module.css';

export default function ArchitectureClient() {
  return (
    <>
      {/* ═══ HERO ═══ */}
      <section className={styles.head}>
        <div className="shell">
          <div className={styles.heroCopy}>
            <p className="kicker">Comprehensive system architecture</p>
            <h1 className={`display ${styles.title}`}>
              How thirty-four modules become <em>one platform</em>
            </h1>
            <p className={`lede ${styles.lede}`}>
              Microservices on Indian cloud infrastructure, with edge computing for real-time site
              monitoring. All data flows through a unified lake organised by project, structure and
              time — with full provenance on every record.
            </p>
          </div>
        </div>
      </section>

      {/* ═══ TIERS ═══ */}
      <section className="section section--tint" id="tiers">
        <div className="shell">
          <RevealOnScroll>
            <p className="kicker">4.1 System architecture</p>
            <h2 className="h2">The five <em>tiers</em></h2>
          </RevealOnScroll>

          <div className={styles.tierRail}>
            {tiers.map((t, i) => (
              <RevealOnScroll key={i} delay={i * 70}>
                <article className={styles.tierCard}>
                  <span className={styles.tierNum}>{t.num}</span>
                  <h3 className="h3">{t.name}</h3>
                  <p className={styles.small}>{t.body}</p>
                  <div className={styles.tierGlow} aria-hidden="true" />
                </article>
              </RevealOnScroll>
            ))}
          </div>

          <div className={styles.notes}>
            {archNotes.map((n, i) => (
              <RevealOnScroll key={i} delay={i * 80}>
                <article className={styles.note}>
                  <h3 className="h3">{n.name}</h3>
                  <p className={styles.small}>{n.body}</p>
                </article>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ INTERCONNECTION ═══ */}
      <section className="section" id="interconnect">
        <div className="shell">
          <RevealOnScroll>
            <p className="kicker">4.4 Module interconnection map</p>
            <h2 className="h2">The power emerges when modules <em>share data</em></h2>
          </RevealOnScroll>

          <div className={styles.flowList}>
            {flows.map((f, i) => (
              <RevealOnScroll key={i} delay={i * 50}>
                <div className={styles.flow}>
                  <span className={styles.flowFrom}>{f.from}</span>
                  <span className={styles.flowArrow} aria-hidden="true">→</span>
                  <span className={styles.flowTo}>{f.to}</span>
                  <span className={styles.flowValue}>{f.value}</span>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ ROADMAP ═══ */}
      <section className="section section--tint" id="roadmap">
        <div className="shell">
          <RevealOnScroll>
            <p className="kicker">33. Development roadmap</p>
            <h2 className="h2">Forty-eight months, seven <em>phases</em></h2>
            <p className="lede" style={{ marginBottom: '2.5rem' }}>
              Revenue from early modules funds later development, which reduces dependency on outside
              funding. The first commercial product — the cost estimation engine — is expected within
              six months.
            </p>
          </RevealOnScroll>

          <ol className={styles.timeline}>
            {roadmapPhases.map((p, i) => (
              <RevealOnScroll key={i} delay={i * 60}>
                <li className={styles.phase}>
                  <div className={styles.phaseMark} aria-hidden="true">
                    <span />
                  </div>
                  <div className={styles.phaseBody}>
                    <div className={styles.phaseTop}>
                      <span className={styles.phaseName}>Phase {p.phase} · {p.name}</span>
                      <span className={styles.phaseMonths}>{p.months}</span>
                    </div>
                    <p className={styles.phaseMilestone}>{p.milestone}</p>
                    <p className={styles.phaseModules}>{p.modules}</p>
                  </div>
                </li>
              </RevealOnScroll>
            ))}
          </ol>
        </div>
      </section>

      {/* ═══ MARKET ═══ */}
      <section className="section" id="market">
        <div className="shell">
          <RevealOnScroll>
            <p className="kicker">3.4 Addressable market</p>
            <h2 className="h2">₹17,000 Cr in India. <em>$60B</em> globally.</h2>
          </RevealOnScroll>

          <RevealOnScroll>
            <div className={styles.tableWrap}>
              <table className={styles.table}>
                <thead>
                  <tr>
                    <th scope="col">Segment</th>
                    <th scope="col">India TAM</th>
                    <th scope="col">Global TAM</th>
                    <th scope="col">Modules</th>
                  </tr>
                </thead>
                <tbody>
                  {marketTable.map((r, i) => (
                    <tr key={i}>
                      <th scope="row">{r.segment}</th>
                      <td>{r.indiaTam}</td>
                      <td>{r.globalTam}</td>
                      <td className={styles.tableMuted}>{r.modules}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </RevealOnScroll>

          <div className={styles.twoCol}>
            <RevealOnScroll>
              <div className={styles.panel}>
                <h3 className="h3">Six revenue channels</h3>
                <ul className={styles.defList}>
                  {revenueChannels.map((c, i) => (
                    <li key={i}>
                      <span className={styles.defTerm}>{c.name}</span>
                      <span className={styles.defBody}>{c.body}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </RevealOnScroll>
            <RevealOnScroll delay={80}>
              <div className={styles.panel}>
                <h3 className="h3">Who it is built for</h3>
                <ul className={styles.bullets}>
                  {customers.map((c, i) => <li key={i}>{c}</li>)}
                </ul>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* ═══ TECH STACK ═══ */}
      <section className="section section--tint" id="stack">
        <div className="shell">
          <RevealOnScroll>
            <p className="kicker">37. Technology stack</p>
            <h2 className="h2">Open source where possible. <em>Proprietary</em> where it counts.</h2>
          </RevealOnScroll>

          <RevealOnScroll>
            <div className={styles.tableWrap}>
              <table className={styles.table}>
                <thead>
                  <tr>
                    <th scope="col">Layer</th>
                    <th scope="col">Technology</th>
                    <th scope="col">Purpose</th>
                  </tr>
                </thead>
                <tbody>
                  {techStack.map((r, i) => (
                    <tr key={i}>
                      <th scope="row">{r.layer}</th>
                      <td>{r.tech}</td>
                      <td className={styles.tableMuted}>{r.purpose}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* ═══ CONTACT ═══ */}
      <section className={styles.contact} id="contact">
        <div className="shell">
          <RevealOnScroll>
            <div className={styles.contactInner}>
              <p className="kicker">34. Team structure</p>
              <h2 className="h2">Built by Indian engineers, for Indian <em>conditions</em></h2>

              <ul className={styles.teamList}>
                {team.map((t, i) => (
                  <li key={i} className={styles.teamItem}>
                    <span className={styles.teamName}>{t.name}</span>
                    <span className={styles.teamRole}>{t.role}</span>
                  </li>
                ))}
              </ul>

              <p className={styles.contactNote}>
                This document is strictly confidential. For the full technical specification and
                implementation guide, or to discuss a pilot deployment, get in touch with the team.
              </p>

              <ContactForm />
            </div>
          </RevealOnScroll>
        </div>
      </section>
    </>
  );
}
