'use client';

import Navbar from '@/components/Navbar';
import UploadBox from '@/components/UploadBox';

export default function UploadPage() {
  return (
    <main className="min-h-screen">
      <Navbar />

      <section className="container mx-auto px-6 py-16 lg:py-20">
        <div className="mx-auto max-w-4xl rounded-[2rem] border border-slate-200/80 bg-white/95 p-8 shadow-2xl shadow-slate-900/10">
          <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-blue-600">Upload center</p>
              <h1 className="mt-3 text-4xl font-semibold text-slate-900">
                Upload and index your PDF documents
              </h1>
            </div>
            <p className="text-sm text-slate-500 max-w-xl">
              Drag files in or click to select. The PDF will be processed and indexed for intelligent chat and retrieval.
            </p>
          </div>

          <UploadBox />
        </div>
      </section>
    </main>
  );
}
