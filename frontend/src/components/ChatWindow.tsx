'use client';

import { useState } from 'react';
import ChatInput from './ChatInput';
import MessageBubble from './MessageBubble';
import { useChat } from '@/hooks/useChat';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'assistant';
  timestamp: Date;
}

interface ChatWindowProps {
  selectedPDF?: string | null;
}

export default function ChatWindow({ selectedPDF }: ChatWindowProps) {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: 'Hello! How can I help you with your PDF?',
      sender: 'assistant',
      timestamp: new Date(),
    },
  ]);
  const { sendMessage, loading, error } = useChat();

  const handleSendMessage = async (text: string) => {
    const userMessage: Message = {
      id: Date.now().toString(),
      text,
      sender: 'user',
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, userMessage]);

    try {
      const response = await sendMessage(text);
      const assistantMessage: Message = {
        id: Date.now().toString() + '-assistant',
        text: response.response,
        sender: 'assistant',
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, assistantMessage]);
    } catch (err) {
      const errorMessage: Message = {
        id: Date.now().toString() + '-error',
        text: 'Sorry, I could not get a response. Please try again.',
        sender: 'assistant',
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, errorMessage]);
    }
  };

  return (
    <div className="flex flex-col h-96 bg-white rounded-lg shadow-lg">
      <div className="border-b border-gray-200 p-4">
        <h2 className="text-lg font-semibold text-gray-800">
          {selectedPDF ? `Chat with: ${selectedPDF}` : 'Select a PDF to chat'}
        </h2>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {!selectedPDF && (
          <div className="flex items-center justify-center h-full">
            <p className="text-gray-500 text-center">
              Select a PDF from the sidebar to start chatting
            </p>
          </div>
        )}
        {messages.map((msg) => (
          <MessageBubble key={msg.id} message={msg} />
        ))}
      </div>

      {selectedPDF && (
        <div>
          {error && (
            <div className="px-4 py-2 text-sm text-red-600 bg-red-50 border border-red-200">
              {error}
            </div>
          )}
          <ChatInput onSend={handleSendMessage} />
          {loading && (
            <div className="px-4 py-2 text-sm text-gray-600">Waiting for response...</div>
          )}
        </div>
      )}
    </div>
  );
}
