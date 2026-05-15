import styles from "./Callout.module.css";

const ICONS = {
	info: "ℹ️",
	tip: "💡",
	warning: "⚠️",
	danger: "🚨",
};

export default function Callout({ type = "info", children }) {
	return (
		<div className={`${styles.callout} ${styles[type]}`}>
			<span className={styles.icon}>{ICONS[type]}</span>
			<div className={styles.body}>{children}</div>
		</div>
	);
}
