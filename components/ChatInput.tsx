"use client";

import { useState, useRef } from "react";

export default function ChatInput({ onSend }: { onSend: (msg: string) => void }) {
  const [message, setMessage] = useState("");
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = () => {
    if (!message.trim()) return;
    onSend(message);
    setMessage("");
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") handleSubmit();
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t border-gray-200">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-2">
          {/* File attachment */}
          <button
            onClick={() => fileInputRef.current?.click()}
            className="p-3 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg"
            title="Attach file"
          >
            📎
          </button>
          
          <input ref={fileInputRef} type="file" className="hidden" />
          
          {/* Input field */}
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="+  Type your message...     🎤"
            className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          
          {/* Send button */}
          <button
            onClick={handleSubmit}
            disabled={!message.trim()}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed font-medium"
          >
            Send
          </button>
        </div>
        
        {/* Hint text */}
        <p className="text-xs text-gray-500 mt-2 text-center">
          Press Enter to send • Attach images, PDFs, or documents
        </p>
      </div>
    </div>
  );
}