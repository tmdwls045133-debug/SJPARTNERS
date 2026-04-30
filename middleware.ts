import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  // 쿠키에서 인증 토큰 확인 (Supabase Auth는 쿠키에 저장함)
  const token = request.cookies.get("sb-sbpartners-auth-token");

  // 로그인 페이지는 누구나 접근 가능
  if (request.nextUrl.pathname === "/login") {
    return NextResponse.next();
  }

  // 그 외 페이지는 로그인 필수
  if (!token) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
};
