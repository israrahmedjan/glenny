import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import MiniCart from './MiniCart'

// import { useSelector } from 'react-redux';
// import MiniCart from './MiniCart';

function ProductCard({item}) {
  
  return (
    <>
    {/* <div>ProductCard{JSON.stringify(item,null,2)}</div> */}

    <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white p-2">

 
 

 
      {/* item Image */}
      <Link href={`${process.env.NEXT_PUBLIC_DOMAIN}/product/${item.pro_id}`}>      
      <Image 
        className="w-full md:h-[320px] object-cover" 
        src={item?.mainImage} 
        width={400} height={300}
        alt={item.name} 
      />
      </Link>

      
      <div className="">
        <div className='flex justify-between'>
        {/* item Title */}
        <Link href={`${process.env.NEXT_PUBLIC_DOMAIN}/product/${item.pro_id}`}>
        <h2 className="text-[18px] p-2 text-gray-800 font-normal">{item.name}</h2>
        </Link>
        
        {/* Price */}
        <p className="text-[18px] p-2 text-gray-800">${item.price}</p>
        </div>
        {/* Description */}
        <p className="text-gray-600 text-sm mt-4">
          {item.description 
            ? `${item.description.slice(0, 100)}...` 
            : item.description}

            {/* {item.description} */}
        </p>
        
        {/* Add to Cart Button */}
        <div className="mt-6">
          {/* <button className="w-full bg-secondary text-white text-sm py-2 rounded-lg hover:bg-secondary-dark transition duration-300">
            Add to Cart
            
          </button> */}
          <div className='flex justify-between'>
          {/* <MiniCart item={item}  /> */}
          
          <MiniCart item={item} />
        
          <h1 className=''>{item.categories?.title}</h1>
          </div>
        </div>

    

      </div>
    </div>
  
      </>
  )
}

export default ProductCard