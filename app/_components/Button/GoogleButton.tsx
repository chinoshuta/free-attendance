"use client";

import Image from "next/image";
import styles from "./GoogleButton.module.css";
import { signIn } from "next-auth/react";

export const GoogleButton: React.FC = () => {
  return (
    <button
      className={styles.wrapper}
      onClick={() => {
        signIn();
      }}
    >
      <Image src="/google.svg" width={20} height={20} alt="google" />
      Continue with Google
    </button>
  );
};
