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
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">PDFs</h2>
            <div className="space-y-3">
              {loading && <p className="text-gray-600">Loading PDFs...</p>}
              {error && <p className="text-red-600 text-sm">{error}</p>}
              {pdfs.length === 0 && !loading && (
                <p className="text-gray-500 text-sm">No PDFs uploaded yet</p>
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
          </div>
          <div className="lg:col-span-3">
            <ChatWindow selectedPDF={selectedPDF} />
          </div>
        </div>
      </div>
    </main>
  );
}
