import AboutPage from "@/components/pages/About/AboutPage";

export const metadata = {
	title: "About — LaunchNex",
	description: "LaunchNex is a boutique AI engineering agency led by senior engineers with 12+ years of production experience.",
	openGraph: {
		title: "About — LaunchNex",
		description: "Not an agency. An AI engineering partner.",
		url: "https://launchnex.dev/about",
	},
	alternates: {
		canonical: "https://launchnex.dev/about",
	},
};

export default function Page() {
	return (
		<>
			<AboutPage />
		</>
	);
}
