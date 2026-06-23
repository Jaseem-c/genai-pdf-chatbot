'use client';

import { useCallback } from 'react';

export default function UploadBox() {
  const handleDrop = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    
    const files = e.dataTransfer.files;
    if (files.length > 0) {
      const file = files[0];
      if (file.type === 'application/pdf') {
        console.log('PDF dropped:', file.name);
        // TODO: Upload file
      }
    }
  }, []);

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
  };

  return (
    <div
      onDrop={handleDrop}
      onDragOver={handleDragOver}
      className="border-4 border-dashed border-blue-300 rounded-lg p-12 text-center bg-white hover:bg-blue-50 transition cursor-pointer"
    >
      <svg
        className="mx-auto h-12 w-12 text-blue-400"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10"
        />
      </svg>
      <p className="mt-4 text-lg text-gray-700">
        Drag and drop your PDF here
      </p>
      <p className="text-sm text-gray-500 mt-2">or click to select</p>
    </div>
  );
}
