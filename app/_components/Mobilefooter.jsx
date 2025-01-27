import React from 'react'
import { Home, Search, User, Settings } from "lucide-react";

function Mobilefooter() {
  return (
    <>
      <footer className="fixed bottom-0 left-0 right-0 bg-white shadow-md border-t border-gray-200">
      <nav className="flex justify-around items-center h-16">
        {/* Home Icon */}
        <a href="/" className="flex flex-col items-center text-secondary hover:text-blue-500">
          <Home className="w-6 h-6" />
          <span className="text-xs">Home</span>
        </a>
        {/* Search Icon */}
        <a href="/search" className="flex flex-col items-center text-secondary hover:text-blue-500">
          <Search className="w-6 h-6" />
          <span className="text-xs">Search</span>
        </a>
        {/* Profile Icon */}
        <a href="/profile" className="flex flex-col items-center text-secondary hover:text-blue-500">
          <User className="w-6 h-6" />
          <span className="text-xs">Profile</span>
        </a>
        {/* Settings Icon */}
        <a href="/settings" className="flex flex-col items-center text-secondary hover:text-blue-500">
          <Settings className="w-6 h-6" />
          <span className="text-xs">Settings</span>
        </a>
      </nav>
    </footer>
    </>
  )
}

export default Mobilefooter