"use client";

import { useState } from "react";

export default function ChatInput({ onSend }: { onSend: (msg: string) => void }) {
  const [message, setMessage] = useState("");

  function handleSubmit() {
    if (message.trim() === "") return;
    onSend(message);
    setMessage(""); 
  }

  return (
    <div className="flex gap-3 mt-4">
      <input
        type="text"
        placeholder="Ask something..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="flex-1 border border-gray-300 rounded p-3"
      />
      <button
        onClick={handleSubmit}
        className="bg-blue-600 text-white px-4 rounded"
      >
        Send
      </button>
    </div>
  );
}
