"use client";

import { signOut } from "next-auth/react";
import { Button } from "./Button";

export const SignOutButton = () => {
  return (
    <Button text="ログアウトする" theme="danger" onClick={() => signOut()} />
  );
};
