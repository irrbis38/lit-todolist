import React from "react";

import styles from "./index.module.scss";

export const App: React.FC = () => {
  return (
    <section className={styles.todo}>
      <h1 className={styles.todo__title}>TODO App</h1>
      <div className={styles.todo__block}></div>
      <div className={styles.todo__block}></div>
    </section>
  );
};
