"use client";
import MotionDiv from "../../ui/MotionDiv/MotionDiv";
import { ShieldCheck, Zap, Target, Users, Lock } from "lucide-react";
import SectionLabel from "../../ui/SectionLabel/SectionLabel";
import Button from "../../ui/Button/Button";
import { ArrowRight, CalendarCheck } from "lucide-react";
import styles from "./WhyUs.module.css";

const CARDS = [
	{
		icon: ShieldCheck,
		title: "Outcome Ownership",
		description: "We're accountable for outcomes, not just deliverables. Your success is our metric.",
	},
	{
		icon: Users,
		title: "Senior-Only Delivery",
		description: "No junior handoffs. Every project is delivered by experienced AI engineers.",
	},
	{
		icon: Target,
		title: "Business Impact First",
		description: "We focus on impact, not features—building AI that moves your business forward.",
	},
	{
		icon: Lock,
		title: "Secure & Compliant",
		description: "Security, privacy, and compliance are built in from day one—not added later.",
	},
	{
		icon: Zap,
		title: "Fast. Transparent. Reliable.",
		description: "Clear communication, visible progress, and a proven process that keeps projects on track.",
	},
];

const LOGOS = [
	{
		name: "OpenAI",
		svg: (
			<svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
				<path d="M22.28 9.84a5.83 5.83 0 00-.5-4.79 5.9 5.9 0 00-6.35-2.83A5.83 5.83 0 0011.05 0a5.9 5.9 0 00-5.62 4.1 5.83 5.83 0 00-3.9 2.83 5.9 5.9 0 00.73 6.92 5.83 5.83 0 00.5 4.79 5.9 5.9 0 006.35 2.83A5.83 5.83 0 0012.95 24a5.9 5.9 0 005.63-4.1 5.83 5.83 0 003.9-2.83 5.9 5.9 0 00-.2-7.23zM12.95 22.5a4.38 4.38 0 01-2.81-1.02l.14-.08 4.67-2.7a.77.77 0 00.39-.67v-6.6l1.97 1.14a.07.07 0 01.04.06v5.46a4.4 4.4 0 01-4.4 4.41zm-9.43-4.04a4.38 4.38 0 01-.52-2.95l.14.08 4.67 2.7a.77.77 0 00.77 0l5.7-3.3v2.28a.07.07 0 01-.03.06L9.6 20.1a4.4 4.4 0 01-6.08-1.64zm-1.23-10.2a4.38 4.38 0 012.28-1.93v5.56a.77.77 0 00.39.67l5.7 3.29-1.97 1.14a.07.07 0 01-.07 0L4.3 14.6a4.4 4.4 0 01-.01-6.34zm16.2 3.78l-5.7-3.3 1.97-1.13a.07.07 0 01.07 0l4.32 2.49a4.4 4.4 0 01-.68 7.93V12.7a.77.77 0 00-.39-.67zm1.96-2.97l-.14-.08-4.66-2.72a.77.77 0 00-.78 0l-5.7 3.3V7.29a.07.07 0 01.03-.06l4.32-2.49a4.4 4.4 0 016.93 3.33zm-12.33 4.05L6.15 12l1.97-1.14a.07.07 0 01.07 0v2.28l-1.97 1.14a.07.07 0 01-.04-.06zm1.04.6l1.97 1.14v2.28l-1.97-1.14V13.72zm2.47 1.87l1.97-1.14 1.97 1.14-1.97 1.14-1.97-1.14zm3.44-1.27l-1.97-1.14V11.9l1.97 1.14v2.28zm-2.97-5.14L10.13 12l-1.97-1.14v-2.28l1.97 1.14z" />
			</svg>
		),
	},
	{
		name: "AWS",
		svg: (
			<svg viewBox="0 0 24 24" fill="currentColor" width="28" height="28">
				<path d="M6.763 10.036c0 .296.032.535.088.71.064.176.144.368.256.576.04.064.056.128.056.184 0 .08-.048.16-.152.24l-.504.336a.383.383 0 01-.208.072c-.08 0-.16-.04-.24-.112a2.47 2.47 0 01-.288-.376 6.18 6.18 0 01-.248-.472c-.624.736-1.408 1.104-2.352 1.104-.672 0-1.208-.192-1.6-.576-.392-.384-.592-.896-.592-1.536 0-.68.24-1.232.728-1.648.488-.416 1.136-.624 1.96-.624.272 0 .552.024.848.064.296.04.6.104.92.176v-.584c0-.608-.128-1.032-.376-1.28-.256-.248-.688-.368-1.304-.368-.28 0-.568.032-.864.104-.296.072-.584.16-.864.272a2.297 2.297 0 01-.28.104.488.488 0 01-.128.024c-.112 0-.168-.08-.168-.248v-.392c0-.128.016-.224.056-.28a.597.597 0 01.224-.168c.28-.144.616-.264 1.008-.36A4.84 4.84 0 014.081 6c.96 0 1.664.216 2.12.656.448.44.68 1.104.68 2v2.38zm-3.24 1.212c.264 0 .536-.048.824-.144.288-.096.544-.272.76-.512.128-.152.224-.32.272-.512.048-.192.08-.424.08-.696v-.336a6.66 6.66 0 00-.736-.136 6.02 6.02 0 00-.752-.048c-.536 0-.928.104-1.192.32-.264.216-.392.52-.392.92 0 .376.096.656.296.848.192.2.472.296.84.296zm6.44.88c-.144 0-.24-.024-.304-.08-.064-.048-.12-.16-.168-.312L7.586 6.48a1.4 1.4 0 01-.072-.32c0-.128.064-.2.192-.2h.784c.152 0 .256.024.312.08.064.048.112.16.16.312l1.336 5.268 1.24-5.268c.04-.16.088-.264.152-.312a.513.513 0 01.32-.08h.64c.152 0 .256.024.32.08.064.048.12.16.152.312l1.256 5.332 1.376-5.332c.048-.16.104-.264.16-.312a.51.51 0 01.312-.08h.744c.128 0 .2.064.2.2 0 .04-.008.08-.016.128a1.137 1.137 0 01-.056.2l-1.924 6.156c-.048.16-.104.264-.168.312a.495.495 0 01-.304.08h-.688c-.152 0-.256-.024-.32-.08-.064-.056-.12-.16-.152-.32l-1.232-5.148-1.224 5.14c-.04.16-.088.264-.152.32a.512.512 0 01-.32.08h-.688zm10.24.168c-.416 0-.832-.048-1.232-.144-.4-.096-.712-.2-.92-.32-.128-.072-.216-.152-.248-.224a.56.56 0 01-.048-.224v-.408c0-.168.064-.248.184-.248.048 0 .096.008.144.024.048.016.12.048.2.08.272.12.568.216.888.28.328.064.648.096.976.096.52 0 .92-.088 1.2-.264a.86.86 0 00.424-.768.778.778 0 00-.212-.556c-.144-.152-.416-.288-.808-.416l-1.16-.36c-.584-.184-1.016-.456-1.288-.816a1.953 1.953 0 01-.408-1.192c0-.344.072-.648.216-.912.144-.264.336-.496.584-.688.248-.2.528-.344.864-.448.336-.104.688-.152 1.056-.152.184 0 .376.008.56.04.192.024.368.064.544.104.168.048.328.096.48.152.152.056.272.112.36.168.12.072.208.152.256.24.048.08.072.184.072.312v.376c0 .168-.064.256-.184.256a.84.84 0 01-.304-.096 3.658 3.658 0 00-1.528-.312c-.472 0-.84.072-1.096.224-.256.152-.384.384-.384.704 0 .216.08.4.24.552.16.152.456.304.88.44l1.136.36c.576.184.992.44 1.24.768.248.328.368.704.368 1.12 0 .352-.072.672-.208.952-.144.28-.336.528-.592.728-.256.208-.56.36-.92.464-.376.12-.768.176-1.192.176z" />
			</svg>
		),
	},
	{
		name: "Google Cloud",
		svg: (
			<svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
				<path d="M12.19 2.38a9.344 9.344 0 00-9.234 6.893c.053-.02-.055.013 0 0-3.875 2.551-3.922 8.11-.247 10.941l.006.005a6.016 6.016 0 003.585 1.186h5.64l.001-.001h4.069a5.96 5.96 0 003.8-1.32l.003-.002.001-.001a6.16 6.16 0 001.894-6.494l-.004-.012-.004-.013A9.328 9.328 0 0012.19 2.38zm3.267 15.657h-9.3l-.002-.001a3.658 3.658 0 01-3.08-5.625l.005-.007.004-.006a3.65 3.65 0 013.072-1.787h.002a3.658 3.658 0 013.563 2.876l1.912-.479A5.525 5.525 0 009.158 9.65a5.522 5.522 0 00-2.277.487 7.47 7.47 0 016.51-5.378 7.44 7.44 0 017.146 5.208 3.835 3.835 0 00-1.63-.362 3.856 3.856 0 00-3.855 3.856h1.867a1.99 1.99 0 011.988-1.99 1.99 1.99 0 011.866 1.308l.004.012a4.28 4.28 0 01-1.319 4.264z" />
			</svg>
		),
	},
	{
		name: "Microsoft Azure",
		svg: (
			<svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
				<path d="M13.05 4.24L6.56 19.03l3.5.01 1.32-3.46h4.77l1.03 3.47 3.26-.01L15.1 4.24zm-.87 4.16l1.79 5.27h-3.36z" />
			</svg>
		),
	},
	{ name: "Anthropic", svg: <span style={{ fontWeight: 700, fontSize: 13, letterSpacing: "0.02em" }}>ANTHROPIC</span> },
	{
		name: "Pinecone",
		svg: (
			<svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
				<circle cx="12" cy="4" r="2" />
				<circle cx="7" cy="9" r="1.5" />
				<circle cx="17" cy="9" r="1.5" />
				<circle cx="5" cy="14" r="1.2" />
				<circle cx="12" cy="13" r="1.5" />
				<circle cx="19" cy="14" r="1.2" />
				<circle cx="8" cy="19" r="1" />
				<circle cx="16" cy="19" r="1" />
				<circle cx="12" cy="21" r="1" />
			</svg>
		),
	},
];

