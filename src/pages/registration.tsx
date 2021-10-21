import type { NextPage } from "next";
import styles from "../styles/pages/Registration.module.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import axios from "axios";
import Router from "next/router";

const Registration: NextPage = () => {
  interface FormEvent extends EventTarget {
    fullname: {
      value: string;
    };
    email: {
      value: string;
    };
    cellphone: {
      value: string;
    };
    lichessName: {
      value: string;
    };
    allowsNotification: {
      value: string;
    };
  }
  function registration(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const target = event.target as FormEvent;
    const fullName = target.fullname.value;
    const email = target.email.value;
    const cellphone = target.cellphone.value;
    const lichessName = target.lichessName.value;
    const allowsNotifications = target.allowsNotification.value;
    axios({
      method: "post",
      url: "https://xadrezinho-cup-api.vercel.app/registration",
      data: {
        fullName,
        email,
        cellphone,
        lichessName,
        allowsNotifications,
      },
    })
      .then(() => {
        alert("Cadastro Finalizado!");
        Router.push("/");
      })
      .catch(() => {
        alert("Erro ao Finalizar Cadastro");
      });
  }

  return (
    <div className={styles.container}>
      <Header height={340} image="/wallpaper2.png">
        <div className={styles.title}>
          <h2>Preencha o formulário abaixo</h2>
          <h1>Inscrição 2 edição</h1>
        </div>
      </Header>
      <section className="--content">
        <form className={styles.form} onSubmit={registration}>
          <h3 className={styles.formName}>Preencha os dados corretamente</h3>
          <input
            type="text"
            className={styles.input}
            placeholder="Nome completo"
            name="fullname"
            required
          />
          <input
            type="email"
            className={styles.input}
            placeholder="E-mail"
            name="email"
            required
          />
          <input
            type="phone"
            className={styles.input}
            placeholder="Telefone"
            name="cellphone"
            required
          />
          <input
            type="text"
            className={styles.input}
            placeholder="Seu Nome no lichess.org"
            name="lichessName"
            required
          />
          <div className={styles.input}>
            <p>
              Você permite o uso dos seus dados para avisos e atualizações sobre
              XadrezinhoCup?
            </p>
            <div className={styles.radios}>
              <div className={styles.option}>
                <label htmlFor="sim">Sim</label>
                <input
                  id="sim"
                  type="radio"
                  name="allowsNotification"
                  value="true"
                  required
                />
              </div>
              <div className={styles.option}>
                <label htmlFor="nao">Não</label>
                <input
                  id="nao"
                  type="radio"
                  name="allowsNotification"
                  value="false"
                  required
                />
              </div>
            </div>
          </div>
          <button className={styles.button} type="submit">
            Enviar
          </button>
        </form>
      </section>
      <Footer />
    </div>
  );
};

export default Registration;
