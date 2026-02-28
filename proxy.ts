import { NextRequest, NextResponse } from "next/server";

export function proxy(req: NextRequest) {
  const host = req.headers.get("host") || "";

  // linktree.poniralab.com → /linktree
  if (host.startsWith("linktree.")) {
    const url = req.nextUrl.clone();
    url.pathname = "/linktree";
    return NextResponse.rewrite(url);
  }

  // studio.poniralab.com → /studio
  if (host.startsWith("studio.")) {
    const url = req.nextUrl.clone();
    url.pathname = "/studio";
    return NextResponse.rewrite(url);
  }

  // creative.poniralab.com → /creative
  if (host.startsWith("creative.")) {
    const url = req.nextUrl.clone();
    url.pathname = "/creative";
    return NextResponse.rewrite(url);
  }

  // systems.poniralab.com → /systems
  if (host.startsWith("systems.")) {
    const url = req.nextUrl.clone();
    url.pathname = "/systems";
    return NextResponse.rewrite(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next|favicon.ico|.*\\..*).*)"],
};