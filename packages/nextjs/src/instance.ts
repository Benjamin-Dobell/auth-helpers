import { getClientWithEnvCheck } from './utils/initSupabase';
export { SupabaseClient } from '@supabase/supabase-js';

let supabaseUrl: string | undefined;
let supabaseAnonKey: string | undefined;

export const createSupabaseClient = (url?: string, anonKey?: string) => {
  if (!supabaseUrl || !supabaseAnonKey) {
    supabaseUrl = url;
    supabaseAnonKey = anonKey;
  }

  return {
    apiInfo: { supabaseUrl, supabaseAnonKey },
    supabaseClient: (function () {
      return getClientWithEnvCheck(supabaseUrl, supabaseAnonKey);
    })()
  };
};
