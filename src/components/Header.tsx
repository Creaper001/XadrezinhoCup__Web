import type { NextComponentType } from "next";
import styles from "../styles/components/Header.module.css";
import NavBar from "../components/NavBar";

const Header: NextComponentType = ({ children }) => {
  return (
    <section className={styles.container}>
      <div className="--content">
        <NavBar />
        <div className={styles.box}>{children}</div>
      </div>
    </section>
  );
};

export default Header;
