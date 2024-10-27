'use client';
import Image from 'next/image';

export default function ProductCard({ product }) {
  return (
    <div className="relative w-full bg-white shadow-lg rounded-lg overflow-hidden">
      {/* Product Image */}
      <div className="h-[400px] relative">
        <Image
          src={product.imageUrl}
          alt={product.title}
          layout="fill"
          objectFit="cover"
          className="absolute inset-0"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-30"></div>
      </div>

      {/* Product Details - Always Visible */}
      <div className="p-4">
        <h2 className="text-2xl font-bold">{product.title}</h2>
        <p className="text-gray-700 text-lg">{product.description}</p>
        <button className="w-[100px] py-2 mt-4 bg-yellow-500 text-white rounded hover:bg-yellow-700 transition duration-300">
          View More
        </button>
      </div>
    </div>
  );
}
