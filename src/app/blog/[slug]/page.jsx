import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getAllPosts, getPostBySlug } from "@/lib/blog";
import styles from "./BlogPost.module.css";

const BASE_URL = "https://launchnex.dev";

export async function generateStaticParams() {
	const posts = getAllPosts();
	return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }) {
	const { slug } = await params;
	const post = getPostBySlug(slug);
	if (!post) return {};

	const ogImage = post.ogImage ? `${BASE_URL}${post.ogImage}` : `${BASE_URL}/og/default.png`;

	return {
		title: `${post.title} — LaunchNex Blog`,
		description: post.description,
		authors: [{ name: post.author }],
		openGraph: {
			title: post.title,
			description: post.description,
			url: `${BASE_URL}/blog/${post.slug}`,
			type: "article",
			publishedTime: post.date,
			authors: [post.author],
			tags: post.tags,
			images: [{ url: ogImage, width: 1200, height: 630, alt: post.title }],
		},
		twitter: {
			card: "summary_large_image",
			title: post.title,
			description: post.description,
			images: [ogImage],
		},
		alternates: {
			canonical: `${BASE_URL}/blog/${post.slug}`,
		},
	};
}

function formatDate(dateStr) {
	return new Date(dateStr).toLocaleDateString("en-US", {
		year: "numeric",
		month: "long",
		day: "numeric",
	});
}

export default async function BlogPostPage({ params }) {
	const { slug } = await params;
	const post = getPostBySlug(slug);
	if (!post) notFound();

	return (
		<div className={styles.page}>
			<header className={styles.header}>
				<div className={styles.headerInner}>
					<div className={styles.meta}>
						{post.tags.map((tag) => (
							<span key={tag} className={styles.tag}>{tag}</span>
						))}
						<span className={styles.readingTime}>{post.readingTime} min read</span>
					</div>
					<h1 className={styles.title}>{post.title}</h1>
					<p className={styles.description}>{post.description}</p>
					<div className={styles.byline}>
						<span className={styles.author}>{post.author}</span>
						<span className={styles.separator}>·</span>
						<time className={styles.date} dateTime={post.date}>{formatDate(post.date)}</time>
					</div>
				</div>
			</header>

			<article className={styles.article}>
				<div className={styles.prose}>
					<MDXRemote source={post.content} />
				</div>
			</article>
		</div>
	);
}
