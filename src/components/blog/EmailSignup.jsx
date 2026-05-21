"use client";

import { useState } from "react";
import { Mail } from "lucide-react";
import styles from "./EmailSignup.module.css";

export default function EmailSignup() {
	const [status, setStatus] = useState("idle");
	const [message, setMessage] = useState("");

	async function handleSubmit(e) {
		e.preventDefault();
		const email = e.target.email.value.trim();

		if (!email) {
			setStatus("error");
			setMessage("Please enter your email address.");
			return;
		}
		if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
			setStatus("error");
			setMessage("Please enter a valid email address.");
			return;
		}

		setStatus("loading");
		setMessage("");

		try {
			const res = await fetch("/api/subscribe", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ email }),
			});
			const data = await res.json();

			if (!res.ok) {
				setStatus("error");
				setMessage(data.error || "Something went wrong.");
			} else {
				setStatus("success");
				setMessage("You're subscribed! Welcome aboard.");
				e.target.reset();
			}
		} catch {
			setStatus("error");
			setMessage("Network error. Please try again.");
		}
	}

	return (
		<div className={styles.emailSignup}>
			<div className={styles.emailIcon}>
				<Mail size={22} strokeWidth={1.75} />
			</div>
			<p className={styles.emailTitle}>Get AI insights in your inbox</p>
			<p className={styles.emailSub}>
				Practical strategies, real-world lessons, and proven frameworks — straight to your inbox.
			</p>
			{status === "success" ? (
				<p className={styles.successMsg}>{message}</p>
			) : (
				<form className={styles.emailForm} onSubmit={handleSubmit}>
					<input
						type="text"
						name="email"
						placeholder="Enter your email"
						className={`${styles.emailInput} ${status === "error" ? styles.inputError : ""}`}
						disabled={status === "loading"}
						onChange={() => { if (status === "error") { setStatus("idle"); setMessage(""); } }}
					/>
					<button type="submit" className={styles.emailBtn} disabled={status === "loading"}>
						{status === "loading" ? "Subscribing…" : "Subscribe"}
					</button>
					{status === "error" && <p className={styles.errorMsg}>{message}</p>}
				</form>
			)}
		</div>
	);
}
