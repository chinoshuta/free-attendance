"use client";

import styles from "./Button.module.css";
import Link from "next/link";

export type ButtonTheme = "primary" | "secondary" | "danger";

type Props = {
  text: string;
  href?: string;
  onClick?: () => void;
  disabled?: boolean;
  theme?: ButtonTheme;
  type?: "submit" | "reset" | "button" | undefined;
};

export const Button: React.FC<Props> = ({
  text,
  href,
  onClick,
  disabled,
  type,
  theme = "primary",
}) => {
  return (
    <>
      {href && !disabled ? (
        <Link href={href}>
          <button
            className={`${styles.wrapper} ${styles[theme]}`}
            onClick={onClick}
            disabled={disabled}
            type={type}
          >
            {text}
          </button>
        </Link>
      ) : (
        <button
          className={`${styles.wrapper} ${styles[theme]}`}
          onClick={onClick}
          disabled={disabled}
        >
          {text}
        </button>
      )}
    </>
  );
};
