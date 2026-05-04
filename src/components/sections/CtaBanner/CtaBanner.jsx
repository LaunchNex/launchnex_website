import MotionDiv from '../../ui/MotionDiv/MotionDiv';
import Button from '../../ui/Button/Button';
import styles from './CtaBanner.module.css';

export default function CtaBanner() {
  return (
    <section className={styles.section}>
      <div className={styles.glow} aria-hidden="true" />
      <MotionDiv className={styles.cta}>
        <h2 className={styles.ctaHeading}>
          Work with a real <span className={styles.accent}>AI partner</span>, not just a vendor.
        </h2>
        <p className={styles.ctaBody}>Two weeks. Fixed fee. An honest answer about whether AI will actually help your business — before you spend anything on development.</p>
        <div className={styles.ctaButtons}>
          <Button to="/contact" variant="primary">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: 8 }}><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" /></svg>
            Talk to an AI expert
          </Button>
        </div>
      </MotionDiv>
    </section>
  );
}
