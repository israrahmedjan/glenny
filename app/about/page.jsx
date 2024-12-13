import Image from 'next/image'
import React from 'react'

function page() {
  return (
    <>
    <div className='mx-20 my-6'>
        <h1 className='text-[25px] font-semibold'>About Us</h1>
        <div className="flex flex-wrap content-end gap-6 my-6">
    <div className="md:w-[47%]">
        <Image 
            src={`${process.env.NEXT_PUBLIC_DOMAIN}/assets/images/about.jpeg`}
            layout="intrinsic"
            width={1000}
            height={220}
            alt="dummy images"
        />
    </div>
    <div className="md:w-[50%]">
        <h1 className='text-[20px] font-semibold'>Why do we use it? </h1>
        It is a long established fact that a reader will be distracted by 
        the readable content of a page when looking at its layout. The point 
        of using Lorem Ipsum is that it has a more-or-less normal distribution 
        of letters, as opposed to using 'Content here, content here', making it 
        look like readable English. Many desktop publishing packages and web page 
        editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' 
        will uncover many web sites still in their infancy. Various versions have evolved over
        the years, sometimes by accident, sometimes on purpose (injected humour and the like).
    </div>
</div>

<div className="flex flex-wrap content-end gap-6 my-6">
   
    <div className="md:w-[50%]">
        <h1 className='text-[20px] font-semibold'>Where does it come from? </h1>
        It is a long established fact that a reader will be distracted by 
        the readable content of a page when looking at its layout. The point 
        of using Lorem Ipsum is that it has a more-or-less normal distribution 
        of letters, as opposed to using 'Content here, content here', making it 
        look like readable English. Many desktop publishing packages and web page 
        editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' 
        will uncover many web sites still in their infancy. Various versions have evolved over
        the years, sometimes by accident, sometimes on purpose (injected humour and the like).
    </div>
    <div className="md:w-[47%]">
        <Image 
            src={`${process.env.NEXT_PUBLIC_DOMAIN}/assets/images/about2.jpeg`}
            layout="intrinsic"
            width={1000}
            height={220}
            alt="dummy images"
        />
    </div>
</div>
    </div>
    </>
  )
}

export default page