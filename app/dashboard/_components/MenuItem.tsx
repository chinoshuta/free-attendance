"use client";

import Link from "next/link";
import styles from "./MenuItem.module.css";
import { usePathname } from "next/navigation";
import { Icon, IconName } from "@/app/_components/Icon";

type Props = {
  href: string;
  children: string;
  icon: IconName;
};

export const MenuItem: React.FC<Props> = ({ href, children, icon }) => {
  const pathName = usePathname();
  const isActive = pathName === href;
  return (
    <Link href={href}>
      <div className={`${styles.wrapper} ${isActive ? "" : styles.disabled}`}>
        <Icon name={icon} width={24} height={24} />
        <span>{children}</span>
      </div>
    </Link>
  );
};
