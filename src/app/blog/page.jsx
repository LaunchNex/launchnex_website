import BlogPage from "@/components/pages/Blog/BlogPage";
import { getAllPosts } from "@/lib/blog";

export const metadata = {
	title: "Blog — LaunchNex",
	description: "Insights on AI engineering, feasibility assessment, and building production-grade AI systems.",
	openGraph: {
		title: "Blog — LaunchNex",
		description: "Insights on AI engineering and production AI.",
		url: "https://launchnex.dev/blog",
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Blog — LaunchNex",
		description: "Insights on AI engineering and production AI.",
	},
	alternates: {
		canonical: "https://launchnex.dev/blog",
	},
};

export default function Page() {
	const posts = getAllPosts();
	return <BlogPage posts={posts} />;
}
