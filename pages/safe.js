import NavBar from "../components/NavBar";
import Head from "next/head";
import HomeBackground from "../components/HomeBackground";
import styles from "../styles/safe.module.css";
import Layout, { siteTitle } from "../components/layout";
import CardCarousel from "../components/CardCarousel";
import { filterObject, getUniqueCat } from "../lib/dataProcessing";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/AppContext";

export default function Safe() {
  const context = useContext(AppContext);
  const categories = getUniqueCat(context.state.passwords);

  return (
    <div>
      <Layout>
        <Head>
          <title>{siteTitle}</title>
        </Head>
        <div>
          <HomeBackground />
          <NavBar />
          <section className={styles.container}>
            {categories.map((cat, i) => (
              <div className={styles.stack} key={i}>
                <CardCarousel
                  header={getUniqueCat(filterObject(context.state.passwords, cat))}
                  data={filterObject(context.state.passwords, cat)}
                />
              </div>
            ))}
          </section>
        </div>
      </Layout>
    </div>
  );
}
