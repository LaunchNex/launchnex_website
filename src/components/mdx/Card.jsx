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
	return (
		<div className={styles.grid} style={{ gridTemplateColumns: `repeat(${cols}, 1fr)` }}>
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
