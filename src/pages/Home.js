import React, { useState } from "react";
import { ToastContainer, toast } from "react-toast";
import Header from "../components/Header";
import Footer from "../components/Footer";
import styles from "./Home.module.css";

export default function Home() {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [walletAddress, setWalletAddress] = useState("");
  const [disabledElement, setDisabledElement] = useState(false);

  const handleForm = async (e) => {
    try {
      e.preventDefault();
      setDisabledElement((disabledElement) => !disabledElement);

      // Make API call
      const url = process.env.REACT_APP_API_URL;
      const result = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ firstName, email, walletAddress }),
      });
      const response = await result.json();

      if (response.code === 0) {
        successToast();
        setFirstName("");
        setEmail("");
        setWalletAddress("");
      } else {
        failedToast();
      }

      setDisabledElement((disabledElement) => !disabledElement);
    } catch (e) {
      console.log(e);
      setDisabledElement((disabledElement) => !disabledElement);
    }
  };

  const successToast = () => toast.success("Subscription successful!");

  const failedToast = () =>
    toast.error("Failed to submit data for subscription. Try again!");

  return (
    <>
      <Header />
      <div className={styles.container}>
        <form onSubmit={handleForm}>
          <label htmlFor="firstname">First Name</label>
          <input
            id="firstname"
            type="text"
            required
            disabled={disabledElement}
            value={firstName}
            onInput={(e) => setFirstName(e.target.value)}
          />
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            required
            disabled={disabledElement}
            value={email}
            onInput={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="wallet-address">Wallet Address</label>
          <input
            id="wallet-address"
            type="text"
            required
            disabled={disabledElement}
            value={walletAddress}
            onInput={(e) => setWalletAddress(e.target.value)}
          />

          <button type="submit" disabled={disabledElement}>
            {disabledElement ? (
              <span className={styles.spinner}></span>
            ) : (
              "Submit"
            )}
          </button>
        </form>
      </div>
      <ToastContainer delay={3000} position="top-right" />
      <Footer />
    </>
  );
}
