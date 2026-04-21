import { motion } from 'framer-motion';
import SectionLabel from '../../ui/SectionLabel/SectionLabel';
import styles from './About.module.css';

const IDENTITY_CARDS = [
  {
    title: 'Led by engineers with 12+ years of production experience',
    description: 'Not consultants. Not managers. Engineers who have shipped AI systems at scale.',
  },
  {
    title: 'Boutique by design, not by default',
    description:
      'We stay small so every client gets direct access to senior talent. Growth never compromises quality.',
  },
  {
    title: 'Built for scale, not for geography',
    description:
      'Remote-native. We work with clients across time zones, with async processes built for deep engineering work.',
  },
  {
    title: 'Honest by policy',
    description:
      "The Clarity Sprint exists so we can tell you the truth before you invest. If AI won't help, we say so.",
  },
  {
    title: 'Full-stack, front to back',
    description:
      'From LLM pipelines to React interfaces to production infrastructure. One team, end to end.',
  },
  {
    title: 'Outcome-obsessed',
    description:
      'We measure success by business impact, not story points. Every engagement ends with an ROI outcome report.',
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.5, ease: 'easeOut' },
  }),
};

export default function About() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className={styles.header}
        >
          <SectionLabel>Who we are</SectionLabel>
          <h2 className={styles.title}>
            Not an agency. <em>An AI engineering partner.</em>
          </h2>
        </motion.div>

        <div className={styles.cards}>
          {IDENTITY_CARDS.map((card, i) => (
            <motion.div
              key={card.title}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className={styles.card}
            >
              <h3 className={styles.cardTitle}>{card.title}</h3>
              <p className={styles.cardBody}>{card.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
