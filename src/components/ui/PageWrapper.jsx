"use client";
import { motion } from "framer-motion";

/* Page transition wrapper */
const pageVariants = {
	initial: { opacity: 0 },
	animate: { opacity: 1, transition: { duration: 0.3 } },
	exit: { opacity: 0, transition: { duration: 0.2 } },
};

export default function PageWrapper({ children }) {
	return (
		<motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit">
			{children}
		</motion.div>
	);
}
