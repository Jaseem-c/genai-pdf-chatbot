'use client';

import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-blue-600">
          PDF Chat RAG
        </Link>
        <div className="flex gap-6">
          <Link href="/upload" className="text-gray-600 hover:text-blue-600 transition">
            Upload
          </Link>
          <Link href="/chat" className="text-gray-600 hover:text-blue-600 transition">
            Chat
          </Link>
        </div>
      </div>
    </nav>
  );
}
