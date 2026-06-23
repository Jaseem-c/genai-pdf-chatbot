'use client';

import { useCallback, useRef, useState } from 'react';
import { useUpload } from '@/hooks/useUpload';

export default function UploadBox() {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { upload, loading, error } = useUpload();
  const [success, setSuccess] = useState<string | null>(null);

  const handleUpload = useCallback(async (file: File) => {
    if (file.type !== 'application/pdf') {
      alert('Please upload a PDF file');
      return;
    }

    try {
      setSuccess(null);
      await upload(file);
      setSuccess(`${file.name} uploaded successfully!`);
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
    } catch (err) {
      console.error('Upload error:', err);
    }
  }, [upload]);

  const handleDrop = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    
    const files = e.dataTransfer.files;
    if (files.length > 0) {
      handleUpload(files[0]);
    }
  }, [handleUpload]);

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      handleUpload(files[0]);
    }
  };

  return (
    <div className="space-y-4">
      <div
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onClick={handleClick}
        className="border-4 border-dashed border-blue-300 rounded-lg p-12 text-center bg-white hover:bg-blue-50 transition cursor-pointer"
      >
        <input
          ref={fileInputRef}
          type="file"
          accept=".pdf"
          onChange={handleFileSelect}
          className="hidden"
        />
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
        {loading && <p className="mt-4 text-blue-600 font-semibold">Uploading...</p>}
      </div>

      {error && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-red-700">
          Error: {error}
        </div>
      )}

      {success && (
        <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-green-700">
          ✓ {success}
        </div>
      )}
    </div>
  );
}
