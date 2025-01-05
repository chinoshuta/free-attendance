import { PrismaAdapter } from "@auth/prisma-adapter";
import NextAuth, { NextAuthConfig } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { prisma } from "@/prisma";

export const authOptions: NextAuthConfig = {
  secret: process.env.NEXTAUTH_SECRET,
  debug: true,
  session: {
    strategy: "jwt",
  },
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

export const { auth, handlers } = NextAuth(authOptions);
