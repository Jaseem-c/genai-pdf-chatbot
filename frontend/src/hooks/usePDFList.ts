import { useState, useEffect } from 'react';
import { getPDFList } from '@/lib/api';

interface PDF {
  filename: string;
  path: string;
  size: number;
  pages: number;
}

export function usePDFList() {
  const [pdfs, setPDFs] = useState<PDF[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPDFs = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await getPDFList();
        setPDFs(data);
      } catch (err) {
        const message = err instanceof Error ? err.message : 'Failed to fetch PDFs';
        setError(message);
        setPDFs([]);
      } finally {
        setLoading(false);
      }
    };

    fetchPDFs();
  }, []);

  return { pdfs, loading, error };
}
