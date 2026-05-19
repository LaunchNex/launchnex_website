export default function UsersIcon({ size = 24, ...props }) {
	return (
		<svg
			viewBox="0 0 24 24"
			width={size}
			height={size}
			fill="none"
			stroke="currentColor"
			strokeWidth="1.75"
			strokeLinecap="round"
			strokeLinejoin="round"
			{...props}
		>
			<circle cx="9" cy="7" r="4" />
			<path d="M3 21v-2a4 4 0 014-4h4a4 4 0 014 4v2" />
			<path d="M16 3.13a4 4 0 010 7.75M21 21v-2a4 4 0 00-3-3.87" />
		</svg>
	);
}
