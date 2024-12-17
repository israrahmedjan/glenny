// components/MiniCart.js
"use client"; // Ensure client-side rendering for interactivity
import { useEffect, useState } from "react";
import { AddItems,hideToggle } from "../redux/CartSlice";
import { useDispatch,useSelector } from "react-redux";
import {ShoppingBasket} from "lucide-react";
import Image from "next/image";

export default function MiniCart({item}) {
  const [isOpen, setIsOpen] = useState(false);
   const products = useSelector((state) => state.cart?.Cartitems);
   const TotalPrice = useSelector((state) => state.cart?.TotalPrice);
   const TotalNumItems = useSelector((state) => state.cart?.TotalNumItems);
   const cartstatus = useSelector((state) => state.cart?.cartstatus);
   
  const dispatch = useDispatch();
  // console.log("My Cart Items:", products);
  const toggleCart = () => {
    // Open the cart
    
    // if (!isOpen) {
    //   setIsOpen(true);
    // }
    dispatch(AddItems({...item,qty:1}));
    

    // Auto-close the cart after 3 seconds (3000 ms)
    // setTimeout(() => {
    //   setIsOpen(false);
    // }, 3000);
  };
useEffect(()=>
{
  if(isOpen)
    {
      
    }
console.log("Items added! useffect");
},[isOpen])
  return (
    <div>
     {/* Mini Car List */}
      
      {/* Add to Cart Button */}
      <button
        onClick={toggleCart}
        className="w-[120px] border-secondary border text-primary text-sm py-2 rounded-lg hover:bg-secondary-dark transition duration-300"
      >
       <div className="flex items-center justify-center gap-2">
       <span> <ShoppingBasket /></span><span>Add to Cart</span>
        </div>
      </button>

      {/* Mini Cart Drawer */}
     {/* <div>open cond{JSON.stringify(isOpen)}</div> */}
      <div
        className={`fixed z-40 top-0 right-0 w-80 h-full bg-white shadow-lg transform ${
          cartstatus ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
       {/* custom script */}
        <div className="">
          
          <div className="flex justify-between text-[16px] font-semibold mx-2 my-4">
              <h1 className="text-primary">Cart items</h1>
              <span className="cursor-pointer" onClick={() => dispatch(hideToggle())} >X</span>
          </div>
          
          <hr className="border-t-2 border-gray-100 mx-0" />
          {products && (
            products.map((item,index)=>
            {
              return(<div key={index}>
                <div className="flex justify-between mx-2 my-4 text-[12px] font-semibold">
                  <span>{index+1}</span>
                  <span><Image src={item?.mainImage} width={50} height={50} alt={item.name} /></span>
                  <span className="md:w-[150px]">{item.name}</span>
                  <span>{item.price}</span>
                  <span>X</span>
                </div>
                <hr className="border-t-2 border-gray-50 mx-0" />
              </div>)
              
            })
            )
          }
          <hr className="border-t-2 border-gray-100 mx-2" />
          {TotalPrice && <div className="flex justify-end my-3 gap-2">
            <span className="text-[16px] font-semibold">Total Price:    </span>
            <span>${TotalPrice}</span>
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
    </div>
  );
}
