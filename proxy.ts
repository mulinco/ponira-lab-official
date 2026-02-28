import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  const host = req.headers.get("host") || "";

  // linktree.poniralab.com → /linktree
  if (host.startsWith("linktree.")) {
    const url = req.nextUrl.clone();
    url.pathname = "/linktree";
    return NextResponse.rewrite(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next|favicon.ico|.*\\..*).*)"],
};