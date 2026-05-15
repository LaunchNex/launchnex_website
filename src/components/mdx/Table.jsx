import styles from "./Table.module.css";

export default function Table({ children }) {
	return (
		<div className={styles.wrapper}>
			<table className={styles.table}>{children}</table>
		</div>
	);
}
