import styles from "./TextArea.module.css";

type Props = {
  title?: string;
  name: string;
  value?: string;
  placeholder?: string;
  rows?: number;
  cols?: number;
  message?: string;
};

export const TextArea: React.FC<Props> = ({
  title,
  name,
  value,
  placeholder,
  rows,
  cols,
  message,
}) => {
  return (
    <div className={styles.wrapper}>
      <p className={styles.title}>{title}</p>
      <textarea
        className={styles.textarea}
        value={value}
        name={name}
        placeholder={placeholder}
        rows={rows}
        cols={cols}
      />
      <p className={styles.error}>{message}</p>
    </div>
  );
};
