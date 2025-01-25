import { getServerSession } from "next-auth";
import { GoogleButton } from "./_components/Button/GoogleButton";
import styles from "./page.module.css";
import { authOptions } from "./utils/auth/config";
import { redirect } from "next/navigation";

export default async function Home() {
  const session = await getServerSession(authOptions);
  if (session) {
    redirect("/dashboard");
  }
  return (
    <section className={styles.wrapper}>
      <h1 className={styles.title}>フリーランスのための勤怠管理</h1>
      <GoogleButton />
    </section>
  );
}
