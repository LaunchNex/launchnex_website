import MotionDiv from "@/components/ui/MotionDiv/MotionDiv";
import SectionLabel from "@/components/ui/SectionLabel/SectionLabel";
import Badge from "@/components/ui/Badge/Badge";
import CtaBanner from "@/components/sections/CtaBanner/CtaBanner";
import styles from "./ProcessPage.module.css";

const STEPS = [
	{
		step: 1,
		title: "AI Clarity Sprint",
		timeframe: "Week 1–2",
		note: "Paid, fixed fee",
		description:
			"We embed in your business for two weeks. Data audit, workflow mapping, stakeholder interviews, feasibility scoring. You receive a comprehensive report with a go/no-go recommendation. If AI is not the right fit, you walk away with a valuable report and zero obligation.",
		badges: ["Data audit", "Workflow mapping", "Feasibility report", "Go/no-go recommendation"],
	},
	{
		step: 2,
		title: "Architecture & Blueprint",
		timeframe: "Week 2–3",
		description:
			"Based on the Clarity Sprint output, we design the full technical architecture — data pipelines, model selection, integration points, quality SLAs, and deployment strategy. Everything documented and agreed before a single line of production code is written.",
		badges: ["Technical architecture", "Model selection", "Quality SLAs", "Deployment plan"],
	},
	{
		step: 3,
		title: "Agile Build with Live Transparency",
		timeframe: "Week 3–10",
		description:
			"Weekly demos, shared dashboards, no black boxes. You see what we build as we build it. Every sprint has defined outputs and acceptance criteria. All code written by senior engineers — zero handoffs to juniors.",
		badges: ["Weekly demos", "Shared dashboards", "Sprint outputs", "Acceptance criteria"],
	},
	{
		step: 4,
		title: "Production Readiness Review",
		timeframe: "Week 10–11",
		description:
			"Load testing, security review, edge case hardening, documentation. We do not ship until quality SLAs are met — hallucination rate, accuracy, latency, all verified against targets agreed in the Blueprint phase.",
		badges: ["Load testing", "Security review", "Edge case hardening", "Documentation"],
	},
	{
		step: 5,
		title: "Launch & 90-Day AI Health Monitoring",
		timeframe: "Week 11 onwards",
		description:
			"Go-live support followed by 90 days of proactive monitoring — output accuracy, model drift, latency, cost per query. Monthly reports delivered to your team. Proactive fixes before your users notice degradation.",
		badges: ["Go-live support", "Drift monitoring", "Latency tracking", "Monthly reports"],
	},
	{
		step: 6,
		title: "ROI Measurement & Outcome Report",
		timeframe: "Day 90",
		description: "Final outcome report measuring actual business impact against projected ROI from the Clarity Sprint. Hard numbers, not narratives. This is how we hold ourselves accountable.",
		badges: ["ROI measurement", "Business impact", "Outcome report", "Hard metrics"],
	},
];

const stepVariants = {
	hidden: { opacity: 0, x: -30 },
	visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export const metadata = {
	title: "Process — LaunchNex",
	description: "Our 6-step process eliminates every failure point — from discovery to deployment to 90-day post-launch monitoring.",
	openGraph: {
		title: "Process — LaunchNex",
		description: "Our 6-step process eliminates every AI failure point.",
		url: "https://launchnex.dev/process",
	},
	alternates: {
		canonical: "https://launchnex.dev/process",
	},
};

export default function ProcessPage() {
	return (
		<>
			<div className={styles.page}>
				<section className={styles.hero}>
					<MotionDiv onView={false} className={styles.heroContent}>
						<SectionLabel>How we work</SectionLabel>
						<h1 className={styles.heroTitle}>The process nobody else offers.</h1>
						<p className={styles.heroBody}>Over 70% of AI pilots never reach production. Our 6-step process eliminates every failure point — from discovery to deployment to monitoring.</p>
					</MotionDiv>
				</section>

				<section className={styles.timeline}>
					<div className={styles.timelineInner}>
						{STEPS.map(step => (
							<MotionDiv key={step.step} variants={stepVariants} className={styles.step}>
								<div className={styles.indicator}>
									<span className={styles.dot} />
									{step.step < STEPS.length && <span className={styles.line} />}
								</div>

								<div className={styles.stepContent}>
									<div className={styles.meta}>
										<span className={styles.stepNum}>Step {step.step}</span>
										<span className={styles.timeframe}>{step.timeframe}</span>
										{step.note && <Badge variant="green">{step.note}</Badge>}
									</div>
									<h2 className={styles.stepTitle}>{step.title}</h2>
									<p className={styles.stepBody}>{step.description}</p>
									<div className={styles.badges}>
										{step.badges.map(b => (
											<Badge key={b}>{b}</Badge>
										))}
									</div>
								</div>
							</MotionDiv>
						))}
					</div>
				</section>

				<CtaBanner />
			</div>
		</>
	);
}
