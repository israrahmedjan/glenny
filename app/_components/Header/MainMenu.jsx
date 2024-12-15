import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useDispatch, useSelector } from "react-redux";
import { ShoppingCart, Mail, Phone, Twitter, Facebook, Instagram } from 'lucide-react';
import AdvancedSearchBox from './AdvancedSearchBox';

function MainMenu() {
    const totalItems = useSelector((state) => state.cart?.TotalNumItems);
    const cartItemCount = totalItems;//5; // Example cart count
  return (
   <>
         <div className="mx-auto flex h-22 max-w-screen-xl  items-center gap-8 px-4 sm:px-6 lg:px-8">
        {/* <Link href="/" className="block text-teal-600 mt-4">
    <Image src={process.env.NEXT_PUBLIC_DOMAIN+`assets/images/logo.png`} width={250} height={220} alt="" />
    </Link> */}
        <Link href="/" className="mt-4 mb-4">

          <Image
            src={`${process.env.NEXT_PUBLIC_DOMAIN}/assets/images/logo.jpg`}
            width={186}
            height={74}
            alt="Logo"
          />
        </Link>




        <div className="flex flex-1 items-center md:justify-end mt-4">
          <nav aria-label="Global" className="hidden md:block">
            {/* <ul className="flex items-center gap-6 text-[15px] font-semibold">
              <li>
                <Link href="/" className="text-primary font-semibold transition hover:text-secondary"> Home </Link>
              </li>
              <li>
                <Link href="/about" className="text-primary transition hover:text-secondary"> About </Link>
              </li>

              <li>
                <Link
                  className="text-primary transition hover:text-secondary"
                  href={new URL(`category/3`, process.env.NEXT_PUBLIC_DOMAIN).toString()}
                >
                  Laptops
                </Link>
              </li>



              <li>
                <Link
                  className="text-primary transition hover:text-secondary"
                  href={new URL(`category/2`, process.env.NEXT_PUBLIC_DOMAIN).toString()}
                >
                  Electronics
                </Link>
              </li>


              <li>
                <Link
                  className="text-primary transition hover:text-secondary"
                  href={new URL(`category/1`, process.env.NEXT_PUBLIC_DOMAIN).toString()}
                >
                  Mobiles
                </Link>
              </li>
              <li>
                <Link
                  className="text-primary transition hover:text-secondary"
                  href={new URL(`contact`, process.env.NEXT_PUBLIC_DOMAIN).toString()}
                >
                  Contact us
                </Link>
              </li>
            </ul> */}
          </nav>

          <div className="flex items-center gap-4 border-gray-900">
            <div className="md:justify-between sm:flex sm:gap-4">
             
             {/* <div className='w-1/2'><AdvancedSearchBox /></div> */}
             <div className='flex items-center gap-3'>
              <a
                className="block rounded-md bg-secondary px-5 py-2.5 text-sm font-medium text-white transition hover:bg-teal-700"
                href="#"
              >
                Login
              </a>

              <a
                className="hidden rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-white transition hover:text-teal-600/75 sm:block"
                href="#"
              >
                Register
              </a>
              </div>
                         </div>

            
          </div>
        </div>
      </div>
   </>
  )
}

export default MainMenu