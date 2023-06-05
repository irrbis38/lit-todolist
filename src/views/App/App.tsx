import React from "react";

import { ToDoStore } from "../../data/store/useToDoStore";

import { InputPlus } from "../components/InputPlus";
import { TaskItem } from "../components/TaskItem";

import styles from "./App.module.scss";

export const App: React.FC = () => {
  const [tasks, createTask, updateTask, removeTask, completeTask] = ToDoStore(
    (state) => [
      state.tasks,
      state.createTask,
      state.updateTask,
      state.removeTask,
      state.completeTask,
    ]
  );

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
      <div className={styles.todo__block}>
        {!tasks.length ? (
          <p className={styles.todo__empty}>Tasks list is empty.</p>
        ) : (
          tasks.map((task) => (
            <TaskItem
              key={task.id}
              {...task}
              onDone={removeTask}
              onEdit={updateTask}
              onRemove={removeTask}
              onComplete={completeTask}
            />
          ))
        )}
      </div>
    </section>
  );
};
