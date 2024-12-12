import Image from 'next/image'
import React from 'react'

function page() {
  return (
    <>
    <div className='mx-20 my-6'>
        <h1 className='text-[25px] font-semibold'>Contact Us</h1>
        <div className='flex content-center gap-5 my-6'>
            <div>
                <Image src="https://images.pexels.com/photos/3868552/pexels-photo-3868552.jpeg?auto=compress&cs=tinysrgb&w=600" 
                layout="intrinsic"
                width={1000}
                height={220}
                alt='dummy images' />
            </div>
            <div>It is a long established fact that a reader will be distracted by 
                the readable content of a page when looking at its layout. The point 
                of using Lorem Ipsum is that it has a more-or-less normal distribution 
                of letters, as opposed to using 'Content here, content here', making it 
                look like readable English. Many desktop publishing packages and web page 
                editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' 
                will uncover many web sites still in their infancy. Various versions have evolved over
                4 the years, sometimes by accident, sometimes on purpose (injected humour and the like).</div>

                

        </div>

        <div className='flex content-center gap-5 my-6'>
            
            <div>It is a long established fact that a reader will be distracted by 
                the readable content of a page when looking at its layout. The point 
                of using Lorem Ipsum is that it has a more-or-less normal distribution 
                of letters, as opposed to using 'Content here, content here', making it 
                look like readable English. Many desktop publishing packages and web page 
                editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' 
                will uncover many web sites still in their infancy. Various versions have evolved over
                4 the years, sometimes by accident, sometimes on purpose (injected humour and the like).</div>

                <div>
                <Image src="https://images.pexels.com/photos/3868552/pexels-photo-3868552.jpeg?auto=compress&cs=tinysrgb&w=600" 
                layout="intrinsic"
                width={1000}
                height={220}
                alt='dummy images' />
            </div>

        </div>
    </div>
    </>
  )
}

export default page