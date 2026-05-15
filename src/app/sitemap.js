import { getAllPosts } from "@/lib/blog";

const BASE_URL = "https://launchnex.dev";

export default function sitemap() {
	const posts = getAllPosts();

	const staticRoutes = [
		{ url: `${BASE_URL}`, lastModified: new Date(), changeFrequency: "monthly", priority: 1 },
		{ url: `${BASE_URL}/services`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
		{ url: `${BASE_URL}/process`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
		{ url: `${BASE_URL}/about`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
		{ url: `${BASE_URL}/blog`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
		{ url: `${BASE_URL}/contact`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.6 },
	];

	const postRoutes = posts.map((post) => ({
		url: `${BASE_URL}/blog/${post.slug}`,
		lastModified: new Date(post.date),
		changeFrequency: "monthly",
		priority: 0.7,
	}));

	return [...staticRoutes, ...postRoutes];
}
