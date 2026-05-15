import styles from "./Steps.module.css";

export function Steps({ children }) {
	return <div className={styles.steps}>{children}</div>;
}

export function Step({ number, title, children }) {
	return (
		<div className={styles.step}>
			<div className={styles.number}>{number}</div>
			<div className={styles.content}>
				{title && <p className={styles.stepTitle}>{title}</p>}
				<div className={styles.stepBody}>{children}</div>
			</div>
		</div>
	);
}
