import React from "react";
import Menu from "./Menu";
import styles from "./Header.module.scss";

export default function Header() {
  return (
    <header className={styles.Header}>
      <Menu />
    </header>
  );
}
