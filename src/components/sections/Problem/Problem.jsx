import { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionLabel from '../../ui/SectionLabel/SectionLabel';
import Button from '../../ui/Button/Button';
import styles from './Problem.module.css';

const COMPARISON = [
  { them: 'Demo-driven sales pitches', us: 'Honest feasibility assessment first', themDesc: 'Most vendors try to impress you with demos instead of understanding your real problem.', usDesc: 'We study your goals, data, and constraints upfront and only build if it will create real impact.' },
  { them: 'Junior developers on your project', us: 'Senior engineers on every engagement', themDesc: 'Cost-cutting means your project gets staffed with inexperienced developers.', usDesc: 'Every project is led by senior engineers with deep AI and ML expertise.' },
  { them: 'Disappear after handoff', us: '90-day post-launch monitoring', themDesc: "Once delivered, you're on your own with no support or accountability.", usDesc: 'We stay involved for 90 days post-launch to ensure everything runs smoothly.' },
  { them: 'Black-box development', us: 'Weekly demos and shared dashboards', themDesc: 'Zero visibility into progress until a final delivery that may miss the mark.', usDesc: 'Full transparency with weekly demos, shared dashboards, and open communication.' },
  { them: 'Scope creep and change orders', us: 'Fixed-scope sprints with defined outputs', themDesc: 'Budgets inflate as vendors introduce unplanned costs and extend timelines beyond initial commitments', usDesc: 'Clear deliverables, fixed timelines, and no budget surprises on each sprint.' },
  { them: 'Prototype passed off as product', us: 'Production-grade from sprint one', themDesc: "What looks finished is really a fragile proof-of-concept that won't scale.", usDesc: 'Every sprint delivers production-ready code with proper testing and documentation.' },
  { them: 'No quality guarantees', us: 'SLAs on accuracy, latency, hallucination rate', themDesc: 'No commitments on performance, leaving you to deal with unreliable outputs.', usDesc: 'Contractual SLAs on the metrics that actually matter to your business.' },
  { them: 'Vanish when things break', us: 'Proactive monitoring and drift detection', themDesc: 'When issues arise in production, the vendor is nowhere to be found.', usDesc: 'Automated monitoring catches problems before your users ever notice.' },
];

const VALUES = [
  { title: 'Accountability', desc: 'We own outcomes, not just deliverables.' },
  { title: 'Transparency', desc: "You're involved at every step of the journey." },
  { title: 'Reliability', desc: 'Production-grade systems built to scale.' },
  { title: 'Partnership', desc: 'We grow with you, long after launch.' },
];

const XIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" stroke="#ef4444" strokeWidth="1.5" /><path d="M15 9l-6 6M9 9l6 6" stroke="#ef4444" strokeWidth="1.5" strokeLinecap="round" /></svg>
);

const CheckIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" stroke="#1DBF73" strokeWidth="1.5" /><path d="M8 12.5l2.5 2.5 5.5-5.5" stroke="#1DBF73" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
);

const VALUE_ICONS = {
  Accountability: () => <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><path d="M9 12l2 2 4-4" /></svg>,
  Transparency: () => <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" /></svg>,
  Reliability: () => <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71" /><path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71" /></svg>,
  Partnership: () => <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18" /><polyline points="17 6 23 6 23 12" /></svg>,
};

export default function Problem() {
  const [active, setActive] = useState(0);
  const handleNext = useCallback(() => {
    setActive((p) => (p + 1) % COMPARISON.length);
  }, []);

  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        {/* ── Header ── */}
        <motion.div className={styles.header} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
          <SectionLabel>Why LaunchNex</SectionLabel>
          <h2 className={styles.heading}>
            The market is full of AI vendors.<br />It has almost no <span className={styles.accent}>AI partners.</span>
          </h2>
          <p className={styles.subtitle}>We don&apos;t just build AI. We take ownership of outcomes.</p>
        </motion.div>

        {/* ── Comparison Carousel ── */}
        <motion.div className={styles.comparison} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.15 }}>
          <div className={styles.progress}>
            <span className={styles.progressText}>{active + 1} / {COMPARISON.length}</span>
            <div className={styles.progressDots}>
              {COMPARISON.map((_, i) => (
                <span key={i} className={`${styles.progressDot} ${i <= active ? styles.progressDotActive : ''}`} />
              ))}
            </div>
          </div>

          <div className={styles.comparisonGrid}>
            {/* Left — Them */}
            <div className={styles.sideList}>
              <h4 className={`${styles.sideListTitle} ${styles.themTitle}`}>Typical AI Vendors</h4>
              <div className={styles.sideListItems}>
                {COMPARISON.map((item, i) => (
                  <button key={item.them} className={`${styles.sideItem} ${i === active ? styles.sideItemActive : ''}`} onClick={() => setActive(i)}>
                    <XIcon size={22} />
                    <span>{item.them}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Center — Cards */}
            <div className={styles.centerArea}>
              <AnimatePresence mode="wait">
                <motion.div key={active} className={styles.centerCards} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.25 }}>
                  <div className={styles.cardThem}>
                    <span className={styles.cardIcon}><XIcon size={44} /></span>
                    <h4 className={styles.cardTitle}>{COMPARISON[active].them}</h4>
                    <p className={styles.cardDesc}>{COMPARISON[active].themDesc}</p>
                  </div>
                  <div className={styles.cardUs}>
                    <span className={styles.cardIcon}><CheckIcon size={44} /></span>
                    <h4 className={styles.cardTitle}>{COMPARISON[active].us}</h4>
                    <p className={styles.cardDesc}>{COMPARISON[active].usDesc}</p>
                  </div>
                  <button className={styles.nextBtn} onClick={handleNext} aria-label="Next comparison">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6" /></svg>
                  </button>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Right — Us */}
            <div className={styles.sideList}>
              <h4 className={`${styles.sideListTitle} ${styles.usTitle}`}>LaunchNex</h4>
              <div className={styles.sideListItems}>
                {COMPARISON.map((item, i) => (
                  <button key={item.us} className={`${styles.sideItem} ${styles.sideItemUs} ${i === active ? styles.sideItemActive : ''}`} onClick={() => setActive(i)}>
                    <CheckIcon size={22} />
                    <span>{item.us}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

        </motion.div>

        {/* ── Values ── */}
        <motion.div className={styles.values} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
          {VALUES.map(({ title, desc }) => {
            const Icon = VALUE_ICONS[title];
            return (
              <div key={title} className={styles.valueCard}>
                <span className={styles.valueIcon}><Icon /></span>
                <h4 className={styles.valueTitle}>{title}</h4>
                <p className={styles.valueDesc}>{desc}</p>
              </div>
            );
          })}
        </motion.div>

        {/* ── CTA ── */}
        <motion.div className={styles.cta} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
          <h2 className={styles.ctaHeading}>
            Work with a real <span className={styles.accent}>AI partner</span>, not just a vendor.
          </h2>
          <p className={styles.ctaBody}>Let&apos;s identify the right opportunities and build solutions that actually scale.</p>
          <div className={styles.ctaButtons}>
            <Button to="/contact" variant="primary">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: 8 }}><rect x="3" y="4" width="18" height="18" rx="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /></svg>
              Book a Strategy Call
            </Button>
            <Button to="/contact" variant="secondary">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: 8 }}><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" /></svg>
              Talk to an Expert
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
