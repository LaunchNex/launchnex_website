"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import MotionDiv from "@/components/ui/MotionDiv/MotionDiv";
import SectionLabel from "@/components/ui/SectionLabel/SectionLabel";
import Badge from "@/components/ui/Badge/Badge";
import styles from "./BlogPage.module.css";

const cardVariants = {
	hidden: { opacity: 0, y: 30 },
	visible: i => ({
		opacity: 1,
		y: 0,
		transition: { delay: i * 0.08, duration: 0.5, ease: "easeOut" },
	}),
};

function formatDate(dateStr) {
	return new Date(dateStr).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
}

export default function BlogPage({ posts = [] }) {
	return (
		<div className={styles.page}>
			<section className={styles.hero}>
				<MotionDiv onView={false} className={styles.heroContent}>
					<SectionLabel>Blog</SectionLabel>
					<h1 className={styles.heroTitle}>Thinking about AI — honestly.</h1>
					<p className={styles.heroBody}>Practical insights on AI engineering, feasibility, and what it actually takes to ship production-grade AI systems.</p>
				</MotionDiv>
			</section>

			<section className={styles.grid}>
				<div className={styles.gridInner}>
					{posts.map((post, i) => (
						<motion.article key={post.slug} custom={i} variants={cardVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className={styles.card}>
							<Link href={`/blog/${post.slug}`} className={styles.cardLink}>
								<div className={styles.cardImage}>
									{post.ogImage ? (
										<Image src={post.ogImage} alt={post.title} fill style={{ objectFit: "cover" }} />
									) : (
										<div className={styles.cardImagePlaceholder} />
									)}
								</div>
								<div className={styles.cardBody}>
									<div className={styles.cardTop}>
										{post.tags.slice(0, 1).map(tag => (
											<Badge key={tag} variant="muted">{tag}</Badge>
										))}
										<span className={styles.readingTime}>{post.readingTime} min read</span>
									</div>
									<h3 className={styles.cardTitle}>{post.title}</h3>
									<div className={styles.cardMeta}>
										<span className={styles.cardDate}>{formatDate(post.date)}</span>
										<span className={styles.cardAuthor}>{post.author}</span>
									</div>
								</div>
							</Link>
						</motion.article>
					))}
				</div>
			</section>
		</div>
	);
}
