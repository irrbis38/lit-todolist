import { create } from "zustand";

import { generateId } from "../helpers";

interface Task {
  id: string;
  title: string;
  createdAt: number;
}

interface ToDoStore {
  tasks: Task[];
  createTask: (title: string) => void;
  updateTask: (id: string, title: string) => void;
  removeTask: (id: string) => void;
  completeTask: (id: string) => void;
}

export const ToDoStore = create<ToDoStore>((set, get) => ({
  tasks: [],
  createTask: (title) => {
    // const { tasks } = get();
    const newTask: Task = {
      id: generateId(),
      title,
      createdAt: Date.now(),
    };

    // set({
    //   tasks: [newTask].concat(tasks),
    // });

    set((state) => ({ tasks: [newTask].concat(state.tasks) }));
  },
  updateTask: (id, title) => {
    const { tasks } = get();
    set({
      tasks: tasks.map((task) => ({
        ...task,
        title: task.id === id ? title : task.title,
      })),
    });
  },
  removeTask: (id) => {
    const { tasks } = get();
    set({
      tasks: tasks.filter((task) => task.id !== id),
    });
  },
  completeTask: (id) => {
    const { tasks } = get();
    const completedTask = tasks.filter((task) => task.id === id);
    const otherTasks = tasks.filter((task) => task.id !== id);
    set({
      tasks: [...otherTasks, ...completedTask],
    });
  },
}));
