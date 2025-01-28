import React from 'react'
import { Menu, Search, ShoppingCart, User } from "lucide-react";

function Mobileheader() {
  return (
    <>
    <header className="fixed top-0 left-0 right-0 bg-white shadow-md border-b border-gray-200 z-50 lg:hidden">
      <div className="flex justify-between items-center px-4 py-3 sm:px-6">
        {/* Left Icon (Menu) */}
        <button className="text-secondary hover:text-blue-500">
          <Menu className="w-6 h-6 md:w-12 md:h-20" />
        </button>

        {/* Search Bar */}
        <div className="flex items-center w-full max-w-md bg-gray-100 rounded-lg px-3 py-2 mx-4">
          <Search className="text-secondary w-5 h-5 md:w-8 md:h-8 mr-2" />
          <input
            type="text"
            placeholder="Search"
            className="bg-transparent outline-none text-base w-full text-gray-700"
          />
        </div>

        {/* Right Icons */}
        <div className="flex items-center space-x-4">
          {/* Cart Icon */}
          <button className="text-secondary hover:text-blue-500">
            <ShoppingCart className="w-6 h-6 md:w-10 md:h-14" />
          </button>
          {/* User Icon */}
          <button className="text-secondary hover:text-blue-500">
            <User className="w-6 h-6 md:w-10 md:h-14" />
          </button>
        </div>
      </div>
    </header>
    </>
  )
}

export default Mobileheader