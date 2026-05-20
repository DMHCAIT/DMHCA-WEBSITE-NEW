'use client';

import { useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

export default function LoginPage() {
  const router = useRouter();
  const params = useSearchParams();
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const res = await fetch('/api/admin/login', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ password }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        setError(data.error || 'Login failed');
        return;
      }
      const next = params?.get('next') || '/admin';
      router.replace(next);
      router.refresh();
    } catch {
      setError('Network error');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 p-4">
      <form onSubmit={onSubmit} className="w-full max-w-sm bg-white rounded-2xl shadow-xl p-8 border border-slate-200">
        <div className="mb-6 text-center">
          <h1 className="text-2xl font-semibold text-slate-900">DMHCA Admin</h1>
          <p className="text-sm text-slate-500 mt-1">Sign in to manage the website</p>
        </div>

        <label className="block text-sm font-medium text-slate-700 mb-1">Password</label>
        <input
          type="password"
          autoFocus
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full rounded-lg border border-slate-300 px-3 py-2 text-base focus:outline-none focus:ring-2 focus:ring-sky-500"
        />

        {error && <div className="mt-3 text-sm text-red-600">{error}</div>}

        <button
          type="submit"
          disabled={loading || !password}
          className="mt-5 w-full rounded-lg bg-sky-700 hover:bg-sky-800 disabled:bg-slate-400 text-white font-medium py-2.5 transition-colors"
        >
          {loading ? 'Signing in…' : 'Sign in'}
        </button>

        <p className="text-xs text-slate-400 text-center mt-6">
          Set <code>ADMIN_PASSWORD</code> and <code>ADMIN_SECRET</code> in <code>.env.local</code>.
        </p>
      </form>
    </div>
  );
}
