import styles from "./TaskItem.module.scss";

interface TaskItemProps {
  id: string;
  title: string;
  createdAt: number;
  onDone: (id: string) => void;
  onEdit: (id: string, title: string) => void;
  onRemove: (id: string) => void;
}

export const TaskItem: React.FC<TaskItemProps> = (props) => {
  const { id, title, onDone, onEdit, onRemove } = props;
  return (
    <div className={styles.task}>
      <div className={styles.task__body}>{title}</div>
      <div className={styles.task__panel}>
        <button className={styles.task__edit} aria-label="Edit" onClick={() => onEdit(id, title)}>
          Edit
        </button>
        <button className={styles.task__remove} aria-label="Remove" onClick={() => onRemove(id)}>
          Remove
        </button>
      </div>
    </div>
  );
};
