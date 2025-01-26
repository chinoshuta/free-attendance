import type { Metadata } from "next";
import styles from "./layout.module.css";
import { SideMenu } from "./_components/SideMenu";
import { prisma } from "@/prisma";
import { authOptions } from "../utils/auth/config";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "フリーランスのための勤怠管理",
  description: "",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession(authOptions);
  const projects = await prisma.project.findMany({
    where: { userId: session?.user.id ?? "" },
  });
  if (!projects.length) redirect("/project");
  return (
    <div className={styles.wrapper}>
      <SideMenu />
      <div className={styles.contents}>{children}</div>
    </div>
  );
}
