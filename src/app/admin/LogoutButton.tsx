'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function LogoutButton({ compact = false }: { compact?: boolean }) {
  const router = useRouter();
  const [busy, setBusy] = useState(false);
  async function logout() {
    setBusy(true);
    await fetch('/api/admin/logout', { method: 'POST' });
    router.replace('/admin/login');
    router.refresh();
  }
  return (
    <button
      onClick={logout}
      disabled={busy}
      className={
        compact
          ? 'text-sm text-slate-200 underline disabled:opacity-50'
          : 'w-full rounded-md bg-slate-800 hover:bg-slate-700 text-slate-100 text-sm py-2 disabled:opacity-50'
      }
    >
      {busy ? 'Signing out…' : 'Sign out'}
    </button>
  );
}
