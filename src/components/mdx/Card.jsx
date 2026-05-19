import styles from "./Card.module.css";
import {
	PipelineIcon,
	LatencyIcon,
	UsersIcon,
	ComplianceIcon,
	CostsIcon,
	MaintenanceIcon,
} from "@/components/icons";

const ICONS = {
	pipeline:    <PipelineIcon />,
	latency:     <LatencyIcon />,
	users:       <UsersIcon />,
	compliance:  <ComplianceIcon />,
	costs:       <CostsIcon />,
	maintenance: <MaintenanceIcon />,
};

export function CardGrid({ cols, children }) {
	const gridStyle = cols
		? { gridTemplateColumns: `repeat(${cols}, 1fr)` }
		: {};
	return (
		<div className={styles.grid} style={gridStyle}>
			{children}
		</div>
	);
}

export function Card({ icon, iconName, variant, title, description, children }) {
	const svgIcon = iconName ? ICONS[iconName] : null;
	const variantClass = variant ? styles[variant] : "";

	return (
		<div className={`${styles.card} ${variantClass}`}>
			{svgIcon && (
				<div className={styles.iconBox}>
					{svgIcon}
				</div>
			)}
			{!svgIcon && icon && <span className={styles.cardIcon}>{icon}</span>}
			<div className={styles.cardContent}>
				{title && <div className={styles.cardTitle}>{title}</div>}
				{description && <div className={styles.cardDescription}>{description}</div>}
				{children}
			</div>
		</div>
	);
}
