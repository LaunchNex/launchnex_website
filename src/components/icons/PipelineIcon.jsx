export default function PipelineIcon({ size = 24, ...props }) {
	return (
		<svg
			viewBox="0 0 24 24"
			width={size}
			height={size}
			fill="none"
			stroke="currentColor"
			strokeWidth="1.75"
			strokeLinecap="round"
			{...props}
		>
			<path d="M12 5v14M5 12h14" />
		</svg>
	);
}
