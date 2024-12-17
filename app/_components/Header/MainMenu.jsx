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
         <div className="flex flex-col sm:flex-row h-22 items-center gap-0 sm:gap-8 w-full sm:max-w-[769px] lg:max-w-[1024px] xl:max-w-[1280px] 2xl:max-w-[1536px] mx-auto">
        {/* <Link href="/" className="block text-teal-600 mt-4">
    <Image src={process.env.NEXT_PUBLIC_DOMAIN+`assets/images/logo.png`} width={250} height={220} alt="" />
    </Link> */}
 <Link href="/" className="block mt-4 mb-4">
  <Image
    src={`${process.env.NEXT_PUBLIC_DOMAIN}/assets/images/logo.jpg`}
    width={186} // default width for desktop
    height={74} // default height for desktop
    alt="Logo"
    className="w-[120px] h-[50px] md:w-[186px] md:h-[74px]" // Responsive sizes
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
            <div className="md:justify-between sm:flex sm:gap-0">
             
          <AdvancedSearchBox />
             <div className='flex items-center justify-around gap-3 mt-2 mb-2'>
              <a
                className="rounded-md bg-secondary px-5 py-2.5 text-sm font-medium text-white transition hover:bg-teal-700"
                href="#"
              >
                Login
              </a>

              <a
                className="rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-white transition hover:text-teal-600/75 sm:block"
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