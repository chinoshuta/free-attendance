import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { auth } from "./app/lib/auth/config";

export async function middleware(request: NextRequest) {
  //認証によるリダイレクトの判定
  const session = await auth();
  if (!session) {
    return NextResponse.redirect(new URL("/", request.url));
  }
  //projectが1つ以上存在するかどうかのリダイレクト判定
  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*"],
};
