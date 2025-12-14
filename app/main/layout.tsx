// app/main/layout.tsx
import Sidebar from "@/components/Sidebar";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className="h-screen w-screen bg-cover bg-center relative"
      style={{ backgroundImage: "url('/arid-bg.jpg')" }}
    >
      {/* green overlay */}
      <div className="absolute inset-0 bg-green-900/70 backdrop-blur-sm"></div>

      {/* main glass container */}
      <div className="relative z-10 flex items-center justify-center h-full px-4">
        <div className="w-[95%] max-w-6xl h-[90%] bg-white/95 backdrop-blur-md rounded-3xl shadow-2xl flex overflow-hidden">
          {/* Sidebar alag component */}
          <Sidebar />

          {/* Chat area */}
          <main className="flex-1 p-6 bg-gray-50 rounded-r-3xl overflow-hidden">
            {children}
          </main>
        </div>
      </div>
    </div>
  );
}
