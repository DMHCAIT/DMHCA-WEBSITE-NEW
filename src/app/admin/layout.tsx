import Link from 'next/link';
import { isAdminAuthenticated } from '@/lib/admin-auth';
import LogoutButton from './LogoutButton';

export const metadata = { title: 'Admin – DMHCA' };

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  // Login page renders without the chrome
  // (path-based skip handled below)
  const authed = await isAdminAuthenticated();

  return (
    <div className="min-h-screen flex bg-slate-50">
      {authed ? (
        <aside className="hidden md:flex w-60 flex-col bg-slate-900 text-slate-100">
          <div className="px-5 py-5 border-b border-slate-800">
            <Link href="/admin" className="text-lg font-semibold text-white">DMHCA Admin</Link>
          </div>
          <nav className="flex-1 p-3 space-y-1 text-sm">
            <NavItem href="/admin" label="Dashboard" />
            <NavItem href="/admin/courses" label="Courses" />
            <NavItem href="/admin/faculty" label="Faculty" />
            <NavItem href="/admin/reviews" label="Reviews" />
            <NavItem href="/admin/inquiries" label="Inquiries" />
            <NavItem href="/admin/pages" label="Pages" />
            <NavItem href="/admin/media" label="Media Library" />
          </nav>
          <div className="p-3 border-t border-slate-800">
            <LogoutButton />
          </div>
        </aside>
      ) : null}

      <main className="flex-1 min-w-0">
        {authed ? (
          <header className="md:hidden flex items-center justify-between px-4 py-3 bg-slate-900 text-white">
            <Link href="/admin" className="font-semibold">DMHCA Admin</Link>
            <LogoutButton compact />
          </header>
        ) : null}
        <div className={authed ? 'p-4 md:p-8' : ''}>{children}</div>
      </main>
    </div>
  );
}

function NavItem({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      className="block rounded-md px-3 py-2 hover:bg-slate-800 transition-colors"
    >
      {label}
    </Link>
  );
}
