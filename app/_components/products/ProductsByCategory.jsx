'use client';
import { useEffect, useState } from 'react';
import fetchProducts from '../lib/helper';

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
      <h1>Products by Category </h1>
    
     
      <pre>{JSON.stringify(products, null, 2)}</pre>
    </div>
  );
}

export default ProductsByCategory;
