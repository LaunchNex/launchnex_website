import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import SectionLabel from '../components/ui/SectionLabel/SectionLabel';
import Button from '../components/ui/Button/Button';
import styles from './Work.module.css';

export default function WorkPage() {
  return (
    <>
      <Helmet>
        <title>Work — LaunchNex</title>
        <meta name="description" content="Case studies and project outcomes from LaunchNex AI engineering engagements." />
        <meta property="og:title" content="Work — LaunchNex" />
        <meta property="og:description" content="Case studies and project outcomes from LaunchNex." />
        <meta property="og:url" content="https://launchnex.dev/work" />
        <link rel="canonical" href="https://launchnex.dev/work" />
      </Helmet>

      <div className={styles.page}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className={styles.content}
        >
          <SectionLabel>Our Work</SectionLabel>
          <h1 className={styles.title}>Case studies coming soon.</h1>
          <p className={styles.body}>
            We're currently completing our first engagements and documenting outcomes. Real results,
            real metrics — no fluff. Check back soon, or get in touch to start your own.
          </p>
          <Button to="/contact" variant="primary">Start with a Clarity Sprint →</Button>
        </motion.div>
      </div>
    </>
  );
}
