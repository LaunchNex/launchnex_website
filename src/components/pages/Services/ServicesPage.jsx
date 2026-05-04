"use client";

import MotionDiv from "@/components/ui/MotionDiv/MotionDiv";
import SectionLabel from "@/components/ui/SectionLabel/SectionLabel";
import Badge from "@/components/ui/Badge/Badge";
import CtaBanner from "@/components/sections/CtaBanner/CtaBanner";
import styles from "./ServicesPage.module.css";

const CATALOGUE = [
	{
		id: "ai",
		categoryLabel: "AI & Generative AI",
		services: [
			{
				title: "Generative AI Development",
				hook: "Build intelligent systems that create, summarize, and reason.",
				description:
					"We design and develop custom Generative AI solutions powered by the latest LLMs — including GPT-4, Claude, and Llama. From content generation pipelines to AI-assisted workflows, we help businesses harness the power of GenAI to automate tasks, enhance productivity, and create entirely new user experiences.",
				capabilities: ["Custom LLM-powered applications", "Content generation & summarization pipelines", "AI-assisted internal tools & workflows"],
			},
			{
				title: "AI Agent Development",
				hook: "Autonomous agents that think, decide, and act on your behalf.",
				description:
					"We build goal-driven AI agents that can independently perform multi-step tasks — browsing the web, processing documents, calling APIs, and making decisions — with minimal human intervention. Ideal for automating complex business processes end-to-end.",
				capabilities: ["Customer service & support agents", "Sales lead qualification agents", "Research & data collection agents", "Internal IT/HR helpdesk agents"],
			},
			{
				title: "AI Chatbot Development",
				hook: "Conversational AI that actually understands your business.",
				description:
					"Beyond basic FAQ bots, we build context-aware chatbots that understand user intent, maintain conversation history, and integrate with your existing systems. Deploy on your website, mobile app, or enterprise platform to deliver 24/7 intelligent support.",
				capabilities: ["Multi-turn conversational interfaces", "Website & mobile app integration", "CRM & helpdesk system connectivity"],
			},
			{
				title: "RAG System Development",
				hook: "Let your AI answer questions from your own data.",
				description:
					"Retrieval-Augmented Generation (RAG) enables AI to provide accurate, source-cited answers from your private documents, databases, and knowledge bases. We build production-grade RAG pipelines that make your internal knowledge instantly queryable and actionable.",
				capabilities: ["Document ingestion & embedding pipelines", "Semantic search over private data", "Source-cited, hallucination-reduced responses"],
			},
			{
				title: "AI Workflow Automation",
				hook: "Replace repetitive processes with intelligent automation.",
				description:
					"We map your existing business workflows and redesign them with AI at the core — triggering actions, routing decisions, processing inputs, and generating outputs automatically. From invoice processing to report generation, we eliminate the manual middle layer.",
				capabilities: ["End-to-end process automation", "AI-triggered event pipelines", "Integration with existing business tools"],
			},
			{
				title: "Prompt Engineering",
				hook: "The right words unlock the right results.",
				description:
					"Getting consistent, high-quality output from LLMs requires precision. We design, test, and optimize prompt systems for production use — including system prompts, few-shot examples, chain-of-thought reasoning, and evaluation frameworks that ensure reliability at scale.",
				capabilities: ["Production prompt design & optimization", "AI output evaluation frameworks", "Cost & token efficiency tuning"],
			},
			{
				title: "LangChain / LlamaIndex Development",
				hook: "Expert framework development for complex AI pipelines.",
				description:
					"We build sophisticated AI applications using leading frameworks like LangChain and LlamaIndex — enabling chained reasoning, tool use, memory management, and multi-document retrieval. Combined with vector databases like Pinecone and Qdrant, we deliver scalable, production-ready AI infrastructure.",
				capabilities: ["LangChain agent & chain development", "LlamaIndex data retrieval pipelines", "Vector database setup & optimization (Pinecone, Qdrant)"],
			},
		],
	},
	{
		id: "development",
		categoryLabel: "Application & Product Development",
		services: [
			{
				title: "Web Development",
				hook: "Fast, modern websites built to perform and convert.",
				description:
					"We develop responsive, high-performance websites using modern web technologies — with AI features baked in from the start. Whether you need a marketing site, a customer portal, or a complex web platform, we deliver clean code, great UX, and measurable results.",
				capabilities: ["React / Next.js web applications", "AI-integrated landing pages & portals", "SEO-optimized, fast-loading architecture"],
			},
			{
				title: "Frontend Development",
				hook: "Pixel-perfect interfaces with 12+ years of React expertise.",
				description:
					"Our frontend development is led by a seasoned React specialist with 12+ years of experience building enterprise-grade UIs. We deliver component-driven, accessible, and performant frontends that scale — from simple dashboards to complex data-heavy applications.",
				capabilities: ["React & Next.js development", "Component library & design system setup", "Performance optimization & code quality audits"],
			},
			{
				title: "Mobile App Development",
				hook: "Cross-platform mobile apps with AI at the core.",
				description:
					"We build iOS and Android applications using React Native — delivering a single codebase with native performance. From MVP to full product, we integrate AI features like voice interfaces, intelligent search, and personalized recommendations directly into your mobile experience.",
				capabilities: ["React Native cross-platform development", "AI-powered mobile features", "App Store & Play Store deployment"],
			},
			{
				title: "AI-Enabled Application Development",
				hook: "Traditional apps, supercharged with intelligence.",
				description:
					"We take your existing or new application concept and embed AI capabilities throughout — smart search, predictive inputs, automated summaries, anomaly detection, and more. The result is a product that feels genuinely intelligent, not just feature-packed.",
				capabilities: ["AI feature integration into existing apps", "Smart search & recommendation engines", "Intelligent dashboards & reporting"],
			},
		],
	},
	{
		id: "design",
		categoryLabel: "Design & Experience",
		services: [
			{
				title: "UI/UX Design",
				hook: "Interfaces that users love and businesses trust.",
				description:
					"Great products start with great design. We create intuitive, visually polished interfaces grounded in user research and modern design principles. From wireframes to high-fidelity prototypes, we ensure every screen feels effortless — and every interaction drives toward your business goal.",
				capabilities: ["User research & journey mapping", "Wireframing & interactive prototypes", "Design systems & component libraries"],
			},
		],
	},
	{
		id: "consulting",
		categoryLabel: "Consulting & Support",
		services: [
			{
				title: "AI Consulting & Strategy",
				hook: "Clarity before code — build the right thing.",
				description:
					"Before investing in AI development, you need a clear roadmap. We assess your business processes, identify the highest-impact AI opportunities, evaluate your data readiness, and deliver a practical implementation strategy — so you move fast without wasting budget.",
				capabilities: ["AI feasibility assessments", "Use case identification & prioritization", "Technology stack recommendations", "ROI & cost-benefit analysis"],
			},
			{
				title: "QA & Testing",
				hook: "Ship with confidence. Every time.",
				description:
					"Quality is non-negotiable. With a background in enterprise QA and AI evaluation, we bring rigorous testing practices to every project — from functional and regression testing to AI output validation and performance benchmarking. We don't just test for bugs; we test for reliability.",
				capabilities: ["Manual & automated testing", "AI output quality evaluation", "Performance & load testing", "Cross-browser & cross-device validation"],
			},
			{
				title: "Maintenance & Support",
				hook: "Your product, looked after like it's our own.",
				description:
					"Launching is just the beginning. We offer ongoing maintenance, monitoring, and support packages to keep your applications running smoothly — handling bug fixes, dependency updates, performance improvements, and feature enhancements on a predictable schedule.",
				capabilities: ["Bug fixes & security patches", "Performance monitoring & optimization", "Feature updates & enhancements", "30/60/90-day post-launch support plans"],
			},
		],
	},
];

