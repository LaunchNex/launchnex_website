import { motion } from 'framer-motion';
import { Cpu, AppWindow, PenTool, HeadsetIcon } from 'lucide-react';
import SectionLabel from '../../ui/SectionLabel/SectionLabel';
import Button from '../../ui/Button/Button';
import styles from './Services.module.css';

const CARD_ICONS = [
  { Icon: Cpu, color: '#34D399' },
  { Icon: AppWindow, color: '#7BB8FF' },
  { Icon: PenTool, color: '#C084FC' },
  { Icon: HeadsetIcon, color: '#5EEAD4' },
];

const CATEGORIES = [
  {
    title: 'AI & Generative AI',
    hook: 'Intelligent systems that reason, decide, and create.',
    description:
      'From custom LLM applications and autonomous agents to RAG pipelines and workflow automation — we build production-grade AI that solves real business problems.',
    badges: ['Generative AI', 'AI Agents', 'Chatbots', 'RAG Systems', 'Workflow Automation', 'Prompt Engineering'],
  },
  {
    title: 'Application & Product Development',
    hook: '12+ years of full-stack expertise, AI-first.',
    description:
      'Web apps, mobile apps, and AI-enabled products — built with React, Next.js, and React Native. Every interface is pixel-perfect, performant, and designed to scale.',
    badges: ['React / Next.js', 'React Native', 'AI-Enabled Apps', 'Frontend Systems'],
  },
  {
    title: 'Design & Experience',
    hook: 'Interfaces that users love and businesses trust.',
    description:
      'User research, wireframes, interactive prototypes, and design systems. We create intuitive, visually polished interfaces grounded in modern design principles.',
    badges: ['UI/UX Design', 'User Research', 'Prototyping', 'Design Systems'],
  },
  {
    title: 'Consulting & Support',
    hook: 'Clarity before code. Confidence after launch.',
    description:
      'AI strategy and feasibility assessments, rigorous QA and testing, and ongoing maintenance — so you build the right thing, ship with confidence, and stay running.',
    badges: ['AI Consulting', 'QA & Testing', 'Maintenance', 'Post-Launch Support'],
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

export default function Services() {
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
          <SectionLabel>What we do</SectionLabel>
          <h2 className={styles.title}>Full-spectrum <span className={styles.accent}>AI engineering.</span></h2>
          <p className={styles.subtitle}>From strategy to launch to long-term support — four capability areas, one expert team.</p>
        </motion.div>

        <div className={styles.cards}>
          {CATEGORIES.map((category, i) => (
            <motion.div
              key={category.title}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className={styles.card}
              style={{ '--icon-color': CARD_ICONS[i].color, '--card-border-color': CARD_ICONS[i].border, '--badge-color': CARD_ICONS[i].color }}
            >
              <span className={styles.cardIcon}>
                {(() => { const { Icon, color } = CARD_ICONS[i]; return <Icon size={28} color={color} strokeWidth={1.5} />; })()}
              </span>
              <h3 className={styles.cardTitle}>{category.title}</h3>
              <p className={styles.cardHook}>{category.hook}</p>
              <p className={styles.cardBody}>{category.description}</p>
              <div className={styles.badges}>
                {category.badges.map((badge) => (
                  <span key={badge} className={styles.badge}>{badge}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className={styles.cta}
        >
          <Button to="/services" variant="secondary">Explore all services →</Button>
        </motion.div>
      </div>
    </section>
  );
}
