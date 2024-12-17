import React, { useState } from 'react'
import Link from 'next/link'
import { ShoppingCart } from 'lucide-react';
import { useDispatch, useSelector } from "react-redux";

function SecondaryMenu() {
    // State to track whether the menu is open
    const totalItems = useSelector((state) => state.cart?.TotalNumItems);
    const TotalPrice =  useSelector((state) => state.cart?.TotalPrice);
    const cartItemCount = totalItems;//5; // Example cart count
    const [menuOpen, setMenuOpen] = useState(false);

    // Function to toggle menu
    const toggleMenu = () => {
      setMenuOpen((prev) => !prev);
    };
  return (
    <>
             
             <div className="bg-black  hidden md:block">
             <div className="flex h-16 items-center justify-between px-2 w-full sm:max-w-[769px] lg:max-w-[1024px] xl:max-w-[1280px] 2xl:max-w-[1536px] mx-auto">         
               <nav aria-label="Global" className="">
              
            <ul className="flex gap-12 text-[14px]  text-white font-normal uppercase">
              <li className=''>
                <Link href="/" className="transition hover:text-secondary"> Home </Link>
              </li>
              <li className=''>
                <Link href="/about" className="transition hover:text-secondary"> About </Link>
              </li>

              <li className=''>
                <Link
                  className="transition hover:text-secondary"
                  href={new URL(`category/3`, process.env.NEXT_PUBLIC_DOMAIN).toString()}
                >
                  Laptops
                </Link>
              </li>



              <li className=''>
                <Link
                  className="transition hover:text-secondary"
                  href={new URL(`category/2`, process.env.NEXT_PUBLIC_DOMAIN).toString()}
                >
                  Electronics
                </Link>
              </li>


              <li className=''>
                <Link
                  className="transition hover:text-secondary"
                  href={new URL(`category/1`, process.env.NEXT_PUBLIC_DOMAIN).toString()}
                >
                  Mobiles
                </Link>
              </li>
              <li className=''>
                <Link
                  className="transition hover:text-secondary"
                  href={new URL(`contact`, process.env.NEXT_PUBLIC_DOMAIN).toString()}
                >
                  Contact us
                </Link>
              </li>
            </ul>
           
              </nav>
              <div className="flex flex-row justify-center items-center w-1/4 h-16 text-white  bg-secondary">
          <div className='text-[18px] mx-5'>
         {(TotalPrice>0) ? <span>Total Price : ${TotalPrice}</span>:<span>Empty Cart - $0</span>}
         </div>
         
          <div><ShoppingCart size={36} /></div>
          {cartItemCount > 0 && (
                  <div className="relative bottom-2 right-2 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                    {cartItemCount}
                  </div>
                )}
          
          </div>
         
        </div>
        </div>
      {/* Mobile Responsive Script md:hidden */}
      <div className="flex items-center w-full h-12 bg-black border-b-[1px] border-secondary  text-white md:hidden">
        <div className="flex justify-around w-full mx-auto sm:mx-0">
          <button
            onClick={toggleMenu}
            className="w-1/3 block rounded bg-primary-100 p-2.5 text-primary-600 transition hover:text-primary-600/75"
          >
            <span className="sr-only">Toggle menu</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="size-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
          <div className="flex flex-row justify-center items-center w-1/2 h-12 text-white font-normal  bg-secondary">
          <div className='text-[14px] mx-5'>
         {(TotalPrice>0) ? <span>Total Price : ${TotalPrice}</span>:<span>Empty Cart - $0</span>}
         </div>
         
          <div><ShoppingCart size={26} /></div>
          {cartItemCount > 0 && (
                  <div className="relative bottom-2 right-2 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                    {cartItemCount}
                  </div>
                )}
          
          </div>
        </div>
      </div>

      {/* Conditional rendering for the menu */}
      {menuOpen && (
        <div className="bg-black text-white font-normal p-4 md:hidden">
          <ul>
            <li className=" border-white border-b-[1px] py-2"><Link href="/" className="transition hover:text-secondary"> Home </Link></li>
            <li className="border-white border-b-[1px] py-2"><Link href="/about" className="transition hover:text-secondary"> About </Link></li>
            <li className="border-white border-b-[1px] py-2"><Link
                  className="transition hover:text-secondary"
                  href={new URL(`category/3`, process.env.NEXT_PUBLIC_DOMAIN).toString()}
                >
                  Laptops
                </Link></li>
          </ul>
        </div>
      )}
      {/* Mobile Responsive Script End */}
    </>
  )
}

export default SecondaryMenu