const fadeUp = {
	hidden: { opacity: 0, y: 30 },
	visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const cardVariants = {
	hidden: { opacity: 0, y: 30 },
	visible: i => ({
		opacity: 1,
		y: 0,
		transition: { delay: i * 0.08, duration: 0.5, ease: "easeOut" },
	}),
};

export default function ServicesPage() {
	return (
		<>
			<div className={styles.page}>
				{/* Page hero */}
				<section className={styles.hero}>
					<MotionDiv onView={false} variants={fadeUp} className={styles.heroContent}>
						<SectionLabel>Our Services</SectionLabel>
						<h1 className={styles.heroTitle}>Full-spectrum AI engineering.</h1>
						<p className={styles.heroBody}>
							From strategy to design to development to long-term support — 15 services across 4 capability areas, delivered by senior engineers with 12+ years of experience. No juniors. No handoffs.
							No shortcuts.
						</p>
					</MotionDiv>
				</section>

				{/* Category sections */}
				{CATALOGUE.map((category, catIdx) => (
					<section key={category.id} id={category.id} className={styles.categorySection}>
						<div className={styles.categoryInner}>
							<MotionDiv variants={fadeUp} className={styles.categoryHeader}>
								<Badge variant="default">{`0${catIdx + 1}`}</Badge>
								<h2 className={styles.categoryTitle}>{category.categoryLabel}</h2>
							</MotionDiv>

							<div className={styles.serviceGrid}>
								{category.services.map((service, svcIdx) => (
									<MotionDiv key={service.title} custom={svcIdx} variants={cardVariants} className={styles.serviceCard}>
										<h3 className={styles.serviceTitle}>{service.title}</h3>
										<p className={styles.serviceHook}>{service.hook}</p>
										<p className={styles.serviceDesc}>{service.description}</p>
										<ul className={styles.list}>
											{service.capabilities.map(cap => (
												<li key={cap}>{cap}</li>
											))}
										</ul>
									</MotionDiv>
								))}
							</div>
						</div>
					</section>
				))}

				<CtaBanner />
			</div>
		</>
	);
}
