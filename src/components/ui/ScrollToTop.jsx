"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

/* Scroll to top on route change */
export default function ScrollToTop() {
	const pathname = usePathname();
	useEffect(() => {
		window.scrollTo(0, 0);
	}, [pathname]);
	return null;
}
