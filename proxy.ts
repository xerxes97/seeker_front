import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const protectedPaths = ["/findings", "/profile", "/opportunities"];

export function proxy(request: NextRequest) {
  const token = request.cookies.get("access_token")?.value || request.cookies.get("_vercel_jwt")?.value;
  const cookies = request.cookies;
  console.log("Token", token);
  console.log("Cookies", cookies);
  const { pathname } = request.nextUrl;

  const isProtected = protectedPaths.some(
    (p) => pathname === p || pathname.startsWith(`${p}/`),
  );

  // if (!token && isProtected) {
  //   return NextResponse.redirect(new URL("/", request.url));
  // }

  // if (token && pathname === "/") {
  //   return NextResponse.redirect(new URL("/findings", request.url));
  // }
  // console.log()

  return NextResponse.next();
}

export const config = {
  matcher: ["/", "/findings/:path*", "/profile/:path*", "/opportunities/:path*"],
};
