'use client';

import Navbar from '@/components/Navbar';
import ChatWindow from '@/components/ChatWindow';
import PdfCard from '@/components/PdfCard';

export default function ChatPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">PDFs</h2>
            <div className="space-y-3">
              <PdfCard filename="Sample.pdf" pages={50} />
            </div>
          </div>
          <div className="lg:col-span-3">
            <ChatWindow />
          </div>
        </div>
      </div>
    </main>
  );
}
