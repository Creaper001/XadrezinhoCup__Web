import * as React from 'react'
import styles from "../styles/components/Header.module.css";
import NavBar from "../components/NavBar";

type Props = {
  children: React.ReactNode;
  height: number;
  image: string;
};

const Header: React.FC<Props>= ({ children, height, image }) => {
  return (
    <section className={styles.container} style={{backgroundImage: `url(${image})`}}>
      <div className="--content">
        <NavBar />
        <div className={styles.box} style={{ height: `${height}px` }}>
          {children}
        </div>
      </div>
    </section>
  );
};

export default Header;
