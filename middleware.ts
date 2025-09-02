import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  if (pathname === '/' || pathname === '/home') {
    const url = req.nextUrl.clone(); url.pathname='/auth/signin'; return NextResponse.redirect(url);
  }
  return NextResponse.next();
}
