import NavBar from "../components/NavBar";
import Head from "next/head";
import HomeBackground from "../components/HomeBackground";
import styles from "../styles/safe.module.css";
import Layout, { siteTitle } from "../components/layout";
import { passwords } from "../data/passwords_data";
import CardCarousel from "../components/CardCarousel";
import { filterObject, getUniqueCat } from "../lib/dataProcessing";

export default function Safe() {
  const categories = getUniqueCat(passwords);

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
            {categories.map((cat, i) => (
              <div className={styles.stack} key={i}>
                <CardCarousel
                  header={getUniqueCat(filterObject(passwords, cat))}
                  data={filterObject(passwords, cat)}
                />
              </div>
            ))}
          </section>
        </main>
      </Layout>
    </div>
  );
}
