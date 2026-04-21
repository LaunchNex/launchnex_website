import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import styles from './Button.module.css';

export default function Button({
  children,
  variant = 'primary',
  to,
  href,
  type = 'button',
  disabled = false,
  onClick,
  className = '',
  ...props
}) {
  const classes = `${styles.button} ${styles[variant]} ${className}`.trim();

  const motionProps = {
    whileHover: { scale: 1.02 },
    whileTap: { scale: 0.97 },
    transition: { duration: 0.15 },
  };

  // Render as router Link
  if (to) {
    return (
      <motion.div {...motionProps} className={styles.wrapper}>
        <Link to={to} className={classes} {...props}>
          {children}
        </Link>
      </motion.div>
    );
  }

  // Render as external anchor
  if (href) {
    return (
      <motion.div {...motionProps} className={styles.wrapper}>
        <a href={href} className={classes} target="_blank" rel="noopener noreferrer" {...props}>
          {children}
        </a>
      </motion.div>
    );
  }

  // Render as button
  return (
    <motion.button
      {...motionProps}
      className={classes}
      type={type}
      disabled={disabled}
      onClick={onClick}
      {...props}
    >
      {children}
    </motion.button>
  );
}
