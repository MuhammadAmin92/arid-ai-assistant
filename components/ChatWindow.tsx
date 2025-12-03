"use client";

import { useState } from "react";
import ChatBubble from "./ChatBubble";
import ChatInput from "./ChatInput";

export default function ChatWindow() {
  const [messages, setMessages] = useState<{ sender: "user" | "ai"; message: string }[]>([]);

  function handleSendMessage(msg: string) {
    setMessages((prev) => [...prev, { sender: "user", message: msg }]);

    // AI dummy response (later replace with backend)
    setTimeout(() => {
      setMessages((prev) => [...prev, { sender: "ai", message: "Processing your query..." }]);
    }, 500);
  }

  return (
    <div className="flex flex-col h-full">
      
      {/* Messages */}
      <div className="flex-1 overflow-y-auto bg-white rounded p-4 shadow-sm">
        {messages.length === 0 && (
          <p className="text-gray-500 text-center">Start your chat…</p>
        )}

        {messages.map((m, i) => (
          <ChatBubble key={i} sender={m.sender} message={m.message} />
        ))}
      </div>

      <ChatInput onSend={handleSendMessage} />
    </div>
  );
}

