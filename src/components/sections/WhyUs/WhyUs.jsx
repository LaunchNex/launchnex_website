import { motion } from 'framer-motion';
import SectionLabel from '../../ui/SectionLabel/SectionLabel';
import styles from './WhyUs.module.css';

const CARDS = [
  {
    title: 'You get the expert, not their calendar slot',
    description:
      'No account managers. No juniors. The senior engineer who architects your solution is the same person who builds and deploys it.',
  },
  {
    title: "We tell you what competitors won't",
    description:
      "If AI isn't the right solution for your problem, we'll say so — in the Clarity Sprint, before you've spent anything on development.",
  },
  {
    title: 'Production-grade from the first sprint',
    description:
      'No prototypes disguised as products. Every sprint output is built with production infrastructure, monitoring, and quality SLAs from day one.',
  },
  {
    title: 'Full transparency, always',
    description:
      'Weekly demos, shared dashboards, no black boxes. You see what we build, when we build it, and exactly what it costs.',
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

export default function WhyUs() {
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
          <SectionLabel>Why work with us</SectionLabel>
          <blockquote className={styles.pullQuote}>
            "The only AI studio that assesses before it builds, guarantees senior delivery, and
            stays until your AI actually works in production."
          </blockquote>
        </motion.div>

        <div className={styles.cards}>
          {CARDS.map((card, i) => (
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
