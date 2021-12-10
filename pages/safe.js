import NavBar from "../components/NavBar";
import Head from "next/head";
import HomeBackground from "../components/HomeBackground";
import styles from "../styles/safe.module.css";
import Card from "../components/Card";
import CategoryHeader from "../components/CategoryHeader";
import Layout, { siteTitle } from "../components/layout";

export default function Safe() {
  return (
    <div>
      <Layout>
        <Head>
          <title>{siteTitle}</title>
        </Head>
        <main>
          <HomeBackground />
          <NavBar />
          <section className={styles.container}>
            <div>
              <CategoryHeader CAT="Social" />
              <Card />
            </div>
            <div>
              <CategoryHeader CAT="E-commerce" />
              <Card />
            </div>
            <div>
              <CategoryHeader CAT="Gaming" />
              <Card />
            </div>
          </section>
        </main>
      </Layout>
    </div>
  );
}
