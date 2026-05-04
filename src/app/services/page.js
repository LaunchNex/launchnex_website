import ServicesPage from "@/components/pages/Services/ServicesPage";

export const metadata = {
	title: "Services — LaunchNex",
	description: "AI development, application engineering, UI/UX design, and consulting — 15 services across 4 capability areas from LaunchNex.",
	openGraph: {
		title: "Services — LaunchNex",
		description: "Full-spectrum AI engineering. 15 services across 4 capability areas.",
		url: "https://launchnex.dev/services",
	},
	alternates: {
		canonical: "https://launchnex.dev/services",
	},
};

export default function Page() {
	return <ServicesPage />;
}
