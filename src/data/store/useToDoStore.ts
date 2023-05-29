import { create } from "zustand";

interface Tasks {
  id: string;
  titile: string;
  createdAt: number;
}

interface ToDoStore {
  tasks: Tasks[];
  createTask: (title: string) => void;
  updateTask: (id: string, title: string) => void;
  removeTask: (id: string) => void;
}

export const ToDoStore = create<ToDoStore>((set, get) => ({
  tasks: [],
  createTask: (title) => {
    console.log();
  },
  updateTask: (id, title) => {
    console.log();
  },
  removeTask: (id) => {
    console.log();
  },
}));
