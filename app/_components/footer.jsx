import React from 'react'

export default function Footer() {
    return (
      <footer className="relative h-auto bg-cover bg-center text-white" style={{ backgroundImage: "url('/images/footer-bg.png')" }}>
        <div className="flex flex-col justify-center items-center h-full bg-black bg-opacity-50 p-8">
          <h2 className="text-3xl font-bold mb-4">Stay Connected</h2>
          <p className="text-lg mb-6">Subscribe to our newsletter for the latest updates.</p>
          <form className="flex mb-8">
            <input
              type="email"
              placeholder="Enter your email"
              className="p-2 rounded-l-lg border-none"
            />
            <button className="bg-yellow-500 text-white font-semibold py-2 px-4 rounded-r-lg hover:bg-blue-700 transition duration-300">
              Subscribe
            </button>
          </form>
  
          {/* Links Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 w-full max-w-6xl">
            {/* Column 1 */}
            <div>
              <h3 className="font-semibold mb-2">Company</h3>
              <ul>
                <li><a href="#" className="hover:underline">About Us</a></li>
                <li><a href="#" className="hover:underline">Careers</a></li>
                <li><a href="#" className="hover:underline">Contact</a></li>
                <li><a href="#" className="hover:underline">Privacy Policy</a></li>
              </ul>
            </div>
            
            {/* Column 2 */}
            <div>
              <h3 className="font-semibold mb-2">Services</h3>
              <ul>
                <li><a href="#" className="hover:underline">Web Development</a></li>
                <li><a href="#" className="hover:underline">Design</a></li>
                <li><a href="#" className="hover:underline">SEO</a></li>
                <li><a href="#" className="hover:underline">Marketing</a></li>
              </ul>
            </div>
  
            {/* Column 3 */}
            <div>
              <h3 className="font-semibold mb-2">Resources</h3>
              <ul>
                <li><a href="#" className="hover:underline">Blog</a></li>
                <li><a href="#" className="hover:underline">Help Center</a></li>
                <li><a href="#" className="hover:underline">FAQ</a></li>
                <li><a href="#" className="hover:underline">Guides</a></li>
              </ul>
            </div>
  
            {/* Column 4 */}
            <div>
              <h3 className="font-semibold mb-2">Follow Us</h3>
              <ul>
                <li><a href="#" className="hover:underline">Facebook</a></li>
                <li><a href="#" className="hover:underline">Twitter</a></li>
                <li><a href="#" className="hover:underline">Instagram</a></li>
                <li><a href="#" className="hover:underline">LinkedIn</a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    );
  }
  
  