'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import ChatWindow from '@/components/ChatWindow';
import PdfCard from '@/components/PdfCard';
import { usePDFList } from '@/hooks/usePDFList';

export default function ChatPage() {
  const { pdfs, loading, error } = usePDFList();
  const [selectedPDF, setSelectedPDF] = useState<string | null>(null);

  return (
    <main className="min-h-screen">
      <Navbar />

      <section className="container mx-auto px-6 py-12 lg:py-16">
        <div className="grid gap-8 xl:grid-cols-[0.95fr_1.4fr]">
          <aside className="rounded-[2rem] border border-slate-200/70 bg-white/95 p-6 shadow-xl shadow-slate-900/5">
            <div className="flex items-center justify-between gap-4 mb-6">
              <div>
                <h2 className="text-2xl font-semibold text-slate-900">Document library</h2>
                <p className="mt-1 text-sm text-slate-500">
                  Select a PDF to start contextual chat.
                </p>
              </div>
              <span className="inline-flex rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-blue-700">
                {pdfs.length} docs
              </span>
            </div>

            <div className="space-y-3">
              {loading && <p className="text-slate-600">Loading PDFs...</p>}
              {error && <p className="text-red-600 text-sm">{error}</p>}
              {!loading && pdfs.length === 0 && (
                <p className="text-slate-500 text-sm">No PDFs uploaded yet. Add one from the Upload page.</p>
              )}
              {pdfs.map((pdf) => (
                <PdfCard
                  key={pdf.filename}
                  filename={pdf.filename}
                  pages={pdf.pages}
                  onSelect={setSelectedPDF}
                  isSelected={selectedPDF === pdf.filename}
                />
              ))}
            </div>
          </aside>

          <div>
            <ChatWindow selectedPDF={selectedPDF} />
          </div>
        </div>
      </section>
    </main>
  );
}
