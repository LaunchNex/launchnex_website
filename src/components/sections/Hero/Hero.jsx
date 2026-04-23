import { motion } from 'framer-motion';
import SectionLabel from '../../ui/SectionLabel/SectionLabel';
import Button from '../../ui/Button/Button';
import styles from './Hero.module.css';

const STATS = [
  { number: '100', suffix: '%', label: 'Built from scratch. Always.', desc: 'Zero templates. Every solution is engineered specifically for your product and goals.' },
  { number: '90', suffix: 'days', label: "We don't disappear at launch.", desc: '3 months of hands-on post-launch support. Bugs, tweaks, iterations — covered.' },
  { number: '99', suffix: '%', label: 'Trusted by nearly every client.', desc: 'A near-perfect satisfaction record built on honest timelines and real outcomes.' },
  { number: '3', suffix: 'x', label: 'Ship faster with AI workflows.', desc: 'Our AI-augmented process cuts delivery time by two thirds — without cutting corners.' },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: 'easeOut' },
  }),
};

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.glow} aria-hidden="true" />
      <div className={styles.glowCyan} aria-hidden="true" />
      <div className={styles.noise} aria-hidden="true" />

      <div className={styles.content}>
        <motion.div custom={0} variants={fadeUp} initial="hidden" animate="visible">
          <SectionLabel>AI Engineering Partner</SectionLabel>
        </motion.div>

        <motion.h1 custom={1} variants={fadeUp} initial="hidden" animate="visible" className={styles.title}>
          AI built for production.
          <br />
          <em className={styles.italic}>Not presentations.</em>
        </motion.h1>

        <motion.p custom={2} variants={fadeUp} initial="hidden" animate="visible" className={styles.subtitle}>
          We assess before we build.
        </motion.p>

        <motion.p custom={3} variants={fadeUp} initial="hidden" animate="visible" className={styles.body}>
          Most AI projects never reach production. LaunchNex is built to change that — with a
          process that starts with honest feasibility, builds with senior engineers, and monitors
          your AI for 90 days after launch.
        </motion.p>

        <motion.div custom={4} variants={fadeUp} initial="hidden" animate="visible" className={styles.buttons}>
          <Button to="/services" variant="primary">Explore services</Button>
          <Button to="/work" variant="secondary">See recent work</Button>
        </motion.div>

        <motion.div custom={5} variants={fadeUp} initial="hidden" animate="visible" className={styles.stats}>
          {STATS.map(({ number, suffix, label, desc }) => (
            <div key={label} className={styles.stat}>
              <span className={styles.statNumber}>{number}<span className={styles.statSuffix}>{suffix}</span></span>
              <span className={styles.statLabel}>{label}</span>
              <span className={styles.statDesc}>{desc}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
