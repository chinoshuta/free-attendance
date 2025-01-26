import styles from "./page.module.css";
import { Modal } from "@/app/_components/Modal/Modal";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/utils/auth/config";
import { SignOutButton } from "@/app/_components/Button/SignOutButton";
import { CloseButton } from "@/app/_components/Button/CloseButton";

export default async function Page() {
  const session = await getServerSession(authOptions);
  return (
    <Modal>
      <h1 className={styles.title}>アカウント設定</h1>
      <div className={styles.email}>
        <strong>メールアドレス</strong>
        {session?.user.email}
      </div>
      <div className={styles.buttons}>
        <SignOutButton />
        <CloseButton />
      </div>
    </Modal>
  );
}
