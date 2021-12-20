import Image from "next/image";
import Link from "next/link";
import styles from "./NavBar.module.css";
import Media from "react-media";
import HamburgerMenu from "./HamburgerMenu";

export default function NavBar() {
  return (
    <ul className={`${styles.container} glass`}>
      <Image width={80} height={80} src="/WS_logo.png" alt="WordSafe logo" />
      <Media queries={{ small: { maxWidth: 600 } }}>
        {(matches) =>
          matches.small ? (
            <HamburgerMenu />
          ) : (
            <>
              <li>
                <Link href="/">
                  <a>Home</a>
                </Link>
              </li>
              <li>
                <Link href="/safe">
                  <a>Your safe</a>
                </Link>
              </li>
              <Link href="/generator" alt="go back">
                <a>
                  <button className="gradient-btn">Get your password !</button>
                </a>
              </Link>
            </>
          )
        }
      </Media>
    </ul>
  );
}
