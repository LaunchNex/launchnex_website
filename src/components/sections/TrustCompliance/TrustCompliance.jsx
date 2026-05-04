"use client";
import MotionDiv from "../../ui/MotionDiv/MotionDiv";
import { ShieldCheck, PersonStanding, KeyRound, ShieldHalf, LockKeyhole, ClipboardCheck, ArrowRight, Lock, FileCheck, Accessibility, Globe, Eye, Server } from "lucide-react";
import SectionLabel from "../../ui/SectionLabel/SectionLabel";
import Button from "../../ui/Button/Button";
import styles from "./TrustCompliance.module.css";

const GdprIcon = () => {
	const cx = 20,
		cy = 20,
		r = 17;
	return (
		<svg width="40" height="40" viewBox="0 0 40 40" fill="none">
			{Array.from({ length: 16 }).map((_, i) => {
				const angle = (i * (360 / 16) - 90) * (Math.PI / 180);
				const x = cx + r * Math.cos(angle);
				const y = cy + r * Math.sin(angle);
				return <circle key={i} cx={x} cy={y} r="1.5" fill="#1DBF73" />;
			})}
			<rect x="15.5" y="19" width="9" height="8" rx="1.5" stroke="#1DBF73" strokeWidth="1.5" fill="none" />
			<path d="M17.5 19v-2.5a2.5 2.5 0 015 0V19" stroke="#1DBF73" strokeWidth="1.5" strokeLinecap="round" fill="none" />
			<circle cx="20" cy="23" r="1.2" fill="#1DBF73" />
		</svg>
	);
};

const TRUST_BADGES = [
	{ icon: PersonStanding, title: "WCAG 2.1 AA", subtitle: "Accessibility Ready" },
	{ icon: null, gdpr: true, title: "GDPR", subtitle: "GDPR-Ready" },
	{ icon: ShieldCheck, title: "Privacy by Design", subtitle: "Data protection built-in" },
	{ icon: LockKeyhole, title: "Secure by Default", subtitle: "Security best practices" },
	{ icon: ClipboardCheck, title: "Audit-Ready", subtitle: "Documentation support" },
];

const COMPLIANCE_CARDS = [
	{
		icon: ShieldCheck,
		title: "Security",
		items: ["Secure architecture & code practices", "Regular security reviews & testing", "Role-based access & data protection", "Vulnerability monitoring & patching"],
	},
	{
		icon: Accessibility,
		title: "Accessibility",
		items: ["WCAG 2.1 AA informed development", "Keyboard navigability & screen reader support", "Color contrast & usability standards", "Accessibility testing & remediation"],
	},
	{
		icon: Lock,
		title: "Privacy & Compliance",
		items: ["GDPR-ready data handling", "Consent management patterns", "Data minimization & retention policies", "Privacy impact assessments"],
	},
	{
		icon: FileCheck,
		title: "Governance",
		items: ["Audit-ready documentation", "Change management & versioning", "Third-party risk management", "Compliance checklist in every release"],
	},
];

const fadeUp = {
	hidden: { opacity: 0, y: 20 },
	visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const cardVariants = {
	hidden: { opacity: 0, y: 30 },
	visible: i => ({
		opacity: 1,
		y: 0,
		transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" },
	}),
};

export default function TrustCompliance() {
	return (
		<section className={styles.section}>
			<div className={styles.inner}>
				<MotionDiv variants={fadeUp} className={styles.header}>
					<SectionLabel>
						<ShieldCheck size={14} style={{ marginRight: 6, verticalAlign: "-2px" }} />
						Trust & Compliance
					</SectionLabel>
					<h2 className={styles.title}>
						Built for production.{" "}
						<span className={styles.titleBreak}>
							Trusted for <span className={styles.accent}>compliance.</span>
						</span>
					</h2>
					<p className={styles.subtitle}>We embed security, accessibility, and privacy into every solution — so you can innovate with confidence.</p>
				</MotionDiv>

				<MotionDiv variants={fadeUp} className={styles.badges}>
					{TRUST_BADGES.map(({ icon: Icon, gdpr, title, subtitle }) => (
						<div key={title} className={styles.badge}>
							<span className={styles.badgeIcon}>{gdpr ? <GdprIcon /> : <Icon size={26} strokeWidth={1.5} />}</span>
							<div className={styles.badgeText}>
								<span className={styles.badgeTitle}>{title}</span>
								<span className={styles.badgeSubtitle}>{subtitle}</span>
							</div>
						</div>
					))}
				</MotionDiv>

				<MotionDiv variants={fadeUp} className={styles.subHeader}>
					<h3 className={styles.subTitle}>
						Compliance by design. <span className={styles.accent}>Not an afterthought.</span>
					</h3>
					<p className={styles.subSubtitle}>From architecture to deployment, we follow industry standards and best practices to deliver solutions that are secure, inclusive, and compliant.</p>
				</MotionDiv>

				<div className={styles.cards}>
					{COMPLIANCE_CARDS.map(({ icon: Icon, title, items }, i) => (
						<MotionDiv key={title} custom={i} variants={cardVariants} className={styles.card}>
							<div className={styles.cardHeader}>
								<span className={styles.cardIcon}>
									<Icon size={24} strokeWidth={1.5} />
								</span>
								<div className={styles.cardTitleBlock}>
									<h4 className={styles.cardTitle}>{title}</h4>
									<div className={styles.cardHeaderLine} />
								</div>
							</div>
							<ul className={styles.cardList}>
								{items.map(item => (
									<li key={item} className={styles.cardItem}>
										<span className={styles.checkIcon}>✓</span>
										{item}
									</li>
								))}
							</ul>
						</MotionDiv>
					))}
				</div>

				<MotionDiv variants={fadeUp} className={styles.cta}>
					<div className={styles.ctaInner}>
						<div className={styles.ctaLeft}>
							<span className={styles.ctaIconWrap}>
								<ShieldCheck size={20} strokeWidth={1.5} />
							</span>
							<p className={styles.ctaText}>Your compliance needs are unique. We tailor every solution to meet your accessibility, privacy, and regulatory requirements.</p>
						</div>
						<Button to="/contact" variant="primary">
							Discuss your requirements
						</Button>
					</div>
				</MotionDiv>
			</div>
		</section>
	);
}
