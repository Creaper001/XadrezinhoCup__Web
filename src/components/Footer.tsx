import type { NextComponentType } from "next";
import styles from "../styles/components/Footer.module.css";
import Image from "next/image";

const Footer: NextComponentType = () => {
  return (
    <footer className={styles.container}>
      <div className="--content">
        <div className={styles.box}>
          <Image src="/logo.svg" alt="XadrezinhoCup" width={155} height={28} />
          <div className={styles.contact}>
            <p>Siga-nos:</p>
            <a href="">
              <Image
                src="/instagram.svg"
                alt="Instagram"
                width={24}
                height={24}
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
