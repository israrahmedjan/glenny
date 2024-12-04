import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL; // Set in .env.local
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY; // Set in .env.local

export const supabase = createClient(supabaseUrl, supabaseKey);
