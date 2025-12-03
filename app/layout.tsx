import "./globals.css";

export const metadata = {
  title: "Arid AI Assistant",
  description: "AI Powered University Assistant",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body
  className="h-screen w-screen bg-cover bg-center bg-no-repeat relative"
  style={{ backgroundImage: "url('/arid-bg.jpg')" }}
>
  <div className="absolute inset-0 bg-green-900/70 backdrop-blur-sm"></div>

  <div className="relative z-10 flex items-center justify-center h-full px-4">
    <div className="w-[90%] max-w-6xl h-[85%] bg-white/90 backdrop-blur-md rounded-3xl shadow-2xl flex">

      {/* Sidebar */}
      <div className="w-64 bg-green/95 rounded-l-3xl p-6 shadow-lg flex flex-col">
        <h1 className="text-2xl font-bold mb-10 text-gray-800 flex items-center gap-2">
          <img src="/arid-logo.png" className="w-10" /> ARID Assistant
        </h1>


              <nav className="flex flex-col gap-3 text-gray-700">
                
                <button className="p-3 rounded-lg 
  transition-all duration-300 
  hover:bg-green-500 hover:text-white 
  hover:scale-105 hover:shadow-lg
  active:scale-95">
  New Chat
</button>

<button className="p-3 rounded-lg 
  transition-all duration-300 
  hover:bg-green-500 hover:text-white 
  hover:scale-105 hover:shadow-lg
  active:scale-95">
  Chat History
</button>

<button className="p-3 rounded-lg 
  transition-all duration-300 
  hover:bg-green-500 hover:text-white 
  hover:scale-105 hover:shadow-lg
  active:scale-95">
  Admin Dashboard
</button>

<button className="p-3 rounded-lg mt-auto
  transition-all duration-300 
  hover:bg-green-500 hover:text-white 
  hover:scale-105 hover:shadow-lg
  active:scale-95">
  Logout
</button>


              </nav>
            </div>

            {/* MAIN CHAT AREA */}
            <main className="flex-1 p-6 rounded-r-3xl overflow-hidden">
              {children}
            </main>

          </div>
        </div>
      </body>
    </html>
  );
}
