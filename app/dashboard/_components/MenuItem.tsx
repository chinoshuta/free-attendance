"use client";

import Link from "next/link";
import styles from "./MenuItem.module.css";
import { usePathname } from "next/navigation";

type Props = {
  href: string;
  children: string;
};

export const MenuItem: React.FC<Props> = ({ href, children }) => {
  const pathName = usePathname();
  const isActive = pathName === href;
  return (
    <Link href={href}>
      <div className={styles.wrapper}>
        <div className={styles.circle} />
        <span className={isActive ? "" : styles.disabled}>{children}</span>
      </div>
    </Link>
  );
};
