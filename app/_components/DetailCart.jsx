// components/MiniCart.js
"use client"; // Ensure client-side rendering for interactivity
import { useState } from "react";
import { AddItems } from "./redux/CartSlice";
import { useDispatch,useSelector } from "react-redux";
import Image from "next/image";
import CheckoutPage from "./checkout";

export default function DetailCart({item}) {
  const [isOpen, setIsOpen] = useState(true);
   const products = useSelector((state) => state.cart?.Cartitems);
   const TotalPrice =  useSelector((state) => state.cart?.TotalPrice);
   const TotalNumItems = useSelector((state) => state.cart?.TotalNumItems);
  const dispatch = useDispatch();
  // console.log("My Cart Items:", products);
  const toggleCart = () => {
    // Open the cart
    setIsOpen(true);
    dispatch(AddItems({...item,qty:1}));
    //console.log("My items", item);
    

    // Auto-close the cart after 3 seconds (3000 ms)
    // setTimeout(() => {
    //   setIsOpen(false);
    // }, 3000);
  };

  return (
    <div className="">
     {/* Mini Car List */}
      
    
       {/* custom script */}
       <div className='border-gray-100 border-r-2 border py-3 px-2 w-full sm:max-w-[769px] lg:max-w-[1024px] xl:max-w-[1280px] 2xl:max-w-[1536px] mt-4 mx-auto'>
          
          <div className="flex justify-between text-[20px] font-semibold mx-2 my-4">
              <h1 className="text-secondary text-[24px]">Cart items</h1>
              <span className="cursor-pointer" onClick={() => setIsOpen(false)} >X</span>
          </div>
          <hr className="border-t-2 border-gray-100 mx-0" />
          {products && (
            products.map((item,index)=>
            {
              return(<div key={index}>
                <div className="flex justify-between mx-2 gap-2 my-4 text-[14px]">
                  <span>{index+1}</span>
                  <span><Image src={item?.mainImage} width={100} height={100} alt={item.name} /></span>
                  <span className="md:w-[150px]">{item.name}</span>
                  <span>${item.price}</span>
                  <span>X</span>
                </div>
                <hr className="border-t-2 border-gray-50 mx-0" />
              </div>)
              
            })
            )
          }
          <hr className="border-t-2 border-gray-100 mx-2" />
          
          {TotalPrice && <div className="flex justify-end items-center my-3 gap-2">
            <span className="text-[16px] text-secondary font-semibold">Total Price:    </span>
            <span>${TotalPrice}</span>
            <span className="text-[16px] font-semibold"><CheckoutPage /></span>
            </div>}
      </div>
      {/* custom script end */}
        {/* <div className="p-4">
          <h2 className="text-lg font-bold">Your Cart</h2>
          <p>Items will appear here...</p>
        </div>

        <button
          onClick={() => setIsOpen(false)} // Manually close the cart
          className="bg-red-500 text-white py-1 px-4 rounded mt-4"
        >
          Close Cart
        </button> */}
      </div>
   
  );
}
