import type { NextPage } from "next";
import styles from "../styles/pages/Home.module.css";
import Image from "next/image";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Header height={520} image="/wallpaper.png">
        <div className={styles.title}>
          <h2>Inscrição até dia 05 de maio</h2>
          <h1>2º XadrezinhoCup</h1>
          <div className={styles.buttons}>
            <Link href="/registration">
              <a className="--button">Faça já sua inscrição!</a>
            </Link>
            <Link href="/">
              <a className="--button-reverse">Consultar regulamento</a>
            </Link>
          </div>
        </div>
      </Header>
      <section className="--content">
        <div className={styles.howWorks}>
          <div>
            <h3>Como funciona o XadrezinhoCup?</h3>
            <Image src="/dots.svg" alt="" width={157} height={69} />
          </div>
          <div className={styles.grid}>
            <div className={styles.block}>
              <h4>Inscrição</h4>
              <p>
                Faça sua inscrição preenchendo o formulário e aguarde nosso
                retorno, lembre-se que as vagas são limitadas e necessitamos que
                preenche com dados reais!
              </p>
            </div>
            <div className={styles.block}>
              <h4>Fechamento da inscrição</h4>
              <p>
                Todos os inscritos serão chamados e iremos informar data e hora
                exata do campeonato, confirmaremos sua entrada e informaremos
                caso seja suplente ou não.
              </p>
            </div>
            <div className={styles.block}>
              <h4>Torneio 1ª etapa</h4>
              <p>
                A primeira etapa do <b>XadrezinhoCup</b> será no sistema de
                torneio suiço, onde todos os competidores irão disputar entre sí
                buscando estar entre os 8 melhores
              </p>
            </div>
            <div className={styles.block}>
              <h4>Torneio 2ª etapa</h4>
              <p>
                Na segunda etapa do XadrezinhoCup será de mata a mata entre os 8
                melhores da etapa anterior, onde os 3 melhores serão premiados
                em dinheiro!
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="--content">
        <div className={styles.award}>
          <Image src="/award.png" alt="" width={386} height={351} />
          <div className={styles.prizes}>
            <h3>Premiação para os melhores!</h3>
            <div className={styles.grid}>
              <div className={styles.block}>
                <h4>1º Colocado</h4>
                <p>
                  R$50 em dinheiro e entrada grátis em nosso próximo campeonato
                </p>
              </div>
              <div className={styles.block}>
                <h4>2º Colocado</h4>
                <p>
                  R$30 em dinheiro e entrada grátis em nosso próximo campeonato
                </p>
              </div>
              <div className={styles.block}>
                <h4>3º Colocado</h4>
                <p>
                  R$20 em dinheiro e entrada grátis em nosso próximo campeonato
                </p>
              </div>
            </div>
            <hr className={styles.line} />
            <p>
              <b>*</b>As premiações serão destinados apenas ao 1º, 2º e 3º
              colocados da segunda etapa do <b>XadrezinhoCup</b> e serão
              enviadas após o torneio via pix para os ganhadores.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Home;
