'use client';

interface PdfCardProps {
  filename: string;
  pages: number;
}

export default function PdfCard({ filename, pages }: PdfCardProps) {
  return (
    <div className="bg-white rounded-lg shadow p-4 border border-gray-200 hover:shadow-lg transition">
      <div className="flex items-start justify-between">
        <div>
          <h3 className="font-semibold text-gray-800">{filename}</h3>
          <p className="text-sm text-gray-500">{pages} pages</p>
        </div>
        <svg
          className="w-8 h-8 text-red-500"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M7 3a1 1 0 000 2h6a1 1 0 000-2H7zM4 7a1 1 0 011-1h10a1 1 0 011 1v10a2 2 0 01-2 2H6a2 2 0 01-2-2V7z" />
        </svg>
      </div>
    </div>
  );
}
