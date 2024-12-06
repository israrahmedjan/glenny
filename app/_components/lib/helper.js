import { supabase } from '../lib/supabaseClient';
export default async function fetchProducts() {
    try {
      console.log('Fetching categories...');
      const { data, error } = await supabase
        .from('category') // Ensure this matches your Supabase table name skdfj 
        .select('*'); // Fetch all columns

      if (error) {
        console.error('Error fetching categories:', error.message);
        setError(error.message);
        return;
      }

      console.log('Fetched data:', data);
     return data;
    } catch (err) {
      console.error('Unexpected error:', err);
      setError('An unexpected error occurred.');
    }
  }