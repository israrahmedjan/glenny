import React from 'react'
import { ShoppingCart, Mail, Phone, Twitter, Facebook, Instagram } from 'lucide-react';

function TopMenu() {
  return (
    <>
         <div className="bg-black text-white text-[14px] py-1 ">
        <div className="px-2 flex flex-col md:flex-row justify-between items-center w-full sm:max-w-[769px] lg:max-w-[1024px] xl:max-w-[1280px] 2xl:max-w-[1536px] mx-auto">
          {/* Left Side: Text */}
          <span>Welcome to Our Store! Get the best deals today.</span>

          {/* Right Side: Contact and Social Icons */}
          <div className="flex items-center space-x-4">
            {/* Email */}
            <div className="flex items-center space-x-1">
              <Mail size={16} />
              <span>email@example.com</span>
            </div>

            {/* Phone */}
            <div className="flex items-center space-x-1">
              <Phone size={16} />
              <span>+123 456 7890</span>
            </div>

            {/* Social Icons */}
            <div className="flex space-x-3">
              <a href="#" target="_blank" rel="noopener noreferrer">
                <Twitter size={16} className="hover:text-blue-400" />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <Facebook size={16} className="hover:text-blue-600" />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <Instagram size={16} className="hover:text-pink-500" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default TopMenu