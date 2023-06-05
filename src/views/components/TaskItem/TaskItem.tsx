import { useState } from "react";
import styles from "./TaskItem.module.scss";

interface TaskItemProps {
  id: string;
  title: string;
  createdAt: number;
  onDone: (id: string) => void;
  onEdit: (id: string, title: string) => void;
  onRemove: (id: string) => void;
  onComplete: (id: string) => void;
}

export const TaskItem: React.FC<TaskItemProps> = (props) => {
  const { id, title, onDone, onEdit, onRemove, onComplete } = props;
  const [isEditMode, setIsEditMode] = useState(false);
  const [isDone, setIsDone] = useState(false);
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
            onClick={() => {
              setIsDone(!isDone);
              onComplete(id);
            }}
          />
          {title}
        </label>
      </div>
      <div className={styles.task__panel}>
        {isEditMode ? (
          <button
            className={styles.task__confirm}
            aria-label="Confirm"
            onClick={() => {
              onEdit(id, title);
              setIsEditMode(false);
            }}
          ></button>
        ) : (
          <button
            className={styles.task__edit}
            aria-label="Edit"
            onClick={() => {
              onEdit(id, title);
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
