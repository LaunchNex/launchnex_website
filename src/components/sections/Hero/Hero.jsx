import { motion } from 'framer-motion';
import SectionLabel from '../../ui/SectionLabel/SectionLabel';
import Button from '../../ui/Button/Button';
import styles from './Hero.module.css';

const STATS = [
  { number: '12+', label: 'Years senior engineering experience' },
  { number: '0', label: 'Projects handed to juniors' },
  { number: '90', label: 'Days post-launch monitoring' },
  { number: '100%', label: 'Senior delivery, every project' },
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
          <Button to="/contact" variant="primary">Start with a Clarity Sprint →</Button>
          <Button to="/process" variant="secondary">See how we work</Button>
        </motion.div>

        <motion.div custom={5} variants={fadeUp} initial="hidden" animate="visible" className={styles.stats}>
          {STATS.map(({ number, label }) => (
            <div key={label} className={styles.stat}>
              <span className={styles.statNumber}>{number}</span>
              <span className={styles.statLabel}>{label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
