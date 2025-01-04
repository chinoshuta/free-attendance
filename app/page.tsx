import { GoogleButton } from "./_components/Button/GoogleButton";
import styles from "./page.module.css";

export default function Home() {
  return (
    <section className={styles.wrapper}>
      <h1 className={styles.title}>フリーランスのための勤怠管理</h1>
      <GoogleButton />
    </section>
  );
}
