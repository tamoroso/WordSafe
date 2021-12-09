import Image from "next/image";
import Link from "next/link";
import styles from "./NavBar.module.css";

export default function NavBar() {
  return (
    <ul className={styles.container}>
      <Image width={80} height={80} src="/WS_logo.png" alt="WordSafe logo" />
      <li>
        <Link href="/">
          <a>Home</a>
        </Link>
      </li>
      <li>
        <Link href="/safe">
          <a>Your safe</a>
        </Link>
      </li>
      <Link href="/generator" alt="go back">
        <a>
          <button>Get your password !</button>
        </a>
      </Link>
    </ul>
  );
}
