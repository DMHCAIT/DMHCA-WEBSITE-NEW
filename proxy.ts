import { NextResponse, type NextRequest } from 'next/server';
import { verifySessionToken, ADMIN_COOKIE } from '@/lib/admin-auth';

// Protect /admin/** routes (except /admin/login). Redirect unauthenticated users.
export async function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (!pathname.startsWith('/admin')) return NextResponse.next();
  if (pathname === '/admin/login' || pathname.startsWith('/admin/login/')) return NextResponse.next();

  const token = request.cookies.get(ADMIN_COOKIE)?.value;
  const ok = await verifySessionToken(token);
  if (ok) return NextResponse.next();

  const url = request.nextUrl.clone();
  url.pathname = '/admin/login';
  url.searchParams.set('next', pathname);
  return NextResponse.redirect(url);
}

export const config = {
  matcher: ['/admin/:path*'],
};
