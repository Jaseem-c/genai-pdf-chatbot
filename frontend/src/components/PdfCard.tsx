'use client';

interface PdfCardProps {
  filename: string;
  pages: number;
  onSelect?: (filename: string) => void;
  isSelected?: boolean;
}

export default function PdfCard({ filename, pages, onSelect, isSelected = false }: PdfCardProps) {
  return (
    <div
      onClick={() => onSelect?.(filename)}
      className={`rounded-lg shadow p-4 border transition cursor-pointer ${
        isSelected
          ? 'bg-blue-50 border-blue-400 shadow-lg'
          : 'bg-white border-gray-200 hover:shadow-lg hover:border-blue-200'
      }`}
    >
      <div className="flex items-start justify-between gap-2">
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-gray-800 truncate">{filename}</h3>
          <p className="text-sm text-gray-500">{pages} pages</p>
        </div>
        <button
          onClick={(e) => {
            e.stopPropagation();
            // TODO: Delete PDF
          }}
          className="flex-shrink-0 p-1 hover:bg-red-50 rounded"
        >
          <svg
            className="w-5 h-5 text-red-500"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M7 3a1 1 0 000 2h6a1 1 0 000-2H7zM4 7a1 1 0 011-1h10a1 1 0 011 1v10a2 2 0 01-2 2H6a2 2 0 01-2-2V7z" />
          </svg>
        </button>
      </div>
    </div>
  );
}
