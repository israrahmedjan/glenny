import React from 'react'
import Link from 'next/link'

function SecondaryMenu() {
  return (
    <>
             <div className="bg-black max-w-screen">
            <div className="flex flex-1 h-16 items-center justify-end md:justify-between">
          <nav aria-label="Global" className="hidden md:block">


            <ul className="flex items-center gap-6 text-[15px] font-normal">
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
            </ul>
          </nav>

        </div>
        </div>
    </>
  )
}

export default SecondaryMenu