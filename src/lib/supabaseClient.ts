import { createClient } from '@supabase/supabase-js';

// Provide default values to prevent URL construction errors during development
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'http://localhost:54321';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZS1kZW1vIiwicm9sZSI6ImFub24iLCJleHAiOjE5ODM4MTI5OTZ9.CRXP1A7WOeoJeXxjNni43kdQwgnWNReilDMblYTn_I0';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Add a connection check that provides helpful feedback
// supabase.auth.getSession().then(({ data: { session } }) => {
//   if (session) {
//     console.log('Supabase connection successful');
//   } else {
//     console.info('Please click the "Connect to Supabase" button to set up your database connection.');
//   }
// }).catch((error) => {
//   console.warn('Supabase connection not configured:', error.message);
//   console.info('Please click the "Connect to Supabase" button to set up your database connection.');
// });