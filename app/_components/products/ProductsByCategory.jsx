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
    <div>
                  <div className='md:mx-12 border-gray-50 border rounded-md px-2'>
                {/* <p>{JSON.stringify(plusstr)}</p> */}


                <div className='md:mx-12 border-gray-50 border rounded-md px-2'>
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

    </div>
  );
}

export default ProductsByCategory;
