import React from "react";
import styles from "./Button.module.css";

const Button = ({ children }) => (
  <button className={styles.wrapper} type="button">
    {children}
  </button>
);

export default Button;
