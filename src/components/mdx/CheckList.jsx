import styles from "./CheckList.module.css";

export default function CheckList({ children }) {
	return <div className={styles.checkList}>{children}</div>;
}
