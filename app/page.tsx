import ChatWindow from "@/components/ChatWindow";

export default function Home() {
  return (
    <div className="h-full flex items-center justify-center">
      <div className="w-full h-full bg-white/80 rounded-2xl shadow-lg p-6">
        <ChatWindow />
      </div>
    </div>
  );
}
