import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { motion } from 'framer-motion';
import { useState } from 'react';
import styles from './Contact.module.css';

const schema = z.object({
  name: z.string().min(1, 'Full name is required'),
  company: z.string().min(1, 'Company name is required'),
  email: z.string().email('Please enter a valid email address'),
  message: z.string().min(20, 'Please describe what you are trying to solve (min 20 characters)'),
  source: z.string().min(1, 'Please select how you heard about us'),
});

export default function Contact() {
  const [formState, setFormState] = useState('idle'); // idle | submitting | success | error

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data) => {
    setFormState('submitting');
    try {
      // Placeholder for Resend API integration
      await new Promise((resolve) => setTimeout(resolve, 1500));
      console.log('Form data:', data);
      setFormState('success');
      reset();
    } catch {
      setFormState('error');
    }
  };

  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className={styles.grid}
        >
          {/* Left column */}
          <div className={styles.info}>
            <h2 className={styles.title}>Or tell us everything here.</h2>
            <p className={styles.body}>
              Prefer a detailed brief? Fill out this form and we'll review your challenge
              before booking a call. The more context, the better our first conversation.
            </p>

            <div className={styles.steps}>
              <div className={styles.stepItem}>
                <span className={styles.stepNumber}>1</span>
                <p>Submit this form with your challenge</p>
              </div>
              <div className={styles.stepItem}>
                <span className={styles.stepNumber}>2</span>
                <p>We review and assess fit within 24 hours</p>
              </div>
              <div className={styles.stepItem}>
                <span className={styles.stepNumber}>3</span>
                <p>30-minute Clarity Sprint call to discuss next steps</p>
              </div>
            </div>

            <a href="mailto:hello@launchnex.dev" className={styles.email}>
              hello@launchnex.dev
            </a>
          </div>

          {/* Right column — Form */}
          <div className={styles.formWrapper}>
            {formState === 'success' ? (
              <div className={styles.successMessage}>
                <span className={styles.successIcon}>✓</span>
                <h3>Done.</h3>
                <p>We'll review and get back within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className={styles.form} noValidate>
                <div className={styles.field}>
                  <label htmlFor="name" className={styles.label}>Full name</label>
                  <input
                    id="name"
                    type="text"
                    className={`${styles.input} ${errors.name ? styles.inputError : ''}`}
                    placeholder="Your full name"
                    aria-required="true"
                    aria-invalid={!!errors.name}
                    aria-describedby={errors.name ? 'name-error' : undefined}
                    {...register('name')}
                  />
                  {errors.name && <span id="name-error" className={styles.error} role="alert">{errors.name.message}</span>}
                </div>

                <div className={styles.field}>
                  <label htmlFor="company" className={styles.label}>Company name</label>
                  <input
                    id="company"
                    type="text"
                    className={`${styles.input} ${errors.company ? styles.inputError : ''}`}
                    placeholder="Your company"
                    aria-required="true"
                    aria-invalid={!!errors.company}
                    aria-describedby={errors.company ? 'company-error' : undefined}
                    {...register('company')}
                  />
                  {errors.company && <span id="company-error" className={styles.error} role="alert">{errors.company.message}</span>}
                </div>

                <div className={styles.field}>
                  <label htmlFor="email" className={styles.label}>Email</label>
                  <input
                    id="email"
                    type="email"
                    className={`${styles.input} ${errors.email ? styles.inputError : ''}`}
                    placeholder="you@company.com"
                    aria-required="true"
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? 'email-error' : undefined}
                    {...register('email')}
                  />
                  {errors.email && <span id="email-error" className={styles.error} role="alert">{errors.email.message}</span>}
                </div>

                <div className={styles.field}>
                  <label htmlFor="message" className={styles.label}>What are you trying to solve?</label>
                  <textarea
                    id="message"
                    className={`${styles.textarea} ${errors.message ? styles.inputError : ''}`}
                    rows={4}
                    placeholder="Describe the business problem you'd like AI to address…"
                    aria-required="true"
                    aria-invalid={!!errors.message}
                    aria-describedby={errors.message ? 'message-error' : undefined}
                    {...register('message')}
                  />
                  {errors.message && <span id="message-error" className={styles.error} role="alert">{errors.message.message}</span>}
                </div>

                <div className={styles.field}>
                  <label htmlFor="source" className={styles.label}>How did you hear about us?</label>
                  <select
                    id="source"
                    className={`${styles.select} ${errors.source ? styles.inputError : ''}`}
                    aria-required="true"
                    aria-invalid={!!errors.source}
                    aria-describedby={errors.source ? 'source-error' : undefined}
                    {...register('source')}
                    defaultValue=""
                  >
                    <option value="" disabled>Select one…</option>
                    <option value="linkedin">LinkedIn</option>
                    <option value="google">Google</option>
                    <option value="referral">Referral</option>
                    <option value="other">Other</option>
                  </select>
                  {errors.source && <span id="source-error" className={styles.error} role="alert">{errors.source.message}</span>}
                </div>

                {formState === 'error' && (
                  <p className={styles.formError} role="alert">Something went wrong. Please try again.</p>
                )}

                <button type="submit" className={styles.submit} disabled={formState === 'submitting'}>
                  {formState === 'submitting' ? 'Sending…' : "Send — we'll respond within 24 hours"}
                </button>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
