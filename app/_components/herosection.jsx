'use client'
import Link from 'next/link';
import Image from 'next/image';


export default function HeroSection() {
  return (
    <section
      className="relative bg-cover bg-center h-screen"
      style={{ backgroundImage: "url('/path-to-your-image.jpg')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50">
      <Image 
    src="/images/heroimage-1.png" 
    alt="Description of image" 
    layout="fill"
    objectFit="cover" // Ensures the image covers the div without distortion
    objectPosition="center" // Centers the image within the div
  />
      </div>
     


      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to Our Store</h1>
        <p className="text-lg md:text-2xl mb-8">
          Discover the best products just for you.
        </p>

        {/* Buttons */}
        <div className="flex space-x-4">
          <Link href="/shop">
            <button className="bg-yellow-500 text-black px-6 py-3 rounded-md hover:bg-yellow-600">
              Shop Now
            </button>
          </Link>
          <Link href="/contact">
            <button className="bg-transparent border border-yellow-500 text-yellow-500 px-6 py-3 rounded-md hover:bg-yellow-500 hover:text-black">
              Contact Us
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
