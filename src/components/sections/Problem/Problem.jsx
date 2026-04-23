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

const XIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" stroke="#ef4444" strokeWidth="1.5" /><path d="M15 9l-6 6M9 9l6 6" stroke="#ef4444" strokeWidth="1.5" strokeLinecap="round" /></svg>
);

const CheckIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" stroke="#1DBF73" strokeWidth="1.5" /><path d="M8 12.5l2.5 2.5 5.5-5.5" stroke="#1DBF73" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
);


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

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className={styles.cta}
        >
          <Button to="/process" variant="primary">See our process</Button>
        </motion.div>

      </div>
    </section>
  );
}
