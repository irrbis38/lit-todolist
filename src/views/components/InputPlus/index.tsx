import { useState, useCallback } from "react";

import styles from "./index.module.scss";

interface InputPlusProps {
  onAdd: (title: string) => void;
}

export const InputPlus: React.FC<InputPlusProps> = ({ onAdd }) => {
  const [inputValue, setInputValue] = useState("");
  const addTask = useCallback(() => {
    onAdd(inputValue);
    setInputValue("");
  }, [inputValue]);
  return (
    <div className={styles.inputplus}>
      <input
        type="text"
        className={styles.inputplus__input}
        value={inputValue}
        placeholder="Type text here..."
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            addTask();
          }
        }}
      />
      <button
        type="button"
        className={styles.inputplus__button}
        aria-label="Add task"
        onClick={addTask}
      />
    </div>
  );
};
