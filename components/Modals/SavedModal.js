import Link from "next/link";
import styles from "./Modal.module.css";

export default function SavedModal(props) {
  return (
    <>
      <p>Your password has been succesfully saved in your safe.</p>
      <div className={styles.btn_wrapper}>
        <Link href="/generator">
          <a>
            <button className="gradient-btn">Generate new password</button>
          </a>
        </Link>
        <Link href="/safe">
          <a>
            <button className="gradient-btn">Go to your safe</button>
          </a>
        </Link>
      </div>
    </>
  );
}
