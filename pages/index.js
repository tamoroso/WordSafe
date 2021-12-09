import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import HomeBackground from "../components/HomeBackground";
import styles from "../styles/Home.module.css";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStaylinked } from "@fortawesome/free-brands-svg-icons";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>WordSafe - Keep your words safe</title>
        <meta
          name="description"
          content="Generate your passwords the easy way"
        />
        <link rel="icon" href="/cadenas.ico" />
      </Head>

      <main className={styles.main}>
        <HomeBackground />
        <div className={styles.card}>
          <Image
            src="/WS_logo.png"
            alt="Word Safe Logo"
            width={300}
            height={300}
          />
          <h1>WordSafe</h1>
          <p>
            Generate <strong>strong</strong> and <strong>secure</strong>{" "}
            password the easy way !
          </p>
          <Link href="/generator">
            <a>
              <button className={styles.button}>
                Let&apos;s start
                <FontAwesomeIcon className={styles.icon} icon={faArrowRight} />
              </button>
            </a>
          </Link>
        </div>
      </main>
    </div>
  );
}
