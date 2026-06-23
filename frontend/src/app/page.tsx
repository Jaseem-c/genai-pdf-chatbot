'use client';

import Navbar from '@/components/Navbar';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Navbar />
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-gray-800 mb-6">
            PDF Chat RAG
          </h1>
          <p className="text-xl text-gray-600 mb-12">
            Upload PDFs and chat with them using advanced RAG technology
          </p>
          <div className="flex gap-4 justify-center">
            <Link
              href="/upload"
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition"
            >
              Upload PDF
            </Link>
            <Link
              href="/chat"
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-8 rounded-lg transition"
            >
              Start Chat
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
