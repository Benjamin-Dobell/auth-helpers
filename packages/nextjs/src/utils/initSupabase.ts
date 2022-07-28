import { createClient } from '@supabase/supabase-js';

const getClientWithEnvCheck = (
  supabaseUrl: string | undefined = process.env.NEXT_PUBLIC_SUPABASE_URL,
  supabaseAnonKey: string | undefined = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
) => {
  if (!supabaseUrl || !supabaseAnonKey) {
    throw new Error(
      'supabaseUrl and supabaseAnonKey env variables are required!'
    );
  }
  return createClient(supabaseUrl, supabaseAnonKey, {
    autoRefreshToken: false,
    persistSession: false
  });
};

export { getClientWithEnvCheck };
