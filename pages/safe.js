import NavBar from "../components/NavBar";
import Head from "next/head";
import HomeBackground from "../components/HomeBackground";
import styles from "../styles/safe.module.css";
import Card from "../components/Card";
import CategoryHeader from "../components/CategoryHeader";
import Layout, { siteTitle } from "../components/layout";
import { passwords } from "../data/passwords_data";

export default function Safe() {
  const getUniqueCat = (passwords) => {
    let categories = [];
    Object.keys(passwords).map((key, i) => {
      categories.push(passwords[key].cat);
    });
    return [...new Set(categories)];
  };

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
              <div key={i}>
                <CategoryHeader cat={cat} />
                <div className={styles.cards_wrapper}>
                  {Object.keys(passwords).map((key, i) => {
                    if (passwords[key].cat === cat) {
                      return (
                        <Card 
                          url={passwords[key].url}
                          id={passwords[key].id}
                          pwd={passwords[key].pwd}
                        />
                      );
                    }
                  })}
                </div>
              </div>
            ))}
          </section>
        </main>
      </Layout>
    </div>
  );
}