const fadeUp = {
	hidden: { opacity: 0, y: 20 },
	visible: (i = 0) => ({ opacity: 1, y: 0, transition: { delay: i * 0.08, duration: 0.5, ease: "easeOut" } }),
};

export default function WhyUs() {
	return (
		<section className={styles.section}>
			<div className={styles.inner}>
				{/* Header */}
				<MotionDiv variants={fadeUp} className={styles.header}>
					<SectionLabel>How we operate</SectionLabel>
					<h2 className={styles.heading}>
						AI engineering partner.
						<br />
						<span className={styles.accent}>Not just a vendor.</span>
					</h2>
					<p className={styles.subtitle}>
						We take ownership, reduce risk, and deliver AI systems
						<br />
						that create real business impact.
					</p>
				</MotionDiv>

				{/* Feature Cards */}
				<div className={styles.cards}>
					{CARDS.map(({ icon: Icon, title, description }, i) => (
						<MotionDiv key={title} custom={i} variants={fadeUp} className={styles.card}>
							<div className={styles.cardIconWrap}>
								<Icon size={24} strokeWidth={1.5} />
							</div>
							<div className={styles.cardTitleBlock}>
								<h3 className={styles.cardTitle}>{title}</h3>
								<div className={styles.cardLine} />
							</div>
							<p className={styles.cardBody}>{description}</p>
						</MotionDiv>
					))}
				</div>

				{/* Trusted By 
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className={styles.trusted}>
          <p className={styles.trustedLabel}>TRUSTED BY INNOVATIVE COMPANIES</p>
          <div className={styles.logos}>
            {LOGOS.map(({ name, svg }) => (
              <div key={name} className={styles.logo}>
                {svg}
                <span>{name}</span>
              </div>
            ))}
          </div>
        </motion.div> */}

				{/* CTA */}
				<MotionDiv variants={fadeUp} className={styles.cta}>
					<div className={styles.ctaLeft}>
						<span className={styles.ctaIconWrap}>
							<CalendarCheck size={22} strokeWidth={1.5} />
						</span>
						<div>
							<p className={styles.ctaHeading}>Let&apos;s build AI that creates real value.</p>
							<p className={styles.ctaSubtext}>Book a strategy call and let&apos;s explore what&apos;s possible.</p>
						</div>
					</div>
					<div className={styles.ctaButtons}>
						<Button to="/contact" variant="primary">
							Validate your AI idea
						</Button>
					</div>
				</MotionDiv>
			</div>
		</section>
	);
}
