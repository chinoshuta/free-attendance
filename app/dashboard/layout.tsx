import type { Metadata } from "next";
import styles from "./layout.module.css";
import { SideMenu } from "./_components/SideMenu";

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
      <SideMenu />
      <div className={styles.contents}>{children}</div>
    </div>
  );
}
