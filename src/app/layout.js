import { AnimatePresence } from "framer-motion";
import { Inter } from "next/font/google";
import "./globals.css";
import ScrollToTop from "@/components/ui/ScrollToTop";
import Header from "@/components/layout/Header/Header";
import Footer from "@/components/layout/Footer/Footer";
import PageWrapper from "@/components/ui/PageWrapper";

const inter = Inter({
	subsets: ["latin"],
	weight: ["400", "500", "600", "700"],
	display: "swap",
});

export const metadata = {
	title: "LaunchNex — AI built for production. Not presentations.",
	description: "LaunchNex is a boutique AI engineering agency. We assess AI feasibility before building, guarantee senior delivery, and monitor your AI for 90 days post-launch.",
	openGraph: {
		title: "LaunchNex — AI built for production. Not presentations.",
		description: "LaunchNex is a boutique AI engineering agency. We assess AI feasibility before building, guarantee senior delivery, and monitor your AI for 90 days post-launch.",
		url: "https://launchnex.dev",
	},
	alternates: {
		canonical: "https://launchnex.dev",
	},
};

export default function RootLayout({ children }) {
	return (
		<html lang="en" className={inter.className}>
			<head>
			</head>
			<body>
				<ScrollToTop />
				<a href="#main-content" className="skip-link">
					Skip to main content
				</a>
				<Header />
				<main id="main-content" role="main">
					<AnimatePresence mode="wait" initial={false}>
						<PageWrapper>{children}</PageWrapper>
					</AnimatePresence>
				</main>
				<Footer />
			</body>
		</html>
	);
}
