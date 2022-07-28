// Types
export type { User } from '@supabase/supabase-js';

// Methods
export * from './handlers';
export { default as getUser } from './utils/getUser';
export { getProviderToken } from './utils/getProviderToken';
export { default as withPageAuth } from './utils/withPageAuth';
export { default as withApiAuth } from './utils/withApiAuth';
export { default as supabaseServerClient } from './utils/supabaseServerClient';
export { createSupabaseClient, SupabaseClient } from './instance';
export { default as logger } from './utils/log';
