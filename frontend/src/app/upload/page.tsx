'use client';

import Navbar from '@/components/Navbar';
import UploadBox from '@/components/UploadBox';

export default function UploadPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Navbar />
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-800 mb-8">Upload PDF</h1>
          <UploadBox />
        </div>
      </div>
    </main>
  );
}
