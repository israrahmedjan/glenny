import { supabase } from '../lib/supabaseClient';
export default async function fetchProducts(page = 1, pageSize = 3) {
    try {

      console.log('Fetching categories...');
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
      .select('*', { count: 'exact' },) 
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