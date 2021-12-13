import NavBar from "../components/NavBar";
import styles from "../styles/generator.module.css";
import HomeBackground from "../components/HomeBackground";
import Layout, { siteTitle } from "../components/layout";
import Head from "next/head";
import DropDownMenu from "../components/DropDownMenu";
import PasswordGenerator from "../components/PasswordGenerator";
import { useState } from "react";
import SettingsModal from "../components/SettingsModal";

export default function Generator() {
  const [modalOpen, setModalOpen] = useState(false);
  const [length, setLength] = useState(16);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSymbols, setIncludeSymbols] = useState(true);
  const [password, setPassword] = useState("");

  const settingsHandler = () => {
    setModalOpen(!modalOpen);
  };

  return (
    <div>
      <Layout>
        <Head>
          <title>{siteTitle}</title>
        </Head>
        <HomeBackground />
        <main className={styles.main}>
          <SettingsModal
            modalOpen={modalOpen}
            settingsHandler={settingsHandler}
            length={length}
            setLength={setLength}
            includeNumbers={includeNumbers}
            includeSymbols={includeSymbols}
            setIncludeNumbers={setIncludeNumbers}
            setIncludeSymbols={setIncludeSymbols}
          />
          <NavBar />
          <form className={`${styles.generator_container} glass`}>
            <div className={styles.url_label}>
              <label htmlFor="url">url</label>
            </div>
            <div className={styles.url_input}>
              <input
                type="url"
                name="url"
                placeholder="ex : https://yourWebsite.com"
              ></input>
            </div>
            <div className={styles.cat_label}>
              <label htmlFor="category">category</label>
            </div>
            <div className={styles.cat_input}>
              <DropDownMenu />
            </div>
            <div className={styles.id_label}>
              <label htmlFor="username">Username</label>
            </div>
            <div className={styles.id_input}>
              <input
                type="text"
                name="username"
                placeholder="ex : xX_WordSafe_Master_Xx"
              ></input>
            </div>
            <div className={styles.pwd_label}>
              <label htmlFor="password">Password</label>
            </div>
            <div className={styles.pwd_input}>
              <PasswordGenerator
                modalOpen={modalOpen}
                settingsHandler={settingsHandler}
                password={password}
                setPassword={setPassword}
                length={length}
                includeNumbers={includeNumbers}
                includeSymbols={includeSymbols}
              />
            </div>
            <div className={styles.save_btn}>
              <button className="gradient-btn">Save your password</button>
            </div>
          </form>
        </main>
      </Layout>
    </div>
  );
}
