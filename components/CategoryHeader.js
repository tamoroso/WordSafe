import styles from "./CategoryHeader.module.css";

export default function CategoryHeader(props) {
  return <h1 className={`${styles.category} glass`}>{props.cat}</h1>;
}
