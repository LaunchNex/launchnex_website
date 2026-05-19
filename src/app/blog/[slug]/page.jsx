import Link from "next/link";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getAllPosts, getPostBySlug } from "@/lib/blog";
import styles from "./BlogPost.module.css";
import mdxComponents from "@/components/mdx";
import remarkGfm from "remark-gfm";
import TableOfContents from "@/components/blog/TableOfContents";
import ShareButtons from "@/components/blog/ShareButtons";
import EmailSignup from "@/components/blog/EmailSignup";

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

function slugify(text) {
	return String(text)
		.toLowerCase()
		.replace(/[^a-z0-9]+/g, "-")
		.replace(/(^-|-$)/g, "");
}

function extractHeadings(content) {
	const headingRegex = /^(#{2,3})\s+(.+)$/gm;
	const headings = [];
	let match;
	while ((match = headingRegex.exec(content)) !== null) {
		const level = match[1].length;
		const text = match[2].trim().replace(/\*\*/g, "").replace(/\*/g, "");
		headings.push({ level, text, id: slugify(text) });
	}
	return headings;
}

export default async function BlogPostPage({ params }) {
	const { slug } = await params;
	const post = getPostBySlug(slug);
	if (!post) notFound();

	const allPosts = getAllPosts();
	const relatedPosts = allPosts.filter((p) => p.slug !== slug).slice(0, 3);
	const headings = extractHeadings(post.content);
	const firstTag = post.tags?.[0] || null;
	const postUrl = `${BASE_URL}/blog/${slug}`;

	const parenIdx = post.title.indexOf(" (");
	const mainTitle = parenIdx > -1 ? post.title.slice(0, parenIdx) : post.title;

	return (
		<div className={styles.page}>
			<header className={styles.header}>
				<div className={styles.headerInner}>
					<Link href="/blog" className={styles.backLink}>
						<span className={styles.backArrow}>←</span> Back to Blog
					</Link>
					<div className={styles.meta}>
						{firstTag && (
							<span className={styles.tag}>{firstTag.toUpperCase()}</span>
						)}
						<span className={styles.metaDot}>·</span>
						<time className={styles.date} dateTime={post.date}>{formatDate(post.date)}</time>
						<span className={styles.metaDot}>·</span>
						<span className={styles.readingTime}>{post.readingTime} MIN READ</span>
					</div>
					<h1 className={styles.title}>{renderTitle(mainTitle, styles.titleAccent)}</h1>
					{post.description && (
						<p className={styles.description}>{post.description}</p>
					)}
					{post.author && (
						<div className={styles.author}>
							<div className={styles.authorAvatar}>
								{post.author.charAt(0)}
							</div>
							<div className={styles.authorInfo}>
								<span className={styles.authorLabel}>Written by {post.author}</span>
								{post.authorRole && <span className={styles.authorRole}>{post.authorRole}</span>}
							</div>
						</div>
					)}
					{post.ogImage && (
						<div className={styles.heroImageWrap}>
							<img
								src={post.ogImage}
								alt={post.title}
								className={styles.heroImage}
							/>
						</div>
					)}
				</div>
			</header>

			<div className={styles.body}>
				<article className={styles.article}>
					<div className={styles.prose}>
						<MDXRemote
							source={post.content}
							components={mdxComponents}
							options={{ mdxOptions: { remarkPlugins: [remarkGfm] } }}
						/>
					</div>
				</article>

				<aside className={styles.sidebar}>
					<div className={styles.sidebarSticky}>
						{headings.length > 0 && (
							<div className={styles.sidebarBlock}>
								<TableOfContents headings={headings} />
							</div>
						)}

						<div className={styles.sidebarBlock}>
							<EmailSignup />
						</div>

						{relatedPosts.length > 0 && (
							<div className={styles.sidebarBlock}>
								<p className={styles.sidebarLabel}>RELATED ARTICLES</p>
								<div className={styles.relatedList}>
									{relatedPosts.map((rp) => (
										<Link key={rp.slug} href={`/blog/${rp.slug}`} className={styles.relatedCard}>
											{rp.ogImage && (
												<div
													className={styles.relatedThumb}
													style={{ backgroundImage: `url(${rp.ogImage})` }}
												/>
											)}
											<div className={styles.relatedInfo}>
												<p className={styles.relatedTitle}>{rp.title}</p>
												<time className={styles.relatedDate}>{formatDate(rp.date)}</time>
											</div>
										</Link>
									))}
								</div>
							</div>
						)}

						<div className={styles.sidebarBlock}>
							<ShareButtons title={post.title} url={postUrl} />
						</div>
					</div>
				</aside>
			</div>
		</div>
	);
}
