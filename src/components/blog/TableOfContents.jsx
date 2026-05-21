"use client";

import { useEffect, useState } from "react";
import styles from "./TableOfContents.module.css";

export default function TableOfContents({ headings }) {
	const [activeId, setActiveId] = useState("");

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						setActiveId(entry.target.id);
					}
				});
			},
			{ rootMargin: "0px 0px -70% 0px", threshold: 0 }
		);

		headings.forEach(({ id }) => {
			const el = document.getElementById(id);
			if (el) observer.observe(el);
		});

		return () => observer.disconnect();
	}, [headings]);

	if (!headings.length) return null;

	return (
		<nav className={styles.toc}>
			<p className={styles.tocLabel}>ON THIS PAGE</p>
			<ul className={styles.tocList}>
				{headings.map(({ id, text, level }) => (
					<li key={id} className={level === 3 ? styles.tocSubItem : styles.tocItem}>
						<a
							href={`#${id}`}
							className={`${styles.tocLink} ${activeId === id ? styles.active : ""}`}
						>
							{level === 3 && <span className={styles.subDot} />}
							{text}
						</a>
					</li>
				))}
			</ul>
		</nav>
	);
}
