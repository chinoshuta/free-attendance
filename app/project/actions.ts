"use server";

import { getServerSession } from "next-auth";
import z from "zod";
import { authOptions } from "../utils/auth/config";
import { redirect } from "next/navigation";
import { prisma } from "@/prisma";
import { Prisma } from "@prisma/client";

type FormState =
  | {
      errors?: {
        title?: string[] | null;
        comment?: string[] | null;
      };
      message?: string | null;
    }
  | undefined;

export const createProject = async (
  _: FormState,
  formData: FormData
): Promise<FormState> => {
  const session = await getServerSession(authOptions);
  if (!session) {
    throw Error;
  }
  const scheme = z.object({
    title: z.string().min(1, "必須項目です"),
    comment: z.string().max(300, "300文字以下で入力してください"),
  });

  const title = formData.get("title");
  const comment = formData.get("comment");
  const validate = scheme.safeParse({
    title,
    comment,
  });
  if (!validate.success) {
    return {
      errors: validate.error?.flatten().fieldErrors,
      message: validate.error.message,
    } as FormState;
  }
  const project: Prisma.ProjectUncheckedCreateInput = {
    name: title!.toString(),
    comment: comment!.toString(),
    userId: session.user.id ?? "",
  };

  await prisma.project.create({ data: project });
  redirect("/dashboard");
};
