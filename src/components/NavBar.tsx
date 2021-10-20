import type { NextComponentType } from "next";
import styles from "../styles/components/NavBar.module.css";
import Image from "next/image";
import Link from "next/link";

const NavBar: NextComponentType = () => {
  return (
    <header className={styles.container}>
      <a href="#" className={styles.logo}>
        <Image src="/logo.svg" alt="XadrezinhoCup" width={222} height={40} />
      </a>
      <nav className={styles.nav}>
        <ul>
          <li>
            <Link href="/">
              <a>Principal</a>
            </Link>
          </li>
          <li>
            <Link href="/registration">
              <a>Inscrição</a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a>Regulamentos</a>
            </Link>
          </li>
          <li>
            <a></a>
          </li>
          <li>
            <Link href="/registration">
              <a className="--button">Inscreva-se</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
