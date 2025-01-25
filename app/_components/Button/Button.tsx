"use client";

import styles from "./Button.module.css";
import Link from "next/link";

type Props = {
  text: string;
  href?: string;
  onClick?: () => void;
  disabled?: boolean;
  type?: "submit" | "reset" | "button" | undefined;
};

export const Button: React.FC<Props> = ({ text, href, onClick, disabled }) => {
  return (
    <>
      {href && !disabled ? (
        <Link href={href}>
          <button
            className={styles.wrapper}
            onClick={onClick}
            disabled={disabled}
          >
            {text}
          </button>
        </Link>
      ) : (
        <button
          className={styles.wrapper}
          onClick={onClick}
          disabled={disabled}
        >
          {text}
        </button>
      )}
    </>
  );
};
