import { Link } from 'react-router-dom';
import Logo from '../../ui/Logo/Logo';
import styles from './Footer.module.css';

const NAV_LINKS = [
  { to: '/services', label: 'Services' },
  { to: '/process', label: 'Process' },
  { to: '/work', label: 'Work' },
  { to: '/about', label: 'About' },
  { to: '/blog', label: 'Blog' },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.grid}>
          {/* Col 1 — Brand */}
          <div className={styles.brand}>
            <Link to="/" className={styles.logo} aria-label="LaunchNex — Go to homepage"><Logo size={28} /></Link>
            <p className={styles.tagline}>AI built for production. Not presentations.</p>
            <p className={styles.subTagline}>We assess before we build.</p>
          </div>

          {/* Col 2 — Navigation */}
          <div className={styles.column}>
            <h4 className={styles.columnTitle}>Navigation</h4>
            {NAV_LINKS.map(({ to, label }) => (
              <Link key={to} to={to} className={styles.link}>{label}</Link>
            ))}
          </div>

          {/* Col 3 — Contact */}
          <div className={styles.column}>
            <h4 className={styles.columnTitle}>Contact</h4>
            <a href="mailto:hello@launchnex.dev" className={styles.link}>hello@launchnex.dev</a>
            <a href="https://launchnex.dev" className={styles.link} target="_blank" rel="noopener noreferrer">launchnex.dev <span className="sr-only">(opens in new tab)</span></a>
          </div>

          {/* Col 4 — Legal */}
          <div className={styles.column}>
            <h4 className={styles.columnTitle}>Legal</h4>
            <Link to="/privacy" className={styles.link}>Privacy Policy</Link>
            <Link to="/terms" className={styles.link}>Terms</Link>
          </div>
        </div>

        <div className={styles.bottom}>
          <p>© 2026 LaunchNex. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
