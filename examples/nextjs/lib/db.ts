import { createSupabaseClient } from '@supabase/auth-helpers-nextjs';

const { supabaseClient } = createSupabaseClient();

export { supabaseClient };
