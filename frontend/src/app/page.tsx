'use client';

import Navbar from '@/components/Navbar';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />

      <div className="container mx-auto px-6 py-20 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] items-center">
          <div>
            <span className="inline-flex rounded-full bg-blue-100 text-blue-700 px-4 py-1 text-sm font-semibold mb-6">
              AI-powered document chat
            </span>
            <h1 className="text-5xl md:text-6xl font-semibold tracking-tight text-slate-900 max-w-3xl">
              Turn PDFs into searchable, answerable knowledge instantly.
            </h1>
            <p className="mt-6 text-lg leading-8 text-slate-600 max-w-2xl">
              Upload your PDF, index it with intelligent retrieval, and chat with your documents in real time.
              Built for fast onboarding and smooth user experience.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/upload"
                className="inline-flex items-center justify-center rounded-full bg-blue-600 px-8 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-700"
              >
                Upload your first PDF
              </Link>
              <Link
                href="/chat"
                className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-8 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-300 hover:bg-slate-50"
              >
                Go to chat
              </Link>
            </div>
          </div>

          <div className="relative rounded-[2rem] bg-gradient-to-br from-slate-900 to-blue-700 p-8 text-white shadow-2xl shadow-slate-900/20">
            <div className="space-y-4">
              <div className="rounded-3xl bg-slate-800/80 p-6 shadow-inner shadow-white/5">
                <p className="text-sm uppercase tracking-[0.22em] text-slate-300">Live document insights</p>
                <h2 className="mt-3 text-3xl font-semibold">Document Q&A in one place</h2>
                <p className="mt-4 text-sm leading-6 text-slate-200">
                  Extract answers from PDF content without manual searching. Ideal for research, contracts, and reports.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-3xl bg-slate-800/85 px-5 py-4">
                  <p className="text-sm text-slate-300">Upload</p>
                  <p className="mt-2 text-xl font-semibold">PDFs</p>
                </div>
                <div className="rounded-3xl bg-slate-800/85 px-5 py-4">
                  <p className="text-sm text-slate-300">Search</p>
                  <p className="mt-2 text-xl font-semibold">Natural language</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
