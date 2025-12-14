"use client";

import Link from "next/link";

export default function Sidebar() {
  const handleLogout = () => {
    // cookie remove
    document.cookie = "logged-in=; Max-Age=0; path=/";
    // login page par redirect
    window.location.href = "/auth/login";
  };

  return (
    <aside className="w-64 bg-black rounded-l-3xl p-6 shadow-lg flex flex-col">
      <a
        href="https://www.uaar.edu.pk/index.php"
        target="_blank"
        rel="noopener noreferrer"
      >
        <h1 className="text-2x2 font-bold mb-7 text-white flex items-center gap-2">
          <img src="/arid-logo.png" className="w-10" />
          ARID Assistant
        </h1>
      </a>

      <nav className="flex flex-col gap-4 text-white">
        <button className="p-3 rounded-lg hover:bg-green-500 text-left">
          New Chat
        </button>

        <button className="p-3 rounded-lg hover:bg-green-500 text-left">
          Chat History
        </button>

        <button className="p-3 rounded-lg hover:bg-green-500 text-left">
          Admin Dashboard
        </button>

        <button
          onClick={handleLogout}
          className="p-3 rounded-lg mt-auto hover:bg-green-500 text-left"
        >
          Logout
        </button>
      </nav>
    </aside>
  );
}