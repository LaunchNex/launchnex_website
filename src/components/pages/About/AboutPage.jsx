"use client";
import MotionDiv from "@/components/ui/MotionDiv/MotionDiv";
import SectionLabel from "@/components/ui/SectionLabel/SectionLabel";
import CtaBanner from "@/components/sections/CtaBanner/CtaBanner";
import styles from "./AboutPage.module.css";

const IDENTITY = [
	{
		title: "Led by engineers with 12+ years of production experience",
		description: "Not consultants. Not managers. Engineers who have shipped AI systems at scale and understand what it takes to make AI work in the real world.",
	},
	{
		title: "Boutique by design, not by default",
		description: "We stay small so every client gets direct access to senior talent. Growth never compromises quality. Every project gets our full attention.",
	},
	{
		title: "Built for scale, not for geography",
		description: "Remote-native. We work with clients across time zones, with async processes built for deep engineering work, not status meetings.",
	},
	{
		title: "Honest by policy",
		description: "The Clarity Sprint exists so we can tell you the truth before you invest. If AI will not help your business, we say so. No upselling. No sunk cost pressure.",
	},
	{
		title: "Full-stack, front to back",
		description: "From LLM pipelines and RAG architecture to React interfaces and production infrastructure. One team, end to end. No handoffs.",
	},
	{
		title: "Outcome-obsessed",
		description: "We measure success by business impact, not story points. Every engagement ends with an ROI outcome report measuring actual results against projections.",
	},
];

const cardVariants = {
	hidden: { opacity: 0, y: 30 },
	visible: i => ({
		opacity: 1,
		y: 0,
		transition: { delay: i * 0.08, duration: 0.5, ease: "easeOut" },
	}),
};

export default function AboutPage() {
	return (
		<>
			<div className={styles.page}>
				<section className={styles.hero}>
					<MotionDiv onView={false} className={styles.heroContent}>
						<SectionLabel>Who we are</SectionLabel>
						<h1 className={styles.heroTitle}>
							Not an agency. <em>An AI engineering partner.</em>
						</h1>
						<p className={styles.heroBody}>
							LaunchNex exists because the AI market is full of vendors and almost empty of partners. We built a company around honest assessment, senior delivery, and long-term accountability.
						</p>
					</MotionDiv>
				</section>

				<section className={styles.identity}>
					<div className={styles.identityInner}>
						<div className={styles.cards}>
							{IDENTITY.map((card, i) => (
								<MotionDiv key={card.title} custom={i} variants={cardVariants} className={styles.card}>
									<h3 className={styles.cardTitle}>{card.title}</h3>
									<p className={styles.cardBody}>{card.description}</p>
								</MotionDiv>
							))}
						</div>
					</div>
				</section>

				<section className={styles.guarantee}>
					<MotionDiv className={styles.guaranteeContent}>
						<h2>The LaunchNex Guarantee</h2>
						<p>
							Every engagement starts with the Clarity Sprint. If we determine that AI is not the right solution for your business, you keep the report and pay nothing more. No upselling. No sunk cost
							pressure. If we do build, we guarantee senior delivery on every sprint, define quality SLAs before development begins, and stay for 90 days after launch to ensure your AI actually works
							in production.
						</p>
					</MotionDiv>
				</section>

				<CtaBanner />
			</div>
		</>
	);
}
