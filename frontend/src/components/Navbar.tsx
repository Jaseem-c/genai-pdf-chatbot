'use client';

import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-white/90 backdrop-blur border-b border-slate-200 shadow-sm">
      <div className="container mx-auto px-6 py-4 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-500 flex items-center justify-center text-white font-bold shadow-sm">
            P
          </div>
          <Link href="/" className="text-xl font-semibold text-slate-900">
            PDF Chat RAG
          </Link>
        </div>

        <div className="flex flex-wrap items-center gap-4 text-sm font-medium text-slate-600">
          <Link href="/upload" className="transition hover:text-slate-900">
            Upload
          </Link>
          <Link href="/chat" className="transition hover:text-slate-900">
            Chat
          </Link>
        </div>
      </div>
    </nav>
  );
}
