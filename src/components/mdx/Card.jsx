import styles from "./Card.module.css";

export function CardGrid({ cols, children }) {
	const colClass = cols === 2 ? styles.cols2 : cols === 3 ? styles.cols3 : "";
	return <div className={`${styles.grid} ${colClass}`}>{children}</div>;
}

export function Card({ icon, title, description, children }) {
	return (
		<div className={styles.card}>
			{icon && <span className={styles.cardIcon}>{icon}</span>}
			{title && <p className={styles.cardTitle}>{title}</p>}
			{description && <p className={styles.cardDescription}>{description}</p>}
			{children}
		</div>
	);
}
