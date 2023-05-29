import { create } from "zustand";

interface Tasks {
  id: string;
  title: string;
  createdAt: number;
}

interface ToDoStore {
  tasks: Tasks[];
  createTask: (title: string) => void;
  updateTask: (id: string, title: string) => void;
  removeTask: (id: string) => void;
}

export const ToDoStore = create<ToDoStore>((set, get) => ({
  tasks: [
    {
      id: "asdf",
      title: "Как можно скорее найти айтишную работу.",
      createdAt: 134,
    },
  ],
  createTask: (title) => {
    const { tasks } = get();
  },
  updateTask: (id, title) => {
    console.log();
  },
  removeTask: (id) => {
    console.log();
  },
}));
