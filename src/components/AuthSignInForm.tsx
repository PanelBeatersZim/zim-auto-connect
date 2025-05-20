
import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import PasswordInput from "./PasswordInput";
import { useNavigate } from "react-router-dom";

export default function AuthSignInForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setSubmitting(true);
    try {
      const { error: loginErr } = await supabase.auth.signInWithPassword({ email, password });
      if (loginErr) throw new Error(loginErr.message);
      navigate("/dashboard");
    } catch (err: any) {
      setError(err.message);
    }
    setSubmitting(false);
  }

  return (
    <form onSubmit={handleSubmit} className="p-5 bg-white rounded shadow max-w-sm mx-auto space-y-2" aria-labelledby="signin-title">
      <h2 id="signin-title" className="text-xl font-bold mb-2">Sign In</h2>
      <div>
        <label htmlFor="signin-email" className="block font-medium mb-1">Email</label>
        <input
          id="signin-email"
          type="email"
          className="w-full px-3 py-2 rounded border border-gray-300 focus:ring-2 focus:ring-primary"
          value={email}
          required
          onChange={e => setEmail(e.target.value)}
        />
      </div>
      <PasswordInput
        label="Password"
        id="signin-pass"
        value={password}
        onChange={e => setPassword(e.target.value)}
        required
      />
      {error && <div className="text-red-500 text-sm">{error}</div>}
      <button
        type="submit"
        className="w-full bg-primary text-white py-2 rounded font-semibold mt-3 disabled:opacity-50"
        disabled={submitting}
      >
        {submitting ? "Signing In..." : "Sign In"}
      </button>
    </form>
  );
}
