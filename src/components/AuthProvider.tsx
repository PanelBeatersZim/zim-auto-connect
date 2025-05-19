
import React, { useState, useEffect, useContext, createContext } from "react";
import { supabase } from "@/integrations/supabase/client";
import type { User, Session } from "@supabase/supabase-js";

interface AuthContextValue {
  user: User | null;
  session: Session | null;
  userRole: string | null;
  loading: boolean;
  refreshProfile: () => Promise<void>;
}

const AuthContext = createContext<AuthContextValue>({
  user: null,
  session: null,
  userRole: null,
  loading: true,
  refreshProfile: async () => {},
});

export function useAuth() {
  return useContext(AuthContext);
}

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [userRole, setUserRole] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  // Load profile & roles
  const refreshProfile = async () => {
    setLoading(true);
    if (!user) {
      setUserRole(null);
      setLoading(false);
      return;
    }
    // Fetch user role (admin, business_owner, visitor)
    const { data, error } = await supabase
      .from("user_roles")
      .select("role")
      .eq("user_id", user.id);
    if (error) {
      setUserRole(null);
    } else {
      const found = data?.map((r: any) => r.role) ?? [];
      setUserRole(found.includes('admin') ? "admin" : found[0] || "visitor");
    }
    setLoading(false);
  };

  useEffect(() => {
    // listen to auth state
    const { data: listener } = supabase.auth.onAuthStateChange((event, session) => {
      setSession(session);
      setUser(session?.user || null);
      if (session?.user) {
        setTimeout(() => {
          refreshProfile();
        }, 0);
      } else {
        setUserRole(null);
        setLoading(false);
      }
    });
    // initial session load
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setUser(session?.user ?? null);
      if (session?.user) {
        refreshProfile();
      } else {
        setUserRole(null);
        setLoading(false);
      }
    });

    return () => listener?.subscription.unsubscribe();
    // eslint-disable-next-line
  }, []);

  return (
    <AuthContext.Provider value={{ user, session, userRole, loading, refreshProfile }}>
      {children}
    </AuthContext.Provider>
  );
};
