import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Layout from "../components/Layout";
import styles from "../styles/Home.module.css";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>WordSafe - Keep your words safe</title>
      </Head>
      <div className={styles.main}>
        {/* <HomeBackground /> */}
        <div className={`${styles.card} glass`}>
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
              <button className={`${styles.button} gradient-btn`}>
                Let&apos;s start
                <FontAwesomeIcon className={styles.icon} icon={faArrowRight} />
              </button>
            </a>
          </Link>
        </div>
      </div>
    </Layout>
  );
}
