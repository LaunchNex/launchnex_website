import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import ContactMethods from '../components/sections/ContactMethods/ContactMethods';
import ContactSection from '../components/sections/Contact/Contact';
import SectionLabel from '../components/ui/SectionLabel/SectionLabel';
import styles from './Contact.module.css';

export default function ContactPage() {
  return (
    <>
      <Helmet>
        <title>Contact — LaunchNex</title>
        <meta name="description" content="Start with a Clarity Sprint. Tell us what you are trying to solve and we will get back within 24 hours." />
        <meta property="og:title" content="Contact — LaunchNex" />
        <meta property="og:description" content="Start with a Clarity Sprint. We respond within 24 hours." />
        <meta property="og:url" content="https://launchnex.dev/contact" />
        <link rel="canonical" href="https://launchnex.dev/contact" />
      </Helmet>

      <div className={styles.page}>
        <section className={styles.hero}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className={styles.heroContent}
          >
            <SectionLabel>Get in touch</SectionLabel>
            <h1 className={styles.heroTitle}>Let's talk about your AI challenge.</h1>
          </motion.div>
        </section>

        <ContactMethods />
        <ContactSection />
      </div>
    </>
  );
}
