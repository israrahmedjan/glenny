import { supabase } from '../lib/supabaseClient';
export default async function fetchProducts(page = 1, pageSize = 3,orderItem) {
    try {

      console.log('Fetching categories...',orderItem);
      const start = (page - 1) * pageSize;
      const end = start + pageSize - 1;
      // const { data, error } = await supabase
      // .from('products')
      // .select(`
      //     pro_id,
      //     name,
      //     price,
      //     cat_id,
      //     slug,
      //     mainImage,
      //     categories (
      //         id,
      //         title
      //     )
      // `)
      // .order('pro_id', { ascending: true });


      const { data, error } = await supabase
      .from('products')
      .select(`
            pro_id,
            name,
            price,
            cat_id,
            slug,
            mainImage,
            categories (
                id,
                title
            )
        `)
      .range(start, end);
    
//.eq('cat_id', 3)
      if (error) {
        console.log('Error fetching categories:', error.message);
      //  setError(error.message);
        return;
      }

      console.log('Fetched data:', data);
      return data;
    } catch (err) {
      console.error('Unexpected error:', err);
      setError('An unexpected error occurred.');
    }
  }

  export async function getProductCount(categoryId) {
    try {
      // Call the Supabase RPC function
      const { data, error } = await supabase.rpc('get_product_count_by_category', {
        category_id: categoryId, // Pass the parameter as an object
      });
  
      // Check for errors in the RPC response
      if (error) {
        console.error('Error calling RPC:', error.message);
        return null; // Return null if an error occurs
      }
  
      return data; // Return the count of products
    } catch (err) {
      // Handle unexpected errors
      console.error('Unexpected error:', err.message);
      return null; // Return null if an unexpected error occurs
    }
  }
  