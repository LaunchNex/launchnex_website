import MotionDiv from "@/components/ui/MotionDiv/MotionDiv";
import SectionLabel from "@/components/ui/SectionLabel/SectionLabel";
import Button from "@/components/ui/Button/Button";
import styles from "./WorkPage.module.css";

export const metadata = {
	title: "Work — LaunchNex",
	description: "Case studies and project outcomes from LaunchNex AI engineering engagements.",
	openGraph: {
		title: "Work — LaunchNex",
		description: "Case studies and project outcomes from LaunchNex.",
		url: "https://launchnex.dev/work",
	},
	alternates: {
		canonical: "https://launchnex.dev/work",
	},
};

export default function WorkPage() {
	return (
		<>
			<div className={styles.page}>
				<MotionDiv onView={false} className={styles.content}>
					<SectionLabel>Our Work</SectionLabel>
					<h1 className={styles.title}>Case studies coming soon.</h1>
					<p className={styles.body}>
						We're currently completing our first engagements and documenting outcomes. Real results, real metrics — no fluff. Check back soon, or get in touch to start your own.
					</p>
					<Button to="/contact" variant="primary">
						Start with a Clarity Sprint →
					</Button>
				</MotionDiv>
			</div>
		</>
	);
}
