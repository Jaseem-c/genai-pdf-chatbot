import { useState } from 'react';
import { sendChatMessage } from '@/lib/api';

export function useChat() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const sendMessage = async (message: string) => {
    setLoading(true);
    setError(null);

    try {
      const result = await sendChatMessage(message);
      return result;
    } catch (err) {
      const message_error = err instanceof Error ? err.message : 'Chat request failed';
      setError(message_error);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return { sendMessage, loading, error };
}
