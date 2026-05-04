import MotionDiv from "@/components/ui/MotionDiv/MotionDiv";
import ContactMethods from "@/components/sections/ContactMethods/ContactMethods";
import ContactSection from "@/components/sections/Contact/ContactSection";
import SectionLabel from "@/components/ui/SectionLabel/SectionLabel";
import styles from "./ContactPage.module.css";

export const metadata = {
	title: "Contact — LaunchNex",
	description: "Start with a Clarity Sprint. Tell us what you are trying to solve and we will get back within 24 hours.",
	openGraph: {
		title: "Contact — LaunchNex",
		description: "Start with a Clarity Sprint. We respond within 24 hours.",
		url: "https://launchnex.dev/contact",
	},
	alternates: {
		canonical: "https://launchnex.dev/contact",
	},
};

export default function ContactPage() {
	return (
		<>
			<div className={styles.page}>
				<section className={styles.hero}>
					<MotionDiv onView={false} className={styles.heroContent}>
						<SectionLabel>Get in touch</SectionLabel>
						<h1 className={styles.heroTitle}>Let's talk about your AI challenge.</h1>
					</MotionDiv>
				</section>

				<ContactMethods />
				<ContactSection />
			</div>
		</>
	);
}
