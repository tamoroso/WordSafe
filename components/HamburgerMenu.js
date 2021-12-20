import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import Link from "next/link";
import styles from "./HamburgerMenu.module.css";

export default function HamburgerMenu() {
  const [navBarOpen, setNavBarOpen] = useState(false);

  const handleToggle = () => {
    setNavBarOpen((prev) => !prev);
  };

  return (
    <nav>
      <button onClick={handleToggle} className={styles.hamburger_btn}>
        {navBarOpen ? (
          <FontAwesomeIcon icon={faTimes} size="3x" />
        ) : (
          <FontAwesomeIcon icon={faBars} size="3x" />
        )}
      </button>
      {navBarOpen ? (
        <ul className={styles.hamburger_menu}>
          <li>
            <Link href={"/"}>
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href={"/safe"}>
              <a>Your safe</a>
            </Link>
          </li>
          <li>
            <Link href={"/generator"}>
              <a>Get your password !</a>
            </Link>
          </li>
        </ul>
      ) : null}
    </nav>
  );
}
