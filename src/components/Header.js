import React from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <div className={styles.container}>
      <p className={styles.logo}>
        <span>M.</span>
      </p>
      <p className={styles.nav}>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </p>
    </div>
  );
}
