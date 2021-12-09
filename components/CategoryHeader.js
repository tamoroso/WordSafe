import styles from "./CategoryHeader.module.css";

export default function CategoryHeader({ CAT }) {
  return <h1 className={styles.category}>{CAT}</h1>;
}
