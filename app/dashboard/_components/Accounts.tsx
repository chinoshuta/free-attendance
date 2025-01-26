import Image from "next/image";
import styles from "./Accounts.module.css";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/utils/auth/config";
import Link from "next/link";

export const Accounts: React.FC = async () => {
  const session = await getServerSession(authOptions);
  return (
    <Link href="/dashboard/user">
      <div className={styles.accounts}>
        {session?.user?.image ? (
          <Image
            src={session.user.image}
            width={49}
            height={49}
            alt="user"
            style={{ borderRadius: "50%" }}
          />
        ) : (
          <div className={styles.noImage} />
        )}
        <div className={styles.grid}>
          <p className={styles.title}>アカウント設定</p>
          {session?.user.email}
        </div>
      </div>
    </Link>
  );
};
