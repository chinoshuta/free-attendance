"use client";

import { useRouter } from "next/navigation";
import styles from "./Modal.module.css";

type Props = {
  children: React.ReactNode;
};
export const Modal: React.FC<Props> = ({ children }) => {
  const router = useRouter();
  return (
    <div className={styles.wrapper}>
      <div className={styles.layer} onClick={() => router.back()} />
      <div className={styles.contents}>{children}</div>
    </div>
  );
};
