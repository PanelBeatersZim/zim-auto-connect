// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://tejultjqvnweuofnvikg.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRlanVsdGpxdm53ZXVvZm52aWtnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDc2NTcwMTIsImV4cCI6MjA2MzIzMzAxMn0.MdvuFegCvD0LX5CFtRhYU8QrkvShE2xEwWhWqsClfIM";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);