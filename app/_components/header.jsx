'use client'
import { useState } from 'react';
import Link from 'next/link';
import { Search } from 'lucide-react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-gray-800 text-white">
        {/* Top Bar */}
      <div className="bg-yellow-500 text-center text-black py-2">
        Free shipping on all orders over $50!
      </div>
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <div className="text-2xl font-bold border-white-100 px-2 py-2 border">
          <Link href="/">MyLogo</Link>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-4">
          <Link href="/" className="hover:text-gray-300">Home</Link>
          <Link href="/about" className="hover:text-gray-300">About</Link>
          <Link href="/services" className="hover:text-gray-300">Services</Link>
          <Link href="/contact" className="hover:text-gray-300">Contact</Link>
          <Link href="/contact" className="hover:text-gray-300"><Search /></Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'}
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-700 text-white">
          <Link href="/" className="block px-4 py-2 hover:bg-gray-600">Home</Link>
          <Link href="/about" className="block px-4 py-2 hover:bg-gray-600">About</Link>
          <Link href="/services" className="block px-4 py-2 hover:bg-gray-600">Services</Link>
          <Link href="/contact" className="block px-4 py-2 hover:bg-gray-600">Contact</Link>
        </div>
      )}
    </header>
  );
}
