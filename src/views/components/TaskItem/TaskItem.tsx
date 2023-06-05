import { useState, useRef, useEffect } from "react";
import styles from "./TaskItem.module.scss";

interface TaskItemProps {
  id: string;
  title: string;
  createdAt: number;
  onUpdate: (id: string, title: string) => void;
  onRemove: (id: string) => void;
  onComplete: (id: string) => void;
}

export const TaskItem: React.FC<TaskItemProps> = (props) => {
  const { id, title, onUpdate, onRemove, onComplete } = props;
  const [isEditMode, setIsEditMode] = useState(false);
  const [isDone, setIsDone] = useState(false);
  const [value, setValue] = useState(title);
  const editTitleInputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    if (isEditMode) {
      editTitleInputRef?.current?.focus();
    }
  }, [isEditMode]);
  return (
    <div className={styles.task}>
      <div className={styles.task__body}>
        <label
          className={
            isDone
              ? `${styles.task__label} ${styles.task__done}`
              : `${styles.task__label}`
          }
        >
          <input
            type="checkbox"
            className={styles.task__checkbox}
            disabled={isEditMode}
            onClick={() => {
              setIsDone(!isDone);
              onComplete(id);
            }}
          />
          {isEditMode ? (
            <input
              className={styles.task__editTask}
              type="text"
              value={value}
              ref={editTitleInputRef}
              onChange={(e) => {
                setValue(e.target.value);
              }}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  onUpdate(id, value);
                  setIsEditMode(false);
                }
              }}
            />
          ) : (
            <span className={styles.task__title}>{title}</span>
          )}
        </label>
      </div>
      <div className={styles.task__panel}>
        {isEditMode ? (
          <button
            className={styles.task__confirm}
            aria-label="Save"
            onClick={() => {
              onUpdate(id, value);
              setIsEditMode(false);
            }}
          ></button>
        ) : (
          <button
            className={styles.task__edit}
            aria-label="Edit"
            onClick={() => {
              setIsEditMode(true);
            }}
          ></button>
        )}
        <button
          className={styles.task__remove}
          aria-label="Remove"
          onClick={() => onRemove(id)}
        ></button>
      </div>
    </div>
  );
};
