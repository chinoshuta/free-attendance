import type { Metadata } from "next";
import styles from "./layout.module.css";
import { MenuItem } from "./_components/MenuItem";

export const metadata: Metadata = {
  title: "フリーランスのための勤怠管理",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.menu}>
        <MenuItem icon="clock" href="/dashboard/stamp">
          勤怠打刻
        </MenuItem>
        <MenuItem icon="calendar" href="/dashboard/edit">
          勤怠管理
        </MenuItem>
        <MenuItem icon="project" href="/dashboard/project">
          プロジェクト管理
        </MenuItem>
      </div>
      <div className={styles.contents}>{children}</div>
    </div>
  );
}
