import React from "react";

import { ToDoStore } from "../../data/store/useToDoStore";

import styles from "./index.module.scss";

export const App: React.FC = () => {
  console.log(ToDoStore);
  const { tasks } = ToDoStore((state) => state);
  const task = tasks[0];
  console.log(task);
  return (
    <section className={styles.todo}>
      <h1 className={styles.todo__title}>TODO App</h1>
      <div className={styles.todo__block}>{task.title}</div>
      <div className={styles.todo__block}></div>
    </section>
  );
};
