import { supabase } from '../lib/supabaseClient';
export default async function fetchProducts(page = 1, pageSize = 3,orderItem,cat_id=3) {
    try {

      const start = (page - 1) * pageSize;
      const end = start + pageSize - 1;

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
      .range(start, end)
      .order(orderItem.ordername, { ascending: orderItem.asc }) 
      .eq('cat_id', cat_id);
    
//.eq('cat_id', 3)
      if (error) {
        console.log('Error fetching categories:', error.message);
      //  setError(error.message);
        return;
      }
if(cat_id)
{
  const PageCount = await getProductCount(cat_id);
  console.log("Count pages", PageCount);
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
      //  console.error('Error calling RPC:', error.message);
        return null; // Return null if an error occurs
      }
  
      return data; // Return the count of products
    } catch (err) {
      // Handle unexpected errors
      console.error('Unexpected error:', err.message);
      return null; // Return null if an unexpected error occurs
    }
  }
  export async function getProductDetail(prod_id) {

    try {

     
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
      .eq('pro_id',prod_id);
    
//.eq('cat_id', 3)
      if (error) {
        console.log('Error fetching categories:', error.message);
      //  setError(error.message);
        return;
      }

      console.log('Fetched data:', data);
      return data[0];
    } catch (err) {
      console.error('Unexpected error:', err);
      setError('An unexpected error occurred.');
    }

  }

  export async function getCategoryDetail(cat_id) {

    try {

     
      const { data, error } = await supabase
      .from('categories')
      .select(`
            id,
            title,
            description,
            slug
        `)
      .eq('id',cat_id);
    
//.eq('cat_id', 3)
      if (error) {
        console.log('Error fetching categories:', error.message);
      //  setError(error.message);
        return;
      }

      console.log('caregory data:', data);
      return data[0];
    } catch (err) {
      console.error('Unexpected error:', err);
      setError('An unexpected error occurred.');
    }

  }
  
  export const searchProductsByName = async (query)=>
  {

    try {
      const { data, error } = await supabase
        .from('products')
        .select('*') // Replace with specific columns if needed
        .ilike('name', `%${query}%`); // Search for names matching the query
  
      if (error) {
        console.error('Error fetching products:', error.message);
        return [];
      }
  
      return data; // Returns the matching products
    } catch (err) {
      console.error('Unexpected error:', err.message);
      return [];
    }

  }