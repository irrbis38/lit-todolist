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
  return <div className={styles.task}>{title}</div>;
};
