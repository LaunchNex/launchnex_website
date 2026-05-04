import MotionDiv from '../../ui/MotionDiv/MotionDiv';
import SectionLabel from '../../ui/SectionLabel/SectionLabel';
import Badge from '../../ui/Badge/Badge';
import styles from './Process.module.css';

const STEPS = [
  {
    step: 1,
    title: 'AI Clarity Sprint',
    timeframe: 'Week 1–2',
    note: 'Paid, fixed fee',
    description:
      'We embed in your business for two weeks. Data audit, workflow mapping, stakeholder interviews, feasibility scoring. You receive a comprehensive report with a go/no-go recommendation.',
    badges: ['Data audit', 'Workflow mapping', 'Feasibility report', 'Go/no-go recommendation'],
  },
  {
    step: 2,
    title: 'Architecture & Blueprint',
    timeframe: 'Week 2–3',
    description:
      'Based on the Clarity Sprint output, we design the full technical architecture — data pipelines, model selection, integration points, quality SLAs, and deployment strategy.',
    badges: ['Technical architecture', 'Model selection', 'Quality SLAs', 'Deployment plan'],
  },
  {
    step: 3,
    title: 'Agile Build with Live Transparency',
    timeframe: 'Week 3–10',
    description:
      'Weekly demos, shared dashboards, no black boxes. You see what we build as we build it. Every sprint has defined outputs and acceptance criteria.',
    badges: ['Weekly demos', 'Shared dashboards', 'Sprint outputs', 'Acceptance criteria'],
  },
  {
    step: 4,
    title: 'Production Readiness Review',
    timeframe: 'Week 10–11',
    description:
      'Load testing, security review, edge case hardening, documentation. We don\'t ship until quality SLAs are met — hallucination rate, accuracy, latency, all verified.',
    badges: ['Load testing', 'Security review', 'Edge case hardening', 'Documentation'],
  },
  {
    step: 5,
    title: 'Launch & 90-Day AI Health Monitoring',
    timeframe: 'Week 11 onwards',
    description:
      'Go-live support followed by 90 days of proactive monitoring — output accuracy, model drift, latency, cost per query. Monthly reports delivered to your team.',
    badges: ['Go-live support', 'Drift monitoring', 'Latency tracking', 'Monthly reports'],
  },
  {
    step: 6,
    title: 'ROI Measurement & Outcome Report',
    timeframe: 'Day 90',
    description:
      'Final outcome report measuring actual business impact against projected ROI from the Clarity Sprint. Hard numbers, not narratives.',
    badges: ['ROI measurement', 'Business impact', 'Outcome report', 'Hard metrics'],
  },
];

const stepVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

export default function Process() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <MotionDiv className={styles.header}>
          <SectionLabel>How we work</SectionLabel>
          <h2 className={styles.title}>The process nobody else offers.</h2>
          <div className={styles.highlight}>
            <p>
              Over 70% of AI pilots never reach production. LaunchNex's process eliminates every
              failure point — from discovery to deployment to monitoring.
            </p>
          </div>
        </MotionDiv>

        <div className={styles.timeline}>
          {STEPS.map((step) => (
            <MotionDiv key={step.step} variants={stepVariants} className={styles.step}>
              <div className={styles.stepIndicator}>
                <span className={styles.stepDot} />
                {step.step < STEPS.length && <span className={styles.stepLine} />}
              </div>

              <div className={styles.stepContent}>
                <div className={styles.stepMeta}>
                  <span className={styles.stepNumber}>Step {step.step}</span>
                  <span className={styles.stepTimeframe}>{step.timeframe}</span>
                  {step.note && <Badge variant="green">{step.note}</Badge>}
                </div>
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepBody}>{step.description}</p>
                <div className={styles.badges}>
                  {step.badges.map((badge) => (
                    <Badge key={badge}>{badge}</Badge>
                  ))}
                </div>
              </div>
            </MotionDiv>
          ))}
        </div>
      </div>
    </section>
  );
}
