import Link from "next/link";
import Logo from "../../ui/Logo/Logo";
import styles from "./Footer.module.css";
import {
	Mail, Globe,
	Compass, MessageCircle, Shield, ChevronRight, Clock,
} from "lucide-react";

function LinkedinIcon({ size = 15 }) {
	return (
		<svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
			<path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
		</svg>
	);
}

function TwitterIcon({ size = 15 }) {
	return (
		<svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
			<path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L1.254 2.25H8.08l4.253 5.622 5.91-5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
		</svg>
	);
}

function GithubIcon({ size = 15 }) {
	return (
		<svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
			<path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0 1 12 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
		</svg>
	);
}

const NAV_LINKS = [
	{ to: "/services", label: "Services" },
	{ to: "/process", label: "Process" },
	{ to: "/work", label: "Work" },
	{ to: "/about", label: "About" },
	{ to: "/blog", label: "Blog" },
];

export default function Footer() {
	return (
		<footer className={styles.footer}>
			<div className={styles.inner}>
				<div className={styles.grid}>

					{/* Col 1 — Brand */}
					<div className={styles.brand}>
						<Link href="/" className={styles.logoWrap} aria-label="LaunchNex — Go to homepage">
							<Logo size={28} />
						</Link>
						<p className={styles.tagline}>AI built for production.<br />Not presentations.</p>
						<p className={styles.subTagline}>We assess before we build.</p>
						<Link href="/contact" className={styles.ctaBtn}>
							Book a Discovery Call <span>→</span>
						</Link>
						<div className={styles.contactInfo}>
							<a href="mailto:contact@launchnex.dev" className={styles.contactRow}>
								<Mail size={14} />
								<span>contact@launchnex.dev</span>
							</a>
							<a href="https://launchnex.dev" className={styles.contactRow} target="_blank" rel="noopener noreferrer">
								<Globe size={14} />
								<span>launchnex.dev</span>
							</a>
						</div>
						<div className={styles.social}>
							<span className={styles.socialLabel}>Follow us</span>
							<div className={styles.socialIcons}>
								<a href="https://www.linkedin.com/company/launchnex/" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="LinkedIn">
									<LinkedinIcon size={15} />
								</a>
								<a href="https://github.com/launchnex" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="GitHub">
									<GithubIcon size={15} />
								</a>
								<a href="https://x.com/launchnex" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="X">
									<TwitterIcon size={15} />
								</a>
							</div>
						</div>
					</div>

					{/* Col 2 — Explore */}
					<div className={styles.column}>
						<h3 className={styles.columnTitle}>
							<Compass size={14} className={styles.colIcon} />
							Explore
						</h3>
						{NAV_LINKS.map(({ to, label }) => (
							<Link key={to} href={to} className={styles.navLink}>
								<ChevronRight size={13} className={styles.chevron} />
								{label}
							</Link>
						))}
					</div>
					{/* Col 4 — Legal */}
					<div className={styles.column}>
						<h3 className={styles.columnTitle}>
							<Shield size={14} className={styles.colIcon} />
							Legal
						</h3>
						<Link href="/privacy" className={styles.navLink}>
							<ChevronRight size={13} className={styles.chevron} />
							Privacy Policy
						</Link>
						<Link href="/terms" className={styles.navLink}>
							<ChevronRight size={13} className={styles.chevron} />
							Terms of Service
						</Link>
					</div>
					{/* Col 3 — Contact */}
					<div className={styles.column}>
						<div className={styles.replyNote}>
							<div className={styles.replyHeader}>
								<Clock size={14} className={styles.colIcon} />
								<p className={styles.replyTitle}>We typically reply within 24 hours.</p>
							</div>
							<p className={styles.replySub}>Let&apos;s build something impactful.</p>
						</div>
					</div>

				</div>

				<div className={styles.bottom}>
					<p> 2025 LaunchNex • All rights reserved.</p>
					<p className={styles.bottomRight}>Building reliable AI systems for real-world impact.</p>
				</div>
			</div>
		</footer>
	);
}
