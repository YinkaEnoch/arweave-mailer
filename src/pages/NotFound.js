import React from "react";
import { Link } from "react-router-dom";
import styles from "./NotFound.module.css";
import Header from "../components/Header";

export default function NotFound() {
  return (
    <>
      <Header />
      <div className={styles.container}>
        <h1 className={styles.header}>404</h1>
        <p className={styles.content}>
          Looks like you've discovered a parallel universe. Sadly, the page
          you're looking for didn't make the journey.
        </p>
        <Link to={"/"} className={styles.btn}>
          Head back to your Universe
        </Link>
      </div>
    </>
  );
}
