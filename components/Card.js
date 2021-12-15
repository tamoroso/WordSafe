import styles from "./Card.module.css";

export default function Card(props) {
  return (
    <div className={`${styles.card} glass`}>
      <div>
        <span>URL</span>
        <span>{props.url}</span>
      </div>
      <div>
        <span>ID</span>
        <span>{props.id}</span>
      </div>
      <div>
        <span>PWD</span>
        <span>{props.pwd}</span>
      </div>
    </div>
  );
}
