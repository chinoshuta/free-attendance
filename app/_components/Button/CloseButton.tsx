"use client";

import { useRouter } from "next/navigation";
import { Button, ButtonTheme } from "./Button";

type Props = {
  theme?: ButtonTheme;
};

export const CloseButton: React.FC<Props> = ({ theme = "primary" }) => {
  const router = useRouter();
  return <Button text="戻る" theme={theme} onClick={() => router.back()} />;
};
