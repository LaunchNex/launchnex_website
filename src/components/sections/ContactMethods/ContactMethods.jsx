import { useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import styles from './ContactMethods.module.css';

/* ── Placeholder URLs — replace with your real links ── */
const CALENDLY_URL = 'https://calendly.com/YOUR_USERNAME/30min';
const WHATSAPP_NUMBER = '919999999999'; // country code + number, no +
const WHATSAPP_MESSAGE = 'Hi LaunchNex, I would like to discuss an AI project.';
const LINKEDIN_URL = 'https://linkedin.com/company/launchnex';
const EMAIL = 'hello@launchnex.dev';

/* ── SVG Icons (inline, no dependency) ── */
const CalendarIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
    <line x1="16" y1="2" x2="16" y2="6" />
    <line x1="8" y1="2" x2="8" y2="6" />
    <line x1="3" y1="10" x2="21" y2="10" />
  </svg>
);

const MailIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="M22 7l-10 7L2 7" />
  </svg>
);

const WhatsAppIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const LinkedInIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const methods = [
  {
    id: 'calendly',
    icon: CalendarIcon,
    title: 'Book a Call',
    description: 'Schedule a free 30-min Clarity Sprint call directly on our calendar.',
    action: 'Schedule now',
    color: 'green',
  },
  {
    id: 'email',
    icon: MailIcon,
    title: 'Email Us',
    description: 'Send us a detailed brief and we\'ll respond within 24 hours.',
    action: 'Send email',
    href: `mailto:${EMAIL}`,
    color: 'teal',
  },
  {
    id: 'whatsapp',
    icon: WhatsAppIcon,
    title: 'WhatsApp',
    description: 'Quick question? Chat with us instantly on WhatsApp.',
    action: 'Open chat',
    href: `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`,
    color: 'green',
  },
  {
    id: 'linkedin',
    icon: LinkedInIcon,
    title: 'LinkedIn',
    description: 'Connect with us professionally. DMs are always open.',
    action: 'Visit profile',
    href: LINKEDIN_URL,
    color: 'blue',
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45 } },
};

export default function ContactMethods() {
  /* Load Calendly widget script once */
  useEffect(() => {
    if (document.querySelector('script[src*="calendly.com"]')) return;

    const link = document.createElement('link');
    link.href = 'https://assets.calendly.com/assets/external/widget.css';
    link.rel = 'stylesheet';
    document.head.appendChild(link);

    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.head.removeChild(link);
      document.body.removeChild(script);
    };
  }, []);

  const openCalendly = useCallback(() => {
    if (window.Calendly) {
      window.Calendly.initPopupWidget({ url: CALENDLY_URL });
    } else {
      window.open(CALENDLY_URL, '_blank');
    }
  }, []);

  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <h2 className={styles.title}>Choose how you'd like to connect.</h2>
          <p className={styles.subtitle}>
            Pick the channel that works best for you — we're responsive on all of them.
          </p>
        </motion.div>

        <motion.div
          className={styles.cards}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {methods.map((method) => {
            const Icon = method.icon;
            const isCalendly = method.id === 'calendly';

            const cardContent = (
              <>
                <span className={`${styles.iconWrap} ${styles[method.color]}`}>
                  <Icon />
                </span>
                <h3 className={styles.cardTitle}>{method.title}</h3>
                <p className={styles.cardBody}>{method.description}</p>
                <span className={styles.cardAction}>
                  {method.action}
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </span>
              </>
            );

            return (
              <motion.div key={method.id} variants={cardVariants}>
                {isCalendly ? (
                  <button
                    type="button"
                    className={styles.card}
                    onClick={openCalendly}
                    aria-label="Open Calendly to book a call"
                  >
                    {cardContent}
                  </button>
                ) : (
                  <a
                    href={method.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.card}
                  >
                    {cardContent}
                  </a>
                )}
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
