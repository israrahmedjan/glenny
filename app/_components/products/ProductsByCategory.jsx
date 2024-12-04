'use client';
import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabaseClient';

function ProductsByCategory({ categoryId, limit, categoryname }) {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  async function fetchCategory() {
    try {
      console.log('Fetching categories...');
      const { data, error } = await supabase
        .from('Category') // Ensure this matches your Supabase table name
        .select('*'); // Fetch all columns

      if (error) {
        console.error('Error fetching categories:', error.message);
        setError(error.message);
        return;
      }

      console.log('Fetched data:', data);
      setProducts(data);
    } catch (err) {
      console.error('Unexpected error:', err);
      setError('An unexpected error occurred.');
    }
  }

  useEffect(() => {
    fetchCategory();
  }, []);

  return (
    <div>
      <h1>Products by Category 22222222222 </h1>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <pre>{JSON.stringify(products, null, 2)}</pre>
    </div>
  );
}

export default ProductsByCategory;
