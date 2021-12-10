import NavBar from "../components/NavBar";
import styles from "../styles/generator.module.css";
import HomeBackground from "../components/HomeBackground";
import Layout, { siteTitle } from "../components/layout";
import Head from "next/head";

export default function Generator() {
  return (
    <div>
      <Layout>
        <Head>
          <title>{siteTitle}</title>
        </Head>
        <main className={styles.main}>
          <HomeBackground />
          <NavBar />
          <form className={`${styles.generator_container} glass`}>
            <label htmlFor="url">url</label>
            <br />
            <input type="text" name="url"></input>
            <br />
            <label htmlFor="category">category</label>
            <br />
            <input type="text"></input>
            <br />
            <label htmlFor="username">Username</label>
            <br />
            <input type="text"></input>
            <br />
            <label htmlFor="password">Password</label>
            <br />
            <input type="text"></input>
          </form>
        </main>
      </Layout>
    </div>
  );
}
