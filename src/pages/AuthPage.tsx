
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

type Mode = "login" | "register" | "reset";

export default function AuthPage() {
  const [mode, setMode] = useState<Mode>("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage(null);
    setLoading(true);

    if (mode === "register") {
      // Register
      const { data: regRes, error: regErr } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: { full_name: fullName },
        },
      });
      if (regErr) {
        setMessage(regErr.message);
        setLoading(false);
        return;
      }
      // Make mrwilliamchui@gmail.com an admin automatically
      if (email.toLowerCase() === "mrwilliamchui@gmail.com") {
        await supabase.rpc("grant_admin_role", { email });
      } else {
        // Insert default role for registered users
        try {
          const user = regRes.user;
          if (user) {
            await supabase.from("user_roles").insert([{ user_id: user.id, role: "business_owner" }]);
          }
        } catch {}
      }
      setMessage("Registration complete! Check your email for verification.");
    } else if (mode === "login") {
      // Login
      const { error } = await supabase.auth.signInWithPassword({ email, password });
      if (error) setMessage(error.message);
      else {
        setMessage(null);
        navigate("/dashboard");
      }
    } else if (mode === "reset") {
      // Password reset
      const { error } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: window.location.origin + "/auth",
      });
      if (error) setMessage(error.message);
      else setMessage("Reset email sent. Please check your inbox.");
    }

    setLoading(false);
  };

  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-gray-50">
      <form className="bg-white shadow-md rounded px-8 pt-8 pb-6 w-full max-w-md" onSubmit={handleSubmit}>
        <h2 className="text-2xl font-bold text-center mb-4">
          {mode === "login" ? "Sign In" : mode === "register" ? "Register" : "Reset Password"}
        </h2>
        {mode === "register" && (
          <div>
            <label className="block mb-2">Full Name</label>
            <Input
              type="text"
              value={fullName}
              onChange={e => setFullName(e.target.value)}
              placeholder="John Chikwenengere"
              required
            />
          </div>
        )}
        <div className="mt-2">
          <label className="block mb-2">Email</label>
          <Input
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="you@example.com"
            required
          />
        </div>
        {(mode !== "reset") && (
          <div className="mt-2">
            <label className="block mb-2">Password</label>
            <Input
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              placeholder="********"
              minLength={6}
              required
            />
          </div>
        )}
        {message && <div className="mt-2 text-center text-sm text-red-600">{message}</div>}
        <Button type="submit" className="w-full mt-5" disabled={loading}>
          {mode === "login" ? "Sign In" : mode === "register" ? "Register" : "Send Reset Email"}
        </Button>
        <div className="mt-4 flex justify-between gap-2 text-sm">
          {mode !== "login" && (
            <button type="button" className="underline" onClick={() => setMode("login")}>Sign In</button>
          )}
          {mode !== "register" && (
            <button type="button" className="underline" onClick={() => setMode("register")}>Register</button>
          )}
          {mode !== "reset" && (
            <button type="button" className="underline" onClick={() => setMode("reset")}>Forgot Password?</button>
          )}
        </div>
      </form>
    </div>
  );
}
