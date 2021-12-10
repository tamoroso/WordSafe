import styles from "./Card.module.css";

export default function Card({ ID, PWD }) {
  return (
    <div className={`${styles.card} glass`}>
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
