import React from "react";

import { ToDoStore } from "../../data/store/useToDoStore";

import { InputPlus } from "../components/InputPlus";

import styles from "./index.module.scss";

export const App: React.FC = () => {
  const [tasks, createTask, updateTask, removeTask] = ToDoStore((state) => [
    state.tasks,
    state.createTask,
    state.updateTask,
    state.removeTask,
  ]);
  return (
    <section className={styles.todo}>
      <h1 className={styles.todo__title}>TODO App</h1>
      <div className={styles.todo__block}>
        <InputPlus
          onAdd={(title) => {
            if (title) {
              createTask(title);
            }
          }}
        />
      </div>
      <div className={styles.todo__block}></div>
    </section>
  );
};
