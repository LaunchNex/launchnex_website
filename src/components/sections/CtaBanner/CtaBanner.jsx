import { motion } from 'framer-motion';
import Button from '../../ui/Button/Button';
import styles from './CtaBanner.module.css';

export default function CtaBanner() {
  return (
    <section className={styles.section}>
      <div className={styles.glow} aria-hidden="true" />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className={styles.content}
      >
        <h2 className={styles.title}>Start with a Clarity Sprint.</h2>
        <p className={styles.body}>
          Two weeks. Fixed fee. An honest answer about whether AI will actually help your
          business — before you spend anything on development.
        </p>
        <Button to="/contact" variant="primary">Book a Clarity Sprint →</Button>
      </motion.div>
    </section>
  );
}
