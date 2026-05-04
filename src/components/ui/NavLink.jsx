"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLink({ href, end, className, activeClassName, children, ...props }) {
	const pathname = usePathname();
	const isActive = pathname === href;

	return (
		<Link href={href} className={`${className} ${isActive ? activeClassName : ""}`.trim()} {...props}>
			{children}
		</Link>
	);
}
