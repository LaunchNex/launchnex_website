"use client";
import { motion } from "framer-motion";

const PRESETS = {
	fadeUp: {
		hidden: { opacity: 0, y: 20 },
		visible: { opacity: 1, y: 0 },
	},
};

/**
 * MotionDiv — reusable animated div wrapper.
 *
 * Props:
 *   preset    — animation preset key (default: "fadeUp")
 *   delay     — animation delay in seconds (default: 0)
 *   duration  — animation duration in seconds (default: 0.5)
 *   ease      — easing string (default: "easeOut")
 *   onView    — animate on scroll into view (default: true); set false for on-mount animations (e.g. page heroes)
 *   once      — only trigger whileInView once (default: true)
 *   variants  — custom framer-motion variants; overrides preset
 *   custom    — custom value forwarded to variant functions (used for stagger delays)
 *   inherit   — skip setting initial/animate/whileInView; child inherits from a parent stagger container
 *   className — forwarded to motion.div
 *   ...props  — any other motion.div props
 */
export default function MotionDiv({
	children,
	preset = "fadeUp",
	delay = 0,
	duration = 0.5,
	ease = "easeOut",
	onView = true,
	once = true,
	variants,
	custom,
	inherit = false,
	className,
	...props
}) {
	const activeVariants = variants ?? {
		hidden: PRESETS[preset].hidden,
		visible: {
			...PRESETS[preset].visible,
			transition: { duration, delay, ease },
		},
	};

	if (inherit) {
		return (
			<motion.div variants={activeVariants} custom={custom} className={className} {...props}>
				{children}
			</motion.div>
		);
	}

	const animProps = onView ? { whileInView: "visible", viewport: { once } } : { animate: "visible" };

	return (
		<motion.div variants={activeVariants} initial="hidden" custom={custom} className={className} {...animProps} {...props}>
			{children}
		</motion.div>
	);
}
