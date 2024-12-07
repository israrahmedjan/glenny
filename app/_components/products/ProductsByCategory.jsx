'use client';
import { useEffect, useState } from 'react';
import fetchProducts from '../lib/helper';
import ProductCard from './ProductCard';

function ProductsByCategory({ categoryId, limit, categoryname }) {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  const fetchProducts1 = async ()=> {
   const data = await fetchProducts();
   setProducts(data)
  }

  useEffect(() => {
    fetchProducts1();
  }, []);

  return (
    <>
                  <div className='border-gray-100 border-r-2 border py-3 px-2 mx-16 my-2'>
                  <div className="grid grid-cols-4 gap-4">
                {/* <p>{JSON.stringify(plusstr)}</p> */}


               
                    {/* Sort Items  */}
                   
    
     
      {/* <pre>{JSON.stringify(products, null, 2)}</pre> */}
      {products && (
        products.map((prod,index)=>{
       return(
          <div key={index}>
          <ProductCard item={prod} />
          </div>
        
       )
   
        })
      )}
      </div>
     </div>

    </>
  );
}

export default ProductsByCategory;
