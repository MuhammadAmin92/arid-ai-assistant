interface ChatBubbleProps {
  sender: "user" | "ai";
  message: string;
}

export default function ChatBubble({ sender, message }: ChatBubbleProps) {
  const isUser = sender === "user";

  return (
    <div className={`my-2 flex ${isUser ? "justify-start" : "justify-end"}`}>
      <div
        className={`max-w-[70%] p-3 rounded-xl text-sm shadow 
          ${
            isUser
              ? "bg-green-700 text-white rounded-tl-none"
              : "bg-[#7a0010] text-white rounded-tr-none"
          }
        `}
      >
        {message}
      </div>
    </div>
  );
}
