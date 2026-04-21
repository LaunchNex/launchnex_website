import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import SectionLabel from '../components/ui/SectionLabel/SectionLabel';
import Badge from '../components/ui/Badge/Badge';
import styles from './Blog.module.css';

const POSTS = [
  {
    title: 'Why 70% of AI projects fail before production',
    category: 'Industry Analysis',
  },
  {
    title: 'How to assess if your business is ready for AI',
    category: 'AI Readiness',
  },
  {
    title: 'AI feasibility checklist for mid-size companies',
    category: 'Framework',
  },
  {
    title: 'What to ask an AI agency before signing',
    category: 'Buyer Guide',
  },
  {
    title: 'RAG vs fine-tuning — which does your business actually need',
    category: 'Technical',
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

export default function BlogPage() {
  return (
    <>
      <Helmet>
        <title>Blog — LaunchNex</title>
        <meta name="description" content="Insights on AI engineering, feasibility assessment, and building production-grade AI systems." />
        <meta property="og:title" content="Blog — LaunchNex" />
        <meta property="og:description" content="Insights on AI engineering and production AI." />
        <meta property="og:url" content="https://launchnex.dev/blog" />
        <link rel="canonical" href="https://launchnex.dev/blog" />
      </Helmet>

      <div className={styles.page}>
        <section className={styles.hero}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className={styles.heroContent}
          >
            <SectionLabel>Blog</SectionLabel>
            <h1 className={styles.heroTitle}>Thinking about AI — honestly.</h1>
            <p className={styles.heroBody}>
              Practical insights on AI engineering, feasibility, and what it actually takes to ship
              production-grade AI systems.
            </p>
          </motion.div>
        </section>

        <section className={styles.grid}>
          <div className={styles.gridInner}>
            {POSTS.map((post, i) => (
              <motion.article
                key={post.title}
                custom={i}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className={styles.card}
              >
                <div className={styles.cardTop}>
                  <Badge variant="muted">{post.category}</Badge>
                  <Badge variant="default">Coming soon</Badge>
                </div>
                <h3 className={styles.cardTitle}>{post.title}</h3>
              </motion.article>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
