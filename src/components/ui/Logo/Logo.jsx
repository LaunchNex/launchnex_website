import styles from "./Logo.module.css";
import Image from "next/image";

export default function Logo({ size = 36 }) {
	const textSize = size * 0.68;

	return (
		<div className={styles.logo}>
			<Image width={size * 2} height={size * 2} src="/logo.png" alt="LaunchNex logo" quality={100} style={{ width: size, height: size, backgroundColor: "transparent", marginRight: 5 }} />

			<span className={styles.text} style={{ fontSize: textSize }}>
				Launch<span className={styles.accent}>Nex</span>
			</span>
		</div>
	);
}
