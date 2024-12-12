'use client'
import { getProductDetail } from '@/app/_components/lib/helper';
import Loader from '@/app/_components/Loader';
import ProductDetail from '@/app/_components/products/productDetail';
import ProductInfo from '@/app/_components/products/ProductInfo';
import ProductsByCategory from '@/app/_components/products/ProductsByCategory';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react'

function page() {
  const { slug } = useParams(); // Get the dynamic id from the route
  const [product,setproduct] = useState([])
  useEffect(()=>
  {
    const fetchProductDetail = async ()=>
    {
      const result = await getProductDetail(slug);
      
      setproduct(result);
      console.log(result);

    }
    fetchProductDetail();
  },[])
  return (
    <>
   
    
    <div> 
      {/* <div>Category id{slug}</div> */}
     {(product.length == 0) && (<Loader />)}
     {(product.length !=0) && (
  <ProductInfo item={product} />
     )}
{/* <div>Related Products</div> */}
<ProductsByCategory categoryId={product.cat_id} limit={4} categoryname={product.name} />
      </div>
      
    </>
  )
}

export default page