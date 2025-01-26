"use client";

import Form from "next/form";
import { Button } from "../_components/Button/Button";
import styles from "./page.module.css";
import { TextFiled } from "../_components/Form/TextField";
import { TextArea } from "../_components/Form/TextArea";
import { useActionState } from "react";
import { createProject } from "./actions";

export default function Home() {
  const [state, formAction, pending] = useActionState(createProject, {
    message: null,
    errors: { title: null, comment: null },
  });

  return (
    <>
      <section className={styles.container}>
        <div className={styles.wrapper}>
          <h1>プロジェクト登録</h1>
          <Form action={formAction}>
            <TextFiled
              name="title"
              title="プロジェクト名"
              placeholder="Project1"
              message={state?.errors?.title?.[0]}
            />
            <TextArea name="comment" title="コメント" rows={5} />
            <div className={styles.buttonWrapper}>
              <Button text="保存する" type="submit" disabled={pending} />
            </div>
          </Form>
        </div>
      </section>
    </>
  );
}
