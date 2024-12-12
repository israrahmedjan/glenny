'use client';
import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import { getCategoryDetail } from '@/app/_components/lib/helper';
import ProductsByCategory from '@/app/_components/products/ProductsByCategory';


function Page() {
  const { cat_id } = useParams(); // Get the dynamic id from the route
  const [categoryId,setCategoryId] = useState();
const [data,setdata] = useState(null);
  const getCategoryDetailHandle = async ()=>
    {
    const result = await getCategoryDetail(cat_id)
    setdata(result)  
     //.log(d);
    }

  useEffect(() => {
    setCategoryId(cat_id);
   console.log("Use effect is called 123!",categoryId);
   
    getCategoryDetailHandle();
   
    }, [categoryId]);
    
  return (
    <>

{/* <BreadCrumbs /> */}

{/* <div>Category id page</div> */}
{data && (
  <ProductsByCategory 
    categoryId={categoryId} 
    limit={10} 
    categoryname={data.title} 
  />
)}
    </>
  );
}

export default Page;
