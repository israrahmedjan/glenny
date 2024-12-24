'use client'
import { searchProductsByName } from '@/app/_components/lib/helper';
import Loader from '@/app/_components/Loader';
import ProductCard from '@/app/_components/products/ProductCard';
import ProductsByCategory from '@/app/_components/products/ProductsByCategory';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react'

function page() {
  const [products,setproducts] = useState([]);
  const [loading, setloading] = useState(false);
    let {name} = useParams();
    
    if (name) {
        let decodedValue = decodeURIComponent(name); // Decode %20 to space
        name = decodedValue.replace(/%/g, ''); // Remove any %
       // console.log(cleanValue); // Cleaned value
      }

     const fetchProducts = async (searchText)=>
     {
      if(name != "")
      {
       setloading(true);  
       let result = await searchProductsByName(searchText);
         setproducts(result)
         setloading(false);
      }
   
     }   
   useEffect(()=>{
    fetchProducts(name);
 //   console.log(searchText);
   },[name])   
  return (
    <>
    <div className='border-gray-100 border-r-2 border py-3 px-2 w-full sm:max-w-[769px] lg:max-w-[1024px] xl:max-w-[1280px] 2xl:max-w-[1536px] mt-4 mx-auto'>
    <h1 className="text-[25px] text-secondary font-semibold ml-2">Search Products : {name}</h1>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
    {loading && (<div><Loader /></div>)}
    {(products.length>0) && 
    
    products.map((prod,index)=>{
        return (
            <div key={index}>
              <ProductCard item={prod} />
            </div>

          )
    })
    }
    {/* <div>{JSON.stringify(products,null,2)}</div> */}
    </div>
 </div>
    
    {(products.length !=0) &&
    <ProductsByCategory categoryId={products[0].cat_id} limit={4} categoryname={`Realted Products : - ${products[0].name}`} />
   
}
    </>
  )
}

export default page