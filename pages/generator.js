import NavBar from "../components/NavBar";
import styles from "../styles/generator.module.css";
import HomeBackground from "../components/HomeBackground";
import Layout, { siteTitle } from "../components/layout";
import Head from "next/head";
import DropDownMenu from "../components/DropDownMenu";
import PasswordGenerator from "../components/PasswordGenerator";
import { useContext, useState } from "react";
import Modal from "../components/Modals/Modal";
import { AppContext } from "../context/AppContext";

export default function Generator() {
  const context = useContext(AppContext);
  const [modalOpen, setModalOpen] = useState(true);
  const [length, setLength] = useState(16);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSymbols, setIncludeSymbols] = useState(true);
  const [password, setPassword] = useState("");
  const [modalType, setModalType] = useState("save");

  const settingsHandler = () => {
    setModalType("settings");
    setModalOpen(!modalOpen);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let passwords = context.state.passwords;
    let key = `pwd${Object.keys(passwords).length + 1}`;
    setModalType("save");
    setModalOpen(!modalOpen);
    context.setAllPasswords({
      ...passwords,
      [key]: {
        url: e.target.url.value,
        id: e.target.username.value,
        cat: e.target.category.value,
        pwd: password,
      },
    });
  };

  return (
    <div>
      <Layout>
        <Head>
          <title>{siteTitle}</title>
        </Head>
        <HomeBackground />
        <main className={styles.main}>
          <Modal
            modalType={modalType}
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
          <form
            className={`${styles.generator_container} glass`}
            onSubmit={handleSubmit}
          >
            <div className={styles.url_label}>
              <label htmlFor="url">url</label>
            </div>
            <div className={styles.url_input}>
              <input
                type="url"
                name="url"
                placeholder="ex : https://yourWebsite.com"
                required
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
                required
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
              <button className="gradient-btn" type="submit">
                Save your password
              </button>
            </div>
          </form>
        </main>
      </Layout>
    </div>
  );
}
