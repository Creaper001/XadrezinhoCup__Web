import type { NextPage } from "next";
import styles from "../styles/pages/Registration.module.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Registration: NextPage = () => {
  return (
    <div className={styles.container}>
      <Header height={340} image="/wallpaper2.png">
        <div className={styles.title}>
          <h2>Preencha o formulário abaixo</h2>
          <h1>Inscrição 2 edição</h1>
        </div>
      </Header>
      <form style={{height: "1000px"}}>

      </form>
      <Footer />
    </div>
  );
};

export default Registration;
