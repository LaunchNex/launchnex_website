import styles from "./Stat.module.css";

export function StatGrid({ children }) {
	return <div className={styles.grid}>{children}</div>;
}

export function Stat({ value, label, sublabel }) {
	return (
		<div className={styles.stat}>
			<span className={styles.value}>{value}</span>
			<span className={styles.label}>{label}</span>
			{sublabel && <span className={styles.sublabel}>{sublabel}</span>}
		</div>
	);
}
