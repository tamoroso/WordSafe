import NavBar from "../components/NavBar";
import HomeBackground from "../components/HomeBackground";
import styles from "../styles/safe.module.css";
import Card from "../components/Card";
import CategoryHeader from "../components/CategoryHeader";

export default function Safe() {
  return (
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
  );
}
