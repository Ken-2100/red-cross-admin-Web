import { NextResponse } from "next/server";

export async function middleware(request) {
  const path = request.nextUrl.pathname;
  const isPublicPath = path === "/";

  const token =
    request.cookies.get("__Secure-next-auth.session-token")?.value || "";
  // console.log(token);

  if (isPublicPath && token) {
    return NextResponse.redirect(new URL("/dashboard", request.nextUrl));
  }

  if (!isPublicPath && !token) {
    return NextResponse.redirect(new URL("/", request.nextUrl));
  }
}

//black list path in array

export const config = {
  matcher: [],
};
// "/", "/dashboard"