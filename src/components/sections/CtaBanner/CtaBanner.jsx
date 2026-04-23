import { motion } from 'framer-motion';
import Button from '../../ui/Button/Button';
import styles from './CtaBanner.module.css';

export default function CtaBanner() {
  return (
    <section className={styles.section}>
      <div className={styles.glow} aria-hidden="true" />
      <motion.div className={styles.cta} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
        <h2 className={styles.ctaHeading}>
          Work with a real <span className={styles.accent}>AI partner</span>, not just a vendor.
        </h2>
        <p className={styles.ctaBody}>Two weeks. Fixed fee. An honest answer about whether AI will actually help your business — before you spend anything on development.</p>
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
    </section>
  );
}
