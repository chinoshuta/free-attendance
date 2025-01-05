"use client";

import styles from "./GoogleButton.module.css";
import { signIn } from "next-auth/react";
import { Icon } from "../Icon";

export const GoogleButton: React.FC = () => {
  return (
    <button
      className={styles.wrapper}
      onClick={() => {
        signIn();
      }}
    >
      <Icon name="google" width={20} height={20} />
      Continue with Google
    </button>
  );
};
