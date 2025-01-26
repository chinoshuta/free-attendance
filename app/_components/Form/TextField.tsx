import styles from "./TextField.module.css";

type Props = {
  title?: string;
  name: string;
  value?: string;
  placeholder?: string;
  message?: string;
};

export const TextFiled: React.FC<Props> = ({
  title,
  name,
  value,
  placeholder,
  message,
}) => {
  return (
    <div className={styles.wrapper}>
      <p className={styles.title}>{title}</p>
      <input
        value={value}
        name={name}
        placeholder={placeholder}
        className={styles.input}
      />
      <p className={styles.error}>{message}</p>
    </div>
  );
};
