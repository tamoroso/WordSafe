import styles from "./Card.module.css";

export default function Card({ CAT, ID, PWD }) {
  return (
    <div className={styles.card}>
      <div>
        <span>ID</span>
        <span>{ID}</span>
      </div>
      <div>
        <span>PWD</span>
        <span>{PWD}</span>
      </div>
    </div>
  );
}
