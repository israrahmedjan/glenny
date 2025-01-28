import React from 'react'
import { Home, Search, User, Settings } from "lucide-react";

function Mobilefooter() {
  return (
    <>
    <footer className="fixed bottom-0 left-0 right-0 bg-white shadow-md border-t border-gray-200 lg:hidden">
  <nav className="flex justify-around items-center h-16 md:h-24 text-sm md:text-2xl">
    {/* Home Icon */}
    <a href="/" className="flex flex-col items-center text-secondary hover:text-blue-500">
      <Home className="w-6 h-6 md:w-8 md:h-10" />
      <span>Home</span>
    </a>
    {/* Search Icon */}
    <a href="/search" className="flex flex-col items-center text-secondary hover:text-blue-500">
      <Search className="w-6 h-6 md:w-8 md:h-10" />
      <span>Search</span>
    </a>
    {/* Profile Icon */}
    <a href="/profile" className="flex flex-col items-center text-secondary hover:text-blue-500">
      <User className="w-6 h-6 md:w-8 md:h-10" />
      <span>Profile</span>
    </a>
    {/* Settings Icon */}
    <a href="/settings" className="flex flex-col items-center text-secondary hover:text-blue-500">
      <Settings className="w-6 h-6 md:w-8 md:h-10" />
      <span>Settings</span>
    </a>
  </nav>
</footer>
    </>
  )
}

export default Mobilefooter