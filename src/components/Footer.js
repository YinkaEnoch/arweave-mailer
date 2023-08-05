import React from "react";
import { Link } from "react-router-dom";
import styles from "./Footer.module.css";

export default function Footer({ customStyles }) {
  return (
    <div className={styles.container} style={{ ...customStyles }}>
      &copy; 2023{" "}
      <Link
        to="https://github.com/yinkaenoch"
        rel="noopenner noreferrer"
        target="_blank"
        className={styles.link}
      >
        Yinka Enoch Adedokun
      </Link>
      . All rights resevred.
    </div>
  );
}
