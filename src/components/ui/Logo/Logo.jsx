import styles from "./Logo.module.css";

export default function Logo({ size = 36 }) {
	const textSize = size * 0.68;

	return (
		<div className={styles.logo}>
			<img width={55} height={55} src="/logo.png" style={{ backgroundColor: "transparent", marginRight: -6 }} />

			<span className={styles.text} style={{ fontSize: textSize }}>
				Launch<span className={styles.accent}>Nex</span>
			</span>
		</div>
	);
}
