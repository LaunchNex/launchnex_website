"use client";

import styles from "./EmailSignup.module.css";

export default function EmailSignup() {
	function handleSubmit(e) {
		e.preventDefault();
	}

	return (
		<div className={styles.emailSignup}>
			<div className={styles.emailIcon}>✉</div>
			<p className={styles.emailTitle}>Get AI insights in your inbox</p>
			<p className={styles.emailSub}>
				Practical strategies, real-world lessons, and proven frameworks — straight to your inbox.
			</p>
			<form className={styles.emailForm} onSubmit={handleSubmit}>
				<input
					type="email"
					placeholder="Enter your email"
					className={styles.emailInput}
					required
				/>
				<button type="submit" className={styles.emailBtn}>
					Subscribe
				</button>
			</form>
		</div>
	);
}
