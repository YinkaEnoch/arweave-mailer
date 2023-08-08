import React from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import styles from "./About.module.css";
import Header from "../components/Header";

export default function About() {
  return (
    <>
      <Header />
      <section className={styles.container}>
        <div className={styles.contentContainer}>
          <h1>Arweave Mailer??</h1>
          <p>
            Centralized cryptocurrency platforms typically notify their users
            via email when assets are deposited into any wallet address they
            own. This notification process makes it easy for users to know when
            they have received any assets. However, users who use self-custodial
            wallets must manually refresh their wallets at intervals to confirm
            whether a deposit transaction has actually been completed. This app
            is developed to address this issue. A notification to users' email
            addresses whenever any on-chain transaction is conducted on their
            wallet address. This app provides a convenient and reliable way for
            users to stay up-to-date on the status of their cryptocurrency
            transactions. It also eliminates the need for users to manually
            check their wallets, which can be time-consuming and inconvenient.
          </p>

          <h2 style={{ marginTop: "2rem" }}>How it works?</h2>
          <ul>
            Arweave Mailer is divided into the following components:
            <li>
              <strong>The Frontend:</strong>
              <p>
                Users submit their name, email address and wallet address for
                email notifications whenever an on-chain transaction is carried
                out on their wallet address{" "}
              </p>
            </li>
            <li>
              <strong>The Backend:</strong>
              <ul style={{ marginLeft: "1rem" }}>
                <li>
                  <strong>API:</strong> Accept user's input from the Frontend
                  and stores it in a database.
                </li>
                <li>
                  <strong>Monitor:</strong> Get transaction details from mined
                  blocks
                </li>
                <li>
                  <strong>Mailing Queue:</strong> Send mail(s) to user's email
                  address when a transaction is carried out on their wallet
                  address{" "}
                </li>
              </ul>
            </li>
          </ul>
        </div>

        <p className={styles.bottomLink}>
          <Link to="/">Home</Link>
        </p>
      </section>

      <Footer />
    </>
  );
}
