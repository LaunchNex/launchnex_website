import Hero from "@/components/sections/Hero/Hero";
import Problem from "@/components/sections/Problem/Problem";
import Services from "@/components/sections/Services/Services";
import TrustCompliance from "@/components/sections/TrustCompliance/TrustCompliance";
import WhyUs from "@/components/sections/WhyUs/WhyUs";
import CtaBanner from "@/components/sections/CtaBanner/CtaBanner";

export const metadata = {
	title: "LaunchNex — AI built for production. Not presentations.",
	description: "LaunchNex is a boutique AI engineering agency. We assess AI feasibility before building, guarantee senior delivery, and monitor your AI for 90 days post-launch.",
	openGraph: {
		title: "LaunchNex — AI built for production. Not presentations.",
		description: "LaunchNex is a boutique AI engineering agency. We assess AI feasibility before building, guarantee senior delivery, and monitor your AI for 90 days post-launch.",
		url: "https://launchnex.dev",
	},
	alternates: {
		canonical: "https://launchnex.dev",
	},
};

export default function Home() {
	return (
		<>
			<Hero />
			<Problem />
			<Services />
			<WhyUs />
			<TrustCompliance />
			<CtaBanner />
		</>
	);
}
