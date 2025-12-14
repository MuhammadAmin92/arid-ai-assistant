"use client";
import { useState, useEffect } from "react";

type Message = {
  role: "user" | "assistant";
  content: string;
};

export default function ChatPage() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [dark, setDark] = useState(false);

  // Load saved theme
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark");
      setDark(true);
    }
  }, []);

  // Toggle theme
  const toggleTheme = () => {
    if (dark) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setDark(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setDark(true);
    }
  };

  const sendMessage = () => {
    if (!input.trim()) return;
    const userMsg: Message = { role: "user", content: input };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setTimeout(() => {
      const aiMsg: Message = {
        role: "assistant",
        content: "How can I help you today?",
      };
      setMessages((prev) => [...prev, aiMsg]);
    }, 400);
  };

  return (
    <div className="flex flex-col h-full w-full bg-white text-black dark:bg-gray-900 dark:text-white p-4">
      {/* Header */}
      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-3 rounded-xl bg-gray-50 dark:bg-gray-800">
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`p-3 rounded-lg max-w-lg break-words ${
              msg.role === "user"
                ? "bg-green-600 text-white ml-auto"
                : "bg-white text-gray-900 dark:bg-gray-700 dark:text-gray-100 mr-auto border"
            }`}
          >
            {msg.content}
          </div>
        ))}
      </div>
      {/* Input */}
      <div className="mt-3 p-3 flex gap-2 rounded-xl border bg-white dark:bg-gray-700 dark:border-gray-600">
        <input
          type="text"
          className="flex-1 border rounded-lg p-2 bg-white dark:bg-gray-600 dark:text-white text-black"
            placeholder="+   Type your message...                                                                                                              🎤"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              sendMessage();
            }
          }}
        />    
        <button
          onClick={sendMessage}
          className="bg-green-600 hover:bg-green-700 text-white px-4 py-1 rounded-lg"
        >
          Send
        </button>
      </div>
    </div>
  );
}