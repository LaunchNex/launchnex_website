import BlogPage from "@/components/pages/Blog/BlogPage";

export const metadata = {
	title: "Blog — LaunchNex",
	description: "Insights on AI engineering, feasibility assessment, and building production-grade AI systems.",
	openGraph: {
		title: "Blog — LaunchNex",
		description: "Insights on AI engineering and production AI.",
		url: "https://launchnex.dev/blog",
	},
	alternates: {
		canonical: "https://launchnex.dev/blog",
	},
};

export default function Page() {
	return (
		<>
			<BlogPage />
		</>
	);
}
