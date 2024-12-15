import { NextResponse } from "next/server";

export function middleware(request) {
  const { pathname } = request.nextUrl; // Get the current path

  const token = request.cookies.get("accessToken");
  // If user is not logged in and trying to access the dashboard, redirect to login
  if (!token && pathname.startsWith("/dashboard")) {
    const loginUrl = new URL("/login", request.url);
    return NextResponse.redirect(loginUrl);
  }

  // If user is logged in and trying to access the login page, redirect to home
  if (token && pathname === "/login") {
    console.log("here");
    const homeUrl = new URL("/", request.url);
    return NextResponse.redirect(homeUrl);
  }

  // Continue with the request
  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*", "/login"], // Apply middleware to these paths
};
