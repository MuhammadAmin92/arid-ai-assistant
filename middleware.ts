// middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const loggedIn = req.cookies.get("logged-in")?.value;
  const url = req.nextUrl.clone();

  // If not logged in and trying to access /main/* → send to login
  if (!loggedIn && url.pathname.startsWith("/main")) {
    url.pathname = "/auth/login";
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/main/:path*"],
};
