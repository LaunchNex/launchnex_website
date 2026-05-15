import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getAllPosts, getPostBySlug } from "@/lib/blog";
import styles from "./BlogPost.module.css";
import mdxComponents from "@/components/mdx";
import remarkGfm from "remark-gfm";

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

function renderTitle(title, accentClass) {
	return title.split(/(\d+%)/).map((part, i) =>
		/\d+%/.test(part)
			? <em key={i} className={accentClass}>{part}</em>
			: part
	);
}

export default async function BlogPostPage({ params }) {
	const { slug } = await params;
	const post = getPostBySlug(slug);
	if (!post) notFound();

	const parenIdx = post.title.indexOf(" (");
	const mainTitle = parenIdx > -1 ? post.title.slice(0, parenIdx) : post.title;
	const subtitle = parenIdx > -1 ? post.title.slice(parenIdx + 2, -1) : null;

	return (
		<div className={styles.page}>
			<header className={styles.header}>
				{post.ogImage && (
					<div
						className={styles.headerBg}
						style={{ backgroundImage: `url(${post.ogImage})` }}
					/>
				)}
				<div className={styles.headerOverlay} />
				<div className={styles.headerInner}>
					<div className={styles.meta}>
						<time className={styles.date} dateTime={post.date}>{formatDate(post.date)}</time>
						<span className={styles.separator}>·</span>
						<span className={styles.readingTime}>{post.readingTime} min read</span>
					</div>
					<h1 className={styles.title}>{renderTitle(mainTitle, styles.titleAccent)}</h1>
					{subtitle && <p className={styles.subtitle}>{subtitle}</p>}
				</div>
			</header>

			<article className={styles.article}>
				<div className={styles.prose}>
					<MDXRemote
					source={post.content}
					components={mdxComponents}
					options={{ mdxOptions: { remarkPlugins: [remarkGfm] } }}
				/>
				</div>
			</article>
		</div>
	);
}
