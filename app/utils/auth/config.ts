import { PrismaAdapter } from "@auth/prisma-adapter";
import { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { prisma } from "@/prisma";

export const authOptions: NextAuthOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  debug: true,
  // pages: {
  //   signIn: "/",
  // },
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID ?? "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? "",
    }),
  ],
  // callbacks: {
  //   // async jwt({ token, user }) {
  //   //   const dbUser = await prisma.user.findFirst({
  //   //     where: { email: token.email ?? "" },
  //   //   });
  //   //   if(!dbUser){

  //   //   }
  //   // },
  // },
};
