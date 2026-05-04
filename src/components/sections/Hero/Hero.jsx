"use client";
import { motion } from "framer-motion";
import MotionDiv from "../../ui/MotionDiv/MotionDiv";
import SectionLabel from "../../ui/SectionLabel/SectionLabel";
import Button from "../../ui/Button/Button";
import styles from "./Hero.module.css";

const STATS = [
	{ number: "100", suffix: "%", label: "Built from scratch. Always.", desc: "Zero templates. Every solution is engineered specifically for your product and goals." },
	{ number: "90", suffix: "days", label: "We don't disappear at launch.", desc: "3 months of hands-on post-launch support. Bugs, tweaks, iterations — covered." },
	{ number: "99", suffix: "%", label: "Trusted by nearly every client.", desc: "A near-perfect satisfaction record built on honest timelines and real outcomes." },
	{ number: "3", suffix: "x", label: "Ship faster with AI workflows.", desc: "Our AI-augmented process cuts delivery time by two thirds — without cutting corners." },
];

const fadeUp = {
	hidden: { opacity: 0, y: 16 },
	visible: i => ({
		opacity: 1,
		y: 0,
		transition: { delay: i * 0.08, duration: 0.45, ease: "easeOut" },
	}),
};

export default function Hero() {
	return (
		<section className={styles.hero}>
			<div className={styles.glow} aria-hidden="true" />
			<div className={styles.glowCyan} aria-hidden="true" />
			<div className={styles.noise} aria-hidden="true" />

			<div className={styles.content}>
				<MotionDiv onView={false} custom={0} variants={fadeUp}>
					<SectionLabel>AI Engineering Partner</SectionLabel>
				</MotionDiv>

				<h1 className={styles.title}>
					AI built for production.
					<br />
					<em className={styles.accent}>Not presentations.</em>
				</h1>

				<motion.p custom={2} variants={fadeUp} initial="hidden" animate="visible" className={styles.subtitle}>
					We assess before we build.
				</motion.p>

				<motion.p custom={3} variants={fadeUp} initial="hidden" animate="visible" className={styles.body}>
					Most AI projects never reach production. LaunchNex is built to change that — with a process that starts with honest feasibility, builds with senior engineers, and monitors your AI for 90
					days after launch.
				</motion.p>

				<MotionDiv onView={false} custom={4} variants={fadeUp} className={styles.buttons}>
					<Button to="/services" variant="primary">
						Explore services
					</Button>
					<Button to="/work" variant="secondary">
						See recent work
					</Button>
				</MotionDiv>

				<MotionDiv onView={false} custom={5} variants={fadeUp} className={styles.stats}>
					{STATS.map(({ number, suffix, label, desc }) => (
						<div key={label} className={styles.stat}>
							<span className={styles.statNumber}>
								{number}
								<span className={styles.statSuffix}>{suffix}</span>
							</span>
							<span className={styles.statLabel}>{label}</span>
							<span className={styles.statDesc}>{desc}</span>
						</div>
					))}
				</MotionDiv>
			</div>
		</section>
	);
}
