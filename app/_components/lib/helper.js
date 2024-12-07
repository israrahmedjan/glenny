import { supabase } from '../lib/supabaseClient';
export default async function fetchProducts() {
    try {
      console.log('Fetching categories...');
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
      .eq('cat_id', 2)
      .order('price', { ascending: true });

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